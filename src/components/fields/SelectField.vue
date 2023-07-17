<template>
  <div class="flex flex-col">
    <h2 class="block text-gray-700 text-sm font-bold mb-2 text-left">{{ label }}</h2>
    <div class="relative bg-white">
      <select
        class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline pr-8 text-black bg-secondary"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        @change="$emit('change')"
      >
        <option
          v-for="(option, index) in options"
          :key="index"
          :value="option.value"
          class="bg-secondary hover:bg-tertiary hover:text-gray-900 text-gray-800"
        >
          {{ option.label }}
        </option>
      </select>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2"
      >
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M5.293 7.293L10 12l4.707-4.707L16 8.586 10 14.586 4 8.586z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    modelValue: String,
    options: Array,
  },
  emits: ["update:modelValue", "change"],
};
</script>