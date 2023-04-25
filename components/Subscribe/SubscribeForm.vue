<template>
  <div class="subscribe-wrap">
    <v-row justify="center">
      <v-col md="12" cols="12" class="px-6">
        <v-card class="paper">
          <h5 class="text-center text-h5">
            Subscribe Our Newsletter
          </h5>
          <v-form class="container">
            <v-row align="center">
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
                  class="button mt-sm-4"
                  size="large"
                >
                  Send
                  <v-icon
                    right
                    dark
                    class="right-icon"
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
