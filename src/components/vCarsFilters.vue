<template>
  <div id="cars-filters">
    <div class="container">
      <div class="filters__wrapper">
        <h3>
          Подобрать {{ usedCars ? "б/у" : "новый" }} автомобиль по параметрам
        </h3>
        <div class="filters-wrap">
          <v-select
            :options="marks"
            placeholder="Выберите марку"
            v-model="markModel"
          ></v-select>
          <v-select
            :options="models"
            placeholder="Выберите модель"
            v-model="modelModel"
          ></v-select>
          <!-- <select
          name="compls"
          id="compls"
          v-model="complModel"
          class="filters-item filters-select"
          @change="filterActiveCars"
        >
          <option value="">Выберите комплектацию</option>
          <option :value="compl" v-for="compl in compls" :key="compl">
            {{ compl }}
          </option>
        </select> -->
          <div class="select_wrapper">
            <div class="select" @click.prevent="dropdown = !dropdown">
              <div class="select__placeholder">Цена</div>
            </div>
            <div
              :class="[dropdown ? 'open' : '', 'select__dropdown', 'dropdown']"
              v-click-outside="clickOut"
            >
              <div class="dropdown__range">
                <slider
                  class="slider"
                  :min="min"
                  :max="max"
                  :step="1000"
                  v-model="prices"
                  :tooltips="false"
                  @update="updateSelect"
                >
                </slider>
              </div>
              <div class="dropdown__inputs">
                <div class="dropdown__input">
                  <div class="dropdown__input-label">Мин. цена</div>
                  <input
                    type="number"
                    v-model="priceFromModel"
                    @change="updateSlider"
                  />
                </div>
                —
                <div class="dropdown__input">
                  <div class="dropdown__input-label">Макс. цена</div>
                  <input
                    type="number"
                    v-model="priceToModel"
                    @change="updateSlider"
                  />
                </div>
              </div>
              <div class="dropdown__button">
                <button @click="updateSlider, (dropdown = false)">
                  Применить
                </button>
              </div>
            </div>
          </div>

          <!-- <select
            name="priceFrom"
            id="priceFrom"
            v-model="priceFromModel"
            class="filters-item filters-select"
            @change="filterActiveCars"
          >
            <option value="100000">Цена от</option>
            <option
              v-for="val in createArrPrice().min"
              :key="val"
              :value="val"
              v-show="val < priceToModel"
            >
              {{ val.toLocaleString() }}
            </option>
          </select> -->

          <!-- <select
            name="priceTo"
            id="priceTo"
            v-model="priceToModel"
            class="filters-item filters-select"
            @change="filterActiveCars"
          >
            <option value="9999999">Цена до</option>
            <option
              v-for="val in createArrPrice().max"
              :key="val"
              :value="val"
              v-show="val > priceFromModel"
            >
              {{ val.toLocaleString() }}
            </option>
          </select> -->
          <select
            name="kpp"
            id="kpp"
            v-model="kppModel"
            class="filters-item filters-select"
            @change="filterActiveCars"
          >
            <option value="">Выберите КПП</option>
            <option value="Механическая">Механическая</option>
            <option value="Автомат">Автомат</option>
            <option value="Автомат робот">Автомат робот</option>
            <option value="Автомат вариатор">Автомат вариатор</option>
          </select>

          <select
            name="sort"
            id="sort"
            v-model="sortModel"
            class="filters-item filters-select"
            @change="filterActiveCars"
          >
            <option value="">Сортировать</option>
            <option value="asc">По возрастанию цены</option>
            <option value="desc">По убыванию цены</option>
          </select>
          <!-- <div class="filters-item filters-available">
          {{ cars.length }} авто в наличии
        </div> -->
        </div>
        <!-- <button
          class="cars-filters--btn"
          @click.prevent="scrollTo('cars-cards')"
        >
          {{
            cars.length ? `Показать ${cars.length} авто` : 'Ничего не найдео'
          }}
        </button> -->
        <span
          class="filter__refresh"
          @click.prevent="refreshFilter"
          v-if="complModel || kppModel || modelModel || markModel"
          >Сбросить фильтр</span
        >
      </div>
    </div>
  </div>
  <p v-if="!cars.length" class="not-found">
    Автомобили не найдены.
    <span @click.prevent="refreshFilter">Сбросить фильтр</span>
  </p>
</template>

<script>
import { useStore } from "vuex";
import { computed, reactive, ref, watch } from "vue";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Slider from "@vueform/slider";
import "@vueform/slider/themes/default.css";
import { useRoute } from "vue-router";
export default {
  components: { vSelect, Slider },
  setup() {
    const route = useRoute();
    const store = useStore();
    const cars = computed(() => store.getters.FILTERED_CARS);
    const activeCompl = computed(() => store.getters.FILTERS.compl);
    const activeKpp = computed(() => store.getters.FILTERS.kpp);
    const usedCars = computed(() => route.path === "/used-cars");
    const complModel = ref("");
    const kppModel = ref("");
    const activeModel = computed(() => store.getters.FILTERS.model);
    const modelModel = ref("");
    const markModel = ref("");

    const sortModel = ref("");
    const priceToModel = ref(9999999);
    const priceFromModel = ref(0);
    const priceToLimit = computed(() => store.getters.FILTERS.priceToLimit);
    const priceFromLimit = computed(() => store.getters.FILTERS.priceFromLimit);
    const activeCar = computed(() => store.getters.FILTERS.mark);
    const compls = computed(() => store.getters.COMPLS);
    const models = computed(() => store.getters.MODELS);
    const marks = computed(() => store.getters.MARKS);
    const prices = reactive([0, 9999999]);
    const max = ref(9999999);
    const min = ref(0);
    const dropdown = ref(false);
    priceToModel.value = priceToLimit.value;
    priceFromModel.value = priceFromLimit.value;
    max.value = priceToLimit.value;
    min.value = priceFromLimit.value;
    prices[0] = priceFromLimit.value;
    prices[1] = priceToLimit.value;

    // const createArrPrice = () => {
    //   let min;
    //   let max;
    //   for (
    //     let index = priceFromLimit.value;
    //     index < priceToLimit.value;
    //     index += 50000
    //   ) {
    //     min.push(index);
    //   }
    //   for (
    //     let index = priceToLimit.value;
    //     index > priceFromLimit.value;
    //     index -= 50000
    //   ) {
    //     max.push(index);
    //   }

    //   return {
    //     min,
    //     max,
    //   };
    // };
    const format = (value) => {
      return `${value}₽`;
    };
    watch(activeKpp, (activeKpp) => {
      if (activeKpp === "") kppModel.value = "";
    });
    watch(activeCompl, (activeCompl) => {
      if (activeCompl === "") complModel.value = "";
    });
    watch(activeModel, (activeModel) => {
      if (activeModel === "") modelModel.value = "";
    });
    watch(activeCar, (activeCar) => (markModel.value = activeCar));
    watch(markModel, () => filterActiveCars());
    watch(modelModel, () => filterActiveCars());
    const changeSlider = () => {
      filterActiveCars();
    };
    const filterActiveCars = () => {
      store.dispatch("GET_FILTERS", {
        mark: markModel.value,
        model: modelModel.value,
        kpp: kppModel.value,
        compl: complModel.value,
        priceFrom: priceFromModel.value,
        priceTo: priceToModel.value,
        sorted: sortModel.value,
      });
    };
    const refreshFilter = () => {
      store.dispatch("GET_FILTERS", {
        mark: "",
        model: "",
        compl: "",
        kpp: "",
        priceFrom: priceFromLimit.value,
        priceTo: priceToLimit.value,
        sorted: sortModel.value,
      });
      priceToModel.value = 9999999;
      priceFromModel.value = 100000;
    };
    const scrollTo = (id) => {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };
    const updateSlider = () => {
      if (priceFromModel.value < min.value) {
        prices[0] = min.value;
        priceFromModel.value = min.value;
      } else if (priceFromModel.value > max.value) {
        prices[0] = max.value;
        priceFromModel.value = max.value;
      } else {
        prices[0] = priceFromModel.value;
      }

      if (priceToModel.value > max.value) {
        prices[1] = max.value;
        priceToModel.value = max.value;
      } else if (priceToModel.value < min.value) {
        prices[1] = min.value;
        priceToModel.value = max.value;
      } else {
        prices[1] = priceToModel.value;
      }
      changeSlider();
    };
    updateSlider();
    const updateSelect = (val) => {
      priceFromModel.value = val[0];
      priceToModel.value = val[1];
      changeSlider();
    };
    const clickOut = (e) => {
      if (dropdown.value && !e.classList.value.includes("select")) {
        dropdown.value = false;
      }
    };
    return {
      clickOut,
      sortModel,
      scrollTo,
      cars,
      usedCars,
      prices,
      compls,
      format,
      marks,
      priceToModel,
      priceFromModel,
      complModel,
      kppModel,
      modelModel,
      markModel,
      refreshFilter,
      // createArrPrice,
      filterActiveCars,
      changeSlider,
      models,
      updateSelect,
      max,
      min,
      updateSlider,
      dropdown,
    };
  },
};
</script>
<style lang="sass">
.vs--open .vs__open-indicator
	transform: none
:root
	--vs-font-size: 14px
.vs__dropdown-toggle
	background-color: #fff
.vs__dropdown-menu
	font-size: 14px!important
.vs__selected
	font-size: 14px
.filter__refresh
	display: block
	text-align: right
	font-size: 14px
	color: #999
	margin-top: 15px
	cursor: pointer
	transition: .3s ease
	&:hover
		color: #000
.filters__wrapper
	background-color: #f5f5f5
	padding: 20px 40px
	h3
		font-size: 24px
		line-height: 1.2
		text-align: center
.filters-wrap
	display: grid
	gap: 20px
	grid-template-columns: repeat(5, 1fr)
	margin-top: 20px
.filters-item
	width: 100%
	margin: 0
.not-found
	font-size: 14px
	text-align: center
	margin-top: 40px
	color: $grey
	span
		cursor: pointer
		text-decoration: underline
.cars-filters--btn
	font-size: 14px
	text-transform: none
	margin-left: auto
	background-color: $accent
	color: #fff
	border: none
	outline: none
	padding: 10px 20px
	margin-top: 20px
	cursor: pointer
	transition: .3s ease
	&:hover
		background-color: $dark
.filters-available
	font-size: 14px
	color: $grey
	margin-left: auto
	text-align: right
.dropdown
	display: none
	&__button
		margin-top: 15px
		button
			background-color: $accent
			color: #fff
			border: none
			padding: 5px 10px
			margin-left: auto
			cursor: pointer
	&.open
		display: block
	&__inputs
		display: flex
		justify-content: space-between
		align-items: center
		margin-top: 20px
		input
			border: 0
			outline: none
			appearance: none
			outline: none
			line-height: 1em
			border: none
			border-bottom: 1px solid $silver
			font-size: 16px
			width: 100px
			padding: 5px 0
	&__input
		&-label
			font-size: 12px
			color: $grey
@include lg-desktop
	.filters-wrap
		gap: 10px
@include md-desktop
	.filters-wrap
		flex-direction: column
		margin-top: 40px
		display: flex
		justify-content: center
		align-items: center
		.v-select,
		.select_wrapper
			width: 290px
			margin-bottom: 10px

	.filters-available
		margin-left: auto
		margin-right: auto
		text-align: center
	.filters-item
		margin-bottom: 10px
		width: 290px
	.cars-filters--btn
		margin-right: auto
</style>
