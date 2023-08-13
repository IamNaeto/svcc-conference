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

/***/ "./src/Speakers.js":
/*!*************************!*\
  !*** ./src/Speakers.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./src/Header.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpeakerData */ \"./src/SpeakerData.js\");\n/* harmony import */ var _SpeakerDetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SpeakerDetail */ \"./src/SpeakerDetail.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Speakers = (param)=>{\n    let {} = param;\n    _s();\n    const [speakingSaturday, setSpeakingSaturday] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [speakingSunday, setSpeakingSunday] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [speakerList, setSpeakerList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsLoading(true);\n        new Promise(function(resolve) {\n            setTimeout(function() {\n                resolve();\n            }, 1000);\n        }).then(()=>{\n            setIsLoading(false);\n        });\n        setSpeakerList(_SpeakerData__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n        return ()=>{\n            console.log(\"Cleanup\");\n        };\n    }, []);\n    const heartFavoriteHandler = (e, favouriteValue)=>{\n        e.preventDefault();\n        const sessionid = parseInt(e.target.attribute[\"data-session\"].value);\n        setSpeakerList.map((item)=>{\n            if (item.id === sessionid) {\n                return {\n                    ...item,\n                    favourite: favouriteValue\n                };\n            }\n            return item;\n        });\n    };\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Workflow\\\\react-hooks\\\\full-conference-reactapp-website\\\\src\\\\Speakers.js\",\n        lineNumber: 41,\n        columnNumber: 27\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Workflow\\\\react-hooks\\\\full-conference-reactapp-website\\\\src\\\\Speakers.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_3__.Menu, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Workflow\\\\react-hooks\\\\full-conference-reactapp-website\\\\src\\\\Speakers.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-deck\",\n                        children: speakerList.map((param)=>{\n                            let { id, firstName, lastName, bio, favourite } = param;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerDetail__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                id: id,\n                                favourite: favourite,\n                                firstName: firstName,\n                                lastNmae: lastName,\n                                bio: bio,\n                                onHeartFavouriteHandler: heartFavoriteHandler\n                            }, id, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Workflow\\\\react-hooks\\\\full-conference-reactapp-website\\\\src\\\\Speakers.js\",\n                                lineNumber: 53,\n                                columnNumber: 37\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Workflow\\\\react-hooks\\\\full-conference-reactapp-website\\\\src\\\\Speakers.js\",\n                        lineNumber: 49,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Workflow\\\\react-hooks\\\\full-conference-reactapp-website\\\\src\\\\Speakers.js\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Workflow\\\\react-hooks\\\\full-conference-reactapp-website\\\\src\\\\Speakers.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Documents\\\\Workflow\\\\react-hooks\\\\full-conference-reactapp-website\\\\src\\\\Speakers.js\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Speakers, \"16TB+m9rx2P2E9e6i8F9APNAaDA=\");\n_c = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);\nvar _c;\n$RefreshReg$(_c, \"Speakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU3BlYWtlcnMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBbUQ7QUFFakI7QUFDSjtBQUNXO0FBQ0c7QUFFNUMsTUFBTU8sV0FBVztRQUFDLEVBQUU7O0lBQ2hCLE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR1AsK0NBQVFBLENBQUM7SUFDekQsTUFBTSxDQUFDUSxnQkFBZ0JDLGtCQUFrQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUVyRCxNQUFNLENBQUNVLGFBQWFDLGVBQWUsR0FBR1gsK0NBQVFBLENBQUMsRUFBRTtJQUNqRCxNQUFNLENBQUNZLFdBQVdDLGFBQWEsR0FBR2IsK0NBQVFBLENBQUM7SUFFM0NELGdEQUFTQSxDQUFDO1FBQ05jLGFBQWE7UUFDYixJQUFJQyxRQUFRLFNBQVNDLE9BQU87WUFDeEJDLFdBQVc7Z0JBQ1BEO1lBQ0osR0FBRztRQUNQLEdBQUdFLElBQUksQ0FBQztZQUNKSixhQUFhO1FBQ2pCO1FBQ0FGLGVBQWVSLG9EQUFZQTtRQUMzQixPQUFPO1lBQ0hlLFFBQVFDLEdBQUcsQ0FBQztRQUNoQjtJQUNKLEdBQUUsRUFBRTtJQUVKLE1BQU1DLHVCQUF1QixDQUFDQyxHQUFHQztRQUM3QkQsRUFBRUUsY0FBYztRQUNoQixNQUFNQyxZQUFZQyxTQUFTSixFQUFFSyxNQUFNLENBQUNDLFNBQVMsQ0FBQyxlQUFlLENBQUNDLEtBQUs7UUFDbkVqQixlQUFla0IsR0FBRyxDQUFDLENBQUNDO1lBQ2hCLElBQUdBLEtBQUtDLEVBQUUsS0FBS1AsV0FBVTtnQkFDckIsT0FBTztvQkFBQyxHQUFHTSxJQUFJO29CQUFFRSxXQUFXVjtnQkFBYztZQUM5QztZQUNBLE9BQU9RO1FBQ1g7SUFDSjtJQUVBLElBQUlsQixXQUFXLHFCQUFPLDhEQUFDcUI7a0JBQUk7Ozs7OztJQUUzQixxQkFDSSw4REFBQ0E7OzBCQUNHLDhEQUFDaEMsMkNBQU1BOzs7OzswQkFDUCw4REFBQ0MsdUNBQUlBOzs7OzswQkFDTCw4REFBQytCO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1Z4QixZQUFZbUIsR0FBRyxDQUNaO2dDQUFDLEVBQUNFLEVBQUUsRUFBRUksU0FBUyxFQUFFQyxRQUFRLEVBQUVDLEdBQUcsRUFBRUwsU0FBUyxFQUFDOzRCQUN0QyxxQkFDSSw4REFBQzVCLHNEQUFhQTtnQ0FBVTJCLElBQUlBO2dDQUFJQyxXQUFXQTtnQ0FBV0csV0FBV0E7Z0NBQVdHLFVBQVVGO2dDQUFVQyxLQUFLQTtnQ0FBS0UseUJBQTJCbkI7K0JBQWpIVzs7Ozs7d0JBRTVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVCO0dBckRNMUI7S0FBQUE7QUF1RE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJzLmpzPzJmYmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcIi4vTWVudVwiO1xyXG5pbXBvcnQgU3BlYWtlcnNEYXRhIGZyb20gXCIuL1NwZWFrZXJEYXRhXCI7XHJcbmltcG9ydCBTcGVha2VyRGV0YWlsIGZyb20gXCIuL1NwZWFrZXJEZXRhaWxcIjtcclxuXHJcbmNvbnN0IFNwZWFrZXJzID0gKHt9KSA9PiB7XHJcbiAgICBjb25zdCBbc3BlYWtpbmdTYXR1cmRheSwgc2V0U3BlYWtpbmdTYXR1cmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtzcGVha2luZ1N1bmRheSwgc2V0U3BlYWtpbmdTdW5kYXldID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgW3NwZWFrZXJMaXN0LCBzZXRTcGVha2VyTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFNwZWFrZXJMaXN0KFNwZWFrZXJzRGF0YSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDbGVhbnVwXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICBjb25zdCBoZWFydEZhdm9yaXRlSGFuZGxlciA9IChlLCBmYXZvdXJpdGVWYWx1ZSkgPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHNlc3Npb25pZCA9IHBhcnNlSW50KGUudGFyZ2V0LmF0dHJpYnV0ZVtcImRhdGEtc2Vzc2lvblwiXS52YWx1ZSk7XHJcbiAgICAgICAgc2V0U3BlYWtlckxpc3QubWFwKChpdGVtKSA9PntcclxuICAgICAgICAgICAgaWYoaXRlbS5pZCA9PT0gc2Vzc2lvbmlkKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7Li4uaXRlbSwgZmF2b3VyaXRlOiBmYXZvdXJpdGVWYWx1ZX07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8TWVudSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3BlYWtlckxpc3QubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHtpZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgYmlvLCBmYXZvdXJpdGV9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWFrZXJEZXRhaWwga2V5PXtpZH0gaWQ9e2lkfSBmYXZvdXJpdGU9e2Zhdm91cml0ZX0gZmlyc3ROYW1lPXtmaXJzdE5hbWV9IGxhc3RObWFlPXtsYXN0TmFtZX0gYmlvPXtiaW99IG9uSGVhcnRGYXZvdXJpdGVIYW5kbGVyID0ge2hlYXJ0RmF2b3JpdGVIYW5kbGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyczsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWRlciIsIk1lbnUiLCJTcGVha2Vyc0RhdGEiLCJTcGVha2VyRGV0YWlsIiwiU3BlYWtlcnMiLCJzcGVha2luZ1NhdHVyZGF5Iiwic2V0U3BlYWtpbmdTYXR1cmRheSIsInNwZWFraW5nU3VuZGF5Iiwic2V0U3BlYWtpbmdTdW5kYXkiLCJzcGVha2VyTGlzdCIsInNldFNwZWFrZXJMaXN0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJoZWFydEZhdm9yaXRlSGFuZGxlciIsImUiLCJmYXZvdXJpdGVWYWx1ZSIsInByZXZlbnREZWZhdWx0Iiwic2Vzc2lvbmlkIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJhdHRyaWJ1dGUiLCJ2YWx1ZSIsIm1hcCIsIml0ZW0iLCJpZCIsImZhdm91cml0ZSIsImRpdiIsImNsYXNzTmFtZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiYmlvIiwibGFzdE5tYWUiLCJvbkhlYXJ0RmF2b3VyaXRlSGFuZGxlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Speakers.js\n"));

/***/ })

});