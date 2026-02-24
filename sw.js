// Motor de instalación de la App P&P Soluciones
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Permite que el catálogo cargue en línea siempre
  e.respondWith(fetch(e.request));
});
