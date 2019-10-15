"use strict";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        span {\n          color: green;\n        }"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            <div> This lit element has a mood:\n                <span>", "</span>\n             </div>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function s(n) {
    if (t[n]) return t[n].exports;
    var i = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(i.exports, i, i.exports, s), i.l = !0, i.exports;
  }

  s.m = e, s.c = t, s.d = function (e, t, n) {
    s.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, s.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, s.t = function (e, t) {
    if (1 & t && (e = s(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var n = Object.create(null);
    if (s.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var i in e) {
      s.d(n, i, function (t) {
        return e[t];
      }.bind(null, i));
    }
    return n;
  }, s.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return s.d(t, "a", t), t;
  }, s.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, s.p = "", s(s.s = 0);
}([function (e, t, s) {
  e.exports = s(4);
},,,, function (e, t, s) {
  "use strict";

  s.r(t);
  window.customElements.define("my-element",
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(_class, _HTMLElement);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
    }

    _createClass(_class, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this.attachShadow({
          mode: "open"
        }), this.shadowRoot && (this.shadowRoot.innerHTML = "<div>Custom html element</div>");
      }
    }]);

    return _class;
  }(_wrapNativeSuper(HTMLElement)));
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */

  var n = new WeakMap(),
      i = function i(e) {
    return "function" == typeof e && n.has(e);
  },
      r = void 0 !== window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback,
      o = function o(e, t) {
    var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    for (; t !== s;) {
      var _s = t.nextSibling;
      e.removeChild(t), t = _s;
    }
  },
      a = {},
      l = {},
      c = "{{lit-".concat(String(Math.random()).slice(2), "}}"),
      h = "<!--".concat(c, "-->"),
      d = new RegExp("".concat(c, "|").concat(h)),
      p = "$lit$";

  var u = function u(e, t) {
    _classCallCheck(this, u);

    this.parts = [], this.element = t;
    var s = [],
        n = [],
        i = document.createTreeWalker(t.content, 133, null, !1);
    var r = 0,
        o = -1,
        a = 0;
    var l = e.strings,
        h = e.values.length;

    for (; a < h;) {
      var _e = i.nextNode();

      if (null !== _e) {
        if (o++, 1 === _e.nodeType) {
          if (_e.hasAttributes()) {
            var _t = _e.attributes,
                _s2 = _t.length;
            var _n = 0;

            for (var _e2 = 0; _e2 < _s2; _e2++) {
              m(_t[_e2].name, p) && _n++;
            }

            for (; _n-- > 0;) {
              var _t2 = l[a],
                  _s3 = y.exec(_t2)[2],
                  _n2 = _s3.toLowerCase() + p,
                  _i = _e.getAttribute(_n2);

              _e.removeAttribute(_n2);

              var _r = _i.split(d);

              this.parts.push({
                type: "attribute",
                index: o,
                name: _s3,
                strings: _r
              }), a += _r.length - 1;
            }
          }

          "TEMPLATE" === _e.tagName && (n.push(_e), i.currentNode = _e.content);
        } else if (3 === _e.nodeType) {
          var _t3 = _e.data;

          if (_t3.indexOf(c) >= 0) {
            var _n3 = _e.parentNode,
                _i2 = _t3.split(d),
                _r2 = _i2.length - 1;

            for (var _t4 = 0; _t4 < _r2; _t4++) {
              var _s4 = void 0,
                  _r3 = _i2[_t4];

              if ("" === _r3) _s4 = f();else {
                var _e3 = y.exec(_r3);

                null !== _e3 && m(_e3[2], p) && (_r3 = _r3.slice(0, _e3.index) + _e3[1] + _e3[2].slice(0, -p.length) + _e3[3]), _s4 = document.createTextNode(_r3);
              }
              _n3.insertBefore(_s4, _e), this.parts.push({
                type: "node",
                index: ++o
              });
            }

            "" === _i2[_r2] ? (_n3.insertBefore(f(), _e), s.push(_e)) : _e.data = _i2[_r2], a += _r2;
          }
        } else if (8 === _e.nodeType) if (_e.data === c) {
          var _t5 = _e.parentNode;
          null !== _e.previousSibling && o !== r || (o++, _t5.insertBefore(f(), _e)), r = o, this.parts.push({
            type: "node",
            index: o
          }), null === _e.nextSibling ? _e.data = "" : (s.push(_e), o--), a++;
        } else {
          var _t6 = -1;

          for (; -1 !== (_t6 = _e.data.indexOf(c, _t6 + 1));) {
            this.parts.push({
              type: "node",
              index: -1
            }), a++;
          }
        }
      } else i.currentNode = n.pop();
    }

    for (var _i3 = 0, _s5 = s; _i3 < _s5.length; _i3++) {
      var _e4 = _s5[_i3];

      _e4.parentNode.removeChild(_e4);
    }
  };

  var m = function m(e, t) {
    var s = e.length - t.length;
    return s >= 0 && e.slice(s) === t;
  },
      _ = function _(e) {
    return -1 !== e.index;
  },
      f = function f() {
    return document.createComment("");
  },
      y = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */


  var g =
  /*#__PURE__*/
  function () {
    function g(e, t, s) {
      _classCallCheck(this, g);

      this.__parts = [], this.template = e, this.processor = t, this.options = s;
    }

    _createClass(g, [{
      key: "update",
      value: function update(e) {
        var t = 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.__parts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _s6 = _step.value;
            void 0 !== _s6 && _s6.setValue(e[t]), t++;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.__parts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _e5 = _step2.value;
            void 0 !== _e5 && _e5.commit();
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    }, {
      key: "_clone",
      value: function _clone() {
        var e = r ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0),
            t = [],
            s = this.template.parts,
            n = document.createTreeWalker(e, 133, null, !1);
        var i,
            o = 0,
            a = 0,
            l = n.nextNode();

        for (; o < s.length;) {
          if (i = s[o], _(i)) {
            var _this$__parts;

            for (; a < i.index;) {
              a++, "TEMPLATE" === l.nodeName && (t.push(l), n.currentNode = l.content), null === (l = n.nextNode()) && (n.currentNode = t.pop(), l = n.nextNode());
            }

            if ("node" === i.type) {
              var _e6 = this.processor.handleTextExpression(this.options);

              _e6.insertAfterNode(l.previousSibling), this.__parts.push(_e6);
            } else (_this$__parts = this.__parts).push.apply(_this$__parts, _toConsumableArray(this.processor.handleAttributeExpressions(l, i.name, i.strings, this.options)));

            o++;
          } else this.__parts.push(void 0), o++;
        }

        return r && (document.adoptNode(e), customElements.upgrade(e)), e;
      }
    }]);

    return g;
  }();
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */


  var v = " ".concat(c, " ");

  var S =
  /*#__PURE__*/
  function () {
    function S(e, t, s, n) {
      _classCallCheck(this, S);

      this.strings = e, this.values = t, this.type = s, this.processor = n;
    }

    _createClass(S, [{
      key: "getHTML",
      value: function getHTML() {
        var e = this.strings.length - 1;
        var t = "",
            s = !1;

        for (var _n4 = 0; _n4 < e; _n4++) {
          var _e7 = this.strings[_n4],
              _i4 = _e7.lastIndexOf("\x3c!--");

          s = (_i4 > -1 || s) && -1 === _e7.indexOf("--\x3e", _i4 + 1);

          var _r4 = y.exec(_e7);

          t += null === _r4 ? _e7 + (s ? v : h) : _e7.substr(0, _r4.index) + _r4[1] + _r4[2] + p + _r4[3] + c;
        }

        return t += this.strings[e];
      }
    }, {
      key: "getTemplateElement",
      value: function getTemplateElement() {
        var e = document.createElement("template");
        return e.innerHTML = this.getHTML(), e;
      }
    }]);

    return S;
  }();
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */


  var w = function w(e) {
    return null === e || !("object" == _typeof(e) || "function" == typeof e);
  },
      b = function b(e) {
    return Array.isArray(e) || !(!e || !e[Symbol.iterator]);
  };

  var x =
  /*#__PURE__*/
  function () {
    function x(e, t, s) {
      _classCallCheck(this, x);

      this.dirty = !0, this.element = e, this.name = t, this.strings = s, this.parts = [];

      for (var _e8 = 0; _e8 < s.length - 1; _e8++) {
        this.parts[_e8] = this._createPart();
      }
    }

    _createClass(x, [{
      key: "_createPart",
      value: function _createPart() {
        return new P(this);
      }
    }, {
      key: "_getValue",
      value: function _getValue() {
        var e = this.strings,
            t = e.length - 1;
        var s = "";

        for (var _n5 = 0; _n5 < t; _n5++) {
          s += e[_n5];
          var _t7 = this.parts[_n5];

          if (void 0 !== _t7) {
            var _e9 = _t7.value;
            if (w(_e9) || !b(_e9)) s += "string" == typeof _e9 ? _e9 : String(_e9);else {
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = _e9[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var _t8 = _step3.value;
                  s += "string" == typeof _t8 ? _t8 : String(_t8);
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                    _iterator3.return();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }
            }
          }
        }

        return s += e[t];
      }
    }, {
      key: "commit",
      value: function commit() {
        this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
      }
    }]);

    return x;
  }();

  var P =
  /*#__PURE__*/
  function () {
    function P(e) {
      _classCallCheck(this, P);

      this.value = void 0, this.committer = e;
    }

    _createClass(P, [{
      key: "setValue",
      value: function setValue(e) {
        e === a || w(e) && e === this.value || (this.value = e, i(e) || (this.committer.dirty = !0));
      }
    }, {
      key: "commit",
      value: function commit() {
        for (; i(this.value);) {
          var _e10 = this.value;
          this.value = a, _e10(this);
        }

        this.value !== a && this.committer.commit();
      }
    }]);

    return P;
  }();

  var C =
  /*#__PURE__*/
  function () {
    function C(e) {
      _classCallCheck(this, C);

      this.value = void 0, this.__pendingValue = void 0, this.options = e;
    }

    _createClass(C, [{
      key: "appendInto",
      value: function appendInto(e) {
        this.startNode = e.appendChild(f()), this.endNode = e.appendChild(f());
      }
    }, {
      key: "insertAfterNode",
      value: function insertAfterNode(e) {
        this.startNode = e, this.endNode = e.nextSibling;
      }
    }, {
      key: "appendIntoPart",
      value: function appendIntoPart(e) {
        e.__insert(this.startNode = f()), e.__insert(this.endNode = f());
      }
    }, {
      key: "insertAfterPart",
      value: function insertAfterPart(e) {
        e.__insert(this.startNode = f()), this.endNode = e.endNode, e.endNode = this.startNode;
      }
    }, {
      key: "setValue",
      value: function setValue(e) {
        this.__pendingValue = e;
      }
    }, {
      key: "commit",
      value: function commit() {
        for (; i(this.__pendingValue);) {
          var _e11 = this.__pendingValue;
          this.__pendingValue = a, _e11(this);
        }

        var e = this.__pendingValue;
        e !== a && (w(e) ? e !== this.value && this.__commitText(e) : e instanceof S ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : b(e) ? this.__commitIterable(e) : e === l ? (this.value = l, this.clear()) : this.__commitText(e));
      }
    }, {
      key: "__insert",
      value: function __insert(e) {
        this.endNode.parentNode.insertBefore(e, this.endNode);
      }
    }, {
      key: "__commitNode",
      value: function __commitNode(e) {
        this.value !== e && (this.clear(), this.__insert(e), this.value = e);
      }
    }, {
      key: "__commitText",
      value: function __commitText(e) {
        var t = this.startNode.nextSibling,
            s = "string" == typeof (e = null == e ? "" : e) ? e : String(e);
        t === this.endNode.previousSibling && 3 === t.nodeType ? t.data = s : this.__commitNode(document.createTextNode(s)), this.value = e;
      }
    }, {
      key: "__commitTemplateResult",
      value: function __commitTemplateResult(e) {
        var t = this.options.templateFactory(e);
        if (this.value instanceof g && this.value.template === t) this.value.update(e.values);else {
          var _s7 = new g(t, e.processor, this.options),
              _n6 = _s7._clone();

          _s7.update(e.values), this.__commitNode(_n6), this.value = _s7;
        }
      }
    }, {
      key: "__commitIterable",
      value: function __commitIterable(e) {
        Array.isArray(this.value) || (this.value = [], this.clear());
        var t = this.value;
        var s,
            n = 0;
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = e[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _i5 = _step4.value;
            void 0 === (s = t[n]) && (s = new C(this.options), t.push(s), 0 === n ? s.appendIntoPart(this) : s.insertAfterPart(t[n - 1])), s.setValue(_i5), s.commit(), n++;
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        n < t.length && (t.length = n, this.clear(s && s.endNode));
      }
    }, {
      key: "clear",
      value: function clear() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;
        o(this.startNode.parentNode, e.nextSibling, this.endNode);
      }
    }]);

    return C;
  }();

  var N =
  /*#__PURE__*/
  function () {
    function N(e, t, s) {
      _classCallCheck(this, N);

      if (this.value = void 0, this.__pendingValue = void 0, 2 !== s.length || "" !== s[0] || "" !== s[1]) throw new Error("Boolean attributes can only contain a single expression");
      this.element = e, this.name = t, this.strings = s;
    }

    _createClass(N, [{
      key: "setValue",
      value: function setValue(e) {
        this.__pendingValue = e;
      }
    }, {
      key: "commit",
      value: function commit() {
        for (; i(this.__pendingValue);) {
          var _e12 = this.__pendingValue;
          this.__pendingValue = a, _e12(this);
        }

        if (this.__pendingValue === a) return;
        var e = !!this.__pendingValue;
        this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = a;
      }
    }]);

    return N;
  }();

  var T =
  /*#__PURE__*/
  function (_x) {
    _inherits(T, _x);

    function T(e, t, s) {
      var _this;

      _classCallCheck(this, T);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(T).call(this, e, t, s)), _this.single = 2 === s.length && "" === s[0] && "" === s[1];
      return _this;
    }

    _createClass(T, [{
      key: "_createPart",
      value: function _createPart() {
        return new E(this);
      }
    }, {
      key: "_getValue",
      value: function _getValue() {
        return this.single ? this.parts[0].value : _get(_getPrototypeOf(T.prototype), "_getValue", this).call(this);
      }
    }, {
      key: "commit",
      value: function commit() {
        this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
      }
    }]);

    return T;
  }(x);

  var E =
  /*#__PURE__*/
  function (_P) {
    _inherits(E, _P);

    function E() {
      _classCallCheck(this, E);

      return _possibleConstructorReturn(this, _getPrototypeOf(E).apply(this, arguments));
    }

    return E;
  }(P);

  var A = !1;

  try {
    var _e13 = {
      get capture() {
        return A = !0, !1;
      }

    };
    window.addEventListener("test", _e13, _e13), window.removeEventListener("test", _e13, _e13);
  } catch (e) {}

  var V =
  /*#__PURE__*/
  function () {
    function V(e, t, s) {
      var _this2 = this;

      _classCallCheck(this, V);

      this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = t, this.eventContext = s, this.__boundHandleEvent = function (e) {
        return _this2.handleEvent(e);
      };
    }

    _createClass(V, [{
      key: "setValue",
      value: function setValue(e) {
        this.__pendingValue = e;
      }
    }, {
      key: "commit",
      value: function commit() {
        for (; i(this.__pendingValue);) {
          var _e14 = this.__pendingValue;
          this.__pendingValue = a, _e14(this);
        }

        if (this.__pendingValue === a) return;
        var e = this.__pendingValue,
            t = this.value,
            s = null == e || null != t && (e.capture !== t.capture || e.once !== t.once || e.passive !== t.passive),
            n = null != e && (null == t || s);
        s && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), n && (this.__options = O(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = a;
      }
    }, {
      key: "handleEvent",
      value: function handleEvent(e) {
        "function" == typeof this.value ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
      }
    }]);

    return V;
  }();

  var O = function O(e) {
    return e && (A ? {
      capture: e.capture,
      passive: e.passive,
      once: e.once
    } : e.capture);
  };
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */


  var k = new (
  /*#__PURE__*/
  function () {
    function _class2() {
      _classCallCheck(this, _class2);
    }

    _createClass(_class2, [{
      key: "handleAttributeExpressions",
      value: function handleAttributeExpressions(e, t, s, n) {
        var i = t[0];

        if ("." === i) {
          return new T(e, t.slice(1), s).parts;
        }

        return "@" === i ? [new V(e, t.slice(1), n.eventContext)] : "?" === i ? [new N(e, t.slice(1), s)] : new x(e, t, s).parts;
      }
    }, {
      key: "handleTextExpression",
      value: function handleTextExpression(e) {
        return new C(e);
      }
    }]);

    return _class2;
  }())();
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */

  function M(e) {
    var t = R.get(e.type);
    void 0 === t && (t = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    }, R.set(e.type, t));
    var s = t.stringsArray.get(e.strings);
    if (void 0 !== s) return s;
    var n = e.strings.join(c);
    return void 0 === (s = t.keyString.get(n)) && (s = new u(e, e.getTemplateElement()), t.keyString.set(n, s)), t.stringsArray.set(e.strings, s), s;
  }

  var R = new Map(),
      j = new WeakMap();
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */

  (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.1.2");

  var U = function U(e) {
    for (var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      t[_key - 1] = arguments[_key];
    }

    return new S(e, t, "html", k);
  },
      q = 133;

  function z(e, t) {
    var s = e.element.content,
        n = e.parts,
        i = document.createTreeWalker(s, q, null, !1);
    var r = F(n),
        o = n[r],
        a = -1,
        l = 0;
    var c = [];
    var h = null;

    for (; i.nextNode();) {
      a++;
      var _e15 = i.currentNode;

      for (_e15.previousSibling === h && (h = null), t.has(_e15) && (c.push(_e15), null === h && (h = _e15)), null !== h && l++; void 0 !== o && o.index === a;) {
        o.index = null !== h ? -1 : o.index - l, o = n[r = F(n, r)];
      }
    }

    c.forEach(function (e) {
      return e.parentNode.removeChild(e);
    });
  }

  var L = function L(e) {
    var t = 11 === e.nodeType ? 0 : 1;
    var s = document.createTreeWalker(e, q, null, !1);

    for (; s.nextNode();) {
      t++;
    }

    return t;
  },
      F = function F(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

    for (var _s8 = t + 1; _s8 < e.length; _s8++) {
      var _t9 = e[_s8];
      if (_(_t9)) return _s8;
    }

    return -1;
  };
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */


  var H = function H(e, t) {
    return "".concat(e, "--").concat(t);
  };

  var $ = !0;
  void 0 === window.ShadyCSS ? $ = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), $ = !1);

  var I = function I(e) {
    return function (t) {
      var s = H(t.type, e);
      var n = R.get(s);
      void 0 === n && (n = {
        stringsArray: new WeakMap(),
        keyString: new Map()
      }, R.set(s, n));
      var i = n.stringsArray.get(t.strings);
      if (void 0 !== i) return i;
      var r = t.strings.join(c);

      if (void 0 === (i = n.keyString.get(r))) {
        var _s9 = t.getTemplateElement();

        $ && window.ShadyCSS.prepareTemplateDom(_s9, e), i = new u(t, _s9), n.keyString.set(r, i);
      }

      return n.stringsArray.set(t.strings, i), i;
    };
  },
      B = ["html", "svg"],
      W = new Set(),
      J = function J(e, t, s) {
    W.add(e);
    var n = s ? s.element : document.createElement("template"),
        i = t.querySelectorAll("style"),
        r = i.length;
    if (0 === r) return void window.ShadyCSS.prepareTemplateStyles(n, e);
    var o = document.createElement("style");

    for (var _e16 = 0; _e16 < r; _e16++) {
      var _t10 = i[_e16];
      _t10.parentNode.removeChild(_t10), o.textContent += _t10.textContent;
    }

    (function (e) {
      B.forEach(function (t) {
        var s = R.get(H(t, e));
        void 0 !== s && s.keyString.forEach(function (e) {
          var t = e.element.content,
              s = new Set();
          Array.from(t.querySelectorAll("style")).forEach(function (e) {
            s.add(e);
          }), z(e, s);
        });
      });
    })(e);

    var a = n.content;
    s ? function (e, t) {
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var n = e.element.content,
          i = e.parts;
      if (null == s) return void n.appendChild(t);
      var r = document.createTreeWalker(n, q, null, !1);
      var o = F(i),
          a = 0,
          l = -1;

      for (; r.nextNode();) {
        for (l++, r.currentNode === s && (a = L(t), s.parentNode.insertBefore(t, s)); -1 !== o && i[o].index === l;) {
          if (a > 0) {
            for (; -1 !== o;) {
              i[o].index += a, o = F(i, o);
            }

            return;
          }

          o = F(i, o);
        }
      }
    }(s, o, a.firstChild) : a.insertBefore(o, a.firstChild), window.ShadyCSS.prepareTemplateStyles(n, e);
    var l = a.querySelector("style");
    if (window.ShadyCSS.nativeShadow && null !== l) t.insertBefore(l.cloneNode(!0), t.firstChild);else if (s) {
      a.insertBefore(o, a.firstChild);

      var _e17 = new Set();

      _e17.add(o), z(s, _e17);
    }
  };

  window.JSCompiler_renameProperty = function (e, t) {
    return e;
  };

  var D = {
    toAttribute: function toAttribute(e, t) {
      switch (t) {
        case Boolean:
          return e ? "" : null;

        case Object:
        case Array:
          return null == e ? e : JSON.stringify(e);
      }

      return e;
    },
    fromAttribute: function fromAttribute(e, t) {
      switch (t) {
        case Boolean:
          return null !== e;

        case Number:
          return null === e ? null : Number(e);

        case Object:
        case Array:
          return JSON.parse(e);
      }

      return e;
    }
  },
      G = function G(e, t) {
    return t !== e && (t == t || e == e);
  },
      K = {
    attribute: !0,
    type: String,
    converter: D,
    reflect: !1,
    hasChanged: G
  },
      Q = Promise.resolve(!0),
      X = 1,
      Y = 4,
      Z = 8,
      ee = 16,
      te = 32,
      se = "finalized";

  var ne =
  /*#__PURE__*/
  function (_HTMLElement2) {
    _inherits(ne, _HTMLElement2);

    function ne() {
      var _this3;

      _classCallCheck(this, ne);

      _this3 = _possibleConstructorReturn(this, _getPrototypeOf(ne).call(this)), _this3._updateState = 0, _this3._instanceProperties = void 0, _this3._updatePromise = Q, _this3._hasConnectedResolver = void 0, _this3._changedProperties = new Map(), _this3._reflectingProperties = void 0, _this3.initialize();
      return _this3;
    }

    _createClass(ne, [{
      key: "initialize",
      value: function initialize() {
        this._saveInstanceProperties(), this._requestUpdate();
      }
    }, {
      key: "_saveInstanceProperties",
      value: function _saveInstanceProperties() {
        var _this4 = this;

        this.constructor._classProperties.forEach(function (e, t) {
          if (_this4.hasOwnProperty(t)) {
            var _e18 = _this4[t];
            delete _this4[t], _this4._instanceProperties || (_this4._instanceProperties = new Map()), _this4._instanceProperties.set(t, _e18);
          }
        });
      }
    }, {
      key: "_applyInstanceProperties",
      value: function _applyInstanceProperties() {
        var _this5 = this;

        this._instanceProperties.forEach(function (e, t) {
          return _this5[t] = e;
        }), this._instanceProperties = void 0;
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        this._updateState = this._updateState | te, this._hasConnectedResolver && (this._hasConnectedResolver(), this._hasConnectedResolver = void 0);
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {}
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(e, t, s) {
        t !== s && this._attributeToProperty(e, s);
      }
    }, {
      key: "_propertyToAttribute",
      value: function _propertyToAttribute(e, t) {
        var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : K;

        var n = this.constructor,
            i = n._attributeNameForProperty(e, s);

        if (void 0 !== i) {
          var _e19 = n._propertyValueToAttribute(t, s);

          if (void 0 === _e19) return;
          this._updateState = this._updateState | Z, null == _e19 ? this.removeAttribute(i) : this.setAttribute(i, _e19), this._updateState = this._updateState & ~Z;
        }
      }
    }, {
      key: "_attributeToProperty",
      value: function _attributeToProperty(e, t) {
        if (this._updateState & Z) return;

        var s = this.constructor,
            n = s._attributeToPropertyMap.get(e);

        if (void 0 !== n) {
          var _e20 = s._classProperties.get(n) || K;

          this._updateState = this._updateState | ee, this[n] = s._propertyValueFromAttribute(t, _e20), this._updateState = this._updateState & ~ee;
        }
      }
    }, {
      key: "_requestUpdate",
      value: function _requestUpdate(e, t) {
        var s = !0;

        if (void 0 !== e) {
          var _n7 = this.constructor,
              _i6 = _n7._classProperties.get(e) || K;

          _n7._valueHasChanged(this[e], t, _i6.hasChanged) ? (this._changedProperties.has(e) || this._changedProperties.set(e, t), !0 !== _i6.reflect || this._updateState & ee || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map()), this._reflectingProperties.set(e, _i6))) : s = !1;
        }

        !this._hasRequestedUpdate && s && this._enqueueUpdate();
      }
    }, {
      key: "requestUpdate",
      value: function requestUpdate(e, t) {
        return this._requestUpdate(e, t), this.updateComplete;
      }
    }, {
      key: "_enqueueUpdate",
      value: function () {
        var _enqueueUpdate2 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var _this6 = this;

          var e, t, s, _e21;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  this._updateState = this._updateState | Y;
                  s = this._updatePromise;
                  this._updatePromise = new Promise(function (s, n) {
                    e = s, t = n;
                  });
                  _context.prev = 3;
                  _context.next = 6;
                  return s;

                case 6:
                  _context.next = 10;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](3);

                case 10:
                  _context.t1 = this._hasConnected;

                  if (_context.t1) {
                    _context.next = 14;
                    break;
                  }

                  _context.next = 14;
                  return new Promise(function (e) {
                    return _this6._hasConnectedResolver = e;
                  });

                case 14:
                  _context.prev = 14;
                  _e21 = this.performUpdate();
                  _context.t2 = null != _e21;

                  if (!_context.t2) {
                    _context.next = 20;
                    break;
                  }

                  _context.next = 20;
                  return _e21;

                case 20:
                  _context.next = 25;
                  break;

                case 22:
                  _context.prev = 22;
                  _context.t3 = _context["catch"](14);
                  t(_context.t3);

                case 25:
                  e(!this._hasRequestedUpdate);

                case 26:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[3, 8], [14, 22]]);
        }));

        function _enqueueUpdate() {
          return _enqueueUpdate2.apply(this, arguments);
        }

        return _enqueueUpdate;
      }()
    }, {
      key: "performUpdate",
      value: function performUpdate() {
        this._instanceProperties && this._applyInstanceProperties();
        var e = !1;
        var t = this._changedProperties;

        try {
          (e = this.shouldUpdate(t)) && this.update(t);
        } catch (t) {
          throw e = !1, t;
        } finally {
          this._markUpdated();
        }

        e && (this._updateState & X || (this._updateState = this._updateState | X, this.firstUpdated(t)), this.updated(t));
      }
    }, {
      key: "_markUpdated",
      value: function _markUpdated() {
        this._changedProperties = new Map(), this._updateState = this._updateState & ~Y;
      }
    }, {
      key: "_getUpdateComplete",
      value: function _getUpdateComplete() {
        return this._updatePromise;
      }
    }, {
      key: "shouldUpdate",
      value: function shouldUpdate(e) {
        return !0;
      }
    }, {
      key: "update",
      value: function update(e) {
        var _this7 = this;

        void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(function (e, t) {
          return _this7._propertyToAttribute(t, _this7[t], e);
        }), this._reflectingProperties = void 0);
      }
    }, {
      key: "updated",
      value: function updated(e) {}
    }, {
      key: "firstUpdated",
      value: function firstUpdated(e) {}
    }, {
      key: "_hasConnected",
      get: function get() {
        return this._updateState & te;
      }
    }, {
      key: "_hasRequestedUpdate",
      get: function get() {
        return this._updateState & Y;
      }
    }, {
      key: "hasUpdated",
      get: function get() {
        return this._updateState & X;
      }
    }, {
      key: "updateComplete",
      get: function get() {
        return this._getUpdateComplete();
      }
    }], [{
      key: "_ensureClassProperties",
      value: function _ensureClassProperties() {
        var _this8 = this;

        if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
          this._classProperties = new Map();

          var e = Object.getPrototypeOf(this)._classProperties;

          void 0 !== e && e.forEach(function (e, t) {
            return _this8._classProperties.set(t, e);
          });
        }
      }
    }, {
      key: "createProperty",
      value: function createProperty(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : K;
        if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;
        var s = "symbol" == _typeof(e) ? Symbol() : "__".concat(e);
        Object.defineProperty(this.prototype, e, {
          get: function get() {
            return this[s];
          },
          set: function set(t) {
            var n = this[e];
            this[s] = t, this._requestUpdate(e, n);
          },
          configurable: !0,
          enumerable: !0
        });
      }
    }, {
      key: "finalize",
      value: function finalize() {
        var e = Object.getPrototypeOf(this);

        if (e.hasOwnProperty(se) || e.finalize(), this[se] = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
          var _e22 = this.properties,
              t = [].concat(_toConsumableArray(Object.getOwnPropertyNames(_e22)), _toConsumableArray("function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(_e22) : []));
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = t[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var _s10 = _step5.value;
              this.createProperty(_s10, _e22[_s10]);
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }
        }
      }
    }, {
      key: "_attributeNameForProperty",
      value: function _attributeNameForProperty(e, t) {
        var s = t.attribute;
        return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof e ? e.toLowerCase() : void 0;
      }
    }, {
      key: "_valueHasChanged",
      value: function _valueHasChanged(e, t) {
        var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : G;
        return s(e, t);
      }
    }, {
      key: "_propertyValueFromAttribute",
      value: function _propertyValueFromAttribute(e, t) {
        var s = t.type,
            n = t.converter || D,
            i = "function" == typeof n ? n : n.fromAttribute;
        return i ? i(e, s) : e;
      }
    }, {
      key: "_propertyValueToAttribute",
      value: function _propertyValueToAttribute(e, t) {
        if (void 0 === t.reflect) return;
        var s = t.type,
            n = t.converter;
        return (n && n.toAttribute || D.toAttribute)(e, s);
      }
    }, {
      key: "observedAttributes",
      get: function get() {
        var _this9 = this;

        this.finalize();
        var e = [];
        return this._classProperties.forEach(function (t, s) {
          var n = _this9._attributeNameForProperty(s, t);

          void 0 !== n && (_this9._attributeToPropertyMap.set(n, s), e.push(n));
        }), e;
      }
    }]);

    return ne;
  }(_wrapNativeSuper(HTMLElement));

  ne[se] = !0;
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */

  var ie = function ie(e, t) {
    return "method" !== t.kind || !t.descriptor || "value" in t.descriptor ? {
      kind: "field",
      key: Symbol(),
      placement: "own",
      descriptor: {},
      initializer: function initializer() {
        "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this));
      },
      finisher: function finisher(s) {
        s.createProperty(t.key, e);
      }
    } : Object.assign({}, t, {
      finisher: function finisher(s) {
        s.createProperty(t.key, e);
      }
    });
  },
      re = function re(e, t, s) {
    t.constructor.createProperty(s, e);
  };

  var oe = "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
      ae = Symbol();

  var le =
  /*#__PURE__*/
  function () {
    function le(e, t) {
      _classCallCheck(this, le);

      if (t !== ae) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = e;
    }

    _createClass(le, [{
      key: "toString",
      value: function toString() {
        return this.cssText;
      }
    }, {
      key: "styleSheet",
      get: function get() {
        return void 0 === this._styleSheet && (oe ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
      }
    }]);

    return le;
  }();
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */


  (window.litElementVersions || (window.litElementVersions = [])).push("2.2.1");

  var ce = function ce(e) {
    return e.flat ? e.flat(1 / 0) : function e(t) {
      var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      for (var _n8 = 0, _i7 = t.length; _n8 < _i7; _n8++) {
        var _i8 = t[_n8];
        Array.isArray(_i8) ? e(_i8, s) : s.push(_i8);
      }

      return s;
    }(e);
  };

  var he =
  /*#__PURE__*/
  function (_ne) {
    _inherits(he, _ne);

    function he() {
      _classCallCheck(this, he);

      return _possibleConstructorReturn(this, _getPrototypeOf(he).apply(this, arguments));
    }

    _createClass(he, [{
      key: "initialize",
      value: function initialize() {
        _get(_getPrototypeOf(he.prototype), "initialize", this).call(this), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles();
      }
    }, {
      key: "createRenderRoot",
      value: function createRenderRoot() {
        return this.attachShadow({
          mode: "open"
        });
      }
    }, {
      key: "adoptStyles",
      value: function adoptStyles() {
        var e = this.constructor._styles;
        0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? oe ? this.renderRoot.adoptedStyleSheets = e.map(function (e) {
          return e.styleSheet;
        }) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(function (e) {
          return e.cssText;
        }), this.localName));
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(he.prototype), "connectedCallback", this).call(this), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this);
      }
    }, {
      key: "update",
      value: function update(e) {
        var _this10 = this;

        _get(_getPrototypeOf(he.prototype), "update", this).call(this, e);

        var t = this.render();
        t instanceof S && this.constructor.render(t, this.renderRoot, {
          scopeName: this.localName,
          eventContext: this
        }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach(function (e) {
          var t = document.createElement("style");
          t.textContent = e.cssText, _this10.renderRoot.appendChild(t);
        }));
      }
    }, {
      key: "render",
      value: function render() {}
    }], [{
      key: "finalize",
      value: function finalize() {
        _get(_getPrototypeOf(he), "finalize", this).call(this), this._styles = this.hasOwnProperty(JSCompiler_renameProperty("styles", this)) ? this._getUniqueStyles() : this._styles || [];
      }
    }, {
      key: "_getUniqueStyles",
      value: function _getUniqueStyles() {
        var e = this.styles,
            t = [];

        if (Array.isArray(e)) {
          ce(e).reduceRight(function (e, t) {
            return e.add(t), e;
          }, new Set()).forEach(function (e) {
            return t.unshift(e);
          });
        } else e && t.push(e);

        return t;
      }
    }]);

    return he;
  }(ne);

  he.finalized = !0, he.render = function (e, t, s) {
    if (!s || "object" != _typeof(s) || !s.scopeName) throw new Error("The `scopeName` option is required.");
    var n = s.scopeName,
        i = j.has(t),
        r = $ && 11 === t.nodeType && !!t.host,
        a = r && !W.has(n),
        l = a ? document.createDocumentFragment() : t;

    if (function (e, t, s) {
      var n = j.get(t);
      void 0 === n && (o(t, t.firstChild), j.set(t, n = new C(Object.assign({
        templateFactory: M
      }, s))), n.appendInto(t)), n.setValue(e), n.commit();
    }(e, l, Object.assign({
      templateFactory: I(n)
    }, s)), a) {
      var _e23 = j.get(l);

      j.delete(l);

      var _s11 = _e23.value instanceof g ? _e23.value.template : void 0;

      J(n, l, _s11), o(t, t.firstChild), t.appendChild(l), j.set(t, _e23);
    }

    !i && r && window.ShadyCSS.styleElement(t.host);
  };

  var de = function de(e, t, s, n) {
    var i,
        r = arguments.length,
        o = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, s) : n;
    if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, s, n);else for (var a = e.length - 1; a >= 0; a--) {
      (i = e[a]) && (o = (r < 3 ? i(o) : r > 3 ? i(t, s, o) : i(t, s)) || o);
    }
    return r > 3 && o && Object.defineProperty(t, s, o), o;
  };

  var pe =
  /*#__PURE__*/
  function (_he) {
    _inherits(pe, _he);

    function pe() {
      var _this11;

      _classCallCheck(this, pe);

      _this11 = _possibleConstructorReturn(this, _getPrototypeOf(pe).apply(this, arguments)), _this11.mood = "great";
      return _this11;
    }

    _createClass(pe, [{
      key: "render",
      value: function render() {
        return U(_templateObject(), this.mood);
      }
    }]);

    return pe;
  }(he);

  var ue;
  pe.styles = function (e) {
    for (var _len2 = arguments.length, t = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      t[_key2 - 1] = arguments[_key2];
    }

    var s = t.reduce(function (t, s, n) {
      return t + function (e) {
        if (e instanceof le) return e.cssText;
        if ("number" == typeof e) return e;
        throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(e, ". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."));
      }(s) + e[n + 1];
    }, e[0]);
    return new le(s, ae);
  }(_templateObject2()), de([function (e, t) {
    return void 0 !== t ? re(ue, e, t) : ie(ue, e);
  }], pe.prototype, "mood", void 0), pe = de([function (e) {
    return function (t) {
      return "function" == typeof t ? function (e, t) {
        return window.customElements.define(e, t), t;
      }(e, t) : function (e, t) {
        var s = t.kind,
            n = t.elements;
        return {
          kind: s,
          elements: n,
          finisher: function finisher(t) {
            window.customElements.define(e, t);
          }
        };
      }(e, t);
    };
  }("my-typed-lit-element")], pe);
}]);