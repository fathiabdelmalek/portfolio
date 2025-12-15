<script lang="ts">
  import Project from "./Project.svelte";
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  export let projects: any[] = [];

  let visibleProjects = 3;
  const defaultVisibleCount = 3;

  function loadMore() {
    visibleProjects = Math.min(visibleProjects + 3, projects.length);
  }

  function showLess() {
    visibleProjects = defaultVisibleCount;
  }
</script>

<section id="projects" class="section-container">
  <!-- Section Header -->
  <div class="text-center mb-16">
    <p class="text-sm font-medium text-[var(--text-secondary)] tracking-wide uppercase mb-4">
      Portfolio
    </p>
    <h2 class="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
      Featured Projects
    </h2>
    <p class="text-lg text-[var(--text-tertiary)] max-w-2xl mx-auto">
      A showcase of my recent work in software development, AI, and machine learning
    </p>
  </div>

  <!-- Projects Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
    {#each projects as project, i}
      {#if i < visibleProjects}
        <div
          transition:slide={{
            duration: 600,
            easing: quintOut,
            delay: (i % 6) * 50,
          }}
        >
          <Project {project} />
        </div>
      {/if}
    {/each}
  </div>

  <!-- Load More/Less Controls -->
  <div class="flex justify-center gap-4">
    {#if visibleProjects < projects.length}
      <button
        class="px-6 py-3 text-sm font-medium text-white bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
        on:click={loadMore}
      >
        Load More Projects
      </button>
    {/if}
    {#if visibleProjects > defaultVisibleCount}
      <button
        class="px-6 py-3 text-sm font-medium text-[var(--text-primary)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-primary)] rounded-lg transition-all duration-200"
        on:click={showLess}
      >
        Show Less
      </button>
    {/if}
  </div>
</section>

<!-- Section Divider -->
<div class="w-full border-t border-[var(--border-primary)] my-16"></div>
