<script lang="ts">
  import Hero from "../components/Hero.svelte";
  import Projects from "../components/Projects.svelte";
  import Publications from "../components/Publications.svelte";
  import Skills from "../components/Skills.svelte";
  import About from "../components/About.svelte";
  import Contact from "../components/Contact.svelte";
  import { projects as projectsData } from "$lib/data/projects";
  import { skillCategories as skillsData } from "$lib/data/skills";
  import { publications as publicationsData } from "$lib/data/publications";
  
  let projects = projectsData;
  let skillCategories = skillsData;
  let publications = publicationsData;
</script>

<main>
  <Hero />
  <Projects {projects} />
  <Publications {publications} />
  <Skills {skillCategories} />
  <About />
  <Contact />
</main>
