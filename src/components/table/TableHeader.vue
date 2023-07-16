<template>
  <div class="w-full bg-tertiary rounded-md">
    <div class="grid grid-cols-6 py-4">
      <div
        v-for="(column, index) in headers"
        :key="index"
        :style="`grid-column: span ${columnWidths[index]};`"
        class="table-cell text-white"
        @click="column.sortable ? sortTable(column.name) : null"
      >
        <div class="flex justify-center items-center"
          :style="column.sortable ? 'cursor: pointer;' : 'cursor: default;'"
        >
          {{ column.label }}
          <span v-if="currentSortedColumn === column.name">
            <span v-if="currentIsAscending">{{'↑'}}</span>
            <span v-else>{{'↓'}}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      default: () => [],
    },
    columnWidths: {
      type: Array,
      default: () => [],
    },
    currentSortedColumn: {
      type: String,
      default: null,
    },
    currentIsAscending: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      sortedColumn: this.currentSortedColumn,
      isAscending: this.currentIsAscending,
    };
  },
  methods: {
    sortTable(columnName) {
      if (this.sortedColumn === columnName) {
        this.isAscending = !this.isAscending;
      } else {
        this.sortedColumn = columnName;
        this.isAscending = true;
      }

      this.$emit('sortTable', {
        columnName: this.sortedColumn,
        isAscending: this.isAscending,
      });
    },
  },
  watch: {
    currentSortedColumn(newVal) {
      this.sortedColumn = newVal;
    },
    currentIsAscending(newVal) {
      this.isAscending = newVal;
    },
  },
};
</script>