<template>
  <div class="feature-more">
    <v-container>
      <u-animate-container>
        <scroll-wrap target="feature1">
          <v-row id="feature1">
            <v-col
              md="6"
              class="px-6"
              cols="12"
            >
              <div class="feature-item">
                <u-animate
                  name="fadeInLeft"
                  duration="0.6s"
                >
                  <h3 class="title-app display-2">Lorem ipsum dolor</h3>
                </u-animate>
                <u-animate
                  name="fadeInLeft"
                  delay="0.3s"
                  duration="0.6s"
                >
                  <p class="text">
                    Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.
                  </p>
                </u-animate>
              </div>
            </v-col>
            <v-col
              md="6"
              class="px-6"
              cols="12"
            >
              <div class="feature-item">
                <u-animate
                  name="zoomIn"
                  delay="0.3s"
                  duration="0.6s"
                >
                  <div class="deco1" />
                </u-animate>
                <u-animate
                  name="fadeInRight"
                  delay="0.5s"
                  duration="0.6s"
                >
                  <figure class="img">
                    <img
                      :src="imgAPI.photo[5]"
                      alt="img"
                    >
                  </figure>
                </u-animate>
              </div>
            </v-col>
          </v-row>
        </scroll-wrap>
      </u-animate-container>
      <u-animate-container>
        <v-row>
          <v-col
            md="6"
            class="px-6"
            cols="12"
          >
            <div class="feature-item">
              <u-animate
                name="zoomIn"
                delay="0.3s"
                duration="0.6s"
              >
                <div class="deco1" />
              </u-animate>
              <u-animate
                name="fadeInLeft"
                delay="0.5s"
                duration="0.6s"
              >
                <figure class="img">
                  <img
                    :src="imgAPI.photo[0]"
                    alt="img"
                  >
                </figure>
              </u-animate>
            </div>
          </v-col>
          <v-col
            md="6"
            class="px-6"
            cols="12"
          >
            <div class="feature-item">
              <u-animate
                name="fadeInLeft"
                duration="0.6s"
              >
                <h3 class="title-app display-2">Lorem ipsum dolor</h3>
              </u-animate>
              <u-animate
                name="fadeInRight"
                delay="0.5s"
                duration="0.6s"
              >
                <p class="text">
                  Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.
                </p>
              </u-animate>
            </div>
          </v-col>
        </v-row>
      </u-animate-container>
      <u-animate-container>
        <v-row>
          <v-col
            md="12"
            class="px-6"
            cols="12"
          >
            <div class="feature-item last text-center">
              <u-animate
                name="fadeInUp"
                duration="0.6s"
              >
                <h3 class="title-app display-2">Lorem ipsum dolor</h3>
              </u-animate>
              <u-animate
                name="fadeInUp"
                duration="0.6s"
                delay="0.3s"
              >
                <p class="text">
                  Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.
                </p>
              </u-animate>
              <u-animate
                name="zoomIn"
                duration="0.6s"
                delay="0.3s"
              >
                <div class="deco2" />
              </u-animate>
              <u-animate
                name="fadeInUp"
                duration="0.6s"
                delay="0.5s"
              >
                <figure class="img-full">
                  <img
                    :src="imgAPI.photo[1]"
                    alt="img"
                  >
                </figure>
              </u-animate>
            </div>
          </v-col>
        </v-row>
      </u-animate-container>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
@import './feature-styles';
</style>

<script>
import ScrollWrap from '../ScrollWrap'
import imgAPI from '~/static/images/imgAPI'

export default {
  components: {
    ScrollWrap
  },
  data() {
    return {
      imgAPI
    }
  }
}
</script>
