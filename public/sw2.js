var CACHE_NAME = 'mysite';
var urlsToCache = [
    '/',
    '/css/woocommerce.css',
    '/css/woocommerce-smallscreen.css',
    '/js/app.852e5ec6.js'
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Opened cache Alexei');
          return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(event) { // console.log( event.request );
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
                console.log(response);
                return response;
          }
          return fetch(event.request);
        }
      )
    );
});  

















