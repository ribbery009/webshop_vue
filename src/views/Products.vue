<template>
  <div id="products" class="bg-secondary w-full">  
    <ProductList/>
  </div>
</template>

<script>

import ProductList from '../components/ProductList.vue'

export default {
  name: 'Products',
  components: {
    ProductList,
  },
};
</script>
