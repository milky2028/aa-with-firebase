<script lang="ts">
  let { placeholder = "", value = $bindable(""), ...rest } = $props();
</script>

<style>
  input {
    padding: 1rem;
    width: 100%;
    border-radius: 2px;
    border: none;
    border-bottom: 1px solid var(--medium-grey);
  }

  input::placeholder {
    font-size: 1rem;
    font-family: "Open Sans", sans-serif;
    text-align: center;
  }
</style>

<input
  {...rest}
  {placeholder}
  name={placeholder.toLocaleLowerCase()}
  bind:value
/>
