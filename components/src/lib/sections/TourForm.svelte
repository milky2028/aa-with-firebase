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

    tourState.tourDate = dates[0];
  });

  /**
   * Value system is determined based on the following hierachy of most needed, not based on actual class value.
   */
  function getValue(childAge: string) {
    switch (childAge) {
      case "twos":
        return 7;
      case "toddlers":
        return 6;
      case "fours-and-fives":
        return 5;
      case "threes":
        return 3;
      case "infants":
        return 2;
      default:
        return 1;
    }
  }

  let showError = $state(false);
  let showSuccess = $state(false);

  type Submission = SubmitEvent & { currentTarget: HTMLFormElement };
  async function onSubmit(event: Submission) {
    showSuccess = false;
    showError = false;

    event.preventDefault();
    if (tourState.important) {
      console.error("Bot likely!");
      return;
    }

    const { serverTimestamp, addDoc, tours } = await import("../firebase/db");
    const submission = {
      name: tourState.name,
      email: tourState.email,
      childAge: tourState.ageOfChild,
      tourDate: tourState.tourDate.toDateString(),
      tourTime: tourState.tourTime,
      submitTimestamp: serverTimestamp(),
    };

    try {
      await addDoc(tours, submission);

      const value = getValue(tourState.ageOfChild);
      window.dataLayer.push({
        event: "generate_lead",
        currency: "USD",
        value,
      });

      showSuccess = true;
      setTimeout(() => {
        window.location.href = "/thank-you";
      }, 1500);
    } catch (error) {
      console.error("onTour error", error);
      showError = true;
    }
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

    @media screen and (max-width: 479px) {
      padding: 3.5rem 1.5rem;
    }

    :global(.center) {
      text-align: center;
    }

    :global(.red) {
      color: var(--red);
    }
  }
</style>

<form id="tour-form" onsubmit={onSubmit}>
  <img
    width={85}
    height={85}
    src="/images/sun.svg"
    alt="Child's smiling Sun cartoon drawing"
  />
  <Heading level={2} pompiere style="padding-bottom: 0;"
    >Schedule a Tour</Heading
  >
  <TextField
    style="display: none;"
    label="Important"
    bind:value={tourState.important}
  />
  <TextField required label="Name" bind:value={tourState.name} />
  <TextField required label="Email" type="email" bind:value={tourState.email} />
  <Select required label="Age of Child/Class" bind:value={tourState.ageOfChild}>
    {#each classes as classType}
      <option value={classType.id}>{classType.name}</option>
    {/each}
  </Select>
  <Select required label="Tour Date" bind:value={tourState.tourDate}>
    {#each dates as date}
      <option value={date}>{date.toDateString()}</option>
    {/each}
  </Select>
  <Select required label="Tour Time" bind:value={tourState.tourTime}>
    {#each TOUR_TIMES as time}
      <option>{time}</option>
    {/each}
  </Select>
  <Text class="center"
    ><Link href="/contact-us" orange>Contact us</Link> to schedule a tour outside
    normal business hours.</Text
  >
  <Button submitter orange>Submit</Button>
  <Text class="center {showSuccess ? 'show' : 'hide'}"
    >Thank you! Your tour has been scheduled!</Text
  >
  <Text class="center red {showError ? 'show' : 'hide'}"
    >Oops! Something went wrong while scheduling your tour. Please try again.</Text
  >
</form>
