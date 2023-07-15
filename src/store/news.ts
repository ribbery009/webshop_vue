import { defineStore } from "pinia";
import axios from "axios";
import { News } from "../lib/types/news";

export const useNewsStore = defineStore("news", {
  state: () => ({
    news: [] as News[],
  }),
  actions: {
    async fetchNews() {
      try {
        const response = await axios.get(
          "https://mockup-api.marso.hu/news?page=1"
        );
        if (response.data && response.data["hydra:member"]) {
          this.news = response.data["hydra:member"] as News[];
        }
      } catch (error) {
        throw error;
      }
    },
  },
});
