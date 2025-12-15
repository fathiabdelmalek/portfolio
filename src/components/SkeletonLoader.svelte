<script>
  export let count = 3;
  export let type = 'project'; // 'project' or 'skill'
</script>

{#if type === 'project'}
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {#each Array(count) as _}
      <div class="bg-bg-surface border border-border-primary rounded-2xl overflow-hidden animate-pulse">
        <div class="w-full h-48 bg-bg-surface-muted"></div>
        <div class="p-6 space-y-4">
          <div class="h-6 bg-bg-surface-muted rounded w-3/4"></div>
          <div class="space-y-2">
            <div class="h-4 bg-bg-surface-muted rounded"></div>
            <div class="h-4 bg-bg-surface-muted rounded w-5/6"></div>
          </div>
          <div class="flex gap-2 pt-2">
            <div class="h-6 bg-bg-surface-muted rounded-full w-16"></div>
            <div class="h-6 bg-bg-surface-muted rounded-full w-16"></div>
            <div class="h-6 bg-bg-surface-muted rounded-full w-16"></div>
          </div>
        </div>
      </div>
    {/each}
  </div>
{:else if type === 'skill'}
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each Array(count) as _}
      <div class="bg-bg-surface border border-border-primary rounded-xl p-6 space-y-4 animate-pulse">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-bg-surface-muted rounded"></div>
          <div class="h-6 bg-bg-surface-muted rounded w-1/2"></div>
        </div>
        <div class="space-y-2">
          <div class="h-4 bg-bg-surface-muted rounded"></div>
          <div class="h-4 bg-bg-surface-muted rounded w-5/6"></div>
          <div class="h-4 bg-bg-surface-muted rounded w-4/6"></div>
        </div>
      </div>
    {/each}
  </div>
{/if}
