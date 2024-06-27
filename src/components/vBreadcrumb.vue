<template>
  <div class="breadcrumb">
    <router-link to="/">Главная</router-link> -
    <router-link :to="`/${car.mark_id.replaceAll(' ', '-')}`">{{
      car.mark_id
    }}</router-link>
    - {{ car.model }} {{ car.modification_id }} {{ car.year }} года,
    {{ car.color }}
  </div>
</template>

<script>
export default {
  props: ['car'],
  setup() {
    return {};
  },
};
</script>

<style lang="sass">
.breadcrumb
	color: $black
	font-size: 14px
	a
		color: $black
</style>
