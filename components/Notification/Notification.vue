<template>
  <v-snackbar
    v-model="snackbar"
    :timeout="-1"
    class="notification"
    location="left bottom"
  >
    <div class="d-flex align-center me-2">
      <div class="action me-2">
        {{ $t('common.notif_msg') }}
      </div>
      <v-btn
        outlined
        color="white"
        class="button"
        @click="snackbar = false"
      >
        {{ $t('common.accept') }}
      </v-btn>
    </div>
  </v-snackbar>
</template>

<style lang="scss" scoped>
@import './notification-style.scss';
</style>

<script>
export default {
  data() {
    return {
      snackbar: true,
    };
  },
};
</script>
