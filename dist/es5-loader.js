"use strict";

(function () {
  "use strict";

  function t(t) {
    var e = document.createElement("script");
    return e.setAttribute("src", t), e.setAttribute("async", "async"), "loading" === document.readyState ? document.write(e.outerHTML) : document.head.appendChild(e), e;
  }

  "function" == typeof Symbol && function () {
    try {
      return Function("return ()=>true"), !0;
    } catch (t) {
      return !1;
    }
  }() ? t("./dist/es-next-bundle.js") : (function (t) {
    var e = document.createElement("script");
    e.setAttribute("src", "./dist/es5-polyfill.js"), "loading" === document.readyState ? document.write(e.outerHTML) : document.head.appendChild(e);
  }(), t("./dist/es5-bundle.js"));
})();