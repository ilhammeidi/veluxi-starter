<template>
  <div
    v-scroll="handleScroll"
    :class="{ show: show }"
    class="page-nav"
  >
    <nav class="section-nav">
      <a
        v-for="(item, index) in menuList"
        :key="index"
        v-smooth-scroll="{ offset: -100 }"
        :style="{ top: 30 * (menu.length - item.id) + 'px' }"
        :href="'#' + item.url"
        :class="{ active: activeMenu === item.url }"
        @click="setOffset(item.offset)"
      >
        <v-tooltip
          :nudge-top="5"
          location="left"
        >
          <template #activator="{ props }">
            <span v-bind="props">{{ item.name }}</span>
          </template>
          <span class="tooltip">{{ item.name }}</span>
        </v-tooltip>
      </a>
    </nav>
    <v-tooltip
      :nudge-top="25"
      location="left"
    >
      <template #activator="{ props }">
        <v-btn
          v-smooth-scroll
          icon
          class="fab anchor-link scrollactive-item"
          href="#home"
          color="primary"
          v-bind="props"
        >
          <v-icon dark>
            mdi-chevron-up
          </v-icon>
        </v-btn>
      </template>
      <span class="tooltip">To Top</span>
    </v-tooltip>
  </div>
</template>

<style scoped lang="scss">
@import './pagenav-style';
</style>

<script>
import navMenu from '../Header/menu';

let counter = 0;
function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset,
  };
}

export default {
  data() {
    return {
      menu: navMenu,
      show: false,
      sections: {},
      activeMenu: '',
      menuList: [
        createData(navMenu[0], navMenu[0]),
        createData(navMenu[1], navMenu[1]),
        createData(navMenu[2], navMenu[2]),
        createData(navMenu[3], navMenu[3], -40),
        createData(navMenu[4], navMenu[4], -40),
      ],
    };
  },
  mounted() {
    // Get section id's
    const section = document.querySelectorAll('.scroll-nav-content > *');
    Array.prototype.forEach.call(section, (e) => {
      this.sections[e.id] = e.offsetTop || 0;
    });
  },
  methods: {
    handleScroll() {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      const topPosition = scrollPosition + 100;

      Object.keys(this.sections).forEach((i) => {
        if (this.sections[i] <= topPosition) {
          this.activeMenu = i;
        }
      });

      if (window.scrollY > 500) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
  },
};
</script>
