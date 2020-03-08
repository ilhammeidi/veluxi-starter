<template>
  <fragment>
    <v-list dense>
      <v-list-item
        v-for="(item, index) in navMenu"
        :key="index"
        :href="'#' + item"
        link
      >
        <v-list-item-content>
          <v-list-item-title class="menu-list">
            {{ item }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider />
    <v-list dense>
      <v-list-item
        v-for="(item, index) in ['Login', 'Register', 'Contact']"
        :key="index"
        :href="'/' + item"
        link
      >
        <v-list-item-content>
          <v-list-item-title class="menu-list">{{ item }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </fragment>
</template>

<style scoped lang="scss">
@import './header-style';
</style>

<script>
import navMenu from './menu'

export default {
  data() {
    return {
      navMenu: navMenu,
      isOpen: false
    }
  }
}
</script>
