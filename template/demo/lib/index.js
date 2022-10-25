import { Fragment as Fragment$1, render, h } from 'preact';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
function __createBinding(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
}
function __exportStar(m, exports) {
  for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
  return r;
}
;
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
    i,
    q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;
  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
    i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
;
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result.default = mod;
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}
function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var wrapNativeSuper = {exports: {}};

var getPrototypeOf = {exports: {}};

(function (module) {
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    return _getPrototypeOf(o);
  }

  module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(getPrototypeOf);

var _getPrototypeOf = /*@__PURE__*/getDefaultExportFromCjs(getPrototypeOf.exports);

var setPrototypeOf = {exports: {}};

(function (module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    return _setPrototypeOf(o, p);
  }

  module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(setPrototypeOf);

var isNativeFunction = {exports: {}};

(function (module) {
  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(isNativeFunction);

var construct = {exports: {}};

var isNativeReflectConstruct = {exports: {}};

(function (module) {
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(isNativeReflectConstruct);

(function (module) {
  var setPrototypeOf$1 = setPrototypeOf.exports;
  var isNativeReflectConstruct$1 = isNativeReflectConstruct.exports;

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct$1()) {
      module.exports = _construct = Reflect.construct.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
    } else {
      module.exports = _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) setPrototypeOf$1(instance, Class.prototype);
        return instance;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }

    return _construct.apply(null, arguments);
  }

  module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(construct);

(function (module) {
  var getPrototypeOf$1 = getPrototypeOf.exports;
  var setPrototypeOf$1 = setPrototypeOf.exports;
  var isNativeFunction$1 = isNativeFunction.exports;
  var construct$1 = construct.exports;

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !isNativeFunction$1(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return construct$1(Class, arguments, getPrototypeOf$1(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return setPrototypeOf$1(Wrapper, Class);
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    return _wrapNativeSuper(Class);
  }

  module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(wrapNativeSuper);

var _wrapNativeSuper = /*@__PURE__*/getDefaultExportFromCjs(wrapNativeSuper.exports);

var defineProperty = {exports: {}};

(function (module) {
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(defineProperty);

var _defineProperty = /*@__PURE__*/getDefaultExportFromCjs(defineProperty.exports);

var classCallCheck = {exports: {}};

(function (module) {
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(classCallCheck);

var _classCallCheck = /*@__PURE__*/getDefaultExportFromCjs(classCallCheck.exports);

var createClass = {exports: {}};

(function (module) {
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(createClass);

var _createClass = /*@__PURE__*/getDefaultExportFromCjs(createClass.exports);

var assertThisInitialized = {exports: {}};

(function (module) {
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(assertThisInitialized);

var _assertThisInitialized = /*@__PURE__*/getDefaultExportFromCjs(assertThisInitialized.exports);

var inherits = {exports: {}};

(function (module) {
  var setPrototypeOf$1 = setPrototypeOf.exports;

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) setPrototypeOf$1(subClass, superClass);
  }

  module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(inherits);

var _inherits = /*@__PURE__*/getDefaultExportFromCjs(inherits.exports);

var possibleConstructorReturn = {exports: {}};

var _typeof = {exports: {}};

(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
  }

  module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(_typeof);

(function (module) {
  var _typeof$1 = _typeof.exports["default"];
  var assertThisInitialized$1 = assertThisInitialized.exports;

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return assertThisInitialized$1(self);
  }

  module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(possibleConstructorReturn);

var _possibleConstructorReturn = /*@__PURE__*/getDefaultExportFromCjs(possibleConstructorReturn.exports);

var DblKeyMap = /*#__PURE__*/function () {
  function DblKeyMap() {
    _classCallCheck(this, DblKeyMap);

    _defineProperty(this, "map", new Map());
  }

  _createClass(DblKeyMap, [{
    key: "get",
    value: function get(key1, key2) {
      var subMap = this.map.get(key1);

      if (subMap) {
        return subMap.get(key2);
      }
    }
  }, {
    key: "set",
    value: function set(key1, key2, value) {
      var _subMap;

      var subMap = this.map.get(key1);

      if (!subMap) {
        subMap = new Map();
        this.map.set(key1, subMap);
      }

      (_subMap = subMap) === null || _subMap === void 0 ? void 0 : _subMap.set(key2, value);
    }
  }, {
    key: "forEach",
    value: function forEach(cb) {
      this.map.forEach(function (subMap, key1) {
        subMap.forEach(function (value, key2) {
          cb(value, key1, key2);
        });
      });
    }
  }, {
    key: "delete",
    value: function _delete(key1) {
      this.map["delete"](key1);
    }
  }, {
    key: "deleteAll",
    value: function deleteAll() {
      var _this = this;

      this.map.forEach(function (_, key1) {
        _this.map["delete"](key1);
      });
    }
  }]);

  return DblKeyMap;
}();

var EventController = /*#__PURE__*/_createClass(function EventController() {
  var _this = this;

  _classCallCheck(this, EventController);

  _defineProperty(this, "eventMap", new DblKeyMap());

  _defineProperty(this, "bindListener", function (el, eventName, eventHandler) {
    if (!el || !eventName || !eventHandler) {
      return;
    }

    var list = _this.eventMap.get(el, eventName);

    if (!list) {
      list = new Set();

      _this.eventMap.set(el, eventName, list);
    }

    if (!list.has(eventHandler)) {
      list.add(eventHandler);
      el.addEventListener(eventName, eventHandler, true);
    }
  });

  _defineProperty(this, "removeAllListener", function () {
    _this.eventMap.forEach(function (list, el, eventName) {
      list.forEach(function (handler) {
        el.removeEventListener(eventName, handler);
      });
    });

    _this.eventMap.deleteAll();
  });
});

var delay = (function (func) {
  var t;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (t) {
      clearTimeout(t);
    }

    t = setTimeout(function () {
      func.apply(void 0, args);
    });
  };
});

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Fragment = Fragment$1;

var isEmpty = function isEmpty(val) {
  return !(val || val === false || val === 0);
};

var defaultConverter = function defaultConverter(value, type) {
  var newValue = value;

  switch (type) {
    case Number:
      newValue = isEmpty(value) ? value : Number(value);
      break;

    case Boolean:
      newValue = !([null, 'false', false, undefined].indexOf(value) > -1);
      break;
  }

  return newValue;
};

var defaultPropertyDeclaration = {
  observed: true,
  type: String,
  converter: defaultConverter
};
var property = function property() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (target, name) {
    return target.constructor.createProperty(name, options);
  };
};
var state = function state() {
  return function (target, name) {
    return target.constructor.createState(name);
  };
};
var ElementProperties = new DblKeyMap();
var Descriptors = new DblKeyMap();
function customElement(params) {
  var _ref = typeof params === 'string' ? {
    tag: params
  } : params,
      tag = _ref.tag,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? '' : _ref$style;

  return function (target) {
    var NewQuarkElement = /*#__PURE__*/function (_target) {
      _inherits(NewQuarkElement, _target);

      var _super = _createSuper(NewQuarkElement);

      function NewQuarkElement() {
        var _this;

        _classCallCheck(this, NewQuarkElement);

        _this = _super.call(this);

        if (style) {
          _this.getStyles = function () {
            return style;
          };
        }

        var shadowRoot = _this.attachShadow({
          mode: 'open'
        });

        if (shadowRoot) {
          if (typeof _this.getStyles === 'function') {
            var styleEl = document.createElement('style');
            styleEl.innerHTML = _this.getStyles();
            shadowRoot.append(styleEl);
          }
        }

        Descriptors.forEach(function (descriptorCreator, constructor, propertyName) {
          if (constructor === target) {
            Object.defineProperty(_assertThisInitialized(_this), propertyName, descriptorCreator(_this[propertyName]));
          }
        });
        return _this;
      }

      _createClass(NewQuarkElement, null, [{
        key: "observedAttributes",
        get: function get() {
          var attributes = [];
          ElementProperties.forEach(function (elOption, constructor, elName) {
            if (constructor === target && elOption.observed) {
              attributes.push(elName);
            }
          });
          return attributes;
        }
      }, {
        key: "isBooleanProperty",
        value: function isBooleanProperty(propertyName) {
          var isBoolean = false;
          ElementProperties.forEach(function (elOption, constructor, elName) {
            if (constructor === target && elOption.type === Boolean && propertyName === elName) {
              isBoolean = true;
              return isBoolean;
            }
          });
          return isBoolean;
        }
      }]);

      return NewQuarkElement;
    }(target);

    if (!customElements.get(tag)) {
      customElements.define(tag, NewQuarkElement);
    }
  };
}

var QuarkElement = /*#__PURE__*/function (_HTMLElement) {
  _inherits(QuarkElement, _HTMLElement);

  var _super2 = _createSuper(QuarkElement);

  function QuarkElement() {
    var _this2;

    _classCallCheck(this, QuarkElement);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this2), "eventController", new EventController());

    _defineProperty(_assertThisInitialized(_this2), "rootPatch", function (newRootVNode) {
      if (_this2.shadowRoot) {
        render(newRootVNode, _this2.shadowRoot);
      }
    });

    _defineProperty(_assertThisInitialized(_this2), "delayPatch", delay(_this2.rootPatch));

    _defineProperty(_assertThisInitialized(_this2), "$on", function (eventName, eventHandler, el) {
      return _this2.eventController.bindListener(el || _assertThisInitialized(_this2), eventName, eventHandler);
    });

    return _this2;
  }

  _createClass(QuarkElement, [{
    key: "getStyles",
    value: function getStyles() {
      return '';
    }
  }, {
    key: "getRootEl",
    value: function getRootEl() {
      var _this$shadowRoot;

      return [].slice.call(((_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 ? void 0 : _this$shadowRoot.children) || []).slice(1);
    }
  }, {
    key: "_render",
    value: function _render() {
      var newRootVNode = this.render();

      if (newRootVNode) {
        this.rootPatch(newRootVNode);
      }
    }
  }, {
    key: "_updateProperty",
    value: function _updateProperty() {
      var _this3 = this;

      this.constructor.observedAttributes.forEach(function (propertyName) {
        _this3[propertyName] = _this3[propertyName];
      });
    }
  }, {
    key: "_updateBooleanProperty",
    value: function _updateBooleanProperty(propertyName) {
      if (this.constructor.isBooleanProperty(propertyName)) {
        if (!this[propertyName]) {
          this[propertyName] = this[propertyName];
        }
      }
    }
  }, {
    key: "$emit",
    value: function $emit(eventName, customEventInit) {
      return this.dispatchEvent(new CustomEvent(eventName, Object.assign({
        bubbles: true
      }, customEventInit)));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(propName, oldValue, newValue) {
      return oldValue !== newValue;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(propName, oldValue, newValue) {}
  }, {
    key: "render",
    value: function render() {
      return '';
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this._updateProperty();

      this._render();

      if (typeof this.componentDidMount === 'function') {
        this.componentDidMount();
      }
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, value) {
      var newValue = this[name] || value;

      if (typeof this.shouldComponentUpdate === 'function') {
        if (!this.shouldComponentUpdate(name, oldValue, newValue)) {
          return;
        }
      }

      this._render();

      if (typeof this.componentDidUpdate === 'function') {
        this.componentDidUpdate(name, oldValue, newValue);
      }

      if (value !== oldValue) {
        this._updateBooleanProperty(name);
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      if (typeof this.componentWillUnmount === 'function') {
        this.componentWillUnmount();
      }

      this.eventController.removeAllListener();
      this.rootPatch(null);
    }
  }], [{
    key: "getPropertyDescriptor",
    value: function getPropertyDescriptor(name, options) {
      return function (defaultValue) {
        return {
          get: function get() {
            var val = this.getAttribute(name);

            if (!isEmpty(defaultValue)) {
              if (isEmpty(val) && (options.type !== Boolean || val !== '')) {
                return defaultValue;
              }
            }

            if (typeof options.converter === 'function') {
              val = options.converter(val, options.type);
            }

            return val;
          },
          set: function set(value) {
            var val = value;

            if (typeof options.converter === 'function') {
              val = options.converter(value, options.type);
            }

            if (val) {
              if (typeof val === "boolean") {
                this.setAttribute(name, '');
              } else {
                this.setAttribute(name, val);
              }
            } else {
              this.removeAttribute(name);
            }
          },
          configurable: true,
          enumerable: true
        };
      };
    }
  }, {
    key: "getStateDescriptor",
    value: function getStateDescriptor() {
      return function (defaultValue) {
        var _value = defaultValue;
        return {
          get: function get() {
            return _value;
          },
          set: function set(value) {
            _value = value;

            this._render();
          },
          configurable: true,
          enumerable: true
        };
      };
    }
  }, {
    key: "createProperty",
    value: function createProperty(name, options) {
      var newOpt = Object.assign({}, defaultPropertyDeclaration, options);
      ElementProperties.set(this, name, newOpt);
      Descriptors.set(this, name, this.getPropertyDescriptor(name, newOpt));
    }
  }, {
    key: "createState",
    value: function createState(name) {
      Descriptors.set(this, name, this.getStateDescriptor());
    }
  }]);

  return QuarkElement;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

_defineProperty(QuarkElement, "h", h);

var css_248z = ":host {\n  max-width: 341.33333vw;\n  margin: 0 auto;\n  padding: 2rem;\n  text-align: center;\n  /* border: 1px dashed #a352f9; */\n}\n\na {\n  font-weight: 500;\n  color: #646cff;\n  text-decoration: inherit;\n}\na:hover {\n  color: #535bf2;\n}\n\nh1 {\n  font-size: 3.2em;\n  line-height: 1.1;\n}\n\n.logo {\n  height: 6em;\n  padding: 1.5em;\n  will-change: filter;\n}\n.logo:hover {\n  filter: drop-shadow(0 0 2em #646cffaa);\n}\n.logo.vanilla:hover {\n  filter: drop-shadow(0 0 2em #f7df1eaa);\n}\n\n.card {\n  padding: 2em;\n}\n\n.read-the-docs {\n  color: #888;\n}\n\nbutton {\n  border-radius: 2.13333vw;\n  border: 1px solid transparent;\n  padding: 0.6em 1.2em;\n  font-size: 1em;\n  font-weight: 500;\n  font-family: inherit;\n  background-color: #1a1a1a;\n  cursor: pointer;\n  transition: border-color 0.25s;\n}\nbutton:hover {\n  border-color: #646cff;\n}\nbutton:focus,\nbutton:focus-visible {\n  outline: 1.06667vw auto -webkit-focus-ring-color;\n}\n\n@media (prefers-color-scheme: light) {\n  :root {\n    color: #213547;\n    background-color: #ffffff;\n  }\n  a:hover {\n    color: #747bff;\n  }\n  button {\n    background-color: #f9f9f9;\n  }\n}\n";

let MyComponent = class MyComponent extends QuarkElement {
  counter = 0;
  atitle = '';
  componentDidMount() {
    console.log(this.atitle, 333);
  }
  handleClick = () => {
    this.counter++;
  };
  render() {
    return QuarkElement.h("div", null, QuarkElement.h("a", {
      href: 'https://quark-design.hellobike.com',
      target: '_blank'
    }, QuarkElement.h("img", {
      src: 'https://m.hellobike.com/resource/helloyun/12395/0USLE_quark.png?x-oss-process=image/quality,q_80',
      className: 'logo vanilla',
      alt: 'JavaScript logo'
    })), QuarkElement.h("h1", null, this.atitle), QuarkElement.h("div", {
      class: 'card'
    }, QuarkElement.h("button", {
      onClick: this.handleClick,
      type: 'button'
    }, "count is ", this.counter)), QuarkElement.h("p", {
      class: 'read-the-docs'
    }, "Click on the Quark logo to learn more"));
  }
};
__decorate([state()], MyComponent.prototype, "counter", void 0);
__decorate([property()], MyComponent.prototype, "atitle", void 0);
MyComponent = __decorate([customElement({
  tag: 'my-component',
  style: css_248z
})], MyComponent);
var MyComponent$1 = MyComponent;

export { MyComponent$1 as MyComponent };
