<script lang="ts">
  let { label, value = $bindable(null), ...rest } = $props();
</script>

<style>
  label {
    font-weight: 500;
  }

  select {
    width: 100%;
    height: 2.5rem;
    background-color: #fafafa;
    border: 1px solid var(--medium-grey);
  }
</style>

<label for={label} class="open-sans">{label}</label>
<select name={label} {...rest} bind:value>{@render rest.children?.()}</select>
