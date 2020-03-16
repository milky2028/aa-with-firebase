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
    <aa-icon
      class="white-text menu-icon"
      :class="{ 'black-text': menuOpened }"
      v-if="!isDesktop"
      @icon-click="menuOpened = !menuOpened"
      >{{ menuOpened ? 'close' : 'menu' }}</aa-icon
    >
    <transition name="fly-in">
      <nav v-if="menuOpened" class="centered-grid mobile-nav">
        <router-link
          v-for="menuItem of menu"
          :class="{ activeRoute: isActiveRoute(menuItem.link) }"
          :to="menuItem.link"
          :key="menuItem.name"
        >
          <h4>
            {{ menuItem.name }}
            <aa-icon v-if="menuItem.subroutes">arrow_drop_down</aa-icon>
          </h4>
        </router-link>
      </nav>
    </transition>
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

.transparent {
  background-color: transparent;
}

.child-nav {
  padding: 0 240px;
  grid-auto-flow: column;
  height: 100%;
}

.mobile-nav {
  position: fixed;
  padding: 18px 25px 18px 25px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  right: 0;
  background-color: white;
  height: 100vh;
  width: 275px;
  font-size: 19px;
  justify-items: start;
}

.activeRoute {
  font-weight: 700;
  color: var(--orange);
}

.fly-in-enter,
.fly-in-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.fly-in-enter-active {
  transition: transform 150ms ease-out, opacity 150ms ease-out;
}

.fly-in-leave-active {
  transition: transform 100ms ease-in, opacity 100ms ease-in;
}

.fly-in-enter-to,
.fly-in-leave {
  opacity: 1;
  transform: translateX(0);
}

.menu-icon {
  z-index: 100;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  margin-top: 18px;
  font-size: 24px;
}
</style>

<script lang="ts">
import { defineComponent, ref, watch } from '@vue/composition-api';
import useMatchMedia from '@/use/matchMedia';
import AaIcon from './AaIcon.vue';
import Menu from '../data/menu';

export default defineComponent({
  components: {
    AaIcon
  },
  setup(_, ctx) {
    const { isDesktop } = useMatchMedia();

    const menu = Menu;
    const menuOpened = ref(false);

    function isActiveRoute(route: string) {
      return route === ctx.root.$route.path;
    }

    watch(
      () => ctx.root.$route,
      () => (menuOpened.value = false)
    );

    return { menu, isDesktop, menuOpened, isActiveRoute };
  }
});
</script>
