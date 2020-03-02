<template>
  <nav role="navigation">
    <router-link class="logo" to="/"
      ><img src="" alt="Adventure Academy Globe Logo" />
      <h3>Adventure Academy</h3>
    </router-link>
    <router-link
      v-for="menuItem of menu"
      :to="menuItem.link"
      :key="menuItem.name"
      class="nav-link"
      ><h4 class="lighten">
        {{ menuItem.name }}
        <aa-icon v-if="menuItem.subroutes">arrow_drop_down</aa-icon>
      </h4>
    </router-link>
  </nav>
</template>

<style scoped>
.logo {
  position: absolute;
  color: white;
  font-family: 'Pompiere', sans-serif;
}

nav {
  padding: 0 240px;
  width: 100%;
  height: 65px;
  display: grid;
  grid-auto-flow: column;
  position: fixed;
  text-align: center;
  background-color: var(--blue);
  align-items: center;
}

.nav-link {
  color: white;
}
</style>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import AaIcon from './AaIcon.vue';
import Menu from '../data/menu';

export default defineComponent({
  components: {
    AaIcon
  },
  setup() {
    const menu = Menu;
    return { menu };
  }
});
</script>
