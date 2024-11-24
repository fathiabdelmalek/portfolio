<script>
  import logo from "$lib/assets/logo-white.png";
  import { slide } from "svelte/transition";

  let isMenuOpen = $state(false);

  const openMenu = () => (isMenuOpen = true);
  const closeMenu = () => (isMenuOpen = false);
</script>

<header class="section-container">
  <nav class="nav" aria-label="Global">
    <div class="flex lg:hidden">
      <button
        type="button"
        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
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
    <div class="hidden lg:flex lg:gap-x-12">
      <a href="/" class="nav-link animated">Home</a>
      <a href="#work" class="nav-link animated">My Work</a>
      <a href="#skills" class="nav-link animated">My Skills</a>
      <a href="#about" class="nav-link animated">About Me</a>
      <a href="#contact" class="nav-link animated">Contact Me</a>
    </div>
  </nav>
  {#if isMenuOpen}
    <div
      class="lg:hidden"
      role="dialog"
      aria-modal="true"
      transition:slide={{ duration: 300 }}
    >
      <div class="fixed inset-0 z-50"></div>
      <div
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">passphera</span>
            <img
              class="h-8 w-auto hover:h-9 transition-all ease-out duration-200"
              src={logo}
              alt="Image two"
            />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-slate-300 hover:text-slate-50 transition ease-out duration-200"
            onclick={closeMenu}
          >
            <span class="sr-only">Close menu</span>
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a href="/" class="nav-link-side animated">Home</a>
              <a href="#work" class="nav-link-side animated">My Work</a>
              <a href="#skills" class="nav-link-side animated">My Skills</a>
              <a href="#about" class="nav-link-side animated">About Me</a>
              <a href="#contact" class="nav-link-side animated">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</header>
