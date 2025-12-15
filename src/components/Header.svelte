<script lang="ts">
  import { slide, fade } from "svelte/transition";
  import { onMount } from "svelte";

  let isMenuOpen = false;
  let showBanner = true;
  let isDarkMode = true;

  onMount(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      isDarkMode = false;
      document.documentElement.classList.add('light-mode');
    }
  });

  const toggleTheme = () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleMenu = () => (isMenuOpen = !isMenuOpen);

  const scrollToSection = (e: MouseEvent, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    isMenuOpen = false;
  };

  const navLinks = [
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];
</script>

<!-- Development Banner -->
{#if showBanner}
  <div
    transition:slide={{ duration: 200 }}
    class="w-full bg-[var(--brand-primary)]/10 backdrop-blur-sm border-b border-[var(--border-primary)] text-[var(--text-secondary)] text-center text-xs py-2 font-medium tracking-wide relative flex items-center justify-center"
  >
    <span class="flex items-center gap-2">
      <span class="inline-block w-2 h-2 bg-[var(--warning)] rounded-full animate-pulse"></span>
      Under development — some features may be incomplete
    </span>
    <button
      class="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-200 p-1 rounded-md hover:bg-[var(--bg-surface)]"
      aria-label="Close banner"
      on:click={() => (showBanner = false)}
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
{/if}

<!-- Header -->
<header class="sticky top-0 z-50 w-full bg-[var(--bg-primary)]/80 backdrop-blur-md border-b border-[var(--border-primary)]/50">
  <nav class="max-w-6xl mx-auto px-5 py-4">
    <div class="flex items-center justify-center md:justify-between">
      <!-- Logo (hidden on mobile when menu closed, always visible on desktop) -->
      <a 
        href="/" 
        class="hidden md:block text-xl font-semibold text-[var(--text-primary)] hover:text-[var(--brand-primary)] transition-colors duration-200 tracking-tight"
      >
        Fathi<span class="text-[var(--brand-primary)]">.</span>
      </a>

      <!-- Desktop Navigation (centered) -->
      <div class="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
        {#each navLinks as link}
          <a
            href="#{link.id}"
            on:click={(e) => scrollToSection(e, link.id)}
            class="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] rounded-lg transition-all duration-200"
          >
            {link.label}
          </a>
        {/each}
      </div>

      <!-- Theme Toggle & Spacer -->
      <div class="hidden md:flex items-center gap-2">
        <button
          on:click={toggleTheme}
          class="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] rounded-lg transition-all duration-200"
          aria-label="Toggle theme"
        >
          {#if isDarkMode}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          {:else}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          {/if}
        </button>
      </div>

      <!-- Mobile: Logo centered -->
      <a 
        href="/" 
        class="md:hidden text-xl font-semibold text-[var(--text-primary)] hover:text-[var(--brand-primary)] transition-colors duration-200 tracking-tight"
      >
        fathi<span class="text-[var(--brand-primary)]">.</span>
      </a>

      <!-- Mobile Menu Button (absolute positioned) -->
      <button
        class="md:hidden absolute right-5 p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] rounded-lg transition-all duration-200"
        on:click={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {#if isMenuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          {/if}
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation -->
    {#if isMenuOpen}
      <div 
        class="md:hidden mt-4 pb-2"
        transition:slide={{ duration: 200 }}
      >
        <div class="flex flex-col gap-1">
          {#each navLinks as link}
            <a
              href="#{link.id}"
              on:click={(e) => scrollToSection(e, link.id)}
              class="px-4 py-3 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] rounded-lg transition-all duration-200"
            >
              {link.label}
            </a>
          {/each}

          <!-- Theme Toggle in Mobile Menu -->
          <div class="pt-2 mt-2 border-t border-[var(--border-primary)]">
            <button
              on:click={toggleTheme}
              class="w-full px-4 py-3 flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] rounded-lg transition-all duration-200"
              aria-label="Toggle theme"
            >
              {#if isDarkMode}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>Light Mode</span>
              {:else}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                <span>Dark Mode</span>
              {/if}
            </button>
          </div>
        </div>
      </div>
    {/if}
  </nav>
</header>
