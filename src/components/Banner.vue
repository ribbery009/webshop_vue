<!-- Banner.vue -->
<template>
  <div class="banner relative">
    <img :src="banner[0]?.image"/>
    <!-- <div class="absolute right-0 left-0 top-0 text-white text-xl"> 
{{banner[0].description}}
    </div> -->
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Banner',
  props: {
    banner: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    const banner = ref(props.banner);

    return { banner };
  },
};
</script>

<style scoped>
</style>