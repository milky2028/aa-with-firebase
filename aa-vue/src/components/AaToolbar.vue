<template>
  <nav role="navigation" class="parent-nav">
    <router-link class="centered-grid logo" to="/">
      <img src="/images/whiteLogo.svg" alt="Adventure Academy Globe Logo" />
      <h3 class="white-text">Adventure Academy</h3>
    </router-link>
    <nav class="centered-grid child-nav" v-if="isDesktop">
      <router-link
        v-for="menuItem of menu"
        :to="menuItem.link"
        :key="menuItem.name"
        class="white-text"
      >
        <h4 class="white-text lighten">
          {{ menuItem.name }}
          <aa-icon v-if="menuItem.subroutes">arrow_drop_down</aa-icon>
        </h4>
      </router-link>
    </nav>
    <aa-icon class="white-text menu-icon" v-if="!isDesktop">menu</aa-icon>
  </nav>
</template>

<style scoped>
.logo {
  margin-top: 12px;
  grid-auto-flow: column;
  column-gap: 0.5rem;
  padding-left: 0.5rem;
  position: absolute;
  font-family: 'Pompiere', sans-serif;
}

h3 {
  font-weight: 400;
}

img {
  width: 40px;
}

.parent-nav {
  position: fixed;
  width: 100%;
  height: 65px;
  background-color: var(--blue);
}

.child-nav {
  padding: 0 240px;
  grid-auto-flow: column;
  height: 100%;
}

.menu-icon {
  position: absolute;
  right: 1rem;
  margin-top: 1rem;
  font-size: 24px;
}
</style>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import useMatchMedia from '@/use/matchMedia';
import AaIcon from './AaIcon.vue';
import Menu from '../data/menu';

export default defineComponent({
  components: {
    AaIcon
  },
  setup() {
    const menu = Menu;
    const { isDesktop } = useMatchMedia();

    return { menu, isDesktop };
  }
});
</script>
