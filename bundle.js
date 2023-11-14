/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(1);
var FullList_1 = __importDefault(__webpack_require__(11));
var ListItem_1 = __importDefault(__webpack_require__(12));
var ListTemplate_1 = __importDefault(__webpack_require__(13));
var initApp = function () {
    var fullList = FullList_1.default.instance;
    var template = ListTemplate_1.default.instance;
    var itemEntryForm = document.getElementById('itemEntryForm');
    itemEntryForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var input = document.getElementById('newItem');
        var newEntryText = input.value.trim();
        if (!newEntryText)
            return;
        var itemID = fullList.list.length
            ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
            : 1;
        var newItem = new ListItem_1.default(itemID.toString(), newEntryText);
        fullList.addItem(newItem);
        input.value = '';
        template.render(fullList);
    });
    var clearItems = document.getElementById('clearItemsButton');
    clearItems.addEventListener('click', function () {
        fullList.clearList();
        template.clear();
    });
    fullList.load();
    template.render(fullList);
};
document.addEventListener("DOMContentLoaded", initApp);


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.offscreen {
    position: absolute;
    left: -10000px;
}

input, 
button {
    font: inherit;
}

html {
    font-family: 'Poppins', sans-serif;
}

body {
    min-height: 100vh;
    background-color: #333;
    color: #fff;
    padding: 1rem;
    display: flex;
    flex-direction: column;
}

main {
    flex-grow: 1;
    margin: auto;
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-flow: column nowrap;
}

section {
    border: 1px solid whitesmoke;
    border-radius: 10px;
    padding: 0.5rem;
}

.button {
    border-radius: 10px;
    min-width: 48px;
    min-height: 48px;
}

.button:hover {
    cursor: pointer;
}

.newItemEntry {
    position: sticky;
    top: 0;
    margin-bottom: 1rem;
}

.newItemEntry__form {
    display: flex;
    gap: 0.25rem;
    font-size: 1.5rem;
}

.newItemEntry__input {
    width: calc(100% - (0.25rem + 48px));
    flex-grow: 1;
    border: 2px solid whitesmoke;
    border-radius: 10px;
    padding: 0.5em;
}

.newItemEntry__button {
    background-color: transparent;
    color: whitesmoke;
    border: 3px dashed whitesmoke;
    padding: 0.75em;
}

.newItemEntry__button:hover,
.newItemEntry__button:focus {
    color: limegreen;
}

.listContainer {
    font-size: 1.5rem;
    flex-grow: 1;
    display: flex;
    flex-flow: column;
    gap: 1rem;
}

.listTitle {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.listTitle__button {
    background-color: transparent;
    color: whitesmoke;
    padding: 0.25em;
}


.listItems {
    flex-grow: 1;
    display: flex;
    flex-flow: column nowrap;
    list-style-type: none;
}

.item {
    display: flex;
    align-items: center;
    padding-top: 1em;
    gap: 1em;
}

.item > input[type="checkbox"] {
    text-align: center;
    min-width: 2.5rem;
    min-height: 2.5rem;
    cursor: pointer;
}

.item > input[type="checkbox"]:checked + label {
    text-decoration: line-through;
}

.item > label {
    flex-grow: 1;
    word-break: break-all;
}

.item > button:hover, 
.item > button:focus {
    color: red;
}

@media (min-width: 768px) {
    section {
        padding: 1rem;
    }
    .newItemEntry__form {
        gap: 0.5rem;
    }
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,cAAc;AAClB;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,iBAAiB;IACjB,sBAAsB;IACtB,WAAW;IACX,aAAa;IACb,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,wBAAwB;AAC5B;;AAEA;IACI,4BAA4B;IAC5B,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,MAAM;IACN,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,oCAAoC;IACpC,YAAY;IACZ,4BAA4B;IAC5B,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,6BAA6B;IAC7B,iBAAiB;IACjB,6BAA6B;IAC7B,eAAe;AACnB;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;AACzB;;AAEA;IACI,6BAA6B;IAC7B,iBAAiB;IACjB,eAAe;AACnB;;;AAGA;IACI,YAAY;IACZ,aAAa;IACb,wBAAwB;IACxB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,QAAQ;AACZ;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,qBAAqB;AACzB;;AAEA;;IAEI,UAAU;AACd;;AAEA;IACI;QACI,aAAa;IACjB;IACA;QACI,WAAW;IACf;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.offscreen {\r\n    position: absolute;\r\n    left: -10000px;\r\n}\r\n\r\ninput, \r\nbutton {\r\n    font: inherit;\r\n}\r\n\r\nhtml {\r\n    font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    background-color: #333;\r\n    color: #fff;\r\n    padding: 1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\nmain {\r\n    flex-grow: 1;\r\n    margin: auto;\r\n    width: 100%;\r\n    max-width: 800px;\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n}\r\n\r\nsection {\r\n    border: 1px solid whitesmoke;\r\n    border-radius: 10px;\r\n    padding: 0.5rem;\r\n}\r\n\r\n.button {\r\n    border-radius: 10px;\r\n    min-width: 48px;\r\n    min-height: 48px;\r\n}\r\n\r\n.button:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.newItemEntry {\r\n    position: sticky;\r\n    top: 0;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.newItemEntry__form {\r\n    display: flex;\r\n    gap: 0.25rem;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.newItemEntry__input {\r\n    width: calc(100% - (0.25rem + 48px));\r\n    flex-grow: 1;\r\n    border: 2px solid whitesmoke;\r\n    border-radius: 10px;\r\n    padding: 0.5em;\r\n}\r\n\r\n.newItemEntry__button {\r\n    background-color: transparent;\r\n    color: whitesmoke;\r\n    border: 3px dashed whitesmoke;\r\n    padding: 0.75em;\r\n}\r\n\r\n.newItemEntry__button:hover,\r\n.newItemEntry__button:focus {\r\n    color: limegreen;\r\n}\r\n\r\n.listContainer {\r\n    font-size: 1.5rem;\r\n    flex-grow: 1;\r\n    display: flex;\r\n    flex-flow: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.listTitle {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-end;\r\n}\r\n\r\n.listTitle__button {\r\n    background-color: transparent;\r\n    color: whitesmoke;\r\n    padding: 0.25em;\r\n}\r\n\r\n\r\n.listItems {\r\n    flex-grow: 1;\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    list-style-type: none;\r\n}\r\n\r\n.item {\r\n    display: flex;\r\n    align-items: center;\r\n    padding-top: 1em;\r\n    gap: 1em;\r\n}\r\n\r\n.item > input[type=\"checkbox\"] {\r\n    text-align: center;\r\n    min-width: 2.5rem;\r\n    min-height: 2.5rem;\r\n    cursor: pointer;\r\n}\r\n\r\n.item > input[type=\"checkbox\"]:checked + label {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.item > label {\r\n    flex-grow: 1;\r\n    word-break: break-all;\r\n}\r\n\r\n.item > button:hover, \r\n.item > button:focus {\r\n    color: red;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    section {\r\n        padding: 1rem;\r\n    }\r\n    .newItemEntry__form {\r\n        gap: 0.5rem;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var ListItem_1 = __importDefault(__webpack_require__(12));
var FullList = /** @class */ (function () {
    function FullList(_list) {
        if (_list === void 0) { _list = []; }
        this._list = _list;
    }
    Object.defineProperty(FullList.prototype, "list", {
        get: function () {
            return this._list;
        },
        enumerable: false,
        configurable: true
    });
    FullList.prototype.load = function () {
        var storedList = localStorage.getItem("MyList");
        if (typeof storedList !== "string")
            return;
        var parsedList = JSON.parse(storedList);
        parsedList.forEach(function (itemObj) {
            var newListItem = new ListItem_1.default(itemObj._id, itemObj._item, itemObj._checked);
            FullList.instance.addItem(newListItem);
        });
    };
    FullList.prototype.save = function () {
        localStorage.setItem("MyList", JSON.stringify(this._list));
    };
    FullList.prototype.clearList = function () {
        this._list = [];
        this.save();
    };
    FullList.prototype.addItem = function (itemObj) {
        this._list.push(itemObj);
        this.save();
    };
    FullList.prototype.removeItem = function (id) {
        this._list = this._list.filter(function (item) { return item.id !== id; });
        this.save();
    };
    FullList.instance = new FullList();
    return FullList;
}());
exports["default"] = FullList;


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var ListItems = /** @class */ (function () {
    function ListItems(_id, _item, _checked) {
        if (_id === void 0) { _id = ''; }
        if (_item === void 0) { _item = ""; }
        if (_checked === void 0) { _checked = false; }
        this._id = _id;
        this._item = _item;
        this._checked = _checked;
    }
    Object.defineProperty(ListItems.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItems.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (checked) {
            this._checked = checked;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItems.prototype, "item", {
        get: function () {
            return this._item;
        },
        set: function (item) {
            this._item = item;
        },
        enumerable: false,
        configurable: true
    });
    return ListItems;
}());
exports["default"] = ListItems;


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var ListTemplate = /** @class */ (function () {
    function ListTemplate() {
        this.ul = document.getElementById('listItems');
    }
    ListTemplate.prototype.clear = function () {
        this.ul.innerHTML = '';
    };
    ListTemplate.prototype.render = function (fullList) {
        var _this = this;
        this.clear();
        fullList.list.forEach(function (item) {
            var li = document.createElement('li');
            li.className = "item";
            var check = document.createElement('input');
            check.type = "checkbox";
            check.id = item.id;
            check.tabIndex = 0;
            check.checked = item.checked;
            li.append(check);
            check.addEventListener('change', function () {
                item.checked = !item.checked;
                fullList.save();
            });
            var label = document.createElement('label');
            label.htmlFor = item.id;
            label.textContent = item.item;
            li.append(label);
            var button = document.createElement('button');
            button.className = "button";
            button.textContent = "X";
            li.append(button);
            button.addEventListener('click', function () {
                fullList.removeItem(item.id);
                _this.render(fullList);
            });
            _this.ul.append(li);
        });
    };
    ListTemplate.instance = new ListTemplate();
    return ListTemplate;
}());
exports["default"] = ListTemplate;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map