<script lang="ts">
  const {
    href = "",
    orange = false,
    class: classes = "",
    style = "",
    ...rest
  } = $props();
</script>

<style lang="postcss">
  button,
  a {
    cursor: pointer;
    appearance: none;
    background-color: transparent;
    text-decoration: none;
    border: 0;
    transition:
      background-color var(--base-transition-timing),
      border-color var(--base-transition-timing),
      color var(--base-transition-timing);
    font-size: 1.33rem;
    border: 0.25rem solid var(--light-white);
    border-radius: 5rem;
    padding: 0.75rem 2.25rem;
    color: white;
    outline: 0;
    letter-spacing: 1px;

    &:focus-visible,
    &:hover {
      background-color: var(--orange);
      border-color: var(--light-white);
    }
  }

  .orange {
    background-color: var(--orange);

    &:hover {
      background-color: transparent;
      color: var(--orange);
      border-color: var(--light-orange);
    }
  }
</style>

{#if href}
  <a {...rest} class="pompiere {classes}" class:orange {style} {href}>
    {@render rest.children?.()}
  </a>
{:else}
  <button {...rest} class="pompiere {classes}" class:orange {style}>
    {@render rest.children?.()}
  </button>
{/if}
