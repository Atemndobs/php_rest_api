// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/config.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logPar = exports.userPass = exports.userEmail = exports.role = exports.password = exports.email = exports.baseURL = void 0;
var baseURL = 'https://127.0.0.1:8000';
exports.baseURL = baseURL;
var email = 'usamoJS@email.com';
exports.email = email;
var password = 'user';
exports.password = password;
var role = 'ROLE_USER';
exports.role = role;
var userEmail = document.getElementById('name');
exports.userEmail = userEmail;
var userPass = document.getElementById('password');
exports.userPass = userPass;
var logPar = 'ATEM';
exports.logPar = logPar;
},{}],"actions/Register.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Register = void 0;

var _config = require("../src/config.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//import axios from 'axios'
var Register =
/*#__PURE__*/
function () {
  function Register() {
    _classCallCheck(this, Register);
  }

  _createClass(Register, null, [{
    key: "register",
    value: function register() {
      var params = new URLSearchParams();
      params.append('email', _config.email);
      params.append('password', _config.password);
      var config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };
      axios.post(_config.baseURL + '/register', params, config).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    }
  }]);

  return Register;
}();

exports.Register = Register;
},{"../src/config.js":"src/config.js"}],"actions/Login.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Login = void 0;

var _config = require("../src/config.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//import axios from 'axios'
var Login =
/*#__PURE__*/
function () {
  function Login() {
    var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, Login);

    if (action !== null) {
      // send Token header
      this.sendTokenHeader().then(function () {
        // call action
        eval("this." + action + "()");
      });
    }
  }

  _createClass(Login, [{
    key: "sendTokenHeader",
    value: function sendTokenHeader() {
      return new Promise(function (resolve) {
        axios.defaults.headers.common = {
          'Authorization': 'Bearer ' + localStorage.getItem('jwt_token')
        };
        resolve();
      });
    }
  }, {
    key: "getJWTToken",
    value: function getJWTToken() // login
    {
      var _this = this;

      return new Promise(function (resolve) {
        var params = {
          "email": _config.userEmail.value,
          "password": _config.userPass.value
        };
        var config = {
          headers: {
            'accept': 'application/json'
          }
        };
        axios.post(_config.baseURL + '/authentication_token', params, config).then(function (response) {
          localStorage.setItem("jwt_token", response.data.token);
          localStorage.setItem("user_id", response.data.id);
          console.log(response.data.token);
        }).catch(function (error) {
          if (error.response.status === 401) {
            _this.handle401Error();
          }

          resolve();
        });
      });
    }
  }, {
    key: "logout",
    value: function logout() {
      return new Promise(function (resolve) {
        localStorage.removeItem('jwt_token');
        localStorage.removeItem('user_id');
        resolve();
      });
    }
  }, {
    key: "login",
    value: function login() {
      this.getJWTToken();
    }
  }, {
    key: "handle401Error",
    value: function handle401Error() {
      var p = document.getElementById("needs-login");
      p.style.display = "block";
      var a = document.createElement('a');
      a.style.color = "#FF0000";
      var linkText = document.createTextNode("Invalid Authorization, click to login");
      a.appendChild(linkText);
      a.href = "#";
      p.appendChild(a);
      document.body.appendChild(p);
    }
  }]);

  return Login;
}();

exports.Login = Login;
},{"../src/config.js":"src/config.js"}],"actions/offer/AddOffer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddOffer = void 0;

var _config = require("../../src/config.js");

var _Login2 = require("../Login.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

//const axios = require('axios').default;
var offerUrl = '/api/offers?pagination=false';

var AddOffer =
/*#__PURE__*/
function (_Login) {
  _inherits(AddOffer, _Login);

  function AddOffer(url, price, priceCurrency, product_id) {
    var _this;

    _classCallCheck(this, AddOffer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AddOffer).call(this, 'AddOffer'));
    _this.url = url;
    _this.price = price;
    _this.priceCurrency = priceCurrency;
    _this.productID = product_id;
    return _this;
  }

  _createClass(AddOffer, [{
    key: "AddOffer",
    value: function AddOffer() {
      var _this2 = this;

      var params = {
        "url": this.url,
        "price": this.price,
        "priceCurrency": this.priceCurrency,
        "product": "api/products/" + this.productID
      };
      var config = {
        headers: {
          'accept': 'application/ld+json',
          'Content-Type': 'application/ld+json'
        }
      };
      axios.post(_config.baseURL + offerUrl, params, config).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        if (error.response.status === 401) {
          _this2.handle401Error();
        }
      });
    }
  }]);

  return AddOffer;
}(_Login2.Login);

exports.AddOffer = AddOffer;
},{"../../src/config.js":"src/config.js","../Login.js":"actions/Login.js"}],"actions/offer/selector.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addOptionElement = addOptionElement;

function addOptionElement(text, value, elementCreate, elementId) {
  var option = document.createElement(elementCreate);
  option.text = text;
  option.value = value;
  var select = document.getElementById(elementId);
  select.appendChild(option);
}
},{}],"actions/offer/GetOffers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetOffers = void 0;

var _config = require("../../src/config.js");

var _selector = require("./selector.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//const axios = require('axios').default;
var GetOffers = function GetOffers() {
  _classCallCheck(this, GetOffers);

  var userId = localStorage.getItem('user_id');
  if (userId === null) return;
  axios.get(_config.baseURL + '/api/users/' + userId + '/offers').then(function (response) {
    response.data['hydra:member'].forEach(function (offer) {
      (0, _selector.addOptionElement)(offer.url, offer['@id'], "option", "delete-offer");
    });
  }).catch(function (error) {
    console.log(error);
  });
};

exports.GetOffers = GetOffers;
},{"../../src/config.js":"src/config.js","./selector.js":"actions/offer/selector.js"}],"actions/offer/DeleteOffer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteOffer = void 0;

var _config = require("../../src/config.js");

var _Login2 = require("../Login.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DeleteOffer =
/*#__PURE__*/
function (_Login) {
  _inherits(DeleteOffer, _Login);

  function DeleteOffer(delete_url) {
    var _this;

    _classCallCheck(this, DeleteOffer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DeleteOffer).call(this, 'DeleteOffer'));
    _this.delete_url = delete_url;
    return _this;
  }

  _createClass(DeleteOffer, [{
    key: "DeleteOffer",
    value: function DeleteOffer() {
      var _this2 = this;

      axios.delete(_config.baseURL + this.delete_url).then(function (response) {
        console.log(response);
        alert('deleted offer Id : ' + response.status);
      }).catch(function (error) {
        if (error.response.status === 401) {
          _this2.handle401Error();
        }
      });
    }
  }]);

  return DeleteOffer;
}(_Login2.Login);

exports.DeleteOffer = DeleteOffer;
},{"../../src/config.js":"src/config.js","../Login.js":"actions/Login.js"}],"actions/Products.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Products = void 0;

var _config = require("../src/config.js");

var _selector = require("./offer/selector.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import axios from 'axios';
var productsUrl = '/api/products';

var Products = function Products() {
  _classCallCheck(this, Products);

  axios.get(_config.baseURL + productsUrl + '?pagination=false').then(function (response) {
    response.data['hydra:member'].forEach(function (product) {
      //   this.addOptionElement(product.name, product.id)
      (0, _selector.addOptionElement)(product.name, product.id, "option", "product");
    });
  }).catch(function (error) {
    console.log(error);
  });
}
/*    addOptionElement(text, value)
    {
        let option = document.createElement("option");
        option.text = text;
        option.value = value;
        let select = document.getElementById("product");

        select.appendChild(option);
    }*/
;

exports.Products = Products;
},{"../src/config.js":"src/config.js","./offer/selector.js":"actions/offer/selector.js"}],"app.js":[function(require,module,exports) {
"use strict";

var _Register = require("./actions/Register.js");

var _AddOffer = require("./actions/offer/AddOffer.js");

var _GetOffers = require("./actions/offer/GetOffers.js");

var _DeleteOffer = require("./actions/offer/DeleteOffer.js");

var _Login = require("./actions/Login.js");

var _Products = require("./actions/Products.js");

var nameField = document.getElementById('name');
var passField = document.getElementById('password');
var signout = document.getElementById('logout');
signout.style.display = 'none';
var login = new _Login.Login();
var signin = document.getElementById('login');
signin.addEventListener('click', function () {
  login.getJWTToken();
  passField.style.display = 'none';
  nameField.style.display = 'none';
  signin.style.display = 'none';
  signout.style.display = 'block';
});
signout.addEventListener('click', function () {
  login.logout();
  passField.style.display = 'block';
  nameField.style.display = 'block';
  signin.style.display = 'block';
  signout.style.display = 'none';
}); //login.logout();
//Register.register();

window.onload = function () {
  var needsLogin = document.getElementById("needs-login");
  needsLogin.addEventListener("click", function () {
    var login = new _Login.Login();
    login.logout().then(function () {
      login.login();
      needsLogin.style.display = "none";
    });
  });
};

new _Products.Products();
var addOffer = document.getElementById("add-offer");
addOffer.addEventListener("click", function () {
  var url = document.getElementById("url");
  var price = document.getElementById("price");
  var currency = document.getElementById("currency");
  var product = document.getElementById("product");
  var product_id = product.options[product.selectedIndex].value;
  new _AddOffer.AddOffer(url.value, parseFloat(price.value), currency.value, product_id);
});
new _GetOffers.GetOffers();
var deleteOffer = document.getElementById("delete-offer-button");
deleteOffer.addEventListener("click", function () {
  var offer = document.getElementById("delete-offer");
  var offer_id = offer.options[offer.selectedIndex].value;
  new _DeleteOffer.DeleteOffer(offer_id);
});
},{"./actions/Register.js":"actions/Register.js","./actions/offer/AddOffer.js":"actions/offer/AddOffer.js","./actions/offer/GetOffers.js":"actions/offer/GetOffers.js","./actions/offer/DeleteOffer.js":"actions/offer/DeleteOffer.js","./actions/Login.js":"actions/Login.js","./actions/Products.js":"actions/Products.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "32801" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map