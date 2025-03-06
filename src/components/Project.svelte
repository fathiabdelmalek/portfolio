<script>
  export let project;
</script>

<div class="card border border-surfaceElevated animated">
  <a href={project.link}>
    <img src="https://placehold.co/400@2x.png" alt={project.title} />
    <div class="header">
      <h3 class="text-xl font-bold">{project.title}</h3>
    </div>
    <div class="body">
      <p class="text-foregroundSubtle mb-4">{project.description}</p>
      </div>
      <div class="footer">
      <div class="flex flex-wrap gap-2">
        {#each project.tags as tag}
          <span
            class="bg-surfaceLight text-foregroundMuted px-2 py-1 rounded text-sm"
            >{tag}</span
          >
        {/each}
      </div>
    </div>
  </a>
</div>
