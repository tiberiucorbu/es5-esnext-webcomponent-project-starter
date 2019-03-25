const CACHE_VERSION = `v1`;
const CACHE_NAME = `mysite-static-${CACHE_VERSION}`;

async function openCache() {
    return await caches.open(CACHE_NAME);
}

async function cacheStaticAssets() {
    const cache = await openCache();
    return cache.addAll([
        '/',
        '/dist/es-next/polyfills.js',
        '/dist/es-next/bundle.js',
        '/node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js'
        // etc
    ]);
}

self.addEventListener('install', async (event: any) => {
    event.waitUntil(cacheStaticAssets());
});

async function loadFromCache(request: any) {
    const cache = await openCache();
    return cache.match(request);
}

self.addEventListener('fetch', async (evt: any) => {
    console.log('The service worker is serving the asset.');
    evt.respondWith(loadFromCache(evt.request));
});