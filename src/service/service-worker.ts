const CACHE_VERSION = `v1`;
const CACHE_NAME = `wcstatic-${CACHE_VERSION}`;

async function openCache() {
    return await caches.open(CACHE_NAME);
}

async function cacheStaticAssets() {
    const cache = await openCache();
    return cache.addAll([
        '/',
        '/dist/es-next/polyfills.js',
        '/dist/es-next/bundle.js',
        '/dist/modules/@webcomponents/webcomponentsjs/webcomponents-loader.js'
        // etc
    ]);
}

self.addEventListener('install', async (event: any) => {
    event.waitUntil(cacheStaticAssets());
});

self.addEventListener('fetch', async (event: any) => {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                    // Cache hit - return response
                    if (response) {
                        console.log(`reply with cache for ${event.request.url}`);
                        return response;
                    }
                    console.log(`no cache for ${event.request.url}, fetching it from the server`);
                    return fetch(event.request);
                }
            )
    );
});
