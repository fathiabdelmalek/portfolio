<script lang="ts">
  import { slide } from "svelte/transition";

  let isMenuOpen = false;
  let showBanner = true;
  const openMenu = () => (isMenuOpen = true);
  const closeMenu = () => (isMenuOpen = false);

  const scrollToSection = (e: MouseEvent, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    isMenuOpen = false;
  };

</script>

{#if showBanner}
  <div
    class="w-full bg-yellow-300 text-yellow-900 text-center text-xs py-1 font-semibold tracking-wide relative flex items-center justify-center"
  >
    <span class="mx-auto">
      🚧 This website is still under development. Some features may not work as
      expected.
    </span>
    <button
      class="absolute right-2 top-1/2 -translate-y-1/2 text-yellow-900 hover:text-yellow-700 text-lg px-2 focus:outline-none"
      aria-label="Close banner"
      on:click={() => (showBanner = false)}
      tabindex="0"
    >
      &times;
    </button>
  </div>
{/if}
<header class="section-container">
  <!-- <nav class="nav" aria-label="Global">
    <div class="flex md:hidden">
      <button
        type="button"
        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300 hover:text-white animated"
        onclick={openMenu}
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
    <div class="hidden md:flex md:gap-x-12">
      <a href="/" class="nav-a animated">Home</a>
      <a href="#projects" class="nav-a animated">My Projects</a>
      <a href="#skills" class="nav-a animated">My Skills</a>
      <a href="#about" class="nav-a animated">About Me</a>
      <a href="#contact" class="nav-a animated">Contact Me</a>
    </div>
  </nav> -->
<nav>
  <div>
    <div>
      <div>
        <a href="/">Im Fathi</a>
        <div class="hidden md:flex items-center space-x-8">
          <a href="#projects" on:click={(e) => scrollToSection(e, 'projects')} class="text-gray-700 hover:text-purple-500 dark:text-gray-300 dark:hover:text-purple-400 transition-colors">
            Projects
          </a>
        <a href="#skills" on:click={(e) => scrollToSection(e, 'skills')} class="text-gray-700 hover:text-purple-500 dark:text-gray-300 dark:hover:text-purple-400 transition-colors">
          Skills
        </a>
        <a href="#about" on:click={(e) => scrollToSection(e, 'about')} class="text-gray-700 hover:text-purple-500 dark:text-gray-300 dark:hover:text-purple-400 transition-colors">
          About
        </a>
        <a href="#contact" on:click={(e) => scrollToSection(e, 'contact')} class="text-gray-700 hover:text-purple-500 dark:text-gray-300 dark:hover:text-purple-400 transition-colors">
          Contact
        </a>
      </div>
      <a href="/" class="text-gray-700 hover:text-purple-500 dark:text-gray-300 dark:hover:text-purple-400 transition-colors">
        Home
      </a>
      <a href="/dashboard" class="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-400 text-white rounded-full hover:from-purple-600 hover:to-blue-500 transition-all duration-300">
        Dashboard
      </a>
    </div>
  
    <button class="md:hidden" on:click={() => openMenu()} aria-label="Toggle menu">
      <svg
      class="h-6 w-6"
      fill="none"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke="currentColor">
        {#if isMenuOpen}
        <path d="M6 18L18 6M6 6l12 12" />
        {:else}
        <path d="M4 6h16M4 12h16M4 18h16" />
        {/if}
      </svg>
    </button>
  </div>

  {#if isMenuOpen}
    <div class="md:hidden" transition:slide={{ duration: 300 }}>
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- <div class="-my-6 divide-y divide-gray-500/10"> -->
          <!-- <div class="space-y-2 py-6"> -->
            <a href="/" class="nav-a-mob animated">Home</a>
            <a href="#projects" on:click={(e) => scrollToSection(e, 'projects')} class="nav-a-mob animated">My Projects</a>
            <a href="#skills" on:click={(e) => scrollToSection(e, 'skills')} class="nav-a-mob animated">My Skills</a>
            <a href="#about" on:click={(e) => scrollToSection(e, 'about')} class="nav-a-mob animated">About Me</a>
            <a href="#contact" on:click={(e) => scrollToSection(e, 'contact')} class="nav-a-mob animated">Contact Me</a>
          </div>
        <!-- </div> -->
      <!-- </div> -->
    </div>
  {/if}
  </div>
  </nav>
</header>
