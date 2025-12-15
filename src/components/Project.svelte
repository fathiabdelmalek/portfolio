<script lang="ts">
  import type { Project } from "$lib/data/projects";

  export let project: Project;
</script>

<article class="group relative bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border-primary)] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
  <!-- Project Image -->
  <div class="aspect-video overflow-hidden bg-[var(--bg-surface-muted)]">
    <img
      src={project.image || "https://placehold.co/800x450/1a1a2e/ffffff?text=" + encodeURIComponent(project.title)}
      alt={project.title}
      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <!-- Overlay with link -->
    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
        aria-label="View {project.title}"
      >
        <span>View Project</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  </div>

  <!-- Project Content -->
  <div class="p-6">
    <h3 class="text-xl font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--brand-primary)] transition-colors duration-200">
      {project.title}
    </h3>

    <p class="text-[var(--text-tertiary)] mb-4 leading-relaxed line-clamp-2">
      {project.description}
    </p>

    <!-- Tags -->
    <div class="flex flex-wrap gap-2">
      {#each project.tags as tag}
        <span class="px-2 py-1 text-xs font-medium text-[var(--text-muted)] bg-[var(--bg-surface-muted)] rounded-md border border-[var(--border-primary)]/50">
          {tag}
        </span>
      {/each}
    </div>
  </div>
</article>
