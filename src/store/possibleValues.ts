import { defineStore } from "pinia";
import axios from "axios";

export const usePossibleStore = defineStore("possible-values", {
  state: () : {options: Record<string, string[]>} => ({
    options: {},
  }),
  actions: {
    async fetchPossibleOptions(param:string) {
      try {
        const response = await axios.get(`https://mockup-api.marso.hu/products/get-possible-values/${param}`);
        if (response.data && response.data["values"]) {
          this.options[param] = response.data["values"];
        }

      } catch (error) {
        throw error;
      }
    },
  },
});