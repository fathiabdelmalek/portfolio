<script>
  export let category;
</script>

<div
  class="p-8 bg-surface rounded-xl shadow-md border-t-4 border-surfaceElevated hover:shadow-xl animated hover:bg-surfaceElevated"
>
  <h3 class="text-xl font-bold mb-4">{category.icon} {category.name}</h3>
  <ul class="space-y-2">
    {#each category.skills as skill, i}
      <li class="flex items-center">
        <div
          class="w-2 h-2 rounded-full {i === 0
            ? 'bg-success'
            : i === 1
              ? 'bg-info'
              : 'bg-primary'} mr-3"
        ></div>
        <span>{skill}</span>
      </li>
    {/each}
  </ul>
</div>
