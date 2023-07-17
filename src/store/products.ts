import { defineStore } from "pinia";
import axios from "axios";
import { Product } from "../lib/types/product";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [] as Product[],
  }),
  actions: {
    async fetchProducts() {
      try {
        const response = await axios.get(
          "https://mockup-api.marso.hu/products"
        );
        if (response.data && response.data["hydra:member"]) {
          this.products = response.data["hydra:member"] as Product[];
        }
        return this.products;
      } catch (error) {
        throw error;
      }
    },
    getProductById(id: string) {
      return this.products.find((product) => String(product.id) === id);
    }
  },
});
