<template>
  <div id="contacts">
    <div class="container">
      <h2>Контакты</h2>
      <div class="contacts-info">
        <div class="contacts-logo">
          <img
            :src="require(`@/assets/images/logo_car-hub-edit.jpg`)"
            s
            alt="LADA"
            class="img-responsive"
          />
        </div>
        <div class="contact-adress">
          <div class="subway">
            <img :src="require(`@/assets/images/subway-spb.svg`)" alt="метро" />
            <span>Старая Деревня</span>
          </div>
          г. Санкт-Петербург, Стародеревенская ул., 11к2
        </div>
        <div class="contact-myphone">
          <v-phone></v-phone>
          <p>Ежедневно с 0{{ time_work_from }}:00 до {{ time_work_to }}:00</p>
        </div>
        <div class="contacts-button">
          <a href="#" @click.prevent="show = true" class="btn"
            >Заказать звонок</a
          >
        </div>
      </div>
    </div>
    <iframe
      src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa35f073c5ba0f6124fd9aa89c20d2b39069c56fb92a6494cdbdcf935016d6331&amp;source=constructor"
      id="map"
      frameborder="0"
    ></iframe>
  </div>
  <modal-callback v-model="show" @confirm="confirm" @cancel="cancel">
    <template v-slot:title>Перезвоним через 15 сек.</template>
  </modal-callback>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import vPhone from "@/components/vPhone";
import modalCallback from "@/components/modalCallback";
export default {
  components: { vPhone, modalCallback },
  setup() {
    const store = useStore();
    const time_work_from = computed(() => store.getters.TIME_WORK_FROM);
    const time_work_to = computed(() => store.getters.TIME_WORK_TO);
    const show = ref(false);
    const confirm = () => {
      show.value = false;
    };
    const cancel = (close) => {
      close();
    };
    return {
      time_work_from,
      show,
      confirm,
      cancel,
      time_work_to,
    };
  },
};
</script>

<style lang="sass">
#map
	height: 500px
	margin-top: 30px
	width: 100%
#contacts
	margin-top: 50px
	.btn
		padding: 20px
.contacts-info
	margin-top: 20px
	display: flex
	justify-content: space-between
	align-items: center
.contacts-logo
	width: 171px
.contact-adress
	color: #000000
	font-size: 18px
	font-weight: 400
	line-height: 1.2em
	letter-spacing: -0.27px
.contact-myphone
	span a
		color: #000000
		font-size: 18px
		letter-spacing: -0.27px
		text-transform: uppercase
		line-height: 1.2em
		font-weight: bold
	p
		color: #000000
		line-height: 1.2em
		font-size: 18px
		letter-spacing: -0.27px
@include sm-tablets
	.contacts-info
		flex-wrap: wrap
		justify-content: center
	.contacts-logo
		margin-bottom: 15px
	.contact-myphone
		margin-bottom: 15px
	.contacts-button
		margin: 20px 0
	.contact-adress
		width: 100%
		text-align: center
		margin-bottom: 10px
	#map
		height: 250px
</style>
