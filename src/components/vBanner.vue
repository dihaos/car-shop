<template>
  <section class="banner">
    <img
      :src="require(`@/assets/images/banner.jpg`)"
      class="img-responsive"
      alt="GN Service"
    />
  </section>
</template>

<script>
export default {};
</script>

<style lang="sass">
.banner
	margin-top: 75px
@include sm-tablets
	#all-page .banner img
		display: none
</style>
