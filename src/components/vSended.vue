<template>
  <div>
    <p v-if="workingHours">
      Сейчас совершается бесплатный звонок из отдела продаж.<br />Для получения
      информации уточните менеджеру интересующий Вас вопрос.
    </p>
    <p v-else>
      Отдел продаж уже закончил работу.<br />Вам придёт бесплатный звонок из
      отдела продаж. Точное время звонка придёт Вам по SMS. Для получения
      информации, пожалуйста, уточните менеджеру интересующий Вас вопрос.
    </p>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    const workingHours = computed(() => {
      const date = new Date();
      const from = store.getters.TIME_WORK_FROM;
      const to = store.getters.TIME_WORK_TO;
      const nowHourse = date.getHours();
      return from <= nowHourse <= to ? true : false;
    });
    return {
      workingHours,
    };
  },
};
</script>

<style lang="sass"></style>
