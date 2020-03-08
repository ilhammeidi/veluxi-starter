<template>
  <v-app dark>
    <transition name="fade">
      <div
        v-if="show"
        id="main-wrap"
      >
        <v-content>
          <nuxt />
        </v-content>
      </div>
    </transition>
  </v-app>
</template>

<script>
export default {
  loading: false,
  data() {
    return {
      show: false
    }
  },
  mounted: function() {
    // Preloader and Progress bar setup
    this.show = true
    this.$nextTick(() => {
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
      this.$nuxt.$loading.start()
    })
    const preloader = document.getElementById('preloader')
    if (preloader !== null || undefined) {
      preloader.remove()
    }
    // RTL initial
    const rtlURL = document.location.pathname.split('/')[1] === 'ar'
    this.$vuetify.rtl = rtlURL
  },
  methods: {
    changeColor: function() {
      this.$vuetify.theme.themes = {
        light: {
          primary: '#00af4a',
          secondary: '#ff2020'
        }
      }
    }
  }
}
</script>
