// Mude este número (ex: v3, v4) SEMPRE que fizer uma alteração no seu index.html
const CACHE_NAME = 'elt-tt-cache-v2'; 

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json'
];

// Instalação: Salva os arquivos iniciais no cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  // Força o novo Service Worker a assumir o controle imediatamente
  self.skipWaiting(); 
});

// Ativação: Limpa os caches antigos se o CACHE_NAME mudar
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Limpando cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim(); // Atualiza todas as abas abertas do app
});

// Interceptação (Network First): Tenta a internet primeiro, se falhar usa o cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Se a internet funcionar, retorna a versão mais recente do GitHub
        return networkResponse;
      })
      .catch(() => {
        // Se estiver offline, retorna a versão salva no cache
        return caches.match(event.request);
      })
  );
});