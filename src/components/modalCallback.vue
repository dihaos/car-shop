<template>
  <vue-final-modal
    v-slot="{ params, close }"
    v-bind="$attrs"
    classes="modal-container"
    content-class="modal-content"
  >
    <span class="modal__title">
      <slot v-if="showForm && !isSended" name="title"></slot>
      <template v-else>Спасибо за Вашу заявку!</template>
    </span>
    <div class="modal__content">
      <slot v-bind:params="params"></slot>
      <v-form v-if="showForm && !isSended" @sended="sended" :id="id"></v-form>
      <v-sended v-else></v-sended>
    </div>
    <button class="modal__close" @click="close">
      <mdicon name="close" />
    </button>
  </vue-final-modal>
</template>

<script>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import vSended from '@/components/vSended';
import vForm from '@/components/vForm';
export default {
  components: { vForm, vSended },
  props: ['is-sended', 'id'],
  setup() {
    const store = useStore();
    const time_work_from = computed(() => store.getters.TIME_WORK_FROM);
    const time_work_to = computed(() => store.getters.TIME_WORK_TO);
    const showForm = ref(true);
    const sended = () => {
      showForm.value = false;
      setTimeout(() => {
        showForm.value = true;
      }, 2000);
    };
    return {
      time_work_from,
      time_work_to,
      showForm,
      sended,
    };
  },
};
</script>

<style lang="sass">
.modal-container
	display: flex
	justify-content: center
	align-items: center
.modal-content
	position: relative
	display: flex
	flex-direction: column
	max-height: 90%
	margin: 0 1rem
	padding: 2.5rem
	border: 1px solid #e2e8f0
	border-radius: 0.25rem
	background: #fff
.modal__title
	margin: 0 auto
	font-size: 24px
	font-weight: 700
.modal__content
	flex-grow: 1
	overflow-y: auto
	padding-top: 30px
	form
		width: 290px
		margin-left: auto
		margin-right: auto
		.btn
			width: 100%
			margin-top: 10px
	.checkbox_wrapper
		margin-top: 10px
.modal__action
	display: flex
	justify-content: center
	align-items: center
	flex-shrink: 0
	padding: 1rem 0 0
.modal__close
	position: absolute
	top: 0.5rem
	right: 0.5rem
	background: transparent
	border: none
	cursor: pointer
@include sm-tablets
	.modal__close
		right: 2rem
</style>
