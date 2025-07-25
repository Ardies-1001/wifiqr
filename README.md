# WiFi QR-Code Factory

Instantly create a scannable Wi-Fi QR code—no app, no typing, no fuss.

---

### What it does
1. Type your **SSID**, **password**, and **security** mode.  
2. Hit **Generate**.  
3. Flash the generated QR code to any phone or laptop and connect in one tap.

---

### Tech stack
- **Frontend:** Astro (vanilla)  
- **API endpoint:** `POST /api/generate-qr` — returns a Base64 PNG  
- **QR lib:** `qrcode` (server-side)  
- **Deploy:** Vercel (push-to-deploy)

---

### Run locally
```bash
git clone https://github.com/Ardies-1001/wifiqr.git
cd wifiqr
npm install
npm run dev      # open http://localhost:4321
```

---

### Deploy in 30 s
```bash
vercel --prod
```

---

### Customize
- **Colours & fonts:** edit the `<style>` block in `src/pages/index.astro`.  
- **Logo or frame:** tweak `POST /api/generate-qr` options in `src/pages/api/generate-qr.ts`.

---

### Share
Live demo: `https://wifiqr.vercel.app`

---

Made in one evening by **Ardies Lebon** — network engineer who got tired of spelling passwords.