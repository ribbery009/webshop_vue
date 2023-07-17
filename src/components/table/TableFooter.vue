<template>
  <div class="bg-white py-4 px-2 w-full rounded-md" v-if="totalPages">
    <div class="flex justify-center sm:justify-end bg-tertiary rounded-md">
      <div class="flex">
        <div 
          @click="changePage(page - 1)" 
          class="py-2 px-4 text-white hover:bg-red-700 cursor-pointer rounded-md flex"
        >
          <span class="mr-1">&larr;</span> 
          <span class="hidden sm:flex">Előző</span>
        </div>
        <div 
          v-for="pageNumber in visiblePageNumbers" 
          :key="pageNumber" 
          :class="getPageNumberClass(pageNumber)" 
          @click="changePage(pageNumber)"
          class="cursor-pointer"
        >
          {{ pageNumber }}
        </div>
        <div 
          @click="changePage(page + 1)" 
          class="py-2 px-4 text-white hover:bg-red-700 cursor-pointer rounded-md flex"
        >
          <span class="hidden sm:flex">Következő </span>
          <span class="ml-1">&rarr;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  page: Number,
  totalPages: Number,
});

const emit = defineEmits(['changePage']);

const changePage = (newPage) => {
  if (newPage >= 1 && newPage <= props.totalPages) {
    emit('changePage', newPage);
  }
};

const getPageNumberClass = (pageNumber) => {
  const baseClasses = "py-2 px-4 text-white";
  const activeClass = "bg-red-700";
  const inactiveClass = "hover:bg-red-700";

  return pageNumber === props.page
    ? `${baseClasses} ${activeClass} font-bold`
    : `${baseClasses} ${inactiveClass} hover:bg-opacity-90`;
};

const visiblePageNumbers = computed(() => {
  const maxVisiblePages = 3;

  if (props.totalPages <= maxVisiblePages) {
    return Array.from({ length: props.totalPages }, (_, i) => i + 1);
  } else {
    const middlePage = props.page;
    let startPage = middlePage - Math.floor(maxVisiblePages / 2);
    let endPage = middlePage + Math.floor(maxVisiblePages / 2);

    if (startPage < 1) {
      endPage += 1 - startPage;
      startPage = 1;
    }

    if (endPage > props.totalPages) {
      startPage -= endPage - props.totalPages;
      endPage = props.totalPages;
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  }
});
</script>