import { get } from "@vueuse/core";
import { defineStore } from "pinia";

interface CartItem {
  productId: string;
  quantity: number;
  brand: string;
  tread: string;
  width: string;
  profile: string;
  diameter: string;
  price: number;
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [] as CartItem[]
  }),
  actions: {
    addProductToCart({ productId, brand, tread, width, profile, diameter, price }: CartItem) {
      const item = this.cartItems.find(item => item.productId === productId);
    
      if (item) {
        item.quantity++;
      } else {
        this.cartItems.push({
          productId,
          quantity: 1,
          brand,
          tread,
          width,
          profile,
          diameter,
          price
        });
      }
    },
    removeProductFromCart(productId: string) {
      const item = this.cartItems.find(item => item.productId === productId);
    
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          this.cartItems = this.cartItems.filter(item => item.productId !== productId);
        }
      }
    },
    getQuantity(productId: string) {
      const item = this.cartItems.find(item => item.productId === productId);
      return item ? item.quantity : 0;
    },
    getTotalQuantity() {
      return this.cartItems?.reduce((acc, item) => acc + item.quantity, 0) || 0;    }
  }
});