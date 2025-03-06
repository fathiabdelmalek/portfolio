<script>
  export let project;
</script>

<div
  class="bg-surface border border-surfaceElevated rounded-lg overflow-hidden shadow-lg hover:bg-surfaceElevated hover:shadow-xl animated"
>
  <a href="{project.link}">
    <img
      src={project.image}
      alt={project.title}
      class="w-full h-48 object-cover"
    />
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2">{project.title}</h3>
      <p class="text-foregroundSubtle mb-4">{project.description}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        {#each project.tags as tag}
          <span class="bg-surfaceLight text-foregroundMuted px-2 py-1 rounded text-sm"
            >{tag}</span
          >
        {/each}
      </div>
    </div>
  </a>
</div>
