// @ts-ignore
window.WebComponents = window.WebComponents || {};
// @ts-ignore
window.WebComponents.root = window.WebComponents.root || './dist/';// <- don't forget the trailing slash
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

function supportsSymbol() {
    return typeof Symbol === 'function'
}

function supportsLambda() {
    try {
        Function("return ()=>true");
        return true;
    } catch (e) {
        return false;
    }
}

function isES5() {
    return !(supportsSymbol() && supportsLambda());
}

if (isES5()) {
    loadScript('./dist/polyfill.js');
    loadScriptAsync('./dist/es5-bundle.js');
} else {
    loadScriptAsync('./dist/es-next-bundle.js');
}
