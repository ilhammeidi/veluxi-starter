<template>
  <div
    ref="wrapper"
    v-scroll="runCounter"
    :class="{ dark: dark }"
    class="counter-wrap"
  >
    <v-row
      align="center"
      justify="center"
      class="root"
    >
      <v-col sm="4">
        <div class="counter-item">
          <span class="icon ion-ios-leaf-outline" />
          <div class="text">
            <h3 class="text-h3">
              {{ !visible ? 0 : '' }}
              <count-up
                v-if="visible"
                :start-val="0"
                :end-val="123"
                :options="{ prefix: '+' }"
              />
            </h3>
            <h6 class="use-text-subtitle2">
              Lorem Ipsum dolor
            </h6>
          </div>
        </div>
      </v-col>
      <v-col sm="4">
        <div class="counter-item">
          <span class="icon ion-ios-bulb-outline" />
          <div class="text">
            <h3 class="text-h3">
              {{ !visible ? 0 : '' }}
              <count-up
                v-if="visible"
                :start-val="0"
                :end-val="456"
                :options="{ prefix: '+' }"
              />
            </h3>
            <h6 class="use-text-subtitle2">
              Pellentesque ac bibendum
            </h6>
          </div>
        </div>
      </v-col>
      <v-col sm="4">
        <div class="counter-item">
          <span class="icon ion-ios-globe" />
          <div class="text">
            <div class="text-h3">
              {{ !visible ? 0 : '' }}
              <count-up
                v-if="visible"
                :start-val="0"
                :end-val="789"
                :options="{ prefix: '$' }"
              />
            </div>
            <h6 class="use-text-subtitle2">
              Consectetur adipiscing
            </h6>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
@use'./counter-style';
</style>

<script>
import CountUp from 'vue-countup-v3';
import { ref } from 'vue';

export default {
  components: {
    CountUp,
  },
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const visible = ref(false);
    const wrapper = ref(null);
    const offset = 500;
    function runCounter() {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      const topPosition = scrollPosition + offset;

      if (topPosition > wrapper.value.offsetTop) {
        visible.value = true;
      }
    }

    return {
      visible,
      runCounter,
      wrapper,
    };
  },
  data() {
    return {
      loaded: false,
    };
  },
};
</script>
