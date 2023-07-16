<template>
  <div class="flex gap-8 p-4 w-full bg-white mb-4 rounded-md">
    <div
      v-for="(options, key) in filterOptions"
      :key="key"
      class="flex flex-col gap-1 relative"
    >
      <label class="block text-gray-700 text-sm font-bold mb-2 text-left">
        {{ getHungarianLabel(key) }}
    </label>
      <div class="relative">
        <select
          v-model="selectedFilters[key]"
          @change="updateFilter"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-8"
        >
          <option value="">Összes</option>
          <option v-for="option in options" :value="option" :key="option">
            {{ option }}
          </option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
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
    <button
      @click="resetFilters"
      class="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Szűrők törlése
    </button>
  </div>
</template>

<script lang="ts">
import { ref, watch, toRefs } from "vue";
import { getHungarianLabel } from "../lib/utils/getHungarianLabel";

export default {
  props: {
    filterOptions: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const { filterOptions } = toRefs(props);
    const selectedFilters = ref({});

    console.log(filterOptions.value);
    watch(filterOptions, (newVal) => {
      selectedFilters.value = Object.keys(newVal).reduce((acc, key) => {
        acc[key] = "";
        return acc;
      }, {});
    }, { immediate: true, deep: true });

    const updateFilter = () => {
      emit('updateFilter', selectedFilters.value);
    };

    const resetFilters = () => {
      selectedFilters.value = Object.keys(filterOptions.value).reduce((acc, key) => {
        acc[key] = "";
        return acc;
      }, {});
      updateFilter();
    }

    return { selectedFilters, updateFilter, resetFilters, getHungarianLabel};
  },
};
</script>