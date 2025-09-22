<script lang="ts">
  import whiteLogo from "../assets/white-logo.svg";
  import Heading from "./Heading.svelte";
  import Link from "./Link.svelte";
</script>

<style>
  nav {
    display: grid;
    grid-template-columns: max-content 1fr min-content;
    gap: 1rem;
    background-color: var(--blue);
    padding: 1rem;

    :global(.logo-container) {
      display: grid;
      grid-template-columns: min-content 1fr;
      gap: 1rem;
    }

    :global(.main-name) {
      display: inline-block;
      padding: 0;
    }
  }

  img {
    height: 2.5rem;
    width: 2.5rem;
  }
</style>

<nav>
  <Link class="logo-container" white>
    <img src={whiteLogo} alt="Adventure Academy globe logo" />
    <Heading class="main-name" pompiere level={1}>Adventure Academy</Heading>
  </Link>
  <div>center links</div>
  <div>Menu/button</div>
</nav>
