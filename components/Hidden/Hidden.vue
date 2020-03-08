<template>
  <mq-layout :mq="breakpoints">
    <slot />
  </mq-layout>
</template>

<script>
export default {
  props: {
    point: {
      type: String,
      required: true
    }
  },
  computed: {
    breakpoints() {
      switch (this.point) {
        case 'smUp':
          return ['xsDown']
        case 'mdUp':
          return ['xsDown', 'smDown']
        case 'lgUp':
          return ['xsDown', 'smDown', 'mdDown']
        case 'xsDown':
          return ['smDown', 'mdDown', 'lgDown', 'xl']
        case 'smDown':
          return ['mdDown', 'lgDown', 'xl']
        case 'mdDown':
          return ['lgDown', 'xl']
        case 'lgDown':
          return 'xl'
        default:
          return 'xl'
      }
    }
  }
}
</script>
