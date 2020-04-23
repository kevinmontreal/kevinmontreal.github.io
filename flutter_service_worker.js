'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "fc2559cb09e18b9a60748ff9ecd58369",
"/": "fc2559cb09e18b9a60748ff9ecd58369",
"main.dart.js": "7e1381821687204954993dc27c9ce7c2",
"favicon.png": "4b309aa90ea597ce9ff99878f95d273f",
"icons/Icon-192.png": "4b309aa90ea597ce9ff99878f95d273f",
"icons/Icon-512.png": "4b309aa90ea597ce9ff99878f95d273f",
"manifest.json": "e6e97a7a60723df961614f3b7c61541e",
"assets/LICENSE": "358a28d6fc3a4c21802125eef462c17b",
"assets/images/profile.png": "e877eafbc75505dc2fa8d635a8a2cce1",
"assets/AssetManifest.json": "5d577402c7510b3a15650e31b860414f",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
