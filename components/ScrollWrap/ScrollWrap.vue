<template>
  <div
    v-scroll="handleScroll"
    :class="{ 'active': active, 'pending': !active }"
    class="scroll-wrap"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    target: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      active: false
    }
  },
  computed: {
    offsetTop: function() {
      const elm = document.getElementById(this.target)
      return elm.getBoundingClientRect().y
    }
  },
  methods: {
    handleScroll: function() {
      const top = this.offsetTop - window.innerHeight
      if (window.scrollY > top) {
        return (this.active = true)
      }
      return false
    }
  }
}
</script>
