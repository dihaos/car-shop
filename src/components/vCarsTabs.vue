<template>
  <section id="cars">
    <div class="container">
      <h2>Каталог авто</h2>
      <div class="cars__wrapper">
        <h3>Выберите марку</h3>

        <swiper
          :spaceBetween="0"
          :navigation="true"
          :slidesPerView="'auto'"
          class="cars__marks"
        >
          <swiper-slide v-for="(car, index) in marks" :key="car">
            <div
              :class="[mark === car ? 'active' : '', 'cars__mark']"
              @click.prevent="goTo(car.replaceAll(' ', '-'))"
              v-show="index < showMarks"
            >
              <img :src="require(`@/assets/images/marks/${car}.png`)" />
            </div>
          </swiper-slide>
        </swiper>

        <!-- <div class="cars__tabs">
          <div
            :class="[mark === car ? 'active' : '', 'cars__tab']"
            v-for="(car, index) in marks"
            :key="car"
            @click.prevent="changeTab(car)"
            v-show="index < showMarks"
          >
            <img :src="require(`@/assets/images/marks/${car}.png`)" />
            <span class="cars__mark">{{ car }}</span>
            <span class="cars__count">({{ carCount(car) }})</span>
          </div>
        </div>
        <button
          class="cars__tabs--btn"
          @click.prevent="
            showMarks === marks.length
              ? (showMarks = 15)
              : (showMarks = marks.length)
          "
        >
          {{ showMarks === marks.length ? 'Скрыть' : 'Показать все бренды' }}
        </button> -->
      </div>
    </div>
  </section>
</template>

<script>
import { useStore } from 'vuex';
import { computed, defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);
export default defineComponent({
  components: { Swiper, SwiperSlide },
  setup() {
    const store = useStore();
    const router = useRouter();
    const models = computed(() => store.getters.MODELS);
    const marks = computed(() => store.getters.MARKS);
    const mark = computed(() => store.getters.FILTERS.mark);
    const showMarks = ref(15);
    const carCount = (id) => {
      const cars = computed(() => store.getters.CARS);
      return cars.value.filter((car) => car.mark_id === id).length;
    };
    const scrollTo = (id) => {
      var element = document.getElementById(id);
      var headerOffset = 75;
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    };
    const changeTab = (str) => {
      store.dispatch('GET_FILTERS', {
        mark: str,
        compl: '',
        model: '',
        kpp: '',
      });
      scrollTo('cars-cards');
    };

    const goTo = (id) => {
      router.push('/' + id);
      store.dispatch('GET_FILTERS', {
        mark: id,
        compl: '',
        model: '',
        kpp: '',
      });
      scrollTo('cars-cards');
    };

    return {
      models,
      mark,
      goTo,
      changeTab,
      marks,
      carCount,
      showMarks,
    };
  },
});
</script>

<style lang="sass">
#cars
	margin-top: 40px
	h2
		font-size: 64px
		font-weight: bold
		border-bottom: 1px solid $light
		text-align: center
	h3
		font-size: 24px
		line-height: 1.2
		text-align: center
.cars__tabs--btn
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
.cars__mark
	display: block !important
	cursor: pointer
	position: relative
	z-index: 1
	transition: all .3s cubic-bezier(1,1,.44,.92)
	img
		display: block
		max-width: 100%
		height: auto
	&:after
		content: ''
		position: absolute
		left: -15px
		top: -15px
		width: calc(100% + 30px)
		height: calc(100% + 30px)
		background-color: #8d080021
		z-index: -2
		border-radius: 15px
		display: block
		overflow: hidden
		opacity: 0
		transition: all .3s cubic-bezier(1,1,.44,.92)
		box-shadow: 0 0 10px 0px rgba(0,0,0, .1)
	&:hover
		&:after
			z-index: -1
	&:hover,
	&.active
		transform: scale(1.2)
		&:after
			opacity: 1
.cars__marks
	user-select: none
	.swiper-slide
		width: 70px
		height: 70px
		margin: 40px 55px
	.swiper-button-next
		right: 0
		width: 15px
		height: 30px
		&:after
			font-size: 30px
	.swiper-button-prev
		left: 0px
		width: 15px
		height: 30px
		&:after
			font-size: 30px
.cars__tabs
	margin-top: 20px
	display: grid
	gap: 20px
	grid-template-columns: repeat(5, 1fr)
.cars__count
	color: silver
.cars__wrapper
	background-color: #f5f5f5
	border-radius: 15px 15px 0 0
	padding: 20px 40px
	margin-top: 20px
.cars__mark
	margin-right: auto
	display: block
.cars__tab
	display: flex
	align-items: center
	border-bottom: 1px solid $light
	padding: 5px
	cursor: pointer
	justify-content: space-between
	transition: all .3s cubic-bezier(1,1,.44,.92)
	img
		display: block
		max-width: 24px
		max-height: 24px
	&.active
		border-color: $accent
		background-color: $accent
		color: #fff
		transform: scale(1.2)
	&:hover
		border-color: $accent
		background-color: $accent
		color: #fff
		transform: scale(1.2)
	span
		display: block
		margin-left: 15px
@include md-desktop
	#cars
		margin-top: 40px
	.cars__tabs
		grid-template-columns: repeat(3, 1fr)
	.cars__tabs--btn
		margin-right: auto

@include sm-tablets
	.cars__tabs
		grid-template-columns: repeat(2, 1fr)
		gap: 10px
	.cars__wrapper
		padding: 20px 0px
</style>
