// @ts-ignore
window.WebComponents = window.WebComponents || {};
// @ts-ignore
window.WebComponents.root = window.WebComponents.root || './dist/';// <- don't forget the trailing slash
if (!('Promise' in window)){

}
require('@webcomponents/webcomponentsjs/webcomponents-loader.js');

function loadScript(scriptUrl: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.setAttribute('src', scriptUrl);

    if (document.readyState === 'loading') {
        document.write(script.outerHTML);
    } else {
        document.head.appendChild(script);
    }
    return script;
}

function loadScriptAsync(scriptUrl: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.setAttribute('src', scriptUrl);
    script.setAttribute('async', "async");
    if (document.readyState === 'loading') {
        document.write(script.outerHTML);
    } else {
        document.head.appendChild(script);
    }
    return script;
}

function isES5() {
    try {
        return typeof Symbol == "undefined" || Function("return ()=>true");
    } catch (e) {
        return false;
    }
}

if (isES5()) {
    loadScript('./dist/custom-elements-es5-adapter.js');  //
    loadScript('./dist/polyfill.js');
    loadScriptAsync('./dist/es5-bundle.js');
} else {
    loadScriptAsync('./dist/es-next-bundle.js');
}
