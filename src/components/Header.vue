<template>
  <div class="bg-primary flex items-center h-20 px-4  relative">    
  <div class="flex container mx-auto items-center">
      <a class="h-12 py-2 mr-4 cursor-pointer flex items-center">
        <img
          class="h-12"
          src="https://www.marso.hu/theme/marso/assets/images/marso-logo-horizontal.svg"
          alt="Logo"
        />
      </a>

      <div class="flex justify-between w-full h-full">
        <div class="flex">
          <router-link
            to="/"
            active-class="!bg-red-700"
            class="flex flex-col items-center text-white justify-center bg-transparent hover:bg-red-700 rounded-none px-4 cursor-pointer hover:text-white"
          >
            <i class="fas fa-home text-2xl"></i>
            Főoldal
          </router-link>
          <router-link
            to="/products"
            active-class="!bg-red-700"
            class="flex flex-col items-center text-white justify-center bg-transparent hover:bg-red-700 rounded-none mr-4 px-4 cursor-pointer hover:text-white "
          >
            <i class="fas fa-shopping-cart text-2xl"></i>
            Termékek
          </router-link>
        </div>
        <button
          class="flex flex-col items-center text-white justify-center bg-transparent hover:bg-red-700 rounded-none px-4 cursor-pointer border-none relative"
          @click="emitToggleCart"       >
          <i class="fas fa-shopping-cart text-2xl"></i>
          Kosár
          <span v-if="cartItemCount > 0" class="bg-red-500 text-white transition-all text-xs rounded-full w-5 h-5 absolute top-0 left-0 flex items-center justify-center">
          {{ cartItemCount }}
        </span>
        </button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useCartStore } from '../store/cart';
import { computed,defineEmits } from 'vue';

const cartStore = useCartStore();
const cartItemCount = computed(() => cartStore.getTotalQuantity());
const emit = defineEmits(["toggle-cart"]);

function emitToggleCart() {
  emit('toggle-cart');
}
</script>

<style scoped>
</style>