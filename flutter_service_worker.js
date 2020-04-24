'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "fc2559cb09e18b9a60748ff9ecd58369",
"/": "fc2559cb09e18b9a60748ff9ecd58369",
"main.dart.js": "d62fcf942651dcf14b935e1a3932bbe3",
"favicon.png": "4b309aa90ea597ce9ff99878f95d273f",
"icons/Icon-192.png": "4b309aa90ea597ce9ff99878f95d273f",
"icons/Icon-512.png": "4b309aa90ea597ce9ff99878f95d273f",
"manifest.json": "e6e97a7a60723df961614f3b7c61541e",
"assets/LICENSE": "358a28d6fc3a4c21802125eef462c17b",
"assets/images/profile.png": "e877eafbc75505dc2fa8d635a8a2cce1",
"assets/images/dreamhouse.jpg": "7939fb9febca9070d72837f3d9480abe",
"assets/AssetManifest.json": "927cdaf6f6e869bcc0278393824432a2",
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
