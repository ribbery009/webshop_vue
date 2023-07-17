<template>
  <div :style="{ width: width }" class="flex justify-center">
    <div v-if="column.type === 'text'" class="flex w-full justify-between px-4 md:px-0 md:justify-center"> 
      <span class="flex justify-end items-center text-tertiary font-bold">
      {{mobileLabel }}
    </span>
    <span class="flex justify-end items-center text-tertiary font-semibold">
      {{ column.label }}
    </span>   
    </div>
   
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
        <span class="mx-2 text-tertiary">{{ quantity }}</span>
        <button
          @click="addToCart(column.value)"
          class="bg-primary rounded-full w-8 h-10 flex justify-center items-center transition-all hover:bg-red-700 border-none"
        >
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
//
import { useCartStore } from '../../store/cart';
import { useProductsStore } from '../../store/products';


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
  mobileLabel: {
    type: String,
    required: false,
    default: "",
  },
});

const cartStore = useCartStore();
const productsStore = useProductsStore();

const quantity = computed(() => cartStore.getQuantity(props.column.value));

const mobileLabels = computed(() => props.mobileLabel)
const addToCart = async (productId) => {

  if (!productsStore.products.length) {
    await productsStore.fetchProducts();
  }

  const product = productsStore.getProductById(productId);

  // Check if product exists
  if (!product) {
    console.error(`Product with ID ${productId} not found`);
    return;
  }


 cartStore.addProductToCart({
    productId: product.id,
    brand: product.brand,
    tread: product.tread,
    width: product.width,
    profile: product.profile,
    diameter: product.diameter,
    price: product.price,
  });
};


const removeFromCart = (productId) => {
  cartStore.removeProductFromCart(productId);
}
</script>