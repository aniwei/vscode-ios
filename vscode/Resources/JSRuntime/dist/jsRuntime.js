/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineProperty = __webpack_require__(/*! ./defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n\nfunction _objectSpread(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n    var ownKeys = Object.keys(source);\n\n    if (typeof Object.getOwnPropertySymbols === 'function') {\n      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {\n        return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n      }));\n    }\n\n    ownKeys.forEach(function (key) {\n      defineProperty(target, key, source[key]);\n    });\n  }\n\n  return target;\n}\n\nmodule.exports = _objectSpread;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/objectSpread.js?");

/***/ }),

/***/ "./src/JSRuntime.js":
/*!**************************!*\
  !*** ./src/JSRuntime.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"./node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _keyCodeMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keyCodeMap */ \"./src/keyCodeMap.js\");\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared */ \"./src/shared.js\");\n\n\n\n\n\n\nvar ATTRIBUTE_NAME = 'jsRuntimeProperty';\n\nvar JSRumtime =\n/*#__PURE__*/\nfunction () {\n  function JSRumtime() {\n    var _this = this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, JSRumtime);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"onJavaScripBridgeReady\", function (bridge) {\n      _this.bridge = bridge;\n\n      _this.createNavigatorClipboard(_this.bridge);\n\n      _this.createWindowClipboard(_this.bridge);\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"onActiveElementBlur\", function () {\n      var activeElement = _this.activeElement;\n\n      if (activeElement) {\n        activeElement.removeAttribute(ATTRIBUTE_NAME);\n        activeElement.removeEventListener('input', _this.onActiveElementInput, false);\n        activeElement.removeEventListener('keydown', _this.onActiveElementKeyDown, false);\n        activeElement.removeEventListener('keyup', _this.onActiveElementKeyUp, false);\n      }\n\n      _this.activeElement = null;\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"onActiveElementInput\", function (e) {\n      console.log('input ===> ', e);\n    });\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"onActiveElementKeyDown\", function () {});\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"onActiveElementKeyUp\", function () {});\n\n    this.modifierKeysState = {\n      metaKey: false,\n      altKey: false,\n      ctrlKey: false,\n      shiftKey: false\n    };\n    this.id = 1;\n    this.isListenedEditor = false;\n    this.whenJavaScripBridgeReady(this.onJavaScripBridgeReady);\n    this.fixCopyExecCommand();\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(JSRumtime, [{\n    key: \"whenJavaScripBridgeReady\",\n    value: function whenJavaScripBridgeReady(callback) {\n      if (window.WebViewJavascriptBridge) {\n        return document.dispatchEvent(new Event('WebViewJSBridgeReady'));\n      }\n\n      if (window.WVJBCallbacks) {\n        return window.WVJBCallbacks.push(callback);\n      }\n\n      window.WVJBCallbacks = [callback];\n      var iframe = document.createElement('iframe');\n      iframe.style.display = 'none';\n      iframe.src = 'https://__bridge_loaded__';\n      document.documentElement.appendChild(iframe);\n      setTimeout(function () {\n        document.documentElement.removeChild(iframe);\n      }, 0);\n    }\n  }, {\n    key: \"fixCopyExecCommand\",\n    value: function fixCopyExecCommand() {\n      var execCommand = document.execCommand;\n      var commands = {\n        COPY: 'copy' // only support string data\n\n      };\n\n      document.execCommand = function () {\n        for (var _len = arguments.length, argv = new Array(_len), _key = 0; _key < _len; _key++) {\n          argv[_key] = arguments[_key];\n        }\n\n        var type = argv[0]; // safari can not tirgger copy event\n\n        if (type === commands.COPY) {\n          var event = new ClipboardEvent(type);\n          document.activeElement.dispatchEvent(event);\n        } else {\n          execCommand.apply(this, argv);\n        }\n      };\n    } // for copy event.\n\n  }, {\n    key: \"createWindowClipboard\",\n    value: function createWindowClipboard() {\n      Object.defineProperty(window, 'clipboardData', {\n        get: function get() {\n          return clipboardData;\n        }\n      });\n      var clipboardData = {\n        setData: function setData(mime, text) {\n          return navigator.clipboard.writeText(text);\n        },\n        getData: function getData(mime) {\n          return navigator.clipboard.readText(text);\n        }\n      };\n    }\n  }, {\n    key: \"createNavigatorClipboard\",\n    value: function createNavigatorClipboard(bridge) {\n      navigator.clipboard = {\n        readText: function readText() {\n          return new Promise(function (resolve, reject) {\n            bridge.callHandler('navigator.clipboard.readText', function (data) {\n              resolve(data);\n            });\n          });\n        },\n        writeText: function writeText(text) {\n          return new Promise(function (resolve, reject) {\n            bridge.callHandler('navigator.clipboard.writeText', {\n              content: text\n            }, function (data, callback) {\n              resolve();\n            });\n          });\n        }\n      };\n      navigator.permissions = {\n        query: function query() {\n          return new Promise(function (resolve, reject) {\n            var exports = {\n              onchange: function onchange() {},\n              state: 'granted'\n            };\n            resolve(exports);\n            exports.onchange();\n          });\n        }\n      };\n    }\n  }, {\n    key: \"getKey\",\n    value: function getKey(code) {\n      var key = this.getKeyCode(code);\n\n      if (key) {\n        if (key.code === 'Backquote') {\n          var esc = this.getKeyCode(41);\n\n          if (this.modifierKeysState.metaKey) {\n            return esc;\n          }\n        }\n\n        return key;\n      }\n    }\n  }, {\n    key: \"getKeyCode\",\n    value: function getKeyCode(code) {\n      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _keyCodeMap__WEBPACK_IMPORTED_MODULE_4__[\"default\"][code]);\n    }\n  }, {\n    key: \"updateModifierKeyState\",\n    value: function updateModifierKeyState(key, bool) {\n      if (_shared__WEBPACK_IMPORTED_MODULE_5__[\"modifierKeys\"].includes(key)) {\n        key = key === 'Control' ? 'ctrl' : key;\n        this.modifierKeysState[\"\".concat(key.toLowerCase(), \"Key\")] = bool;\n      }\n    }\n  }, {\n    key: \"updateEvent\",\n    value: function updateEvent(event) {\n      Object(_shared__WEBPACK_IMPORTED_MODULE_5__[\"assign\"])(event, this.modifierKeysState);\n\n      if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) {\n        event.isModifierEvent = true;\n      }\n\n      return event;\n    }\n  }, {\n    key: \"createEvent\",\n    value: function createEvent(type, key) {\n      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({\n        type: type || 'keydown'\n      }, key, {\n        bubbles: true,\n        cancelBubble: false,\n        composed: true,\n        eventPhase: 0,\n        isTrusted: true,\n        isComposing: false\n      });\n    }\n  }, {\n    key: \"dispatchEvent\",\n    value: function dispatchEvent(type, keyCode) {\n      var key = this.getKey(keyCode);\n      var event = this.createEvent(type || 'keydown', key);\n\n      if (key) {\n        if (type === 'keydown') {\n          if (key.isModifierKey) {\n            this.updateModifierKeyState(key.key, true);\n          } else {\n            this.updateEvent(event);\n          }\n        } else {\n          if (key.isModifierKey) {\n            this.updateModifierKeyState(key.key, false);\n          } else {\n            this.updateEvent(event);\n          }\n        }\n\n        var activeElement = document.activeElement;\n\n        if (activeElement) {\n          if (!activeElement.hasAttribute(ATTRIBUTE_NAME)) {\n            this.activeElement = activeElement;\n            activeElement.setAttribute(ATTRIBUTE_NAME, \"jsRuntime-\".concat(this.id++));\n            activeElement.addEventListener('blur', this.onActiveElementBlur, false);\n            activeElement.addEventListener('input', this.onActiveElementInput, false);\n            activeElement.addEventListener('keydown', this.onActiveElementKeyDown, false);\n            activeElement.addEventListener('keyup', this.onActiveElementKeyUp, false);\n          }\n\n          event.id = new Date() - 0;\n\n          if (key.isSupportKey) {\n            if (event.isModifierEvent) {\n              var evt = new KeyboardEvent(event.type, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, event));\n              activeElement.dispatchEvent(evt);\n            }\n          } else {\n            var evt = new KeyboardEvent(event.type, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, event));\n            activeElement.dispatchEvent(evt);\n\n            if (key.isTabKey) {\n              document.dispatchEvent(evt);\n              window.dispatchEvent(evt);\n            }\n          }\n\n          console.log(key);\n        }\n      }\n    }\n  }]);\n\n  return JSRumtime;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new JSRumtime());\n\n//# sourceURL=webpack:///./src/JSRuntime.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _JSRuntime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JSRuntime */ \"./src/JSRuntime.js\");\n\nwindow.jsRuntime = _JSRuntime__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/keyCodeMap.js":
/*!***************************!*\
  !*** ./src/keyCodeMap.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"./node_modules/@babel/runtime/helpers/objectSpread.js\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction createArrowKeys() {\n  var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var arrows = [{\n    key: 'ArrowRight',\n    keyCode: 39\n  }, {\n    key: 'ArrowLeft',\n    keyCode: 37\n  }, {\n    key: 'ArrowDown',\n    keyCode: 40\n  }, {\n    key: 'ArrowRight',\n    keyCode: 38\n  }];\n  arrows.forEach(function (arrow, i) {\n    map[79 + i] = {\n      code: arrow.key,\n      key: arrow.key,\n      keyCode: arrow.keyCode\n    };\n  });\n  return map;\n}\n\nfunction createModifierKeys() {\n  return {\n    '231': {\n      code: 'MetaRight',\n      key: 'Meta',\n      metaKey: true,\n      keyCode: 93,\n      location: 2,\n      isModifierKey: true\n    },\n    '227': {\n      code: 'MetaLeft',\n      key: 'Meta',\n      metaKey: true,\n      keyCode: 91,\n      location: 1,\n      isModifierKey: true\n    },\n    '226': {\n      code: 'AltLeft',\n      key: 'Alt',\n      altKey: true,\n      keyCode: 18,\n      location: 1,\n      isModifierKey: true\n    },\n    '230': {\n      code: 'AltRight',\n      key: 'Alt',\n      altKey: true,\n      keyCode: 18,\n      location: 2,\n      isModifierKey: true\n    },\n    '224': {\n      code: 'ControlLeft',\n      key: 'Control',\n      ctrlKey: true,\n      keyCode: 17,\n      location: 1,\n      isModifierKey: true\n    },\n    '228': {\n      code: 'ControlRight',\n      key: 'Control',\n      ctrlKey: true,\n      keyCode: 17,\n      location: 2,\n      isModifierKey: true\n    },\n    '225': {\n      code: 'ShiftLeft',\n      key: 'Shift',\n      shiftKey: true,\n      keyCode: 16,\n      which: 16,\n      charCode: 0,\n      location: 1,\n      isModifierKey: true\n    },\n    '229': {\n      code: 'ShiftRight',\n      key: 'Shift',\n      shiftKey: true,\n      keyCode: 16,\n      location: 2,\n      isModifierKey: true\n    }\n  };\n}\n\nfunction createDigitKeys() {\n  var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var digits = [{\n    key: 0,\n    code: 39,\n    keyCode: 48\n  }, {\n    key: 1,\n    code: 30,\n    keyCode: 49\n  }, {\n    key: 2,\n    code: 31,\n    keyCode: 50\n  }, {\n    key: 3,\n    code: 32,\n    keyCode: 51\n  }, {\n    key: 4,\n    code: 33,\n    keyCode: 52\n  }, {\n    key: 5,\n    code: 34,\n    keyCode: 53\n  }, {\n    key: 6,\n    code: 35,\n    keyCode: 54\n  }, {\n    key: 7,\n    code: 36,\n    keyCode: 55\n  }, {\n    key: 8,\n    code: 37,\n    keyCode: 56\n  }, {\n    key: 9,\n    code: 38,\n    keyCode: 57\n  }];\n  digits.forEach(function (digit) {\n    map[digit.code] = {\n      code: \"Digit\".concat(digit.key),\n      key: digit.code,\n      keyCode: digit.keyCode,\n      location: 1,\n      isDigit: true,\n      isSupportKey: true\n    };\n  });\n  return map;\n}\n\nfunction createAlphaKeys() {\n  var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var digits = 'abcdefghijklmnopqrstuvwxyz'.split('');\n  digits.forEach(function (digit, i) {\n    map[i + 4] = {\n      code: \"Key\".concat(digit.toUpperCase()),\n      key: digit,\n      keyCode: i + 4 + 61,\n      location: 1,\n      isAlpha: true,\n      isSupportKey: true\n    };\n  });\n  return map;\n}\n\nvar keyCodesMap = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({\n  '43': {\n    code: 'Tab',\n    key: 'Tab',\n    keyCode: 9,\n    isTabKey: true\n  },\n  '45': {\n    code: 'Minus',\n    key: '-',\n    keyCode: 189\n  },\n  '46': {\n    code: 'Equal',\n    key: '=',\n    keyCode: 187\n  },\n  '42': {\n    code: 'Backspace',\n    key: 'Backspace',\n    keyCode: 8,\n    isSupportKey: true\n  },\n  '53': {\n    code: 'Backquote',\n    key: '`',\n    keyCode: 192,\n    isSupportKey: true\n  },\n  '40': {\n    code: 'Enter',\n    key: 'Enter',\n    keyCode: 13,\n    isSupportKey: true\n  },\n  '54': {\n    code: 'Comma',\n    key: ',',\n    keyCode: 188,\n    isSupportKey: true\n  },\n  '55': {\n    code: 'Period',\n    key: '.',\n    keyCode: 190,\n    isSupportKey: true\n  },\n  '56': {\n    code: 'Slash',\n    key: '/',\n    keyCode: 191,\n    isSupportKey: true\n  },\n  '51': {\n    code: 'Semicolon',\n    key: ';',\n    keyCode: 186,\n    isSupportKey: true\n  },\n  '52': {\n    code: 'Quote',\n    key: '\\'',\n    keyCode: 222,\n    isSupportKey: true\n  },\n  '47': {\n    code: 'BracketLeft',\n    key: '[',\n    keyCode: 219,\n    isSupportKey: true\n  },\n  '48': {\n    code: 'BracketRight',\n    key: ']',\n    keyCode: 221,\n    isSupportKey: true\n  },\n  '49': {\n    code: 'Backslash',\n    key: '\\\\',\n    keyCode: 220,\n    isSupportKey: true\n  },\n  '41': {\n    code: 'Escape',\n    key: 'Escape',\n    keyCode: 27,\n    isEscapeKey: true,\n    isSupportKey: true\n  }\n}, createModifierKeys(), createArrowKeys(), createDigitKeys(), createAlphaKeys());\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (keyCodesMap);\n\n//# sourceURL=webpack:///./src/keyCodeMap.js?");

/***/ }),

/***/ "./src/shared.js":
/*!***********************!*\
  !*** ./src/shared.js ***!
  \***********************/
/*! exports provided: modifierKeys, alphaKeys, assign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modifierKeys\", function() { return modifierKeys; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"alphaKeys\", function() { return alphaKeys; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assign\", function() { return assign; });\nvar modifierKeys = ['Meta', 'Alt', 'Shift', 'Control'];\nvar alphaKeys = 'abcdefghijklmnopqrstuvwxyz'.split('');\nvar assign = Object.assign;\n\n//# sourceURL=webpack:///./src/shared.js?");

/***/ })

/******/ });