<script lang="ts">
  import type { Snippet } from "svelte";
  import { reveal } from "$lib/reveal";

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<div use:reveal>
  {@render children()}
</div>