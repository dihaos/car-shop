<template>
  <div class="carFull">
    <div class="carFull-left">
      <div class="carFull__gallery">
        <div id="mainCarousel" class="carousel w-10/12 max-w-5xl mx-auto">
          <div
            v-for="(image, idx) in car.images"
            :key="idx"
            class="carousel__slide"
            :data-src="image"
            data-fancybox="gallery"
          >
            <img :src="image" />
          </div>
        </div>

        <div id="thumbCarousel" class="carousel max-w-xl mx-auto">
          <div
            class="carousel__slide"
            v-for="(image, idx) in car.images"
            :key="idx"
          >
            <img class="panzoom__content" :src="image" />
          </div>
        </div>
      </div>
    </div>
    <div class="carFull-right">
      <div class="carFull__title">
        {{ car.mark_id }} {{ car.model }}, {{ car.year }}
        <div v-if="+car.price" class="carFull__price">
          <p>{{ (+car.price).toLocaleString() }} руб.</p>
        </div>
      </div>

      <ul class="carFull-info">
        <li>
          <span>Год выпуска</span> <b>{{ car.year }}</b>
        </li>
        <li>
          <span>Пробег</span> <b>{{ (+car.run).toLocaleString() }} км</b>
        </li>
        <li>
          <span>Количество владельцев</span> <b>{{ car.owners_number }}</b>
        </li>
        <li>
          <span>ПТС</span> <b>{{ car.pts }}</b>
        </li>

        <li>
          <span>Кузов</span> <b>{{ car.body_type }}</b>
        </li>
        <li>
          <span>Цвет</span> <b>{{ car.color }}</b>
        </li>
        <li>
          <span>Двигатель</span> <b>{{ car.modification_id }}</b>
        </li>
        <li>
          <span>КПП</span> <b>{{ car.kpp }}</b>
        </li>
        <li>
          <span>Привод</span> <b>{{ car.privod }}</b>
        </li>
      </ul>
      <ul class="carFull-params">
        <li>
          <mdicon name="map-marker-radius" />
          <div>
            <span class="carFull-params__label">Адрес</span>
            г. Москва, Новоясеневский проспект 6
          </div>
        </li>
        <li>
          <mdicon name="phone" />
          <div>
            <v-phone></v-phone>
          </div>
        </li>
      </ul>

      <div class="carFull-buttons">
        <button class="btn" @click.prevent="show = true">
          <mdicon name="phone-plus" /> Получить консультацию
        </button>
        <button class="btn btn-black" @click.prevent="show = true">
          <mdicon name="percent" /> В кредит от 5%
        </button>
      </div>
    </div>
  </div>
  <!-- <div class="carFull__description" v-if="car.description">
    <h2>Описание</h2>
    <p>{{ car.description }}</p>
  </div> -->
  <!-- <div class="carFull__compl" v-if="extras.length">
    <h2>Комплектация автомобиля</h2>    
    <ul>
      <li v-for="(txt, idx) in extras" :key="idx" v-show="txt">
        <p>{{ txt }}</p>
      </li>
    </ul>
  </div> -->

  <modal-callback
    v-model="show"
    @confirm="confirm"
    @cancel="cancel"
    :is-sended="isSended"
  >
    <template v-slot:title>Получить консультацию</template>
  </modal-callback>
</template>

<script>
import { ref, onMounted } from "vue";
import vPhone from "@/components/vPhone";
import modalCallback from "@/components/modalCallback";
import { Fancybox, Carousel } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

// import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';
// import 'swiper/modules/effect-fade/effect-fade.min.css';
// import 'swiper/modules/lazy/lazy.min.css';
// import 'swiper/modules/zoom/zoom.min.css';
// import 'swiper/modules/navigation/navigation.min.css';
// import 'swiper/modules/thumbs/thumbs.min.css';
// import SwiperCore, { Zoom, EffectFade, Lazy, Navigation, Thumbs } from 'swiper';
// SwiperCore.use([Zoom, Lazy, Navigation, Thumbs, EffectFade]);

export default {
  // components: { modalCallback, Swiper, SwiperSlide, vPhone },
  components: { modalCallback, vPhone },
  props: ["car"],
  setup() {
    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };
    const show = ref(false);
    const isSended = ref(false);
    const confirm = () => {
      show.value = false;
    };
    const cancel = (close) => {
      close();
    };
    const sended = () => {
      isSended.value = true;
      show.value = true;
      setTimeout(() => {
        show.value = false;
        isSended.value = false;
      }, 2000);
    };
    // const extras = computed(() =>
    //   props.car.extras.split ? props.car.extras.split(',') : []
    // );

    // Initialise Carousel
    onMounted(() => {
      const mainCarousel = new Carousel(
        document.querySelector("#mainCarousel"),
        {
          Dots: false,
        }
      );

      // Thumbnails
      new Carousel(document.querySelector("#thumbCarousel"), {
        Sync: {
          target: mainCarousel,
          friction: 0,
        },
        Dots: false,
        Navigation: false,
        center: true,
        slidesPerPage: 1,
        infinite: false,
      });

      // Customize Fancybox
      Fancybox.bind('[data-fancybox="gallery"]', {
        Carousel: {
          on: {
            change: (that) => {
              mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
                friction: 0,
              });
            },
          },
        },
      });
    });

    return {
      show,
      isSended,
      confirm,
      cancel,
      sended,
      setThumbsSwiper,
      thumbsSwiper,
      // extras,
    };
  },
};
</script>

<style lang="sass">
#mainCarousel
	width: 100%
	margin: 0 auto 1rem auto
	--carousel-button-color: #170724
	--carousel-button-bg: #fff
	--carousel-button-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%)
	--carousel-button-svg-width: 20px
	--carousel-button-svg-height: 20px
	--carousel-button-svg-stroke-width: 2.5
#mainCarousel .carousel__slide
	width: 100%
	padding: 0
	max-height: 543px
	img
		display: block
		width: 100%
		height: 100%
		object-fit: cover
		margin-left: auto
		margin-right: auto
		object-position: center center
#mainCarousel .carousel__button.is-prev
	left: -1.5rem
#mainCarousel .carousel__button.is-next
	right: -1.5rem
#mainCarousel .carousel__button:focus
	outline: none
	box-shadow: none
#thumbCarousel .carousel__slide
	opacity: 0.5
	padding: 0
	margin: 0.25rem
	width: 96px
	height: 64px
	overflow: hidden
#thumbCarousel .carousel__slide img
	width: 100%
	height: 100%
	object-fit: cover
	border-radius: 4px

#thumbCarousel .carousel__slide.is-nav-selected
	opacity: 1
.carFull
	display: flex
	justify-content: space-between
	margin-top: 50px
	h1
		font-size: 36px
		margin-bottom: 20px
.carFull-left
	width: 63%
.carFull-right
	width: 35%
.carFull__title
	color: $black
	font-weight: 700
	margin: 0
	font-size: 26px
	line-height: 1.2
	background-color: #e9e9e9
	padding: 20px
.carFull__price
	font-weight: bold
	color: $accent
	font-size: 36px
	line-height: 1.4
	margin-top: 10px
.carFull__gallery
	user-select: none
.carFull-wrapper
	width: 100%
	background-color: #f0f0f0
	padding: 20px 40px
	border-bottom-left-radius: 8px
	border-bottom-right-radius: 8px
.carFull-form__tilte
	font-weight: bold
	font-size: 24px
	line-height: 1.4
	text-align: center
	text-transform: uppercase
	color: $accent
	p
		text-transform: none
		color: $grey
		font-size: 18px
		font-weight: normal
.carFull-form
	margin: 20px 0
	.input-block
		margin-bottom: 15px
	.checkbox_wrapper
		margin-top: 15px
.carFull-location
	display: flex
	align-items: center
	color: $grey
	font-size: 16px
	.mdi
		margin-right: 10px
.carFull-params
	display: flex
	justify-content: space-between
	flex-wrap: wrap
	li
		display: flex
		align-items: center
		width: 100%
		font-size: 14px
		line-height: 1.2
		margin: 5px 0
		.mdi
			margin-right: 10px
			color: $silver
		a
			font-weight: bold
			text-decoration: none
			font-size: 16px
			line-height: 1.4
.carFull-params__label
	font-size: 12px
	color: $silver
	display: block
.carFull-buttons
	// display: flex
	// align-items: center
	// justify-content: space-between
	text-align: center
	.btn
		cursor: pointer
		width: 100%
		max-width: 340px

		margin-bottom: 10px
.carFull-info
	margin: 20px 0
	display: flex
	list-style-type: none
	flex-wrap: wrap
	li
		width: 100%
		padding-right: 20px
		padding: 10px 20px
		color: $silver
		font-size: 12px
		display: flex
		align-items: center
		border-bottom: 1px solid #f0f0f0
		&:last-child
			border-bottom: 0px
		span
			width: 150px
		b
			color: $dark
			font-size: 16px
			display: block
			margin-left: auto
			font-weight: 400
.complInfo-item
	margin-top: 20px
	&.active
		.complInfo-item__title
			color: $dark
		.mdi.mdi-arrow-down-drop-circle
			transform: rotate(180deg)
.complInfo-item__title
	display: block
	cursor: pointer
	width: 100%
	font-weight: bold
	padding: 20px
	background-color: #f0f0f0
	border-radius: 8px
	font-size: 18px
	text-transform: uppercase
	display: flex
	justify-content: space-between
	align-items: center
	color: $grey
	user-select: none
	transition: .3s ease
	.mdi
		color: $silver
		transition: .2s ease-in-out
	&:hover
		.mdi
			color: $grey
.complInfo-item__list
	padding: 20px
	ul
		column-count: 2
	li
		list-style-type: none
		break-inside: avoid-column
		width: 100%
		padding: 15px 0
		position: relative
		display: flex
		align-items: center
		&::before
			content: ''
			display: block
			min-width: 5px
			min-height: 5px
			width: 5px
			height: 5px
			border-radius: 50%
			background-color: $accent
			margin-right: 8px
.carFull-complInfo
	h2
		margin-bottom: 50px
.carFull-right__actions
	display: flex
	font-size: 12px
	align-items: center
	justify-content: space-between
	color: $grey
	background: $silver
	border-top-right-radius: 8px
	border-top-left-radius: 8px
	overflow: hidden
	p:first-child
		color: $accent
		background-color: $light
	p
		padding: 10px
		width: 100%
	.mdi
		margin-right: 5px
.carFull__compl
	margin-top: 80px
	margin-bottom: 80px
	ul
		display: grid
		list-style-type: none
		margin-top: 20px
		grid-template-columns: repeat(4, 1fr)
		li
			padding: 10px
			background-color: $dark
			color: #fff
			margin: 4px
			display: flex
			align-items: center
			justify-content: center
			text-align: center
			border-radius: 6px
	p
		line-height: 1.4
		margin: 0
		font-size: 14px
.carFull__description
	margin-top: 80px

	p
		margin-top: 20px
		line-height: 1.4
@include lg-desktop
	.carFull
		flex-wrap: wrap
	.carFull-right
		margin-left: auto
		margin-right: auto
		margin-bottom: 30px
@include sm-tablets
	#mainCarousel .carousel__slide
		max-height: 300px
	.carFull-buttons
		flex-wrap: wrap
		justify-content: center
		.btn
			margin-bottom: 15px
	.carFull-params
		flex-wrap: wrap
		li
			margin-bottom: 15px
	.carFull h1
		font-size: 24px
	.carFull
		margin-top: 30px
	.carFull-info li
		width: 100%
	.carFull-info li span
		min-width: 130px
		width: 130px
	.complInfo-item__list ul
		column-count: 1
	.carFull-wrapper
		padding: 40px 15px
	.carFull-right
		width: 100%
		margin-top: 30px
	.carFull-right__actions
		font-size: 10px
	.carFull-left
		width: 100%
	.carFull__compl ul
		grid-template-columns: repeat(2,1fr )
</style>
