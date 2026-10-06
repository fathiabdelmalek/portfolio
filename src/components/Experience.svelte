<script lang="ts">
  import { reveal } from "$lib/reveal";
  import type { Experience } from "$lib/data/experience";

  let { experiences = [] }: { experiences: Experience[] } = $props();

  const formatDateRange = (start: string, end?: string | null) =>
    end == null ? `${start} — Present` : end === start ? start : `${start} — ${end}`;
</script>

<section id="experience" class="section-container">
  <!-- Section Header -->
  <div class="text-center mb-16">
    <p
      class="text-sm font-medium text-[var(--text-secondary)] tracking-wide uppercase mb-4"
    >
      Career
    </p>
    <h2 class="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
      Experience
    </h2>
    <p class="text-lg text-[var(--text-tertiary)] max-w-2xl mx-auto">
      Professional journey and roles, most recent first
    </p>
  </div>

  <!-- Timeline -->
  <div class="relative max-w-3xl mx-auto">
    <!-- Vertical line -->
    <div
      class="absolute left-[17px] top-2 bottom-2 w-px bg-[var(--border-primary)]"
      aria-hidden="true"
    ></div>

    {#each experiences as item}
      <div class="relative pl-14 pb-10 last:pb-0" use:reveal>
        <!-- Timeline dot -->
        <div
          class="absolute left-0 top-1 w-9 h-9 rounded-full bg-[var(--bg-surface)] border-2 border-[var(--brand-primary)] flex items-center justify-center text-base shadow-sm"
          aria-hidden="true"
        >
          💼
        </div>

        <!-- Card -->
        <div
          class="bg-[var(--bg-surface)] border border-[var(--border-primary)] rounded-xl p-6 hover:bg-[var(--bg-surface-elevated)] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
        >
          <div
            class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2"
          >
            <h3 class="text-lg font-semibold text-[var(--text-primary)] leading-tight">
              {item.title}
            </h3>
            <span
              class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[var(--brand-primary)]/15 text-[var(--brand-primary)] border border-[var(--brand-primary)]/30 whitespace-nowrap"
            >
              {formatDateRange(item.startDate, item.endDate)}
            </span>
          </div>

          <p class="text-sm text-[var(--text-secondary)] mb-1">
            {item.company}{item.location ? ` • ${item.location}` : ""}
          </p>

          {#if item.description}
            <p class="text-sm text-[var(--text-tertiary)] leading-relaxed mt-3">
              {item.description}
            </p>
          {/if}

          {#if item.bullets?.length}
            <ul class="mt-3 space-y-2">
              {#each item.bullets as bullet}
                <li class="flex gap-2.5 text-sm text-[var(--text-tertiary)] leading-relaxed">
                  <span
                    class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--brand-primary)] flex-shrink-0"
                    aria-hidden="true"
                  ></span>
                  <span>{bullet}</span>
                </li>
              {/each}
            </ul>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- Section Divider -->
<div class="w-full border-t border-[var(--border-primary)] my-16"></div>
