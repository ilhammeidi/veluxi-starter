import VueSmoothScroll from 'vue3-smooth-scroll';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VueSmoothScroll, {
    updateHistory: false,
  });
});
