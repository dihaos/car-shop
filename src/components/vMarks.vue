<template>
  <section id="marks">
    <div class="container">
      <h2>
        БОЛЬШОЙ ВЫБОР АВТОМОБИЛЕЙ С ПРОБЕГОМ<br /><span class="accent"
          >В ОТЛИЧНОМ СОСТОЯНИИ</span
        >
      </h2>
      <h3 class="marks__subtitle accent">
        *ВСЕ АВТОМОБИЛИ ДИАГНОСТИРУЮТСЯ НА НАШЕМ <br />ПРОФЕССИОНАЛЬНОМ СЕРВИСЕ
      </h3>

      <div class="marks__wrapper">
        <swiper
          :spaceBetween="0"
          :navigation="true"
          :slidesPerView="'auto'"
          class="marks__items"
        >
          <swiper-slide v-for="car in marks" :key="car">
            <div class="marks__item">
              <img :src="require(`@/assets/images/marks/${car}.png`)" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { useStore } from 'vuex';
import { computed, defineComponent } from 'vue';
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
    const marks = computed(() => store.getters.VYKUP_MARKS);
    return {
      marks,
    };
  },
});
</script>

<style lang="sass">
#marks
	margin-top: 40px
	h2
		font-size: 36px
		font-weight: bold
		text-align: center

	h3
		font-size: 18px
		line-height: 1.2
		text-align: center
		border-bottom: 1px solid $light
		margin-top: 10px
		padding: 10px 0
.marks__subtitle
	background-color: #fff686

.marks__item
	display: block !important
	cursor: pointer
	position: relative
	z-index: 1
	img
		display: block
		max-width: 100%
		height: auto
.marks__items
	user-select: none
	.swiper-slide
		width: 67px
		height: 67px
		margin-left: 45px
		display: flex
		align-items: center
		justify-content: center
		&.swiper-button-disabled
			display: none
	.swiper-button-next
		right: 0
		width: 45px
		padding-left: 15px
		padding-right: 15px
		height: 100%
		background-color: #fff
		top: auto
		bottom: 0
		display: flex
		align-items: center
		&:after
			font-size: 30px
		&.swiper-button-disabled
			display: none
	.swiper-button-prev
		left: 0px
		width: 45px
		padding-left: 15px
		padding-right: 15px
		height: 100%
		background-color: #fff
		top: auto
		bottom: 0
		display: flex
		align-items: center
		&:after
			font-size: 30px
		&.swiper-button-disabled
			display: none
.marks__tabs
	margin-top: 20px
	display: grid
	gap: 20px
	grid-template-columns: repeat(5, 1fr)
.marks__count
	color: silver
.marks__wrapper
	margin-top: 40px
.marks__item
	margin-right: auto
	display: block
@include md-desktop
	#marks
		margin-top: 40px
		h2
			font-size: 20px
		h3
			font-size: 12px
	.marks__items
		.swiper-slide
			width: 53px
			height: 53px
</style>
