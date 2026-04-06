// EmailJS Configuration
// Values are injected from .env at build time via vite.config.ts

export const EMAILJS_PUBLIC_KEY = import.meta.env.EMAILJS_PUBLIC_KEY || '';
export const EMAILJS_SERVICE_ID = import.meta.env.EMAILJS_SERVICE_ID || '';
export const EMAILJS_TEMPLATE_ID = import.meta.env.EMAILJS_TEMPLATE_ID || '';
