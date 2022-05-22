var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { defineComponent, openBlock, createElementBlock, renderSlot, getCurrentScope, onScopeDispose, ref, unref, watch, createElementVNode, warn, getCurrentInstance, inject, computed, provide, mergeProps, normalizeClass, createVNode, Transition, withCtx, withDirectives, toDisplayString, vShow, onMounted, resolveComponent, createBlock, normalizeStyle, createCommentVNode, resolveDynamicComponent, Fragment, withModifiers, isVNode, render, pushScopeId, popScopeId } from "vue";
var index_vue_vue_type_style_index_0_scoped_true_lang$2 = "";
var _export_sfc$2 = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  emits: ["click"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: "my-button",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]);
    };
  }
});
var Button = /* @__PURE__ */ _export_sfc$2(_sfc_main$a, [["__scopeId", "data-v-e677f1b4"]]);
const ButtonPlugin = {
  install(app) {
    app.component("my-button", Button);
  }
};
var index_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
const _sfc_main$9 = {};
const _hoisted_1$8 = { class: "my-foo" };
function _sfc_render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$8, " \u6211\u662F\u6D4B\u8BD5\u7EC4\u4EF6\u7EC4\u4EF6 ");
}
var Foo = /* @__PURE__ */ _export_sfc$2(_sfc_main$9, [["render", _sfc_render$6], ["__scopeId", "data-v-24c3f342"]]);
const FooPlugin = {
  install(app) {
    app.component("my-foo", Foo);
  }
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var clipboard = { exports: {} };
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function(module, exports) {
  (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
    return function() {
      var __webpack_modules__ = {
        686: function(__unused_webpack_module, __webpack_exports__, __webpack_require__2) {
          __webpack_require__2.d(__webpack_exports__, {
            "default": function() {
              return clipboard2;
            }
          });
          var tiny_emitter = __webpack_require__2(279);
          var tiny_emitter_default = /* @__PURE__ */ __webpack_require__2.n(tiny_emitter);
          var listen = __webpack_require__2(370);
          var listen_default = /* @__PURE__ */ __webpack_require__2.n(listen);
          var src_select = __webpack_require__2(817);
          var select_default = /* @__PURE__ */ __webpack_require__2.n(src_select);
          function command(type) {
            try {
              return document.execCommand(type);
            } catch (err) {
              return false;
            }
          }
          var ClipboardActionCut = function ClipboardActionCut2(target) {
            var selectedText = select_default()(target);
            command("cut");
            return selectedText;
          };
          var actions_cut = ClipboardActionCut;
          function createFakeElement(value) {
            var isRTL = document.documentElement.getAttribute("dir") === "rtl";
            var fakeElement = document.createElement("textarea");
            fakeElement.style.fontSize = "12pt";
            fakeElement.style.border = "0";
            fakeElement.style.padding = "0";
            fakeElement.style.margin = "0";
            fakeElement.style.position = "absolute";
            fakeElement.style[isRTL ? "right" : "left"] = "-9999px";
            var yPosition = window.pageYOffset || document.documentElement.scrollTop;
            fakeElement.style.top = "".concat(yPosition, "px");
            fakeElement.setAttribute("readonly", "");
            fakeElement.value = value;
            return fakeElement;
          }
          var fakeCopyAction = function fakeCopyAction2(value, options) {
            var fakeElement = createFakeElement(value);
            options.container.appendChild(fakeElement);
            var selectedText = select_default()(fakeElement);
            command("copy");
            fakeElement.remove();
            return selectedText;
          };
          var ClipboardActionCopy = function ClipboardActionCopy2(target) {
            var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
              container: document.body
            };
            var selectedText = "";
            if (typeof target === "string") {
              selectedText = fakeCopyAction(target, options);
            } else if (target instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(target === null || target === void 0 ? void 0 : target.type)) {
              selectedText = fakeCopyAction(target.value, options);
            } else {
              selectedText = select_default()(target);
              command("copy");
            }
            return selectedText;
          };
          var actions_copy = ClipboardActionCopy;
          function _typeof(obj) {
            "@babel/helpers - typeof";
            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
              _typeof = function _typeof2(obj2) {
                return typeof obj2;
              };
            } else {
              _typeof = function _typeof2(obj2) {
                return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
              };
            }
            return _typeof(obj);
          }
          var ClipboardActionDefault = function ClipboardActionDefault2() {
            var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            var _options$action = options.action, action = _options$action === void 0 ? "copy" : _options$action, container = options.container, target = options.target, text = options.text;
            if (action !== "copy" && action !== "cut") {
              throw new Error('Invalid "action" value, use either "copy" or "cut"');
            }
            if (target !== void 0) {
              if (target && _typeof(target) === "object" && target.nodeType === 1) {
                if (action === "copy" && target.hasAttribute("disabled")) {
                  throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                }
                if (action === "cut" && (target.hasAttribute("readonly") || target.hasAttribute("disabled"))) {
                  throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
                }
              } else {
                throw new Error('Invalid "target" value, use a valid Element');
              }
            }
            if (text) {
              return actions_copy(text, {
                container
              });
            }
            if (target) {
              return action === "cut" ? actions_cut(target) : actions_copy(target, {
                container
              });
            }
          };
          var actions_default = ClipboardActionDefault;
          function clipboard_typeof(obj) {
            "@babel/helpers - typeof";
            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
              clipboard_typeof = function _typeof2(obj2) {
                return typeof obj2;
              };
            } else {
              clipboard_typeof = function _typeof2(obj2) {
                return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
              };
            }
            return clipboard_typeof(obj);
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
              _defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              _defineProperties(Constructor, staticProps);
            return Constructor;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function");
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
            if (superClass)
              _setPrototypeOf(subClass, superClass);
          }
          function _setPrototypeOf(o, p) {
            _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
              o2.__proto__ = p2;
              return o2;
            };
            return _setPrototypeOf(o, p);
          }
          function _createSuper(Derived) {
            var hasNativeReflectConstruct = _isNativeReflectConstruct();
            return function _createSuperInternal() {
              var Super = _getPrototypeOf(Derived), result;
              if (hasNativeReflectConstruct) {
                var NewTarget = _getPrototypeOf(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
              } else {
                result = Super.apply(this, arguments);
              }
              return _possibleConstructorReturn(this, result);
            };
          }
          function _possibleConstructorReturn(self2, call) {
            if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) {
              return call;
            }
            return _assertThisInitialized(self2);
          }
          function _assertThisInitialized(self2) {
            if (self2 === void 0) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return self2;
          }
          function _isNativeReflectConstruct() {
            if (typeof Reflect === "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy === "function")
              return true;
            try {
              Date.prototype.toString.call(Reflect.construct(Date, [], function() {
              }));
              return true;
            } catch (e) {
              return false;
            }
          }
          function _getPrototypeOf(o) {
            _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
              return o2.__proto__ || Object.getPrototypeOf(o2);
            };
            return _getPrototypeOf(o);
          }
          function getAttributeValue(suffix, element) {
            var attribute = "data-clipboard-".concat(suffix);
            if (!element.hasAttribute(attribute)) {
              return;
            }
            return element.getAttribute(attribute);
          }
          var Clipboard2 = /* @__PURE__ */ function(_Emitter) {
            _inherits(Clipboard3, _Emitter);
            var _super = _createSuper(Clipboard3);
            function Clipboard3(trigger, options) {
              var _this;
              _classCallCheck(this, Clipboard3);
              _this = _super.call(this);
              _this.resolveOptions(options);
              _this.listenClick(trigger);
              return _this;
            }
            _createClass(Clipboard3, [{
              key: "resolveOptions",
              value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                this.action = typeof options.action === "function" ? options.action : this.defaultAction;
                this.target = typeof options.target === "function" ? options.target : this.defaultTarget;
                this.text = typeof options.text === "function" ? options.text : this.defaultText;
                this.container = clipboard_typeof(options.container) === "object" ? options.container : document.body;
              }
            }, {
              key: "listenClick",
              value: function listenClick(trigger) {
                var _this2 = this;
                this.listener = listen_default()(trigger, "click", function(e) {
                  return _this2.onClick(e);
                });
              }
            }, {
              key: "onClick",
              value: function onClick(e) {
                var trigger = e.delegateTarget || e.currentTarget;
                var action = this.action(trigger) || "copy";
                var text = actions_default({
                  action,
                  container: this.container,
                  target: this.target(trigger),
                  text: this.text(trigger)
                });
                this.emit(text ? "success" : "error", {
                  action,
                  text,
                  trigger,
                  clearSelection: function clearSelection() {
                    if (trigger) {
                      trigger.focus();
                    }
                    window.getSelection().removeAllRanges();
                  }
                });
              }
            }, {
              key: "defaultAction",
              value: function defaultAction(trigger) {
                return getAttributeValue("action", trigger);
              }
            }, {
              key: "defaultTarget",
              value: function defaultTarget(trigger) {
                var selector = getAttributeValue("target", trigger);
                if (selector) {
                  return document.querySelector(selector);
                }
              }
            }, {
              key: "defaultText",
              value: function defaultText(trigger) {
                return getAttributeValue("text", trigger);
              }
            }, {
              key: "destroy",
              value: function destroy() {
                this.listener.destroy();
              }
            }], [{
              key: "copy",
              value: function copy(target) {
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                  container: document.body
                };
                return actions_copy(target, options);
              }
            }, {
              key: "cut",
              value: function cut(target) {
                return actions_cut(target);
              }
            }, {
              key: "isSupported",
              value: function isSupported() {
                var action = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"];
                var actions = typeof action === "string" ? [action] : action;
                var support = !!document.queryCommandSupported;
                actions.forEach(function(action2) {
                  support = support && !!document.queryCommandSupported(action2);
                });
                return support;
              }
            }]);
            return Clipboard3;
          }(tiny_emitter_default());
          var clipboard2 = Clipboard2;
        },
        828: function(module2) {
          var DOCUMENT_NODE_TYPE = 9;
          if (typeof Element !== "undefined" && !Element.prototype.matches) {
            var proto = Element.prototype;
            proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
          }
          function closest(element, selector) {
            while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
              if (typeof element.matches === "function" && element.matches(selector)) {
                return element;
              }
              element = element.parentNode;
            }
          }
          module2.exports = closest;
        },
        438: function(module2, __unused_webpack_exports, __webpack_require__2) {
          var closest = __webpack_require__2(828);
          function _delegate(element, selector, type, callback, useCapture) {
            var listenerFn = listener.apply(this, arguments);
            element.addEventListener(type, listenerFn, useCapture);
            return {
              destroy: function() {
                element.removeEventListener(type, listenerFn, useCapture);
              }
            };
          }
          function delegate(elements, selector, type, callback, useCapture) {
            if (typeof elements.addEventListener === "function") {
              return _delegate.apply(null, arguments);
            }
            if (typeof type === "function") {
              return _delegate.bind(null, document).apply(null, arguments);
            }
            if (typeof elements === "string") {
              elements = document.querySelectorAll(elements);
            }
            return Array.prototype.map.call(elements, function(element) {
              return _delegate(element, selector, type, callback, useCapture);
            });
          }
          function listener(element, selector, type, callback) {
            return function(e) {
              e.delegateTarget = closest(e.target, selector);
              if (e.delegateTarget) {
                callback.call(element, e);
              }
            };
          }
          module2.exports = delegate;
        },
        879: function(__unused_webpack_module, exports2) {
          exports2.node = function(value) {
            return value !== void 0 && value instanceof HTMLElement && value.nodeType === 1;
          };
          exports2.nodeList = function(value) {
            var type = Object.prototype.toString.call(value);
            return value !== void 0 && (type === "[object NodeList]" || type === "[object HTMLCollection]") && "length" in value && (value.length === 0 || exports2.node(value[0]));
          };
          exports2.string = function(value) {
            return typeof value === "string" || value instanceof String;
          };
          exports2.fn = function(value) {
            var type = Object.prototype.toString.call(value);
            return type === "[object Function]";
          };
        },
        370: function(module2, __unused_webpack_exports, __webpack_require__2) {
          var is = __webpack_require__2(879);
          var delegate = __webpack_require__2(438);
          function listen(target, type, callback) {
            if (!target && !type && !callback) {
              throw new Error("Missing required arguments");
            }
            if (!is.string(type)) {
              throw new TypeError("Second argument must be a String");
            }
            if (!is.fn(callback)) {
              throw new TypeError("Third argument must be a Function");
            }
            if (is.node(target)) {
              return listenNode(target, type, callback);
            } else if (is.nodeList(target)) {
              return listenNodeList(target, type, callback);
            } else if (is.string(target)) {
              return listenSelector(target, type, callback);
            } else {
              throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
            }
          }
          function listenNode(node, type, callback) {
            node.addEventListener(type, callback);
            return {
              destroy: function() {
                node.removeEventListener(type, callback);
              }
            };
          }
          function listenNodeList(nodeList, type, callback) {
            Array.prototype.forEach.call(nodeList, function(node) {
              node.addEventListener(type, callback);
            });
            return {
              destroy: function() {
                Array.prototype.forEach.call(nodeList, function(node) {
                  node.removeEventListener(type, callback);
                });
              }
            };
          }
          function listenSelector(selector, type, callback) {
            return delegate(document.body, selector, type, callback);
          }
          module2.exports = listen;
        },
        817: function(module2) {
          function select(element) {
            var selectedText;
            if (element.nodeName === "SELECT") {
              element.focus();
              selectedText = element.value;
            } else if (element.nodeName === "INPUT" || element.nodeName === "TEXTAREA") {
              var isReadOnly = element.hasAttribute("readonly");
              if (!isReadOnly) {
                element.setAttribute("readonly", "");
              }
              element.select();
              element.setSelectionRange(0, element.value.length);
              if (!isReadOnly) {
                element.removeAttribute("readonly");
              }
              selectedText = element.value;
            } else {
              if (element.hasAttribute("contenteditable")) {
                element.focus();
              }
              var selection = window.getSelection();
              var range = document.createRange();
              range.selectNodeContents(element);
              selection.removeAllRanges();
              selection.addRange(range);
              selectedText = selection.toString();
            }
            return selectedText;
          }
          module2.exports = select;
        },
        279: function(module2) {
          function E() {
          }
          E.prototype = {
            on: function(name, callback, ctx) {
              var e = this.e || (this.e = {});
              (e[name] || (e[name] = [])).push({
                fn: callback,
                ctx
              });
              return this;
            },
            once: function(name, callback, ctx) {
              var self2 = this;
              function listener() {
                self2.off(name, listener);
                callback.apply(ctx, arguments);
              }
              listener._ = callback;
              return this.on(name, listener, ctx);
            },
            emit: function(name) {
              var data = [].slice.call(arguments, 1);
              var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
              var i = 0;
              var len = evtArr.length;
              for (i; i < len; i++) {
                evtArr[i].fn.apply(evtArr[i].ctx, data);
              }
              return this;
            },
            off: function(name, callback) {
              var e = this.e || (this.e = {});
              var evts = e[name];
              var liveEvents = [];
              if (evts && callback) {
                for (var i = 0, len = evts.length; i < len; i++) {
                  if (evts[i].fn !== callback && evts[i].fn._ !== callback)
                    liveEvents.push(evts[i]);
                }
              }
              liveEvents.length ? e[name] = liveEvents : delete e[name];
              return this;
            }
          };
          module2.exports = E;
          module2.exports.TinyEmitter = E;
        }
      };
      var __webpack_module_cache__ = {};
      function __webpack_require__(moduleId) {
        if (__webpack_module_cache__[moduleId]) {
          return __webpack_module_cache__[moduleId].exports;
        }
        var module2 = __webpack_module_cache__[moduleId] = {
          exports: {}
        };
        __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
        return module2.exports;
      }
      !function() {
        __webpack_require__.n = function(module2) {
          var getter = module2 && module2.__esModule ? function() {
            return module2["default"];
          } : function() {
            return module2;
          };
          __webpack_require__.d(getter, { a: getter });
          return getter;
        };
      }();
      !function() {
        __webpack_require__.d = function(exports2, definition) {
          for (var key in definition) {
            if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
              Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
            }
          }
        };
      }();
      !function() {
        __webpack_require__.o = function(obj, prop) {
          return Object.prototype.hasOwnProperty.call(obj, prop);
        };
      }();
      return __webpack_require__(686);
    }().default;
  });
})(clipboard);
var Clipboard$1 = /* @__PURE__ */ getDefaultExportFromCjs(clipboard.exports);
var useClipboard = (opts) => {
  const appendToBody = (opts === null || opts === void 0 ? void 0 : opts.appendToBody) === void 0 ? true : opts.appendToBody;
  return {
    toClipboard(text, container) {
      return new Promise((resolve, reject) => {
        const fakeEl = document.createElement("button");
        const clipboard2 = new Clipboard$1(fakeEl, {
          text: () => text,
          action: () => "copy",
          container: container !== void 0 ? container : document.body
        });
        clipboard2.on("success", (e) => {
          clipboard2.destroy();
          resolve(e);
        });
        clipboard2.on("error", (e) => {
          clipboard2.destroy();
          reject(e);
        });
        if (appendToBody)
          document.body.appendChild(fakeEl);
        fakeEl.click();
        if (appendToBody)
          document.body.removeChild(fakeEl);
      });
    }
  };
};
function fromPairs(pairs) {
  var index = -1, length = pairs == null ? 0 : pairs.length, result = {};
  while (++index < length) {
    var pair = pairs[index];
    result[pair[0]] = pair[1];
  }
  return result;
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
var _a;
const isClient = typeof window !== "undefined";
const isNumber = (val) => typeof val === "number";
const isString$1 = (val) => typeof val === "string";
const noop = () => {
};
isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = ref(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, unref(interval));
  }
  if (immediate) {
    isPending.value = true;
    if (isClient)
      start();
  }
  tryOnScopeDispose(stop);
  return {
    isPending,
    start,
    stop
  };
}
function unrefElement(elRef) {
  var _a2;
  const plain = unref(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow = isClient ? window : void 0;
function useEventListener(...args) {
  let target;
  let event;
  let listener;
  let options;
  if (isString$1(args[0])) {
    [event, listener, options] = args;
    target = defaultWindow;
  } else {
    [target, event, listener, options] = args;
  }
  if (!target)
    return noop;
  let cleanup = noop;
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (!el)
      return;
    el.addEventListener(event, listener, options);
    cleanup = () => {
      el.removeEventListener(event, listener, options);
      cleanup = noop;
    };
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
_global[globalKey];
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isObject = (val) => val !== null && typeof val === "object";
const isUndefined = (val) => val === void 0;
const isElement = (e) => {
  if (typeof Element === "undefined")
    return false;
  return e instanceof Element;
};
const keysOf = (arr) => Object.keys(arr);
function addUnit(value, defaultUnit = "px") {
  if (!value)
    return "";
  if (isString(value)) {
    return value;
  } else if (isNumber(value)) {
    return `${value}${defaultUnit}`;
  }
}
var _export_sfc$1 = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$8 = defineComponent({
  name: "CircleCloseFilled"
});
const _hoisted_1$7 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
}, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$6
];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_3$4);
}
var circleCloseFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["render", _sfc_render$5]]);
const _sfc_main$7 = defineComponent({
  name: "Close"
});
const _hoisted_1$6 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$5
];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$3);
}
var close$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["render", _sfc_render$4]]);
const _sfc_main$6 = defineComponent({
  name: "InfoFilled"
});
const _hoisted_1$5 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$4
];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$2);
}
var infoFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["render", _sfc_render$3]]);
const _sfc_main$5 = defineComponent({
  name: "SuccessFilled"
});
const _hoisted_1$4 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$3
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$1);
}
var successFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["render", _sfc_render$2]]);
const _sfc_main$4 = defineComponent({
  name: "WarningFilled"
});
const _hoisted_1$3 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2$2
];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3);
}
var warningFilled = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["render", _sfc_render$1]]);
const wrapperKey = Symbol();
const propKey = "__elPropsReservedKey";
function buildProp(option, key) {
  if (!isObject(option) || !!option[propKey])
    return option;
  const { values, required, default: defaultValue, type, validator } = option;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = Array.from(values);
      if (hasOwn(option, "default")) {
        allowedValues.push(defaultValue);
      }
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }
    return valid;
  } : void 0;
  const prop = {
    type: isObject(type) && Object.getOwnPropertySymbols(type).includes(wrapperKey) ? type[wrapperKey] : type,
    required: !!required,
    validator: _validator,
    [propKey]: true
  };
  if (hasOwn(option, "default"))
    prop.default = defaultValue;
  return prop;
}
const buildProps = (props) => fromPairs(Object.entries(props).map(([key, option]) => [
  key,
  buildProp(option, key)
]));
const definePropType = (val) => ({ [wrapperKey]: val });
const iconPropType = definePropType([
  String,
  Object,
  Function
]);
const TypeComponents = {
  Close: close$1,
  SuccessFilled: successFilled,
  InfoFilled: infoFilled,
  WarningFilled: warningFilled,
  CircleCloseFilled: circleCloseFilled
};
const TypeComponentsMap = {
  success: successFilled,
  warning: warningFilled,
  error: circleCloseFilled,
  info: infoFilled
};
const withInstall = (main, extra) => {
  main.install = (app) => {
    for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      main[key] = comp;
    }
  }
  return main;
};
const withInstallFunction = (fn, name) => {
  fn.install = (app) => {
    fn._context = app._context;
    app.config.globalProperties[name] = fn;
  };
  return fn;
};
const EVENT_CODE = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
};
const componentSizes = ["", "default", "small", "large"];
const configProviderContextKey = Symbol();
const globalConfig = ref();
function useGlobalConfig(key, defaultValue = void 0) {
  const config = getCurrentInstance() ? inject(configProviderContextKey, globalConfig) : globalConfig;
  if (key) {
    return computed(() => {
      var _a2, _b;
      return (_b = (_a2 = config.value) == null ? void 0 : _a2[key]) != null ? _b : defaultValue;
    });
  } else {
    return config;
  }
}
const provideGlobalConfig = (config, app, global2 = false) => {
  var _a2;
  const inSetup = !!getCurrentInstance();
  const oldConfig = inSetup ? useGlobalConfig() : void 0;
  const provideFn = (_a2 = app == null ? void 0 : app.provide) != null ? _a2 : inSetup ? provide : void 0;
  if (!provideFn) {
    return;
  }
  const context = computed(() => {
    const cfg = unref(config);
    if (!(oldConfig == null ? void 0 : oldConfig.value))
      return cfg;
    return mergeConfig(oldConfig.value, cfg);
  });
  provideFn(configProviderContextKey, context);
  if (global2 || !globalConfig.value) {
    globalConfig.value = context.value;
  }
  return context;
};
const mergeConfig = (a, b) => {
  var _a2;
  const keys = [.../* @__PURE__ */ new Set([...keysOf(a), ...keysOf(b)])];
  const obj = {};
  for (const key of keys) {
    obj[key] = (_a2 = b[key]) != null ? _a2 : a[key];
  }
  return obj;
};
const defaultNamespace = "el";
const statePrefix = "is-";
const _bem = (namespace, block, blockSuffix, element, modifier) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
const useNamespace = (block) => {
  const globalConfig2 = useGlobalConfig("namespace");
  const namespace = computed(() => globalConfig2.value || defaultNamespace);
  const b = (blockSuffix = "") => _bem(unref(namespace), block, blockSuffix, "", "");
  const e = (element) => element ? _bem(unref(namespace), block, "", element, "") : "";
  const m = (modifier) => modifier ? _bem(unref(namespace), block, "", "", modifier) : "";
  const be = (blockSuffix, element) => blockSuffix && element ? _bem(unref(namespace), block, blockSuffix, element, "") : "";
  const em = (element, modifier) => element && modifier ? _bem(unref(namespace), block, "", element, modifier) : "";
  const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(unref(namespace), block, blockSuffix, "", modifier) : "";
  const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(unref(namespace), block, blockSuffix, element, modifier) : "";
  const is = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${statePrefix}${name}` : "";
  };
  const cssVar = (object) => {
    const styles = {};
    for (const key in object) {
      styles[`--${namespace.value}-${key}`] = object[key];
    }
    return styles;
  };
  const cssVarBlock = (object) => {
    const styles = {};
    for (const key in object) {
      styles[`--${namespace.value}-${block}-${key}`] = object[key];
    }
    return styles;
  };
  const cssVarName = (name) => `--${namespace.value}-${name}`;
  const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
    cssVar,
    cssVarName,
    cssVarBlock,
    cssVarBlockName
  };
};
const zIndex = ref(0);
const useZIndex = () => {
  const initialZIndex = useGlobalConfig("zIndex", 2e3);
  const currentZIndex = computed(() => initialZIndex.value + zIndex.value);
  const nextZIndex = () => {
    zIndex.value++;
    return currentZIndex.value;
  };
  return {
    initialZIndex,
    currentZIndex,
    nextZIndex
  };
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const iconProps = buildProps({
  size: {
    type: definePropType([Number, String])
  },
  color: {
    type: String
  }
});
const __default__$1 = {
  name: "ElIcon",
  inheritAttrs: false
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$1), {
  props: iconProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("icon");
    const style = computed(() => {
      if (!props.size && !props.color)
        return {};
      return {
        fontSize: isUndefined(props.size) ? void 0 : addUnit(props.size),
        "--color": props.color
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", mergeProps({
        class: unref(ns).b(),
        style: unref(style)
      }, _ctx.$attrs), [
        renderSlot(_ctx.$slots, "default")
      ], 16);
    };
  }
}));
var Icon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const ElIcon = withInstall(Icon);
const badgeProps = buildProps({
  value: {
    type: [String, Number],
    default: ""
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: Boolean,
  hidden: Boolean,
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger"],
    default: "danger"
  }
});
const _hoisted_1$2 = ["textContent"];
const __default__ = {
  name: "ElBadge"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: badgeProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("badge");
    const content = computed(() => {
      if (props.isDot)
        return "";
      if (isNumber(props.value) && isNumber(props.max)) {
        return props.max < props.value ? `${props.max}+` : `${props.value}`;
      }
      return `${props.value}`;
    });
    expose({
      content
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ns).b())
      }, [
        renderSlot(_ctx.$slots, "default"),
        createVNode(Transition, {
          name: `${unref(ns).namespace.value}-zoom-in-center`
        }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("sup", {
              class: normalizeClass([
                unref(ns).e("content"),
                unref(ns).em("content", _ctx.type),
                unref(ns).is("fixed", !!_ctx.$slots.default),
                unref(ns).is("dot", _ctx.isDot)
              ]),
              textContent: toDisplayString(unref(content))
            }, null, 10, _hoisted_1$2), [
              [vShow, !_ctx.hidden && (unref(content) || unref(content) === "0" || _ctx.isDot)]
            ])
          ]),
          _: 1
        }, 8, ["name"])
      ], 2);
    };
  }
}));
var Badge = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);
const ElBadge = withInstall(Badge);
const messageConfig = {};
const configProviderProps = buildProps({
  a11y: {
    type: Boolean,
    default: true
  },
  locale: {
    type: definePropType(Object)
  },
  size: {
    type: String,
    values: componentSizes,
    default: ""
  },
  button: {
    type: definePropType(Object)
  },
  experimentalFeatures: {
    type: definePropType(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: true
  },
  message: {
    type: definePropType(Object)
  },
  zIndex: {
    type: Number
  },
  namespace: {
    type: String,
    default: "el"
  }
});
defineComponent({
  name: "ElConfigProvider",
  props: configProviderProps,
  setup(props, { slots }) {
    watch(() => props.message, (val) => {
      Object.assign(messageConfig, val != null ? val : {});
    }, { immediate: true, deep: true });
    const config = provideGlobalConfig(props);
    return () => renderSlot(slots, "default", { config: config == null ? void 0 : config.value });
  }
});
const messageTypes = ["success", "info", "warning", "error"];
const messageProps = buildProps({
  customClass: {
    type: String,
    default: ""
  },
  center: {
    type: Boolean,
    default: false
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: false
  },
  duration: {
    type: Number,
    default: 3e3
  },
  icon: {
    type: iconPropType,
    default: ""
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: definePropType([
      String,
      Object,
      Function
    ]),
    default: ""
  },
  onClose: {
    type: definePropType(Function),
    required: false
  },
  showClose: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    values: messageTypes,
    default: "info"
  },
  offset: {
    type: Number,
    default: 20
  },
  zIndex: {
    type: Number,
    default: 0
  },
  grouping: {
    type: Boolean,
    default: false
  },
  repeatNum: {
    type: Number,
    default: 1
  }
});
const messageEmits = {
  destroy: () => true
};
const _sfc_main$1 = defineComponent({
  name: "ElMessage",
  components: __spreadValues({
    ElBadge,
    ElIcon
  }, TypeComponents),
  props: messageProps,
  emits: messageEmits,
  setup(props) {
    const ns = useNamespace("message");
    const visible = ref(false);
    const badgeType = ref(props.type ? props.type === "error" ? "danger" : props.type : "info");
    let stopTimer = void 0;
    const typeClass = computed(() => {
      const type = props.type;
      return { [ns.bm("icon", type)]: type && TypeComponentsMap[type] };
    });
    const iconComponent = computed(() => {
      return props.icon || TypeComponentsMap[props.type] || "";
    });
    const customStyle = computed(() => ({
      top: `${props.offset}px`,
      zIndex: props.zIndex
    }));
    function startTimer() {
      if (props.duration > 0) {
        ({ stop: stopTimer } = useTimeoutFn(() => {
          if (visible.value)
            close2();
        }, props.duration));
      }
    }
    function clearTimer() {
      stopTimer == null ? void 0 : stopTimer();
    }
    function close2() {
      visible.value = false;
    }
    function keydown({ code }) {
      if (code === EVENT_CODE.esc) {
        if (visible.value) {
          close2();
        }
      } else {
        startTimer();
      }
    }
    onMounted(() => {
      startTimer();
      visible.value = true;
    });
    watch(() => props.repeatNum, () => {
      clearTimer();
      startTimer();
    });
    useEventListener(document, "keydown", keydown);
    return {
      ns,
      typeClass,
      iconComponent,
      customStyle,
      visible,
      badgeType,
      close: close2,
      clearTimer,
      startTimer
    };
  }
});
const _hoisted_1$1 = ["id"];
const _hoisted_2$1 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_badge = resolveComponent("el-badge");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_close = resolveComponent("close");
  return openBlock(), createBlock(Transition, {
    name: _ctx.ns.b("fade"),
    onBeforeLeave: _ctx.onClose,
    onAfterLeave: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("destroy"))
  }, {
    default: withCtx(() => [
      withDirectives(createElementVNode("div", {
        id: _ctx.id,
        class: normalizeClass([
          _ctx.ns.b(),
          { [_ctx.ns.m(_ctx.type)]: _ctx.type && !_ctx.icon },
          _ctx.ns.is("center", _ctx.center),
          _ctx.ns.is("closable", _ctx.showClose),
          _ctx.customClass
        ]),
        style: normalizeStyle(_ctx.customStyle),
        role: "alert",
        onMouseenter: _cache[0] || (_cache[0] = (...args) => _ctx.clearTimer && _ctx.clearTimer(...args)),
        onMouseleave: _cache[1] || (_cache[1] = (...args) => _ctx.startTimer && _ctx.startTimer(...args))
      }, [
        _ctx.repeatNum > 1 ? (openBlock(), createBlock(_component_el_badge, {
          key: 0,
          value: _ctx.repeatNum,
          type: _ctx.badgeType,
          class: normalizeClass(_ctx.ns.e("badge"))
        }, null, 8, ["value", "type", "class"])) : createCommentVNode("v-if", true),
        _ctx.iconComponent ? (openBlock(), createBlock(_component_el_icon, {
          key: 1,
          class: normalizeClass([_ctx.ns.e("icon"), _ctx.typeClass])
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))
          ]),
          _: 1
        }, 8, ["class"])) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "default", {}, () => [
          !_ctx.dangerouslyUseHTMLString ? (openBlock(), createElementBlock("p", {
            key: 0,
            class: normalizeClass(_ctx.ns.e("content"))
          }, toDisplayString(_ctx.message), 3)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createCommentVNode(" Caution here, message could've been compromised, never use user's input as message "),
            createElementVNode("p", {
              class: normalizeClass(_ctx.ns.e("content")),
              innerHTML: _ctx.message
            }, null, 10, _hoisted_2$1)
          ], 2112))
        ]),
        _ctx.showClose ? (openBlock(), createBlock(_component_el_icon, {
          key: 2,
          class: normalizeClass(_ctx.ns.e("closeBtn")),
          onClick: withModifiers(_ctx.close, ["stop"])
        }, {
          default: withCtx(() => [
            createVNode(_component_close)
          ]),
          _: 1
        }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
      ], 46, _hoisted_1$1), [
        [vShow, _ctx.visible]
      ])
    ]),
    _: 3
  }, 8, ["name", "onBeforeLeave"]);
}
var MessageConstructor = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);
const instances = [];
let seed = 1;
const message = function(options = {}, context) {
  if (!isClient)
    return { close: () => void 0 };
  if (isNumber(messageConfig.max) && instances.length >= messageConfig.max) {
    return { close: () => void 0 };
  }
  if (!isVNode(options) && isObject(options) && options.grouping && !isVNode(options.message) && instances.length) {
    const tempVm = instances.find((item) => {
      var _a2, _b, _c;
      return `${(_b = (_a2 = item.vm.props) == null ? void 0 : _a2.message) != null ? _b : ""}` === `${(_c = options.message) != null ? _c : ""}`;
    });
    if (tempVm) {
      tempVm.vm.component.props.repeatNum += 1;
      tempVm.vm.component.props.type = (options == null ? void 0 : options.type) || "info";
      return {
        close: () => vm.component.proxy.visible = false
      };
    }
  }
  if (isString(options) || isVNode(options)) {
    options = { message: options };
  }
  let verticalOffset = options.offset || 20;
  instances.forEach(({ vm: vm2 }) => {
    var _a2;
    verticalOffset += (((_a2 = vm2.el) == null ? void 0 : _a2.offsetHeight) || 0) + 16;
  });
  verticalOffset += 16;
  const { nextZIndex } = useZIndex();
  const id = `message_${seed++}`;
  const userOnClose = options.onClose;
  const props = __spreadProps(__spreadValues({
    zIndex: nextZIndex()
  }, options), {
    offset: verticalOffset,
    id,
    onClose: () => {
      close(id, userOnClose);
    }
  });
  let appendTo = document.body;
  if (isElement(options.appendTo)) {
    appendTo = options.appendTo;
  } else if (isString(options.appendTo)) {
    appendTo = document.querySelector(options.appendTo);
  }
  if (!isElement(appendTo)) {
    appendTo = document.body;
  }
  const container = document.createElement("div");
  container.className = `container_${id}`;
  const messageContent = props.message;
  const vm = createVNode(MessageConstructor, props, isFunction(messageContent) ? { default: messageContent } : isVNode(messageContent) ? { default: () => messageContent } : null);
  vm.appContext = context || message._context;
  vm.props.onDestroy = () => {
    render(null, container);
  };
  render(vm, container);
  instances.push({ vm });
  appendTo.appendChild(container.firstElementChild);
  return {
    close: () => vm.component.proxy.visible = false
  };
};
messageTypes.forEach((type) => {
  message[type] = (options = {}, appContext) => {
    if (isString(options) || isVNode(options)) {
      options = {
        message: options
      };
    }
    return message(__spreadProps(__spreadValues({}, options), {
      type
    }), appContext);
  };
});
function close(id, userOnClose) {
  const idx = instances.findIndex(({ vm: vm2 }) => id === vm2.component.props.id);
  if (idx === -1)
    return;
  const { vm } = instances[idx];
  if (!vm)
    return;
  userOnClose == null ? void 0 : userOnClose(vm);
  const removedHeight = vm.el.offsetHeight;
  instances.splice(idx, 1);
  const len = instances.length;
  if (len < 1)
    return;
  for (let i = idx; i < len; i++) {
    const pos = Number.parseInt(instances[i].vm.el.style["top"], 10) - removedHeight - 16;
    instances[i].vm.component.props.offset = pos;
  }
}
function closeAll() {
  var _a2;
  for (let i = instances.length - 1; i >= 0; i--) {
    const instance = instances[i].vm.component;
    (_a2 = instance == null ? void 0 : instance.proxy) == null ? void 0 : _a2.close();
  }
}
message.closeAll = closeAll;
message._context = null;
const ElMessage = withInstallFunction(message, "$message");
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-7e76768a"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("svg", {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ createElementVNode("path", {
    fill: "currentColor",
    d: "M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z"
  }),
  /* @__PURE__ */ createElementVNode("path", {
    fill: "currentColor",
    d: "M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z"
  })
], -1));
const _hoisted_2 = [
  _hoisted_1
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    text: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const { toClipboard } = useClipboard();
    const handleCopy = async (msg) => {
      try {
        await toClipboard(msg);
        ElMessage({
          message: "\u5DF2\u590D\u5236\u5230\u7C98\u8D34\u677F",
          type: "success"
        });
      } catch (e) {
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "clipboard",
        style: { "width": "20px", "height": "20px" },
        onClick: _cache[0] || (_cache[0] = ($event) => handleCopy(__props.text))
      }, _hoisted_2);
    };
  }
});
var Clipboard = /* @__PURE__ */ _export_sfc$2(_sfc_main, [["__scopeId", "data-v-7e76768a"]]);
const ClipboardPlugin = {
  install(app) {
    app.component("my-clipboard", Clipboard);
  }
};
const MYKitPlugin = {
  install(app) {
    var _a2, _b, _c;
    (_a2 = ButtonPlugin.install) == null ? void 0 : _a2.call(ButtonPlugin, app);
    (_b = FooPlugin.install) == null ? void 0 : _b.call(FooPlugin, app);
    (_c = ClipboardPlugin.install) == null ? void 0 : _c.call(ClipboardPlugin, app);
  }
};
export { Button, ButtonPlugin, Clipboard, ClipboardPlugin, Foo, FooPlugin, MYKitPlugin as default };
