<template>
  <v-navigation-drawer
    v-if="isTablet"
    v-model="openNavMobile"
    fixed
    temporary
    class="mobile-nav"
  >
    <mobile-menu />
  </v-navigation-drawer>
  <v-app-bar
    v-scroll="handleScroll"
    :class="{ fixed: fixed }"
    class="header"
    fixed
    dense
    app
    height="auto"
  >
    <v-container class="pa-0">
      <div class="header-content">
        <nav class="nav-menu">
          <v-btn
            v-if="isTablet"
            :class="{ 'is-active': openNavMobile }"
            class="hamburger hamburger--spin mobile-menu"
            icon
            small
            @click.stop="handleToggleOpen"
          >
            <span class="hamburger-box">
              <span class="bar hamburger-inner" />
            </span>
          </v-btn>
          <div class="logo">
            <nuxt-link :href="localePath(link.home)">
              <img
                :src="logo"
                alt="logo"
                width="100"
              >
            </nuxt-link>
          </div>
          <div
            v-if="isDesktop"
            class="main-menu"
          >
            <div class="scrollactive-nav">
              <template
                v-for="(item, index) in menuPrimary"
                :key="index"
              >
                <v-btn
                  v-if="!invert"
                  :href="'#' + item.link"
                  :class="{ active: activeMenu === item.link }"
                  class="menu-link"
                  size="small"
                  @click="scrollToMyEl(item.name)"
                  v-text="$t('starter.header_'+item.name)"
                />
                <v-btn
                  v-if="invert"
                  :to="localePath('/') + '#' + item.link"
                  v-text="$t('starter.header_'+item.name)"
                />
              </template>
            </div>
          </div>
          <nav class="user-menu">
            <v-btn
              v-if="isDesktop"
              text
            >
              Login
            </v-btn>
            <v-btn color="primary">
              Register
            </v-btn>
            <v-spacer
              v-if="isDesktop"
              class="vertical-divider"
            />
            <setting-menu />
          </nav>
        </nav>
      </div>
    </v-container>
  </v-app-bar>
</template>

<style lang="scss" scoped>
@import './header-style.scss';
</style>

<script>
import { inject } from 'vue';
import { useRouter } from '#app';
import logo from '@/assets/images/starter-logo.svg';
import link from '@/assets/text/link';
import Settings from './Settings';
import MobileMenu from './MobileMenu';
import navMenu from './menu';
import { useLocalePath } from '#imports';

let counter = 0;

function createData(name, href, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    link: href,
    offset,
  };
}

export default {
  components: {
    'mobile-menu': MobileMenu,
    'setting-menu': Settings,
  },
  props: {
    invert: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const localePath = useLocalePath();
    const smoothScroll = inject('smoothScroll');
    function scrollToMyEl(elemId) {
      const myEl = document.getElementById(elemId);
      const router = useRouter();

      router.push(`#${elemId}`);
      smoothScroll({
        scrollTo: myEl, // scrollTo is also allowed to be number
        hash: `#${elemId}`, // required if updateHistory is true
        offset: -100,
      });
    }

    return {
      scrollToMyEl,
      localePath
    };
  },
  data() {
    return {
      logo,
      link,
      fixed: false,
      openNavMobile: null,
      sections: {},
      activeMenu: '',
      menuPrimary: [
        createData(navMenu[0], navMenu[0]),
        createData(navMenu[1], navMenu[1]),
        createData(navMenu[2], navMenu[2]),
        createData(navMenu[3], navMenu[3], -40),
        createData(navMenu[4], navMenu[4], -40),
      ],
    };
  },
  computed: {
    isTablet() {
      const mdDown = this.$vuetify.display.smAndDown;
      return mdDown;
    },
    isDesktop() {
      const mdUp = this.$vuetify.display.mdAndUp;
      return mdUp;
    },
  },
  mounted() {
    const id = window.location.hash;
    const content = id.replace('#', '');
    const element = document.getElementById(content);
    if (element) {
      element.scrollIntoView();
    }

    const section = document.querySelectorAll('.scroll-nav-content > *');
    Array.prototype.forEach.call(section, (e) => {
      this.sections[e.id] = e.offsetTop;
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

      if (scrollPosition > 70) {
        this.fixed = true;
      } else {
        this.fixed = false;
      }
    },
    handleToggleOpen() {
      this.openNavMobile = !this.openNavMobile;
    },
  },
};
</script>
