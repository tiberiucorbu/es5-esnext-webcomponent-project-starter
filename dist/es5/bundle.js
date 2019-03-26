"use strict";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        span {\n          color: green;\n        }"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            <div> List Element with a mood: <span>", "</span></div>"]);

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
  }, s.p = "", s(s.s = 52);
}({
  52: function _(e, t, s) {
    e.exports = s(98);
  },
  98: function _(e, t, s) {
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
      var n = t;

      for (; n !== s;) {
        var _t = n.nextSibling;
        e.removeChild(n), n = _t;
      }
    },
        a = {},
        l = {},
        c = "{{lit-".concat(String(Math.random()).slice(2), "}}"),
        h = "<!--".concat(c, "-->"),
        d = new RegExp("".concat(c, "|").concat(h)),
        p = "$lit$";

    var u = function u(e, t) {
      var _this = this;

      _classCallCheck(this, u);

      this.parts = [], this.element = t;
      var s = -1,
          n = 0;

      var i = [],
          r = function r(t) {
        var o = t.content,
            a = document.createTreeWalker(o, 133, null, !1);
        var l = 0;

        for (; a.nextNode();) {
          s++;
          var _t2 = a.currentNode;

          if (1 === _t2.nodeType) {
            if (_t2.hasAttributes()) {
              var _i = _t2.attributes;
              var _r = 0;

              for (var _e = 0; _e < _i.length; _e++) {
                _i[_e].value.indexOf(c) >= 0 && _r++;
              }

              for (; _r-- > 0;) {
                var _i2 = e.strings[n],
                    _r2 = y.exec(_i2)[2],
                    _o = _r2.toLowerCase() + p,
                    _a = _t2.getAttribute(_o).split(d);

                _this.parts.push({
                  type: "attribute",
                  index: s,
                  name: _r2,
                  strings: _a
                }), _t2.removeAttribute(_o), n += _a.length - 1;
              }
            }

            "TEMPLATE" === _t2.tagName && r(_t2);
          } else if (3 === _t2.nodeType) {
            var _e2 = _t2.data;

            if (_e2.indexOf(c) >= 0) {
              var _r3 = _t2.parentNode,
                  _o2 = _e2.split(d),
                  _a2 = _o2.length - 1;

              for (var _e3 = 0; _e3 < _a2; _e3++) {
                _r3.insertBefore("" === _o2[_e3] ? f() : document.createTextNode(_o2[_e3]), _t2), _this.parts.push({
                  type: "node",
                  index: ++s
                });
              }

              "" === _o2[_a2] ? (_r3.insertBefore(f(), _t2), i.push(_t2)) : _t2.data = _o2[_a2], n += _a2;
            }
          } else if (8 === _t2.nodeType) if (_t2.data === c) {
            var _e4 = _t2.parentNode;
            null !== _t2.previousSibling && s !== l || (s++, _e4.insertBefore(f(), _t2)), l = s, _this.parts.push({
              type: "node",
              index: s
            }), null === _t2.nextSibling ? _t2.data = "" : (i.push(_t2), s--), n++;
          } else {
            var _e5 = -1;

            for (; -1 !== (_e5 = _t2.data.indexOf(c, _e5 + 1));) {
              _this.parts.push({
                type: "node",
                index: -1
              });
            }
          }
        }
      };

      r(t);

      for (var _i3 = 0; _i3 < i.length; _i3++) {
        var _e6 = i[_i3];

        _e6.parentNode.removeChild(_e6);
      }
    };

    var m = function m(e) {
      return -1 !== e.index;
    },
        f = function f() {
      return document.createComment("");
    },
        y = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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


    var _ =
    /*#__PURE__*/
    function () {
      function _(e, t, s) {
        _classCallCheck(this, _);

        this._parts = [], this.template = e, this.processor = t, this.options = s;
      }

      _createClass(_, [{
        key: "update",
        value: function update(e) {
          var t = 0;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this._parts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _s = _step.value;
              void 0 !== _s && _s.setValue(e[t]), t++;
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
            for (var _iterator2 = this._parts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _e7 = _step2.value;
              void 0 !== _e7 && _e7.commit();
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
          var _this2 = this;

          var e = r ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0),
              t = this.template.parts;
          var s = 0,
              n = 0;

          var i = function i(e) {
            var r = document.createTreeWalker(e, 133, null, !1);
            var o = r.nextNode();

            for (; s < t.length && null !== o;) {
              var _e8 = t[s];
              if (m(_e8)) {
                if (n === _e8.index) {
                  var _this2$_parts;

                  if ("node" === _e8.type) {
                    var _e9 = _this2.processor.handleTextExpression(_this2.options);

                    _e9.insertAfterNode(o.previousSibling), _this2._parts.push(_e9);
                  } else (_this2$_parts = _this2._parts).push.apply(_this2$_parts, _toConsumableArray(_this2.processor.handleAttributeExpressions(o, _e8.name, _e8.strings, _this2.options)));

                  s++;
                } else n++, "TEMPLATE" === o.nodeName && i(o.content), o = r.nextNode();
              } else _this2._parts.push(void 0), s++;
            }
          };

          return i(e), r && (document.adoptNode(e), customElements.upgrade(e)), e;
        }
      }]);

      return _;
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


    var g =
    /*#__PURE__*/
    function () {
      function g(e, t, s, n) {
        _classCallCheck(this, g);

        this.strings = e, this.values = t, this.type = s, this.processor = n;
      }

      _createClass(g, [{
        key: "getHTML",
        value: function getHTML() {
          var e = this.strings.length - 1;
          var t = "";

          for (var _s2 = 0; _s2 < e; _s2++) {
            var _e10 = this.strings[_s2],
                _n = y.exec(_e10);

            t += _n ? _e10.substr(0, _n.index) + _n[1] + _n[2] + p + _n[3] + c : _e10 + h;
          }

          return t + this.strings[e];
        }
      }, {
        key: "getTemplateElement",
        value: function getTemplateElement() {
          var e = document.createElement("template");
          return e.innerHTML = this.getHTML(), e;
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


    var S = function S(e) {
      return null === e || !("object" == _typeof(e) || "function" == typeof e);
    };

    var v =
    /*#__PURE__*/
    function () {
      function v(e, t, s) {
        _classCallCheck(this, v);

        this.dirty = !0, this.element = e, this.name = t, this.strings = s, this.parts = [];

        for (var _e11 = 0; _e11 < s.length - 1; _e11++) {
          this.parts[_e11] = this._createPart();
        }
      }

      _createClass(v, [{
        key: "_createPart",
        value: function _createPart() {
          return new w(this);
        }
      }, {
        key: "_getValue",
        value: function _getValue() {
          var e = this.strings,
              t = e.length - 1;
          var s = "";

          for (var _n2 = 0; _n2 < t; _n2++) {
            s += e[_n2];
            var _t3 = this.parts[_n2];

            if (void 0 !== _t3) {
              var _e12 = _t3.value;

              if (null != _e12 && (Array.isArray(_e12) || "string" != typeof _e12 && _e12[Symbol.iterator])) {
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                  for (var _iterator3 = _e12[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var _t4 = _step3.value;
                    s += "string" == typeof _t4 ? _t4 : String(_t4);
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
              } else s += "string" == typeof _e12 ? _e12 : String(_e12);
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

      return v;
    }();

    var w =
    /*#__PURE__*/
    function () {
      function w(e) {
        _classCallCheck(this, w);

        this.value = void 0, this.committer = e;
      }

      _createClass(w, [{
        key: "setValue",
        value: function setValue(e) {
          e === a || S(e) && e === this.value || (this.value = e, i(e) || (this.committer.dirty = !0));
        }
      }, {
        key: "commit",
        value: function commit() {
          for (; i(this.value);) {
            var _e13 = this.value;
            this.value = a, _e13(this);
          }

          this.value !== a && this.committer.commit();
        }
      }]);

      return w;
    }();

    var b =
    /*#__PURE__*/
    function () {
      function b(e) {
        _classCallCheck(this, b);

        this.value = void 0, this._pendingValue = void 0, this.options = e;
      }

      _createClass(b, [{
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
          e._insert(this.startNode = f()), e._insert(this.endNode = f());
        }
      }, {
        key: "insertAfterPart",
        value: function insertAfterPart(e) {
          e._insert(this.startNode = f()), this.endNode = e.endNode, e.endNode = this.startNode;
        }
      }, {
        key: "setValue",
        value: function setValue(e) {
          this._pendingValue = e;
        }
      }, {
        key: "commit",
        value: function commit() {
          for (; i(this._pendingValue);) {
            var _e14 = this._pendingValue;
            this._pendingValue = a, _e14(this);
          }

          var e = this._pendingValue;
          e !== a && (S(e) ? e !== this.value && this._commitText(e) : e instanceof g ? this._commitTemplateResult(e) : e instanceof Node ? this._commitNode(e) : Array.isArray(e) || e[Symbol.iterator] ? this._commitIterable(e) : e === l ? (this.value = l, this.clear()) : this._commitText(e));
        }
      }, {
        key: "_insert",
        value: function _insert(e) {
          this.endNode.parentNode.insertBefore(e, this.endNode);
        }
      }, {
        key: "_commitNode",
        value: function _commitNode(e) {
          this.value !== e && (this.clear(), this._insert(e), this.value = e);
        }
      }, {
        key: "_commitText",
        value: function _commitText(e) {
          var t = this.startNode.nextSibling;
          e = null == e ? "" : e, t === this.endNode.previousSibling && 3 === t.nodeType ? t.data = e : this._commitNode(document.createTextNode("string" == typeof e ? e : String(e))), this.value = e;
        }
      }, {
        key: "_commitTemplateResult",
        value: function _commitTemplateResult(e) {
          var t = this.options.templateFactory(e);
          if (this.value instanceof _ && this.value.template === t) this.value.update(e.values);else {
            var _s3 = new _(t, e.processor, this.options),
                _n3 = _s3._clone();

            _s3.update(e.values), this._commitNode(_n3), this.value = _s3;
          }
        }
      }, {
        key: "_commitIterable",
        value: function _commitIterable(e) {
          Array.isArray(this.value) || (this.value = [], this.clear());
          var t = this.value;
          var s,
              n = 0;
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = e[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var _i4 = _step4.value;
              void 0 === (s = t[n]) && (s = new b(this.options), t.push(s), 0 === n ? s.appendIntoPart(this) : s.insertAfterPart(t[n - 1])), s.setValue(_i4), s.commit(), n++;
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

      return b;
    }();

    var x =
    /*#__PURE__*/
    function () {
      function x(e, t, s) {
        _classCallCheck(this, x);

        if (this.value = void 0, this._pendingValue = void 0, 2 !== s.length || "" !== s[0] || "" !== s[1]) throw new Error("Boolean attributes can only contain a single expression");
        this.element = e, this.name = t, this.strings = s;
      }

      _createClass(x, [{
        key: "setValue",
        value: function setValue(e) {
          this._pendingValue = e;
        }
      }, {
        key: "commit",
        value: function commit() {
          for (; i(this._pendingValue);) {
            var _e15 = this._pendingValue;
            this._pendingValue = a, _e15(this);
          }

          if (this._pendingValue === a) return;
          var e = !!this._pendingValue;
          this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name)), this.value = e, this._pendingValue = a;
        }
      }]);

      return x;
    }();

    var P =
    /*#__PURE__*/
    function (_v) {
      _inherits(P, _v);

      function P(e, t, s) {
        var _this3;

        _classCallCheck(this, P);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(P).call(this, e, t, s)), _this3.single = 2 === s.length && "" === s[0] && "" === s[1];
        return _this3;
      }

      _createClass(P, [{
        key: "_createPart",
        value: function _createPart() {
          return new C(this);
        }
      }, {
        key: "_getValue",
        value: function _getValue() {
          return this.single ? this.parts[0].value : _get(_getPrototypeOf(P.prototype), "_getValue", this).call(this);
        }
      }, {
        key: "commit",
        value: function commit() {
          this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue());
        }
      }]);

      return P;
    }(v);

    var C =
    /*#__PURE__*/
    function (_w) {
      _inherits(C, _w);

      function C() {
        _classCallCheck(this, C);

        return _possibleConstructorReturn(this, _getPrototypeOf(C).apply(this, arguments));
      }

      return C;
    }(w);

    var N = !1;

    try {
      var _e16 = {
        get capture() {
          return N = !0, !1;
        }

      };
      window.addEventListener("test", _e16, _e16), window.removeEventListener("test", _e16, _e16);
    } catch (e) {}

    var A =
    /*#__PURE__*/
    function () {
      function A(e, t, s) {
        var _this4 = this;

        _classCallCheck(this, A);

        this.value = void 0, this._pendingValue = void 0, this.element = e, this.eventName = t, this.eventContext = s, this._boundHandleEvent = function (e) {
          return _this4.handleEvent(e);
        };
      }

      _createClass(A, [{
        key: "setValue",
        value: function setValue(e) {
          this._pendingValue = e;
        }
      }, {
        key: "commit",
        value: function commit() {
          for (; i(this._pendingValue);) {
            var _e17 = this._pendingValue;
            this._pendingValue = a, _e17(this);
          }

          if (this._pendingValue === a) return;
          var e = this._pendingValue,
              t = this.value,
              s = null == e || null != t && (e.capture !== t.capture || e.once !== t.once || e.passive !== t.passive),
              n = null != e && (null == t || s);
          s && this.element.removeEventListener(this.eventName, this._boundHandleEvent, this._options), n && (this._options = T(e), this.element.addEventListener(this.eventName, this._boundHandleEvent, this._options)), this.value = e, this._pendingValue = a;
        }
      }, {
        key: "handleEvent",
        value: function handleEvent(e) {
          "function" == typeof this.value ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
        }
      }]);

      return A;
    }();

    var T = function T(e) {
      return e && (N ? {
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


    var E = new (
    /*#__PURE__*/
    function () {
      function _class2() {
        _classCallCheck(this, _class2);
      }

      _createClass(_class2, [{
        key: "handleAttributeExpressions",
        value: function handleAttributeExpressions(e, t, s, n) {
          var i = t[0];
          return "." === i ? new P(e, t.slice(1), s).parts : "@" === i ? [new A(e, t.slice(1), n.eventContext)] : "?" === i ? [new x(e, t.slice(1), s)] : new v(e, t, s).parts;
        }
      }, {
        key: "handleTextExpression",
        value: function handleTextExpression(e) {
          return new b(e);
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

    function V(e) {
      var t = k.get(e.type);
      void 0 === t && (t = {
        stringsArray: new WeakMap(),
        keyString: new Map()
      }, k.set(e.type, t));
      var s = t.stringsArray.get(e.strings);
      if (void 0 !== s) return s;
      var n = e.strings.join(c);
      return void 0 === (s = t.keyString.get(n)) && (s = new u(e, e.getTemplateElement()), t.keyString.set(n, s)), t.stringsArray.set(e.strings, s), s;
    }

    var k = new Map(),
        O = new WeakMap();
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

    (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.0.0");
    var R = 133;

    function M(e, t) {
      var s = e.element.content,
          n = e.parts,
          i = document.createTreeWalker(s, R, null, !1);
      var r = U(n),
          o = n[r],
          a = -1,
          l = 0;
      var c = [];
      var h = null;

      for (; i.nextNode();) {
        a++;
        var _e18 = i.currentNode;

        for (_e18.previousSibling === h && (h = null), t.has(_e18) && (c.push(_e18), null === h && (h = _e18)), null !== h && l++; void 0 !== o && o.index === a;) {
          o.index = null !== h ? -1 : o.index - l, o = n[r = U(n, r)];
        }
      }

      c.forEach(function (e) {
        return e.parentNode.removeChild(e);
      });
    }

    var j = function j(e) {
      var t = 11 === e.nodeType ? 0 : 1;
      var s = document.createTreeWalker(e, R, null, !1);

      for (; s.nextNode();) {
        t++;
      }

      return t;
    },
        U = function U(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

      for (var _s4 = t + 1; _s4 < e.length; _s4++) {
        var _t5 = e[_s4];
        if (m(_t5)) return _s4;
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


    var z = function z(e, t) {
      return "".concat(e, "--").concat(t);
    };

    var q = !0;
    void 0 === window.ShadyCSS ? q = !1 : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."), q = !1);

    var L = function L(e) {
      return function (t) {
        var s = z(t.type, e);
        var n = k.get(s);
        void 0 === n && (n = {
          stringsArray: new WeakMap(),
          keyString: new Map()
        }, k.set(s, n));
        var i = n.stringsArray.get(t.strings);
        if (void 0 !== i) return i;
        var r = t.strings.join(c);

        if (void 0 === (i = n.keyString.get(r))) {
          var _s5 = t.getTemplateElement();

          q && window.ShadyCSS.prepareTemplateDom(_s5, e), i = new u(t, _s5), n.keyString.set(r, i);
        }

        return n.stringsArray.set(t.strings, i), i;
      };
    },
        F = ["html", "svg"],
        H = new Set(),
        $ = function $(e, t, s) {
      H.add(s);
      var n = e.querySelectorAll("style");
      if (0 === n.length) return void window.ShadyCSS.prepareTemplateStyles(t.element, s);
      var i = document.createElement("style");

      for (var _e19 = 0; _e19 < n.length; _e19++) {
        var _t6 = n[_e19];
        _t6.parentNode.removeChild(_t6), i.textContent += _t6.textContent;
      }

      if (function (e) {
        F.forEach(function (t) {
          var s = k.get(z(t, e));
          void 0 !== s && s.keyString.forEach(function (e) {
            var t = e.element.content,
                s = new Set();
            Array.from(t.querySelectorAll("style")).forEach(function (e) {
              s.add(e);
            }), M(e, s);
          });
        });
      }(s), function (e, t) {
        var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var n = e.element.content,
            i = e.parts;
        if (null == s) return void n.appendChild(t);
        var r = document.createTreeWalker(n, R, null, !1);
        var o = U(i),
            a = 0,
            l = -1;

        for (; r.nextNode();) {
          for (l++, r.currentNode === s && (a = j(t), s.parentNode.insertBefore(t, s)); -1 !== o && i[o].index === l;) {
            if (a > 0) {
              for (; -1 !== o;) {
                i[o].index += a, o = U(i, o);
              }

              return;
            }

            o = U(i, o);
          }
        }
      }(t, i, t.element.content.firstChild), window.ShadyCSS.prepareTemplateStyles(t.element, s), window.ShadyCSS.nativeShadow) {
        var _s6 = t.element.content.querySelector("style");

        e.insertBefore(_s6.cloneNode(!0), e.firstChild);
      } else {
        t.element.content.insertBefore(i, t.element.content.firstChild);

        var _e20 = new Set();

        _e20.add(i), M(t, _e20);
      }
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


    window.JSCompiler_renameProperty = function (e, t) {
      return e;
    };

    var I = {
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
        B = function B(e, t) {
      return t !== e && (t == t || e == e);
    },
        W = {
      attribute: !0,
      type: String,
      converter: I,
      reflect: !1,
      hasChanged: B
    },
        J = Promise.resolve(!0),
        D = 1,
        G = 4,
        K = 8,
        Q = 16,
        X = 32;

    var Y =
    /*#__PURE__*/
    function (_HTMLElement2) {
      _inherits(Y, _HTMLElement2);

      function Y() {
        var _this5;

        _classCallCheck(this, Y);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(Y).call(this)), _this5._updateState = 0, _this5._instanceProperties = void 0, _this5._updatePromise = J, _this5._hasConnectedResolver = void 0, _this5._changedProperties = new Map(), _this5._reflectingProperties = void 0, _this5.initialize();
        return _this5;
      }

      _createClass(Y, [{
        key: "initialize",
        value: function initialize() {
          this._saveInstanceProperties();
        }
      }, {
        key: "_saveInstanceProperties",
        value: function _saveInstanceProperties() {
          var _this6 = this;

          this.constructor._classProperties.forEach(function (e, t) {
            if (_this6.hasOwnProperty(t)) {
              var _e21 = _this6[t];
              delete _this6[t], _this6._instanceProperties || (_this6._instanceProperties = new Map()), _this6._instanceProperties.set(t, _e21);
            }
          });
        }
      }, {
        key: "_applyInstanceProperties",
        value: function _applyInstanceProperties() {
          var _this7 = this;

          this._instanceProperties.forEach(function (e, t) {
            return _this7[t] = e;
          }), this._instanceProperties = void 0;
        }
      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          this._updateState = this._updateState | X, this._hasConnectedResolver ? (this._hasConnectedResolver(), this._hasConnectedResolver = void 0) : this.requestUpdate();
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
          var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : W;

          var n = this.constructor,
              i = n._attributeNameForProperty(e, s);

          if (void 0 !== i) {
            var _e22 = n._propertyValueToAttribute(t, s);

            if (void 0 === _e22) return;
            this._updateState = this._updateState | K, null == _e22 ? this.removeAttribute(i) : this.setAttribute(i, _e22), this._updateState = this._updateState & ~K;
          }
        }
      }, {
        key: "_attributeToProperty",
        value: function _attributeToProperty(e, t) {
          if (this._updateState & K) return;

          var s = this.constructor,
              n = s._attributeToPropertyMap.get(e);

          if (void 0 !== n) {
            var _e23 = s._classProperties.get(n) || W;

            this._updateState = this._updateState | Q, this[n] = s._propertyValueFromAttribute(t, _e23), this._updateState = this._updateState & ~Q;
          }
        }
      }, {
        key: "requestUpdate",
        value: function requestUpdate(e, t) {
          var s = !0;

          if (void 0 !== e && !this._changedProperties.has(e)) {
            var _n4 = this.constructor,
                _i5 = _n4._classProperties.get(e) || W;

            _n4._valueHasChanged(this[e], t, _i5.hasChanged) ? (this._changedProperties.set(e, t), !0 !== _i5.reflect || this._updateState & Q || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map()), this._reflectingProperties.set(e, _i5))) : s = !1;
          }

          return !this._hasRequestedUpdate && s && this._enqueueUpdate(), this.updateComplete;
        }
      }, {
        key: "_enqueueUpdate",
        value: function () {
          var _enqueueUpdate2 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this8 = this;

            var e, t, s;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this._updateState = this._updateState | G;
                    t = this._updatePromise;
                    this._updatePromise = new Promise(function (t) {
                      return e = t;
                    });
                    _context.next = 5;
                    return t;

                  case 5:
                    _context.t0 = this._hasConnected;

                    if (_context.t0) {
                      _context.next = 9;
                      break;
                    }

                    _context.next = 9;
                    return new Promise(function (e) {
                      return _this8._hasConnectedResolver = e;
                    });

                  case 9:
                    s = this.performUpdate();
                    _context.t1 = null != s && "function" == typeof s.then;

                    if (!_context.t1) {
                      _context.next = 14;
                      break;
                    }

                    _context.next = 14;
                    return s;

                  case 14:
                    e(!this._hasRequestedUpdate);

                  case 15:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function _enqueueUpdate() {
            return _enqueueUpdate2.apply(this, arguments);
          }

          return _enqueueUpdate;
        }()
      }, {
        key: "performUpdate",
        value: function performUpdate() {
          if (this._instanceProperties && this._applyInstanceProperties(), this.shouldUpdate(this._changedProperties)) {
            var _e24 = this._changedProperties;
            this.update(_e24), this._markUpdated(), this._updateState & D || (this._updateState = this._updateState | D, this.firstUpdated(_e24)), this.updated(_e24);
          } else this._markUpdated();
        }
      }, {
        key: "_markUpdated",
        value: function _markUpdated() {
          this._changedProperties = new Map(), this._updateState = this._updateState & ~G;
        }
      }, {
        key: "shouldUpdate",
        value: function shouldUpdate(e) {
          return !0;
        }
      }, {
        key: "update",
        value: function update(e) {
          var _this9 = this;

          void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach(function (e, t) {
            return _this9._propertyToAttribute(t, _this9[t], e);
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
          return this._updateState & X;
        }
      }, {
        key: "_hasRequestedUpdate",
        get: function get() {
          return this._updateState & G;
        }
      }, {
        key: "hasUpdated",
        get: function get() {
          return this._updateState & D;
        }
      }, {
        key: "updateComplete",
        get: function get() {
          return this._updatePromise;
        }
      }], [{
        key: "_ensureClassProperties",
        value: function _ensureClassProperties() {
          var _this10 = this;

          if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
            this._classProperties = new Map();

            var _e25 = Object.getPrototypeOf(this)._classProperties;

            void 0 !== _e25 && _e25.forEach(function (e, t) {
              return _this10._classProperties.set(t, e);
            });
          }
        }
      }, {
        key: "createProperty",
        value: function createProperty(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : W;
          if (this._ensureClassProperties(), this._classProperties.set(e, t), t.noAccessor || this.prototype.hasOwnProperty(e)) return;
          var s = "symbol" == _typeof(e) ? Symbol() : "__".concat(e);
          Object.defineProperty(this.prototype, e, {
            get: function get() {
              return this[s];
            },
            set: function set(t) {
              var n = this[e];
              this[s] = t, this.requestUpdate(e, n);
            },
            configurable: !0,
            enumerable: !0
          });
        }
      }, {
        key: "finalize",
        value: function finalize() {
          if (this.hasOwnProperty(JSCompiler_renameProperty("finalized", this)) && this.finalized) return;
          var e = Object.getPrototypeOf(this);

          if ("function" == typeof e.finalize && e.finalize(), this.finalized = !0, this._ensureClassProperties(), this._attributeToPropertyMap = new Map(), this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
            var _e26 = this.properties,
                _t7 = [].concat(_toConsumableArray(Object.getOwnPropertyNames(_e26)), _toConsumableArray("function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(_e26) : []));

            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
              for (var _iterator5 = _t7[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var _s7 = _step5.value;
                this.createProperty(_s7, _e26[_s7]);
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
          var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : B;
          return s(e, t);
        }
      }, {
        key: "_propertyValueFromAttribute",
        value: function _propertyValueFromAttribute(e, t) {
          var s = t.type,
              n = t.converter || I,
              i = "function" == typeof n ? n : n.fromAttribute;
          return i ? i(e, s) : e;
        }
      }, {
        key: "_propertyValueToAttribute",
        value: function _propertyValueToAttribute(e, t) {
          if (void 0 === t.reflect) return;
          var s = t.type,
              n = t.converter;
          return (n && n.toAttribute || I.toAttribute)(e, s);
        }
      }, {
        key: "observedAttributes",
        get: function get() {
          var _this11 = this;

          this.finalize();
          var e = [];
          return this._classProperties.forEach(function (t, s) {
            var n = _this11._attributeNameForProperty(s, t);

            void 0 !== n && (_this11._attributeToPropertyMap.set(n, s), e.push(n));
          }), e;
        }
      }]);

      return Y;
    }(_wrapNativeSuper(HTMLElement));

    Y.finalized = !0;
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

    var Z = function Z(e, t) {
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
        ee = function ee(e, t, s) {
      t.constructor.createProperty(s, e);
    };

    ne(function (e, t) {
      return e.querySelector(t);
    }), ne(function (e, t) {
      return e.querySelectorAll(t);
    });

    var te = function te(e, t, s) {
      Object.defineProperty(t, s, e);
    },
        se = function se(e, t) {
      return {
        kind: "method",
        placement: "prototype",
        key: t.key,
        descriptor: e
      };
    };

    function ne(e) {
      return function (t) {
        return function (s, n) {
          var i = {
            get: function get() {
              return e(this.renderRoot, t);
            },
            enumerable: !0,
            configurable: !0
          };
          return void 0 !== n ? te(i, s, n) : se(i, s);
        };
      };
    }

    var ie = "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
        re = Symbol();

    var oe =
    /*#__PURE__*/
    function () {
      function oe(e, t) {
        _classCallCheck(this, oe);

        if (t !== re) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = e;
      }

      _createClass(oe, [{
        key: "toString",
        value: function toString() {
          return this.cssText;
        }
      }, {
        key: "styleSheet",
        get: function get() {
          return void 0 === this._styleSheet && (ie ? (this._styleSheet = new CSSStyleSheet(), this._styleSheet.replaceSync(this.cssText)) : this._styleSheet = null), this._styleSheet;
        }
      }]);

      return oe;
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


    (window.litElementVersions || (window.litElementVersions = [])).push("2.0.1");

    var ae = function ae(e) {
      return e.flat ? e.flat(1 / 0) : function e(t) {
        var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        for (var _n5 = 0, _i6 = t.length; _n5 < _i6; _n5++) {
          var _i7 = t[_n5];
          Array.isArray(_i7) ? e(_i7, s) : s.push(_i7);
        }

        return s;
      }(e);
    };

    var le =
    /*#__PURE__*/
    function (_Y) {
      _inherits(le, _Y);

      function le() {
        _classCallCheck(this, le);

        return _possibleConstructorReturn(this, _getPrototypeOf(le).apply(this, arguments));
      }

      _createClass(le, [{
        key: "initialize",
        value: function initialize() {
          _get(_getPrototypeOf(le.prototype), "initialize", this).call(this), this.renderRoot = this.createRenderRoot(), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles();
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
          0 !== e.length && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow ? ie ? this.renderRoot.adoptedStyleSheets = e.map(function (e) {
            return e.styleSheet;
          }) : this._needsShimAdoptedStyleSheets = !0 : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(function (e) {
            return e.cssText;
          }), this.localName));
        }
      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          _get(_getPrototypeOf(le.prototype), "connectedCallback", this).call(this), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this);
        }
      }, {
        key: "update",
        value: function update(e) {
          var _this12 = this;

          _get(_getPrototypeOf(le.prototype), "update", this).call(this, e);

          var t = this.render();
          t instanceof g && this.constructor.render(t, this.renderRoot, {
            scopeName: this.localName,
            eventContext: this
          }), this._needsShimAdoptedStyleSheets && (this._needsShimAdoptedStyleSheets = !1, this.constructor._styles.forEach(function (e) {
            var t = document.createElement("style");
            t.textContent = e.cssText, _this12.renderRoot.appendChild(t);
          }));
        }
      }, {
        key: "render",
        value: function render() {}
      }], [{
        key: "finalize",
        value: function finalize() {
          _get(_getPrototypeOf(le), "finalize", this).call(this), this._styles = this.hasOwnProperty(JSCompiler_renameProperty("styles", this)) ? this._getUniqueStyles() : this._styles || [];
        }
      }, {
        key: "_getUniqueStyles",
        value: function _getUniqueStyles() {
          var e = this.styles,
              t = [];

          if (Array.isArray(e)) {
            ae(e).reduceRight(function (e, t) {
              return e.add(t), e;
            }, new Set()).forEach(function (e) {
              return t.unshift(e);
            });
          } else e && t.push(e);

          return t;
        }
      }]);

      return le;
    }(Y);

    le.finalized = !0, le.render = function (e, t, s) {
      var n = s.scopeName,
          i = O.has(t),
          r = t instanceof ShadowRoot && q && e instanceof g,
          a = r && !H.has(n),
          l = a ? document.createDocumentFragment() : t;

      if (function (e, t, s) {
        var n = O.get(t);
        void 0 === n && (o(t, t.firstChild), O.set(t, n = new b(Object.assign({
          templateFactory: V
        }, s))), n.appendInto(t)), n.setValue(e), n.commit();
      }(e, l, Object.assign({
        templateFactory: L(n)
      }, s)), a) {
        var _e27 = O.get(l);

        O.delete(l), _e27.value instanceof _ && $(l, _e27.value.template, n), o(t, t.firstChild), t.appendChild(l), O.set(t, _e27);
      }

      !i && r && window.ShadyCSS.styleElement(t.host);
    };

    var ce = function ce(e, t, s, n) {
      var i,
          r = arguments.length,
          o = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, s) : n;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, s, n);else for (var a = e.length - 1; a >= 0; a--) {
        (i = e[a]) && (o = (r < 3 ? i(o) : r > 3 ? i(t, s, o) : i(t, s)) || o);
      }
      return r > 3 && o && Object.defineProperty(t, s, o), o;
    };

    var he =
    /*#__PURE__*/
    function (_le) {
      _inherits(he, _le);

      function he() {
        var _this13;

        _classCallCheck(this, he);

        _this13 = _possibleConstructorReturn(this, _getPrototypeOf(he).apply(this, arguments)), _this13.mood = "great";
        return _this13;
      }

      _createClass(he, [{
        key: "render",
        value: function render() {
          return function (e) {
            for (var _len = arguments.length, t = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              t[_key - 1] = arguments[_key];
            }

            return new g(e, t, "html", E);
          }(_templateObject(), this.mood);
        }
      }]);

      return he;
    }(le);

    var de;
    he.styles = function (e) {
      for (var _len2 = arguments.length, t = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        t[_key2 - 1] = arguments[_key2];
      }

      var s = t.reduce(function (t, s, n) {
        return t + function (e) {
          if (e instanceof oe) return e.cssText;
          throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(e, ". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."));
        }(s) + e[n + 1];
      }, e[0]);
      return new oe(s, re);
    }(_templateObject2()), ce([function (e, t) {
      return void 0 !== t ? ee(de, e, t) : Z(de, e);
    }], he.prototype, "mood", void 0), he = ce([function (e) {
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
    }("my-typed-lit-element")], he);
  }
});