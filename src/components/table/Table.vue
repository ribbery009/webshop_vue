<template>
  <div class="w-full">
    <TableHeader
      v-if="!isMobile"
      :headers="headers"
      :columnWidths="columnWidths"
      @sortTable="handleSortTable"
      :currentIsAscending="isAscending"
      :currentSortedColumn="sortedColumn"
    />
    <TableRow :rows="currentPageRows" :columnWidths="columnWidths" :headers="isMobile ? headers : []"/>
    <TableFooter
      :page="page"
      :totalPages="totalPages"
      @prevPage="prevPage"
      @nextPage="nextPage"
      @changePage="changePage"
    />
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
//
import TableHeader from "./TableHeader.vue";
import TableCell from "./TableCell.vue";
import TableFooter from "./TableFooter.vue";
import TableRow from "./TableRow.vue";
import { useWindowSize } from '@vueuse/core';

export default {
  components: {
    TableHeader,
    TableCell,
    TableFooter,
    TableRow,
  },
  props: {
    rows: {
      type: Array,
      default: () => [],
    },
    headers: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const page = ref(1);
    const rowsPerPage = ref(5);

    const sortedColumn = ref(null);
    const isAscending = ref(true);

    const { width } = useWindowSize();

    const isMobile = computed(() => width.value < 768);

    const sortedRows = computed(() => {
      const rows = [...props.rows];

      if (sortedColumn.value) {
        rows.sort((a, b) => {
          const aCell = a.cells.find(
            (cell) => cell.name === sortedColumn.value
          );
          const aValue = aCell ? aCell.value : undefined;
          const bCell = b.cells.find(
            (cell) => cell.name === sortedColumn.value
          );
          const bValue = bCell ? bCell.value : undefined;

          if (aValue && bValue) {
            const comparison = String(aValue).localeCompare(String(bValue));
            return isAscending.value ? comparison : -comparison;
          }
          return 0;
        });
      }

      return rows;
    });

    const totalPages = computed(() =>
      Math.ceil(sortedRows.value.length / rowsPerPage.value)
    );

    const columnWidths = computed(() =>
      props.headers.map((header) => header.width)
    );

    const currentPageRows = computed(() => {
      const start = (page.value - 1) * rowsPerPage.value;
      const end = start + rowsPerPage.value;
      return sortedRows.value.slice(start, end);
    });

    const handleSortTable = ({ columnName, isAscending: ascending }) => {
      sortedColumn.value = columnName;
      isAscending.value = ascending;
    };

    const prevPage = () => {
      if (page.value > 1) {
        page.value--;
      }
    };

    const nextPage = () => {
      if (page.value < totalPages.value) {
        page.value++;
      }
    };

    const changePage = (newPage) => {
      page.value = newPage;
    };

    return {
      page,
      totalPages,
      currentPageRows,
      prevPage,
      nextPage,
      columnWidths,
      sortedColumn,
      isAscending,
      handleSortTable,
      changePage,
      isMobile,
    };
  },
};
</script>
