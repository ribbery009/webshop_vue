<template>
  <div class="flex flex-col">
    <h2 class="block text-gray-700 text-sm font-bold mb-2 text-left" :for="id">{{ label }}</h2>
    <input 
    :id="id" 
    :value="modelValue" 
    :type="type" 
    :required="isRequired"
    :class="[className,'text-black shadow bg-secondary appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow focus:shadow-primary pr-8']"
    />
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    label: String,
    modelValue: String,
    type: String,
    className: String,
    isRequired: Boolean,
  },
  emits: ['update:modelValue'],
};
</script>
<style scoped>

</style>