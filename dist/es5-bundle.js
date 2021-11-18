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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e13) { throw _e13; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e14) { didErr = true; err = _e14; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*! For license information please see bundle.js.LICENSE.txt */
(function () {
  "use strict";

  var t = /*#__PURE__*/function (_HTMLElement) {
    _inherits(t, _HTMLElement);

    var _super = _createSuper(t);

    function t() {
      _classCallCheck(this, t);

      return _super.apply(this, arguments);
    }

    _createClass(t, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this.attachShadow({
          mode: "open"
        }), this.shadowRoot && (this.shadowRoot.innerHTML = "<div>Custom html element</div>");
      }
    }]);

    return t;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

  window.customElements.define("my-element", t);

  var e = "undefined" != typeof window && null != window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback,
      s = function s(t, e) {
    var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    for (; e !== s;) {
      var _s = e.nextSibling;
      t.removeChild(e), e = _s;
    }
  },
      i = "{{lit-".concat(String(Math.random()).slice(2), "}}"),
      n = "<!--".concat(i, "-->"),
      r = new RegExp("".concat(i, "|").concat(n)),
      o = "$lit$";

  var a = function a(t, e) {
    _classCallCheck(this, a);

    this.parts = [], this.element = e;

    var s = [],
        n = [],
        _a = document.createTreeWalker(e.content, 133, null, !1);

    var h = 0,
        p = -1,
        u = 0;
    var m = t.strings,
        _ = t.values.length;

    for (; u < _;) {
      var _t = _a.nextNode();

      if (null !== _t) {
        if (p++, 1 === _t.nodeType) {
          if (_t.hasAttributes()) {
            var _e = _t.attributes,
                _s2 = _e.length;
            var _i = 0;

            for (var _t2 = 0; _t2 < _s2; _t2++) {
              l(_e[_t2].name, o) && _i++;
            }

            for (; _i-- > 0;) {
              var _e2 = m[u],
                  _s3 = c.exec(_e2)[2],
                  _i2 = _s3.toLowerCase() + o,
                  _n = _t.getAttribute(_i2);

              _t.removeAttribute(_i2);

              var _a2 = _n.split(r);

              this.parts.push({
                type: "attribute",
                index: p,
                name: _s3,
                strings: _a2
              }), u += _a2.length - 1;
            }
          }

          "TEMPLATE" === _t.tagName && (n.push(_t), _a.currentNode = _t.content);
        } else if (3 === _t.nodeType) {
          var _e3 = _t.data;

          if (_e3.indexOf(i) >= 0) {
            var _i3 = _t.parentNode,
                _n2 = _e3.split(r),
                _a3 = _n2.length - 1;

            for (var _e4 = 0; _e4 < _a3; _e4++) {
              var _s4 = void 0,
                  _r = _n2[_e4];

              if ("" === _r) _s4 = d();else {
                var _t3 = c.exec(_r);

                null !== _t3 && l(_t3[2], o) && (_r = _r.slice(0, _t3.index) + _t3[1] + _t3[2].slice(0, -o.length) + _t3[3]), _s4 = document.createTextNode(_r);
              }
              _i3.insertBefore(_s4, _t), this.parts.push({
                type: "node",
                index: ++p
              });
            }

            "" === _n2[_a3] ? (_i3.insertBefore(d(), _t), s.push(_t)) : _t.data = _n2[_a3], u += _a3;
          }
        } else if (8 === _t.nodeType) if (_t.data === i) {
          var _e5 = _t.parentNode;
          null !== _t.previousSibling && p !== h || (p++, _e5.insertBefore(d(), _t)), h = p, this.parts.push({
            type: "node",
            index: p
          }), null === _t.nextSibling ? _t.data = "" : (s.push(_t), p--), u++;
        } else {
          var _e6 = -1;

          for (; -1 !== (_e6 = _t.data.indexOf(i, _e6 + 1));) {
            this.parts.push({
              type: "node",
              index: -1
            }), u++;
          }
        }
      } else _a.currentNode = n.pop();
    }

    for (var _i4 = 0, _s5 = s; _i4 < _s5.length; _i4++) {
      var _t4 = _s5[_i4];

      _t4.parentNode.removeChild(_t4);
    }
  };

  var l = function l(t, e) {
    var s = t.length - e.length;
    return s >= 0 && t.slice(s) === e;
  },
      h = function h(t) {
    return -1 !== t.index;
  },
      d = function d() {
    return document.createComment("");
  },
      c = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

  function p(t, e) {
    var s = t.element.content,
        i = t.parts,
        n = document.createTreeWalker(s, 133, null, !1);
    var r = m(i),
        o = i[r],
        a = -1,
        l = 0;
    var h = [];
    var d = null;

    for (; n.nextNode();) {
      a++;
      var _t5 = n.currentNode;

      for (_t5.previousSibling === d && (d = null), e.has(_t5) && (h.push(_t5), null === d && (d = _t5)), null !== d && l++; void 0 !== o && o.index === a;) {
        o.index = null !== d ? -1 : o.index - l, r = m(i, r), o = i[r];
      }
    }

    h.forEach(function (t) {
      return t.parentNode.removeChild(t);
    });
  }

  var u = function u(t) {
    var e = 11 === t.nodeType ? 0 : 1;
    var s = document.createTreeWalker(t, 133, null, !1);

    for (; s.nextNode();) {
      e++;
    }

    return e;
  },
      m = function m(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

    for (var _s6 = e + 1; _s6 < t.length; _s6++) {
      var _e7 = t[_s6];
      if (h(_e7)) return _s6;
    }

    return -1;
  },
      _ = new WeakMap(),
      f = function f(t) {
    return "function" == typeof t && _.has(t);
  },
      y = {},
      g = {};

  var S = /*#__PURE__*/function () {
    function S(t, e, s) {
      _classCallCheck(this, S);

      this.__parts = [], this.template = t, this.processor = e, this.options = s;
    }

    _createClass(S, [{
      key: "update",
      value: function update(t) {
        var e = 0;

        var _iterator = _createForOfIteratorHelper(this.__parts),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _s7 = _step.value;
            void 0 !== _s7 && _s7.setValue(t[e]), e++;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var _iterator2 = _createForOfIteratorHelper(this.__parts),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _t6 = _step2.value;
            void 0 !== _t6 && _t6.commit();
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }, {
      key: "_clone",
      value: function _clone() {
        var t = e ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0),
            s = [],
            i = this.template.parts,
            n = document.createTreeWalker(t, 133, null, !1);
        var r,
            o = 0,
            a = 0,
            l = n.nextNode();

        for (; o < i.length;) {
          if (r = i[o], h(r)) {
            var _this$__parts;

            for (; a < r.index;) {
              a++, "TEMPLATE" === l.nodeName && (s.push(l), n.currentNode = l.content), null === (l = n.nextNode()) && (n.currentNode = s.pop(), l = n.nextNode());
            }

            if ("node" === r.type) {
              var _t7 = this.processor.handleTextExpression(this.options);

              _t7.insertAfterNode(l.previousSibling), this.__parts.push(_t7);
            } else (_this$__parts = this.__parts).push.apply(_this$__parts, _toConsumableArray(this.processor.handleAttributeExpressions(l, r.name, r.strings, this.options)));

            o++;
          } else this.__parts.push(void 0), o++;
        }

        return e && (document.adoptNode(t), customElements.upgrade(t)), t;
      }
    }]);

    return S;
  }();

  var v = " ".concat(i, " ");

  var w = /*#__PURE__*/function () {
    function w(t, e, s, i) {
      _classCallCheck(this, w);

      this.strings = t, this.values = e, this.type = s, this.processor = i;
    }

    _createClass(w, [{
      key: "getHTML",
      value: function getHTML() {
        var t = this.strings.length - 1;
        var e = "",
            s = !1;

        for (var _r2 = 0; _r2 < t; _r2++) {
          var _t8 = this.strings[_r2],
              _a4 = _t8.lastIndexOf("\x3c!--");

          s = (_a4 > -1 || s) && -1 === _t8.indexOf("--\x3e", _a4 + 1);

          var _l = c.exec(_t8);

          e += null === _l ? _t8 + (s ? v : n) : _t8.substr(0, _l.index) + _l[1] + _l[2] + o + _l[3] + i;
        }

        return e += this.strings[t], e;
      }
    }, {
      key: "getTemplateElement",
      value: function getTemplateElement() {
        var t = document.createElement("template");
        return t.innerHTML = this.getHTML(), t;
      }
    }]);

    return w;
  }();

  var b = function b(t) {
    return null === t || !("object" == _typeof(t) || "function" == typeof t);
  },
      x = function x(t) {
    return Array.isArray(t) || !(!t || !t[Symbol.iterator]);
  };

  var P = /*#__PURE__*/function () {
    function P(t, e, s) {
      _classCallCheck(this, P);

      this.dirty = !0, this.element = t, this.name = e, this.strings = s, this.parts = [];

      for (var _t9 = 0; _t9 < s.length - 1; _t9++) {
        this.parts[_t9] = this._createPart();
      }
    }

    _createClass(P, [{
      key: "_createPart",
      value: function _createPart() {
        return new N(this);
      }
    }, {
      key: "_getValue",
      value: function _getValue() {
        var t = this.strings,
            e = t.length - 1;
        var s = "";

        for (var _i5 = 0; _i5 < e; _i5++) {
          s += t[_i5];
          var _e8 = this.parts[_i5];

          if (void 0 !== _e8) {
            var _t10 = _e8.value;
            if (b(_t10) || !x(_t10)) s += "string" == typeof _t10 ? _t10 : String(_t10);else {
              var _iterator3 = _createForOfIteratorHelper(_t10),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _e9 = _step3.value;
                  s += "string" == typeof _e9 ? _e9 : String(_e9);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          }
        }

        return s += t[e], s;
      }
    }, {
      key: "commit",
      value: function commit() {
        this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()));
      }
    }]);

    return P;
  }();

  var N = /*#__PURE__*/function () {
    function N(t) {
      _classCallCheck(this, N);

      this.value = void 0, this.committer = t;
    }

    _createClass(N, [{
      key: "setValue",
      value: function setValue(t) {
        t === y || b(t) && t === this.value || (this.value = t, f(t) || (this.committer.dirty = !0));
      }
    }, {
      key: "commit",
      value: function commit() {
        for (; f(this.value);) {
          var _t11 = this.value;
          this.value = y, _t11(this);
        }

        this.value !== y && this.committer.commit();
      }
    }]);

    return N;
  }();

  var C = /*#__PURE__*/function () {
    function C(t) {
      _classCallCheck(this, C);

      this.value = void 0, this.__pendingValue = void 0, this.options = t;
    }

    _createClass(C, [{
      key: "appendInto",
      value: function appendInto(t) {
        this.startNode = t.appendChild(d()), this.endNode = t.appendChild(d());
      }
    }, {
      key: "insertAfterNode",
      value: function insertAfterNode(t) {
        this.startNode = t, this.endNode = t.nextSibling;
      }
    }, {
      key: "appendIntoPart",
      value: function appendIntoPart(t) {
        t.__insert(this.startNode = d()), t.__insert(this.endNode = d());
      }
    }, {
      key: "insertAfterPart",
      value: function insertAfterPart(t) {
        t.__insert(this.startNode = d()), this.endNode = t.endNode, t.endNode = this.startNode;
      }
    }, {
      key: "setValue",
      value: function setValue(t) {
        this.__pendingValue = t;
      }
    }, {
      key: "commit",
      value: function commit() {
        if (null === this.startNode.parentNode) return;

        for (; f(this.__pendingValue);) {
          var _t12 = this.__pendingValue;
          this.__pendingValue = y, _t12(this);
        }

        var t = this.__pendingValue;
        t !== y && (b(t) ? t !== this.value && this.__commitText(t) : t instanceof w ? this.__commitTemplateResult(t) : t instanceof Node ? this.__commitNode(t) : x(t) ? this.__commitIterable(t) : t === g ? (this.value = g, this.clear()) : this.__commitText(t));
      }
    }, {
      key: "__insert",
      value: function __insert(t) {
        this.endNode.parentNode.insertBefore(t, this.endNode);
      }
    }, {
      key: "__commitNode",
      value: function __commitNode(t) {
        this.value !== t && (this.clear(), this.__insert(t), this.value = t);
      }
    }, {
      key: "__commitText",
      value: function __commitText(t) {
        var e = this.startNode.nextSibling,
            s = "string" == typeof (t = null == t ? "" : t) ? t : String(t);
        e === this.endNode.previousSibling && 3 === e.nodeType ? e.data = s : this.__commitNode(document.createTextNode(s)), this.value = t;
      }
    }, {
      key: "__commitTemplateResult",
      value: function __commitTemplateResult(t) {
        var e = this.options.templateFactory(t);
        if (this.value instanceof S && this.value.template === e) this.value.update(t.values);else {
          var _s8 = new S(e, t.processor, this.options),
              _i6 = _s8._clone();

          _s8.update(t.values), this.__commitNode(_i6), this.value = _s8;
        }
      }
    }, {
      key: "__commitIterable",
      value: function __commitIterable(t) {
        Array.isArray(this.value) || (this.value = [], this.clear());
        var e = this.value;
        var s,
            i = 0;

        var _iterator4 = _createForOfIteratorHelper(t),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _n3 = _step4.value;
            s = e[i], void 0 === s && (s = new C(this.options), e.push(s), 0 === i ? s.appendIntoPart(this) : s.insertAfterPart(e[i - 1])), s.setValue(_n3), s.commit(), i++;
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        i < e.length && (e.length = i, this.clear(s && s.endNode));
      }
    }, {
      key: "clear",
      value: function clear() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;
        s(this.startNode.parentNode, t.nextSibling, this.endNode);
      }
    }]);

    return C;
  }();

  var T = /*#__PURE__*/function () {
    function T(t, e, s) {
      _classCallCheck(this, T);

      if (this.value = void 0, this.__pendingValue = void 0, 2 !== s.length || "" !== s[0] || "" !== s[1]) throw new Error("Boolean attributes can only contain a single expression");
      this.element = t, this.name = e, this.strings = s;
    }

    _createClass(T, [{
      key: "setValue",
      value: function setValue(t) {
        this.__pendingValue = t;
      }
    }, {
      key: "commit",
      value: function commit() {
        for (; f(this.__pendingValue);) {
          var _t13 = this.__pendingValue;
          this.__pendingValue = y, _t13(this);
        }

        if (this.__pendingValue === y) return;
        var t = !!this.__pendingValue;
        this.value !== t && (t ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = t), this.__pendingValue = y;
      }
    }]);

    return T;
  }();

  var E = /*#__PURE__*/function (_P) {
    _inherits(E, _P);

    var _super2 = _createSuper(E);

    function E(t, e, s) {
      var _this;

      _classCallCheck(this, E);

      _this = _super2.call(this, t, e, s), _this.single = 2 === s.length && "" === s[0] && "" === s[1];
      return _this;
    }

    _createClass(E, [{
      key: "_createPart",
      value: function _createPart() {
        return new A(this);
      }
    }, {
      key: "_getValue",
      value: function _getValue() {
        return this.single ? this.parts[0].value : _get(_getPrototypeOf(E.prototype), "_getValue", this).call(this);
      }
    }, {
      key: "commit",
      value: function commit() {
        this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
      }
    }]);

    return E;
  }(P);

  var A = /*#__PURE__*/function (_N) {
    _inherits(A, _N);

    var _super3 = _createSuper(A);

    function A() {
      _classCallCheck(this, A);

      return _super3.apply(this, arguments);
    }

    return A;
  }(N);

  var V = !1;

  (function () {
    try {
      var _t14 = {
        get capture() {
          return V = !0, !1;
        }

      };
      window.addEventListener("test", _t14, _t14), window.removeEventListener("test", _t14, _t14);
    } catch (t) {}
  })();

  var k = /*#__PURE__*/function () {
    function k(t, e, s) {
      var _this2 = this;

      _classCallCheck(this, k);

      this.value = void 0, this.__pendingValue = void 0, this.element = t, this.eventName = e, this.eventContext = s, this.__boundHandleEvent = function (t) {
        return _this2.handleEvent(t);
      };
    }

    _createClass(k, [{
      key: "setValue",
      value: function setValue(t) {
        this.__pendingValue = t;
      }
    }, {
      key: "commit",
      value: function commit() {
        for (; f(this.__pendingValue);) {
          var _t15 = this.__pendingValue;
          this.__pendingValue = y, _t15(this);
        }

        if (this.__pendingValue === y) return;
        var t = this.__pendingValue,
            e = this.value,
            s = null == t || null != e && (t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive),
            i = null != t && (null == e || s);
        s && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), i && (this.__options = O(t), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = t, this.__pendingValue = y;
      }
    }, {
      key: "handleEvent",
      value: function handleEvent(t) {
        "function" == typeof this.value ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t);
      }
    }]);

    return k;
  }();

  var O = function O(t) {
    return t && (V ? {
      capture: t.capture,
      passive: t.passive,
      once: t.once
    } : t.capture);
  };

  function U(t) {
    var e = R.get(t.type);
    void 0 === e && (e = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    }, R.set(t.type, e));
    var s = e.stringsArray.get(t.strings);
    if (void 0 !== s) return s;
    var n = t.strings.join(i);
    return s = e.keyString.get(n), void 0 === s && (s = new a(t, t.getTemplateElement()), e.keyString.set(n, s)), e.stringsArray.set(t.strings, s), s;
  }

  var R = new Map(),
      M = new WeakMap(),
      j = new ( /*#__PURE__*/function () {
    function _class() {
      _classCallCheck(this, _class);
    }

    _createClass(_class, [{
      key: "handleAttributeExpressions",
      value: function handleAttributeExpressions(t, e, s, i) {
        var n = e[0];
        return "." === n ? new E(t, e.slice(1), s).parts : "@" === n ? [new k(t, e.slice(1), i.eventContext)] : "?" === n ? [new T(t, e.slice(1), s)] : new P(t, e, s).parts;
      }
    }, {
      key: "handleTextExpression",
      value: function handleTextExpression(t) {
        return new C(t);
      }
    }]);

    return _class;
  }())();
  "undefined" != typeof window && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.2.1");

  var q = function q(t) {
    for (var _len = arguments.length, e = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      e[_key - 1] = arguments[_key];
    }

    return new w(t, e, "html", j);
  },
      z = function z(t, e) {
    return "".concat(t, "--").concat(e);
  };

  var L = !0;
  void 0 === window.ShadyCSS ? L = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), L = !1);

  var F = function F(t) {
    return function (e) {
      var s = z(e.type, t);
      var n = R.get(s);
      void 0 === n && (n = {
        stringsArray: new WeakMap(),
        keyString: new Map()
      }, R.set(s, n));
      var r = n.stringsArray.get(e.strings);
      if (void 0 !== r) return r;
      var o = e.strings.join(i);

      if (r = n.keyString.get(o), void 0 === r) {
        var _s9 = e.getTemplateElement();

        L && window.ShadyCSS.prepareTemplateDom(_s9, t), r = new a(e, _s9), n.keyString.set(o, r);
      }

      return n.stringsArray.set(e.strings, r), r;
    };
  },
      H = ["html", "svg"],
      $ = new Set();

  window.JSCompiler_renameProperty = function (t, e) {
    return t;
  };

  var I = {
    toAttribute: function toAttribute(t, e) {
      switch (e) {
        case Boolean:
          return t ? "" : null;

        case Object:
        case Array:
          return null == t ? t : JSON.stringify(t);
      }

      return t;
    },
    fromAttribute: function fromAttribute(t, e) {
      switch (e) {
        case Boolean:
          return null !== t;

        case Number:
          return null === t ? null : Number(t);

        case Object:
        case Array:
          return JSON.parse(t);
      }

      return t;
    }
  },
      B = function B(t, e) {
    return e !== t && (e == e || t == t);
  },
      W = {
    attribute: !0,
    type: String,
    converter: I,
    reflect: !1,
    hasChanged: B
  };

  var D = /*#__PURE__*/function (_HTMLElement2) {
    _inherits(D, _HTMLElement2);

    var _super4 = _createSuper(D);

    function D() {
      var _this3;

      _classCallCheck(this, D);

      _this3 = _super4.call(this), _this3._updateState = 0, _this3._instanceProperties = void 0, _this3._updatePromise = new Promise(function (t) {
        return _this3._enableUpdatingResolver = t;
      }), _this3._changedProperties = new Map(), _this3._reflectingProperties = void 0, _this3.initialize();
      return _this3;
    }

    _createClass(D, [{
      key: "initialize",
      value: function initialize() {
        this._saveInstanceProperties(), this._requestUpdate();
      }
    }, {
      key: "_saveInstanceProperties",
      value: function _saveInstanceProperties() {
        var _this4 = this;

        this.constructor._classProperties.forEach(function (t, e) {
          if (_this4.hasOwnProperty(e)) {
            var _t16 = _this4[e];
            delete _this4[e], _this4._instanceProperties || (_this4._instanceProperties = new Map()), _this4._instanceProperties.set(e, _t16);
          }
        });
      }
    }, {
      key: "_applyInstanceProperties",
      value: function _applyInstanceProperties() {
        var _this5 = this;

        this._instanceProperties.forEach(function (t, e) {
          return _this5[e] = t;
        }), this._instanceProperties = void 0;
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        this.enableUpdating();
      }
    }, {
      key: "enableUpdating",
      value: function enableUpdating() {
        void 0 !== this._enableUpdatingResolver && (this._enableUpdatingResolver(), this._enableUpdatingResolver = void 0);
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {}
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(t, e, s) {
        e !== s && this._attributeToProperty(t, s);
      }
    }, {
      key: "_propertyToAttribute",
      value: function _propertyToAttribute(t, e) {
        var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : W;

        var i = this.constructor,
            n = i._attributeNameForProperty(t, s);

        if (void 0 !== n) {
          var _t17 = i._propertyValueToAttribute(e, s);

          if (void 0 === _t17) return;
          this._updateState = 8 | this._updateState, null == _t17 ? this.removeAttribute(n) : this.setAttribute(n, _t17), this._updateState = -9 & this._updateState;
        }
      }
    }, {
      key: "_attributeToProperty",
      value: function _attributeToProperty(t, e) {
        if (8 & this._updateState) return;

        var s = this.constructor,
            i = s._attributeToPropertyMap.get(t);

        if (void 0 !== i) {
          var _t18 = s.getPropertyOptions(i);

          this._updateState = 16 | this._updateState, this[i] = s._propertyValueFromAttribute(e, _t18), this._updateState = -17 & this._updateState;
        }
      }
    }, {
      key: "_requestUpdate",
      value: function _requestUpdate(t, e) {
        var s = !0;

        if (void 0 !== t) {
          var _i7 = this.constructor,
              _n4 = _i7.getPropertyOptions(t);

          _i7._valueHasChanged(this[t], e, _n4.hasChanged) ? (this._changedProperties.has(t) || this._changedProperties.set(t, e), !0 !== _n4.reflect || 16 & this._updateState || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map()), this._reflectingProperties.set(t, _n4))) : s = !1;
        }

        !this._hasRequestedUpdate && s && (this._updatePromise = this._enqueueUpdate());
      }
    }, {
      key: "requestUpdate",
      value: function requestUpdate(t, e) {
        return this._requestUpdate(t, e), this.updateComplete;
      }
    }, {
      key: "_enqueueUpdate",
      value: function () {
        var _enqueueUpdate2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var t;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  this._updateState = 4 | this._updateState;
                  _context.prev = 1;
                  _context.next = 4;
                  return this._updatePromise;

                case 4:
                  _context.next = 8;
                  break;

                case 6:
                  _context.prev = 6;
                  _context.t0 = _context["catch"](1);

                case 8:
                  t = this.performUpdate();
                  _context.t1 = null != t;

                  if (!_context.t1) {
                    _context.next = 13;
                    break;
                  }

                  _context.next = 13;
                  return t;

                case 13:
                  return _context.abrupt("return", !this._hasRequestedUpdate);

                case 14:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[1, 6]]);
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
        var t = !1;
        var e = this._changedProperties;

        try {
          t = this.shouldUpdate(e), t ? this.update(e) : this._markUpdated();
        } catch (e) {
          throw t = !1, this._markUpdated(), e;
        }

        t && (1 & this._updateState || (this._updateState = 1 | this._updateState, this.firstUpdated(e)), this.updated(e));
      }
    }, {
      key: "_markUpdated",
      value: function _markUpdated() {
        this._changedProperties = new Map(), this._updateState = -5 & this._updateState;
      }
    }, {
      key: "_getUpdateComplete",
      value: function _getUpdateComplete() {
        return this._updatePromise;
      }
    }, {
      key: "shouldUpdate",
      value: function shouldUpdate(t) {
        return !0;
      }
    }, {
      key: "update",
      value: function update(t) {
        var _this6 = this;

        void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(function (t, e) {
          return _this6._propertyToAttribute(e, _this6[e], t);
        }), this._reflectingProperties = void 0), this._markUpdated();
      }
    }, {
      key: "updated",
      value: function updated(t) {}
    }, {
      key: "firstUpdated",
      value: function firstUpdated(t) {}
    }, {
      key: "_hasRequestedUpdate",
      get: function get() {
        return 4 & this._updateState;
      }
    }, {
      key: "hasUpdated",
      get: function get() {
        return 1 & this._updateState;
      }
    }, {
      key: "updateComplete",
      get: function get() {
        return this._getUpdateComplete();
      }
    }], [{
      key: "_ensureClassProperties",
      value: function _ensureClassProperties() {
        var _this7 = this;

        if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
          this._classProperties = new Map();

          var _t19 = Object.getPrototypeOf(this)._classProperties;

          void 0 !== _t19 && _t19.forEach(function (t, e) {
            return _this7._classProperties.set(e, t);
          });
        }
      }
    }, {
      key: "createProperty",
      value: function createProperty(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : W;
        if (this._ensureClassProperties(), this._classProperties.set(t, e), e.noAccessor || this.prototype.hasOwnProperty(t)) return;
        var s = "symbol" == _typeof(t) ? Symbol() : "__".concat(t),
            i = this.getPropertyDescriptor(t, s, e);
        void 0 !== i && Object.defineProperty(this.prototype, t, i);
      }
    }, {
      key: "getPropertyDescriptor",
      value: function getPropertyDescriptor(t, e, s) {
        return {
          get: function get() {
            return this[e];
          },
          set: function set(s) {
            var i = this[t];
            this[e] = s, this._requestUpdate(t, i);
          },
          configurable: !0,
          enumerable: !0
        };
      }
    }, {
      key: "getPropertyOptions",
      value: function getPropertyOptions(t) {
        return this._classProperties && this._classProperties.get(t) || W;
      }
    }, {
      key: "finalize",
      value: function finalize() {
        var t = Object.getPrototypeOf(this);

        if (t.hasOwnProperty("finalized") || t.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
          var _t20 = this.properties,
              _e10 = [].concat(_toConsumableArray(Object.getOwnPropertyNames(_t20)), _toConsumableArray("function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(_t20) : []));

          var _iterator5 = _createForOfIteratorHelper(_e10),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var _s10 = _step5.value;
              this.createProperty(_s10, _t20[_s10]);
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
      }
    }, {
      key: "_attributeNameForProperty",
      value: function _attributeNameForProperty(t, e) {
        var s = e.attribute;
        return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
      }
    }, {
      key: "_valueHasChanged",
      value: function _valueHasChanged(t, e) {
        var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : B;
        return s(t, e);
      }
    }, {
      key: "_propertyValueFromAttribute",
      value: function _propertyValueFromAttribute(t, e) {
        var s = e.type,
            i = e.converter || I,
            n = "function" == typeof i ? i : i.fromAttribute;
        return n ? n(t, s) : t;
      }
    }, {
      key: "_propertyValueToAttribute",
      value: function _propertyValueToAttribute(t, e) {
        if (void 0 === e.reflect) return;
        var s = e.type,
            i = e.converter;
        return (i && i.toAttribute || I.toAttribute)(t, s);
      }
    }, {
      key: "observedAttributes",
      get: function get() {
        var _this8 = this;

        this.finalize();
        var t = [];
        return this._classProperties.forEach(function (e, s) {
          var i = _this8._attributeNameForProperty(s, e);

          void 0 !== i && (_this8._attributeToPropertyMap.set(i, s), t.push(i));
        }), t;
      }
    }]);

    return D;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

  D.finalized = !0;

  var J = function J(t, e) {
    return "method" === e.kind && e.descriptor && !("value" in e.descriptor) ? Object.assign(Object.assign({}, e), {
      finisher: function finisher(s) {
        s.createProperty(e.key, t);
      }
    }) : {
      kind: "field",
      key: Symbol(),
      placement: "own",
      descriptor: {},
      initializer: function initializer() {
        "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this));
      },
      finisher: function finisher(s) {
        s.createProperty(e.key, t);
      }
    };
  };

  var G = "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
      K = Symbol();

  var Q = /*#__PURE__*/function () {
    function Q(t, e) {
      _classCallCheck(this, Q);

      if (e !== K) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t;
    }

    _createClass(Q, [{
      key: "toString",
      value: function toString() {
        return this.cssText;
      }
    }, {
      key: "styleSheet",
      get: function get() {
        return void 0 === this._styleSheet && (G ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
      }
    }]);

    return Q;
  }();

  (window.litElementVersions || (window.litElementVersions = [])).push("2.3.1");
  var X = {};

  var Y = /*#__PURE__*/function (_D) {
    _inherits(Y, _D);

    var _super5 = _createSuper(Y);

    function Y() {
      _classCallCheck(this, Y);

      return _super5.apply(this, arguments);
    }

    _createClass(Y, [{
      key: "initialize",
      value: function initialize() {
        _get(_getPrototypeOf(Y.prototype), "initialize", this).call(this), this.constructor._getUniqueStyles(), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles();
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
        var t = this.constructor._styles;
        0 !== t.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? G ? this.renderRoot.adoptedStyleSheets = t.map(function (t) {
          return t.styleSheet;
        }) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(function (t) {
          return t.cssText;
        }), this.localName));
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(Y.prototype), "connectedCallback", this).call(this), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this);
      }
    }, {
      key: "update",
      value: function update(t) {
        var _this9 = this;

        var e = this.render();
        _get(_getPrototypeOf(Y.prototype), "update", this).call(this, t), e !== X && this.constructor.render(e, this.renderRoot, {
          scopeName: this.localName,
          eventContext: this
        }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach(function (t) {
          var e = document.createElement("style");
          e.textContent = t.cssText, _this9.renderRoot.appendChild(e);
        }));
      }
    }, {
      key: "render",
      value: function render() {
        return X;
      }
    }], [{
      key: "getStyles",
      value: function getStyles() {
        return this.styles;
      }
    }, {
      key: "_getUniqueStyles",
      value: function _getUniqueStyles() {
        if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
        var t = this.getStyles();
        if (void 0 === t) this._styles = [];else if (Array.isArray(t)) {
          var _e11 = function _e11(t, s) {
            return t.reduceRight(function (t, s) {
              return Array.isArray(s) ? _e11(s, t) : (t.add(s), t);
            }, s);
          },
              _s11 = _e11(t, new Set()),
              _i8 = [];

          _s11.forEach(function (t) {
            return _i8.unshift(t);
          }), this._styles = _i8;
        } else this._styles = [t];
      }
    }]);

    return Y;
  }(D);

  Y.finalized = !0, Y.render = function (t, e, i) {
    if (!i || "object" != _typeof(i) || !i.scopeName) throw new Error("The `scopeName` option is required.");
    var n = i.scopeName,
        r = M.has(e),
        o = L && 11 === e.nodeType && !!e.host,
        a = o && !$.has(n),
        l = a ? document.createDocumentFragment() : e;

    if (function (t, e, i) {
      var n = M.get(e);
      void 0 === n && (s(e, e.firstChild), M.set(e, n = new C(Object.assign({
        templateFactory: U
      }, i))), n.appendInto(e)), n.setValue(t), n.commit();
    }(t, l, Object.assign({
      templateFactory: F(n)
    }, i)), a) {
      var _t21 = M.get(l);

      M.delete(l);
      (function (t, e, s) {
        $.add(t);
        var i = s ? s.element : document.createElement("template"),
            n = e.querySelectorAll("style"),
            r = n.length;
        if (0 === r) return void window.ShadyCSS.prepareTemplateStyles(i, t);
        var o = document.createElement("style");

        for (var _t22 = 0; _t22 < r; _t22++) {
          var _e12 = n[_t22];
          _e12.parentNode.removeChild(_e12), o.textContent += _e12.textContent;
        }

        (function (t) {
          H.forEach(function (e) {
            var s = R.get(z(e, t));
            void 0 !== s && s.keyString.forEach(function (t) {
              var e = t.element.content,
                  s = new Set();
              Array.from(e.querySelectorAll("style")).forEach(function (t) {
                s.add(t);
              }), p(t, s);
            });
          });
        })(t);

        var a = i.content;
        s ? function (t, e) {
          var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var i = t.element.content,
              n = t.parts;
          if (null == s) return void i.appendChild(e);
          var r = document.createTreeWalker(i, 133, null, !1);
          var o = m(n),
              a = 0,
              l = -1;

          for (; r.nextNode();) {
            for (l++, r.currentNode === s && (a = u(e), s.parentNode.insertBefore(e, s)); -1 !== o && n[o].index === l;) {
              if (a > 0) {
                for (; -1 !== o;) {
                  n[o].index += a, o = m(n, o);
                }

                return;
              }

              o = m(n, o);
            }
          }
        }(s, o, a.firstChild) : a.insertBefore(o, a.firstChild), window.ShadyCSS.prepareTemplateStyles(i, t);
        var l = a.querySelector("style");
        if (window.ShadyCSS.nativeShadow && null !== l) e.insertBefore(l.cloneNode(!0), e.firstChild);else if (s) {
          a.insertBefore(o, a.firstChild);

          var _t23 = new Set();

          _t23.add(o), p(s, _t23);
        }
      })(n, l, _t21.value instanceof S ? _t21.value.template : void 0), s(e, e.firstChild), e.appendChild(l), M.set(e, _t21);
    }

    !r && o && window.ShadyCSS.styleElement(e.host);
  };

  var Z = function Z(t, e, s, i) {
    var n,
        r = arguments.length,
        o = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, s) : i;
    if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, s, i);else for (var a = t.length - 1; a >= 0; a--) {
      (n = t[a]) && (o = (r < 3 ? n(o) : r > 3 ? n(e, s, o) : n(e, s)) || o);
    }
    return r > 3 && o && Object.defineProperty(e, s, o), o;
  };

  var tt = /*#__PURE__*/function (_Y) {
    _inherits(tt, _Y);

    var _super6 = _createSuper(tt);

    function tt() {
      var _this10;

      _classCallCheck(this, tt);

      _this10 = _super6.apply(this, arguments), _this10.mood = "great";
      return _this10;
    }

    _createClass(tt, [{
      key: "render",
      value: function render() {
        return q(_templateObject(), this.mood);
      }
    }]);

    return tt;
  }(Y);

  var et;
  tt.styles = function (t) {
    for (var _len2 = arguments.length, e = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      e[_key2 - 1] = arguments[_key2];
    }

    var s = e.reduce(function (e, s, i) {
      return e + function (t) {
        if (t instanceof Q) return t.cssText;
        if ("number" == typeof t) return t;
        throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(t, ". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."));
      }(s) + t[i + 1];
    }, t[0]);
    return new Q(s, K);
  }(_templateObject2()), Z([function (t, e) {
    return void 0 !== e ? function (t, e, s) {
      e.constructor.createProperty(s, t);
    }(et, t, e) : J(et, t);
  }], tt.prototype, "mood", void 0), tt = Z([("my-typed-lit-element", function (t) {
    return "function" == typeof t ? (e = t, window.customElements.define("my-typed-lit-element", e), e) : function (t, e) {
      var s = e.kind,
          i = e.elements;
      return {
        kind: s,
        elements: i,
        finisher: function finisher(t) {
          window.customElements.define("my-typed-lit-element", t);
        }
      };
    }(0, t);
    var e;
  })], tt);
})();