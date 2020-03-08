<template>
  <div class="hero-content">
    <transition-group
      :name="transition"
      tag="div"
      class="slider-wrapper"
    >
      <div
        v-for="number in [currentImg]"
        :key="number"
        :style="{ background: 'url(' + content[Math.abs(currentImg) % content.length].image + ') no-repeat center center' }"
        class="slide slider-content"
      >
        <div class="inner">
          <h1>{{ $t('common.'+content[Math.abs(currentImg) % content.length].title) }}</h1>
          <p>{{ content[Math.abs(currentImg) % content.length].description }}</p>
          <div class="hero-buttons d-flex justify-center">
            <v-btn
              color="primary"
              class="mx-2"
            >
              Main call to action
            </v-btn>
            <v-btn
              class="mx-2"
              outlined
              color="primary"
            >
              Secondary action
            </v-btn>
          </div>
          <section>
            <img
              :src="content[Math.abs(currentImg) % content.length].userProfile"
              :alt="content[Math.abs(currentImg) % content.length].user"
            >
            <span>
              Posted by&nbsp;
              <strong>
                {{ content[Math.abs(currentImg) % content.length].user }}
              </strong>
            </span>
          </section>
        </div>
      </div>
    </transition-group>
    <a
      href="#"
      class="prev"
      @click="prev"
    >
      &#10094;
    </a>
    <a
      href="#"
      class="next"
      @click="next"
    >
      &#10095;
    </a>
  </div>
</template>

<style scoped lang="scss">
@import './slider-styles';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
export default {
  data() {
    return {
      show: true,
      transition: '',
      autoplay: null,
      content: [
        {
          title: 'title',
          description:
            'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
          button: 'Read More',
          image: imgAPI.photo[0],
          user: 'Luanda Gjokaj',
          userProfile: imgAPI.avatar[2]
        },
        {
          title: 'title',
          description:
            'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
          button: 'Discover',
          image: imgAPI.photo[1],
          user: 'Erich Behrens',
          userProfile: imgAPI.avatar[7]
        },
        {
          title: 'title',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
          button: 'Buy now',
          image: imgAPI.photo[2],
          user: 'Bruno Vizovskyy',
          userProfile: imgAPI.avatar[8]
        }
      ],
      currentImg: 0
    }
  },
  mounted() {
    this.playSlider()
  },
  beforeDestroy() {
    clearInterval(this.autoplay)
  },
  methods: {
    playSlider() {
      this.autoplay = setInterval(() => {
        this.currentImg = this.currentImg + 1
        this.transition = 'slide-right'
      }, 5000)
    },
    manualPlay() {
      clearInterval(this.autoplay)
      setTimeout(() => {
        this.playSlider()
      }, 1)
    },
    next() {
      this.manualPlay()
      this.currentImg += 1
      this.transition = 'slide-right'
    },
    prev() {
      this.manualPlay()
      this.currentImg -= 1
      this.transition = 'slide-left'
    }
  }
}
</script>
