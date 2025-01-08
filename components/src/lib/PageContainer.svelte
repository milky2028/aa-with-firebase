<script lang="ts">
  const { children } = $props();
</script>

<div>{@render children?.()}</div>

<style lang="postcss">
  div {
    margin: 0 auto;
    max-width: 1105px;
    padding: 2rem;
  }
</style>
