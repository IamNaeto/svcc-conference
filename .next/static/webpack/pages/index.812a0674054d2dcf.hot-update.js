"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst ImageToggleOnScroll = (param)=>{\n    let { primaryImg, secondaryImg } = param;\n    _s();\n    const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const isInView = ()=>{\n        const rect = imageRef.current.getBoundingClientRect();\n        return rect.top >= 0 && rect.bottom <= window.innerHeight;\n    };\n    const [inView, setInView] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsLoading(false);\n        setInView(isInView());\n        window.addEventListener(\"scroll\", scrollHandler);\n        return ()=>{\n            window.removeEventListener(\"scroll\", scrollHandler);\n        };\n    }, []);\n    const scrollHandler = ()=>{\n        setInView(isInView());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: isLoading ? \"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==\" // 1x1gif\n         : inView ? secondaryImg : primaryImg,\n        alt: \"\",\n        ref: imageRef,\n        width: \"200\",\n        height: \"200\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Workflow\\\\react-hooks\\\\full-conference-reactapp-website\\\\src\\\\ImageToggleOnScroll.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ImageToggleOnScroll, \"ZXGxYM2/GoMqCdxtGlrQhtEYGrw=\");\n_c = ImageToggleOnScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageToggleOnScroll);\nvar _c;\n$RefreshReg$(_c, \"ImageToggleOnScroll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvSW1hZ2VUb2dnbGVPblNjcm9sbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJEO0FBRTNELE1BQU1JLHNCQUFzQjtRQUFDLEVBQUVDLFVBQVUsRUFBRUMsWUFBWSxFQUFFOztJQUN2RCxNQUFNQyxXQUFXTCw2Q0FBTUEsQ0FBQztJQUV4QixNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUM7SUFFM0MsTUFBTU8sV0FBVztRQUNmLE1BQU1DLE9BQU9KLFNBQVNLLE9BQU8sQ0FBQ0MscUJBQXFCO1FBQ25ELE9BQU9GLEtBQUtHLEdBQUcsSUFBSSxLQUFLSCxLQUFLSSxNQUFNLElBQUlDLE9BQU9DLFdBQVc7SUFDM0Q7SUFFQSxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR2hCLCtDQUFRQSxDQUFDO0lBRXJDRixnREFBU0EsQ0FBQztRQUNSUSxhQUFhO1FBQ2JVLFVBQVVUO1FBQ1ZNLE9BQU9JLGdCQUFnQixDQUFDLFVBQVVDO1FBQ2xDLE9BQU87WUFDTEwsT0FBT00sbUJBQW1CLENBQUMsVUFBVUQ7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNQSxnQkFBZ0I7UUFDcEJGLFVBQVVUO0lBQ1o7SUFFQSxxQkFDRSw4REFBQ2E7UUFDQ0MsS0FDRWhCLFlBQ0kscUZBQXFGLFNBQVM7V0FDOUZVLFNBQ0FaLGVBQ0FEO1FBRU5vQixLQUFJO1FBQ0pDLEtBQUtuQjtRQUNMb0IsT0FBTTtRQUNOQyxRQUFPOzs7Ozs7QUFHYjtHQXhDTXhCO0tBQUFBO0FBMENOLCtEQUFlQSxtQkFBbUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0ltYWdlVG9nZ2xlT25TY3JvbGwuanM/Y2M3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSW1hZ2VUb2dnbGVPblNjcm9sbCA9ICh7IHByaW1hcnlJbWcsIHNlY29uZGFyeUltZyB9KSA9PiB7XHJcbiAgY29uc3QgaW1hZ2VSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgaXNJblZpZXcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZWN0ID0gaW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHJldHVybiByZWN0LnRvcCA+PSAwICYmIHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICB9O1xyXG5cclxuICBjb25zdCBbaW5WaWV3LCBzZXRJblZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIHNldEluVmlldyhpc0luVmlldygpKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0SW5WaWV3KGlzSW5WaWV3KCkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aW1nXHJcbiAgICAgIHNyYz17XHJcbiAgICAgICAgaXNMb2FkaW5nXHJcbiAgICAgICAgICA/ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFQLy8vd0FBQUNINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQ1JBRUFPdz09JyAvLyAxeDFnaWZcclxuICAgICAgICAgIDogaW5WaWV3XHJcbiAgICAgICAgICA/IHNlY29uZGFyeUltZ1xyXG4gICAgICAgICAgOiBwcmltYXJ5SW1nXHJcbiAgICAgIH1cclxuICAgICAgYWx0PVwiXCJcclxuICAgICAgcmVmPXtpbWFnZVJlZn1cclxuICAgICAgd2lkdGg9XCIyMDBcIlxyXG4gICAgICBoZWlnaHQ9XCIyMDBcIlxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VUb2dnbGVPblNjcm9sbDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkltYWdlVG9nZ2xlT25TY3JvbGwiLCJwcmltYXJ5SW1nIiwic2Vjb25kYXJ5SW1nIiwiaW1hZ2VSZWYiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc0luVmlldyIsInJlY3QiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiYm90dG9tIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJpblZpZXciLCJzZXRJblZpZXciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpbWciLCJzcmMiLCJhbHQiLCJyZWYiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ImageToggleOnScroll.js\n"));

/***/ }),

/***/ "./src/SpeakerDetail.js":
/*!******************************!*\
  !*** ./src/SpeakerDetail.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageToggleOnScroll */ \"./src/ImageToggleOnScroll.js\");\n\n\nconst SpeakerDetail = (param)=>{\n    let { id, firstName, lastName, favorite, bio, onHeartFavoriteHandler } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card col-4 cardmin\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                className: \"card-img-top\",\n                primaryImg: \"/static/speakers/bw/Speaker-\".concat(id, \".jpg\"),\n                secondaryImg: \"/static/speakers/Speaker-\".concat(id, \".jpg\"),\n                alt: \"\".concat(firstName, \"  \").concat(lastName)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Workflow\\\\react-hooks\\\\full-conference-reactapp-website\\\\src\\\\SpeakerDetail.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-body\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"card-title\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                \"data-sessionid\": id,\n                                className: favorite ? \"heartredbutton\" : \"heartdarkbutton\",\n                                onClick: (e)=>{\n                                    onHeartFavoriteHandler(e, !favorite);\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Workflow\\\\react-hooks\\\\full-conference-reactapp-website\\\\src\\\\SpeakerDetail.js\",\n                                lineNumber: 21,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    firstName,\n                                    \" \",\n                                    lastName\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Workflow\\\\react-hooks\\\\full-conference-reactapp-website\\\\src\\\\SpeakerDetail.js\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Workflow\\\\react-hooks\\\\full-conference-reactapp-website\\\\src\\\\SpeakerDetail.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Workflow\\\\react-hooks\\\\full-conference-reactapp-website\\\\src\\\\SpeakerDetail.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Workflow\\\\react-hooks\\\\full-conference-reactapp-website\\\\src\\\\SpeakerDetail.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Workflow\\\\react-hooks\\\\full-conference-reactapp-website\\\\src\\\\SpeakerDetail.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_c = SpeakerDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerDetail);\nvar _c;\n$RefreshReg$(_c, \"SpeakerDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU3BlYWtlckRldGFpbC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3RDtBQUV4RCxNQUFNQyxnQkFBZ0I7UUFBQyxFQUNyQkMsRUFBRSxFQUNGQyxTQUFTLEVBQ1RDLFFBQVEsRUFDUkMsUUFBUSxFQUNSQyxHQUFHLEVBQ0hDLHNCQUFzQixFQUN2QjtJQUNDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ1QsNERBQW1CQTtnQkFDbEJTLFdBQVU7Z0JBQ1ZDLFlBQVksK0JBQWtDLE9BQUhSLElBQUc7Z0JBQzlDUyxjQUFjLDRCQUErQixPQUFIVCxJQUFHO2dCQUM3Q1UsS0FBSyxHQUFpQlIsT0FBZEQsV0FBVSxNQUFhLE9BQVRDOzs7Ozs7MEJBRXhCLDhEQUFDSTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNJO3dCQUFHSixXQUFVOzswQ0FDWiw4REFBQ0s7Z0NBQ0NDLGtCQUFnQmI7Z0NBQ2hCTyxXQUFXSixXQUFXLG1CQUFtQjtnQ0FDekNXLFNBQVMsQ0FBQ0M7b0NBQ1JWLHVCQUF1QlUsR0FBRyxDQUFDWjtnQ0FDN0I7Ozs7OzswQ0FFRiw4REFBQ2E7O29DQUNFZjtvQ0FBVTtvQ0FBRUM7Ozs7Ozs7Ozs7Ozs7a0NBR2pCLDhEQUFDYztrQ0FBTVo7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlmO0tBakNNTDtBQW1DTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvU3BlYWtlckRldGFpbC5qcz8zZjdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZVRvZ2dsZU9uU2Nyb2xsIGZyb20gJy4vSW1hZ2VUb2dnbGVPblNjcm9sbCc7XHJcblxyXG5jb25zdCBTcGVha2VyRGV0YWlsID0gKHtcclxuICBpZCxcclxuICBmaXJzdE5hbWUsXHJcbiAgbGFzdE5hbWUsXHJcbiAgZmF2b3JpdGUsXHJcbiAgYmlvLFxyXG4gIG9uSGVhcnRGYXZvcml0ZUhhbmRsZXIsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNvbC00IGNhcmRtaW5cIj5cclxuICAgICAgPEltYWdlVG9nZ2xlT25TY3JvbGxcclxuICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIlxyXG4gICAgICAgIHByaW1hcnlJbWc9e2Avc3RhdGljL3NwZWFrZXJzL2J3L1NwZWFrZXItJHtpZH0uanBnYH1cclxuICAgICAgICBzZWNvbmRhcnlJbWc9e2Avc3RhdGljL3NwZWFrZXJzL1NwZWFrZXItJHtpZH0uanBnYH1cclxuICAgICAgICBhbHQ9e2Ake2ZpcnN0TmFtZX0gICR7bGFzdE5hbWV9YH1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBkYXRhLXNlc3Npb25pZD17aWR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17ZmF2b3JpdGUgPyAnaGVhcnRyZWRidXR0b24nIDogJ2hlYXJ0ZGFya2J1dHRvbid9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgb25IZWFydEZhdm9yaXRlSGFuZGxlcihlLCAhZmF2b3JpdGUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICB7Zmlyc3ROYW1lfSB7bGFzdE5hbWV9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9oND5cclxuICAgICAgICA8c3Bhbj57YmlvfTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlckRldGFpbDsiXSwibmFtZXMiOlsiSW1hZ2VUb2dnbGVPblNjcm9sbCIsIlNwZWFrZXJEZXRhaWwiLCJpZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZmF2b3JpdGUiLCJiaW8iLCJvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwicHJpbWFyeUltZyIsInNlY29uZGFyeUltZyIsImFsdCIsImg0IiwiYnV0dG9uIiwiZGF0YS1zZXNzaW9uaWQiLCJvbkNsaWNrIiwiZSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/SpeakerDetail.js\n"));

/***/ })

});