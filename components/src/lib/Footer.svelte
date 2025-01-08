<script lang="ts">
  import Heading from './Heading.svelte';
  import Text from './Text.svelte';
  import { NAME } from './constants/name';
  import { pages } from './data/pages';
  import Link from './Link.svelte';
  import PageContainer from './PageContainer.svelte';
</script>

<footer>
  <PageContainer>
    <div class="container">
      <div>
        <Link orange><Heading pompiere>{NAME}</Heading></Link>
        <Text style="margin-top: 0; margin-bottom: 1.5rem;">
          Adventure Academy Daycare began in 2016 with a unique philosophy:
          allow children to learn in the ways that best serve their needs.
        </Text>
        <Link orange href="/news/adventure-academy-accepts-ccdf">
          Adventure Academy accepts CCDF.
        </Link>
        <Text style="margin-top: 1.5rem;"
          >Copyright 2025 © Adventure Academy Daycare</Text>
      </div>
      <div>
        <Heading level={4} pompiere>Sitemap</Heading>
        <ul>
          {#each pages as page}
            <li style="min-width: 8rem;">
              <Link href={page.href}>
                <Text style="padding: 0.25rem" size="small">{page.name}</Text>
              </Link>
            </li>
          {/each}
        </ul>
      </div>
      <div>
        <Heading level={4} pompiere>Contact Us</Heading>
        <Link orange href="tel:+13179130848">+1 (317) 913-0848</Link>
        <br />
        <Link
          orange
          href="mailto:Lisa.Gross@AdventureAcademyWeb.com?subject=Adventure%20Academy%20Daycare%20Inquiry">
          Contact via Email
        </Link>
      </div>
    </div>
  </PageContainer>
</footer>

<style>
  footer {
    padding: 2rem 0;
    background-color: var(--grey);
  }

  .container {
    display: grid;
    column-gap: 3rem;
    grid-template-columns: 3fr 1fr 1fr;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    column-count: 2;
  }
</style>
