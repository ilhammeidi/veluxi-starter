import { Vue3Mq } from 'vue3-mq';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Mq, {
    defaultBreakpoint: 'xxl',
  });
});
