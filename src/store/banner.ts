import { defineStore } from "pinia";
import axios from "axios";

export const useBannerStore = defineStore("banner", {
  state: () => ({
    banner: {} as any,
  }),
  actions: {
    async fetchBanner() {
      try {
        const response = await axios.get(
          "https://mockup-api.marso.hu/banners"
        );
        if (response.data && response.data["hydra:member"]) {
          this.banner = response.data["hydra:member"];
        }
        return this.banner;
      } catch (error) {
        throw error;
      }
    },

  },
});
