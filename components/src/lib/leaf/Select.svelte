<script lang="ts">
  let { label, value = $bindable(null), ...rest } = $props();
</script>

<label for={label}>{label}</label>
<select name={label} {...rest} bind:value>{@render rest.children?.()}</select>
