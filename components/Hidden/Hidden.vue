<template>
  <client-only>
    <MqResponsive :target="breakpoints">
      <slot />
    </MqResponsive>
  </client-only>
</template>

<script>
import { MqResponsive } from 'vue3-mq';

export default {
  components: {
    MqResponsive,
  },
  props: {
    point: {
      type: String,
      required: true,
    },
  },
  computed: {
    breakpoints() {
      switch (this.point) {
        case 'smUp':
          return ['xs'];
        case 'mdUp':
          return ['xs', 'sm'];
        case 'lgUp':
          return ['xs', 'sm', 'md'];
        case 'xsDown':
          return ['sm', 'md', 'lg', 'xl'];
        case 'smDown':
          return ['md', 'lg', 'xl'];
        case 'mdDown':
          return ['lg', 'xl'];
        case 'lgDown':
          return 'xl';
        default:
          return 'xl';
      }
    },
  },
};
</script>
