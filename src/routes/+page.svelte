<script lang="ts">
  import { onMount } from 'svelte';
  import Hero from "../components/Hero.svelte";
  import Projects from "../components/Projects.svelte";
  import Skills from "../components/Skills.svelte";
  import About from "../components/About.svelte";
  import Contact from "../components/Contact.svelte";
  import SkeletonLoader from "../components/SkeletonLoader.svelte";
  import { projects as projectsData } from "$lib/data/projects";
  import { skillCategories as skillsData } from "$lib/data/skills";
  
  let projects = $state(projectsData);
  let skillCategories = $state(skillsData);
  let isLoading = $state(false);

  onMount(() => {
    // Simulate loading delay for better UX
    isLoading = true;
    setTimeout(() => {
      isLoading = false;
    }, 300);
  });
</script>

<main>
  <Hero />
  
  {#if isLoading}
    <section id="projects" class="py-32 px-5">
      <div class="max-w-6xl mx-auto">
        <SkeletonLoader type="project" />
      </div>
    </section>
  {:else}
    <Projects {projects} />
  {/if}

  {#if isLoading}
    <section id="skills" class="py-32 px-5">
      <div class="max-w-6xl mx-auto">
        <SkeletonLoader type="skill" />
      </div>
    </section>
  {:else}
    <Skills {skillCategories} />
  {/if}
  
  <About />
  <Contact />
</main>
