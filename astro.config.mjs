// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    output: 'server', // Activer le mode serveur pour les API endpoints
    vite: {
      server: {
        headers: {
          'Content-Security-Policy': "script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net;"
        }
      }
    }
  });