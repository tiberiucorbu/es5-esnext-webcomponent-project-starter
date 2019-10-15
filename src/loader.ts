import '@webcomponents/webcomponentsjs/webcomponents-loader.js';

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

function isES5() {
    "use strict";
    if (typeof Symbol == "undefined") return true;
    try {
        Function("()=>{}"); return false;
    } catch (e) { return true; }
    return false;
}

if (isES5()) {
    loadScript('./dist/custom-elements-es5-adapter.js');    
    loadScriptAsync('./dist/es5-bundle.js');
} else {
    loadScriptAsync('./dist/es-next-bundle.js');
}
