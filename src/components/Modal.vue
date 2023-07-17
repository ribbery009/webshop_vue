<template>
  <transition name="fade">
    <div
    class="fixed inset-0 z-50 flex items-center justify-center overflow-auto text-black bg-black bg-opacity-50">
      <div class="relative bg-white rounded-lg px-4 pt-5 pb-4 sm:max-w-sm sm:w-full sm:p-6">
        <button
          type="button"
          class="absolute top-0 right-0 p-1 border-none duration-150 ease-in-out transition-all  rounded-full hover:bg-gray-200 sm:p-2"
          @click="$emit('close-modal')"
        >
          <svg
            class="w-6 h-6 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div>
          <h3 class="text-lg leading-6 font-bold text-gray-900">Kosár</h3>
          <ul>
            <div class="mt-8 text-lg font-normal" v-if="cartItems.length == 0">
              Az ön kosara jelenleg üres.
              <router-link
            to="/products"
            @click="$emit('close-modal')"
            class="py-2 flex flex-col items-center mt-4 transition-all justify-center text-tertiary bg-secondary hover:bg-red-700 rounded-md mr-4 px-4 cursor-pointer hover:text-white text-sm "
          >
            <i class="fas fa-shopping-cart text-lg"></i>
            Tovább a termékekhez
          </router-link>
            </div>
            <li
              v-for="item in cartItems"
              :key="item.productId"
              class="my-2"
            >
              <div>{{ item.width }}</div>
              <div>{{ item.quantity }}</div>
            </li>
          </ul>
          <div class="mt-5 sm:mt-6" v-if="cartItems.length > 0">
            <span class="flex w-full rounded-md shadow-sm">
              <button
                @click="checkout"
                type="button"
                class="inline-flex justify-center w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              >
                Checkout
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { useCartStore } from '../store/cart';

const cartStore = useCartStore();
const cartItems = cartStore.cartItems;

const checkout = () => {
  // Implement checkout logic here
};
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>