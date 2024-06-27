<template>
  <section class="interested" v-if="cars[0]">
    <h2>ПОХОЖИЕ АВТОМОБИЛИ</h2>
    <swiper
      :spaceBetween="30"
      :navigation="true"
      :slidesPerView="3"
      class="interested__slider"
      :breakpoints="breakpoints"
    >
      <swiper-slide v-for="car in cars" :key="car.id">
        <v-car :car="car" @open="openModal" @close="cancel"></v-car>
      </swiper-slide>
    </swiper>
  </section>
  <modal-photos
    v-model="show"
    @cancel="cancel"
    :images="imagesArr"
    :activeImage="activeImage"
  ></modal-photos>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);
import vCar from '@/components/vCar';
import modalPhotos from '@/components/modalPhotos';
export default {
  components: { Swiper, SwiperSlide, vCar, modalPhotos },
  props: ['car'],
  setup(props) {
    const store = useStore();
    const cars = computed(() => store.getters.INTERESTED_CARS(props.car));
    const show = ref(false);
    const imagesArr = ref('');
    const activeImage = ref(0);
    const confirm = () => {
      show.value = false;
    };
    const openModal = ({ images, active }) => {
      imagesArr.value = images;
      activeImage.value = active;
      show.value = true;
    };
    const cancel = (close) => {
      close();
    };
    const breakpoints = {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      996: {
        slidesPerView: 3,
      },
    };
    return {
      breakpoints,
      cars,
      show,
      confirm,
      openModal,
      cancel,
      imagesArr,
      activeImage,
    };
  },
};
</script>

<style lang="sass">
.interested
	margin-top: 80px
	&__slider
		padding: 30px
		.car
			width: 100%
			margin: 0
@include lg-desktop
</style>
