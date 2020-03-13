<template>
  <main>
    <aa-toolbar />
    <router-view class="router-view" />
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons&display=swap');
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,500,700|Pompiere&display=swap');

:root {
  --blue: #49adea;
  --open-sans: 'Open Sans';
}

.router-view {
  padding-top: 65px;
}

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

h1 {
  font-size: 55px;
}

h2 {
  font-size: 34px;
}

h3 {
  font-size: 26px;
}

h4 {
  font-weight: 400;
  letter-spacing: 1px;
  font-family: 'Open Sans', sans-serif;
}

.lighten {
  opacity: 0.9;
}

.centered-grid {
  display: grid;
  justify-items: center;
  align-items: center;
}

.white-text {
  color: white;
}

.black-text {
  color: black;
}
</style>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import AaToolbar from '@/components/AaToolbar.vue';

export default defineComponent({
  components: {
    AaToolbar
  }
});
</script>
