const C="xinxian-v1";
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(["./","index.html","manifest.webmanifest"])).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>e.waitUntil(clients.claim()));
self.addEventListener("fetch",e=>{const q=e.request,u=new URL(q.url);if(q.method!=="GET"||u.origin!==location.origin||q.headers.has("range"))return;
e.respondWith(caches.match(q).then(h=>{const f=fetch(q).then(r=>{if(r.status===200){const k=r.clone();caches.open(C).then(c=>c.put(q,k))}return r}).catch(()=>h);return h||f}))});
