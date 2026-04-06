<script lang="ts">
  import type { Publication } from "$lib/data/publications";
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  let { publication, index = 0 }: { publication: Publication; index?: number } = $props();

  let isExpanded = $state(false);

  function toggleExpand() {
    isExpanded = !isExpanded;
  }

  const statusColors = {
    published: 'bg-green-500/20 text-green-400 border-green-500/30',
    under_review: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    in_preparation: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
  };

  const statusLabels = {
    published: 'Published',
    under_review: 'Under Review',
    in_preparation: 'In Preparation'
  };
</script>

<article 
  class="bg-[var(--bg-surface)] border border-[var(--border-primary)] rounded-xl p-6 hover:bg-[var(--bg-surface-elevated)] hover:shadow-lg transition-all duration-300"
  transition:slide={{
    duration: 500,
    easing: quintOut,
    delay: index * 100
  }}
>
  <div class="flex flex-col sm:flex-row sm:items-start gap-4">
    <!-- Status Badge -->
    <div class="flex-shrink-0">
      <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border {statusColors[publication.status]}">
        {statusLabels[publication.status]}
      </span>
    </div>

    <!-- Content -->
    <div class="flex-1 min-w-0">
      <!-- Title -->
      <h3 class="text-lg font-semibold text-[var(--text-primary)] mb-2 leading-tight">
        {publication.title}
      </h3>

      <!-- Authors & Journal -->
      <p class="text-sm text-[var(--text-secondary)] mb-1">
        {publication.authors}
      </p>
      <p class="text-sm text-[var(--text-tertiary)] mb-3">
        {publication.journal}{publication.year ? ` • ${publication.year}` : ''}
      </p>

      <!-- Abstract (expandable) -->
      {#if publication.abstract}
        <div class="mb-3">
          <button 
            class="text-sm text-[var(--brand-primary)] hover:text-[var(--brand-primary-hover)] transition-colors duration-200 flex items-center gap-1"
            onclick={toggleExpand}
          >
            <span>{isExpanded ? 'Hide' : 'Show'} Abstract</span>
            <svg 
              class="w-4 h-4 transition-transform duration-200 {isExpanded ? 'rotate-180' : ''}" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {#if isExpanded}
            <p class="mt-2 text-sm text-[var(--text-tertiary)] leading-relaxed">
              {publication.abstract}
            </p>
          {/if}
        </div>
      {/if}

      <!-- Links -->
      <div class="flex flex-wrap items-center gap-3">
        {#if publication.doi}
          <a
            href="https://doi.org/{publication.doi}"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand-primary)] hover:text-[var(--brand-primary-hover)] transition-colors duration-200"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            DOI
          </a>
        {/if}
        {#if publication.url}
          <a
            href={publication.url}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand-primary)] hover:text-[var(--brand-primary-hover)] transition-colors duration-200"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Paper
          </a>
        {/if}
      </div>
    </div>
  </div>
</article>
