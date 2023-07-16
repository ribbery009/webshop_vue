<template>
  <div id="products" class="bg-secondary w-full">  
    <ProductList/>
  </div>
</template>

<script>

import ProductList from '../components/ProductList.vue'

export default {
  name: 'products',
  components: {
    ProductList,
  },
  data() {
    return {
      news: [],
      cartOpen: false,
    }
  },
}
</script>

<style>
/* Itt hozzáadhatod a színeket, gap-et és egyéb globális stílusokat */
</style>