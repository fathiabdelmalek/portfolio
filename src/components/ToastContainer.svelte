<script>
  import { toasts } from '$lib/stores/toasts';
</script>

<div class="fixed top-4 right-4 z-50 flex flex-col gap-3 pointer-events-none">
  {#each $toasts as toast (toast.id)}
    <div
      class="pointer-events-auto px-6 py-4 rounded-lg shadow-lg backdrop-blur-sm text-sm font-medium animate-slideInDown"
      style="background-color: {toast.type === 'success' ? 'rgba(34, 197, 94, 0.9)' : toast.type === 'error' ? 'rgba(239, 68, 68, 0.9)' : 'rgba(59, 130, 246, 0.9)'}; color: {toast.type === 'info' ? 'var(--text-primary)' : 'white'}"
    >
      <div class="flex items-center gap-3">
        {#if toast.type === 'success'}
          <span class="text-lg">✓</span>
        {:else if toast.type === 'error'}
          <span class="text-lg">✕</span>
        {:else}
          <span class="text-lg">ℹ</span>
        {/if}
        <span>{toast.message}</span>
      </div>
    </div>
  {/each}
</div>

<style>
  @keyframes slideInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  :global(.animate-slideInDown) {
    animation: slideInDown 0.3s ease-out forwards;
  }
</style>
