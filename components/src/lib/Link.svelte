<script lang="ts">
  const { orange = false, children, ...rest } = $props();
</script>

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

    &:visited {
      color: black;
    }
  }

  .orange {
    color: var(--orange);

    &:visited {
      color: var(--orange);
    }
  }
</style>

<a {...rest} class:orange class="open-sans">{@render children?.()}</a>
