<template>
  <transition name="fade">
    <div
      class="fixed inset-0 z-50 flex items-center justify-center overflow-auto text-black bg-black bg-opacity-50"
      v-if="isModalOpen"
    >
      <div class="relative bg-white rounded-lg px-4 pt-5 pb-4 sm:max-w-sm sm:w-full sm:p-6">
        <button
          type="button"
          class="absolute top-0 right-0 p-1 transition-opacity duration-150 ease-in-out bg-white rounded-full hover:text-gray-500 sm:p-2"
          @click="closeModal"
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
          <h3 class="text-lg leading-6 font-medium text-gray-900">Your Cart</h3>
          <ul>
            <li
              v-for="item in cartItems"
              :key="item.productId"
              class="my-2"
            >
              <div>{{ item.productName }}</div>
              <div>{{ item.quantity }}</div>
            </li>
          </ul>
          <div class="mt-5 sm:mt-6">
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
import { ref } from 'vue';
import { useCartStore } from '../store/cart';

const cartStore = useCartStore();
const cartItems = cartStore.cartItems;
const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

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