// public/service-worker.js
const cacheName = 'app-cache';
const cacheFiles = ['/'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(cacheFiles);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetchAndCache(event.request);
    })
  );
});

function fetchAndCache(request) {
  return fetch(request).then((response) => {
    // Check if we received a valid response
    if (!response || response.status !== 200 || response.type !== 'basic') {
      return response;
    }

    // Clone the response to use it both in the cache and in the browser
    const responseToCache = response.clone();

    // Cache the response
    caches.open(cacheName).then((cache) => {
      cache.put(request, responseToCache);
    });

    return response;
  }).catch(() => {
    // If the network request fails, serve from the cache
    return caches.match(request);
  });
}
