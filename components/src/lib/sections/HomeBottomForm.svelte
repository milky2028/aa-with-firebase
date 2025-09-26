<script lang="ts">
  import PageContainer from "../leaf/PageContainer.svelte";
  import TourForm from "./TourForm.svelte";
</script>

<style>
  section {
    background-color: var(--grey);

    :global(.center) {
      display: grid;
      place-items: center;
    }
  }
</style>

<section>
  <PageContainer class="center">
    <TourForm></TourForm>
  </PageContainer>
</section>
