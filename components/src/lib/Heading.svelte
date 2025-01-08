<script lang="ts">
  const { level = 3, pompiere = false, ...rest } = $props();
</script>

{#if level === 1}
  <h1 {...rest} class:pompiere><slot></slot></h1>
{:else if level === 2}
  <h2 {...rest} class:pompiere><slot></slot></h2>
{:else if level === 3}
  <h3 {...rest} class:pompiere><slot></slot></h3>
{:else if level === 4}
  <h4 {...rest} class:pompiere><slot></slot></h4>
{:else if level === 5}
  <h5 {...rest} class:pompiere><slot></slot></h5>
{/if}

<style>
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    padding: 1.5rem 0;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.25rem;
  }
</style>
