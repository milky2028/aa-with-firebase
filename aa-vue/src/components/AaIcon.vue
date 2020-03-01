<template>
  <span><slot /></span>
</template>

<style scoped>
span {
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
