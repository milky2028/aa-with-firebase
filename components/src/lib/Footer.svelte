<script lang="ts">
  import Heading from './Heading.svelte';
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
        <p>
          Adventure Academy Daycare began in 2016 with a unique philosophy:
          allow children to learn in the ways that best serve their needs.
        </p>
        <Link orange href="/news/adventure-academy-accepts-ccdf">
          Adventure Academy accepts CCDF.
        </Link>
        <p>Copyright 2025 © Adventure Academy Daycare</p>
      </div>
      <div>
        <Heading pompiere>Sitemap</Heading>
        <ul>
          {#each pages as page}
            <li><Link href={page.href}>{page.name}</Link></li>
          {/each}
        </ul>
      </div>
      <div>
        <Heading pompiere>Contact Us</Heading>
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
    background-color: var(--grey);
  }

  .container {
    display: grid;
    column-gap: 2rem;
    grid-template-columns: 2fr 1fr 1fr;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    column-count: 2;
  }
</style>
