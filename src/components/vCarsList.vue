<template>
  <section id="cars-cards">
    <div class="container">
      <div class="cars-list">
        <v-car
          v-for="(car, idx) in cars"
          :key="idx"
          :car="car"
          :zoom="false"
        ></v-car>
      </div>
      <button
        v-if="carsView == cars.length"
        @click.prevent="showMore()"
        class="show-more"
      >
        Показать еще
      </button>
    </div>
  </section>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import vCar from '@/components/vCar';
export default {
  components: { vCar },
  props: ['model'],
  setup(props) {
    const store = useStore();
    if (props.model) {
      store.dispatch('GET_FILTERS', {
        mark: props.model.includes('ВАЗ')
          ? props.model.replaceAll('-', ' ')
          : props.model,
        compl: store.getters.FILTERS.compl,
        carsView: store.getters.FILTERS.carsView,
      });
    }
    const carsView = computed(() => store.getters.FILTERS.carsView);
    const cars = computed(() =>
      store.getters.FILTERED_CARS.filter(
        (item, index) => index < store.getters.FILTERS.carsView
      )
    );
    const showMore = () =>
      store.dispatch('GET_FILTERS', {
        mark: store.getters.FILTERS.mark,
        model: store.getters.FILTERS.model,
        compl: store.getters.FILTERS.compl,
        kpp: store.getters.FILTERS.kpp,
        sorted: store.getters.FILTERS.sorted,
        carsView: store.getters.FILTERS.carsView + 6,
      });
    return {
      cars,
      carsView,
      showMore,
    };
  },
};
</script>

<style lang="sass">
.cars-list
	display: flex
	flex-wrap: wrap
	justify-content: center
.show-more
	cursor: pointer
	border: none
	padding: 10px 20px
	margin-left: auto
	margin-right: auto
	font-size: 16px
	border-radius: 8px
	margin-top: 20px
	background-color: #f3f3f3
	transition: .3s ease
	&:hover
		background-color: $silver
</style>
