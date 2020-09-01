<template>
  <v-menu
    v-model="open"
    :close-on-content-click="closeOnContentClick"
    transition="slide-y-transition"
    offset-y
    nudge-top="-6"
    bottom
    class="menu-setting"
  >
    <template v-slot:activator="{ on }">
      <div class="setting">
        <v-btn
          fab
          text
          small
          v-on="on"
          class="ma-3"
        >
          <v-icon
            :class="{ invert: invert, active: open }"
            class="icon"
          >
            settings
          </v-icon>
        </v-btn>
      </div>
    </template>
    <div class="popover violeta-var">
      <v-list class="mode-menu">
        <v-subheader>{{ $t('starter.header_theme') }}</v-subheader>
        <v-list-item>
          <v-list-item-content>
            <div class="flex-menu">
              <label>
                {{ $t('starter.header_light') }}
              </label>
              <v-switch
                v-model="dark"
                label=""
                class="switch-toggle"
                color="primary"
                @change="setDark()"
              />
              <label>
                {{ $t('starter.header_dark') }}
              </label>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />
      <v-list class="lang-menu">
        <v-subheader>{{ $t('starter.header_language') }}</v-subheader>
        <v-list-item
          v-for="locale in $i18n.locales"
          :key="locale.code"
          class="lang-list"
          @click="switchLang(locale.code)"
        >
          <v-list-item-avatar class="flag">
            <i :class="locale.code" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="lang-opt">
              {{ $t('common.'+locale.code) }}
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon
              v-if="locale.code === $i18n.locale"
              color="primary"
            >
              mdi-check
            </v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </div>
  </v-menu>
</template>

<style lang="scss" scoped>
@import './header-style.scss';
</style>

<script>
import { mapGetters, mapState } from 'vuex'

let darkMode = false
if (typeof Storage !== 'undefined') { // eslint-disable-line
  darkMode = localStorage.getItem('luxiDarkMode') || false
}

export default {
  props: {
    invert: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    dark: darkMode === 'true',
    rtl: false,
    open: false,
    closeOnContentClick: false
  }),
  computed: {
    ...mapState(['counter', 'darkMode']),
    ...mapGetters(['getDir'])
  },
  methods: {
    switchLang: function(val) {
      this.$i18n.setLocale(val)
    },
    setDark: function() {
      console.log(this.dark)
      localStorage.setItem('luxiDarkMode', this.dark)
      this.$vuetify.theme.dark = this.dark
    },
    setDirection: function() {
      this.$vuetify.rtl = this.rtl
      document.dir = this.rtl ? 'rtl' : 'ltr'
    }
  }
}
</script>
