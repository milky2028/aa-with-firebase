<script lang="ts">
  import whiteLogo from "../../assets/white-logo.svg";
  import Heading from "../leaf/Heading.svelte";
  import Link from "../leaf/Link.svelte";
  import pages from "../data/pages.json";
  import Button from "../leaf/Button.svelte";

  function hideHome(page: typeof pages[number]) {
    return page.name !== 'Home'
  }
</script>

<style>
  nav {
    display: grid;
    grid-template-areas: "logo spacer1 links spacer2 tour-button";
    grid-template-columns: max-content 1fr 4fr 1fr max-content;
    gap: 0.5rem;
    background-color: var(--blue);
    padding: 1rem;

    :global(.logo-container) {
      grid-area: logo;
      display: grid;
      grid-template-columns: min-content 1fr;
      gap: 1rem;
      align-items: center;
    }

    :global(.main-name) {
      display: inline-block;
      padding: 0;
      letter-spacing: 1px;
      font-size: 2rem;
    }
  }

  img {
    height: 2.5rem;
    width: 2.5rem;
  }

  ul {
    grid-area: links;
    display: grid;
    padding: 0;
    grid-auto-flow: column;
    align-items: center;
    list-style: none;
  }

  li {
    display: block;
  }
</style>

<nav>
  <Link class="logo-container" white>
    <img src={whiteLogo} alt="Adventure Academy globe logo" />
    <Heading class="main-name" pompiere level={1}>Adventure Academy</Heading>
  </Link>
  <ul>
    {#each pages.filter(hideHome) as page}
      <li>{page.name}</li>
    {/each}
  </ul>
  <Button style="grid-area: tour-button;">Schedule a Tour</Button>
</nav>
