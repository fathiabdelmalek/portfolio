<script lang="ts">
  import { fade, fly } from "svelte/transition";

  interface SkillCategory {
    name: string;
    icon: string;
    skills: string[];
  }

  export let category: SkillCategory;
  export let index: number;

  let isExpanded = false;

  const toggleExpand = () => {
    isExpanded = !isExpanded;
  };
</script>

<div
  class="group relative bg-bg-surface hover:bg-bg-surface-elevated border border-border-primary rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
  on:click={toggleExpand}
  on:keydown={(e) => e.key === 'Enter' && toggleExpand()}
  role="button"
  tabindex="0"
>
  <!-- Header -->
  <div class="flex items-start justify-between mb-4">
    <div class="flex items-center gap-3">
      <div class="text-3xl">{category.icon}</div>
      <h3 class="text-lg font-semibold text-text-primary group-hover:text-brand-primary transition-colors duration-200">
        {category.name}
      </h3>
    </div>
    <svg
      class="w-5 h-5 text-text-muted transition-transform duration-300 group-hover:text-brand-primary"
      class:rotate-180={isExpanded}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>

  <!-- Skills List - Collapsed -->
  {#if !isExpanded}
    <div
      in:fade={{ duration: 200 }}
      out:fade={{ duration: 150 }}
      class="flex flex-wrap gap-2"
    >
      {#each category.skills.slice(0, 3) as skill}
        <span class="px-3 py-1 text-xs font-medium text-text-muted bg-bg-surface-muted rounded-full border border-border-primary/50">
          {skill}
        </span>
      {/each}
      {#if category.skills.length > 3}
        <span class="px-3 py-1 text-xs font-medium text-text-muted bg-bg-surface-muted rounded-full border border-border-primary/50">
          +{category.skills.length - 3} more
        </span>
      {/if}
    </div>
  {/if}

  <!-- Skills List - Expanded -->
  {#if isExpanded}
    <div in:fade={{ duration: 200 }} class="space-y-3">
      <div class="grid grid-cols-1 gap-2">
        {#each category.skills as skill, i}
          <div
            in:fly={{ y: 8, delay: i * 30, duration: 200 }}
            class="flex items-center gap-2 p-2 rounded-lg hover:bg-bg-surface-muted transition-colors duration-200"
          >
            <div class="w-2 h-2 rounded-full bg-brand-primary"></div>
            <span class="text-sm text-text-secondary">{skill}</span>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>
