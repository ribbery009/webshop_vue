<template>
  <div class="image-card col-span-1 bg-white shadow rounded overflow-hidden">
    <img class="w-full h-48 object-cover" :src="src" alt="Random kép">
  </div>
</template>

<script>
export default {
  name: 'ImageCard',
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
