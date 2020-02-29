<template>
  <main>
    <AAToolbar />
    <router-view />
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons&display=swap');
@import url('https://fonts.googleapis.com/css?family=Mukta+Malar:400,500,600,700,800&display=swap');

* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  background: transparent;
  box-sizing: border-box;
  outline: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a,
a:visited {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  transition: color 100ms var(--mat-ease);
}

button {
  cursor: pointer;
}

ul {
  list-style: none;
}
</style>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import AAToolbar from '@/components/AAToolbar.vue';

export default defineComponent({
  components: {
    AAToolbar
  }
});
</script>
