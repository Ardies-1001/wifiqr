import 'kleur/colors';
import { d as decodeKey } from './chunks/astro/server_C1QKb3sl.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Ba2y0OYr.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/lebon/Desktop/Lab/wifiqr/","cacheDir":"file:///C:/Users/lebon/Desktop/Lab/wifiqr/node_modules/.astro/","outDir":"file:///C:/Users/lebon/Desktop/Lab/wifiqr/dist/","srcDir":"file:///C:/Users/lebon/Desktop/Lab/wifiqr/src/","publicDir":"file:///C:/Users/lebon/Desktop/Lab/wifiqr/public/","buildClientDir":"file:///C:/Users/lebon/Desktop/Lab/wifiqr/dist/client/","buildServerDir":"file:///C:/Users/lebon/Desktop/Lab/wifiqr/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/generate-qr","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/generate-qr\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"generate-qr","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/generate-qr.js","pathname":"/api/generate-qr","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":":root{--bg: #0d0d0d;--card: #1a1a1a;--accent: #00e5ff;--text: #fff;--muted: #8a8a8a;--radius: 12px;--font: \"Segoe UI\", system-ui, sans-serif}[data-astro-cid-j7pv25f6]{box-sizing:border-box;margin:0;padding:0}body{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;background:var(--bg);color:var(--text);font-family:var(--font);padding:1rem}.card[data-astro-cid-j7pv25f6]{background:var(--card);border:1px solid #333;border-radius:var(--radius);padding:2rem;width:100%;max-width:380px;box-shadow:0 0 20px #00e5ff40}h1[data-astro-cid-j7pv25f6]{text-align:center;font-size:1.5rem;margin-bottom:1.5rem;color:var(--accent)}label[data-astro-cid-j7pv25f6]{display:block;margin:.75rem 0 .25rem;font-size:.9rem;color:var(--muted)}input[data-astro-cid-j7pv25f6],select[data-astro-cid-j7pv25f6]{width:100%;padding:.6rem .75rem;border-radius:var(--radius);border:1px solid #333;background:#111;color:var(--text);font-size:1rem}input[data-astro-cid-j7pv25f6]:focus,select[data-astro-cid-j7pv25f6]:focus{outline:none;border-color:var(--accent)}button[data-astro-cid-j7pv25f6]{width:100%;margin-top:1.25rem;padding:.75rem;border:none;border-radius:var(--radius);background:var(--accent);color:#000;font-weight:700;cursor:pointer}button[data-astro-cid-j7pv25f6]:hover{filter:brightness(1.15)}.hidden[data-astro-cid-j7pv25f6]{display:none}#output[data-astro-cid-j7pv25f6]{margin-top:1.5rem;text-align:center}#qr[data-astro-cid-j7pv25f6]{max-width:220px;height:auto;border-radius:var(--radius);margin-bottom:.75rem}#download[data-astro-cid-j7pv25f6]{display:block;width:auto;margin:0 auto;margin-top:1rem;padding:.6rem 1.5rem;border:none;border-radius:var(--radius);background:var(--accent);color:#000;font-weight:700;font-size:1rem;cursor:pointer;text-decoration:none;transition:filter .15s}#download[data-astro-cid-j7pv25f6]:hover{filter:brightness(1.1)}footer[data-astro-cid-j7pv25f6]{margin-top:2rem;color:var(--muted);font-size:.6rem}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/lebon/Desktop/Lab/wifiqr/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/api/generate-qr@_@js":"pages/api/generate-qr.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/lebon/Desktop/Lab/wifiqr/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_C2JNdeIh.mjs","\u0000@astrojs-manifest":"manifest_CaGtEwyY.mjs","C:/Users/lebon/Desktop/Lab/wifiqr/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.Dwwwub-l.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/lebon/Desktop/Lab/wifiqr/src/pages/index.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const l=document.getElementById(\"ssid\"),n=document.getElementById(\"pwd\"),i=document.getElementById(\"sec\"),t=document.getElementById(\"generate\"),m=document.getElementById(\"output\"),u=document.getElementById(\"qr\"),g=document.getElementById(\"download\"),d=document.getElementById(\"togglePwd\");d.addEventListener(\"click\",()=>{n.type=n.type===\"password\"?\"text\":\"password\",d.textContent=n.type===\"password\"?\"👁️\":\"🙈\"}),t.addEventListener(\"click\",async()=>{try{const e=l.value.trim(),a=n.value.trim(),c=i.value;if(!e)return alert(\"SSID requis\");if(!a)return alert(\"Password requis\");t.textContent=\"Génération...\",t.disabled=!0;const p=c===\"nopass\"?`WIFI:T:nopass;S:${e};;`:`WIFI:T:${c};S:${e};P:${a};;`,o=await fetch(\"/api/generate-qr\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({wifiString:p})});let r;if(o.ok)r=await o.json();else{const s=await o.json();throw new Error(s.error+(s.details?\": \"+s.details:\"\"))}u.src=r.qrUrl,g.href=r.qrUrl,m.classList.remove(\"hidden\")}catch(e){console.error(e),alert(\"Erreur lors de la génération du QR code: \"+e.message)}finally{t.textContent=\"Générer\",t.disabled=!1}})});"]],"assets":["/favicon.svg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"xS2dmubJjNLZLOt4Gw0MzuiJKmW6XBz7B6dVeT/gZwE="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
