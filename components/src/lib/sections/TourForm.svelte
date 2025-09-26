<script lang="ts">
  import sun from "../../assets/sun.svg";
  import Heading from "../leaf/Heading.svelte";
</script>

<style>
  form {
    background-color: white;
  }
</style>

<form>
  <img
    width={85}
    height={85}
    src={sun}
    alt="Child's smiling Sun cartoon drawing"
  />
  <Heading level={2} pompiere>Schedule a Tour</Heading>
</form>
