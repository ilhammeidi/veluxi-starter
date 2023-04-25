<template>
  <div
    id="preloader"
    style="
      position: absolute;
      zIndex: 10000;
      background: #fafafa;
      width: 100%;
      height: 100%;
    "
  >
    <img
      style="
        opacity: 0.5;
        position: absolute;
        top: calc(50% - 50px);
        left: calc(50% - 50px);
      "
      src="/images/loading.gif"
      alt="loading"
    >
  </div>
  <theme-wrapper theme="green-leaf">
    <v-progress-linear
      v-model="loading"
      :active="loading < 100"
      :buffer-value="bufferValue"
      absolute
      color="primary"
      class="top-loading"
    />
    <v-app>
      <v-main id="main-wrap" class="page-enter-active" :class="{ 'page-fade-transition-exit': loading >= 100 }">
        <slot />
      </v-main>
    </v-app>
  </theme-wrapper>
</template>

<style lang="scss">
.top-loading {
  z-index: 9999;
}
</style>

<script>
import ThemeWrapper from '@/components/ThemeWrapper';

export default {
  components: {
    ThemeWrapper,
  },
  data() {
    return {
      loading: 0,
      interval: 0,
      bufferValue: 10,
    };
  },
  mounted() {
    // Preloader and Progress bar setup
    this.startBuffer();
    setTimeout(() => {
      this.loading = 100;
      clearInterval(this.interval);
    }, 1000);

    // Remove Loading Screen
    const preloader = document.getElementById('preloader');
    if (preloader !== null || undefined) {
      preloader.remove();
    }
  },
  methods: {
    startBuffer() {
      clearInterval(this.interval);

      this.interval = setInterval(() => {
        this.loading += Math.random() * (15 - 5) + 5;
        this.bufferValue += Math.random() * (15 - 5) + 6;
      }, 100);
    },
  },
};
</script>
