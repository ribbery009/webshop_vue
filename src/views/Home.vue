<template>
  <div class="bg-secondary w-full">
    <Banner />
    <NewsList :news="news" />
  </div>
</template>

<script>

import Banner from '../components/Banner.vue'
import NewsList from '../components/NewsList.vue'


export default {
  name: 'Home',
  components: { 
    Banner,
    NewsList,
  },
  data() {
    return {
      news: [],
      cartOpen: false,
    }
  },
  // ... további logika és metódusok, mint például a hírek letöltése, a kosár megnyitása/zárása, stb.
}
</script>

<style>
/* Itt hozzáadhatod a színeket, gap-et és egyéb globális stílusokat */
</style>