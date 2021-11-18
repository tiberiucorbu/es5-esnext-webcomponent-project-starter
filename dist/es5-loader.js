"use strict";

/*! For license information please see loader.js.LICENSE.txt */
(function () {
  var e = {
    1017: function _() {
      !function () {
        "use strict";

        var e,
            t = !1,
            n = [],
            o = !1;

        function d() {
          window.WebComponents.ready = !0, document.dispatchEvent(new CustomEvent("WebComponentsReady", {
            bubbles: !0
          }));
        }

        function r() {
          window.customElements && customElements.polyfillWrapFlushCallback && customElements.polyfillWrapFlushCallback(function (t) {
            e = t, o && e();
          });
        }

        function i() {
          window.HTMLTemplateElement && HTMLTemplateElement.bootstrap && HTMLTemplateElement.bootstrap(window.document), t = !0, c().then(d);
        }

        function c() {
          o = !1;
          var t = n.map(function (e) {
            return e instanceof Function ? e() : e;
          });
          return n = [], Promise.all(t).then(function () {
            o = !0, e && e();
          }).catch(function (e) {
            console.error(e);
          });
        }

        window.WebComponents = window.WebComponents || {}, window.WebComponents.ready = window.WebComponents.ready || !1, window.WebComponents.waitFor = window.WebComponents.waitFor || function (e) {
          e && (n.push(e), t && c());
        }, window.WebComponents._batchCustomElements = r;
        var s = "webcomponents-loader.js",
            a = [];
        (!("attachShadow" in Element.prototype) || !("getRootNode" in Element.prototype) || window.ShadyDOM && window.ShadyDOM.force) && a.push("sd"), window.customElements && !window.customElements.forcePolyfill || a.push("ce");

        var u = function () {
          var e = document.createElement("template");
          if (!("content" in e)) return !0;
          if (!(e.content.cloneNode() instanceof DocumentFragment)) return !0;
          var t = document.createElement("template");
          t.content.appendChild(document.createElement("div")), e.content.appendChild(t);
          var n = e.cloneNode(!0);
          return 0 === n.content.childNodes.length || 0 === n.content.firstChild.content.childNodes.length;
        }();

        if (window.Promise && Array.from && window.URL && window.Symbol && !u || (a = ["sd-ce-pf"]), a.length) {
          var l,
              m = "bundles/webcomponents-" + a.join("-") + ".js";
          if (window.WebComponents.root) l = window.WebComponents.root + m;else {
            var w = document.querySelector('script[src*="' + s + '"]');
            l = w.src.replace(s, m);
          }
          var p = document.createElement("script");
          p.src = l, "loading" === document.readyState ? (p.setAttribute("onload", "window.WebComponents._batchCustomElements()"), document.write(p.outerHTML), document.addEventListener("DOMContentLoaded", i)) : (p.addEventListener("load", function () {
            r(), i();
          }), p.addEventListener("error", function () {
            throw new Error("Could not load polyfill bundle" + l);
          }), document.head.appendChild(p));
        } else "complete" === document.readyState ? (t = !0, d()) : (window.addEventListener("load", i), window.addEventListener("DOMContentLoaded", function () {
          window.removeEventListener("load", i), i();
        }));
      }();
    }
  },
      t = {};

  function n(o) {
    var d = t[o];
    if (void 0 !== d) return d.exports;
    var r = t[o] = {
      exports: {}
    };
    return e[o](r, r.exports, n), r.exports;
  }

  (function () {
    "use strict";

    function e(e) {
      var t = document.createElement("script");
      return t.setAttribute("src", e), t.setAttribute("async", "async"), "loading" === document.readyState ? document.write(t.outerHTML) : document.head.appendChild(t), t;
    }

    window.WebComponents = window.WebComponents || {}, window.WebComponents.root = window.WebComponents.root || "./dist/", n(1017), "function" == typeof Symbol && function () {
      try {
        return Function("return ()=>true"), !0;
      } catch (e) {
        return !1;
      }
    }() ? (function (e) {
      var t = document.createElement("script");
      t.setAttribute("src", "./dist/polyfill.js"), "loading" === document.readyState ? document.write(t.outerHTML) : document.head.appendChild(t);
    }(), e("./dist/es5-bundle.js")) : e("./dist/es-next-bundle.js");
  })();
})();