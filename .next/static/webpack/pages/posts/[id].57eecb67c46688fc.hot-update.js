"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[id]",{

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/layout */ \"./components/layout.js\");\n\n\nvar __N_SSG = true;\nfunction Post(param) {\n    let { postData  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        backLink: \"/posts\",\n        children: [\n            postData.title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/jombay-admin/workspace/learning/next-js/assessment-platform/pages/posts/[id].js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            postData.id,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/jombay-admin/workspace/learning/next-js/assessment-platform/pages/posts/[id].js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            postData.date,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/jombay-admin/workspace/learning/next-js/assessment-platform/pages/posts/[id].js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: postData.contentHtml\n                }\n            }, void 0, false, {\n                fileName: \"/home/jombay-admin/workspace/learning/next-js/assessment-platform/pages/posts/[id].js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jombay-admin/workspace/learning/next-js/assessment-platform/pages/posts/[id].js\",\n        lineNumber: 22,\n        columnNumber: 13\n    }, this);\n}\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUcyQzs7QUFpQjVCLFNBQVNDLEtBQUssS0FBWSxFQUFFO1FBQWQsRUFBRUMsU0FBUSxFQUFFLEdBQVo7SUFDekIscUJBQVEsOERBQUNGLHlEQUFNQTtRQUFDRyxVQUFTOztZQUN0QkQsU0FBU0UsS0FBSzswQkFDZiw4REFBQ0M7Ozs7O1lBQ0FILFNBQVNJLEVBQUU7MEJBQ1osOERBQUNEOzs7OztZQUNBSCxTQUFTSyxJQUFJOzBCQUNkLDhEQUFDRjs7Ozs7MEJBQ0QsOERBQUNHO2dCQUFJQyx5QkFBeUI7b0JBQUVDLFFBQVFSLFNBQVNTLFdBQVc7Z0JBQUM7Ozs7Ozs7Ozs7OztBQUVuRSxDQUFDO0tBVnVCViIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy9baWRdLmpzPzc5NjYiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IF9faTE4bkNvbmZpZyBmcm9tICdAbmV4dC10cmFuc2xhdGUtcm9vdC9pMThuJ1xuICAgIGltcG9ydCBfX2xvYWROYW1lc3BhY2VzIGZyb20gJ25leHQtdHJhbnNsYXRlL2xvYWROYW1lc3BhY2VzJ1xuICAgIGltcG9ydCBMYXlvdXQgZnJvbSAnY29tcG9uZW50cy9sYXlvdXQnO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdElkcywgZ2V0UG9zdERhdGEgfSBmcm9tICdsaWIvcG9zdHMnO1xuYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICAgIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgZ2V0UG9zdERhdGEocGFyYW1zLmlkKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcG9zdERhdGFcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gICAgY29uc3QgcGF0aHMgPSBnZXRBbGxQb3N0SWRzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aHMsXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZVxuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHsgcG9zdERhdGEgfSkge1xuICAgIHJldHVybiAoPExheW91dCBiYWNrTGluaz0nL3Bvc3RzJz5cbiAgICAgIHtwb3N0RGF0YS50aXRsZX1cbiAgICAgIDxiciAvPlxuICAgICAge3Bvc3REYXRhLmlkfVxuICAgICAgPGJyIC8+XG4gICAgICB7cG9zdERhdGEuZGF0ZX1cbiAgICAgIDxiciAvPlxuICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3REYXRhLmNvbnRlbnRIdG1sIH19Lz5cbiAgICA8L0xheW91dD4pO1xufVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gX19OZXh0X1RyYW5zbGF0ZV9fZ2V0U3RhdGljUHJvcHNfXzE4NzE5OTM3YjRmX18oY3R4KSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBnZXRTdGF0aWNQcm9wcyhjdHgpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBcbiAgICAgICAgLi4ucmVzLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIC4uLihyZXMucHJvcHMgfHwge30pLFxuICAgICAgICAgIC4uLihhd2FpdCBfX2xvYWROYW1lc3BhY2VzKHtcbiAgICAgICAgICAgIC4uLmN0eCxcbiAgICAgICAgICAgIC4uLl9faTE4bkNvbmZpZyxcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL3Bvc3RzL1tpZF0nLFxuICAgICAgICAgICAgbG9hZGVyTmFtZTogJ2dldFN0YXRpY1Byb3BzJyxcbiAgICAgICAgICAgIGxvYWRMb2NhbGVGcm9tOiAobCwgbikgPT4gaW1wb3J0KGBAbmV4dC10cmFuc2xhdGUtcm9vdC9sb2NhbGVzLyR7bH0vJHtufWApLnRoZW4obSA9PiBtLmRlZmF1bHQpLFxuICAgICAgICAgIH0pKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCB7IF9fTmV4dF9UcmFuc2xhdGVfX2dldFN0YXRpY1Byb3BzX18xODcxOTkzN2I0Zl9fIGFzIGdldFN0YXRpY1Byb3BzIH1cbiAgIl0sIm5hbWVzIjpbIkxheW91dCIsIlBvc3QiLCJwb3N0RGF0YSIsImJhY2tMaW5rIiwidGl0bGUiLCJiciIsImlkIiwiZGF0ZSIsImRpdiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiY29udGVudEh0bWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[id].js\n"));

/***/ })

});