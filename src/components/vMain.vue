<template>
  <section id="main">
    <div class="main-content">
      <div class="container">
        <div class="main-title">
          <!-- <div class="action-day">
            <span>До {{ lastday }} {{ month }}</span>
          </div> -->
          <h1>Ликвидация склада <br />автомобилей с пробегом!</h1>
          <!-- <p class="main-sub-title">Зафиксируйте выгоду уже сейчас!</p> -->
        </div>
      </div>
    </div>
    <!-- <div class="main-benefits">
      <div class="container">
        <div class="main-benefits-flex"> -->
    <!-- <div
            class="main-benefits-item"
            role="button"
            @click.prevent="show = true"
          >
            <div class="image">
              <img
                :src="require('@/assets/images/discount.svg')"
                alt="Подарки от дилера"
                class="img-responsive"
              />
            </div>
            <p>Подарки от дилера</p>
          </div> -->
    <!-- <div
            class="main-benefits-item"
            role="button"
            @click.prevent="show = true"
          >
            <div class="image">
              <img
                :src="require('@/assets/images/car-red.svg')"
                alt="КАСКО в подарок!"
                class="img-responsive"
              />
            </div>
            <p>КАСКО в подарок!</p>
          </div> -->
    <!-- <div
            class="main-benefits-item"
            role="button"
            @click.prevent="show = true"
          >
            <div class="image">
              <img
                :src="require('@/assets/images/fuel.svg')"
                alt="Тонна бензина в подарок!"
                class="img-responsive"
              />
            </div>
            <p>Тонна бензина в подарок!</p>
          </div> -->
    <!-- <div
            class="main-benefits-item"
            role="button"
            @click.prevent="show = true"
          >
            <div class="image">
              <img
                :src="require('@/assets/images/wheel.svg')"
                alt="Выездной тест-драйв!"
                class="img-responsive"
              />
            </div>
            <p>Выездной тест-драйв!</p>
          </div>
        </div>
      </div>
    </div> -->
  </section>
  <!-- <modal-callback v-model="show" @confirm="confirm" @cancel="cancel">
    <template v-slot:title>Оставить заявку</template>
  </modal-callback> -->
</template>

<script>
// import { ref } from 'vue';
// import modalCallback from '@/components/modalCallback';
export default {
  // components: { modalCallback },
  setup() {
    // const show = ref(false);
    // const confirm = () => {
    //   show.value = false;
    // };
    // const cancel = (close) => {
    //   close();
    // };
    return {
      // show,
      // confirm,
      // cancel,
    };
  },
};
</script>

<style lang="sass">
#main
	position: relative
	background-image: url('../assets/images/bg.jpg')
	background-size: cover
	background-position: center 70%
	padding-top: 135px
	padding-bottom: 50px
	min-height: 700px
.main-background
	position: relative
	z-index: -1
.main-flex
	display: flex
	justify-content: space-between
	margin-top: 70px
.main-title
	// max-width: 700px
	width: 100%
	text-align: center
h1
	font-size: 46px
	font-weight: 700
	text-transform: uppercase
	// color: #fff
	color: $accent
	text-align: center
	// text-shadow: 1px 2px 2px #444
.main-sub-title
	margin-top: 20px
	font-size: 30px
	letter-spacing: -0.45px

.action-day
	// background-color: #ed0000
	position: relative
	display: inline-block
	color: #ffffff
	letter-spacing: -0.36px
	font-size: 24px
	padding: 10px 55px
	text-align: center
	z-index: 1
	margin-bottom: 5px
	line-height: 1.2em
	left: 20px
	&:after
		content: ''
		width: 100%
		height: 49px
		top: 0
		left: 0
		position: absolute
		transform: skewX(-30deg)
		z-index: -1
		background-color: $accent
.main-form-wrapper
	box-shadow: 0 2px 49px rgba(0, 0, 0, 0.11)
	background-color: #ffffff
	border-radius: 6px
	width: 370px
	padding: 20px 40px
	position: relative
	top: 35px
.main-form-count
	position: absolute
	left: -15px
	top: -34px
	display: flex
.main-form-count-item
	width: 83px
	height: 126px
	color: #272626
	font-size: 72px
	font-weight: 700
	text-transform: uppercase
	// background-image: url('../assets/images/bg-number.png')
	background-size: contain
	background-repeat: no-repeat
	background-position: center center
	text-align: center
	line-height: 1em
	padding-top: 23px
.main-form-title
	margin-left: 120px
	color: #272626
	font-size: 24px
	font-weight: 700
	text-transform: uppercase
	line-height: 1.2em
.main-form-wrapper form
	margin-top: 50px
	.btn
		margin-top: 15px
	.checkbox_wrapper
		margin-top: 15px

.checkbox_wrapper
	display: flex
	align-items: center
	width: 210px
	margin-left: auto
	margin-right: auto
	label
		margin-left: 15px
		line-height: 1.2em
		color: #000000
		font-size: 12px
		font-weight: 300
		letter-spacing: -0.18px
		a
			text-decoration: underline
.main-benefits
	position: absolute
	bottom: 50px
	left: 0
	width: 100%
.main-benefits-flex
	display: flex
	justify-content: space-between
.main-benefits-item
	width: 270px
	background-color: #ffffff
	display: flex
	align-items: center
	justify-content: center
	transition: all .3s cubic-bezier(1,1,.44,.92)
	padding: 15px 20px
	cursor: pointer
	&:hover
		background-color: $dark
		p
			color: #fff
	.image
		width: 51px
		margin-right: 20px
	p
		color: #000000
		font-size: 18px
		letter-spacing: -0.27px
		line-height: 1.2em
		transition: all .3s cubic-bezier(1,1,.44,.92)
@include lg-desktop
	h1
		font-size: 30px
	.main-sub-title
		font-size: 24px
		margin-top: 20px
	#main
		padding-bottom: 330px
	.main-benefits-item .image
		max-width: 30px
		width: 100%
		margin-right: 15px
	.main-benefits-item p
		font-size: 14px
	.main-benefits-item
		padding: 10px
		width: 220px
	.main-benefits
		bottom: 40px

@include md-desktop
	#main
		background-size: 1300px
		background-position: top center
		padding-top: 110px
		padding-bottom: 40px
		background-repeat: no-repeat
		min-height: 400px
	.header-logo
		margin-left: 30px
	.main-benefits
		position: static
		margin-top: 300px
	.main-benefits-flex
		flex-wrap: wrap
		justify-content: space-around
	.main-benefits-item
		margin-bottom: 20px
@include sm-tablets
	#main
		background-size: 500px
		background-position: center 75px
		padding-top: 80px
		// margin-top: 75px
		padding-bottom: 0
		min-height: 260px
	h1
		font-size: 22px
		text-align: center
	.main-sub-title
		font-size: 18px
		text-align: center
		margin-top: 10px
	.main-benefits
		margin-top: 20px
	.main-benefits-item
		flex-direction: column
		width: 145px
		text-align: center
	.main-benefits-item .image
		margin-left: auto
		margin-right: auto
		margin-bottom: 10px
</style>
