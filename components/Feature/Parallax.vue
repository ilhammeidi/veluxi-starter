<template>
  <div class="parallax-wrap">
    <v-container>
      <div v-if="loaded" class="banner-parallax-wrap">
        <div class="figure">
          <div>
            <scroll-parallax
              :speed="0.2"
              direction="y"
            >
              <svg
                width="845px"
                height="1099px"
                class="parallax-vertical parallax-dot"
              >
                <use xlink:href="/images/decoration/dot-deco.svg#dot" />
              </svg>
            </scroll-parallax>
          </div>
        </div>
        <div class="figure">
          <div>
            <scroll-parallax
              :speed="0.25"
              direction="y"
            >
              <svg
                width="902px"
                height="1042px"
                class="parallax-vertical parallax-triangle"
              >
                <use xlink:href="/images/decoration/triangle-deco.svg#triangle" />
              </svg>
            </scroll-parallax>
          </div>
        </div>
        <div class="figure">
          <div>
            <scroll-parallax
              :speed="0.2"
              direction="y"
            >
              <svg
                width="600px"
                height="570px"
                class="parallax-vertical parallax-circle"
              >
                <use xlink:href="/images/decoration/circle-deco.svg#circle" />
              </svg>
            </scroll-parallax>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
@use'./feature-styles';
</style>

<script>
export default {
  data: () => ({
    loaded: false,
  }),
  mounted() {
    this.loaded = true;
  },
};
</script>
