<template>
  <v-app>
    <div class="outer-wrap">
      <div>
        <h1>{{ error.statusCode }}</h1>
        <div class="err-info">
          <h2 v-if="error.statusCode === 404">
            {{ pageNotFound }}
          </h2>
          <h2 v-else>
            {{ otherError }}
          </h2>
        </div>
      </div>
    </div>
  </v-app>
</template>

<style scoped lang="scss">
.outer-wrap {
  color: #000;
  background: #fff;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    display: inline-block;
    border-right: 1px solid rgba(0, 0, 0, 0.3);
    margin: 0;
    margin-right: 20px;
    padding: 10px 23px 10px 0;
    font-size: 24px;
    font-weight: 500;
    vertical-align: top;
  }
  .err-info {
    display: inline-block;
    text-align: left;
    line-height: 49px;
    height: 49px;
    vertical-align: middle;
    h2 {
      font-size: 14px;
      font-weight: normal;
      line-height: inherit;
      margin: 0;
      padding: 0;
    }
  }
}
</style>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  data() {
    return {
      pageNotFound: 'Not Found',
      otherError: 'An error occurred'
    }
  }
}
</script>
