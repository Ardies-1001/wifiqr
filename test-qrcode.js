// Test simple pour vérifier que le package qrcode fonctionne correctement
import QRCode from 'qrcode';

async function testQRCode() {
  try {
    const wifiString = 'WIFI:T:WPA;S:TestNetwork;P:password;;';
    
    // Générer un QR code
    const qrUrl = await QRCode.toDataURL(wifiString, {
      errorCorrectionLevel: 'M',
      margin: 1,
      scale: 8
    });
    
    console.log('QR Code généré avec succès!');
    console.log('Longueur de l\'URL data:', qrUrl.length);
    console.log('Début de l\'URL data:', qrUrl.substring(0, 50) + '...');
  } catch (error) {
    console.error('Erreur lors de la génération du QR code:', error);
  }
}

testQRCode();