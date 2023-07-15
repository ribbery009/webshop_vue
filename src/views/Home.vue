<template>
  <div class="bg-secondary w-full">
    <Header />
    <Banner />
    <NewsList :news="news" />
    <Footer />
    <Cart v-if="cartOpen" />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Banner from '../components/Banner.vue'
import NewsList from '../components/NewsList.vue'
import Footer from '../components/Footer.vue'
import Cart from '../components/Cart.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Banner,
    NewsList,
    Footer,
    Cart,
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