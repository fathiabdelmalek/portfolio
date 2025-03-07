<script>
  import { projects } from "$lib/data/projects";
  import Project from "./Project.svelte";
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";

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
  <div class="section-header">
    <h2>My Projects</h2>
  </div>
  <div class="section-grid">
    {#each projects as project, i}
      {#if i < visibleProjects}
        <div
          transition:slide={{
            duration: 800,
            easing: quintOut,
            delay: (i % 3) * 100,
          }}
        >
          <Project {project} />
        </div>
      {/if}
    {/each}
  </div>
  <div class="flex justify-center mt-8 gap-4">
    {#if visibleProjects < projects.length}
      <button class="btn" on:click={loadMore}>Show More</button>
    {/if}
    {#if visibleProjects > defaultVisibleCount}
      <button class="btn-outline" on:click={showLess}>Show Less</button>
    {/if}
  </div>
</section>
<div class="section-divider"></div>
