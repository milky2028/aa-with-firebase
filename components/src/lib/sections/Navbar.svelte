<script lang="ts">
  import whiteLogo from "../assets/white-logo.svg";
  import Heading from "./leaf/Heading.svelte";
  import Link from "./leaf/Link.svelte";
  import pages from "./data/pages.json";
  import Button from "./leaf/Button.svelte";
</script>

<style>
  nav {
    display: grid;
    grid-template-columns: max-content 1fr max-content;
    gap: 1rem;
    background-color: var(--blue);
    padding: 1rem;

    :global(.logo-container) {
      display: grid;
      grid-template-columns: min-content 1fr;
      gap: 1rem;
      align-items: center;
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
  <ul>
    {#each pages as page}
      {page.name}
    {/each}
  </ul>
  <div><Button>Schedule a Tour</Button></div>
</nav>
