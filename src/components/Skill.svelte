<script>
  export let category;
  import { fade, fly } from "svelte/transition";

  let hovered = false;
</script>

<div
  class="skill-hex-container animated"
  on:mouseenter={() => (hovered = true)}
  on:mouseleave={() => (hovered = false)}
>
  <div class={`hex-outer ${hovered ? "expanded" : ""}`}>
    <div class={`hex-inner ${hovered ? "expanded" : ""}`}>
      {#if !hovered}
        <div
          in:fade={{ duration: 200 }}
          out:fade={{ duration: 100 }}
          class="hex-content"
        >
          <div class="hex-icon text-3xl">{category.icon}</div>
          <h3 class="hex-title">{category.name}</h3>
        </div>
      {:else}
        <div in:fade={{ duration: 200 }} class="hex-content-hover">
          <h3 class="hex-title-expanded">{category.name}</h3>
          <ul class="skills-list">
            {#each category.skills as skill, i}
              <li
                in:fly={{ y: 10, delay: i * 50, duration: 200 }}
                class={`skill-item skill-priority-${Math.min(i, 3)}`}
              >
                {skill}
              </li>
            {/each}
          </ul>
        </div>
      {/if}
    </div>
  </div>
</div>
