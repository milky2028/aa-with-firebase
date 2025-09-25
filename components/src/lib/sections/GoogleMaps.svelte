<script lang="ts">
  import Button from "../leaf/Button.svelte";
  import Heading from "../leaf/Heading.svelte";
  import Link from "../leaf/Link.svelte";
  import PageContainer from "../leaf/PageContainer.svelte";
  import Text from "../leaf/Text.svelte";
</script>

<style>
  section {
    :global(.container) {
      display: grid;
      place-items: center;
      gap: 1.5rem;
    }

    :global(.heading) {
      font-size: 2rem;
      padding-bottom: 0;
    }

    :global(.center) {
      text-align: center;
    }

    :global(.bold) {
      font-weight: 500;
      color: var(--orange);
    }
  }
</style>

<section>
  <PageContainer class="container">
    <Heading level={2} pompiere class="heading">Join Our Adventure</Heading>
    <Text class="center"
      >Become a part of the Adventure Academy Daycare family and join children
      and parents from across the Indianapolis and Castleton area in a grand
      adventure of learning and growth!
    </Text>
    <Link href="https://maps.app.goo.gl/1aPVQ5KTioBfw8DP8">
      <Text class="center bold">
        Adventure Academy Daycare Center 8383 Craig St #210, Indianapolis, IN
        46250
        <br />
        Open Monday - Friday 6:30am - 6:00pm
      </Text></Link
    >
    <iframe
      title="Google Map showing the location of Adventure Academy in Castleton, Indianapolis, Indiana"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6300.242029875654!2d-86.05221626152208!3d39.90908973919279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b4cd663094bc9%3A0xbb37285e3c694d08!2sAdventure%20Academy!5e0!3m2!1sen!2sus!4v1758819131996!5m2!1sen!2sus"
      width="100%"
      height="450"
      style="border:0;"
      allowfullscreen={false}
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <Button
      href="https://maps.app.goo.gl/1aPVQ5KTioBfw8DP8"
      target="_blank"
      rel="noopener noreferrer"
      orange
      >Get Directions
    </Button>
  </PageContainer>
</section>
