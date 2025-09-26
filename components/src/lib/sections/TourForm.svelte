<script lang="ts">
  import sun from "../../assets/sun.svg";
  import Button from "../leaf/Button.svelte";
  import Heading from "../leaf/Heading.svelte";
  import Link from "../leaf/Link.svelte";
  import Text from "../leaf/Text.svelte";
  import TextField from "../leaf/TextField.svelte";
  import { tourState } from "../state/tour.svelte";

  $effect(() => {
    console.log(tourState.name);
    console.log(tourState.email);
  });
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
    gap: 1rem;

    @media screen and (max-width: 834px) {
      max-width: unset;
      width: 100%;
    }

    :global(.contact) {
      text-align: center;
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
  <Heading level={2} pompiere style="padding-bottom: 0;"
    >Schedule a Tour</Heading
  >
  <TextField required placeholder="Name" bind:value={tourState.name} />
  <TextField
    required
    placeholder="Email"
    type="email"
    bind:value={tourState.email}
  />
  <Text class="contact"
    ><Link href="/contact-us" orange>Contact us</Link> to schedule a tour outside
    normal business hours.</Text
  >
  <Button submitter orange>Submit</Button>
</form>
