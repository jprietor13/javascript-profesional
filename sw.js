const VERSION = "v1"

self.addEventListener("install", event => {
    event.waitUntil(precache())
});

self.addEventListener('fetch', event => {
    const request = event.request;
    //get
    if(request.method !== "GET"){
        return;
    }

    //buscat en cache
    event.respondWith(cachedResponse(request))

    //actualizar cache
    event.waitUntil(updateCache(request))
})

async function precache () {
    const cache = await caches.open(VERSION);
    return cache.addAll([
        '/',
        '/index.html',
        '/assets/index.js',
        '/assets/mediaPlayer.js',
        '/assets/plugins/AutoPlay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/index.css',
        '/assets/BigBuckBunny.mp4'
    ])
}

async function cachedResponse(request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
}

async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    cache.put(reques, response)
    return cache;
}