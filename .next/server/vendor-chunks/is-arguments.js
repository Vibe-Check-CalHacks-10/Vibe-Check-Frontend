"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-arguments";
exports.ids = ["vendor-chunks/is-arguments"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-arguments/index.js":
/*!********************************************!*\
  !*** ./node_modules/is-arguments/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar hasToStringTag = __webpack_require__(/*! has-tostringtag/shams */ \"(ssr)/./node_modules/has-tostringtag/shams.js\")();\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"(ssr)/./node_modules/call-bind/callBound.js\");\n\nvar $toString = callBound('Object.prototype.toString');\n\nvar isStandardArguments = function isArguments(value) {\n\tif (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {\n\t\treturn false;\n\t}\n\treturn $toString(value) === '[object Arguments]';\n};\n\nvar isLegacyArguments = function isArguments(value) {\n\tif (isStandardArguments(value)) {\n\t\treturn true;\n\t}\n\treturn value !== null &&\n\t\ttypeof value === 'object' &&\n\t\ttypeof value.length === 'number' &&\n\t\tvalue.length >= 0 &&\n\t\t$toString(value) !== '[object Array]' &&\n\t\t$toString(value.callee) === '[object Function]';\n};\n\nvar supportsStandardArguments = (function () {\n\treturn isStandardArguments(arguments);\n}());\n\nisStandardArguments.isLegacyArguments = isLegacyArguments; // for tests\n\nmodule.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtYXJndW1lbnRzL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLHFCQUFxQixtQkFBTyxDQUFDLDRFQUF1QjtBQUNwRCxnQkFBZ0IsbUJBQU8sQ0FBQyx3RUFBcUI7O0FBRTdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVELDJEQUEyRDs7QUFFM0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWJlLWNoZWNrLy4vbm9kZV9tb2R1bGVzL2lzLWFyZ3VtZW50cy9pbmRleC5qcz9lMjkzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGhhc1RvU3RyaW5nVGFnID0gcmVxdWlyZSgnaGFzLXRvc3RyaW5ndGFnL3NoYW1zJykoKTtcbnZhciBjYWxsQm91bmQgPSByZXF1aXJlKCdjYWxsLWJpbmQvY2FsbEJvdW5kJyk7XG5cbnZhciAkdG9TdHJpbmcgPSBjYWxsQm91bmQoJ09iamVjdC5wcm90b3R5cGUudG9TdHJpbmcnKTtcblxudmFyIGlzU3RhbmRhcmRBcmd1bWVudHMgPSBmdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuXHRpZiAoaGFzVG9TdHJpbmdUYWcgJiYgdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBTeW1ib2wudG9TdHJpbmdUYWcgaW4gdmFsdWUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuICR0b1N0cmluZyh2YWx1ZSkgPT09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xufTtcblxudmFyIGlzTGVnYWN5QXJndW1lbnRzID0gZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcblx0aWYgKGlzU3RhbmRhcmRBcmd1bWVudHModmFsdWUpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIHZhbHVlICE9PSBudWxsICYmXG5cdFx0dHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuXHRcdHR5cGVvZiB2YWx1ZS5sZW5ndGggPT09ICdudW1iZXInICYmXG5cdFx0dmFsdWUubGVuZ3RoID49IDAgJiZcblx0XHQkdG9TdHJpbmcodmFsdWUpICE9PSAnW29iamVjdCBBcnJheV0nICYmXG5cdFx0JHRvU3RyaW5nKHZhbHVlLmNhbGxlZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59O1xuXG52YXIgc3VwcG9ydHNTdGFuZGFyZEFyZ3VtZW50cyA9IChmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBpc1N0YW5kYXJkQXJndW1lbnRzKGFyZ3VtZW50cyk7XG59KCkpO1xuXG5pc1N0YW5kYXJkQXJndW1lbnRzLmlzTGVnYWN5QXJndW1lbnRzID0gaXNMZWdhY3lBcmd1bWVudHM7IC8vIGZvciB0ZXN0c1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN1cHBvcnRzU3RhbmRhcmRBcmd1bWVudHMgPyBpc1N0YW5kYXJkQXJndW1lbnRzIDogaXNMZWdhY3lBcmd1bWVudHM7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-arguments/index.js\n");

/***/ })

};
;