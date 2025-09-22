<script lang="ts">
  const { orange = false, white = false, children, ...rest } = $props();
</script>

<style lang="postcss">
  a {
    font-size: 1rem;
    cursor: pointer;
    color: black;
    text-decoration: none;

    &:hover {
      color: var(--orange);
      text-decoration: underline;
    }

    &:visited {
      color: black;
    }
  }

  .orange {
    color: var(--orange);

    &:visited {
      color: var(--orange);
    }
  }

  .white {
    color: #fff;

    &:visited {
      color: #fff;
    }

    &:hover {
      color: #fff;
    }
  }
</style>

<a {...rest} class:orange class:white class="open-sans {rest.class}"
  >{@render children?.()}</a
>
