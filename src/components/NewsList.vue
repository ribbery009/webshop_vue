<template>
  <div class="flex gap-4 container justify-center mx-auto my-4 lg:my-8">
    <div
      v-if="news.length === 0"
      class="text-center py-8 w-full"
    >
      <p class="text-gray-500">Nincs megjeleníthető elem.</p>
    </div>
    <div class="masonry w-3/4 gap-4">
      <div v-for="item in news" :key="item.id" class="masonry-item">
        <news-item
          :item="item"
          class="bg-white shadow rounded overflow-hidden"
        />
      </div>
    </div>
    <div class="w-1/4">
      <div v-for="(item, index) in news" :key="`img-${index}`">
        <image-card src="https://picsum.photos/200/300" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect,inject } from "vue";
import { toast } from "vue3-toastify";
//
import { useNewsStore } from "../store/news";
//
import ImageCard from "./ImageCard.vue";
import NewsItem from "./NewsItem.vue";

export default {
  name: "NewsList",
  components: {
    ImageCard,
    NewsItem,
  },
  setup() {
    const newsStore = useNewsStore();
    const loadingStore = inject('loadingStore');
    const news = ref([]);

    const loadNews = async () => {
      try {
        loadingStore.setLoading(true);

        await newsStore.fetchNews();
        const sortedNews = [...newsStore.$state.news];
        sortedNews.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        news.value = sortedNews;
      } catch (error) {
        toast.error("Hiba történt a hírek letöltése közben.");
      }
      finally {
        loadingStore.setLoading(false);
      }
    };

    watchEffect(() => {
      loadNews();
    });

    return { news };
  },
};
</script>

<style scoped>
.masonry {
  column-count: 3;
}
.masonry-item {
  break-inside: avoid;
  margin-bottom: 16px;
}
</style>