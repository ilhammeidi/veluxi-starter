<template>
  <div>
    <section id="home" />
    <div class="main-wrap">
      <main-header />
      <main class="container-wrap">
        <section>
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
        <section
          class="page-section"
        >
          <counter />
        </section>
        <section
          id="testimonials"
          class="space-top"
        >
          <Testimonials />
        </section>
        <section
          id="pricing"
          class="space-top"
        >
          <pricing />
        </section>
        <section
          id="blog"
          class="space-top space-bottom"
        >
          <blog />
        </section>
        <section id="subscribe">
          <subscribe />
        </section>
      </main>
      <hidden point="mdDown">
        <page-nav />
      </hidden>
      <hidden point="mdDown">
        <notification />
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
  overflow: hidden;
}
.space-bottom {
  margin-bottom: section-margin($spacing1);
}
.space-top {
  padding-top: section-margin($spacing1);
}
.container-wrap {
  margin-top: $spacing15;
  & > section {
    position: relative;
  }
}
</style>

<script>
import Header from '~/components/Header'
import Hidden from '~/components/Hidden'
import AnimateSlider from '~/components/AnimateSlider'
import Feature from '~/components/Feature'
import Counter from '~/components/Counter'
import Testimonials from '~/components/Testimonials'
import Pricing from '~/components/Pricing'
import Blog from '~/components/Blog'
import Subscribe from '~/components/Subscribe'
import Footer from '~/components/Footer'
import PageNav from '~/components/PageNav'
import Notification from '~/components/Notification'
import brand from '~/static/text/brand'

export default {
  components: {
    'main-header': Header,
    'animate-slider': AnimateSlider,
    Hidden,
    Feature,
    Counter,
    Testimonials,
    Pricing,
    Blog,
    Subscribe,
    PageNav,
    Notification,
    'main-footer': Footer
  },
  head() {
    return {
      title: brand.starter.name + ' - Home Page'
    }
  }
}
</script>
