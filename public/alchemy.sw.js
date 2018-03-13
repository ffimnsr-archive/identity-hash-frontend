const CACHE_NAME = 'identity-hash';
const URLS_TO_CACHE = [
  '/index.html',
  '/og.html',
  '/alchemy.sw.js',
  '/manifest.json',
  '/images/full-identity.png',
  '/images/favicon.png',
  '/images/logo-id-144.png',
  '/images/logo-id-192.png',
  '/images/app_store_badge.png',
  '/images/google_play_badge.png',
  '/images/logo-ovh-avec-gray.png',
  '/images/logo-ovh-avec-colored.png',
  '/images/messenger_mock.gif',
  '/images/your-identity.png',
  '/images/import/about.png',
  '/images/import/automation.png',
  '/images/import/data_driven.png',
  '/images/import/enterprise.png',
  '/images/import/feature_1.png',
  '/images/import/feature_2.png',
  '/images/import/feature_3.png',
  '/images/import/feature_4.png',
  '/images/import/feature_5.png',
  '/images/import/get-identity.png',
  '/images/import/iphone_mockup.png',
  '/images/import/topup.png',
  '/vendors/semantic/dist/semantic.min.css',
  '/vendors/animate.css/animate.min.css',
  '/css/alchemy.min.css',
  '/css/alchemy.min.css.map',
  '/vendors/particles.js/particles.min.js',
  '/vendors/smooth-scroll.js/dist/js/smooth-scroll.min.js',
  '/vendors/wow/dist/wow.min.js',
  '/js/app.js',
  '/others/pjs-config.json'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', function(event) {
  if (!event.request.url.includes("data")) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request.clone()).then(function(resp) {
          if (!resp || resp.status !== 200 || resp.type !== 'basic') {
            return resp;
          }
          return caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, resp.clone());
          });
          return resp;
        });
      })
    );
  }
});

self.addEventListener('activate', function(event) {

});
