<template>
  <button
    class="py-2 px-4 rounded font-bold"
    :class="['bg-' + color + '-500 hover:bg-' + color + '-700 text-white', className]"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'blue'
    },
    className: {
      type: String,
      default: ''
    }
  },
  emits: ['click']
}
</script>