<template>
  <button v-if="isVisible" @click="scrollToTop" class="flex justify-center items-center fixed bottom-5 right-5 rounded-full w-14 h-14 border-none transition-all shadow-none hover:scale-110">
  <svg
  class="transform text-white transition-all duration-300 -rotate-90"
    width="30"
    height="30"
    viewBox="0 0 24 24"
 fill="currentColor"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.7071 12.7071C13.0976 12.3166 13.0976 11.6834 12.7071 11.2929L7.41421 6L8.82843 4.58579L14.8284 10.5858L16.2426 12L14.8284 13.4142L8.82843 19.4142L7.41421 18L12.7071 12.7071Z"
    />
  </svg>
  </button>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const isVisible = ref(false);

    const checkScroll = () => {

      isVisible.value = window.scrollY > 200;
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    onMounted(() => {
      window.addEventListener("scroll", checkScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", checkScroll);
    });

    return {
      isVisible,
      scrollToTop
    };
  },
};
</script>

<style scoped>

</style>