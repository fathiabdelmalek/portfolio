<script lang="ts">
  import Hero from "../components/Hero.svelte";
  import Projects from "../components/Projects.svelte";
  import Skills from "../components/Skills.svelte";
  import About from "../components/About.svelte";
  import Contact from "../components/Contact.svelte";
  
  export let data;
</script>

<main>
  <Hero />
  <Projects projects={data.projects} />
  <Skills skillCategories={data.skillCategories} />
  <About />
  <Contact />
</main>
