<template>
  <span class="phone call_phone_1">
    <a :href="`tel:${phone}`" :title="`Позвонить по ${phoneLocal(phone)}`">
      {{ phoneLocal(phone) }}
    </a>
  </span>
</template>

<script>
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { ref, onMounted } from 'vue';
export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    const phone = ref('');
    onMounted(() => {
      const dynamicPhone = '+74992261269';
      if (
        route.query.utm_source === 'yandeks_karty' ||
        route.query.utm_source === 'zoon' ||
        route.query.utm_source === '2gis_'
      ) {
        phone.value = dynamicPhone;
      } else {
        phone.value = store.getters.PHONE;
      }
    });

    const phoneLocal = (text) =>
      text.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 ($2) $3-$4-$5');
    return { phone, phoneLocal };
  },
};
</script>

<style lang="sass"></style>
