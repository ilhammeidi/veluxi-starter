<template>
  <div>
    <div class="main-wrap">
      <main-header />
      <main class="container-wrap scroll-nav-content">
        <section id="home">
          <v-container>
            <animate-slider />
          </v-container>
        </section>
        <section
          id="feature"
          class="space-top space-bottom"
        >
          <v-container>
            <feature />
          </v-container>
        </section>
        <div id="counter">
          <counter dark />
        </div>
        <div
          id="testimonials"
          class="space-top"
        >
          <Testimonials />
        </div>
        <div
          id="pricing"
          class="space-top"
        >
          <pricing />
        </div>
        <div
          id="blog"
          class="space-top space-bottom"
        >
          <blog />
        </div>
        <div
          id="subscribe"
          class="space-bottom-short"
        >
          <subscribe />
        </div>
      </main>
      <hidden point="mdDown">
        <notification />
      </hidden>
      <hidden point="smDown">
        <page-nav />
      </hidden>
      <main-footer />
    </div>
  </div>
</template>

<style scoped lang="scss">
@function section-margin($margin) {
  @return $margin * 15;
}
.main-wrap {
  position: relative;
  width: 100%;
}
.space-bottom {
  margin-bottom: section-margin($spacing1);
}
.space-top {
  padding-top: section-margin($spacing1);
}
.space-bottom-short {
  margin-bottom: section-margin($spacing1 * 0.5);
}
.space-top-short {
  margin-top: section-margin($spacing1 * 0.5);
}
.container-wrap {
  margin-top: $spacing15;
  & > section {
    position: relative;
  }
}
</style>

<script>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import Header from '@/components/Header';
import AnimateSlider from '@/components/AnimateSlider';
import Feature from '@/components/Feature';
import Counter from '@/components/Counter';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Blog from '@/components/Blog';
import Subscribe from '@/components/Subscribe';
import PageNav from '@/components/PageNav';
import Notification from '@/components/Notification';
import Hidden from '@/components/Hidden';
import Footer from '@/components/Footer';
import brand from '@/assets/text/brand';
import { defineNuxtComponent, useRouter, useCookie } from '#app';

export default defineNuxtComponent({
  components: {
    'main-header': Header,
    'animate-slider': AnimateSlider,
    Feature,
    Counter,
    Testimonials,
    Pricing,
    Blog,
    Subscribe,
    Notification,
    PageNav,
    Hidden,
    'main-footer': Footer,
  },
  head() {
    return {
      title: brand.starter.name + ' - Home Page',
    };
  },
  setup() {
    // push route to the stored cookie languages only for index page
    const router = useRouter();
    const storedLang = useCookie('i18n_redirected');
    const i18nLocale = useI18n();

    const defaultLocale = '/' + i18nLocale.fallbackLocale.value;
    onMounted(() => {
      const rootUrl = document.location.pathname === '/' || document.location.pathname === defaultLocale;
      if (storedLang.value && rootUrl) {
        router.push({ path: `/${storedLang.value}` });
      }
    });
  },
});
</script>
