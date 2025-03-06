<script>
  import { skillCategories } from "$lib/data/skills";
  import SkillCard from "./Skill.svelte";
</script>

<section id="skills" class="section-container">
  <div class="section-header">
    <h2>My Skills</h2>
  </div>

  <div class="section-grid">
    {#each skillCategories as category}
      <SkillCard {category} />
    {/each}
  </div>
</section>
