<script lang="ts">
  const { orange = false, ...rest } = $props();
</script>

<a {...rest} class:orange class="open-sans"><slot></slot></a>

<style lang="postcss">
  a {
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
    color: var(--orange);

    &:vistied {
      color: var(--orange);
    }
  }
</style>
