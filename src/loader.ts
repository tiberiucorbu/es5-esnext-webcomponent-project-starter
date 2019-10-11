// Internet Explorer 6-11
// @ts-ignore
const isIE = /*@cc_on!@*/false || !!document['documentMode'];

function loadScript(scriptUrl: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.setAttribute('src', scriptUrl);
    document.head.appendChild(script);
    return script;
}

function loadScriptAsync(scriptUrl: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.setAttribute('src', scriptUrl);
    script.setAttribute('async', "async");
    document.head.appendChild(script);
    return script;
}

if (isIE) {
    const es5AddapterScript = './dist/custom-elements-es5-adapter.js';
    const polyfillScript = './dist/polyfill.js';
    loadScript(polyfillScript);
    loadScript(es5AddapterScript);
}

if (isIE) {
    loadScriptAsync('./dist/es5-bundle.js');
} else {
    loadScriptAsync('./dist/es-next-bundle.js');
}
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./dist/es-next-service-worker.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
