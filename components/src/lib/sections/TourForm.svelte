<script lang="ts">
  // import sun from "../../assets/sun.svg";
  import Button from "../leaf/Button.svelte";
  import Heading from "../leaf/Heading.svelte";
  import Link from "../leaf/Link.svelte";
  import Select from "../leaf/Select.svelte";
  import Text from "../leaf/Text.svelte";
  import TextField from "../leaf/TextField.svelte";
  import { tourState } from "../state/tour.svelte";
  import classes from "../data/classes.json";
  import { onMount } from "svelte";

  $effect(() => {
    console.log(tourState.name);
    console.log(tourState.email);
    console.log(tourState.ageOfChild);
    console.log(tourState.tourDate);
    console.log(tourState.tourTime);
  });

  const TOUR_TIMES = [
    "10:00am",
    "10:30am",
    "11:00am",
    "11:30am",
    "12:00pm",
    "12:30pm",
    "1:00pm",
    "1:30pm",
    "2:00pm",
    "2:30pm",
    "3:00pm",
    "3:30pm",
    "4:00pm",
    "4:30pm",
  ];

  const dates: Date[] = $state([]);
  onMount(() => {
    for (let i = 0; i < 20; i++) {
      let currentDate = new Date();
      currentDate = new Date(currentDate.setDate(currentDate.getDate() + i));
      const day = currentDate.getDay();

      if (day !== 0 && day !== 6) {
        dates.push(currentDate);
      }
    }
  });

  function onSubmit(event: SubmitEvent & { currentTarget: HTMLFormElement }) {
    event.preventDefault();
    console.log(event);
    console.log(dates);
  }
</script>

<style>
  form {
    background-color: white;
    width: 66vw;
    max-width: 500px;
    padding: 3.5rem 4rem;
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

<form onsubmit={onSubmit}>
  <img
    width={85}
    height={85}
    src="/images/sun.svg"
    alt="Child's smiling Sun cartoon drawing"
  />
  <Heading level={2} pompiere style="padding-bottom: 0;"
    >Schedule a Tour</Heading
  >
  <TextField required label="Name" bind:value={tourState.name} />
  <TextField required label="Email" type="email" bind:value={tourState.email} />
  <Select required label="Age of Child/Class" bind:value={tourState.ageOfChild}>
    {#each classes as classType}
      <option>{classType.name}</option>
    {/each}
  </Select>
  <Select required label="Tour Date" bind:value={tourState.tourDate}>
    {#each dates as date}
      <option>{date.toDateString()}</option>
    {/each}
  </Select>
  <Select required label="Tour Time" bind:value={tourState.tourTime}>
    {#each TOUR_TIMES as time}
      <option>{time}</option>
    {/each}
  </Select>
  <Text class="contact"
    ><Link href="/contact-us" orange>Contact us</Link> to schedule a tour outside
    normal business hours.</Text
  >
  <Button submitter orange>Submit</Button>
</form>
