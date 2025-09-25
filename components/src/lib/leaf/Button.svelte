<script lang="ts">
  const { orange = false, children, class: classes, style, ...rest } = $props();
</script>

<style lang="postcss">
  button {
    display: block;
    cursor: pointer;
    appearance: none;
    background-color: transparent;
    border: 0;
    transition:
      background-color var(--base-transition-timing),
      border-color var(--base-transition-timing),
      color var(--base-transition-timing);
    font-size: 1.25rem;
    border: 0.25rem solid var(--light-white);
    border-radius: 5rem;
    padding: 0.5rem 1.75rem;
    color: white;
    outline: 0;

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

<button {...rest} class="pompiere {classes}" class:orange {style}>
  {@render children?.()}
</button>
