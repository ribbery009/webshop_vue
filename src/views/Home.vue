<template>
  <div>
    <Banner :banner="banner"/>
    <NewsList />
  </div>
</template>

<script>
import { ref } from 'vue';

//
import { useBannerStore } from '../store/banner';
import { useLoadingStore } from '../store/loading';
//

import Banner from '../components/Banner.vue';
import NewsList from '../components/NewsList.vue';


export default {
  name: 'Home',
  components: {
    Banner,
    NewsList,
  },
  setup() {
    const bannerStore = useBannerStore();
    const loadingStore = useLoadingStore();
    const banner = ref({});

    const loadBanner = async () => {
      try {
        loadingStore.setLoading(true);
        await bannerStore.fetchBanner();
        banner.value = bannerStore.$state.banner;
      } catch (error) {
        console.error('Hiba történt a banner letöltése közben:', error);
      }
      finally {
        loadingStore.setLoading(false);
      }
    };

    loadBanner();

    return { banner };
  },
};
</script>