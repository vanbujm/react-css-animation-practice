webpackJsonp([1],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(178);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/components/Link/Link.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Link.__proto__ || Object.getPrototypeOf(Link)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) {
        _this.props.onClick(event);
      }

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }

      if (event.defaultPrevented === true) {
        return;
      }

      event.preventDefault();
      __WEBPACK_IMPORTED_MODULE_2__history__["a" /* default */].push(_this.props.to);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Link, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          to = _props.to,
          children = _props.children,
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
  }]);

  return Link;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

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

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__ = __webpack_require__(561);
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
/* harmony default export */ __webpack_exports__["a"] = (true && __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default()());

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redbox_react__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redbox_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redbox_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_deep_force_update__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_deep_force_update___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_deep_force_update__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fastclick__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fastclick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_fastclick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_query_string__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_query_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_query_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_history_PathUtils__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_history_PathUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_history_PathUtils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_App__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__createFetch__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store_configureStore__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__history__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__DOMUtils__ = __webpack_require__(266);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/client.js',
    _this = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Re-render the app when window.location changes
var onLocationChange = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(location, action) {
    var route;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Remember the latest scroll position for the previous location
            scrollPositionsHistory[currentLocation.key] = {
              scrollX: window.pageXOffset,
              scrollY: window.pageYOffset
            };
            // Delete stored scroll position for next page if any
            if (action === 'PUSH') {
              delete scrollPositionsHistory[location.key];
            }
            currentLocation = location;

            _context.prev = 3;
            _context.next = 6;
            return router.resolve(_extends({}, context, {
              path: location.pathname,
              query: __WEBPACK_IMPORTED_MODULE_5_query_string___default.a.parse(location.search)
            }));

          case 6:
            route = _context.sent;

            if (!(currentLocation.key !== location.key)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt('return');

          case 9:
            if (!route.redirect) {
              _context.next = 12;
              break;
            }

            __WEBPACK_IMPORTED_MODULE_10__history__["a" /* default */].replace(route.redirect);
            return _context.abrupt('return');

          case 12:

            appInstance = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7__components_App__["a" /* default */],
              { context: context, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 137
                },
                __self: this
              },
              route.component
            ), container, function () {
              return onRenderComplete(route, location);
            });
            _context.next = 24;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context['catch'](3);

            if (false) {
              _context.next = 22;
              break;
            }

            appInstance = null;
            document.title = 'Error: ' + _context.t0.message;
            __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_redbox_react___default.a, { error: _context.t0, __source: {
                fileName: _jsxFileName,
                lineNumber: 146
              },
              __self: this
            }), container);
            throw _context.t0;

          case 22:

            console.error(_context.t0);

            // Do a full page reload if error occurs during client-side navigation
            if (action && currentLocation.key === location.key) {
              window.location.reload();
            }

          case 24:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 15]]);
  }));

  return function onLocationChange(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// Handle client-side navigation by using HTML5 History API
// For more information visit https://github.com/mjackson/history#readme


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

// Global (context) variables that can be easily accessed from any React component
// https://facebook.github.io/react/docs/context.html
var context = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: function insertCss() {
    for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
      styles[_key] = arguments[_key];
    }

    // eslint-disable-next-line no-underscore-dangle
    var removeCss = styles.map(function (x) {
      return x._insertCss();
    });
    return function () {
      removeCss.forEach(function (f) {
        return f();
      });
    };
  },
  // Universal HTTP client
  fetch: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__createFetch__["a" /* default */])({
    baseUrl: window.App.apiUrl
  }),
  // Initialize a new Redux store
  // http://redux.js.org/docs/basics/UsageWithReact.html
  store: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__store_configureStore__["a" /* default */])(window.App.state, { history: __WEBPACK_IMPORTED_MODULE_10__history__["a" /* default */] }),
  storeSubscription: null
};

// Switch off the native scroll restoration behavior and handle it manually
// https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration
var scrollPositionsHistory = {};
if (window.history && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

var onRenderComplete = function initialRenderComplete() {
  var elem = document.getElementById('css');
  if (elem) elem.parentNode.removeChild(elem);
  onRenderComplete = function renderComplete(route, location) {
    document.title = route.title;

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__DOMUtils__["a" /* updateMeta */])('description', route.description);
    // Update necessary tags in <head> at runtime here, ie:
    // updateMeta('keywords', route.keywords);
    // updateCustomMeta('og:url', route.canonicalUrl);
    // updateCustomMeta('og:image', route.imageUrl);
    // updateLink('canonical', route.canonicalUrl);
    // etc.

    var scrollX = 0;
    var scrollY = 0;
    var pos = scrollPositionsHistory[location.key];
    if (pos) {
      scrollX = pos.scrollX;
      scrollY = pos.scrollY;
    } else {
      var targetHash = location.hash.substr(1);
      if (targetHash) {
        var target = document.getElementById(targetHash);
        if (target) {
          scrollY = window.pageYOffset + target.getBoundingClientRect().top;
        }
      }
    }

    // Restore the scroll position if it was saved into the state
    // or scroll to the given #hash anchor
    // or scroll to top of the page
    window.scrollTo(scrollX, scrollY);

    // Google Analytics tracking. Don't send 'pageview' event after
    // the initial rendering, as it was already sent
    if (window.ga) {
      window.ga('send', 'pageview', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_history_PathUtils__["createPath"])(location));
    }
  };
};

// Make taps on links and buttons work fast on mobiles
__WEBPACK_IMPORTED_MODULE_4_fastclick___default.a.attach(document.body);

var container = document.getElementById('app');
var appInstance = void 0;
var currentLocation = __WEBPACK_IMPORTED_MODULE_10__history__["a" /* default */].location;
var router = __webpack_require__(283).default;__WEBPACK_IMPORTED_MODULE_10__history__["a" /* default */].listen(onLocationChange);
onLocationChange(currentLocation);

// Handle errors that might happen after rendering
// Display the error in full-screen for development mode
if (true) {
  window.addEventListener('error', function (event) {
    appInstance = null;
    document.title = 'Runtime Error: ' + event.error.message;
    __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_redbox_react___default.a, { error: event.error, __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: _this
    }), container);
  });
}

// Enable Hot Module Replacement (HMR)
if (false) {
  module.hot.accept('./router', function () {
    router = require('./router').default;

    if (appInstance) {
      try {
        // Force-update the whole tree, including components that refuse to update
        deepForceUpdate(appInstance);
      } catch (error) {
        appInstance = null;
        document.title = 'Hot Update Error: ' + error.message;
        ReactDOM.render(React.createElement(ErrorReporter, { error: error, __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          __self: _this
        }), container);
        return;
      }
    }

    onLocationChange(currentLocation);
  });
}

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export updateTag */
/* harmony export (immutable) */ __webpack_exports__["a"] = updateMeta;
/* unused harmony export updateCustomMeta */
/* unused harmony export updateLink */
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

function updateTag(tagName, keyName, keyValue, attrName, attrValue) {
  var node = document.head.querySelector(tagName + '[' + keyName + '="' + keyValue + '"]');
  if (node && node.getAttribute(attrName) === attrValue) return;

  // Remove and create a new tag in order to make it work with bookmarks in Safari
  if (node) {
    node.parentNode.removeChild(node);
  }
  if (typeof attrValue === 'string') {
    var nextNode = document.createElement(tagName);
    nextNode.setAttribute(keyName, keyValue);
    nextNode.setAttribute(attrName, attrValue);
    document.head.appendChild(nextNode);
  }
}

function updateMeta(name, content) {
  updateTag('meta', 'name', name, 'content', content);
}

function updateCustomMeta(property, content) {
  updateTag('meta', 'property', property, 'content', content);
}

function updateLink(rel, href) {
  updateTag('link', 'rel', rel, 'href', href);
}

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(666);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var ContextType = _extends({
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  // Universal HTTP client
  fetch: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
}, __WEBPACK_IMPORTED_MODULE_2_react_redux__["a" /* Provider */].childContextTypes);

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

var App = function (_React$PureComponent) {
  _inherits(App, _React$PureComponent);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return this.props.context;
    }
  }, {
    key: 'render',
    value: function render() {
      // NOTE: If you need to add or modify header, footer etc. of the app,
      // please do that inside the Layout component.
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only(this.props.children);
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

App.propTypes = {
  context: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape(ContextType).isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
};
App.childContextTypes = ContextType;


/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CompareItems_css__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CompareItems_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__CompareItems_css__);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/components/CompareItems/CompareItems.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var CompareItems = function (_Component) {
  _inherits(CompareItems, _Component);

  function CompareItems() {
    _classCallCheck(this, CompareItems);

    return _possibleConstructorReturn(this, (CompareItems.__proto__ || Object.getPrototypeOf(CompareItems)).apply(this, arguments));
  }

  _createClass(CompareItems, [{
    key: 'render',
    value: function render() {
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
  }]);

  return CompareItems;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

CompareItems.propTypes = {
  hrefs: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string).isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__CompareItems_css___default.a)(CompareItems));

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/components/Earth/Earth.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/forbid-prop-types */



var Earth = function (_React$Component) {
  _inherits(Earth, _React$Component);

  function Earth() {
    _classCallCheck(this, Earth);

    return _possibleConstructorReturn(this, (Earth.__proto__ || Object.getPrototypeOf(Earth)).apply(this, arguments));
  }

  _createClass(Earth, [{
    key: 'render',
    value: function render() {
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
  }]);

  return Earth;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

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

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_css__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Footer_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(114);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/components/Footer/Footer.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
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
  }]);

  return Footer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Footer_css___default.a)(Footer));

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_css__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Header_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Header_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Navigation__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logo_small_png__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logo_small_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__logo_small_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logo_small_2x_png__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logo_small_2x_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__logo_small_2x_png__);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/components/Header/Header.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
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
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: __WEBPACK_IMPORTED_MODULE_5__logo_small_png___default.a, srcSet: __WEBPACK_IMPORTED_MODULE_6__logo_small_2x_png___default.a + ' 2x', width: '38', height: '38', alt: 'React', __source: {
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
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Header_css___default.a)(Header));

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__MediaButton_css__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__MediaButton_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__MediaButton_css__);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/components/MediaButton/MediaButton.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/no-did-mount-set-state,react/no-array-index-key,max-len */






var ICON_WIDTH = 25;

var MediaButton = function (_Component) {
  _inherits(MediaButton, _Component);

  _createClass(MediaButton, null, [{
    key: 'isMiddleIndex',
    value: function isMiddleIndex(array, index) {
      return !(index === 0 || index === array.length - 1);
    }
  }]);

  function MediaButton(props) {
    _classCallCheck(this, MediaButton);

    var _this = _possibleConstructorReturn(this, (MediaButton.__proto__ || Object.getPrototypeOf(MediaButton)).call(this, props));

    _this.state = {
      maxWidth: 100
    };
    return _this;
  }

  _createClass(MediaButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setMaxWidth();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.setMaxWidth();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.setMaxWidth();
    }
  }, {
    key: 'setMaxWidth',
    value: function setMaxWidth() {
      var paddingWidth = 2 * ICON_WIDTH;

      var maxWidth = this.divElement !== null ? this.divElement.clientWidth + paddingWidth : paddingWidth;
      // if (ICON_WIDTH * this.props.children.length > maxWidth) maxWidth = ICON_WIDTH * this.props.children.length;

      if (this.state.maxWidth !== maxWidth) {
        this.setState({ maxWidth: maxWidth });
      }
    }
  }, {
    key: 'createButtonList',
    value: function createButtonList(iconArray) {
      var _this2 = this;

      var iconArrayElement = [];

      var currentNumberOfElements = 0;

      var maxNumberOfElements = Math.ceil(this.state.maxWidth / ICON_WIDTH);

      iconArray.forEach(function (child) {
        currentNumberOfElements += 1;
        iconArrayElement.push([child, child.props['data-parent-class'] ? child.props['data-parent-class'] : __WEBPACK_IMPORTED_MODULE_4__MediaButton_css___default.a.defaultHover]);
      });

      var buttonSize = 'perfect';

      if (currentNumberOfElements * ICON_WIDTH < this.state.maxWidth) buttonSize = 'too small';
      if (currentNumberOfElements > maxNumberOfElements) buttonSize = 'too big';
      if (buttonSize === 'too small') {
        iconArrayElement = iconArrayElement.map(function (element) {
          return [element[0], __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__MediaButton_css___default.a.squish, element[1])];
        });
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
        iconArrayElement = iconArrayElement.map(function (element, index, arr) {
          if (MediaButton.isMiddleIndex(arr, index)) {
            return [element[0], __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__MediaButton_css___default.a.hideMe, element[1])];
          }
          return [element[0], __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__MediaButton_css___default.a.hide, element[1])];
        });
      }

      iconArrayElement = iconArrayElement.map(function (element, index) {
        if (index === 0) {
          return [element[0], __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__MediaButton_css___default.a.transformIcon, __WEBPACK_IMPORTED_MODULE_4__MediaButton_css___default.a.left, element[1])];
        }
        if (iconArrayElement.length - 1 === index) {
          return [element[0], __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__MediaButton_css___default.a.transformIcon, __WEBPACK_IMPORTED_MODULE_4__MediaButton_css___default.a.right, element[1])];
        }
        return [element[0], __WEBPACK_IMPORTED_MODULE_3_classnames___default()(__WEBPACK_IMPORTED_MODULE_4__MediaButton_css___default.a.transformIcon, element[1])];
      });

      iconArrayElement = iconArrayElement.map(function (element, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { key: index, className: element[1], __source: {
              fileName: _jsxFileName,
              lineNumber: 111
            },
            __self: _this2
          },
          element[0]
        );
      });

      return iconArrayElement;
    }

    // style={{ minWidth: this.state.maxWidth, maxWidth: this.state.maxWidth }}

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var icons = this.createButtonList(this.props.children);
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
            ref: function ref(divElement) {
              _this3.divElement = divElement;
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
  }]);

  return MediaButton;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

MediaButton.propTypes = {
  text: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element]).isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__MediaButton_css___default.a)(MediaButton));

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/components/Moon/Moon.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/forbid-prop-types */



var Moon = function (_React$Component) {
  _inherits(Moon, _React$Component);

  function Moon() {
    _classCallCheck(this, Moon);

    return _possibleConstructorReturn(this, (Moon.__proto__ || Object.getPrototypeOf(Moon)).apply(this, arguments));
  }

  _createClass(Moon, [{
    key: 'render',
    value: function render() {
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
  }]);

  return Moon;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

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

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Navigation_css__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Navigation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Navigation_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(114);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/components/Navigation/Navigation.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






var Navigation = function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation() {
    _classCallCheck(this, Navigation);

    return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
  }

  _createClass(Navigation, [{
    key: 'render',
    value: function render() {
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
  }]);

  return Navigation;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Navigation_css___default.a)(Navigation));

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(694);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/components/Orbiter/Orbiter.js';

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function Orbiter(orbitRadius, options) {
  var _this = this;

  var defaultOptions = {
    keyframeString: '\n        from {\n          transform: rotate(0deg) translate(' + orbitRadius + 'px) rotate(0deg);\n        }\n      \n        to {\n          transform: rotate(360deg) translate(' + orbitRadius + 'px) rotate(-360deg);\n        }\n      ',
    css: {
      animationDuration: '10s',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      position: 'relative',
      zIndex: 1
    }
  };

  var finalOptions = Object.assign({}, defaultOptions, options);

  var componentStyle = '\n      z-index: ' + finalOptions.css.zIndex + ';\n      position: ' + finalOptions.css.position + ';\n      animation-name: ' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* keyframes */])(_templateObject, finalOptions.keyframeString) + ';\n      animation-timing-function: ' + finalOptions.css.animationTimingFunction + ';\n      animation-duration: ' + finalOptions.css.animationDuration + ';\n      animation-iteration-count: ' + finalOptions.css.animationIterationCount + ';\n    ';

  return function (ComponentToOrbit) {
    var WithOrbit = function WithOrbit(_ref) {
      var className = _ref.className,
          props = _objectWithoutProperties(_ref, ['className']);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ComponentToOrbit, _extends({}, props, { className: className, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: _this
      }));
    };

    WithOrbit.displayName = 'Orbiter(' + getDisplayName(ComponentToOrbit) + ')';
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* default */])(WithOrbit)(_templateObject, componentStyle);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (Orbiter);

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Page_css__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Page_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Page_css__);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/components/Page/Page.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






var Page = function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          html = _props.html;

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
  }]);

  return Page;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Page.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  html: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__Page_css___default.a)(Page));

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Sun_css__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Sun_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Sun_css__);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/components/Sun/Sun.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/forbid-prop-types */





var Sun = function (_React$Component) {
  _inherits(Sun, _React$Component);

  function Sun() {
    _classCallCheck(this, Sun);

    return _possibleConstructorReturn(this, (Sun.__proto__ || Object.getPrototypeOf(Sun)).apply(this, arguments));
  }

  _createClass(Sun, [{
    key: 'render',


    // className={this.props.className} width={this.props.width} height={this.props.height}
    value: function render() {
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
  }]);

  return Sun;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

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

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_RUNTIME_VARIABLE; });
/* eslint-disable import/prefer-default-export */

var SET_RUNTIME_VARIABLE = 'SET_RUNTIME_VARIABLE';

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(564);
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
function createFetch(_ref) {
  var baseUrl = _ref.baseUrl,
      cookie = _ref.cookie;

  // NOTE: Tweak the default options to suite your application needs
  var defaults = {
    method: 'POST', // handy with GraphQL backends
    mode: baseUrl ? 'cors' : 'same-origin',
    credentials: baseUrl ? 'include' : 'same-origin',
    headers: _extends({
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }, cookie ? { Cookie: cookie } : null)
  };

  return function (url, options) {
    return url.startsWith('/graphql') || url.startsWith('/api') ? __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()('' + baseUrl + url, _extends({}, defaults, options, {
      headers: _extends({}, defaults.headers, options && options.headers)
    })) : __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default()(url, options);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (createFetch);

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runtime__ = __webpack_require__(281);




/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["d" /* combineReducers */])({
  user: __WEBPACK_IMPORTED_MODULE_1__user__["a" /* default */],
  runtime: __WEBPACK_IMPORTED_MODULE_2__runtime__["a" /* default */]
}));

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = runtime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(278);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function runtime() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* SET_RUNTIME_VARIABLE */]:
      return _extends({}, state, _defineProperty({}, action.payload.name, action.payload.value));
    default:
      return state;
  }
}

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = user;
function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    default:
      return state;
  }
}

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_router__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes__ = __webpack_require__(289);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




/* harmony default export */ __webpack_exports__["default"] = (new __WEBPACK_IMPORTED_MODULE_0_universal_router___default.a(__WEBPACK_IMPORTED_MODULE_1__routes__["a" /* default */]));

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Page__ = __webpack_require__(276);
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

  action: function action() {
    var _this = this;

    return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__.e/* require.ensure */(0).then((function (require) {
                return __webpack_require__(704);
              }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

            case 2:
              data = _context.sent;
              return _context.abrupt('return', {
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
              });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Contact_css__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Contact_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Contact_css__);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/routes/contact/Contact.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






var Contact = function (_React$Component) {
  _inherits(Contact, _React$Component);

  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
  }

  _createClass(Contact, [{
    key: 'render',
    value: function render() {
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
  }]);

  return Contact;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Contact.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__Contact_css___default.a)(Contact));

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Contact__ = __webpack_require__(285);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/routes/contact/index.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var title = 'Contact Us';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/contact',

  action: function action() {
    return {
      title: title,
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

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Home_css__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Home_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Earth__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Moon__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Sun__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_MediaButton__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_CompareItems__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Orbiter__ = __webpack_require__(275);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/routes/home/Home.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable jsx-a11y/anchor-has-content,max-len,react/no-did-mount-set-state */
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */











var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.state = {
      firstRender: true,
      resetAnimation: false,
      followButton: 'Follow',
      orbitRadius: 300
    };

    _this.toggleAnimation = _this.toggleAnimation.bind(_this);
    return _this;
  }

  _createClass(Home, [{
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ firstRender: false });
    }
  }, {
    key: 'followChange',
    value: function followChange(event) {
      this.setState({ followButton: event.target.value });
    }
  }, {
    key: 'orbitChange',
    value: function orbitChange(event) {
      this.setState({ orbitRadius: event.target.value });
    }
  }, {
    key: 'toggleAnimation',
    value: function toggleAnimation() {
      this.setState({ resetAnimation: !this.state.resetAnimation });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var earthOrbitRadius = this.state.orbitRadius;
      var moonOrbitRadius = 100;
      var earthDiameter = 100;
      var moonDiameter = 30;

      var orbitMoon = '\n    from {\n      transform: translate(-' + earthDiameter / 2 + 'px) rotate(0deg) translate(' + earthOrbitRadius + 'px) rotate(0deg) rotate(0deg) translate(' + moonOrbitRadius + 'px) rotate(0deg);\n    }\n  \n    to {\n      transform: translate(-' + earthDiameter / 2 + 'px) rotate(360deg) translate(' + earthOrbitRadius + 'px) rotate(-360deg) rotate(' + 360 * 5 + 'deg) translate(' + moonOrbitRadius + 'px) rotate(-' + 360 * 5 + 'deg);\n    }\n  ';

      var moonOptions = {
        keyframeString: orbitMoon
      };

      var StyledMoon = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__components_Orbiter__["a" /* default */])(this.state.orbitRadius, moonOptions)(__WEBPACK_IMPORTED_MODULE_4__components_Moon__["a" /* default */]);

      var StyledEarth = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__components_Orbiter__["a" /* default */])(this.state.orbitRadius)(__WEBPACK_IMPORTED_MODULE_3__components_Earth__["a" /* default */]);

      var animation = !this.state.resetAnimation ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
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
        !this.state.firstRender && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledEarth, { width: earthDiameter, height: earthDiameter, className: 'test', __source: {
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
                onChange: function onChange(event) {
                  _this2.orbitChange(event);
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
              onChange: function onChange(event) {
                _this2.followChange(event);
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
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Home.propTypes = {};


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Home_css___default.a)(Home));

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(92);
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

  action: function action(_ref) {
    var _this = this;

    var context = _ref.context;
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt('return', {
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
              });

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 289:
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
  children: [__webpack_require__(288).default, __webpack_require__(286).default, __webpack_require__(284).default,

  // Wildcard routes, e.g. { path: '*', ... } (must go last)
  __webpack_require__(291).default],

  action: function action(_ref) {
    var _this = this;

    var next = _ref.next;
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var route;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return next();

            case 2:
              route = _context.sent;


              // Provide default values for title, description etc.
              route.title = '' + (route.title || 'Untitled Page');
              route.description = route.description || '';

              return _context.abrupt('return', route);

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NotFound_css__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NotFound_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__NotFound_css__);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/routes/notFound/NotFound.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






var NotFound = function (_React$Component) {
  _inherits(NotFound, _React$Component);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: 'render',
    value: function render() {
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
  }]);

  return NotFound;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

NotFound.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__NotFound_css___default.a)(NotFound));

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound__ = __webpack_require__(290);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/routes/notFound/index.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var title = 'Page Not Found';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '*',

  action: function action() {
    return {
      title: title,
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

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createHelpers__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger__ = __webpack_require__(294);






function configureStore(initialState, helpersConfig) {
  var helpers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__createHelpers__["a" /* default */])(helpersConfig);
  var middleware = [__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a.withExtraArgument(helpers)];

  var enhancer = void 0;

  if (true) {
    middleware.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__logger__["a" /* default */])());

    // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
    var devToolsExtension = function devToolsExtension(f) {
      return f;
    };
    if (true && window.devToolsExtension) {
      devToolsExtension = window.devToolsExtension();
    }

    enhancer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["a" /* compose */])(__WEBPACK_IMPORTED_MODULE_0_redux__["b" /* applyMiddleware */].apply(undefined, middleware), devToolsExtension);
  } else {
    enhancer = applyMiddleware.apply(undefined, middleware);
  }

  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["c" /* createStore */])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* default */], initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (false) {
    module.hot.accept('../reducers', function () {
      return (
        // eslint-disable-next-line global-require
        store.replaceReducer(require('../reducers').default)
      );
    });
  }

  return store;
}

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createHelpers;
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function createGraphqlRequest(fetch) {
  return function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(query, variables) {
      var fetchConfig, resp;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              fetchConfig = {
                method: 'post',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query: query, variables: variables }),
                credentials: 'include'
              };
              _context.next = 3;
              return fetch('/graphql', fetchConfig);

            case 3:
              resp = _context.sent;

              if (!(resp.status !== 200)) {
                _context.next = 6;
                break;
              }

              throw new Error(resp.statusText);

            case 6:
              return _context.abrupt('return', resp.json());

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function graphqlRequest(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return graphqlRequest;
  }();
}

function createHelpers(_ref2) {
  var fetch = _ref2.fetch,
      history = _ref2.history;

  return {
    fetch: fetch,
    history: history,
    graphqlRequest: createGraphqlRequest(fetch)
  };
}

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createLogger;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_logger__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_logger__);


function createLogger() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_logger__["createLogger"])({
    collapsed: true
  });
}

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(true);
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

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(true);
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

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(true);
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

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n/*\n * normalize.css is imported in JS file.\n * If you import external CSS file from your internal CSS\n * then it will be inlined and processed with CSS modules.\n */\n/*\n * Base styles\n * ========================================================================== */\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: sans-serif;\n  line-height: 1.375; /* ~22px */\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\nbody {\n  margin: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n  overflow-y: scroll;\n}\na {\n  color: #0074c2;\n}\n.Layout-root-1DyeL {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n}\n.Layout-mainContainer-2Kdun {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n  display: block;\n}\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\nbutton {\n  outline: none;\n  border: none;\n  border-radius: 10px;\n  background-color: rgb(85, 81, 139);\n  color: white;\n  height: 100%;\n  padding: 8px;\n  padding: 0.5rem\n}\nbutton:hover {\n  background-color: #373277;\n  cursor: pointer;\n}\nlabel {\n  margin-right: 16px;\n  margin-right: 1rem;\n  font-weight: bold;\n}\ninput[type=\"text\"] {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n\n  -webkit-box-align: center;\n\n      -ms-flex-align: center;\n\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  vertical-align: middle;\n  outline: none;\n  border: 1px solid lightgray;\n  border-radius: 10px;\n  padding-left: 16px;\n  padding-left: 1rem;\n  color: #333333;\n}\ninput[type=\"range\"] {\n  -webkit-appearance: none\n}\ninput[type=\"range\"]::-webkit-slider-runnable-track {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 50%;\n  background: #333333;\n  border: none;\n  border-radius: 2px;\n}\ninput[type=\"range\"]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  position: relative;\n  bottom: 50%;\n  border: solid #373277;\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  background: rgb(85, 81, 139);\n  //margin-top: -10px;\n}\ninput[type=\"range\"]:focus {\n  outline: none;\n}\ninput[type=\"range\"]:focus::-webkit-slider-runnable-track {\n  background: rgb(82, 82, 82);\n}\ninput[type=\"range\"]:focus::-webkit-slider-thumb {\n  background: -webkit-gradient(linear,\n      left top, left bottom,\n      color-stop(10%, rgba(0,0,0,0)),\n      color-stop(50%, rgb(0, 0, 0)),\n      color-stop(90%, rgba(0,0,0,0))\n      );\n  background: -webkit-linear-gradient(top,\n      rgba(0,0,0,0) 10%,\n      rgb(0, 0, 0) 50%,\n      rgba(0,0,0,0) 90%\n      );\n  background: linear-gradient(180deg,\n      rgba(0,0,0,0) 10%,\n      rgb(0, 0, 0) 50%,\n      rgba(0,0,0,0) 90%\n      );\n}\n/*\n * A better looking default horizontal rule\n */\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n/*\n * Remove default fieldset styles.\n */\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n/*\n * Allow only vertical resizing of textareas.\n */\ntextarea {\n  resize: vertical;\n}\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n", "", {"version":3,"sources":["/Users/jvburen/Projects/spikes/react/css-animation/src/components/Layout/Layout.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;AACH;;;;;;;GAOG;AACH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;AACD;;;;GAIG;AACH;;gFAEgF;AAChF;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe,CAAC,YAAY;EAC5B,wBAAwB;EACxB,mBAAmB,CAAC,WAAW;EAC/B,aAAa;EACb,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;MAC1B,2BAA2B;UACvB,uBAAuB;CAChC;AACD;EACE,UAAU;EACV,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;MAC1B,2BAA2B;UACvB,uBAAuB;EAC/B,oBAAoB;MAChB,iBAAiB;UACb,aAAa;EACrB,mBAAmB;CACpB;AACD;EACE,eAAe;CAChB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,6BAA6B;EAC7B,8BAA8B;MAC1B,2BAA2B;UACvB,uBAAuB;EAC/B,oBAAoB;MAChB,iBAAiB;UACb,aAAa;CACtB;AACD;EACE,oBAAoB;MAChB,iBAAiB;UACb,aAAa;EACrB,eAAe;CAChB;AACD;;;;;;GAMG;AACH;EACE,oBAAoB;EACpB,kBAAkB;CACnB;AACD;EACE,oBAAoB;EACpB,kBAAkB;CACnB;AACD;EACE,cAAc;EACd,aAAa;EACb,oBAAoB;EACpB,mCAAmC;EACnC,aAAa;EACb,aAAa;EACb,aAAa;EACb,eAAe;CAChB;AACD;EACE,0BAA0B;EAC1B,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;CACnB;AACD;EACE,4BAA4B;EAC5B,4BAA4B;EAC5B,qBAAqB;;EAErB,0BAA0B;;MAEtB,uBAAuB;;UAEnB,oBAAoB;EAC5B,yBAAyB;MACrB,sBAAsB;UAClB,wBAAwB;EAChC,uBAAuB;EACvB,cAAc;EACd,4BAA4B;EAC5B,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB;EACnB,eAAe;CAChB;AACD;EACE,wBAAwB;CACzB;AACD;EACE,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,oBAAoB;EACpB,aAAa;EACb,mBAAmB;CACpB;AACD;EACE,yBAAyB;EACzB,mBAAmB;EACnB,YAAY;EACZ,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,6BAA6B;EAC7B,oBAAoB;CACrB;AACD;EACE,cAAc;CACf;AACD;EACE,4BAA4B;CAC7B;AACD;EACE;;;;;QAKM;EACN;;;;QAIM;EACN;;;;QAIM;CACP;AACD;;GAEG;AACH;EACE,eAAe;EACf,YAAY;EACZ,UAAU;EACV,2BAA2B;EAC3B,cAAc;EACd,WAAW;CACZ;AACD;;;;GAIG;AACH;;;;;;EAME,uBAAuB;CACxB;AACD;;GAEG;AACH;EACE,UAAU;EACV,UAAU;EACV,WAAW;CACZ;AACD;;GAEG;AACH;EACE,iBAAiB;CAClB;AACD;;gFAEgF;AAChF;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;CAClB;AACD;;;;gFAIgF;AAChF;EACE;;;IAGE,mCAAmC;IACnC,uBAAuB,CAAC,+DAA+D;IACvF,oCAAoC;YAC5B,4BAA4B;IACpC,6BAA6B;GAC9B;;EAED;;IAEE,2BAA2B;GAC5B;;EAED;IACE,6BAA6B;GAC9B;;EAED;IACE,8BAA8B;GAC/B;;EAED;;;KAGG;EACH;;IAEE,YAAY;GACb;;EAED;;IAEE,uBAAuB;IACvB,yBAAyB;GAC1B;;EAED;;;KAGG;EACH;IACE,4BAA4B;GAC7B;;EAED;;IAEE,yBAAyB;GAC1B;;EAED;IACE,2BAA2B;GAC5B;;EAED;;;IAGE,WAAW;IACX,UAAU;GACX;;EAED;;IAEE,wBAAwB;GACzB;CACF","file":"Layout.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n/*\n * normalize.css is imported in JS file.\n * If you import external CSS file from your internal CSS\n * then it will be inlined and processed with CSS modules.\n */\n/*\n * Base styles\n * ========================================================================== */\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: sans-serif;\n  line-height: 1.375; /* ~22px */\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\nbody {\n  margin: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n  overflow-y: scroll;\n}\na {\n  color: #0074c2;\n}\n.root {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n}\n.mainContainer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n  display: block;\n}\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\nbutton {\n  outline: none;\n  border: none;\n  border-radius: 10px;\n  background-color: rgb(85, 81, 139);\n  color: white;\n  height: 100%;\n  padding: 8px;\n  padding: 0.5rem\n}\nbutton:hover {\n  background-color: #373277;\n  cursor: pointer;\n}\nlabel {\n  margin-right: 16px;\n  margin-right: 1rem;\n  font-weight: bold;\n}\ninput[type=\"text\"] {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n\n  -webkit-box-align: center;\n\n      -ms-flex-align: center;\n\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  vertical-align: middle;\n  outline: none;\n  border: 1px solid lightgray;\n  border-radius: 10px;\n  padding-left: 16px;\n  padding-left: 1rem;\n  color: #333333;\n}\ninput[type=\"range\"] {\n  -webkit-appearance: none\n}\ninput[type=\"range\"]::-webkit-slider-runnable-track {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 50%;\n  background: #333333;\n  border: none;\n  border-radius: 2px;\n}\ninput[type=\"range\"]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  position: relative;\n  bottom: 50%;\n  border: solid #373277;\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  background: rgb(85, 81, 139);\n  //margin-top: -10px;\n}\ninput[type=\"range\"]:focus {\n  outline: none;\n}\ninput[type=\"range\"]:focus::-webkit-slider-runnable-track {\n  background: rgb(82, 82, 82);\n}\ninput[type=\"range\"]:focus::-webkit-slider-thumb {\n  background: -webkit-gradient(linear,\n      left top, left bottom,\n      color-stop(10%, rgba(0,0,0,0)),\n      color-stop(50%, rgb(0, 0, 0)),\n      color-stop(90%, rgba(0,0,0,0))\n      );\n  background: -webkit-linear-gradient(top,\n      rgba(0,0,0,0) 10%,\n      rgb(0, 0, 0) 50%,\n      rgba(0,0,0,0) 90%\n      );\n  background: linear-gradient(180deg,\n      rgba(0,0,0,0) 10%,\n      rgb(0, 0, 0) 50%,\n      rgba(0,0,0,0) 90%\n      );\n}\n/*\n * A better looking default horizontal rule\n */\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n/*\n * Remove default fieldset styles.\n */\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n/*\n * Allow only vertical resizing of textareas.\n */\ntextarea {\n  resize: vertical;\n}\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n:global(.browserupgrade) {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Layout-root-1DyeL",
	"mainContainer": "Layout-mainContainer-2Kdun"
};

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(true);
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

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(true);
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

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n\n.Page-root-2VuHt {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Page-container-QOUG7 {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/Users/jvburen/Projects/spikes/react/css-animation/src/components/Page/Page.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;;AAED;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAkB;CACnB","file":"Page.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Page-root-2VuHt",
	"container": "Page-container-QOUG7"
};

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Sun.css","sourceRoot":""}]);

// exports


/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n\n.Contact-root-3ydpW {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Contact-container-2rVw2 {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/Users/jvburen/Projects/spikes/react/css-animation/src/routes/contact/Contact.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;;AAED;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAkB;CACnB","file":"Contact.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Contact-root-3ydpW",
	"container": "Contact-container-2rVw2"
};

/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(true);
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

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n\n.NotFound-root-3_3g8 {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.NotFound-container-3FKMx {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/Users/jvburen/Projects/spikes/react/css-animation/src/routes/notFound/NotFound.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;AAEH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAE9E;;gFAE8E;;EAE9E;;gFAE8E,EAAE,gCAAgC,EAAE,2BAA2B,EAAE,6BAA6B,CAAC,iCAAiC;;EAE9M;;gFAE8E;CAC/E;;AAED;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAkB;CACnB","file":"NotFound.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n\n  /*\n   * Colors\n   * ======================================================================== */\n}\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "NotFound-root-3_3g8",
	"container": "NotFound-container-3FKMx"
};

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/Header/logo-small.png?2f751285";

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/Header/logo-small@2x.png?8844262b";

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(529);
    var insertCss = __webpack_require__(29);

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

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(530);
    var insertCss = __webpack_require__(29);

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

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(531);
    var insertCss = __webpack_require__(29);

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

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(532);
    var insertCss = __webpack_require__(29);

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

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(533);
    var insertCss = __webpack_require__(29);

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

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(534);
    var insertCss = __webpack_require__(29);

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

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(535);
    var insertCss = __webpack_require__(29);

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

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(536);
    var insertCss = __webpack_require__(29);

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

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(537);
    var insertCss = __webpack_require__(29);

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

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(538);
    var insertCss = __webpack_require__(29);

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

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(539);
    var insertCss = __webpack_require__(29);

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

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(265);
module.exports = __webpack_require__(264);


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_normalize_css__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Layout_css__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Layout_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Layout_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Header__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Footer__ = __webpack_require__(270);
var _jsxFileName = '/Users/jvburen/Projects/spikes/react/css-animation/src/components/Layout/Layout.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





// external-global styles must be imported in your JS.





var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
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
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Layout.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3_normalize_css___default.a, __WEBPACK_IMPORTED_MODULE_4__Layout_css___default.a)(Layout));

/***/ })

},[703]);
//# sourceMappingURL=client.js.map