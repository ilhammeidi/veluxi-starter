<template>
  <v-container>
    <h3 class="display-2 text-center mb-4">
      Pricing and Plan
    </h3>
    <p class="body-1 text-center mb-4">
      Curabitur egestas consequat lorem, vel fermentum augue porta id.
    </p>
    <div class="pricing-wrap">
      <v-row justify="center">
        <v-col md="9">
          <v-row align="end">
            <v-col
              v-for="(tier, index) in tiers"
              :key="index"
              md="4"
              sm="tier.title === 'enterpris' ? 12 : 4"
              class="px-5"
            >
              <pricing-card
                :title="tier.title"
                :subheader="tier.subheader"
                :price="tier.price"
                :description="tier.description"
                :button-text="tier.buttonText"
                :button-variant="tier.buttonVariant"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
@import './pricing-style';
</style>

<script>
import PricingCard from '../Cards/PricingCard'

export default {
  components: {
    PricingCard
  },
  data() {
    return {
      tiers: [
        {
          title: 'Free',
          price: '0',
          description: [
            '10 users included',
            '2 GB of storage',
            'Help center access',
            'Email support'
          ],
          buttonText: 'Sign up for free',
          buttonVariant: 'outlined'
        },
        {
          title: 'Pro',
          subheader: 'Most popular',
          price: '15',
          description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support'
          ],
          buttonText: 'Get started',
          buttonVariant: 'contained'
        },
        {
          title: 'Enterprise',
          price: '30',
          description: [
            '50 users included',
            '30 GB of storage',
            'Help center access',
            'Phone & email support'
          ],
          buttonText: 'Contact us',
          buttonVariant: 'outlined'
        }
      ]
    }
  }
}
</script>
