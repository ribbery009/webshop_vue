<template>
  <transition name="fade">
    <div
      class="fixed inset-0 z-50 flex items-center justify-center text-black bg-black bg-opacity-50"
    >
      <div
        class="relative bg-white rounded-lg px-4 pt-5 pb-4 md:max-w-md w-full sm:p-6"
      >
        <Button
          class="absolute top-0 right-1 p-1 border-none duration-150 ease-in-out transition-all rounded-full hover:bg-gray-200 sm:p-2"
          @click="$emit('close-modal')"
          type="button"
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
        </Button>
        <div v-if="currentPage === 'cart'">
          <h3 class="text-lg leading-6 font-bold text-gray-900">Kosár</h3>
          <ul
            :class="
              'max-h-[500px] overflow-auto ' +
              (cartItems?.length > 1 ? 'px-2' : '')
            "
          >
            <div class="mt-8 text-lg font-normal" v-if="cartItems?.length == 0">
              Az ön kosara jelenleg üres.
              <router-link
                to="/products"
                @click="$emit('close-modal')"
                class="py-2 flex flex-col items-center mt-4 transition-all justify-center text-tertiary bg-secondary hover:bg-red-700 rounded-md mr-4 px-4 cursor-pointer hover:text-white text-sm"
              >
                <i class="fas fa-shopping-cart text-lg"></i>
                Tovább a termékekhez
              </router-link>
            </div>
            <li
              v-for="item in cartItems"
              :key="item.productId"
              class="my-2 w-full border-b-2 border-gray-200 pb-4 pt-3 gap-4 flex flex-col"
            >
              <div class="flex justify-between w-full">
                <span class="font-bold">Név </span>
                <span class="font-semibold">{{
                  item.brand + " " + item.tread
                }}</span>
              </div>
              <div class="flex justify-between w-full">
                <span class="font-bold">Méret </span>
                <span class="font-semibold">{{
                  item.width + " / " + item.profile + " R " + item.diameter
                }}</span>
              </div>
              <div class="flex justify-between w-full">
                <span class="font-bold">Ár </span>
                <span class="font-semibold"
                  >{{ item.price.toLocaleString() }} Ft</span
                >
              </div>
              <div class="flex justify-between w-full">
                <span class="font-bold">Mennyiség </span>
                <span class="font-semibold">{{ item.quantity }}</span>
              </div>
            </li>
          </ul>
          <div class="flex justify-between mt-4">
            <span class="font-bold text-lg">Összesen: </span>
            <span class="font-semibold text-lg"
              >{{ cartStore.getTotalPrice().toLocaleString() }} Ft</span
            >
          </div>
          <div class="mt-5 sm:mt-6" v-if="cartItems.length > 0">
            <span class="flex w-full rounded-md shadow-sm">
              <Button
                @click="clearCart"
                type="button"
                color="red"
                className=" inline-flex justify-center w-full px-4 py-2 text-white bg-primary rounded-md hover:bg-red-700 focus:outline-none transition ease-in-out duration-150 sm:text-sm sm:leading-5 hover:border-red-700"
              >
                Kosár törlése
              </Button>
            </span>
          </div>
          <div class="mt-2" v-if="cartItems?.length > 0">
            <span class="flex w-full rounded-md shadow-sm">
              <Button
                @click="goToForm"
                type="button"
                color="red"
                className="inline-flex justify-center w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              >
                Tovább
              </Button>
            </span>
          </div>
        </div>
        <div v-else-if="currentPage === 'form'">
          <Form 
          @close-modal="$emit('close-modal')"
          />
          <Button
            @click="goToForm"
            type="button"
            color="black"
            className="mb-2 inline-flex justify-center w-full px-4 py-2 rounded-md  focus:outline-none  focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5 bg-secondary hover:border-slate-300 hover:bg-slate-300"
          >
            Vissza
          </Button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { useCartStore } from "../store/cart";
import { toast } from "vue3-toastify";
import { defineEmits, ref } from "vue";
import Form from "./Form.vue";

const cartStore = useCartStore();
const cartItems = cartStore.cartItems;

const currentPage = ref("cart");
// const currentPage = "cart";

const goToCart = () => {
  currentPage.value = "cart";
};

const goToForm = () => {
  currentPage.value = "form";
};

const emit = defineEmits(["close-modal"]);

const checkout = () => {};

const clearCart = () => {
  cartStore.clearCart();
  toast.success("A Kosár tartalma sikeresen törölve!");
  emit("close-modal");
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