"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var o = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      n.d(r, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 101);
}({
  101: function _(e, t, n) {
    e.exports = n(102);
  },
  102: function _(e, t, n) {
    "use strict";

    var r = !!document.documentMode;

    function o(e) {
      var t = document.createElement("script");
      return t.setAttribute("src", e), document.head.appendChild(t), t;
    }

    function i(e) {
      var t = document.createElement("script");
      return t.setAttribute("src", e), t.setAttribute("async", "async"), document.head.appendChild(t), t;
    }

    if (r) {
      var _e = "./dist/custom-elements-es5-adapter.js";
      o("./dist/polyfill.js"), o(_e);
    }

    i(r ? "./dist/es5-bundle.js" : "./dist/es-next-bundle.js"), "serviceWorker" in navigator && window.addEventListener("load", function () {
      navigator.serviceWorker.register("./dist/es-next-service-worker.js").then(function (e) {
        console.log("ServiceWorker registration successful with scope: ", e.scope);
      }, function (e) {
        console.log("ServiceWorker registration failed: ", e);
      });
    });
  }
});