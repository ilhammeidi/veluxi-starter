<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      :src="img"
      class="white--text"
      height="200px"
    />
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-text>
      <span class="text--primary">
        <span>{{ desc }}</span>
      </span>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="primary"
      >
        Read more
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped lang="scss">
@import './card-styles';
</style>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    }
  }
}
</script>
