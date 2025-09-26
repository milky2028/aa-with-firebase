<script lang="ts">
  const { children, ...rest } = $props();
</script>

<style lang="postcss">
  div {
    margin: 0 auto;
    max-width: 1105px;
    padding: 2.5rem 2rem;
  }
</style>

<div {...rest}>{@render children?.()}</div>
