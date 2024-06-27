<template>
  <div id="car-page">
    <div class="container">
      <v-breadcrumb v-if="model" :car="model"></v-breadcrumb>
      <v-car-full :car="model" v-if="model"></v-car-full>
      <v-interested-cars :car="model" v-if="model"></v-interested-cars>
      <!-- <v-credit></v-credit> -->
      <!-- <v-banks></v-banks> -->
    </div>

    <v-contacts></v-contacts>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import { computed, onMounted } from 'vue';
import vContacts from '@/components/vContacts';
import vBreadcrumb from '@/components/vBreadcrumb';
import vCarFull from '@/components/vCarFull';
import vInterestedCars from '@/components/vInterestedCars';
// import vCredit from '@/components/vCredit';
// import vBanks from '@/components/vBanks';
export default {
  components: {
    vContacts,
    vBreadcrumb,
    vCarFull,
    vInterestedCars,
    // vCredit,
    // vBanks,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    onMounted(() => {
      document.body.scrollIntoView();
    });
    const model = computed(() => store.getters.CAR(route.params.id));
    if (!model.value) router.push('/404');
    return {
      model,
    };
  },
};
</script>

<style lang="sass">
#car-page
	margin-top: 75px
	padding-top: 50px
@include sm-tablets
	#car-page
		padding-top: 30px
</style>
