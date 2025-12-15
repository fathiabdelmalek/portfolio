<script>
  import { skillCategories } from "$lib/data/skills";
  import SkillCard from "./Skill.svelte";
</script>

<section id="skills" class="py-20 px-5">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-16">
      <p class="text-sm font-medium text-text-secondary tracking-wide uppercase mb-4">
        My Expertise
      </p>
      <h2 class="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
        Skills & Technologies
      </h2>
      <p class="text-lg text-text-tertiary max-w-2xl mx-auto">
        A comprehensive overview of my technical skills and areas of expertise
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each skillCategories as category, i}
        <SkillCard {category} index={i} />
      {/each}
    </div>
  </div>
</section>

<div class="border-t border-border-primary my-16"></div>
