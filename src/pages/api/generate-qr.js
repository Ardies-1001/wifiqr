import QRCode from 'qrcode';

// Désactiver le prérendu pour cet endpoint
export const prerender = false;

// Endpoint API pour Astro 5.x
export async function POST({ request }) {
  try {
    // Récupération des données de la requête
    const body = await request.json();
    const { wifiString } = body;
    
    if (!wifiString) {
      return new Response(
        JSON.stringify({ error: 'Données WiFi manquantes' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    console.log('Génération QR code pour:', wifiString);
    
    // Générer le QR code avec des options simplifiées
    const qrUrl = await QRCode.toDataURL(wifiString);
    
    console.log('QR code généré avec succès, longueur:', qrUrl.length);
    
    // Retourner l'URL du QR code
    return new Response(
      JSON.stringify({ qrUrl }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Erreur lors de la génération du QR code:', error);
    
    // Retourner une réponse d'erreur plus détaillée
    return new Response(
      JSON.stringify({ 
        error: 'Erreur lors de la génération du QR code', 
        details: error.message 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}