<template>
  <header id="header" :class="mobileMenu ? '' : 'hide-mobile'">
    <div class="container">
      <div class="header-flex">
        <div class="header-logo-diler">
          <a href="/" @click.prevent="scrollTo('home-page')">
            <img
              :src="require(`@/assets/images/logo.svg`)"
              alt="LADA"
              class="img-responsive"
            />
          </a>
        </div>
        <div :class="[menu ? 'open' : '', 'header__nav']">
          <ul>
            <li v-if="!hideLink">
              <a href="#" @click.prevent="goTo('cars-filters')"
                >Авто в наличии</a
              >
            </li>
            <li v-if="!hideLink">
              <a href="" @click.prevent="goBuyout">Продать</a>
            </li>
            <li v-if="!hideLink">
              <a href="#" @click.prevent="goTo('banks')">Кредит</a>
            </li>
            <li>
              <a href="#" @click.prevent="scrollTo('contacts')">Контакты</a>
            </li>
          </ul>
        </div>
        <div class="header-contacts-info">
          <div class="subway">
            <img
              :src="require(`@/assets/images/subway-orange.png`)"
              alt="метро"
            />
            <span>Теплый стан</span>
          </div>
          <p><b>Новоясеневский проспект 6</b></p>
        </div>
        <div class="my-phone">
          <div class="header-phone">
            <v-phone></v-phone>
            <p>Ежедневно с 0{{ time_work_from }}:00 до {{ time_work_to }}:00</p>
          </div>
          <div class="header-button">
            <a href="#" @click.prevent="show = true" class="header-btn"
              >Заказать звонок</a
            >
          </div>
          <div class="burger" @click="menu = !menu">
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
              enable-background="new 0 0 32 32"
              id="Glyph"
              version="1.1"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M26,16c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,14,26,14.896,26,16z"
                id="XMLID_314_"
              />
              <path
                d="M26,8c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,6,26,6.896,26,8z"
                id="XMLID_315_"
              />
              <path
                d="M26,24c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,22,26,22.896,26,24z"
                id="XMLID_316_"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </header>
  <modal-callback v-model="show" @confirm="confirm" @cancel="cancel">
    <template v-slot:title>Перезвоним через 15 сек.</template>
  </modal-callback>
</template>

<script>
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { computed, ref } from "vue";
import vPhone from "@/components/vPhone";
import modalCallback from "@/components/modalCallback";
export default {
  components: { vPhone, modalCallback },
  props: ["mobile-menu"],
  setup() {
    const router = useRouter();
    const store = useStore();
    const route = useRoute();
    const show = ref(false);
    const menu = ref(false);
    const confirm = () => {
      show.value = false;
    };
    const cancel = (close) => {
      close();
    };
    const time_work_from = computed(() => store.getters.TIME_WORK_FROM);
    const time_work_to = computed(() => store.getters.TIME_WORK_TO);
    const hideLink = route.fullPath === "/all" ? true : false;
    window.addEventListener("scroll", () => {
      window.scrollY > 70
        ? document.querySelector("#header").classList.add("active")
        : document.querySelector("#header").classList.remove("active");
    });
    const scrollTo = (id) => {
      var element = document.getElementById(id);
      var headerOffset = 75;
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      menu.value = false;
    };
    const goTo = (id) => {
      if (route.path !== "/") {
        router.push("/");
        setTimeout(() => scrollTo(id), 300);
      } else {
        scrollTo(id);
      }
    };
    const goBuyout = () => {
      window.open(
        "http://vikup.gnservice-used.ru" + window.location.search,
        "_blank"
      );
    };
    return {
      show,
      confirm,
      cancel,
      time_work_from,
      time_work_to,
      scrollTo,
      goTo,
      menu,
      goBuyout,
      hideLink,
    };
  },
};
</script>

<style lang="sass">
#header
	position: fixed
	left: 0
	top: 0
	width: 100%
	z-index: 20
	background-color: rgba(255,255,255,1)
	transition: .3s ease
	&.active
		background-color: #fff
.subway
	display: flex
	align-items: flex-start
	justify-content: center
	img
		position: relative
		bottom: -2px
		margin-right: 5px
	span
		font-size: 14px
.header__nav
	ul
		display: flex
		align-items: center
		list-style-type: none
		li
			a
				text-decoration: none
				display: block
				margin: 0px 5px
				padding: 15px 10px
				&:hover
					background-color: $accent
					color: #fff
.burger
	display: none
.header-flex
	display: flex
	align-items: center
	justify-content: space-between
	padding: 10px 0
	height: 75px
.header-logo-diler
	margin-right: 30px
	display: flex
	align-items: center
	a
		display: block
		width: 150px
	p
		margin-left: 15px
		b

.header-contacts-info
	margin-right: 15px
	p
		font-size: 14px
		text-align: center
		font-weight: 400
		line-height: 1.2em
.my-phone
	display: flex
	align-items: center
	.header-phone
		margin-right: 30px
		span a
			font-size: 18px
			font-weight: 700
		p
			font-size: 12px
.header-btn
	display: inline-block
	padding: 10px 33px
	color: #fff
	font-size: 14px
	font-weight: 400
	outline: none
	text-decoration: none
	background-color: $accent
	&:hover
		background-color: $black
		color: #fff
		text-decoration: none
.header-logo
	width: 108px
	background-color: #fff
	padding: 10px 10px 0px 10px
	margin-left: 90px
	position: relative
	top: 25px
@include sm-tablets
	.header-contacts-info
		display: none
	.header-logo-diler p
		display: none
	.header-logo,
	.header-button
		display: none
	.my-phone .header-phone
		margin-right: 0
	.header-logo-diler a
		width: 100px
	.header__nav
		display: block
		transform: translateX(100%)
		transition: .3s ease
		position: absolute
		left: 0
		top: 75px
		width: 100%
		height: calc(100vh - 75px)
		background-color: #fff
		&.open
			transform: translateX(0)
		ul
			display: block
			text-align: center
			margin-top: 20px
	.burger
		display: block
		margin-left: 20px
	.hide-mobile .burger
		display: none
</style>
