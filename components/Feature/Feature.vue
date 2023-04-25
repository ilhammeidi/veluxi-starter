<template>
  <div>
    <parallax-feature />
    <main-feature />
    <more-feature />
  </div>
</template>

<script>
import Parallax from './Parallax';
import MainFeature from './MainFeature';
import MoreFeature from './MoreFeature';

export default {
  components: {
    'parallax-feature': Parallax,
    MainFeature,
    MoreFeature,
  },
};
</script>
