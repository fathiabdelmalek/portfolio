<script>
  export let category;
</script>

<div class="card border-top animated">
  <div class="header">
    <h3 class="text-xl font-bold">{category.icon} {category.name}</h3>
  </div>
  <div class="body">
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
</div>
