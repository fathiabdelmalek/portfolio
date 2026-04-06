<script lang="ts">
  import PublicationCard from "./Publication.svelte";
  import { fade } from "svelte/transition";
  import type { Publication } from "$lib/data/publications";

  export let publications: Publication[] = [];
</script>

<section id="publications" class="section-container">
  <!-- Section Header -->
  <div class="text-center mb-16">
    <p
      class="text-sm font-medium text-[var(--text-secondary)] tracking-wide uppercase mb-4"
    >
      Research
    </p>
    <h2 class="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
      Publications
    </h2>
    <p class="text-lg text-[var(--text-tertiary)] max-w-2xl mx-auto">
      Academic research and scholarly contributions in AI and machine learning
    </p>
  </div>

  <!-- Publications List or Coming Soon -->
  {#if publications.length > 0}
    <div
      class="space-y-6 max-w-4xl mx-auto"
      transition:fade={{ duration: 300 }}
    >
      {#each publications as publication, i}
        <PublicationCard {publication} index={i} />
      {/each}
    </div>
  {:else}
    <!-- Coming Soon State -->
    <div
      class="max-w-2xl mx-auto text-center py-16 px-8 bg-[var(--bg-surface)] border border-[var(--border-primary)] rounded-2xl"
      transition:fade={{ duration: 400 }}
    >
      <!-- Icon -->
      <div
        class="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--bg-surface-muted)] border border-[var(--border-primary)]"
      >
        <svg
          class="w-10 h-10 text-[var(--brand-primary)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      </div>

      <!-- Coming Soon Text -->
      <h3 class="text-2xl font-bold text-[var(--text-primary)] mb-3">
        Publications Coming Soon
      </h3>
      <p
        class="text-[var(--text-tertiary)] mb-6 max-w-md mx-auto leading-relaxed"
      >
        My upcoming research papers and conference presentations will appear
        here. Currently working on exciting projects in artificial intelligence
        and machine learning.
      </p>

      <!-- Expected Areas -->
      <div class="flex flex-wrap justify-center gap-2">
        {#each ["Machine Learning", "Deep Learning", "Computer Vision", "Thyroid Nodules Detection"] as area}
          <span
            class="px-3 py-1.5 text-xs font-medium text-[var(--text-muted)] bg-[var(--bg-surface-muted)] rounded-lg border border-[var(--border-primary)]/50"
          >
            {area}
          </span>
        {/each}
      </div>
    </div>
  {/if}
</section>

<!-- Section Divider -->
<div class="w-full border-t border-[var(--border-primary)] my-16"></div>
