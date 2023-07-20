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
          <span v-if="sortedColumn === column.name">
            <span v-if="isAscending">{{'↑'}}</span>
            <span v-else>{{'↓'}}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect,defineEmits } from 'vue';

const props = defineProps({
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
});

let sortedColumn = ref(props.currentSortedColumn);
let isAscending = ref(props.currentIsAscending);

const emit = defineEmits(['sortTable']);
const sortTable = (columnName) => {
  if (sortedColumn.value === columnName) {
    isAscending.value = !isAscending.value;
  } else {
    sortedColumn.value = columnName;
    isAscending.value = true;
  }

  emit('sortTable', {
    columnName: sortedColumn.value,
    isAscending: isAscending.value,
  });
};

watchEffect(() => {
  sortedColumn.value = props.currentSortedColumn;
  isAscending.value = props.currentIsAscending;
});
</script>