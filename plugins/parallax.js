import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('scroll-parallax', ScrollParallax);
});
