"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/es-shim-unscopables";
exports.ids = ["vendor-chunks/es-shim-unscopables"];
exports.modules = {

/***/ "(ssr)/./node_modules/es-shim-unscopables/index.js":
/*!***************************************************!*\
  !*** ./node_modules/es-shim-unscopables/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar has = __webpack_require__(/*! has */ \"(ssr)/./node_modules/has/src/index.js\");\n\nvar hasUnscopables = typeof Symbol === 'function' && typeof Symbol.unscopables === 'symbol';\n\nvar map = hasUnscopables && Array.prototype[Symbol.unscopables];\n\nvar $TypeError = TypeError;\n\nmodule.exports = function shimUnscopables(method) {\n\tif (typeof method !== 'string' || !method) {\n\t\tthrow new $TypeError('method must be a non-empty string');\n\t}\n\tif (!has(Array.prototype, method)) {\n\t\tthrow new $TypeError('method must be on Array.prototype');\n\t}\n\tif (hasUnscopables) {\n\t\tmap[method] = true;\n\t}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZXMtc2hpbS11bnNjb3BhYmxlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixVQUFVLG1CQUFPLENBQUMsa0RBQUs7O0FBRXZCOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWNsaWVudC8uL25vZGVfbW9kdWxlcy9lcy1zaGltLXVuc2NvcGFibGVzL2luZGV4LmpzPzBlNTUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gcmVxdWlyZSgnaGFzJyk7XG5cbnZhciBoYXNVbnNjb3BhYmxlcyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC51bnNjb3BhYmxlcyA9PT0gJ3N5bWJvbCc7XG5cbnZhciBtYXAgPSBoYXNVbnNjb3BhYmxlcyAmJiBBcnJheS5wcm90b3R5cGVbU3ltYm9sLnVuc2NvcGFibGVzXTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hpbVVuc2NvcGFibGVzKG1ldGhvZCkge1xuXHRpZiAodHlwZW9mIG1ldGhvZCAhPT0gJ3N0cmluZycgfHwgIW1ldGhvZCkge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdtZXRob2QgbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcnKTtcblx0fVxuXHRpZiAoIWhhcyhBcnJheS5wcm90b3R5cGUsIG1ldGhvZCkpIHtcblx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignbWV0aG9kIG11c3QgYmUgb24gQXJyYXkucHJvdG90eXBlJyk7XG5cdH1cblx0aWYgKGhhc1Vuc2NvcGFibGVzKSB7XG5cdFx0bWFwW21ldGhvZF0gPSB0cnVlO1xuXHR9XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/es-shim-unscopables/index.js\n");

/***/ })

};
;