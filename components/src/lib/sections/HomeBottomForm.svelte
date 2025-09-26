<script lang="ts">
  import PageContainer from "../leaf/PageContainer.svelte";
  import TourForm from "./TourForm.svelte";
</script>

<style>
  section {
    background-color: var(--grey);
  }
</style>

<section>
  <PageContainer>
    <TourForm></TourForm>
  </PageContainer>
</section>
