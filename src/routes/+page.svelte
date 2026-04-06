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

  const siteUrl = 'https://imfathi.com';
  const siteTitle = 'Fathi Abdelmalek - PhD Student in AI & Software Engineer';
  const siteDescription = 'PhD Student in AI · Software Engineer · Building intelligent solutions. Passionate about artificial intelligence, machine learning, and creating elegant software that solves real-world problems.';
  const siteImage = 'https://imfathi.com/og-image.png';
  const authorName = 'Fathi Abdelmalek';
  const twitterHandle = '@fathiabdelmalek';
</script>

<svelte:head>
  <title>{siteTitle}</title>
  <meta name="description" content={siteDescription} />
  <meta name="author" content={authorName} />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href={siteUrl} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={siteUrl} />
  <meta property="og:title" content={siteTitle} />
  <meta property="og:description" content={siteDescription} />
  <meta property="og:image" content={siteImage} />
  <meta property="og:site_name" content="Fathi Abdelmalek" />
  <meta property="og:locale" content="en_US" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={siteUrl} />
  <meta name="twitter:title" content={siteTitle} />
  <meta name="twitter:description" content={siteDescription} />
  <meta name="twitter:image" content={siteImage} />
  <meta name="twitter:creator" content={twitterHandle} />

  <!-- Keywords -->
  <meta name="keywords" content="PhD Student, AI, Artificial Intelligence, Machine Learning, Software Engineer, Software Developer, Web Development, Python, Django, Svelte, Portfolio" />
</svelte:head>

<main>
  <Hero />
  <Projects {projects} />
  <Publications {publications} />
  <Skills {skillCategories} />
  <About />
  <Contact />
</main>
