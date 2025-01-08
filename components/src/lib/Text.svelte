<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLParagraphElement> {
    size?: 'small' | 'med';
  }

  const { size = 'med', ...rest }: Props = $props();
</script>

<p
  {...rest}
  class="open-sans"
  class:med={size === 'med'}
  class:small={size === 'small'}>
  <slot></slot>
</p>

<style>
  p {
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
