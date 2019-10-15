"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = 1);
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js":
  /*!*****************************************************************************!*\
    !*** ./node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js ***!
    \*****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesWebcomponentsWebcomponentsjsWebcomponentsLoaderJs(module, exports) {
    /**
     * @license
     * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
     */
    (function () {
      'use strict';
      /**
       * Basic flow of the loader process
       *
       * There are 4 flows the loader can take when booting up
       *
       * - Synchronous script, no polyfills needed
       *   - wait for `DOMContentLoaded`
       *   - fire WCR event, as there could not be any callbacks passed to `waitFor`
       *
       * - Synchronous script, polyfills needed
       *   - document.write the polyfill bundle
       *   - wait on the `load` event of the bundle to batch Custom Element upgrades
       *   - wait for `DOMContentLoaded`
       *   - run callbacks passed to `waitFor`
       *   - fire WCR event
       *
       * - Asynchronous script, no polyfills needed
       *   - wait for `DOMContentLoaded`
       *   - run callbacks passed to `waitFor`
       *   - fire WCR event
       *
       * - Asynchronous script, polyfills needed
       *   - Append the polyfill bundle script
       *   - wait for `load` event of the bundle
       *   - batch Custom Element Upgrades
       *   - run callbacks pass to `waitFor`
       *   - fire WCR event
       */

      var polyfillsLoaded = false;
      var whenLoadedFns = [];
      var allowUpgrades = false;
      var flushFn;

      function fireEvent() {
        window.WebComponents.ready = true;
        document.dispatchEvent(new CustomEvent('WebComponentsReady', {
          bubbles: true
        }));
      }

      function batchCustomElements() {
        if (window.customElements && customElements.polyfillWrapFlushCallback) {
          customElements.polyfillWrapFlushCallback(function (flushCallback) {
            flushFn = flushCallback;

            if (allowUpgrades) {
              flushFn();
            }
          });
        }
      }

      function asyncReady() {
        batchCustomElements();
        ready();
      }

      function ready() {
        // bootstrap <template> elements before custom elements
        if (window.HTMLTemplateElement && HTMLTemplateElement.bootstrap) {
          HTMLTemplateElement.bootstrap(window.document);
        }

        polyfillsLoaded = true;
        runWhenLoadedFns().then(fireEvent);
      }

      function runWhenLoadedFns() {
        allowUpgrades = false;
        var fnsMap = whenLoadedFns.map(function (fn) {
          return fn instanceof Function ? fn() : fn;
        });
        whenLoadedFns = [];
        return Promise.all(fnsMap).then(function () {
          allowUpgrades = true;
          flushFn && flushFn();
        }).catch(function (err) {
          console.error(err);
        });
      }

      window.WebComponents = window.WebComponents || {};
      window.WebComponents.ready = window.WebComponents.ready || false;

      window.WebComponents.waitFor = window.WebComponents.waitFor || function (waitFn) {
        if (!waitFn) {
          return;
        }

        whenLoadedFns.push(waitFn);

        if (polyfillsLoaded) {
          runWhenLoadedFns();
        }
      };

      window.WebComponents._batchCustomElements = batchCustomElements;
      var name = 'webcomponents-loader.js'; // Feature detect which polyfill needs to be imported.

      var polyfills = [];

      if (!('attachShadow' in Element.prototype && 'getRootNode' in Element.prototype) || window.ShadyDOM && window.ShadyDOM.force) {
        polyfills.push('sd');
      }

      if (!window.customElements || window.customElements.forcePolyfill) {
        polyfills.push('ce');
      }

      var needsTemplate = function () {
        // no real <template> because no `content` property (IE and older browsers)
        var t = document.createElement('template');

        if (!('content' in t)) {
          return true;
        } // broken doc fragment (older Edge)


        if (!(t.content.cloneNode() instanceof DocumentFragment)) {
          return true;
        } // broken <template> cloning (Edge up to at least version 17)


        var t2 = document.createElement('template');
        t2.content.appendChild(document.createElement('div'));
        t.content.appendChild(t2);
        var clone = t.cloneNode(true);
        return clone.content.childNodes.length === 0 || clone.content.firstChild.content.childNodes.length === 0;
      }(); // NOTE: any browser that does not have template or ES6 features
      // must load the full suite of polyfills.


      if (!window.Promise || !Array.from || !window.URL || !window.Symbol || needsTemplate) {
        polyfills = ['sd-ce-pf'];
      }

      if (polyfills.length) {
        var url;
        var polyfillFile = 'bundles/webcomponents-' + polyfills.join('-') + '.js'; // Load it from the right place.

        if (window.WebComponents.root) {
          url = window.WebComponents.root + polyfillFile;
        } else {
          var script = document.querySelector('script[src*="' + name + '"]'); // Load it from the right place.

          url = script.src.replace(name, polyfillFile);
        }

        var newScript = document.createElement('script');
        newScript.src = url; // if readyState is 'loading', this script is synchronous

        if (document.readyState === 'loading') {
          // make sure custom elements are batched whenever parser gets to the injected script
          newScript.setAttribute('onload', 'window.WebComponents._batchCustomElements()');
          document.write(newScript.outerHTML);
          document.addEventListener('DOMContentLoaded', ready);
        } else {
          newScript.addEventListener('load', function () {
            asyncReady();
          });
          newScript.addEventListener('error', function () {
            throw new Error('Could not load polyfill bundle' + url);
          });
          document.head.appendChild(newScript);
        }
      } else {
        // if readyState is 'complete', script is loaded imperatively on a spec-compliant browser, so just fire WCR
        if (document.readyState === 'complete') {
          polyfillsLoaded = true;
          fireEvent();
        } else {
          // this script may come between DCL and load, so listen for both, and cancel load listener if DCL fires
          window.addEventListener('load', ready);
          window.addEventListener('DOMContentLoaded', function () {
            window.removeEventListener('load', ready);
            ready();
          });
        }
      }
    })();
    /***/

  },

  /***/
  "./src/loader.ts":
  /*!***********************!*\
    !*** ./src/loader.ts ***!
    \***********************/

  /*! no static exports found */

  /***/
  function srcLoaderTs(module, exports, __webpack_require__) {
    "use strict"; // @ts-ignore

    window.WebComponents = window.WebComponents || {}; // @ts-ignore

    window.WebComponents.root = window.WebComponents.root || './dist/'; // <- don't forget the trailing slash

    if (!('Promise' in window)) {}

    __webpack_require__(
    /*! @webcomponents/webcomponentsjs/webcomponents-loader.js */
    "./node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js");

    function loadScript(scriptUrl) {
      var script = document.createElement('script');
      script.setAttribute('src', scriptUrl);
      document.head.appendChild(script);
      return script;
    }

    function loadScriptAsync(scriptUrl) {
      var script = document.createElement('script');
      script.setAttribute('src', scriptUrl);
      script.setAttribute('async', "async");
      document.head.appendChild(script);
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
      loadScript('./dist/custom-elements-es5-adapter.js'); //

      loadScript('./dist/polyfill.js');
      loadScriptAsync('./dist/es5-bundle.js');
    } else {
      loadScriptAsync('./dist/es-next-bundle.js');
    }
    /***/

  },

  /***/
  1:
  /*!*****************************!*\
    !*** multi ./src/loader.ts ***!
    \*****************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\tiber\personal\work\es5-esnext-webcomponent-project-starter\src\loader.ts */
    "./src/loader.ts");
    /***/
  }
  /******/

});