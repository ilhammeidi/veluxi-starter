<template>
  <div class="mobile-nav">
    <div class="menu">
      <v-list dense>
        <v-list-item
          v-for="(item, index) in dataMenu"
          :key="index"
          :href="'#' + item"
          link
        >
          <div>
            <v-list-item-title class="menu-list">
              {{ $t('starter.header_'+item) }}
            </v-list-item-title>
          </div>
        </v-list-item>
      </v-list>
      <v-divider />
      <v-list dense>
        <v-list-item
          v-for="(item, index) in ['login', 'register']"
          :key="index"
          href="#"
          link
        >
          <div>
            <v-list-item-title class="menu-list">
              {{ $t('common.header_'+item) }}
            </v-list-item-title>
          </div>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './header-style';
</style>

<script>
import navMenu from './menu';

export default {
  data() {
    return {
      dataMenu: navMenu,
    };
  },
};
</script>
