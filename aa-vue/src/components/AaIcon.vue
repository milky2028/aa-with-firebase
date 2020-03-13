<template>
  <button @click="$emit('icon-click')"><slot /></button>
</template>

<style scoped>
button {
  font-size: 20px;
  font-family: 'Material Icons' !important;
  text-transform: lowercase;
  vertical-align: middle;
}
</style>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
export default defineComponent({});
</script>
