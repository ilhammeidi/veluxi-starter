<template>
  <v-container>
    <h3 class="text-h3 text-center mb-4">
      Blog and News
    </h3>
    <p class="text-body-1 text-center mb-4">
      Curabitur egestas consequat lorem, vel fermentum augue porta id.
    </p>
    <div
      id="blog-list"
      class="blog-wrap"
    >
      <v-row justify="center">
        <v-col
          md="9"
          cols="12"
        >
          <v-row>
            <v-col
              v-for="(item, index) in blogData"
              :key="index"
              md="4"
              cols="12"
              class="px-4"
            >
              <post-card
                :title="item.title"
                :desc="item.desc"
                :date="item.date"
                img="https://source.unsplash.com/random"
                href="#"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
@use'./blog-style';
</style>

<script>
import PostCard from '../Cards/PostCard';

export default {
  components: {
    PostCard,
  },
  data() {
    return {
      blogData: [
        {
          title: 'Heading',
          date: '19 June 2020',
          desc:
            'This is a media card. You can use this section to describe the content.',
        },
        {
          title: 'Heading',
          date: '19 June 2020',
          desc:
            'This is a media card. You can use this section to describe the content.',
        },
        {
          title: 'Heading',
          date: '19 June 2020',
          desc:
            'This is a media card. You can use this section to describe the content.',
        },
      ],
    };
  },
};
</script>
