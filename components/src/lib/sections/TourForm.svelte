<script lang="ts">
  import sun from "../../assets/sun.svg";
  import Button from "../leaf/Button.svelte";
  import Heading from "../leaf/Heading.svelte";
  import Link from "../leaf/Link.svelte";
  import Text from "../leaf/Text.svelte";
</script>

<style>
  form {
    background-color: white;
    width: 66vw;
    max-width: 500px;
    padding: 3rem;
    border-radius: 2px;
    display: grid;
    place-items: center;

    @media screen and (max-width: 834px) {
      max-width: unset;
      width: 100%;
    }

    :global(.contact) {
      text-align: center;
      margin-bottom: 1rem;
    }
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
  <Text class="contact"
    ><Link href="/contact-us" orange>Contact us</Link> to schedule a tour outside
    normal business hours.</Text
  >
  <Button orange>Submit</Button>
</form>
