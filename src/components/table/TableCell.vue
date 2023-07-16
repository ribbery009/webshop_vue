<template>
  <div :style="{ width: width }" class="flex justify-center">
    <span v-if="column.type === 'text'" class="flex justify-end items-center">
      {{ column.label }}
    </span>
    <img
      v-else-if="column.type === 'image'"
      :src="column.value"
      alt=""
      class="max-w-[100px] max-h-[80px] rounded-full"
    />
    <div v-else-if="column.type === 'action'" class="flex"> 
      <div class="flex justify-center items-center">
        <button
          @click="removeFromCart(column.value)"
          class="bg-primary text-white rounded-full w-8 h-10 flex justify-center items-center transition-all hover:bg-red-700 border-none"
        >
          <i class="fas fa-minus"></i>
        </button>
        <span class="mx-2">{{ quantity }}</span>
        <button
          @click="addToCart(column.value)"
          class="bg-primary text-white rounded-full w-8 h-10 flex justify-center items-center transition-all hover:bg-red-700 border-none"
        >
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCartStore } from '../../store/cart';

const props = defineProps({
  column: {
    type: Object,
    required: true,
  },
  width: {
    type: String,
    required: false,
    default: "auto",
  },
});

const cartStore = useCartStore();

const quantity = computed(() => cartStore.getQuantity(props.column.value));

const addToCart = (productId) => {
  cartStore.addProductToCart(productId);
}

const removeFromCart = (productId) => {
  cartStore.removeProductFromCart(productId);
}
</script>