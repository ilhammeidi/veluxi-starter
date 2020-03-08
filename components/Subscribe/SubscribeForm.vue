<template>
  <div class="subscribe-wrap">
    <v-row justify="center">
      <v-col md="12" cols="12" class="px-6">
        <v-card class="paper">
          <h5 class="text-center headline">Subscribe Our Newsletter</h5>
          <v-form class="container">
            <v-row align="end">
              <v-col
                sm="9"
                cols="12"
              >
                <v-text-field
                  id="standard-email"
                  label="Your Email"
                  class="text-field"
                />
              </v-col>
              <v-col
                sm="3"
                cols="12"
              >
                <v-btn
                  color="primary"
                  class="button"
                >
                  Send
                  <v-icon
                    right
                    dark
                  >
                    mdi-send
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
@import './subscribe-style';
</style>
