<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  interface Props extends HTMLAttributes<HTMLParagraphElement> {
    size?: "small" | "med";
  }

  const { size = "med", class: classes = "", ...rest }: Props = $props();
</script>

<style>
  p {
    color: #000;
    margin: 0;
    padding: 0;
    letter-spacing: 0.3px;
  }

  .small {
    font-size: 0.9rem;
  }

  .med {
    font-size: 1rem;
  }
</style>

<p
  {...rest}
  class:med={size === "med"}
  class:small={size === "small"}
  class="open-sans {classes}"
>
  {@render rest.children?.()}
</p>
