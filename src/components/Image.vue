<template>
  <div>
    <img
      :src="src"
      :alt="alt"
      :class="className + ' cursor-pointer'"
      @click="openLightbox"
    />
    <div
      v-if="isOpen"
      class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click="closeLightbox"
    >
      <img
        :src="src"
        :alt="alt"
        class="max-w-[90%] max-h-[90%]"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: false,
    default: '',
  },
  className: {
    type: String,
    required: false,
    default: '',
  },
});

const isOpen = ref(false);

const openLightbox = () => {
  isOpen.value = true;
};

const closeLightbox = () => {
  isOpen.value = false;
};
</script>

<style scoped>
img {
  transition: all 0.3s ease-in-out;
}
img:hover {
  transform: scale(1.05);
}
</style>