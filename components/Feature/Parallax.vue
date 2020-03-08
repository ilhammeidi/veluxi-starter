<template>
  <div class="parallax-wrap">
    <v-container>
      <div class="banner-parallax-wrap" v-if="loaded">
        <div class="figure">
          <div>
            <parallax
              :speed-factor="0.2"
              direction="down"
            >
              <svg
                width="845px"
                height="1099px"
                class="parallax-vertical parallax-dot"
              >
                <use xlink:href="/images/decoration/dot-deco.svg#dot" />
              </svg>
            </parallax>
          </div>
        </div>
        <div class="figure">
          <div>
            <parallax
              :speed-factor="0.25"
              direction="down"
            >
              <svg
                width="902px"
                height="1042px"
                class="parallax-vertical parallax-triangle"
              >
                <use xlink:href="/images/decoration/triangle-deco.svg#triangle" />
              </svg>
            </parallax>
          </div>
        </div>
        <div class="figure">
          <div>
            <parallax
              :speed-factor="0.2"
              direction="down"
            >
              <svg
                width="600px"
                height="570px"
                class="parallax-vertical parallax-circle"
              >
                <use xlink:href="/images/decoration/circle-deco.svg#circle" />
              </svg>
            </parallax>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
@import './feature-styles';
</style>

<script>
import Parallax from 'vue-parallaxy'
export default {
  components: {
    Parallax
  },
  data: () => ({
    loaded: false
  }),
  mounted() {
    this.loaded = true
  }
}
</script>
