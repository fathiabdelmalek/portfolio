<script>
  let isVisible = false;

  function handleScroll() {
    isVisible = window.scrollY > 300;
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
  }
</script>

<svelte:window on:scroll={handleScroll} />

{#if isVisible}
  <button
    on:click={scrollToTop}
    class="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-brand-primary hover:bg-brand-primary-hover text-white shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95"
    aria-label="Back to top"
    title="Back to top"
  >
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  </button>
{/if}

<style>
  :global(button) {
    animation: slideInUp 0.3s ease-out;
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
