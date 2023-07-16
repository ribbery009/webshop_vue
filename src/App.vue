<template>
  <div id="app" class="bg-secondary w-full min-h-screen flex flex-col">
    <Header @toggle-cart="toggleCart" />
    <div class="content-container pb-[80px]">
      <router-view />
    </div>

    <Footer />
    <Modal v-if="isModalOpen" @close-modal="toggleCart" />
    <div v-if="isLoading" class="absolute top-0 left-0 w-full h-full flex z-50 justify-center items-center">
      <Loader />
    </div>
  </div>
</template>

<script>
import { ref, watch,provide } from "vue";
import "vue3-toastify/dist/index.css";

//
import { useLoadingStore } from "./store/loading";
//
import Loader from './components/Loader.vue';
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    Footer,
    Header,
    Modal,
    Loader
  },
  setup() {

  const loadingStore = useLoadingStore();
const isLoading = loadingStore.isLoading;

console.log(isLoading);
const isModalOpen = ref(false);

const toggleCart = () => {
  isModalOpen.value = !isModalOpen.value;
};

provide('loadingStore', loadingStore);

return {
  isModalOpen,
  toggleCart,
  isLoading
};

}
};

</script>
<style scoped>
.content-container {
  min-height: calc(100vh - 160px);
}


</style>

