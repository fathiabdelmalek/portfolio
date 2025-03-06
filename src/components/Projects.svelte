<script>
  import { projects } from "$lib/data/projects";
  import Project from "./Project.svelte";
</script>

<section id="projects" class="min-h-screen section-container">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">My Work</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each projects as project}
        <Project {project} />
      {/each}
    </div>
  </div>
</section>
