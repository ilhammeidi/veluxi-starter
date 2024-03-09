<template>
  <div>
    <section id="home" />
    <main-container invert>
      <section class="space-top space-bottom">
        <h2 class="text-h2 text-center font-weight-bold mb-4">
          {{ $t('common.title') }}
        </h2>
        <h4 class="text-h4 text-center">
          {{ $t('common.subtitle') }}
        </h4>
      </section>
      <notification />
    </main-container>
  </div>
</template>

<style scoped lang="scss">
@function section-margin($margin) {
  @return $margin * 20;
}
.space-bottom {
  margin-bottom: section-margin($spacing1);
}
.space-top {
  margin-top: section-margin($spacing1);
}
</style>

<script>
import MainContainer from '@/components/MainContainer';
import Notification from '@/components/Notification';
import brand from '@/assets/text/brand';
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    MainContainer,
    Notification,
  },
  head() {
    return {
      title: brand.starter.name + ' - Blank Page',
    };
  },
});
</script>
