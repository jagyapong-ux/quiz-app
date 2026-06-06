// ==============================
// 📚 Service Worker – PWA Magie
// ==============================
// Der Service Worker läuft im Hintergrund und speichert
// alle App-Dateien lokal → die App funktioniert auch OFFLINE!

const CACHE_NAME = "quiz-app-v1";

// Diese Dateien werden beim ersten Besuch gespeichert
const FILES_TO_CACHE = [
  "/quiz-app/",
  "/quiz-app/index.html",
  "/quiz-app/style.css",
  "/quiz-app/script.js",
  "/quiz-app/manifest.json",
  "/quiz-app/icons/icon-192.png",
  "/quiz-app/icons/icon-512.png"
];

// -- Install: Dateien in den Cache laden --
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log("Service Worker: Dateien werden gecacht");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// -- Activate: Alte Caches löschen --
self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(
        keyList.map(function(key) {
          if (key !== CACHE_NAME) {
            console.log("Service Worker: Alter Cache gelöscht", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// -- Fetch: Erst Cache, dann Netzwerk --
self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Aus dem Cache antworten wenn vorhanden
      if (response) {
        return response;
      }
      // Sonst normal aus dem Netzwerk laden
      return fetch(event.request);
    })
  );
});
