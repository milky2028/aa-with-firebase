<script lang="ts">
  const { orange = false, children, ...rest } = $props();
</script>

<a {...rest} class:orange class="open-sans">{@render children?.()}</a>

<style lang="postcss">
  a {
    font-size: 1rem;
    cursor: pointer;
    color: black;
    text-decoration: none;

    &:hover {
      color: var(--orange);
      text-decoration: underline;
    }

    &:vistied {
      color: black;
    }
  }

  .orange {
    color: var(--orange) !important;

    &:vistied {
      color: var(--orange) !important;
    }
  }
</style>
