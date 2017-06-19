require("source-map-support").install();
module.exports =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 92);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(74);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(75);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Isomorphic CSS style loader for Webpack
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var prefix = 's';
var inserted = {};

// Base64 encoding and decoding - The "Unicode Problem"
// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

/**
 * Remove style/link elements for specified node IDs
 * if they are no longer referenced by UI components.
 */
function removeCss(ids) {
  ids.forEach(function (id) {
    if (--inserted[id] <= 0) {
      var elem = document.getElementById(prefix + id);
      if (elem) {
        elem.parentNode.removeChild(elem);
      }
    }
  });
}

/**
 * Example:
 *   // Insert CSS styles object generated by `css-loader` into DOM
 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
 *
 *   // Remove it from the DOM
 *   removeCss();
 */
function insertCss(styles) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$replace = _ref.replace,
      replace = _ref$replace === undefined ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === undefined ? false : _ref$prepend;

  var ids = [];
  for (var i = 0; i < styles.length; i++) {
    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];

    var id = moduleId + '-' + i;

    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;

    var elem = document.getElementById(prefix + id);
    var create = false;

    if (!elem) {
      create = true;

      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = prefix + id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;
    if (sourceMap && typeof btoa === 'function') {
      // skip IE9 and below, see http://caniuse.com/atob-btoa
      cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
      cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_normalize_css__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Layout_css__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Layout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Layout_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Header__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Footer__ = __webpack_require__(18);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/components/Layout/Layout.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





// external-global styles must be imported in your JS.





class Layout extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_4__Layout_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        { className: __WEBPACK_IMPORTED_MODULE_4__Layout_css___default.a.mainContainer, __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        },
        this.props.children
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      })
    );
  }
}

Layout.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3_normalize_css___default.a, __WEBPACK_IMPORTED_MODULE_4__Layout_css___default.a)(Layout));

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(28);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/components/Link/Link.js';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

class Link extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleClick = event => {
      if (this.props.onClick) {
        this.props.onClick(event);
      }

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }

      if (event.defaultPrevented === true) {
        return;
      }

      event.preventDefault();
      __WEBPACK_IMPORTED_MODULE_2__history__["a" /* default */].push(this.props.to);
    }, _temp;
  }

  render() {
    const _props = this.props,
          { to, children } = _props,
          props = _objectWithoutProperties(_props, ['to', 'children']);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      _extends({ href: to }, props, { onClick: this.handleClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }),
      children
    );
  }
}

Link.propTypes = {
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired,
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};
Link.defaultProps = {
  onClick: null
};
/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */

if (false) {
  throw new Error('Do not import `config.js` from inside the client-side code.');
}

module.exports = {
  // Node.js app
  port: process.env.PORT || 3000,

  // API Gateway
  api: {
    // API URL to be used in the client-side code
    clientUrl: process.env.API_CLIENT_URL || '',
    // API URL to be used in the server-side code
    serverUrl: process.env.API_SERVER_URL || `http://localhost:${process.env.PORT || 3000}`
  },

  // Web analytics
  analytics: {
    // https://analytics.google.com/
    googleTrackingId: process.env.GOOGLE_TRACKING_ID },

  // Authentication
  auth: {
    jwt: { secret: process.env.JWT_SECRET || 'some super secret secret' },

    // https://developers.facebook.com/
    facebook: {
      id: process.env.FACEBOOK_APP_ID || '186244551745631',
      secret: process.env.FACEBOOK_APP_SECRET || 'a970ae3240ab4b9b8aae0f9f0661c6fc'
    },

    // https://cloud.google.com/console/project
    google: {
      id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
      secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd'
    },

    // https://apps.twitter.com/
    twitter: {
      key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
      secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ'
    }
  }
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable import/prefer-default-export */

const SET_RUNTIME_VARIABLE = 'SET_RUNTIME_VARIABLE';
/* harmony export (immutable) */ __webpack_exports__["a"] = SET_RUNTIME_VARIABLE;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(54);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./ErrorPage.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./ErrorPage.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_jwt__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_express_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_express_graphql__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_express_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_express_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom_server__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_pretty_error__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_pretty_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_pretty_error__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_App__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Html__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routes_error_ErrorPage__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routes_error_ErrorPage_css__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routes_error_ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__routes_error_ErrorPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__createFetch__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__assets_json__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__assets_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__assets_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__store_configureStore__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__actions_runtime__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__config__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__config__);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/server.js',
    _this = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
















 // eslint-disable-line import/no-unresolved




const app = __WEBPACK_IMPORTED_MODULE_1_express___default()();

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(__WEBPACK_IMPORTED_MODULE_1_express___default.a.static(__WEBPACK_IMPORTED_MODULE_0_path___default.a.join(__dirname, 'public')));
app.use(__WEBPACK_IMPORTED_MODULE_2_cookie_parser___default()());
app.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.urlencoded({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.json());

//
// Authentication
// -----------------------------------------------------------------------------
app.use(__WEBPACK_IMPORTED_MODULE_4_express_jwt___default()({
  secret: __WEBPACK_IMPORTED_MODULE_18__config___default.a.auth.jwt.secret,
  credentialsRequired: false,
  getToken: req => req.cookies.id_token
}));
// Error handler for express-jwt
app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  if (err instanceof __WEBPACK_IMPORTED_MODULE_4_express_jwt__["UnauthorizedError"]) {
    console.error('[express-jwt-error]', req.cookies.id_token);
    // `clearCookie`, otherwise user can't use web-app until cookie expires
    res.clearCookie('id_token');
  }
  next(err);
});

if (true) {
  app.enable('trust proxy');
}

//
// Register API middleware
// -----------------------------------------------------------------------------
app.use('/graphql', __WEBPACK_IMPORTED_MODULE_5_express_graphql___default()(req => ({
  graphiql: true,
  rootValue: { request: req },
  pretty: true
})));

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', (() => {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    try {
      const css = new Set();

      const fetch = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__createFetch__["a" /* default */])({
        baseUrl: __WEBPACK_IMPORTED_MODULE_18__config___default.a.api.serverUrl,
        cookie: req.headers.cookie
      });

      const initialState = {
        user: req.user || null
      };

      const store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__store_configureStore__["a" /* default */])(initialState, {
        fetch
      });

      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_17__actions_runtime__["a" /* setRuntimeVariable */])({
        name: 'initialNow',
        value: Date.now()
      }));

      // Global (context) variables that can be easily accessed from any React component
      // https://facebook.github.io/react/docs/context.html
      const context = {
        // Enables critical path CSS rendering
        // https://github.com/kriasoft/isomorphic-style-loader
        insertCss: function (...styles) {
          // eslint-disable-next-line no-underscore-dangle
          styles.forEach(function (style) {
            return css.add(style._getCss());
          });
        },
        fetch,
        // You can access redux through react-redux connect
        store,
        storeSubscription: null
      };

      const route = yield __WEBPACK_IMPORTED_MODULE_14__router__["a" /* default */].resolve(_extends({}, context, {
        path: req.path,
        query: req.query
      }));

      if (route.redirect) {
        res.redirect(route.status || 302, route.redirect);
        return;
      }

      const data = _extends({}, route);
      data.children = __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default.a.renderToString(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_9__components_App__["a" /* default */],
        { context: context, store: store, __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: _this
        },
        route.component
      ));
      data.styles = [{ id: 'css', cssText: [...css].join('') }];
      data.scripts = [__WEBPACK_IMPORTED_MODULE_15__assets_json___default.a.vendor.js, __WEBPACK_IMPORTED_MODULE_15__assets_json___default.a.client.js];
      if (__WEBPACK_IMPORTED_MODULE_15__assets_json___default.a[route.chunk]) {
        data.scripts.push(__WEBPACK_IMPORTED_MODULE_15__assets_json___default.a[route.chunk].js);
      }
      data.app = {
        apiUrl: __WEBPACK_IMPORTED_MODULE_18__config___default.a.api.clientUrl,
        state: context.store.getState()
      };

      const html = __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Html__["a" /* default */], _extends({}, data, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: _this
      })));
      res.status(route.status || 200);
      res.send(`<!doctype html>${html}`);
    } catch (err) {
      next(err);
    }
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})());

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new __WEBPACK_IMPORTED_MODULE_8_pretty_error___default.a();
pe.skipNodeFiles();
pe.skipPackage('express');

app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  console.error(pe.render(err));
  const html = __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_10__components_Html__["a" /* default */],
    {
      title: 'Internal Server Error',
      description: err.message,
      styles: [{ id: 'css', cssText: __WEBPACK_IMPORTED_MODULE_12__routes_error_ErrorPage_css___default.a._getCss() }] // eslint-disable-line no-underscore-dangle
      , __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default.a.renderToString(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__routes_error_ErrorPage__["a" /* ErrorPageWithoutStyle */], { error: err, __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: _this
    }))
  ));
  res.status(err.status || 500);
  res.send(`<!doctype html>${html}`);
});

//
// Launch the server
// -----------------------------------------------------------------------------
app.listen(__WEBPACK_IMPORTED_MODULE_18__config___default.a.port, () => {
  console.info(`The server is running at http://localhost:${__WEBPACK_IMPORTED_MODULE_18__config___default.a.port}/`);
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setRuntimeVariable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(9);
/* eslint-disable import/prefer-default-export */



function setRuntimeVariable({ name, value }) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* SET_RUNTIME_VARIABLE */],
    payload: {
      name,
      value
    }
  };
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





const ContextType = _extends({
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  // Universal HTTP client
  fetch: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
}, __WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"].childContextTypes);

/**
 * The top-level React component setting context (global) variables
 * that can be accessed from all the child components.
 *
 * https://facebook.github.io/react/docs/context.html
 *
 * Usage example:
 *
 *   const context = {
 *     history: createBrowserHistory(),
 *     store: createStore(),
 *   };
 *
 *   ReactDOM.render(
 *     <App context={context}>
 *       <Layout>
 *         <LandingPage />
 *       </Layout>
 *     </App>,
 *     container,
 *   );
 */
class App extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent {

  getChildContext() {
    return this.props.context;
  }

  render() {
    // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only(this.props.children);
  }

}

App.propTypes = {
  context: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape(ContextType).isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
};
App.childContextTypes = ContextType;
/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CompareItems_css__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CompareItems_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__CompareItems_css__);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/components/CompareItems/CompareItems.js';






class CompareItems extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__CompareItems_css___default.a.circleContainer), __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__CompareItems_css___default.a.circleOne, __WEBPACK_IMPORTED_MODULE_4__CompareItems_css___default.a.circle), href: this.props.hrefs[0], __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__CompareItems_css___default.a.circleButton), __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__CompareItems_css___default.a.circleText), __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              },
              __self: this
            },
            this.props.children[0]
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__CompareItems_css___default.a.circleTwo, __WEBPACK_IMPORTED_MODULE_4__CompareItems_css___default.a.circle), href: this.props.hrefs[1], __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__CompareItems_css___default.a.circleButton), __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__CompareItems_css___default.a.circleText, __WEBPACK_IMPORTED_MODULE_4__CompareItems_css___default.a.swapText), __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              },
              __self: this
            },
            this.props.children[1]
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__CompareItems_css___default.a.circleText, __WEBPACK_IMPORTED_MODULE_4__CompareItems_css___default.a.mainText), __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              },
              __self: this
            },
            this.props.children[2]
          )
        )
      )
    );
  }
}

CompareItems.propTypes = {
  hrefs: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string).isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element).isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__CompareItems_css___default.a)(CompareItems));

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/components/Earth/Earth.js';
/* eslint-disable react/forbid-prop-types */



class Earth extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'svg',
      { viewBox: '0 0 500 500', xmlns: 'http://www.w3.org/2000/svg', className: this.props.className, width: this.props.width, height: this.props.height, style: this.props.style, __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ellipse', { cx: '249.5', cy: '250', rx: '248', ry: '248', stroke: '#000', fill: '#2965e6', strokeWidth: '4', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
        d: 'M162.9 477.5l34.5-12.9 10.5 5.6 18.6-.8s21.8 8.1 24.2 7.3c1.6-.8 21 0 21 0s24.3 8.1 24.3 6.4c0-1.6 25.8-4 25.8-4s-53.1 39.6-158.9-1.6z',
        stroke: '#fff',
        fill: '#fff',
        strokeWidth: '2',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'g',
        { stroke: '#000', fill: '#4ed226', strokeWidth: '3.475', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
          d: 'M183.529 361.253l-6.31-4.417s3.786-51.747-1.894-54.902c-5.68-3.155 6.941-15.776 12.621-13.252 5.68 2.525 37.864-18.302 35.34-25.243-2.525-6.942 12.62 6.31 13.882 4.417 1.263-1.893.632-16.407 24.613-12.62 23.98 3.787 15.776 3.155 15.776 3.155l-5.68 11.359 23.35 10.097 6.942-12.622 3.155-11.99s34.708 59.32 32.815 68.155c-1.894 8.835-16.407 47.96-25.874 42.912-9.465-5.049-29.028 0-25.874-6.941 3.156-6.941-22.717-34.078-33.445-26.506-10.728 7.573-50.485 18.302-44.175 20.826 6.31 2.524-29.029 3.155-25.242 7.572z',
          strokeWidth: '3.999586',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
          d: 'M289.397 368.439s28.786 9.159 28.786 0c0-9.16-13.085 20.936-13.085 20.936l-15.701-20.936z',
          strokeWidth: '3.999586',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
        d: 'M390.1 352.6l-34 21 8.1 4 25.9-25zM409.4 318.7s0 25.8-8.8 23.4c-8.9-2.4-4.1 12.9-4.1 12.9l19.4-17.8s-10.5 4.9-6.5 0c4.1-5.6 0-20.2 0-18.5zM245.5 201.5l12.1 13s23.4 13.7 18.6 16.9c-4.9 3.2 19.3 7.3 19.3 7.3s3.3-10.5 16.2-.8c12.1 10.5 13.7 8.1 13.7 8.1l-14.5-21.9-33.1-18.5-10.5 8-6.5-9.6-5.6-1.7-9.7-.8zM189.7 178.9l-7.3 7.3-13.7 13.7-7.3-.8 4.1 16.2 18.6.8s7.2-21 12.9-20.2c4.8.8-7.3-7.3-1.6-10.5 4.8-3.3-5.7-7.3-5.7-6.5zM120.2 196.7s21 30.7 23.5 32.3c2.4 1.6 6.4-9.7 6.4-9.7l-8-6.5.8-5.6-22.7-10.5zM152.6 230.6l11.3 4.9 16.9 1.6 45.3-3.3-49.3-.8-10.5-3.2-13.7.8zM204.3 212.8l-3.3 10.5s-4.8-9.7-4.8-10.5c0-.8 7.3-16.9 7.3-16.9l18.5-1.6s-17.7 9.7-17.7 10.5c0 .8 11.3-2.5 11.3-2.5l-5.7 7.3 4.1 12.1-9.7-8.9zM23.9 147.2L15 195.7s48.5-97.8 53.4-88.9c5.6 9.7 2.4 21 2.4 21l10.5-6.4-4.9 29 10.5 31.5 14.6 15.4-4.1-29.1-12.9-15.3 7.3-18.6 12.1 4v6.5s42-17.8 25-32.3c-16.9-14.6 13-26.7 13-26.7s74.3-28.3 67-41.2c-8.1-13.7-7.3-13.7-7.3-13.7l16.2-7.3 18.6-1.6 8.9 8.9 11.3-7.3-17-5.6s56.6-8.1 54.1-10.5c-2.4-2.5-176.9-34-269.8 139.7zM292.3 40v8.9l-45.2 13.7h31.5l21-13.7 12.9-3.3-20.2-5.6z',
        stroke: '#000',
        fill: '#4ed226',
        strokeWidth: '4',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }),
      this.props.children
    );
  }
}

Earth.propTypes = {
  width: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  height: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element,
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
Earth.defaultProps = {
  className: '',
  children: null,
  style: {}
};

/* harmony default export */ __webpack_exports__["a"] = (Earth);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_css__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Footer_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(6);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/components/Footer/Footer.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






class Footer extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.text, __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          },
          '\xA9 Your Company'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.spacer, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          },
          '\xB7'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */],
          { className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.link, to: '/', __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          },
          'Home'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.spacer, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          '\xB7'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */],
          { className: __WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a.link, to: '/not-found', __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          'Not Found'
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a)(Footer));

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_css__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Header_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Navigation__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logo_small_png__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logo_small_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__logo_small_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logo_small_2x_png__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logo_small_2x_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__logo_small_2x_png__);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/components/Header/Header.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









class Header extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Navigation__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */],
          { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.brand, to: '/', __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_5__logo_small_png___default.a, srcSet: `${__WEBPACK_IMPORTED_MODULE_6__logo_small_2x_png___default.a} 2x`, width: '38', height: '38', alt: 'React', __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.brandTxt, __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            },
            'Your Company'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.banner, __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            { className: __WEBPACK_IMPORTED_MODULE_2__Header_css___default.a.bannerTitle, __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              },
              __self: this
            },
            'CSS Practice'
          )
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Header_css___default.a)(Header));

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serialize_javascript__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__config__);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/components/Html.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






/* eslint-disable react/no-danger */

class Html extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    const { title, description, styles, scripts, app, children } = this.props;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'html',
      { className: 'no-js', lang: 'en', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'head',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { charSet: 'utf-8', __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge', __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'title',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          },
          title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'description', content: description, __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'apple-touch-icon', href: 'apple-touch-icon.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }),
        styles.map(style => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('style', {
          key: style.id,
          id: style.id,
          dangerouslySetInnerHTML: { __html: style.cssText },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        })),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: 'font-awesome/css/font-awesome.min.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'body',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { id: 'app', style: { display: 'flex', flexDirection: 'column', flex: 1 }, dangerouslySetInnerHTML: { __html: children }, __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { dangerouslySetInnerHTML: { __html: `window.App=${__WEBPACK_IMPORTED_MODULE_2_serialize_javascript___default()(app)}` }, __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }),
        scripts.map(script => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { key: script, src: script, __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        })),
        __WEBPACK_IMPORTED_MODULE_3__config___default.a.analytics.googleTrackingId && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', {
          dangerouslySetInnerHTML: { __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' + `ga('create','${__WEBPACK_IMPORTED_MODULE_3__config___default.a.analytics.googleTrackingId}','auto');ga('send','pageview')` },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_3__config___default.a.analytics.googleTrackingId && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: 'https://www.google-analytics.com/analytics.js', async: true, defer: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        })
      )
    );
  }
}

Html.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  description: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  styles: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    id: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    cssText: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
  }).isRequired),
  scripts: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired),
  app: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object, // eslint-disable-line
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};
Html.defaultProps = {
  styles: [],
  scripts: []
};
/* harmony default export */ __webpack_exports__["a"] = (Html);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__MediaButton_css__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__MediaButton_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__MediaButton_css__);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/components/MediaButton/MediaButton.js';
/* eslint-disable react/no-did-mount-set-state,react/no-array-index-key,max-len */






const ICON_WIDTH = 25;

class MediaButton extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  static isMiddleIndex(array, index) {
    return !(index === 0 || index === array.length - 1);
  }

  constructor(props) {
    super(props);

    this.state = {
      maxWidth: 100
    };
  }

  componentDidMount() {
    this.setMaxWidth();
  }

  componentWillReceiveProps() {
    this.setMaxWidth();
  }

  componentDidUpdate() {
    this.setMaxWidth();
  }

  setMaxWidth() {
    const paddingWidth = 2 * ICON_WIDTH;

    let maxWidth = this.divElement !== null ? this.divElement.clientWidth + paddingWidth : paddingWidth;
    // if (ICON_WIDTH * this.props.children.length > maxWidth) maxWidth = ICON_WIDTH * this.props.children.length;

    if (this.state.maxWidth !== maxWidth) {
      this.setState({ maxWidth });
    }
  }

  createButtonList(iconArray) {
    let iconArrayElement = [];

    let currentNumberOfElements = 0;

    const maxNumberOfElements = Math.ceil(this.state.maxWidth / ICON_WIDTH);

    iconArray.forEach(child => {
      currentNumberOfElements += 1;
      iconArrayElement.push([child, child.props['data-parent-class'] ? child.props['data-parent-class'] : __WEBPACK_IMPORTED_MODULE_4__MediaButton_css___default.a.defaultHover]);
    });

    let buttonSize = 'perfect';

    if (currentNumberOfElements * ICON_WIDTH < this.state.maxWidth) buttonSize = 'too small';
    if (currentNumberOfElements > maxNumberOfElements) buttonSize = 'too big';
    if (buttonSize === 'too small') {
      iconArrayElement = iconArrayElement.map(element => [element[0], __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__MediaButton_css___default.a.squish, element[1])]);
      while (currentNumberOfElements < maxNumberOfElements) {
        currentNumberOfElements += 1;
        iconArrayElement.splice(iconArrayElement.length - 1, 0, [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          {
            className: __WEBPACK_IMPORTED_MODULE_4__MediaButton_css___default.a.box,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: this
          },
          '\xA0'
        ), __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__MediaButton_css___default.a.transformIcon, __WEBPACK_IMPORTED_MODULE_4__MediaButton_css___default.a.squishMe)]);
      }
    }
    if (buttonSize === 'too big') {
      iconArrayElement = iconArrayElement.map((element, index, arr) => {
        if (MediaButton.isMiddleIndex(arr, index)) {
          return [element[0], __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__MediaButton_css___default.a.hideMe, element[1])];
        }
        return [element[0], __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__MediaButton_css___default.a.hide, element[1])];
      });
    }

    iconArrayElement = iconArrayElement.map((element, index) => {
      if (index === 0) {
        return [element[0], __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__MediaButton_css___default.a.transformIcon, __WEBPACK_IMPORTED_MODULE_4__MediaButton_css___default.a.left, element[1])];
      }
      if (iconArrayElement.length - 1 === index) {
        return [element[0], __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__MediaButton_css___default.a.transformIcon, __WEBPACK_IMPORTED_MODULE_4__MediaButton_css___default.a.right, element[1])];
      }
      return [element[0], __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__MediaButton_css___default.a.transformIcon, element[1])];
    });

    iconArrayElement = iconArrayElement.map((element, index) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { key: index, className: element[1], __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      },
      element[0]
    ));

    return iconArrayElement;
  }

  // style={{ minWidth: this.state.maxWidth, maxWidth: this.state.maxWidth }}
  render() {
    const icons = this.createButtonList(this.props.children);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_4__MediaButton_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      },
      this.props.text && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          className: __WEBPACK_IMPORTED_MODULE_4__MediaButton_css___default.a.text,
          ref: divElement => {
            this.divElement = divElement;
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        },
        this.props.text
      ),
      icons
    );
  }
}

MediaButton.propTypes = {
  text: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element]).isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__MediaButton_css___default.a)(MediaButton));

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/components/Moon/Moon.js';
/* eslint-disable react/forbid-prop-types */



class Moon extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'svg',
      { viewBox: '0.199985 0.899994 497 496.3', className: this.props.className, width: this.props.width, height: this.props.height, __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ellipse', {
        style: { fill: 'rgb(216, 216, 216)', stroke: 'rgb(0, 0, 0)', strokeWidth: 0 },
        cx: '249.8',
        cy: '247.9',
        rx: '247',
        ry: '247',
        transform: 'matrix(1, 0, 0, 1, 0, 0)',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
        d: 'M 19.5 76.2 L 19.5 76.2 Z',
        style: { stroke: 'black', fill: 'none' },
        transform: 'matrix(1, 0, 0, 1, 0, 0)',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
        d: 'M 98.7 368.6 C 75.9 354.3 41.4 356.5 25.2 335.7 C 4.1 308.7 0.2 246.5 8.3 208 C 14.8 177.1 23.4 142.9 47.7 110.3 C 61.4 92.1 75 73.4 93.7 58.3 C 108.6 46.3 128 37.1 144.3 28.6 C 156 22.4 151.6 33.1 145.1 46.8 C 146.1 49.1 146.4 51.4 145.2 53.7 C 137.1 62 137.1 74.5 142 79.2 C 144.3 81.5 147.5 83 150.1 84.3 C 160.2 89.2 185.1 79.1 212 93.4 C 215.9 109 207.5 116.8 202.2 122.2 C 198.3 126.1 181.1 136.7 187.6 154.1 C 206.6 165.5 220.5 154.9 230.2 150.1 C 253.7 138.3 294.6 118.6 317.9 141.9 C 320.1 144.2 327.9 150.7 320.6 157.5 C 316.1 161.8 310.9 156.9 301.7 158.2 C 289.8 160 280.6 165.5 276.8 165.5 C 272.7 165.5 260.5 167.6 258.6 171.7 C 252.9 183 256.1 194.3 253.2 206.1 C 250.8 215.4 246.7 222.8 241 229.7 C 233.3 238.8 219.5 232.8 212.7 251.3 C 210.7 259.2 216.9 257.2 218.7 262.7 C 220 266.6 217.7 272.5 216.7 275.6 C 213.2 286.2 210.2 295.1 203.9 304.6 C 194.3 319.1 180.9 329 187.6 349.2 C 193.6 367.1 218.8 370.4 224.7 388.3 C 225.5 390.7 230.1 400.2 226.8 404.6 C 212.8 423.8 179.6 423.5 156.6 417.4 C 132.2 410.9 120 382.1 98.7 368.6 Z M 135.8 178.4 C 128.5 178.4 127.2 186.5 127.2 194.7 C 127.2 202.8 137.6 210.5 144.9 210.5 C 152.2 210.5 153.6 202.8 153.6 194.7 C 153.6 186.5 143 178.4 135.8 178.4 Z',
        style: { fill: 'rgb(132, 132, 132)' },
        transform: 'matrix(1, 0, 0, 1, 0, 0)',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ellipse', {
        style: { fill: 'rgb(216, 216, 216)', stroke: 'rgb(0, 0, 0)', strokeWidth: 4, fillOpacity: 0 },
        cx: '250.2',
        cy: '250.2',
        rx: '247',
        ry: '247',
        transform: 'matrix(1, 0, 0, 1, 0, 0)',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
        d: 'M 390.3 84.8 C 379.7 75 353 58.4 322.7 95.3 C 317.4 105.4 321.4 111.1 325.2 117.3 C 329.1 123.8 332 132.6 339 136.9 C 342.3 138.8 350.1 142.2 351.4 147.6 C 355.8 165.2 328.4 178.6 336.4 194.5 C 342.4 206.6 362 209.8 367.2 220.2 C 373.7 233.4 364.9 251.5 371.6 264.7 C 374.7 270.9 390.2 274 392.3 282.9 C 394.2 291.2 390.2 299.5 382.8 306.7 C 376.1 313.5 364.4 315.8 356 318.6 C 352.2 319.9 348.6 321 344.9 320.5 C 330.2 318.4 323.6 293.2 305.2 300.5 C 299.9 302.5 295.4 305.6 290.7 308.7 C 273.4 320.1 270.5 343.3 273.1 361.9 C 274.4 370.9 282.8 397.9 285 403.3 C 293.4 424.1 314.6 445.3 337.7 449 C 350.1 451.1 362.5 446.3 373.4 442.2 C 383.6 438.3 392.4 431.3 398.5 422.2 C 403.5 414.7 406.9 407.3 409.9 398.9 C 414.4 385 415.4 362.6 396.7 362.6 C 395.2 362.6 385.4 365.2 382.8 367 C 376.3 371.4 377.5 382.1 375.3 388.3 C 374.4 391.1 369.8 395 366.5 393.8 C 363.6 392.8 360.8 370 359.7 366.3 C 358.4 362.2 355.1 357.2 357.1 353.1 C 362 343.3 379.7 349 386.6 338.8 C 397 323.3 399.3 303 403.3 284.4 C 404.6 278.4 414.1 278 418 274.1 C 429.1 263.1 444.1 249.7 440.5 232.1 C 438.7 222.5 434.1 220.1 428.6 214.5 C 425 211 422.1 202.8 420.4 198.3 C 419.5 195 420.4 189.8 420.4 186.4 C 420.4 172.2 423 154.3 413 144.4 C 407.1 138.5 397.3 136.7 393.6 129.4 C 389.3 121.1 395.4 109.3 395.4 101 C 395.4 98.9 396 90.1 390.3 84.8 Z',
        style: { stroke: 'black', strokeWidth: 0, fill: 'rgb(132, 132, 132)' },
        transform: 'matrix(1, 0, 0, 1, 0, 0)',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
        d: 'M 420.3 116.4 C 418.5 118 424 140.1 426.1 148.8 C 426.6 150.4 426.1 154.5 427.4 155.6 C 429.1 157.4 432.2 156.9 434.9 156.9 C 445 156.9 445.4 149.2 448.1 141.3 C 448.6 139.8 449.6 134.9 448.8 133.1 C 446.2 128.1 448.4 126.4 447.1 121.2 C 446 117.8 444.9 114.9 440 112.9 C 432.3 109.5 422.6 110.5 420.3 116.4 Z',
        style: { stroke: 'black', strokeWidth: 0, fill: 'rgb(132, 132, 132)' },
        transform: 'matrix(1, 0, 0, 1, 0, 0)',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
        d: 'M 455 162.6 C 459.4 167.6 458.5 174 460.7 180 C 463.9 190 469.8 199.4 471.9 209.5 C 472.7 213.7 476.6 222 474.3 226.4 C 473.5 228.1 471.2 231.8 467 233.1 C 461 235.1 457.6 237.2 450.6 232.1 C 440.1 224.6 433 194.2 436.9 186.5 C 439.3 181.5 437.9 171.6 436.7 167.2 C 435.7 163.7 437.7 159.8 445.5 159.3 C 450.9 159 455 162.6 455 162.6 Z',
        style: { stroke: 'black', strokeWidth: 0, fill: 'rgb(132, 132, 132)' },
        transform: 'matrix(1, 0, 0, 1, 0, 0)',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
        d: 'M 463.1 294.2 C 452.7 298.2 445 306.5 439.3 317.9 C 436.7 323 433.5 329.7 434.9 335.5 C 437.4 345.5 450.1 355.9 460.7 353.8 C 477.3 350.3 475.8 328.9 478.1 316.8 C 479.4 310.6 481.5 299.9 476.3 294.8 C 473.2 291.7 467.2 292.5 463.1 294.2 Z',
        style: { stroke: 'black', strokeWidth: 0, fill: 'rgb(132, 132, 132)' },
        transform: 'matrix(1, 0, 0, 1, 0, 0)',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      })
    );
  }
}

Moon.propTypes = {
  width: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  height: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
Moon.defaultProps = {
  className: ''
};

/* harmony default export */ __webpack_exports__["a"] = (Moon);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Navigation_css__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Navigation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Navigation_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(6);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/components/Navigation/Navigation.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






class Navigation extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__Navigation_css___default.a.root, role: 'navigation', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */],
        { className: __WEBPACK_IMPORTED_MODULE_2__Navigation_css___default.a.link, to: '/about', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        },
        'About'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */],
        { className: __WEBPACK_IMPORTED_MODULE_2__Navigation_css___default.a.link, to: '/contact', __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        },
        'Contact'
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Navigation_css___default.a)(Navigation));

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/components/Orbiter/Orbiter.js';




function Orbiter(orbitRadius, options) {
  const defaultOptions = {
    keyframeString: `
        from {
          transform: rotate(0deg) translate(${orbitRadius}px) rotate(0deg);
        }
      
        to {
          transform: rotate(360deg) translate(${orbitRadius}px) rotate(-360deg);
        }
      `,
    css: {
      animationDuration: '10s',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      position: 'relative',
      zIndex: 1
    }
  };

  const finalOptions = Object.assign({}, defaultOptions, options);

  const componentStyle = `
      z-index: ${finalOptions.css.zIndex};
      position: ${finalOptions.css.position};
      animation-name: ${__WEBPACK_IMPORTED_MODULE_1_styled_components__["keyframes"]`${finalOptions.keyframeString}`};
      animation-timing-function: ${finalOptions.css.animationTimingFunction};
      animation-duration: ${finalOptions.css.animationDuration};
      animation-iteration-count: ${finalOptions.css.animationIterationCount}
    `;

  return ComponentToOrbit => class extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    render() {
      const componentMaker = ({ className }) => {
        const passThroughProps = this.props;
        delete passThroughProps.className;
        const newClassName = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, this.props.className);

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ComponentToOrbit, _extends({}, passThroughProps, { className: newClassName, __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }));
      };

      const StyledComponent = __WEBPACK_IMPORTED_MODULE_1_styled_components___default()(componentMaker)`${componentStyle}`;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledComponent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      });
    }
  };
}

/* harmony default export */ __webpack_exports__["a"] = (Orbiter);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Page_css__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Page_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Page_css__);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/components/Page/Page.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






class Page extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    const { title, html } = this.props;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_3__Page_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_3__Page_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          },
          title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML: { __html: html },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        })
      )
    );
  }
}

Page.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  html: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__Page_css___default.a)(Page));

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Sun_css__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Sun_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Sun_css__);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/components/Sun/Sun.js';
/* eslint-disable react/forbid-prop-types */





class Sun extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  // className={this.props.className} width={this.props.width} height={this.props.height}
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'svg',
      { viewBox: '0 0 500 500', xmlns: 'http://www.w3.org/2000/svg', className: this.props.className, width: this.props.width, height: this.props.height, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'defs',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'pattern',
          { id: 'pattern-0', x: '0', y: '0', width: '20', height: '20', patternUnits: 'userSpaceOnUse', viewBox: '0 0 100 100', __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M 0 0 L 50 0 L 50 100 L 0 100 Z', style: { fill: 'black' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'radialGradient',
          { id: 'gradient-2', gradientUnits: 'userSpaceOnUse', cx: '750.1', cy: '246.7', r: '194.4', gradientTransform: 'matrix(0.70129, -0.00058, 0.00056, 0.66914, -288.07928, 79.72377)', __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('stop', { offset: '0', style: { stopColor: 'rgb(255, 255, 255)' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('stop', { offset: '1', style: { stopColor: 'rgb(255, 136, 0)' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'radialGradient',
          { id: 'gradient-1', gradientUnits: 'userSpaceOnUse', cx: '750.1', cy: '246.7', r: '194.4', gradientTransform: 'matrix(1.15882, -0.00483, 0.00463, 1.11173, -630.70203, -24.15555)', __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('stop', { offset: '0', style: { stopColor: 'rgb(255, 136, 0)' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('stop', { offset: '1', style: { stopColor: 'rgba(255, 136, 0, 0)' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ellipse', { style: { fill: 'url(#gradient-1)', strokeWidth: 70 }, cx: '247.7', cy: '251.4', rx: '239.3', ry: '239.3', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ellipse', { style: { fill: 'url(#gradient-2)', strokeWidth: 70 }, cx: '243', cy: '247.4', rx: '146.5', ry: '146.5', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }),
      this.props.children
    );
  }
}

Sun.propTypes = {
  width: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  height: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
Sun.defaultProps = {
  className: ''
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__Sun_css___default.a)(Sun));

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



/**
 * Creates a wrapper function around the HTML5 Fetch API that provides
 * default arguments to fetch(...) and is intended to reduce the amount
 * of boilerplate code in the application.
 * https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch
 */
function createFetch({ baseUrl, cookie }) {
  // NOTE: Tweak the default options to suite your application needs
  const defaults = {
    method: 'POST', // handy with GraphQL backends
    mode: baseUrl ? 'cors' : 'same-origin',
    credentials: baseUrl ? 'include' : 'same-origin',
    headers: _extends({
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }, cookie ? { Cookie: cookie } : null)
  };

  return (url, options) => url.startsWith('/graphql') || url.startsWith('/api') ? __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(`${baseUrl}${url}`, _extends({}, defaults, options, {
    headers: _extends({}, defaults.headers, options && options.headers)
  })) : __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(url, options);
}

/* harmony default export */ __webpack_exports__["a"] = (createFetch);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



// Navigation manager, e.g. history.push('/home')
// https://github.com/mjackson/history
/* harmony default export */ __webpack_exports__["a"] = (false && __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default()());

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runtime__ = __webpack_require__(30);




/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  user: __WEBPACK_IMPORTED_MODULE_1__user__["a" /* default */],
  runtime: __WEBPACK_IMPORTED_MODULE_2__runtime__["a" /* default */]
}));

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = runtime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(9);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function runtime(state = {}, action) {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* SET_RUNTIME_VARIABLE */]:
      return _extends({}, state, {
        [action.payload.name]: action.payload.value
      });
    default:
      return state;
  }
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = user;
function user(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_router__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes__ = __webpack_require__(39);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_universal_router___default.a(__WEBPACK_IMPORTED_MODULE_1__routes__["a" /* default */]));

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Page__ = __webpack_require__(25);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/routes/about/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/about',

  action() {
    var _this = this;

    return _asyncToGenerator(function* () {
      const data = yield new Promise(function(resolve) { resolve(); }).then((function (require) {
        return __webpack_require__(72);
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

      return {
        title: data.title,
        chunk: 'about',
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Page__["a" /* default */], _extends({}, data, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: _this
          }))
        )
      };
    })();
  }

});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Contact_css__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Contact_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Contact_css__);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/routes/contact/Contact.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






class Contact extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_3__Contact_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_3__Contact_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          this.props.title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          },
          '...'
        )
      )
    );
  }
}

Contact.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__Contact_css___default.a)(Contact));

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Contact__ = __webpack_require__(34);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/routes/contact/index.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





const title = 'Contact Us';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/contact',

  action() {
    return {
      title,
      component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Contact__["a" /* default */], { title: title, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        })
      )
    };
  }

});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ErrorPage_css__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ErrorPage_css__);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/routes/error/ErrorPage.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






class ErrorPage extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    if (true) {
      const { error } = this.props;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          },
          error.name
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          },
          error.message
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'pre',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          },
          error.stack
        )
      );
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        },
        'Error'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        },
        'Sorry, a critical error occurred on this page.'
      )
    );
  }
}

ErrorPage.propTypes = {
  error: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    name: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    message: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    stack: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
  }).isRequired
};

/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__ErrorPage_css___default.a)(ErrorPage));

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Home_css__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Home_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Earth__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Moon__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Sun__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_MediaButton__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_CompareItems__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Orbiter__ = __webpack_require__(24);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/routes/home/Home.js';
/* eslint-disable jsx-a11y/anchor-has-content,max-len,react/no-did-mount-set-state */
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */











class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);

    this.state = {
      firstRender: true,
      resetAnimation: false,
      followButton: 'Follow',
      orbitRadius: 300
    };

    this.toggleAnimation = this.toggleAnimation.bind(this);
  }

  componentWillMount() {}

  componentDidMount() {
    this.setState({ firstRender: false });
  }

  followChange(event) {
    this.setState({ followButton: event.target.value });
  }

  orbitChange(event) {
    this.setState({ orbitRadius: event.target.value });
  }

  toggleAnimation() {
    this.setState({ resetAnimation: !this.state.resetAnimation });
  }

  render() {
    const earthOrbitRadius = this.state.orbitRadius;
    const moonOrbitRadius = 100;
    const earthDiameter = 100;
    const moonDiameter = 30;

    const orbitMoon = `
    from {
      transform: translate(-${earthDiameter / 2}px) rotate(0deg) translate(${earthOrbitRadius}px) rotate(0deg) rotate(0deg) translate(${moonOrbitRadius}px) rotate(0deg);
    }
  
    to {
      transform: translate(-${earthDiameter / 2}px) rotate(360deg) translate(${earthOrbitRadius}px) rotate(-360deg) rotate(${360 * 5}deg) translate(${moonOrbitRadius}px) rotate(-${360 * 5}deg);
    }
  `;

    const moonOptions = {
      keyframeString: orbitMoon
    };

    const StyledMoon = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__components_Orbiter__["a" /* default */])(this.state.orbitRadius, moonOptions)(__WEBPACK_IMPORTED_MODULE_4__components_Moon__["a" /* default */]);

    const StyledEarth = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__components_Orbiter__["a" /* default */])(this.state.orbitRadius)(__WEBPACK_IMPORTED_MODULE_3__components_Earth__["a" /* default */]);

    const animation = !this.state.resetAnimation ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__Home_css___default.a.animationContainer, __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Sun__["a" /* default */], { width: 300, height: 300, className: __WEBPACK_IMPORTED_MODULE_2__Home_css___default.a.sun, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }),
      !this.state.firstRender && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledEarth, { width: earthDiameter, height: earthDiameter, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }),
      !this.state.firstRender && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledMoon, { width: moonDiameter, height: moonDiameter, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      })
    ) : null;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'article',
      { className: __WEBPACK_IMPORTED_MODULE_2__Home_css___default.a.content, __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            },
            __self: this
          },
          'Earth Animation'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h4',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            },
            __self: this
          },
          'Messing around with SVG graphics and animations'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2__Home_css___default.a.row, __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            {
              onClick: this.toggleAnimation,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 95
              },
              __self: this
            },
            'Toggle Animation'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: { padding: '0 1rem' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 100
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              { htmlFor: 'orbitRadius', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 101
                },
                __self: this
              },
              'Earth Orbit Radius: '
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
              id: 'orbitRadius',
              type: 'range',
              min: 150,
              max: 450,
              value: this.state.orbitRadius,
              onChange: event => {
                this.orbitChange(event);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 102
              },
              __self: this
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 113
              },
              __self: this
            },
            this.state.orbitRadius
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2__Home_css___default.a.row, __source: {
              fileName: _jsxFileName,
              lineNumber: 115
            },
            __self: this
          },
          animation
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 118
            },
            __self: this
          },
          'A (somewhat improved) attempt at ',
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            {
              className: __WEBPACK_IMPORTED_MODULE_2__Home_css___default.a.link,
              href: 'https://www.reddit.com/r/web_design/comments/6fdobk/how_would_you_code_the_share_and_follow_buttons/',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 118
              },
              __self: this
            },
            'this'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2__Home_css___default.a.row, __source: {
              fileName: _jsxFileName,
              lineNumber: 123
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            { htmlFor: 'button-text', __source: {
                fileName: _jsxFileName,
                lineNumber: 124
              },
              __self: this
            },
            'Button Text: '
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
            id: 'button-text',
            type: 'text',
            className: __WEBPACK_IMPORTED_MODULE_2__Home_css___default.a.textBox,
            value: this.state.followButton,
            onChange: event => {
              this.followChange(event);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 125
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2__Home_css___default.a.exampleTwo, __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2__Home_css___default.a.buttonContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 136
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6__components_MediaButton__["a" /* default */],
              { text: this.state.followButton, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 137
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: '', alt: 'follow button', 'data-parent-class': __WEBPACK_IMPORTED_MODULE_2__Home_css___default.a.twitter, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 138
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', {
                  className: 'fa fa-twitter',
                  'aria-hidden': 'true',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 139
                  },
                  __self: this
                })
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: '', alt: 'follow button', 'data-parent-class': __WEBPACK_IMPORTED_MODULE_2__Home_css___default.a.facebook, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 144
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', {
                  className: 'fa fa-facebook',
                  'aria-hidden': 'true',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 145
                  },
                  __self: this
                })
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: '', alt: 'follow button', 'data-parent-class': __WEBPACK_IMPORTED_MODULE_2__Home_css___default.a.dribble, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 150
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', {
                  className: 'fa fa-dribbble',
                  'aria-hidden': 'true',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 151
                  },
                  __self: this
                })
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: '', alt: 'follow button', 'data-parent-class': __WEBPACK_IMPORTED_MODULE_2__Home_css___default.a.slack, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 156
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', {
                  className: 'fa fa-slack',
                  'aria-hidden': 'true',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 157
                  },
                  __self: this
                })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2__Home_css___default.a.buttonContainer, __source: {
                fileName: _jsxFileName,
                lineNumber: 164
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6__components_MediaButton__["a" /* default */],
              { text: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 165
                    },
                    __self: this
                  },
                  'Share',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'small',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 165
                      },
                      __self: this
                    },
                    ' 102'
                  )
                ), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 165
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-twitter', 'aria-hidden': 'true', 'data-parent-class': __WEBPACK_IMPORTED_MODULE_2__Home_css___default.a.twitter, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 166
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-facebook', 'aria-hidden': 'true', 'data-parent-class': __WEBPACK_IMPORTED_MODULE_2__Home_css___default.a.facebook, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 167
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-dribbble', 'aria-hidden': 'true', 'data-parent-class': __WEBPACK_IMPORTED_MODULE_2__Home_css___default.a.dribble, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 168
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-slack', 'aria-hidden': 'true', 'data-parent-class': __WEBPACK_IMPORTED_MODULE_2__Home_css___default.a.slack, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 169
                },
                __self: this
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7__components_CompareItems__["a" /* default */],
            { hrefs: ['', ''], __source: {
                fileName: _jsxFileName,
                lineNumber: 172
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 173
                },
                __self: this
              },
              'Try'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 174
                },
                __self: this
              },
              'Buy'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 175
                },
                __self: this
              },
              '$19'
            )
          )
        )
      )
    );
  }
}

Home.propTypes = {};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Home_css___default.a)(Home));

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(5);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/routes/home/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/',

  action({ context }) {
    var _this = this;

    return _asyncToGenerator(function* () {
      return {
        title: 'React CSS Playground',
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { context: context, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: _this
          })
        )
      };
    })();
  }

});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
/* harmony default export */ __webpack_exports__["a"] = ({

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [__webpack_require__(38).default, __webpack_require__(35).default, __webpack_require__(33).default,

  // Wildcard routes, e.g. { path: '*', ... } (must go last)
  __webpack_require__(41).default],

  action({ next }) {
    return _asyncToGenerator(function* () {
      // Execute each child route until one of them return the result
      const route = yield next();

      // Provide default values for title, description etc.
      route.title = `${route.title || 'Untitled Page'}`;
      route.description = route.description || '';

      return route;
    })();
  }

});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NotFound_css__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NotFound_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__NotFound_css__);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/routes/notFound/NotFound.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






class NotFound extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_3__NotFound_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_3__NotFound_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          this.props.title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          },
          'Sorry, the page you were trying to view does not exist.'
        )
      )
    );
  }
}

NotFound.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__NotFound_css___default.a)(NotFound));

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound__ = __webpack_require__(40);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/routes/notFound/index.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





const title = 'Page Not Found';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '*',

  action() {
    return {
      title,
      component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__NotFound__["a" /* default */], { title: title, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        })
      ),
      status: 404
    };
  }

});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createHelpers__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger__ = __webpack_require__(44);






function configureStore(initialState, helpersConfig) {
  const helpers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__createHelpers__["a" /* default */])(helpersConfig);
  const middleware = [__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a.withExtraArgument(helpers)];

  let enhancer;

  if (true) {
    middleware.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__logger__["a" /* default */])());

    // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
    let devToolsExtension = f => f;
    if (false) {
      devToolsExtension = window.devToolsExtension();
    }

    enhancer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(...middleware), devToolsExtension);
  } else {
    enhancer = applyMiddleware(...middleware);
  }

  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* default */], initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (false) {
    module.hot.accept('../reducers', () =>
    // eslint-disable-next-line global-require
    store.replaceReducer(require('../reducers').default));
  }

  return store;
}

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createHelpers;
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function createGraphqlRequest(fetch) {
  return (() => {
    var _ref = _asyncToGenerator(function* (query, variables) {
      const fetchConfig = {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query, variables }),
        credentials: 'include'
      };
      const resp = yield fetch('/graphql', fetchConfig);
      if (resp.status !== 200) throw new Error(resp.statusText);
      return resp.json();
    });

    function graphqlRequest(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return graphqlRequest;
  })();
}

function createHelpers({ fetch, history }) {
  return {
    fetch,
    history,
    graphqlRequest: createGraphqlRequest(fetch)
  };
}

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createLogger;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);


function inspectObject(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_util__["inspect"])(object, {
    colors: true
  });
}

function singleLine(str) {
  return str.replace(/\s+/g, ' ');
}

const actionFormatters = {
  // This is used at feature/apollo branch, but it can help you when implementing Apollo
  APOLLO_QUERY_INIT: a => `queryId:${a.queryId} variables:${inspectObject(a.variables)}\n   ${singleLine(a.queryString)}`,

  APOLLO_QUERY_RESULT: a => `queryId:${a.queryId}\n   ${singleLine(inspectObject(a.result))}`,

  APOLLO_QUERY_STOP: a => `queryId:${a.queryId}`
};

// Server side redux action logger
function createLogger() {
  // eslint-disable-next-line no-unused-vars
  return store => next => action => {
    let formattedPayload = '';
    const actionFormatter = actionFormatters[action.type];
    if (typeof actionFormatter === 'function') {
      formattedPayload = actionFormatter(action);
    } else if (action.toString !== Object.prototype.toString) {
      formattedPayload = action.toString();
    } else if (typeof action.payload !== 'undefined') {
      formattedPayload = inspectObject(action.payload);
    } else {
      formattedPayload = inspectObject(action);
    }

    console.log(` * ${action.type}: ${formattedPayload}`); // eslint-disable-line no-console
    return next(action);
  };
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n\n.CompareItems-circleContainer-2w1wB {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 0 16px;\n  margin: 0 1rem;\n  height: 100%;\n  font-family: Impact, sans-serif;\n}\n\n.CompareItems-compareButtons-2OHT8 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n}\n\n.CompareItems-circleButton-2CYga {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  top: 0;\n  left: 0;\n  border-radius: 50%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center\n}\n\n.CompareItems-circleButton-2CYga:hover {\n  cursor: pointer;\n}\n\n.CompareItems-circleButton-2CYga:hover .CompareItems-mainText-2-G4i {\n      opacity: 0;\n      -webkit-transition: 0.25s ease-out;\n      -o-transition: 0.25s ease-out;\n      transition: 0.25s ease-out;\n}\n\n.CompareItems-circleButton-2CYga:hover .CompareItems-swapText-3lUdf {\n      opacity: 1;\n      -webkit-transition: opacity 0.25s 0.25s ease-in;\n      -o-transition: opacity 0.25s 0.25s ease-in;\n      transition: opacity 0.25s 0.25s ease-in;\n}\n\n.CompareItems-compareButtonOne-2k1ys {\n}\n\n.CompareItems-compareButtonTwo-G8hsT {\n  font-weight: bold;\n}\n\n.CompareItems-circleText-1cC6b {\n  position: absolute;\n}\n\n.CompareItems-circle-2vYSU {\n  position: relative;\n  border-radius: 50%;\n  margin: auto 4px;\n  margin: auto 0.25rem;\n}\n\n.CompareItems-circle-2vYSU:before {\n  content: \"\";\n  display: block;\n  padding-top: 50%;\n}\n\n.CompareItems-circle-2vYSU:after {\n  content: \"\";\n  display: block;\n  padding-bottom: 50%;\n}\n\n.CompareItems-circleOne-LGSX4 {\n  width: 32px;\n  width: 2rem;\n  font-size: small;\n  color: white;\n  background-color: #f2b909;\n  -webkit-transition: width 0.25s ease-in;\n  -o-transition: width 0.25s ease-in;\n  transition: width 0.25s ease-in\n}\n\n.CompareItems-circleOne-LGSX4:hover {\n  width: 48px;\n  width: 3rem;\n  -webkit-transition: width 0.25s ease-in;\n  -o-transition: width 0.25s ease-in;\n  transition: width 0.25s ease-in;\n}\n\n.CompareItems-circleOne-LGSX4:hover ~ .CompareItems-circleTwo-nWBYn {\n      width: 48px;\n      width: 3rem;\n      -webkit-transition: width 0.25s ease-in;\n      -o-transition: width 0.25s ease-in;\n      transition: width 0.25s ease-in;\n}\n\n.CompareItems-circleOne-LGSX4:hover ~ .CompareItems-circleTwo-nWBYn .CompareItems-mainText-2-G4i {\n        font-size: small;\n        -webkit-transition: 0.25s ease-in;\n        -o-transition: 0.25s ease-in;\n        transition: 0.25s ease-in;\n      }\n\n.CompareItems-circleTwo-nWBYn {\n  width: 64px;\n  width: 4rem;\n  background-color: white;\n  color: #333333;\n  -webkit-transition: width 0.25s ease-in;\n  -o-transition: width 0.25s ease-in;\n  transition: width 0.25s ease-in;\n}\n\n.CompareItems-swapText-3lUdf {\n  opacity: 0;\n  -webkit-transition: opacity 0.5s ease-out;\n  -o-transition: opacity 0.5s ease-out;\n  transition: opacity 0.5s ease-out;\n  font-size: small;\n  font-weight: normal;\n}\n\n.CompareItems-mainText-2-G4i {\n  opacity: 1;\n  -webkit-transition: 0.5s ease-in;\n  -o-transition: 0.5s ease-in;\n  transition: 0.5s ease-in;\n}\n", "", {"version":3,"sources":["/Users/jvburen/Projects/spikes/react/css-animation/src/components/CompareItems/CompareItems.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;;AAED;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,yBAAyB;MACrB,sBAAsB;UAClB,wBAAwB;EAChC,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,eAAe;EACf,eAAe;EACf,aAAa;EACb,gCAAgC;CACjC;;AAED;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,oBAAoB;MAChB,iBAAiB;UACb,aAAa;CACtB;;AAED;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,OAAO;EACP,QAAQ;EACR,mBAAmB;EACnB,yBAAyB;MACrB,sBAAsB;UAClB,wBAAwB;EAChC,0BAA0B;MACtB,uBAAuB;UACnB,mBAAmB;CAC5B;;AAED;EACE,gBAAgB;CACjB;;AAED;MACM,WAAW;MACX,mCAAmC;MACnC,8BAA8B;MAC9B,2BAA2B;CAChC;;AAED;MACM,WAAW;MACX,gDAAgD;MAChD,2CAA2C;MAC3C,wCAAwC;CAC7C;;AAED;CACC;;AAED;EACE,kBAAkB;CACnB;;AAED;EACE,mBAAmB;CACpB;;AAED;EACE,mBAAmB;EACnB,mBAAmB;EACnB,iBAAiB;EACjB,qBAAqB;CACtB;;AAED;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,YAAY;EACZ,eAAe;EACf,oBAAoB;CACrB;;AAED;EACE,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,0BAA0B;EAC1B,wCAAwC;EACxC,mCAAmC;EACnC,+BAA+B;CAChC;;AAED;EACE,YAAY;EACZ,YAAY;EACZ,wCAAwC;EACxC,mCAAmC;EACnC,gCAAgC;CACjC;;AAED;MACM,YAAY;MACZ,YAAY;MACZ,wCAAwC;MACxC,mCAAmC;MACnC,gCAAgC;CACrC;;AAED;QACQ,iBAAiB;QACjB,kCAAkC;QAClC,6BAA6B;QAC7B,0BAA0B;OAC3B;;AAEP;EACE,YAAY;EACZ,YAAY;EACZ,wBAAwB;EACxB,eAAe;EACf,wCAAwC;EACxC,mCAAmC;EACnC,gCAAgC;CACjC;;AAED;EACE,WAAW;EACX,0CAA0C;EAC1C,qCAAqC;EACrC,kCAAkC;EAClC,iBAAiB;EACjB,oBAAoB;CACrB;;AAED;EACE,WAAW;EACX,iCAAiC;EACjC,4BAA4B;EAC5B,yBAAyB;CAC1B","file":"CompareItems.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n\n.circleContainer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 0 16px;\n  margin: 0 1rem;\n  height: 100%;\n  font-family: Impact, sans-serif;\n}\n\n.compareButtons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n}\n\n.circleButton {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  top: 0;\n  left: 0;\n  border-radius: 50%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center\n}\n\n.circleButton:hover {\n  cursor: pointer;\n}\n\n.circleButton:hover .mainText {\n      opacity: 0;\n      -webkit-transition: 0.25s ease-out;\n      -o-transition: 0.25s ease-out;\n      transition: 0.25s ease-out;\n}\n\n.circleButton:hover .swapText {\n      opacity: 1;\n      -webkit-transition: opacity 0.25s 0.25s ease-in;\n      -o-transition: opacity 0.25s 0.25s ease-in;\n      transition: opacity 0.25s 0.25s ease-in;\n}\n\n.compareButtonOne {\n}\n\n.compareButtonTwo {\n  font-weight: bold;\n}\n\n.circleText {\n  position: absolute;\n}\n\n.circle {\n  position: relative;\n  border-radius: 50%;\n  margin: auto 4px;\n  margin: auto 0.25rem;\n}\n\n.circle:before {\n  content: \"\";\n  display: block;\n  padding-top: 50%;\n}\n\n.circle:after {\n  content: \"\";\n  display: block;\n  padding-bottom: 50%;\n}\n\n.circleOne {\n  width: 32px;\n  width: 2rem;\n  font-size: small;\n  color: white;\n  background-color: #f2b909;\n  -webkit-transition: width 0.25s ease-in;\n  -o-transition: width 0.25s ease-in;\n  transition: width 0.25s ease-in\n}\n\n.circleOne:hover {\n  width: 48px;\n  width: 3rem;\n  -webkit-transition: width 0.25s ease-in;\n  -o-transition: width 0.25s ease-in;\n  transition: width 0.25s ease-in;\n}\n\n.circleOne:hover ~ .circleTwo {\n      width: 48px;\n      width: 3rem;\n      -webkit-transition: width 0.25s ease-in;\n      -o-transition: width 0.25s ease-in;\n      transition: width 0.25s ease-in;\n}\n\n.circleOne:hover ~ .circleTwo .mainText {\n        font-size: small;\n        -webkit-transition: 0.25s ease-in;\n        -o-transition: 0.25s ease-in;\n        transition: 0.25s ease-in;\n      }\n\n.circleTwo {\n  width: 64px;\n  width: 4rem;\n  background-color: white;\n  color: #333333;\n  -webkit-transition: width 0.25s ease-in;\n  -o-transition: width 0.25s ease-in;\n  transition: width 0.25s ease-in;\n}\n\n.swapText {\n  opacity: 0;\n  -webkit-transition: opacity 0.5s ease-out;\n  -o-transition: opacity 0.5s ease-out;\n  transition: opacity 0.5s ease-out;\n  font-size: small;\n  font-weight: normal;\n}\n\n.mainText {\n  opacity: 1;\n  -webkit-transition: 0.5s ease-in;\n  -o-transition: 0.5s ease-in;\n  transition: 0.5s ease-in;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"circleContainer": "CompareItems-circleContainer-2w1wB",
	"compareButtons": "CompareItems-compareButtons-2OHT8",
	"circleButton": "CompareItems-circleButton-2CYga",
	"mainText": "CompareItems-mainText-2-G4i",
	"swapText": "CompareItems-swapText-3lUdf",
	"compareButtonOne": "CompareItems-compareButtonOne-2k1ys",
	"compareButtonTwo": "CompareItems-compareButtonTwo-G8hsT",
	"circleText": "CompareItems-circleText-1cC6b",
	"circle": "CompareItems-circle-2vYSU",
	"circleOne": "CompareItems-circleOne-LGSX4",
	"circleTwo": "CompareItems-circleTwo-nWBYn"
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n\n.Footer-root-1UUMy {\n  background: #333;\n  color: #fff;\n}\n\n.Footer-container-3dfAC {\n  margin: 0 auto;\n  padding: 20px 15px;\n  max-width: 1000px;\n  text-align: center;\n}\n\n.Footer-text-3ReUN {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.Footer-spacer-297xE {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.Footer-text-3ReUN,\n.Footer-link-3qHjF {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.Footer-link-3qHjF,\n.Footer-link-3qHjF:active,\n.Footer-link-3qHjF:visited {\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n}\n\n.Footer-link-3qHjF:hover {\n  color: rgba(255, 255, 255, 1);\n}\n", "", {"version":3,"sources":["/Users/jvburen/Projects/spikes/react/css-animation/src/components/Footer/Footer.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;;AAED;EACE,iBAAiB;EACjB,YAAY;CACb;;AAED;EACE,eAAe;EACf,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;CACpB;;AAED;EACE,gCAAgC;CACjC;;AAED;EACE,gCAAgC;CACjC;;AAED;;EAEE,iBAAiB;EACjB,eAAe;CAChB;;AAED;;;EAGE,gCAAgC;EAChC,sBAAsB;CACvB;;AAED;EACE,8BAA8B;CAC/B","file":"Footer.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n\n.root {\n  background: #333;\n  color: #fff;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 20px 15px;\n  max-width: 1000px;\n  text-align: center;\n}\n\n.text {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.spacer {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.text,\n.link {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.link,\n.link:active,\n.link:visited {\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n}\n\n.link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Footer-root-1UUMy",
	"container": "Footer-container-3dfAC",
	"text": "Footer-text-3ReUN",
	"spacer": "Footer-spacer-297xE",
	"link": "Footer-link-3qHjF"
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n\n.Header-root-O9oW9 {\n  background: #373277;\n  color: #fff;\n}\n\n.Header-container-qQ2mF {\n  margin: 0 auto;\n  padding: 20px 0;\n  max-width: 1000px;\n}\n\n.Header-brand-2oS_y {\n  color: rgb(146, 229, 252);\n  text-decoration: none;\n  font-size: 1.75em; /* ~28px */\n}\n\n.Header-brandTxt-230aH {\n  margin-left: 10px;\n}\n\n.Header-banner-2AXOj {\n  text-align: center;\n}\n\n.Header-bannerTitle-3dmwX {\n  margin: 0;\n  padding: 10px;\n  font-weight: normal;\n  font-size: 4em;\n  line-height: 1em;\n}\n\n.Header-bannerDesc-I2eY9 {\n  padding: 0;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 1.25em;\n  margin: 0;\n}\n", "", {"version":3,"sources":["/Users/jvburen/Projects/spikes/react/css-animation/src/components/Header/Header.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;;AAED;EACE,oBAAoB;EACpB,YAAY;CACb;;AAED;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;CACnB;;AAED;EACE,0BAA0B;EAC1B,sBAAsB;EACtB,kBAAkB,CAAC,WAAW;CAC/B;;AAED;EACE,kBAAkB;CACnB;;AAED;EACE,mBAAmB;CACpB;;AAED;EACE,UAAU;EACV,cAAc;EACd,oBAAoB;EACpB,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,WAAW;EACX,gCAAgC;EAChC,kBAAkB;EAClB,UAAU;CACX","file":"Header.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n\n.root {\n  background: #373277;\n  color: #fff;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 20px 0;\n  max-width: 1000px;\n}\n\n.brand {\n  color: rgb(146, 229, 252);\n  text-decoration: none;\n  font-size: 1.75em; /* ~28px */\n}\n\n.brandTxt {\n  margin-left: 10px;\n}\n\n.banner {\n  text-align: center;\n}\n\n.bannerTitle {\n  margin: 0;\n  padding: 10px;\n  font-weight: normal;\n  font-size: 4em;\n  line-height: 1em;\n}\n\n.bannerDesc {\n  padding: 0;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 1.25em;\n  margin: 0;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Header-root-O9oW9",
	"container": "Header-container-qQ2mF",
	"brand": "Header-brand-2oS_y",
	"brandTxt": "Header-brandTxt-230aH",
	"banner": "Header-banner-2AXOj",
	"bannerTitle": "Header-bannerTitle-3dmwX",
	"bannerDesc": "Header-bannerDesc-I2eY9"
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n/*\n * normalize.css is imported in JS file.\n * If you import external CSS file from your internal CSS\n * then it will be inlined and processed with CSS modules.\n */\n/*\n * Base styles\n * ========================================================================== */\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: sans-serif;\n  line-height: 1.375; /* ~22px */\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\nbody {\n  margin: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n  overflow-y: scroll;\n}\na {\n  color: #0074c2;\n}\n.Layout-root-1DyeL {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n}\n.Layout-mainContainer-2Kdun {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n  display: block;\n}\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\nbutton {\n  outline: none;\n  border: none;\n  border-radius: 10px;\n  background-color: rgb(85, 81, 139);\n  color: white;\n  height: 100%;\n  padding: 8px;\n  padding: 0.5rem\n}\nbutton:hover {\n  background-color: #373277;\n  cursor: pointer;\n}\nlabel {\n  margin-right: 16px;\n  margin-right: 1rem;\n  font-weight: bold;\n}\ninput[type=\"text\"] {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n\n  -webkit-box-align: center;\n\n      -ms-flex-align: center;\n\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  vertical-align: middle;\n  outline: none;\n  border: 1px solid lightgray;\n  border-radius: 10px;\n  padding-left: 16px;\n  padding-left: 1rem;\n  color: #333333;\n}\ninput[type=\"range\"] {\n  -webkit-appearance: none\n}\ninput[type=\"range\"]::-webkit-slider-runnable-track {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 50%;\n  background: #333333;\n  border: none;\n  border-radius: 2px;\n}\ninput[type=\"range\"]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  position: relative;\n  bottom: 50%;\n  border: solid #373277;\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  background: rgb(85, 81, 139);\n  //margin-top: -10px;\n}\ninput[type=\"range\"]:focus {\n  outline: none;\n}\ninput[type=\"range\"]:focus::-webkit-slider-runnable-track {\n  background: rgb(82, 82, 82);\n}\ninput[type=\"range\"]:focus::-webkit-slider-thumb {\n  background: -webkit-gradient(linear,\n      left top, left bottom,\n      color-stop(10%, rgba(0,0,0,0)),\n      color-stop(50%, rgb(0, 0, 0)),\n      color-stop(90%, rgba(0,0,0,0))\n      );\n  background: -webkit-linear-gradient(top,\n      rgba(0,0,0,0) 10%,\n      rgb(0, 0, 0) 50%,\n      rgba(0,0,0,0) 90%\n      );\n  background: linear-gradient(180deg,\n      rgba(0,0,0,0) 10%,\n      rgb(0, 0, 0) 50%,\n      rgba(0,0,0,0) 90%\n      );\n}\n/*\n * A better looking default horizontal rule\n */\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n/*\n * Remove default fieldset styles.\n */\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n/*\n * Allow only vertical resizing of textareas.\n */\ntextarea {\n  resize: vertical;\n}\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n", "", {"version":3,"sources":["/Users/jvburen/Projects/spikes/react/css-animation/src/components/Layout/Layout.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;AACH;;;;;;;GAOG;AACH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;AACD;;;;GAIG;AACH;;gFAEgF;AAChF;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe,CAAC,YAAY;EAC5B,wBAAwB;EACxB,mBAAmB,CAAC,WAAW;EAC/B,aAAa;EACb,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;MAC1B,2BAA2B;UACvB,uBAAuB;CAChC;AACD;EACE,UAAU;EACV,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;MAC1B,2BAA2B;UACvB,uBAAuB;EAC/B,oBAAoB;MAChB,iBAAiB;UACb,aAAa;EACrB,mBAAmB;CACpB;AACD;EACE,eAAe;CAChB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;MAC1B,2BAA2B;UACvB,uBAAuB;EAC/B,oBAAoB;MAChB,iBAAiB;UACb,aAAa;CACtB;AACD;EACE,oBAAoB;MAChB,iBAAiB;UACb,aAAa;EACrB,eAAe;CAChB;AACD;;;;;;GAMG;AACH;EACE,oBAAoB;EACpB,kBAAkB;CACnB;AACD;EACE,oBAAoB;EACpB,kBAAkB;CACnB;AACD;EACE,cAAc;EACd,aAAa;EACb,oBAAoB;EACpB,mCAAmC;EACnC,aAAa;EACb,aAAa;EACb,aAAa;EACb,eAAe;CAChB;AACD;EACE,0BAA0B;EAC1B,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;CACnB;AACD;EACE,4BAA4B;EAC5B,4BAA4B;EAC5B,qBAAqB;;EAErB,0BAA0B;;MAEtB,uBAAuB;;UAEnB,oBAAoB;EAC5B,yBAAyB;MACrB,sBAAsB;UAClB,wBAAwB;EAChC,uBAAuB;EACvB,cAAc;EACd,4BAA4B;EAC5B,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB;EACnB,eAAe;CAChB;AACD;EACE,wBAAwB;CACzB;AACD;EACE,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,oBAAoB;EACpB,aAAa;EACb,mBAAmB;CACpB;AACD;EACE,yBAAyB;EACzB,mBAAmB;EACnB,YAAY;EACZ,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,6BAA6B;EAC7B,oBAAoB;CACrB;AACD;EACE,cAAc;CACf;AACD;EACE,4BAA4B;CAC7B;AACD;EACE;;;;;QAKM;EACN;;;;QAIM;EACN;;;;QAIM;CACP;AACD;;GAEG;AACH;EACE,eAAe;EACf,YAAY;EACZ,UAAU;EACV,2BAA2B;EAC3B,cAAc;EACd,WAAW;CACZ;AACD;;;;GAIG;AACH;;;;;;EAME,uBAAuB;CACxB;AACD;;GAEG;AACH;EACE,UAAU;EACV,UAAU;EACV,WAAW;CACZ;AACD;;GAEG;AACH;EACE,iBAAiB;CAClB;AACD;;gFAEgF;AAChF;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;CAClB;AACD;;;;gFAIgF;AAChF;EACE;;;IAGE,mCAAmC;IACnC,uBAAuB,CAAC,+DAA+D;IACvF,oCAAoC;YAC5B,4BAA4B;IACpC,6BAA6B;GAC9B;;EAED;;IAEE,2BAA2B;GAC5B;;EAED;IACE,6BAA6B;GAC9B;;EAED;IACE,8BAA8B;GAC/B;;EAED;;;KAGG;EACH;;IAEE,YAAY;GACb;;EAED;;IAEE,uBAAuB;IACvB,yBAAyB;GAC1B;;EAED;;;KAGG;EACH;IACE,4BAA4B;GAC7B;;EAED;;IAEE,yBAAyB;GAC1B;;EAED;IACE,2BAA2B;GAC5B;;EAED;;;IAGE,WAAW;IACX,UAAU;GACX;;EAED;;IAEE,wBAAwB;GACzB;CACF","file":"Layout.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n/*\n * normalize.css is imported in JS file.\n * If you import external CSS file from your internal CSS\n * then it will be inlined and processed with CSS modules.\n */\n/*\n * Base styles\n * ========================================================================== */\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: sans-serif;\n  line-height: 1.375; /* ~22px */\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\nbody {\n  margin: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n  overflow-y: scroll;\n}\na {\n  color: #0074c2;\n}\n.root {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n}\n.mainContainer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n  display: block;\n}\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\nbutton {\n  outline: none;\n  border: none;\n  border-radius: 10px;\n  background-color: rgb(85, 81, 139);\n  color: white;\n  height: 100%;\n  padding: 8px;\n  padding: 0.5rem\n}\nbutton:hover {\n  background-color: #373277;\n  cursor: pointer;\n}\nlabel {\n  margin-right: 16px;\n  margin-right: 1rem;\n  font-weight: bold;\n}\ninput[type=\"text\"] {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n\n  -webkit-box-align: center;\n\n      -ms-flex-align: center;\n\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  vertical-align: middle;\n  outline: none;\n  border: 1px solid lightgray;\n  border-radius: 10px;\n  padding-left: 16px;\n  padding-left: 1rem;\n  color: #333333;\n}\ninput[type=\"range\"] {\n  -webkit-appearance: none\n}\ninput[type=\"range\"]::-webkit-slider-runnable-track {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 50%;\n  background: #333333;\n  border: none;\n  border-radius: 2px;\n}\ninput[type=\"range\"]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  position: relative;\n  bottom: 50%;\n  border: solid #373277;\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  background: rgb(85, 81, 139);\n  //margin-top: -10px;\n}\ninput[type=\"range\"]:focus {\n  outline: none;\n}\ninput[type=\"range\"]:focus::-webkit-slider-runnable-track {\n  background: rgb(82, 82, 82);\n}\ninput[type=\"range\"]:focus::-webkit-slider-thumb {\n  background: -webkit-gradient(linear,\n      left top, left bottom,\n      color-stop(10%, rgba(0,0,0,0)),\n      color-stop(50%, rgb(0, 0, 0)),\n      color-stop(90%, rgba(0,0,0,0))\n      );\n  background: -webkit-linear-gradient(top,\n      rgba(0,0,0,0) 10%,\n      rgb(0, 0, 0) 50%,\n      rgba(0,0,0,0) 90%\n      );\n  background: linear-gradient(180deg,\n      rgba(0,0,0,0) 10%,\n      rgb(0, 0, 0) 50%,\n      rgba(0,0,0,0) 90%\n      );\n}\n/*\n * A better looking default horizontal rule\n */\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n/*\n * Remove default fieldset styles.\n */\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n/*\n * Allow only vertical resizing of textareas.\n */\ntextarea {\n  resize: vertical;\n}\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n:global(.browserupgrade) {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Layout-root-1DyeL",
	"mainContainer": "Layout-mainContainer-2Kdun"
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n\n.MediaButton-root-16FEI {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: white;\n  background-color: transparent;\n  position: relative\n}\n\n.MediaButton-root-16FEI:hover .MediaButton-text-2cqDR {\n      opacity: 0;\n      z-index: -1;\n}\n\n.MediaButton-root-16FEI:hover .MediaButton-transformIcon-2ggyH {\n      margin: 0 4px;\n      border-radius: 50%;\n      padding: 8px 8px;\n      padding: 0.5rem 0.5rem;\n      -webkit-transition: padding 200ms linear,\n        margin 200ms linear,\n        border-radius 200ms linear,\n        background-color 200ms;\n      -o-transition: padding 200ms linear,\n        margin 200ms linear,\n        border-radius 200ms linear,\n        background-color 200ms;\n      transition: padding 200ms linear,\n        margin 200ms linear,\n        border-radius 200ms linear,\n        background-color 200ms;\n}\n\n.MediaButton-root-16FEI:hover .MediaButton-transformIcon-2ggyH * {\n        opacity: 1;\n        -webkit-transition: opacity 1.5s;\n        -o-transition: opacity 1.5s;\n        transition: opacity 1.5s;\n      }\n\n.MediaButton-root-16FEI:hover .MediaButton-squish-hY-HG {\n      margin: 0 4px;\n      border-radius: 50%;\n      padding: 8px 8px;\n      padding: 0.5rem 0.5rem;\n      -webkit-transition: padding 200ms linear,\n        margin 200ms 100ms linear,\n        border-radius 200ms 100ms linear,\n        background-color 200ms;\n      -o-transition: padding 200ms linear,\n        margin 200ms 100ms linear,\n        border-radius 200ms 100ms linear,\n        background-color 200ms;\n      transition: padding 200ms linear,\n        margin 200ms 100ms linear,\n        border-radius 200ms 100ms linear,\n        background-color 200ms;\n}\n\n.MediaButton-root-16FEI:hover .MediaButton-squish-hY-HG * {\n        opacity: 1;\n        -webkit-transition: opacity 1.5s;\n        -o-transition: opacity 1.5s;\n        transition: opacity 1.5s;\n      }\n\n.MediaButton-root-16FEI:hover .MediaButton-squishMe-mAYH2 {\n      border-radius: 50%;\n      padding: 0;\n      margin: 0;\n      -webkit-transition: margin 0s 100ms linear,\n        border-radius 200ms 100ms linear,\n        padding-left 0.1s linear,\n        padding-right 0.1s linear,\n        padding-top 0s 100ms linear,\n        padding-bottom 0s 100ms linear;\n      -o-transition: margin 0s 100ms linear,\n        border-radius 200ms 100ms linear,\n        padding-left 0.1s linear,\n        padding-right 0.1s linear,\n        padding-top 0s 100ms linear,\n        padding-bottom 0s 100ms linear;\n      transition: margin 0s 100ms linear,\n        border-radius 200ms 100ms linear,\n        padding-left 0.1s linear,\n        padding-right 0.1s linear,\n        padding-top 0s 100ms linear,\n        padding-bottom 0s 100ms linear;\n}\n\n.MediaButton-root-16FEI:hover .MediaButton-hide-LoymV {\n      margin: 0 4px;\n      border-radius: 50%;\n      padding: 8px 8px;\n      padding: 0.5rem 0.5rem;\n      -webkit-transition: padding 200ms linear,\n        margin 200ms 100ms linear,\n        border-radius 200ms 100ms linear,\n        background-color 200ms;\n      -o-transition: padding 200ms linear,\n        margin 200ms 100ms linear,\n        border-radius 200ms 100ms linear,\n        background-color 200ms;\n      transition: padding 200ms linear,\n        margin 200ms 100ms linear,\n        border-radius 200ms 100ms linear,\n        background-color 200ms;\n}\n\n.MediaButton-root-16FEI:hover .MediaButton-hide-LoymV * {\n        opacity: 1;\n        -webkit-transition: opacity 1.5s,\n          background-color 200ms;\n        -o-transition: opacity 1.5s,\n          background-color 200ms;\n        transition: opacity 1.5s,\n          background-color 200ms;\n      }\n\n.MediaButton-root-16FEI:hover .MediaButton-hideMe-AVM1D {\n      border-radius: 50%;\n      min-width: 16px;\n      min-width: 1rem;\n      width: auto;\n      padding: 8px 8px;\n      padding: 0.5rem 0.5rem;\n      margin: 0 4px;\n      -webkit-transition: padding-left 100ms ease-in,\n        padding-right 100ms ease-in,\n        width 100ms linear,\n        min-width 100ms linear,\n        width 100ms linear,\n        margin 200ms 100ms linear,\n        border-radius 200ms 100ms linear;\n      -o-transition: padding-left 100ms ease-in,\n        padding-right 100ms ease-in,\n        width 100ms linear,\n        min-width 100ms linear,\n        width 100ms linear,\n        margin 200ms 100ms linear,\n        border-radius 200ms 100ms linear;\n      transition: padding-left 100ms ease-in,\n        padding-right 100ms ease-in,\n        width 100ms linear,\n        min-width 100ms linear,\n        width 100ms linear,\n        margin 200ms 100ms linear,\n        border-radius 200ms 100ms linear;\n}\n\n.MediaButton-defaultHover-1ujKb:hover {\n  background-color: darkgreen;\n}\n\n.MediaButton-text-2cqDR {\n  position: absolute;\n  z-index: 1;\n  text-align: center;\n  opacity: 1;\n  -webkit-transition: opacity 200ms 100ms ease-in;\n  -o-transition: opacity 200ms 100ms ease-in;\n  transition: opacity 200ms 100ms ease-in;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.MediaButton-transformIcon-2ggyH {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n\n  -webkit-box-align: center;\n\n      -ms-flex-align: center;\n\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-width: 1em;\n  vertical-align: middle;\n\n  position: relative;\n  width: auto;\n\n  padding: 8px 4px;\n  padding: 0.5rem 0.25rem;\n\n  background-color: rgb(82, 82, 82);\n\n  border-radius: 0;\n\n  margin: 0 0;\n\n  -webkit-transition: padding 100ms ease-in,\n    border-radius 100ms ease-in,\n    margin 100ms ease-in;\n\n  -o-transition: padding 100ms ease-in,\n    border-radius 100ms ease-in,\n    margin 100ms ease-in;\n\n  transition: padding 100ms ease-in,\n    border-radius 100ms ease-in,\n    margin 100ms ease-in;\n\n}\n\n.MediaButton-transformIcon-2ggyH * {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    text-decoration: none;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    min-width: 1em;\n    vertical-align: middle;\n    opacity: 0;\n  }\n\n.MediaButton-box-1V3fy {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-width: 1em;\n  vertical-align: middle;\n  height: 1em;\n}\n\n.MediaButton-box-1V3fy * {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    min-width: 1em;\n    vertical-align: middle;\n    height: 1em;\n  }\n\n.MediaButton-hide-LoymV {\n\n}\n\n.MediaButton-hideMe-AVM1D {\n  min-width: 0;\n  width: 0;\n  margin: 0;\n  -webkit-transition: padding-left 100ms 100ms ease-in,\n    padding-right 100ms 100ms ease-in,\n    width 100ms ease-in,\n    min-width 100ms ease-in,\n    border-radius 100ms ease-in,\n    margin 100ms ease-in;\n  -o-transition: padding-left 100ms 100ms ease-in,\n    padding-right 100ms 100ms ease-in,\n    width 100ms ease-in,\n    min-width 100ms ease-in,\n    border-radius 100ms ease-in,\n    margin 100ms ease-in;\n  transition: padding-left 100ms 100ms ease-in,\n    padding-right 100ms 100ms ease-in,\n    width 100ms ease-in,\n    min-width 100ms ease-in,\n    border-radius 100ms ease-in,\n    margin 100ms ease-in;\n}\n\n.MediaButton-squish-hY-HG {\n  -webkit-transition: padding 100ms ease-in,\n    border-radius 100ms ease-in,\n    margin 100ms ease-in;\n  -o-transition: padding 100ms ease-in,\n    border-radius 100ms ease-in,\n    margin 100ms ease-in;\n  transition: padding 100ms ease-in,\n    border-radius 100ms ease-in,\n    margin 100ms ease-in;\n}\n\n.MediaButton-squishMe-mAYH2 {\n  border-radius: 0;\n  min-width: 0;\n  width: 0;\n  padding: 8px 12px;\n  padding: 0.5rem 0.75rem;\n  margin: 0;\n  -webkit-transition: padding-left 0.1s 100ms ease-in,\n    padding-right 0.1s 100ms ease-in;\n  -o-transition: padding-left 0.1s 100ms ease-in,\n    padding-right 0.1s 100ms ease-in;\n  transition: padding-left 0.1s 100ms ease-in,\n    padding-right 0.1s 100ms ease-in;\n}\n\n.MediaButton-left-3Y_KF {\n  border-radius: 50% 0 0 50%;\n}\n\n.MediaButton-right-3zJ-E {\n  border-radius: 0 50% 50% 0;\n}\n", "", {"version":3,"sources":["/Users/jvburen/Projects/spikes/react/css-animation/src/components/MediaButton/MediaButton.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;;AAED;EACE,4BAA4B;EAC5B,4BAA4B;EAC5B,qBAAqB;EACrB,yBAAyB;MACrB,sBAAsB;UAClB,wBAAwB;EAChC,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;CACnB;;AAED;MACM,WAAW;MACX,YAAY;CACjB;;AAED;MACM,cAAc;MACd,mBAAmB;MACnB,iBAAiB;MACjB,uBAAuB;MACvB;;;+BAGyB;MACzB;;;+BAGyB;MACzB;;;+BAGyB;CAC9B;;AAED;QACQ,WAAW;QACX,iCAAiC;QACjC,4BAA4B;QAC5B,yBAAyB;OAC1B;;AAEP;MACM,cAAc;MACd,mBAAmB;MACnB,iBAAiB;MACjB,uBAAuB;MACvB;;;+BAGyB;MACzB;;;+BAGyB;MACzB;;;+BAGyB;CAC9B;;AAED;QACQ,WAAW;QACX,iCAAiC;QACjC,4BAA4B;QAC5B,yBAAyB;OAC1B;;AAEP;MACM,mBAAmB;MACnB,WAAW;MACX,UAAU;MACV;;;;;uCAKiC;MACjC;;;;;uCAKiC;MACjC;;;;;uCAKiC;CACtC;;AAED;MACM,cAAc;MACd,mBAAmB;MACnB,iBAAiB;MACjB,uBAAuB;MACvB;;;+BAGyB;MACzB;;;+BAGyB;MACzB;;;+BAGyB;CAC9B;;AAED;QACQ,WAAW;QACX;iCACyB;QACzB;iCACyB;QACzB;iCACyB;OAC1B;;AAEP;MACM,mBAAmB;MACnB,gBAAgB;MAChB,gBAAgB;MAChB,YAAY;MACZ,iBAAiB;MACjB,uBAAuB;MACvB,cAAc;MACd;;;;;;yCAMmC;MACnC;;;;;;yCAMmC;MACnC;;;;;;yCAMmC;CACxC;;AAED;EACE,4BAA4B;CAC7B;;AAED;EACE,mBAAmB;EACnB,WAAW;EACX,mBAAmB;EACnB,WAAW;EACX,gDAAgD;EAChD,2CAA2C;EAC3C,wCAAwC;EACxC,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,yBAAyB;MACrB,sBAAsB;UAClB,wBAAwB;CACjC;;AAED;EACE,4BAA4B;EAC5B,4BAA4B;EAC5B,qBAAqB;;EAErB,0BAA0B;;MAEtB,uBAAuB;;UAEnB,oBAAoB;EAC5B,yBAAyB;MACrB,sBAAsB;UAClB,wBAAwB;EAChC,eAAe;EACf,uBAAuB;;EAEvB,mBAAmB;EACnB,YAAY;;EAEZ,iBAAiB;EACjB,wBAAwB;;EAExB,kCAAkC;;EAElC,iBAAiB;;EAEjB,YAAY;;EAEZ;;yBAEuB;;EAEvB;;yBAEuB;;EAEvB;;yBAEuB;;CAExB;;AAED;IACI,4BAA4B;IAC5B,4BAA4B;IAC5B,qBAAqB;IACrB,sBAAsB;IACtB,0BAA0B;QACtB,uBAAuB;YACnB,oBAAoB;IAC5B,yBAAyB;QACrB,sBAAsB;YAClB,wBAAwB;IAChC,eAAe;IACf,uBAAuB;IACvB,WAAW;GACZ;;AAEH;EACE,4BAA4B;EAC5B,4BAA4B;EAC5B,qBAAqB;EACrB,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,yBAAyB;MACrB,sBAAsB;UAClB,wBAAwB;EAChC,eAAe;EACf,uBAAuB;EACvB,YAAY;CACb;;AAED;IACI,4BAA4B;IAC5B,4BAA4B;IAC5B,qBAAqB;IACrB,0BAA0B;QACtB,uBAAuB;YACnB,oBAAoB;IAC5B,yBAAyB;QACrB,sBAAsB;YAClB,wBAAwB;IAChC,eAAe;IACf,uBAAuB;IACvB,YAAY;GACb;;AAEH;;CAEC;;AAED;EACE,aAAa;EACb,SAAS;EACT,UAAU;EACV;;;;;yBAKuB;EACvB;;;;;yBAKuB;EACvB;;;;;yBAKuB;CACxB;;AAED;EACE;;yBAEuB;EACvB;;yBAEuB;EACvB;;yBAEuB;CACxB;;AAED;EACE,iBAAiB;EACjB,aAAa;EACb,SAAS;EACT,kBAAkB;EAClB,wBAAwB;EACxB,UAAU;EACV;qCACmC;EACnC;qCACmC;EACnC;qCACmC;CACpC;;AAED;EACE,2BAA2B;CAC5B;;AAED;EACE,2BAA2B;CAC5B","file":"MediaButton.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n\n.root {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: white;\n  background-color: transparent;\n  position: relative\n}\n\n.root:hover .text {\n      opacity: 0;\n      z-index: -1;\n}\n\n.root:hover .transformIcon {\n      margin: 0 4px;\n      border-radius: 50%;\n      padding: 8px 8px;\n      padding: 0.5rem 0.5rem;\n      -webkit-transition: padding 200ms linear,\n        margin 200ms linear,\n        border-radius 200ms linear,\n        background-color 200ms;\n      -o-transition: padding 200ms linear,\n        margin 200ms linear,\n        border-radius 200ms linear,\n        background-color 200ms;\n      transition: padding 200ms linear,\n        margin 200ms linear,\n        border-radius 200ms linear,\n        background-color 200ms;\n}\n\n.root:hover .transformIcon * {\n        opacity: 1;\n        -webkit-transition: opacity 1.5s;\n        -o-transition: opacity 1.5s;\n        transition: opacity 1.5s;\n      }\n\n.root:hover .squish {\n      margin: 0 4px;\n      border-radius: 50%;\n      padding: 8px 8px;\n      padding: 0.5rem 0.5rem;\n      -webkit-transition: padding 200ms linear,\n        margin 200ms 100ms linear,\n        border-radius 200ms 100ms linear,\n        background-color 200ms;\n      -o-transition: padding 200ms linear,\n        margin 200ms 100ms linear,\n        border-radius 200ms 100ms linear,\n        background-color 200ms;\n      transition: padding 200ms linear,\n        margin 200ms 100ms linear,\n        border-radius 200ms 100ms linear,\n        background-color 200ms;\n}\n\n.root:hover .squish * {\n        opacity: 1;\n        -webkit-transition: opacity 1.5s;\n        -o-transition: opacity 1.5s;\n        transition: opacity 1.5s;\n      }\n\n.root:hover .squishMe {\n      border-radius: 50%;\n      padding: 0;\n      margin: 0;\n      -webkit-transition: margin 0s 100ms linear,\n        border-radius 200ms 100ms linear,\n        padding-left 0.1s linear,\n        padding-right 0.1s linear,\n        padding-top 0s 100ms linear,\n        padding-bottom 0s 100ms linear;\n      -o-transition: margin 0s 100ms linear,\n        border-radius 200ms 100ms linear,\n        padding-left 0.1s linear,\n        padding-right 0.1s linear,\n        padding-top 0s 100ms linear,\n        padding-bottom 0s 100ms linear;\n      transition: margin 0s 100ms linear,\n        border-radius 200ms 100ms linear,\n        padding-left 0.1s linear,\n        padding-right 0.1s linear,\n        padding-top 0s 100ms linear,\n        padding-bottom 0s 100ms linear;\n}\n\n.root:hover .hide {\n      margin: 0 4px;\n      border-radius: 50%;\n      padding: 8px 8px;\n      padding: 0.5rem 0.5rem;\n      -webkit-transition: padding 200ms linear,\n        margin 200ms 100ms linear,\n        border-radius 200ms 100ms linear,\n        background-color 200ms;\n      -o-transition: padding 200ms linear,\n        margin 200ms 100ms linear,\n        border-radius 200ms 100ms linear,\n        background-color 200ms;\n      transition: padding 200ms linear,\n        margin 200ms 100ms linear,\n        border-radius 200ms 100ms linear,\n        background-color 200ms;\n}\n\n.root:hover .hide * {\n        opacity: 1;\n        -webkit-transition: opacity 1.5s,\n          background-color 200ms;\n        -o-transition: opacity 1.5s,\n          background-color 200ms;\n        transition: opacity 1.5s,\n          background-color 200ms;\n      }\n\n.root:hover .hideMe {\n      border-radius: 50%;\n      min-width: 16px;\n      min-width: 1rem;\n      width: auto;\n      padding: 8px 8px;\n      padding: 0.5rem 0.5rem;\n      margin: 0 4px;\n      -webkit-transition: padding-left 100ms ease-in,\n        padding-right 100ms ease-in,\n        width 100ms linear,\n        min-width 100ms linear,\n        width 100ms linear,\n        margin 200ms 100ms linear,\n        border-radius 200ms 100ms linear;\n      -o-transition: padding-left 100ms ease-in,\n        padding-right 100ms ease-in,\n        width 100ms linear,\n        min-width 100ms linear,\n        width 100ms linear,\n        margin 200ms 100ms linear,\n        border-radius 200ms 100ms linear;\n      transition: padding-left 100ms ease-in,\n        padding-right 100ms ease-in,\n        width 100ms linear,\n        min-width 100ms linear,\n        width 100ms linear,\n        margin 200ms 100ms linear,\n        border-radius 200ms 100ms linear;\n}\n\n.defaultHover:hover {\n  background-color: darkgreen;\n}\n\n.text {\n  position: absolute;\n  z-index: 1;\n  text-align: center;\n  opacity: 1;\n  -webkit-transition: opacity 200ms 100ms ease-in;\n  -o-transition: opacity 200ms 100ms ease-in;\n  transition: opacity 200ms 100ms ease-in;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.transformIcon {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n\n  -webkit-box-align: center;\n\n      -ms-flex-align: center;\n\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-width: 1em;\n  vertical-align: middle;\n\n  position: relative;\n  width: auto;\n\n  padding: 8px 4px;\n  padding: 0.5rem 0.25rem;\n\n  background-color: rgb(82, 82, 82);\n\n  border-radius: 0;\n\n  margin: 0 0;\n\n  -webkit-transition: padding 100ms ease-in,\n    border-radius 100ms ease-in,\n    margin 100ms ease-in;\n\n  -o-transition: padding 100ms ease-in,\n    border-radius 100ms ease-in,\n    margin 100ms ease-in;\n\n  transition: padding 100ms ease-in,\n    border-radius 100ms ease-in,\n    margin 100ms ease-in;\n\n}\n\n.transformIcon * {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    text-decoration: none;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    min-width: 1em;\n    vertical-align: middle;\n    opacity: 0;\n  }\n\n.box {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-width: 1em;\n  vertical-align: middle;\n  height: 1em;\n}\n\n.box * {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    min-width: 1em;\n    vertical-align: middle;\n    height: 1em;\n  }\n\n.hide {\n\n}\n\n.hideMe {\n  min-width: 0;\n  width: 0;\n  margin: 0;\n  -webkit-transition: padding-left 100ms 100ms ease-in,\n    padding-right 100ms 100ms ease-in,\n    width 100ms ease-in,\n    min-width 100ms ease-in,\n    border-radius 100ms ease-in,\n    margin 100ms ease-in;\n  -o-transition: padding-left 100ms 100ms ease-in,\n    padding-right 100ms 100ms ease-in,\n    width 100ms ease-in,\n    min-width 100ms ease-in,\n    border-radius 100ms ease-in,\n    margin 100ms ease-in;\n  transition: padding-left 100ms 100ms ease-in,\n    padding-right 100ms 100ms ease-in,\n    width 100ms ease-in,\n    min-width 100ms ease-in,\n    border-radius 100ms ease-in,\n    margin 100ms ease-in;\n}\n\n.squish {\n  -webkit-transition: padding 100ms ease-in,\n    border-radius 100ms ease-in,\n    margin 100ms ease-in;\n  -o-transition: padding 100ms ease-in,\n    border-radius 100ms ease-in,\n    margin 100ms ease-in;\n  transition: padding 100ms ease-in,\n    border-radius 100ms ease-in,\n    margin 100ms ease-in;\n}\n\n.squishMe {\n  border-radius: 0;\n  min-width: 0;\n  width: 0;\n  padding: 8px 12px;\n  padding: 0.5rem 0.75rem;\n  margin: 0;\n  -webkit-transition: padding-left 0.1s 100ms ease-in,\n    padding-right 0.1s 100ms ease-in;\n  -o-transition: padding-left 0.1s 100ms ease-in,\n    padding-right 0.1s 100ms ease-in;\n  transition: padding-left 0.1s 100ms ease-in,\n    padding-right 0.1s 100ms ease-in;\n}\n\n.left {\n  border-radius: 50% 0 0 50%;\n}\n\n.right {\n  border-radius: 0 50% 50% 0;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "MediaButton-root-16FEI",
	"text": "MediaButton-text-2cqDR",
	"transformIcon": "MediaButton-transformIcon-2ggyH",
	"squish": "MediaButton-squish-hY-HG",
	"squishMe": "MediaButton-squishMe-mAYH2",
	"hide": "MediaButton-hide-LoymV",
	"hideMe": "MediaButton-hideMe-AVM1D",
	"defaultHover": "MediaButton-defaultHover-1ujKb",
	"box": "MediaButton-box-1V3fy",
	"left": "MediaButton-left-3Y_KF",
	"right": "MediaButton-right-3zJ-E"
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n.Navigation-root-2gcJx {\n  float: right;\n  margin: 6px 0 0;\n}\n\n.Navigation-link-Ntl35 {\n  display: inline-block;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.Navigation-link-Ntl35,\n.Navigation-link-Ntl35:active,\n.Navigation-link-Ntl35:visited {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.Navigation-link-Ntl35:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n.Navigation-highlight-2UNlq {\n  margin-right: 8px;\n  margin-left: 8px;\n  border-radius: 3px;\n  background: rgba(0, 0, 0, 0.15);\n  color: #fff;\n}\n\n.Navigation-highlight-2UNlq:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.Navigation-spacer-3vZVG {\n  color: rgba(255, 255, 255, 0.3);\n}\n", "", {"version":3,"sources":["/Users/jvburen/Projects/spikes/react/css-animation/src/components/Navigation/Navigation.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,aAAa;EACb,gBAAgB;CACjB;;AAED;EACE,sBAAsB;EACtB,iBAAiB;EACjB,sBAAsB;EACtB,mBAAmB,CAAC,WAAW;CAChC;;AAED;;;EAGE,gCAAgC;CACjC;;AAED;EACE,8BAA8B;CAC/B;;AAED;EACE,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,gCAAgC;EAChC,YAAY;CACb;;AAED;EACE,+BAA+B;CAChC;;AAED;EACE,gCAAgC;CACjC","file":"Navigation.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n.root {\n  float: right;\n  margin: 6px 0 0;\n}\n\n.link {\n  display: inline-block;\n  padding: 3px 8px;\n  text-decoration: none;\n  font-size: 1.125em; /* ~18px */\n}\n\n.link,\n.link:active,\n.link:visited {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n\n.highlight {\n  margin-right: 8px;\n  margin-left: 8px;\n  border-radius: 3px;\n  background: rgba(0, 0, 0, 0.15);\n  color: #fff;\n}\n\n.highlight:hover {\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.spacer {\n  color: rgba(255, 255, 255, 0.3);\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Navigation-root-2gcJx",
	"link": "Navigation-link-Ntl35",
	"highlight": "Navigation-highlight-2UNlq",
	"spacer": "Navigation-spacer-3vZVG"
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n\n.Page-root-2VuHt {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Page-container-QOUG7 {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/Users/jvburen/Projects/spikes/react/css-animation/src/components/Page/Page.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;;AAED;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAkB;CACnB","file":"Page.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Page-root-2VuHt",
	"container": "Page-container-QOUG7"
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Sun.css","sourceRoot":""}]);

// exports


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n\n.Contact-root-3ydpW {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Contact-container-2rVw2 {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/Users/jvburen/Projects/spikes/react/css-animation/src/routes/contact/Contact.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;;AAED;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAkB;CACnB","file":"Contact.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Contact-root-3ydpW",
	"container": "Contact-container-2rVw2"
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 2em;\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 32px;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n}\n", "", {"version":3,"sources":["/Users/jvburen/Projects/spikes/react/css-animation/src/routes/error/ErrorPage.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;EACE,iBAAiB;EACjB,UAAU;CACX;;AAED;EACE,YAAY;EACZ,eAAe;EACf,wBAAwB;EACxB,aAAa;EACb,mBAAmB;EACnB,YAAY;CACb;;AAED;EACE,oBAAoB;EACpB,uBAAuB;EACvB,aAAa;CACd;;AAED;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,eAAe;EACf,aAAa;CACd;;AAED;EACE,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;CAClB;;AAED;EACE;;IAEE,WAAW;GACZ;;EAED;IACE,iBAAiB;IACjB,kBAAkB;GACnB;CACF","file":"ErrorPage.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n* {\n  line-height: 1.2;\n  margin: 0;\n}\n\nhtml {\n  color: #888;\n  display: table;\n  font-family: sans-serif;\n  height: 100%;\n  text-align: center;\n  width: 100%;\n}\n\nbody {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 2em;\n}\n\nh1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400;\n}\n\np {\n  margin: 0 auto;\n  width: 280px;\n}\n\npre {\n  text-align: left;\n  margin-top: 32px;\n  margin-top: 2rem;\n}\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%;\n  }\n\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.Home-content-1BGUJ {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n  padding: 0 0 16px 0;\n  padding: 0 0 1rem 0;\n  margin: 0 auto;\n  max-width: 1000px;\n}\n.Home-column-7h2Zk {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n}\n.Home-row-1MfJf {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 16px 0;\n  margin: 1rem 0;\n}\n.Home-animationContainer-2whAx {\n  height: 0;\n  width: 100%;\n  padding-bottom: 50%;\n  padding-top: 50%;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  background-color: black;\n}\n.Home-buttonContainer-rrXGX {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0 4px;\n  padding: 0 0.25rem;\n}\n.Home-twitter-3j9ZP:hover {\n  background-color: #794BC4;\n}\n.Home-dribble-23a20:hover {\n  background-color: #DF3E7B;\n}\n.Home-facebook-BP3rk:hover {\n  background-color: #3B5998;\n}\n.Home-slack-vRQeT:hover {\n  background-color: white;\n}\n.Home-slack-vRQeT:hover i {\n      color: black;\n}\n.Home-exampleTwo-26mRB {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 16px;\n  padding: 1rem;\n  background-color: #333333;\n  height: 64px;\n  height: 4rem;\n}\n.Home-textBox-24n0A {\n  display: inline-block;\n}\na {\n  color: white;\n}\n.Home-link-Y_GIW {\n  color: #373277;\n}\n.Home-animation-R_wCJ {\n  z-index: 1;\n  position: relative;\n}\n.Home-sun-14hMD {\n  position: absolute;\n}\n", "", {"version":3,"sources":["/Users/jvburen/Projects/spikes/react/css-animation/src/routes/home/Home.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;AACH;;;;;;;GAOG;AACH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;MAC1B,2BAA2B;UACvB,uBAAuB;EAC/B,oBAAoB;MAChB,iBAAiB;UACb,aAAa;EACrB,oBAAoB;EACpB,oBAAoB;EACpB,eAAe;EACf,kBAAkB;CACnB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;MAC1B,2BAA2B;UACvB,uBAAuB;EAC/B,oBAAoB;MAChB,iBAAiB;UACb,aAAa;CACtB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,eAAe;EACf,eAAe;CAChB;AACD;EACE,UAAU;EACV,YAAY;EACZ,oBAAoB;EACpB,iBAAiB;EACjB,oBAAoB;MAChB,iBAAiB;UACb,aAAa;EACrB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,yBAAyB;MACrB,sBAAsB;UAClB,wBAAwB;EAChC,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,mBAAmB;EACnB,wBAAwB;CACzB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,yBAAyB;MACrB,sBAAsB;UAClB,wBAAwB;EAChC,eAAe;EACf,mBAAmB;CACpB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,wBAAwB;CACzB;AACD;MACM,aAAa;CAClB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,yBAAyB;MACrB,sBAAsB;UAClB,wBAAwB;EAChC,cAAc;EACd,cAAc;EACd,0BAA0B;EAC1B,aAAa;EACb,aAAa;CACd;AACD;EACE,sBAAsB;CACvB;AACD;EACE,aAAa;CACd;AACD;EACE,eAAe;CAChB;AACD;EACE,WAAW;EACX,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB","file":"Home.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n.content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n  padding: 0 0 16px 0;\n  padding: 0 0 1rem 0;\n  margin: 0 auto;\n  max-width: 1000px;\n}\n.column {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n}\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 16px 0;\n  margin: 1rem 0;\n}\n.animationContainer {\n  height: 0;\n  width: 100%;\n  padding-bottom: 50%;\n  padding-top: 50%;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  background-color: black;\n}\n.buttonContainer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0 4px;\n  padding: 0 0.25rem;\n}\n.twitter:hover {\n  background-color: #794BC4;\n}\n.dribble:hover {\n  background-color: #DF3E7B;\n}\n.facebook:hover {\n  background-color: #3B5998;\n}\n.slack:hover {\n  background-color: white;\n}\n.slack:hover i {\n      color: black;\n}\n.exampleTwo {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 16px;\n  padding: 1rem;\n  background-color: #333333;\n  height: 64px;\n  height: 4rem;\n}\n.textBox {\n  display: inline-block;\n}\na {\n  color: white;\n}\n.link {\n  color: #373277;\n}\n.animation {\n  z-index: 1;\n  position: relative;\n}\n.sun {\n  position: absolute;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"content": "Home-content-1BGUJ",
	"column": "Home-column-7h2Zk",
	"row": "Home-row-1MfJf",
	"animationContainer": "Home-animationContainer-2whAx",
	"buttonContainer": "Home-buttonContainer-rrXGX",
	"twitter": "Home-twitter-3j9ZP",
	"dribble": "Home-dribble-23a20",
	"facebook": "Home-facebook-BP3rk",
	"slack": "Home-slack-vRQeT",
	"exampleTwo": "Home-exampleTwo-26mRB",
	"textBox": "Home-textBox-24n0A",
	"link": "Home-link-Y_GIW",
	"animation": "Home-animation-R_wCJ",
	"sun": "Home-sun-14hMD"
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n\n.NotFound-root-3_3g8 {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.NotFound-container-3FKMx {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/Users/jvburen/Projects/spikes/react/css-animation/src/routes/notFound/NotFound.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;;AAED;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAkB;CACnB","file":"NotFound.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "NotFound-root-3_3g8",
	"container": "NotFound-container-3FKMx"
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n", "", {"version":3,"sources":["/Users/jvburen/Projects/spikes/react/css-animation/node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,4EAA4E;;AAE5E;gFACgF;;AAEhF;;;;GAIG;;AAEH;EACE,kBAAkB,CAAC,OAAO;EAC1B,2BAA2B,CAAC,OAAO;EACnC,+BAA+B,CAAC,OAAO;CACxC;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,UAAU;CACX;;AAED;;GAEG;;AAEH;;;;;;EAME,eAAe;CAChB;;AAED;;;GAGG;;AAEH;EACE,eAAe;EACf,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;OAEO,OAAO;EACZ,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;;GAGG;;AAEH;EACE,wBAAwB,CAAC,OAAO;EAChC,UAAU,CAAC,OAAO;EAClB,kBAAkB,CAAC,OAAO;CAC3B;;AAED;;;GAGG;;AAEH;EACE,kCAAkC,CAAC,OAAO;EAC1C,eAAe,CAAC,OAAO;CACxB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,sCAAsC,CAAC,OAAO;CAC/C;;AAED;;;GAGG;;AAEH;EACE,oBAAoB,CAAC,OAAO;EAC5B,2BAA2B,CAAC,OAAO;EACnC,kCAAkC,CAAC,OAAO;CAC3C;;AAED;;GAEG;;AAEH;;EAEE,qBAAqB;CACtB;;AAED;;GAEG;;AAEH;;EAEE,oBAAoB;CACrB;;AAED;;;GAGG;;AAEH;;;EAGE,kCAAkC,CAAC,OAAO;EAC1C,eAAe,CAAC,OAAO;CACxB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,uBAAuB;EACvB,YAAY;CACb;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,yBAAyB;CAC1B;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,YAAY;CACb;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;;EAEE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;EACd,UAAU;CACX;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;;;;EAKE,wBAAwB,CAAC,OAAO;EAChC,gBAAgB,CAAC,OAAO;EACxB,kBAAkB,CAAC,OAAO;EAC1B,UAAU,CAAC,OAAO;CACnB;;AAED;;;GAGG;;AAEH;QACQ,OAAO;EACb,kBAAkB;CACnB;;AAED;;;GAGG;;AAEH;SACS,OAAO;EACd,qBAAqB;CACtB;;AAED;;;;GAIG;;AAEH;;;;EAIE,2BAA2B,CAAC,OAAO;CACpC;;AAED;;GAEG;;AAEH;;;;EAIE,mBAAmB;EACnB,WAAW;CACZ;;AAED;;GAEG;;AAEH;;;;EAIE,+BAA+B;CAChC;;AAED;;GAEG;;AAEH;EACE,+BAA+B;CAChC;;AAED;;;;;GAKG;;AAEH;EACE,uBAAuB,CAAC,OAAO;EAC/B,eAAe,CAAC,OAAO;EACvB,eAAe,CAAC,OAAO;EACvB,gBAAgB,CAAC,OAAO;EACxB,WAAW,CAAC,OAAO;EACnB,oBAAoB,CAAC,OAAO;CAC7B;;AAED;;;GAGG;;AAEH;EACE,sBAAsB,CAAC,OAAO;EAC9B,yBAAyB,CAAC,OAAO;CAClC;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,uBAAuB,CAAC,OAAO;EAC/B,WAAW,CAAC,OAAO;CACpB;;AAED;;GAEG;;AAEH;;EAEE,aAAa;CACd;;AAED;;;GAGG;;AAEH;EACE,8BAA8B,CAAC,OAAO;EACtC,qBAAqB,CAAC,OAAO;CAC9B;;AAED;;GAEG;;AAEH;;EAEE,yBAAyB;CAC1B;;AAED;;;GAGG;;AAEH;EACE,2BAA2B,CAAC,OAAO;EACnC,cAAc,CAAC,OAAO;CACvB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;EAEE,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;CACf;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,cAAc;CACf","file":"normalize.css","sourcesContent":["/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/Header/logo-small.png?2f751285";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/Header/logo-small@2x.png?8844262b";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(45);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./CompareItems.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./CompareItems.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(46);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./Footer.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./Footer.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(47);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./Header.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./Header.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(48);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./Layout.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./Layout.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(49);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./MediaButton.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./MediaButton.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(50);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./Navigation.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./Navigation.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(51);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./Page.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./Page.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(52);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./Sun.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./Sun.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(53);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./Contact.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./Contact.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(55);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./Home.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./Home.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(56);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./NotFound.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js??ref--1-2!./NotFound.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(57);
    var insertCss = __webpack_require__(2);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../css-loader/index.js??ref--2-1!./normalize.css", function() {
        content = require("!!../css-loader/index.js??ref--2-1!./normalize.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = {"title":"About Us","component":"ContentPage","html":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat\ntortor fermentum mi fermentum dignissim. Nullam vel ipsum ut ligula elementum\nlobortis. Maecenas aliquam, massa laoreet lacinia pretium, nisi urna venenatis\ntortor, nec imperdiet tellus libero efficitur metus. Fusce semper posuere\nligula, et facilisis metus bibendum interdum. Mauris at mauris sit amet sem\npharetra commodo a eu leo. Nam at est non risus cursus maximus. Nam feugiat\naugue libero, id consectetur tortor bibendum non. Quisque nec fringilla lorem.\nNullam efficitur vulputate mauris, nec maximus leo dignissim id.</p>\n<p>In hac habitasse platea dictumst. Duis sagittis dui ac ex suscipit maximus.\nMorbi pellentesque venenatis felis sed convallis. Nulla varius, nibh vitae\nplacerat tempus, mauris sem elementum ipsum, eget sollicitudin nisl est vel\npurus. Fusce malesuada odio velit, non cursus leo fermentum id. Cras pharetra\nsodales fringilla. Etiam quis est a dolor egestas pellentesque. Maecenas non\nscelerisque purus, congue cursus arcu. Donec vel dapibus mi. Mauris maximus\nposuere placerat. Sed et libero eu nibh tristique mollis a eget lectus. Donec\ninterdum augue sollicitudin vehicula hendrerit. Vivamus justo orci, molestie\nac sollicitudin ac, lobortis at tellus. Etiam rhoncus ullamcorper risus eu\ntempor. Sed porttitor, neque ac efficitur gravida, arcu lacus pharetra dui, in\nconsequat elit tellus auctor nulla. Donec placerat elementum diam, vitae\nimperdiet lectus luctus at.</p>\n<p>Nullam eu feugiat mi. Quisque nec tristique nisl, dignissim dictum leo. Nam\nnon quam nisi. Donec rutrum turpis ac diam blandit, id pulvinar mauris\nsuscipit. Pellentesque tincidunt libero ultricies risus iaculis, sit amet\nconsequat velit blandit. Fusce quis varius nulla. Nullam nisi nisi, suscipit\nut magna quis, feugiat porta nibh. Sed id enim lectus. Suspendisse elementum\njusto sapien, sit amet consequat orci accumsan et. Aliquam ornare ullamcorper\nsem sed finibus. Nullam ac lacus pulvinar, egestas felis ut, accumsan est.</p>\n<p>Pellentesque sagittis vehicula sem quis luctus. Proin sodales magna in lorem\nhendrerit aliquam. Integer eu varius orci. Vestibulum ante ipsum primis in\nfaucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ante ipsum\nprimis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut at mauris\nnibh. Suspendisse maximus ac eros at vestibulum.</p>\n<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque egestas\ntortor et dui consequat faucibus. Nunc vitae odio ornare, venenatis ligula a,\nvulputate nisl. Aenean congue varius ex, sit amet bibendum odio posuere at.\nNulla facilisi. In finibus, nulla vitae tincidunt ornare, sapien nulla\nfermentum mauris, sed consectetur tortor arcu eget arcu. Vestibulum vel quam\nenim.</p>\n"};

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("./assets.json");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("express-graphql");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("express-jwt");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("history/createBrowserHistory");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("pretty-error");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("universal-router");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(13);
module.exports = __webpack_require__(12);


/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map