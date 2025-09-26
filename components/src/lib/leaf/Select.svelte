<script lang="ts">
  const { label, ...rest } = $props();
</script>

<label for={label}>{label}</label>
<select name={label}>{@render rest.children?.()}</select>
