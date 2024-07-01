<template>
  <div id="home-page">
    <v-banner></v-banner>
    <v-cars-tabs></v-cars-tabs>
    <v-cars-filters></v-cars-filters>
    <v-cars-list :model="model"></v-cars-list>
    <!-- <v-credit></v-credit> -->
    <v-banks></v-banks>
    <v-contacts></v-contacts>
  </div>
</template>

<script>
import vBanner from "@/components/vBanner";
import vCarsList from "@/components/vCarsList";
import vCarsTabs from "@/components/vCarsTabs";
import vCarsFilters from "@/components/vCarsFilters";
// import vCredit from '@/components/vCredit';
import vBanks from "@/components/vBanks";
import vContacts from "@/components/vContacts";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  components: {
    vBanner,
    vCarsTabs,
    vCarsList,
    vBanks,
    // vCredit,
    vCarsFilters,
    vContacts,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const model = route.params.model;
    const marks = store.getters.MARKS;
    if (marks.indexOf(model) === -1) router.push("/404");
    return {
      model,
    };
  },
};
</script>
