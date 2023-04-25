<template>
  <v-card class="center-box price-card">
    <v-card-title class="price-header justify-center">
      <h5 class="text-xs-center text-h6">
        {{ title }}
      </h5>
      <div class="small-title text-xs-center text-body-1">
        {{ subheader }}
      </div>
      <v-icon
        v-if="title === 'Pro'"
        class="icon"
      >
        mdi-star-outline
      </v-icon>
    </v-card-title>
    <v-card-text class="pa-4">
      <div class="card-pricing">
        <h2 class="price text-xs-center text-h4">
          $ {{ price }}
        </h2>
        <h6 class="text-subtitle-2">
          / mo
        </h6>
      </div>
      <ul>
        <li
          v-for="(line, index) in description"
          :key="index"
          class="text-center text-subtitle-1"
        >
          {{ line }}
        </li>
      </ul>
    </v-card-text>
    <div class="text-center pa-4">
      <v-btn
        :outlined="buttonVariant === 'outlined'"
        block
        color="primary"
      >
        {{ buttonText }}
      </v-btn>
    </div>
  </v-card>
</template>

<style scoped lang="scss">
@import './pricing-card';
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subheader: {
      type: String,
      default: '',
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: Array,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    buttonVariant: {
      type: String,
      default: 'outlined',
    },
  },
};
</script>
