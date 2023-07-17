<template>
  <form @submit.prevent="submitForm" class="flex flex-col gap-4 mb-4">
    <h2 class="text-2xl font-bold">Számlázási adatok</h2>

    <div class="flex flex-col">
      <InputField
        id="email"
        label="Email"
        v-model="billingData.email"
        type="email"
        :isRequired="true"
      />
    </div>

    <div class="flex flex-col">
      <InputField
        id="phone"
        label="Telefonszám"
        v-model="billingData.phone"
        type="tel"
        :isRequired="true"
      />
    </div>

    <div class="flex flex-col">
      <InputField
        id="address"
        label="Cím"
        v-model="billingData.address"
        type="text"
        :isRequired="true"
      />
    </div>

    <div class="flex flex-col">
      <SelectField
        label="Szállítási mód"
        v-model="deliveryMethod"
        :options="deliveryOptions"
        @change="changeDeliveryMethod"
      />
    </div>

    <div v-if="deliveryMethod === 'delivery'">
      <InputField
        id="deliveryAddress"
        label="Szállítási cím"
        v-model="shippingData.address"
        type="text"
        className="w-full"
        :isRequired="true"
      />
    </div>

    <Button
      type="submit"
      color="red"
      className="inline-flex justify-center w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
    >
      Beküldés
    </Button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import InputField from "./fields/InputField.vue";
import SelectField from "./fields/SelectField.vue";
import Button from "./fields/Button.vue";
import { toast } from "vue3-toastify";
import { defineEmits } from "vue";
import { useCartStore } from "../store/cart";
import { deliveryOptions } from "../lib/const/deliveryOption";

const billingData = ref({
  email: "",
  phone: "",
  address: "",
});

const deliveryMethod = ref("pickup");
const cartStore = useCartStore();

const shippingData = ref({
  address: "",
});

const emit = defineEmits(["close-modal"]);

const submitForm = () => {
  toast.success("Sikeres rendelés!");
  cartStore.clearCart();
  emit("close-modal");
};

const changeDeliveryMethod = () => {
  if (deliveryMethod.value === "pickup") {
    shippingData.value.address = "";
  }
};
</script>