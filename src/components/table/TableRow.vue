<template>
  <div class="table-body my-4">
    <div
      v-if="rows.length === 0"
      class="text-center py-8"
    >
      <p class="text-gray-500">Nincs megjeleníthető elem.</p>
    </div>
    <div
      v-for="(row, index) in rows"
      :key="index"
      class="bg-white mb-4 grid md:grid-cols-6 py-6 md:py-2 rounded-md gap-4"
    >
      <TableCell
        v-for="(column, columnIndex) in row.cells"
        :key="columnIndex"
        :column="column"
        :width="columnWidths[columnIndex]"
        :mobileLabel="headers.length > 0 ? headers[columnIndex].label : ' ' "
      />
    </div>
  </div>
</template>

<script setup>
import TableCell from "./TableCell.vue";

const props = defineProps({
  rows: {
    type: Array,
    default: () => [],
  },
  columnWidths: {
    type: Array,
    default: () => [],
  },
  headers: {
    type: Array,
    default: () => [],
  },
});

const components = { TableCell };
</script>