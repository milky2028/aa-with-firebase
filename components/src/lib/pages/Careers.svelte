<script>
  import { NAV_HEIGHT } from "../constants/nav-height";
  import Breadcrumbs from "../leaf/Breadcrumbs.svelte";
  import Heading from "../leaf/Heading.svelte";
  import Link from "../leaf/Link.svelte";
  import PageContainer from "../leaf/PageContainer.svelte";
  import Text from "../leaf/Text.svelte";
</script>

<style>
  section {
    :global(.header) {
      padding: 2rem 0;
    }

    :global(.clip-width) {
      max-width: 660px;
    }
  }
</style>

<section style="margin-top: {NAV_HEIGHT}px">
  <PageContainer>
    <Breadcrumbs />
    <Heading class="header" level={1} openSans>Careers</Heading>
    <Text class="clip-width">
      Adventure Academy is always hiring! As a growing center, we are regularly
      seeking new staff. If you love children and want to be a part of their
      journey of growth and exploration, we would love to have you join our
      team!</Text
    >
    <br />
    <Text class="clip-width"
      >Please send resumes to <Link
        href="mailto:lisa.gross@adventureacademyweb.com?subject=Adventure%20Academy%20Job%20Application"
        orange>lisa.gross@adventureacademyweb.com.</Link
      ></Text
    >
    <br />
    <Text class="clip-width"
      >All applicants must at least 18 years of age and be willing to undergo a
      background check, tuberculosis test, and drug screening.</Text
    >
  </PageContainer>
</section>
