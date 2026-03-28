<script lang="ts">
  interface Props {
    name: string;
    class?: string;
  }

  let { name, class: className = '' }: Props = $props();

  const icons: Record<string, string> = {
    code: 'M16 18l6-6-6-6M8 6l-6 6 6 6',
    'code-2': 'M16 18l6-6-6-6M8 6l-6 6 6 6',
    layout: 'M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM3 9h18M9 21V9',
    server: 'M4 4h16a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zM2 14h20M6 18v4',
    smartphone: 'M8 2h8a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2zM12 18h.01',
    database: 'M12 2C8 2 4 4 4 8s4 6 8 6 8-4 8-8-4-6-8-6zM4 8c0 2.5 4 5 8 5s8-2.5 8-5M4 12c0 2.5 4 5 8 5s8-2.5 8-5',
    cloud: 'M17.5 19H9a7 7 0 110-14h1a8 8 0 1016 0z',
    cpu: 'M4 4h16v16H4zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3',
    tool: 'M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z',
    monitor: 'M21 3H3a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V5a2 2 0 00-2-2zM1 9h22',
    globe: 'M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20',
    terminal: 'M4 17l6-6-6-6M12 19h8',
    box: 'M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16zM3.27 6.96L12 12.01l8.73-5.05M12 22.08V12',
    layers: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    zap: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  };
</script>

<svg class={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  {#if icons[name]}
    <path d={icons[name]} />
  {:else}
    <circle cx="12" cy="12" r="10" />
  {/if}
</svg>
