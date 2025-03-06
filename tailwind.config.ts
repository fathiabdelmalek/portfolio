import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        primaryLight: "var(--primary-light)",
        secondary: "var(--secondary)",
        secondaryLight: "var(--secondary-light)",
        background: "var(--background)",
        surface: "var(--surface)",
        surfaceElevated: "var(--surface-elevated)",
        surfaceLight: "var(--surface-light)",
        foreground: "var(--foreground)",
        foregroundMuted: "var(--foreground-muted)",
        foregroundSubtle: "var(--foreground-subtle)",
        foregroundLight: "var(--foreground-light)",
        foregroundLighter: "var(--foreground-lighter)",
        foregroundFaint: "var(--foreground-faint)",
        success: "var(--success)",
        error: "var(--error)",
        warning: "var(--warning)",
        info: "var(--info)",
        borderColor: "var(--border-color)",
        focusRing: "var(--focus-ring)",
      },
    },
  },

  plugins: [typography, forms, containerQueries]
} satisfies Config;
