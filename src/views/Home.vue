<template>
  <div id="home-page">
    <v-banner></v-banner>
    <v-cars-tabs></v-cars-tabs>
    <v-cars-filters></v-cars-filters>
    <v-cars-list></v-cars-list>
    <!-- <v-credit></v-credit> -->
    <v-banks></v-banks>
    <v-reviews></v-reviews>
    <v-contacts></v-contacts>
  </div>
</template>

<script>
import vBanner from '@/components/vBanner';
import vCarsList from '@/components/vCarsList';
import vCarsTabs from '@/components/vCarsTabs';
import vCarsFilters from '@/components/vCarsFilters';
// import vCredit from '@/components/vCredit';
import vBanks from '@/components/vBanks';
import vReviews from '@/components/vReviews';
import vContacts from '@/components/vContacts';
export default {
  components: {
    vBanner,
    vCarsList,
    // vCredit,
    vBanks,
    vReviews,
    vCarsFilters,
    vCarsTabs,
    vContacts,
  },
};
</script>
