<template>
  <div class="bg-primary flex items-center h-20 px-4">
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
          class="flex flex-col items-center text-white justify-center bg-transparent hover:bg-red-700 rounded-none px-4 cursor-pointer border-none"
          @click="toggleCart"
        >
          <i class="fas fa-shopping-cart text-2xl"></i>
          Kosár
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    toggleCart() {
      this.$emit("toggle-cart");
    },
  },
};
</script>

<style scoped>
</style>