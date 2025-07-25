import { c as createComponent, r as renderHead, a as renderScript, b as renderTemplate } from '../chunks/astro/server_C1QKb3sl.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="fr" data-astro-cid-j7pv25f6> <head><meta charset="UTF-8"><title>WiFi QR-Code</title><meta name="viewport" content="width=device-width, initial-scale=1.0">${renderHead()}</head> <body data-astro-cid-j7pv25f6> <main class="card" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>WiFi QR-Code</h1> <label data-astro-cid-j7pv25f6>SSID</label> <input id="ssid" type="text" placeholder="Mon Réseau (Nom)" data-astro-cid-j7pv25f6> <label data-astro-cid-j7pv25f6>Mot de passe</label> <div style="position:relative;" data-astro-cid-j7pv25f6> <input id="pwd" type="password" placeholder="••••••••" style="padding-right:2.5rem;" data-astro-cid-j7pv25f6> <button type="button" id="togglePwd" style="position:absolute;right:5px;top:50%;transform:translateY(-50%);background:none;border:none;color:var(--muted);font-size:1rem;cursor:pointer;padding:0;" data-astro-cid-j7pv25f6>
👁️
</button> </div> <label data-astro-cid-j7pv25f6>Sécurité</label> <select id="sec" data-astro-cid-j7pv25f6> <option value="WPA" data-astro-cid-j7pv25f6>WPA/WPA2</option> <option value="WEP" data-astro-cid-j7pv25f6>WEP</option> <option value="nopass" data-astro-cid-j7pv25f6>Aucune</option> </select> <button id="generate" data-astro-cid-j7pv25f6>Générer</button> <div id="output" class="hidden" data-astro-cid-j7pv25f6> <img id="qr" alt="QR Code WiFi" data-astro-cid-j7pv25f6> <a id="download" href="#" style="margin:0 auto;margin-top:12px;" download="wifi-qr.png" data-astro-cid-j7pv25f6>Télécharger PNG</a> </div> </main> <footer data-astro-cid-j7pv25f6> <small data-astro-cid-j7pv25f6>by <strong data-astro-cid-j7pv25f6>Ardies Lebon</strong> — Ingénieur Réseau & Dev Full-Stack</small> </footer> ${renderScript($$result, "C:/Users/lebon/Desktop/Lab/wifiqr/src/pages/index.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "C:/Users/lebon/Desktop/Lab/wifiqr/src/pages/index.astro", void 0);

const $$file = "C:/Users/lebon/Desktop/Lab/wifiqr/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
