<template>
  <div class="news-item col-span-1 bg-white shadow rounded overflow-hidden">
    <Image
      className="w-full h-48 object-cover"
      :src="item.image"
      alt="Hír kép"
    />
    <div class="p-4">
      <h2 class="font-bold text-xl mb-2">{{ item.title }}</h2>
      <div class="text-gray-700 text-base" v-html="item.description"></div>
      <p class="mt-2 text-sm text-gray-500">
        {{ new Date(item.createdAt).toLocaleDateString() }}
      </p>
    </div>
  </div>
</template>
<script lang="ts" >
import { News } from "../lib/types/news";

export default {
  name: "NewsItem",
  props: {
    item: {
      type: Object as () => News,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>