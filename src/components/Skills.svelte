<script>
  import { skillCategories } from "$lib/data/skills";
  import SkillCard from "./Skill.svelte";
  import { writable } from "svelte/store";

  // Shared store for managing which card is expanded
  const expandedCardIndex = writable(null);

  // Handle mouse exit from the entire grid
  function resetExpanded() {
    expandedCardIndex.set(null);
  }
</script>

<section id="skills" class="section-container">
  <div class="section-header">
    <h2>My Skills</h2>
    <p class="text-foreground-muted mt-4 max-w-2xl mx-auto">
      Hover over each hexagon to explore my skills in detail
    </p>
  </div>

  <div class="skills-hex-grid" on:mouseleave={resetExpanded}>
    {#each skillCategories as category, i}
      <SkillCard {category} index={i} {expandedCardIndex} />
    {/each}
  </div>
</section>
<div class="section-divider"></div>
