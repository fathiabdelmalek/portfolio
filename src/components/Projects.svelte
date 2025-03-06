<script>
  import { projects } from "$lib/data/projects";
  import Project from "./Project.svelte";
</script>

<section id="projects" class="section-container">
  <div class="section-header">
    <h2>My Projects</h2>
  </div>
  <div class="section-grid">
    {#each projects as project}
      <Project {project} />
    {/each}
  </div>
</section>
