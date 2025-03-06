<script>
  import { skillCategories } from "$lib/data/skills";
  import SkillCard from "./Skill.svelte";
</script>

<section id="skills" class="min-h-screen bg-primary/5 section-container">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">My Skills</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each skillCategories as category}
        <SkillCard {category} />
      {/each}
    </div>
  </div>
</section>
