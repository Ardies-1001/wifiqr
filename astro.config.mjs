// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
    output: 'server', // Activer le mode serveur pour les API endpoints
    adapter: vercel({
      maxDuration: 10, // Augmenter la durée maximale d'exécution des fonctions (en secondes)
      functionPerRoute: true // Créer une fonction par route pour éviter les problèmes de taille
    }),
    vite: {
      server: {
        headers: {
          'Content-Security-Policy': "script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net;"
        }
      },
      ssr: {
        // S'assurer que les modules externes sont correctement gérés
        noExternal: ['qrcode']
      }
    }
  });