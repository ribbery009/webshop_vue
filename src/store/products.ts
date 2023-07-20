import { defineStore } from "pinia";
import axios from "axios";
import { Product } from "../lib/types/product";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [] as Product[],
  }),
  actions: {
    async fetchProducts(orderBy = {}) {
      const params = new URLSearchParams();
      for (const [key, value] of Object.entries(orderBy)) {
        params.append(`order[${key}]`, `${value}`);
      }
      try {
        const response = await axios.get(
          `https://mockup-api.marso.hu/products${
            params.toString() ? "?" + params.toString() : ""
          }`
        );
        if (response.data && response.data["hydra:member"]) {
          this.products = response.data["hydra:member"];
        }
        return this.products;
      } catch (error) {
        throw error;
      }
    },
    getProductById(id: number) {
      return this.products.find((product) => product.id == id);
    },
  },
});
