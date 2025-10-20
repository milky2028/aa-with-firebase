<script lang="ts">
  import { onMount } from "svelte";
  import Divider from "./Divider.svelte";
  import Link from "./Link.svelte";

  // I can do this using $page store once I'm using sveltekit proper but have to do it here using client side JS
  let routePath = $state(["home"]);

  function getHref(path: string) {
    if (path === "home") {
      return "/";
    }

    const pathIndex = routePath.findIndex((item) => item === path);
    return routePath.slice(1, pathIndex).join("/");
  }

  onMount(() => {
    window.location.pathname
      .split("/")
      .filter(Boolean)
      .forEach((path) => routePath.push(path));
  });
</script>

<style>
  div {
    :global(.breadcrumbs) {
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 0.85rem;
      padding: 0 0.5rem;

      &:hover {
        color: var(--orange);
      }
    }

    :global(.no-front-pad) {
      padding: 0 0.5rem 0 0;
    }
  }
</style>

<div>
  {#each routePath as path, index}
    <Link
      class="breadcrumbs {index === 0 ? 'no-front-pad' : ''}"
      href={getHref(path)}>{path}</Link
    >
    {#if index !== routePath.length - 1}
      /
    {/if}
  {/each}
  <Divider />
</div>
