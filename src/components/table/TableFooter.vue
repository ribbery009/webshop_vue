<template>
  <div class="bg-white py-4 px-2 w-full rounded-md" v-if="totalPages">
    <div class="flex justify-end bg-tertiary rounded-md">
    <div class="flex">
      <div @click="page > 1 && $emit('changePage', page - 1)" class="py-2 px-4 text-white hover:bg-red-700 cursor-pointer rounded-md">
        <span class="mr-1">&larr;</span> Előző
      </div>
      <div v-for="pageNumber in visiblePageNumbers" 
           :key="pageNumber" 
           :class="getPageNumberClass(pageNumber)" 
           @click="pageNumber !== page && $emit('changePage', pageNumber)"
           class="cursor-pointer">
        {{ pageNumber }}
      </div>
      <div @click="page < totalPages && $emit('changePage', page + 1)" class="py-2 px-4 text-white hover:bg-red-700 cursor-pointer rounded-md">
        Következő <span class="ml-1">&rarr;</span>
      </div>
    </div>
  </div>
  </div>
 
</template>

<script>
export default {
  props: {
    page: Number,
    totalPages: Number
  },
  methods: {
    getPageNumberClass(pageNumber) {
      const baseClasses = "py-2 px-4 text-white";
      const activeClass = "bg-red-700";
      const inactiveClass = "hover:bg-red-700";

      return pageNumber === this.page
        ? `${baseClasses} ${activeClass} font-bold`
        : `${baseClasses} ${inactiveClass} hover:bg-opacity-90`;
    }
  },
  computed: {
    visiblePageNumbers() {
      const maxVisiblePages = 3;

      if (this.totalPages <= maxVisiblePages) {
        return Array.from({ length: this.totalPages }, (_, i) => i + 1);
      } else {
        const middlePage = this.page;
        let startPage = middlePage - Math.floor(maxVisiblePages / 2);
        let endPage = middlePage + Math.floor(maxVisiblePages / 2);

        if (startPage < 1) {
          endPage += 1 - startPage;
          startPage = 1;
        }

        if (endPage > this.totalPages) {
          startPage -= endPage - this.totalPages;
          endPage = this.totalPages;
        }

        return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
      }
    }
  }
};
</script>
