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
      class="bg-white mb-4 grid grid-cols-6 py-2 rounded-md"
    >
      <TableCell
        v-for="(column, columnIndex) in row.cells"
        :key="columnIndex"
        :column="column"
        :width="columnWidths[columnIndex]"
      />
    </div>
  </div>
</template>

<script>
import { toRefs } from "vue";
//
import TableCell from "./TableCell.vue";

export default {
  components: {
    TableCell,
  },
  props: {
    rows: {
      type: Array,
      default: () => [],
    },
    columnWidths: {
      type: Array,
      default: () => [],
    },
  },
};
</script>