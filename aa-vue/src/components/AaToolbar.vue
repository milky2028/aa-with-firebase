<template>
  <nav role="navigation">
    <router-link
      v-for="menuItems of menu"
      :to="menuItems.link"
      :key="menuItems.name"
      class="nav-link"
      ><h4 class="lighten">{{ menuItems.name }}</h4>
    </router-link>
    <!-- <div class="dropdown w-dropdown">
      <div class="nav-link w-dropdown-toggle">
        <div class="classes-menu-block">Classes</div>
        <aa-icon>arrow_drop_down</aa-icon>
        <div class="w-icon-dropdown-toggle" />
      </div>
      <nav class="submenu w-dropdown-list">
        <router-link
          to="/classes/all-classes"
          class="submenu-item w-dropdown-link"
          >All Classes</router-link
        >
      </nav>
    </div> -->
    <!-- <a href="#" data-ix="show-popup-modal" class="button nav-button w-button"
      >Schedule a Tour</a
    > -->
  </nav>
</template>

<style scoped>
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
