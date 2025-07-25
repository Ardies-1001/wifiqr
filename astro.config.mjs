// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
    output: 'server', // Activer le mode serveur pour les API endpoints
    adapter: vercel(), // Ajouter l'adaptateur Vercel pour le déploiement
    vite: {
      server: {
        headers: {
          'Content-Security-Policy': "script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net;"
        }
      }
    }
  });