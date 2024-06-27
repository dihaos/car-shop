<template>
  <div class="car">
    <div class="car-image">
      <!-- <img :src="car.imageLoad" :alt="car.model" /> -->
      <div class="car__modal" :class="modal ? 'active' : ''">
        <div class="car__modal-content">
          <div class="car__modal-close" v-if="modal" @click="closePhoto">
            <span></span>
            <span></span>
          </div>
          <img
            :class="activeImage === 0 ? 'active' : ''"
            v-lazy="car.images[0]"
            :alt="car.model"
          />
          <img
            :class="activeImage === 1 ? 'active' : ''"
            v-lazy="car.images[1]"
            :alt="car.model"
          />
          <img
            :class="activeImage === 2 ? 'active' : ''"
            v-lazy="car.images[2]"
            :alt="car.model"
          />
          <img
            :class="activeImage === 3 ? 'active' : ''"
            v-lazy="car.images[3]"
            :alt="car.model"
          />
          <div
            class="car-image--controls"
            @click="zoom ? openPhoto(car.images, activeImage) : goToCar(car)"
          >
            <span
              v-for="s in 4"
              :key="s"
              @mouseover="activeImage = s - 1"
              :class="activeImage === s - 1 ? 'active' : ''"
            ></span>
          </div>
        </div>
      </div>
    </div>
    <!-- <div
      :class="[
        'car-label',
        car.availability === 'В наличии' ? 'available' : '',
      ]"
    >
      {{ car.availability }}
    </div> -->
    <div class="car-content" @click.prevent="goToCar(car)">
      <div class="car-name">{{ car.mark_id }} {{ car.model }}</div>
      <div class="car-conf">
        {{ car.modification_id }}
      </div>

      <div class="car-info">
        Год: <strong>{{ car.year }}</strong>
      </div>
      <div class="car-info">
        Цвет кузова: <strong>{{ car.color }}</strong>
      </div>
      <div class="car-info">
        Пробег: <strong>{{ (+car.run).toLocaleString() }} км</strong>
      </div>
      <div class="car-info">
        КПП: <strong>{{ car.kpp }}</strong>
      </div>
      <div class="car-price">
        {{ (+car.price).toLocaleString() }} руб.
        <!-- <span v-if="+car.price"
        >Цена без скидки {{ (+car.price).toLocaleString() }} руб.</span
      > -->
      </div>
    </div>
    <!-- <div class="car-info">
      Дилерский центр:
      <strong>{{ car.contact }}</strong>
    </div> -->
    <div class="car-preview__btns">
      <button
        class="car-preview__btn"
        @click.prevent="(show = true), (id = car.id)"
      >
        Купить <br />со скидкой
      </button>
      <button class="car-preview__btn" @click.prevent="goToCar(car)">
        Подробнее <br />о модели
      </button>
    </div>
  </div>
  <modal-callback v-model="show" @confirm="confirm" @cancel="cancel" :id="id">
    <template v-slot:title>Перезвоним через 15 сек.</template>
  </modal-callback>
</template>

<script>
// import { useRouter } from 'vue-router';
import { ref } from 'vue';
import modalCallback from '@/components/modalCallback';
export default {
  components: { modalCallback },
  props: {
    car: Object,
    zoom: Boolean,
  },
  emits: ['open', 'close'],
  setup(props, { emit }) {
    const activeImage = ref(0);
    // const router = useRouter();
    const show = ref(false);
    const confirm = () => {
      show.value = false;
    };
    const modal = ref(false);
    const id = ref('');
    const openPhoto = (arr, idx) => {
      if (!props.zoom) return false;
      emit('open', { images: arr, active: idx });

      // modal.value = true;
      // setTimeout(() => {
      //   const modalBody = document.querySelector('.car__modal.active');
      //   modalBody.addEventListener('mouseup', (e) => {
      //     if (e.target === modalBody) {
      //       modal.value = false;
      //     }
      //   });
      // }, 100);
    };
    const closePhoto = () => {
      if (!props.zoom) return false;
      const modalBody = document.querySelector('.car__modal.active');
      const swiper =
        modalBody.parentNode.parentNode.parentNode.parentNode.parentNode;
      swiper.classList.remove('destroy');
      modal.value = false;
    };
    const cancel = (close) => {
      close();
    };
    const goToCar = (car) => {
      window.open(
        window.location.origin +
          '/' +
          car.mark_id.replaceAll(' ', '-') +
          '/' +
          car.id +
          '/' +
          window.location.search,
        '_blank'
      );
      // router.push({
      //   path: `/${car.model.replaceAll(' ', '-').toLowerCase()}/${car.id}/`,
      //   params: {
      //     model: car.model.replaceAll(' ', '-').toLowerCase(),
      //     id: car.id,
      //   },
      // });
    };
    return {
      goToCar,
      activeImage,
      show,
      confirm,
      cancel,
      modal,
      openPhoto,
      closePhoto,
      id,
    };
  },
};
</script>

<style lang="sass">
.car
	width: 30%
	margin: 1.5%
	transition: .3s ease
	display: flex
	flex-direction: column
	align-items: flex-start
	justify-content: space-between
	position: relative
	border-radius: 6px
	box-shadow: 0px 0px 30px rgb(133 147 159 / 30%)
	overflow: hidden
	&:hover
		border-color: $accent
.car-image
	width: 100%
	position: relative
	overflow: hidden
	height: 252px
	img
		display: block
		width: auto
		margin: 0 auto
		width: 100%
		object-fit: cover
		height: 252px
		position: absolute
		left: 0
		top: 0
		z-index: -1
		opacity: 0
		&.active
			display: block
			position: static
			opacity: 1
	.car__modal
		&.active
			position: fixed
			left: 0
			top: 0
			width: 100vw
			height: 100vh
			background-color: rgba(0,0,0,.7)
			z-index: 9999
			display: flex
			align-items: center
			justify-content: center
			.car__modal-content
				position: relative
				width: 60vw
				height: 80vh
				z-index: 2
		&-close
			width: 30px
			height: 30px
			top: 30px
			right: 20px
			position: absolute
			cursor: pointer
			display: block
			z-index: 3
			transition: .3s ease
			&:hover
				opacity: 0.7
			span
				width: 100%
				height: 4px
				display: block
				background-color: $dark
				border-radius: 4px
				&:nth-child(1)
					transform: rotate(45deg) translateY(50%)
				&:nth-child(2)
					transform: rotate(-45deg) translateY(-50%)
		img
			display: block
			max-width: 100%
			max-height: 100%
			width: 100%
			height: 100%

.car-image--controls
	position: absolute
	left: 0
	top: 0
	right: 0
	bottom: 0
	display: flex
	align-items: flex-end
	justify-content: space-between
	cursor: pointer
	z-index: 1
	span
		display: block
		height: 100%
		width: 24%
		margin: 10px 5px
		position: relative
		&::before
			content: ''
			width: 100%
			height: 4px
			display: block
			position: absolute
			bottom: 0
			left: 0
			background-color: $grey
		&.active
			&::before
				background-color: $accent
.car-label
	font-size: 12px
	color: $grey
	padding: 5px 15px
	background-color: $silver
	display: inline-block
	line-height: 1
	position: absolute
	left: 0
	top: 0
	&::before
		content: ''
		width: 8px
		height: 8px
		border-radius: 50%
		background-color: $grey
		display: inline-block
		margin-right: 5px
	&.available
		color: $black
		font-weight: bold
		background-color: #f3f3f3
		&::before
			background-color: $green
.car-content
	padding: 20px 20px 0 20px
	width: 100%
	cursor: pointer
.car-preview__btns
	display: grid
	grid-template-columns: repeat(2, 1fr)
	width: 100%
	padding: 20px
.car-preview__btn
	display: flex
	width: calc(100% + 8px)
	align-items: center
	justify-content: center
	color: #fff
	font-weight: 700
	font-size: 14px
	line-height: 16px
	height: 50px
	border-radius: 6px
	// border-radius: 6px
	text-align: center
	padding: 12px
	clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%)
	cursor: pointer
	border: none
	outline: none
	position: relative
	transition: all 0.5s ease
	&:hover
		clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 100% 100%, 0% 100%)
	&:first-child
		background-color: $grey
		color: #fff
		z-index: 2
	&:nth-child(2)
		background-color: $accent
		color: #fff
		z-index: 1
		left: -8px
.car-name
	font-weight: bold
	font-size: 20px
	line-height: 1.4
	text-align: center
.car-conf
	color: $grey
	font-size: 14px
	line-height: 1.2
	text-align: center
.car-price
	margin-top: 15px
	font-size: 24px
	font-weight: bold
	line-height: 1.2
	color: $accent
	text-align: center
	span
		display: block
		font-size: 16px
		font-weight: normal
		line-height: 1.4
		color: $grey
.car-info
	color: $grey
	margin-bottom: 5px
	display: flex
	justify-content: space-between
	font-size: 14px
	strong
		color: $black
		font-size: 16px
		font-weight: 400
.car-btn
	display: block
	width: 100%
@include lg-desktop
	.car-image .car__modal.active .car__modal-content
			height: 50vh
@include md-desktop
	.car
		max-width: 290px
		width: 100%
	.car-image .car__modal.active .car__modal-content
		height: 400px
		width: 100vw
</style>
