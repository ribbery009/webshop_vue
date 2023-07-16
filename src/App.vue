<template>
<div id="app" class="bg-secondary w-full min-h-screen flex flex-col">
      <Header @toggle-cart="toggleCart"/>
      <div class="content-container pb-[80px]">
              <router-view />
    </div>
   
    <Footer />
    <Modal v-if="isModalOpen" @close-modal="toggleCart" />  </div>
</template>

<script setup>

import { ref } from 'vue';

//

import 'vue3-toastify/dist/index.css';
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Modal from './components/Modal.vue';

const isModalOpen = ref(false);

const toggleCart = () => {
  isModalOpen.value = !isModalOpen.value;
};
</script>
<style scoped>
.content-container {
  min-height: calc(100vh - 160px);
}
</style>

