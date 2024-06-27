<template>
  <div id="app__wrapper" v-if="loaded">
    <v-header :mobile-menu="mobileMenu"></v-header>
    <div class="page-body">
      <router-view />
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
import vHeader from '@/components/vHeader';

import vFooter from '@/components/vFooter';
import { useStore } from 'vuex';
import { onBeforeMount, computed, ref } from 'vue';
export default {
  components: {
    vHeader,
    vFooter,
  },
  setup() {
    const store = useStore();
    const loaded = computed(() => store.getters.LOADED);
    const mobileMenu = ref(true);
    if (window.location.pathname.indexOf('all') !== -1) {
      mobileMenu.value = false;
    }
    onBeforeMount(() => {
      store.dispatch('GET_CARS_FROM_STOCK');
    });
    return {
      loaded,
      mobileMenu,
    };
  },
};
</script>
<style lang="sass"></style>
