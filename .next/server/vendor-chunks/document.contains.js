"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/document.contains";
exports.ids = ["vendor-chunks/document.contains"];
exports.modules = {

/***/ "(ssr)/./node_modules/document.contains/implementation.js":
/*!**********************************************************!*\
  !*** ./node_modules/document.contains/implementation.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function contains(other) {\n\tif (arguments.length < 1) {\n\t\tthrow new TypeError('1 argument is required');\n\t}\n\tif (typeof other !== 'object') {\n\t\tthrow new TypeError('Argument 1 (”other“) to Node.contains must be an instance of Node');\n\t}\n\n\tvar node = other;\n\tdo {\n\t\tif (this === node) {\n\t\t\treturn true;\n\t\t}\n\t\tif (node) {\n\t\t\tnode = node.parentNode;\n\t\t}\n\t} while (node);\n\n\treturn false;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZG9jdW1lbnQuY29udGFpbnMvaW1wbGVtZW50YXRpb24uanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2RvY3VtZW50LmNvbnRhaW5zL2ltcGxlbWVudGF0aW9uLmpzP2YzMDUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbnRhaW5zKG90aGVyKSB7XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJzEgYXJndW1lbnQgaXMgcmVxdWlyZWQnKTtcblx0fVxuXHRpZiAodHlwZW9mIG90aGVyICE9PSAnb2JqZWN0Jykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IDEgKOKAnW90aGVy4oCcKSB0byBOb2RlLmNvbnRhaW5zIG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgTm9kZScpO1xuXHR9XG5cblx0dmFyIG5vZGUgPSBvdGhlcjtcblx0ZG8ge1xuXHRcdGlmICh0aGlzID09PSBub2RlKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0aWYgKG5vZGUpIHtcblx0XHRcdG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG5cdFx0fVxuXHR9IHdoaWxlIChub2RlKTtcblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/document.contains/implementation.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/document.contains/index.js":
/*!*************************************************!*\
  !*** ./node_modules/document.contains/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar define = __webpack_require__(/*! define-properties */ \"(ssr)/./node_modules/define-properties/index.js\");\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"(ssr)/./node_modules/document.contains/implementation.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"(ssr)/./node_modules/document.contains/polyfill.js\");\nvar polyfill = getPolyfill();\nvar shim = __webpack_require__(/*! ./shim */ \"(ssr)/./node_modules/document.contains/shim.js\");\n\nvar boundContains = function contains(node, other) {\n\treturn polyfill.apply(node, [other]);\n};\n\ndefine(boundContains, {\n\tgetPolyfill: getPolyfill,\n\timplementation: implementation,\n\tshim: shim\n});\n\nmodule.exports = boundContains;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZG9jdW1lbnQuY29udGFpbnMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsYUFBYSxtQkFBTyxDQUFDLDBFQUFtQjs7QUFFeEMscUJBQXFCLG1CQUFPLENBQUMsa0ZBQWtCO0FBQy9DLGtCQUFrQixtQkFBTyxDQUFDLHNFQUFZO0FBQ3RDO0FBQ0EsV0FBVyxtQkFBTyxDQUFDLDhEQUFROztBQUUzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1jbGllbnQvLi9ub2RlX21vZHVsZXMvZG9jdW1lbnQuY29udGFpbnMvaW5kZXguanM/OTUyNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZpbmUgPSByZXF1aXJlKCdkZWZpbmUtcHJvcGVydGllcycpO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG52YXIgcG9seWZpbGwgPSBnZXRQb2x5ZmlsbCgpO1xudmFyIHNoaW0gPSByZXF1aXJlKCcuL3NoaW0nKTtcblxudmFyIGJvdW5kQ29udGFpbnMgPSBmdW5jdGlvbiBjb250YWlucyhub2RlLCBvdGhlcikge1xuXHRyZXR1cm4gcG9seWZpbGwuYXBwbHkobm9kZSwgW290aGVyXSk7XG59O1xuXG5kZWZpbmUoYm91bmRDb250YWlucywge1xuXHRnZXRQb2x5ZmlsbDogZ2V0UG9seWZpbGwsXG5cdGltcGxlbWVudGF0aW9uOiBpbXBsZW1lbnRhdGlvbixcblx0c2hpbTogc2hpbVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gYm91bmRDb250YWlucztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/document.contains/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/document.contains/polyfill.js":
/*!****************************************************!*\
  !*** ./node_modules/document.contains/polyfill.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"(ssr)/./node_modules/document.contains/implementation.js\");\n\nmodule.exports = function getPolyfill() {\n\tif (typeof document !== 'undefined') {\n\t\tif (document.contains) {\n\t\t\treturn document.contains;\n\t\t}\n\t\tif (document.body && document.body.contains) {\n\t\t\ttry {\n\t\t\t\tif (typeof document.body.contains.call(document, '') === 'boolean') {\n\t\t\t\t\treturn document.body.contains;\n\t\t\t\t}\n\t\t\t} catch (e) { /**/ }\n\t\t}\n\t}\n\treturn implementation;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZG9jdW1lbnQuY29udGFpbnMvcG9seWZpbGwuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIscUJBQXFCLG1CQUFPLENBQUMsa0ZBQWtCOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssWUFBWTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2RvY3VtZW50LmNvbnRhaW5zL3BvbHlmaWxsLmpzPzZhMDciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0UG9seWZpbGwoKSB7XG5cdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0aWYgKGRvY3VtZW50LmNvbnRhaW5zKSB7XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQuY29udGFpbnM7XG5cdFx0fVxuXHRcdGlmIChkb2N1bWVudC5ib2R5ICYmIGRvY3VtZW50LmJvZHkuY29udGFpbnMpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgZG9jdW1lbnQuYm9keS5jb250YWlucy5jYWxsKGRvY3VtZW50LCAnJykgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHRcdHJldHVybiBkb2N1bWVudC5ib2R5LmNvbnRhaW5zO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7IC8qKi8gfVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gaW1wbGVtZW50YXRpb247XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/document.contains/polyfill.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/document.contains/shim.js":
/*!************************************************!*\
  !*** ./node_modules/document.contains/shim.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar define = __webpack_require__(/*! define-properties */ \"(ssr)/./node_modules/define-properties/index.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"(ssr)/./node_modules/document.contains/polyfill.js\");\n\nmodule.exports = function shimContains() {\n\tvar polyfill = getPolyfill();\n\tif (typeof document !== 'undefined') {\n\t\tdefine(\n\t\t\tdocument,\n\t\t\t{ contains: polyfill },\n\t\t\t{ contains: function () { return document.contains !== polyfill; } }\n\t\t);\n\t\tif (typeof Element !== 'undefined') {\n\t\t\tdefine(\n\t\t\t\tElement.prototype,\n\t\t\t\t{ contains: polyfill },\n\t\t\t\t{ contains: function () { return Element.prototype.contains !== polyfill; } }\n\t\t\t);\n\t\t}\n\t}\n\treturn polyfill;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZG9jdW1lbnQuY29udGFpbnMvc2hpbS5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixhQUFhLG1CQUFPLENBQUMsMEVBQW1CO0FBQ3hDLGtCQUFrQixtQkFBTyxDQUFDLHNFQUFZOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxvQkFBb0I7QUFDekIsS0FBSyx3QkFBd0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG9CQUFvQjtBQUMxQixNQUFNLHdCQUF3QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1jbGllbnQvLi9ub2RlX21vZHVsZXMvZG9jdW1lbnQuY29udGFpbnMvc2hpbS5qcz9kNzE2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgZ2V0UG9seWZpbGwgPSByZXF1aXJlKCcuL3BvbHlmaWxsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hpbUNvbnRhaW5zKCkge1xuXHR2YXIgcG9seWZpbGwgPSBnZXRQb2x5ZmlsbCgpO1xuXHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdGRlZmluZShcblx0XHRcdGRvY3VtZW50LFxuXHRcdFx0eyBjb250YWluczogcG9seWZpbGwgfSxcblx0XHRcdHsgY29udGFpbnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LmNvbnRhaW5zICE9PSBwb2x5ZmlsbDsgfSB9XG5cdFx0KTtcblx0XHRpZiAodHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRkZWZpbmUoXG5cdFx0XHRcdEVsZW1lbnQucHJvdG90eXBlLFxuXHRcdFx0XHR7IGNvbnRhaW5zOiBwb2x5ZmlsbCB9LFxuXHRcdFx0XHR7IGNvbnRhaW5zOiBmdW5jdGlvbiAoKSB7IHJldHVybiBFbGVtZW50LnByb3RvdHlwZS5jb250YWlucyAhPT0gcG9seWZpbGw7IH0gfVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHBvbHlmaWxsO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/document.contains/shim.js\n");

/***/ })

};
;