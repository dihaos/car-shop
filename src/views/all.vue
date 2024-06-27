<template>
  <div id="all-page">
    <v-banner></v-banner>
    <v-marks></v-marks>
    <v-safety></v-safety>
    <!-- <v-banks></v-banks> -->
    <v-reviews></v-reviews>
    <v-contacts></v-contacts>
  </div>
</template>

<script>
import vBanner from '@/components/vBanner';
// import vBanks from '@/components/vBanks';
import vSafety from '@/components/vSafety';
import vMarks from '@/components/vMarks';
import vReviews from '@/components/vReviews';
import vContacts from '@/components/vContacts';
export default {
  components: {
    vBanner,
    // vBanks,
    vMarks,
    vReviews,
    vContacts,
    vSafety,
  },
};
</script>
