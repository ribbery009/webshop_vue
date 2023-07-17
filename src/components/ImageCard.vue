<template>
  <div class="image-card col-span-1 bg-white shadow rounded overflow-hidden">
    <Image className="w-full h-48 object-cover" :src="src" alt="Random kép" />
  </div>
</template>

<script>
import Image from "./Image.vue";

export default {
  name: 'ImageCard',
  components: {
    Image
  },
  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
