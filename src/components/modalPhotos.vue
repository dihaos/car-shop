<template>
  <vue-final-modal
    v-slot="{ close }"
    v-bind="$attrs"
    classes="modal-container"
    content-class="modal__photos"
  >
    <div class="modal__photos-wrapper" v-if="images">
      <img :class="active === 0 ? 'active' : ''" v-lazy="images[0]" />
      <img :class="active === 1 ? 'active' : ''" v-lazy="images[1]" />
      <img :class="active === 2 ? 'active' : ''" v-lazy="images[2]" />
      <img :class="active === 3 ? 'active' : ''" v-lazy="images[3]" />
      <div class="car-image--controls">
        <span
          v-for="s in 4"
          :key="s"
          @mouseover="active = s - 1"
          :class="active === s - 1 ? 'active' : ''"
        ></span>
      </div>
      <button class="modal__close" @click="close">
        <mdicon name="close" />
      </button>
    </div>
  </vue-final-modal>
</template>

<script>
import { ref } from 'vue';
export default {
  props: ['images', 'activeImage'],
  setup(props) {
    const active = ref(props.activeImage);
    console.log(props.images, props.activeImage);
    return {
      active,
    };
  },
};
</script>

<style lang="sass">
.modal-container
	display: flex
	justify-content: center
	align-items: center
.modal__photos
	&-wrapper
		width: 60vw
		height: 80vh
		position: relative
		background-color: #fff
		img
			display: none
			max-width: 100%
			max-height: 100%
			width: 100%
			height: 100%
			object-fit: cover
			&.active
				display: block
.modal__title
	margin: 0 auto
	font-size: 24px
	font-weight: 700

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
