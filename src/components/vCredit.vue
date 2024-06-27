<template>
  <section id="credit">
    <div class="container">
      <h2><span>Автомобили с пробегом в кредит от 0.1%!*</span></h2>
      <p>
        Узнайте больше о кредитных предложениях в нашем дилерском центре<br />
        по телефону <v-phone></v-phone> или оставьте заявку.
      </p>
      <v-form @sended="sended"></v-form>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import vPhone from '@/components/vPhone';
import vForm from '@/components/vForm';
export default {
  components: { vForm, vPhone },
  setup() {
    const isSended = ref(false);
    const show = ref(false);
    const sended = () => {
      isSended.value = true;
      show.value = true;
      setTimeout(() => {
        show.value = false;
        isSended.value = false;
      }, 2000);
    };
    return {
      show,
      isSended,
      sended,
    };
  },
};
</script>

<style lang="sass">

#credit
	margin-top: 50px
#credit h2
	font-size: 36px
	text-align: center
	font-weight: 700
	letter-spacing: 0.36px
	margin-bottom: 40px
#credit h2 span
	text-transform: uppercase
#credit h2 sup
	color: #f7761f
#credit h2 b
	color: #f7761f
#credit p
	text-align: center
	font-size: 24px
	font-weight: 300
	letter-spacing: 0.24px
	line-height: 1.2em
#credit p b
	text-transform: uppercase
#credit p span a
	font-weight: bold
	color: #333
#credit form
	margin-top: 40px
	display: block
#credit form .form-elements
	max-width: 530px
	width: 100%
	margin: 0 auto
#credit
	form .form-elements
		display: flex
		justify-content: space-between
	form .form-elements .input-block
		width: 226px
		margin: 0
		height: 46px
		position: relative
	form .form-elements .input-block input
		color: #999999
		font-size: 16px
		font-weight: 300
		line-height: 1.2em
		letter-spacing: 0.16px
		padding-left: 15px
	.checkbox_wrapper
		max-width: 500px
		color: #999999
		font-size: 12px !important
		font-weight: 400
		letter-spacing: 0.12px
		margin-top: 25px
		width: 100%
		a
			color: #999
			font-size: 12px
.credit-bg
	margin-top: 20px
	img
		display: block
		max-width: 100%
		height: auto
@include sm-tablets
	#credit
		form .form-elements
			flex-wrap: wrap
			justify-content: center
			.input-block
				margin-bottom: 10px
</style>
