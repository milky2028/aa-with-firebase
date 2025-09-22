<script lang="ts">
  const { children } = $props();
</script>

<style lang="postcss">
  div {
    margin: 0 auto;
    max-width: 1105px;
    padding: 2rem;
  }
</style>

<div>{@render children?.()}</div>
