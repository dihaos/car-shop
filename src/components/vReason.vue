<template>
  <div id="reason">
    <div class="container">
      <h3 class="reason-title">
        ЕСТЬ ПРЕДЛОЖЕНИЕ <br />
        ОТ КОНКУРЕНТОВ? <br />
        <b class="accent">МЫ ЕГО УЛУЧШИМ!</b>
      </h3>
      <!-- <v-form @sended="sended"></v-form> -->
    </div>
  </div>
  <!-- <modal-callback
    v-model="show"
    @confirm="confirm"
    @cancel="cancel"
    :is-sended="isSended"
  >
    <template v-slot:title>Оставить заявку</template>
  </modal-callback> -->
</template>

<script>
// import vForm from '@/components/vForm';
// import { ref } from 'vue';
// import modalCallback from '@/components/modalCallback';
export default {
  // components: { vForm, modalCallback },
  setup() {
    // const isSended = ref(false);
    // const show = ref(false);
    // const confirm = () => {
    //   show.value = false;
    // };
    // const cancel = (close) => {
    //   close();
    // };
    // const sended = () => {
    //   isSended.value = true;
    //   show.value = true;
    //   setTimeout(() => {
    //     show.value = false;
    //     isSended.value = false;
    //   }, 2000);
    // };
    return {
      // show,
      // isSended,
      // confirm,
      // cancel,
      // sended,
    };
  },
};
</script>

<style lang="sass">
#reason
	background-image: url('../assets/images/background-2.jpg')
	background-size: cover
	background-position: right center
	background-color: #000
	padding: 50px 0
	background-repeat: no-repeat
	form
		margin-top: 50px
		max-width: 600px
		width: 100%
		margin-left: auto
		.form-elements
			display: flex
			justify-content: space-between
		.checkbox_wrapper
			margin-top: 17px
			width: 100%
			label
				color: #fff
				a
					color: #fff
.reason-title
	color: #ffffff
	font-size: 60px
	font-weight: 400
	line-height: 1.2em
	letter-spacing: -0.9px
	text-align: right
@include sm-tablets
	.reason-title
		font-size: 24px
		text-align: center
	#reason form
		width: 260px
		margin-left: auto
		margin-right: auto
	#reason form .form-elements
		flex-wrap: wrap
		justify-content: center
		.input-block
			margin-bottom: 15px
</style>
