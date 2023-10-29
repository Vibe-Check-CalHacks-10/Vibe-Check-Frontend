"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/demo/page",{

/***/ "(app-pages-browser)/./src/app/demo/page.js":
/*!******************************!*\
  !*** ./src/app/demo/page.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-webcam */ \"(app-pages-browser)/./node_modules/react-webcam/dist/react-webcam.js\");\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_webcam__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common/Header */ \"(app-pages-browser)/./src/common/Header.js\");\n/* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-vis */ \"(app-pages-browser)/./node_modules/react-vis/es/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/shared/lib/app-dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n// Bandaid import fix\n\nconst ReactPlayer = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_node_modules_react-player_lib_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! react-player */ \"(app-pages-browser)/./node_modules/react-player/lib/index.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js -> \" + \"react-player\"\n        ]\n    },\n    ssr: false\n});\n_c = ReactPlayer;\nconst videoConstraints = {\n    width: {\n        min: 480\n    },\n    height: {\n        min: 720\n    },\n    aspectRatio: 1\n};\nconst navigation = [\n    {\n        name: \"Demo\",\n        href: \"#\"\n    },\n    {\n        name: \"Vision\",\n        href: \"#\"\n    },\n    {\n        name: \"About\",\n        href: \"#\"\n    }\n];\nconst scanFrequency = 5; // seconds\nconst videoDemoUrl = \"https://www.youtube.com/watch?v=3MqYE2UuN24\";\nfunction Home() {\n    _s();\n    const [mobileMenuOpen, setMobileMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const webcamRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // reference to webcam\n    const websocketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [streaming, setStreaming] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false); // whether or not we are streaming\n    const [res, setRes] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]); // response from websocket\n    let ws = null; // websocket connection\n    const apiKey = \"BdejEB5Arn7np9aAyl2eT1tJflfr41QHW6GlquSliAg9jBfQ\";\n    const wsURL = \"wss://api.hume.ai/v0/stream/models?apikey=\".concat(apiKey);\n    function extractEngagement(res) {\n        if (!res.face.predictions) return [];\n        const { emotions } = res.face.predictions[0];\n        const interest = emotions.find((emotion)=>emotion.name === \"Interest\").score;\n        return interest;\n    }\n    function connect() {\n        ws = new WebSocket(wsURL);\n        createCallbacks();\n        // save this websocket connection\n        websocketRef.current = ws;\n    // (ws, \"after reference save\");\n    }\n    function createCallbacks() {\n        // define callback function\n        ws.onopen = ()=>{\n            console.log(\"WebSocket connection established\");\n            setStreaming(true);\n        };\n        ws.onmessage = (event)=>{\n            const res = JSON.parse(event.data);\n            const time = res.payload_id;\n            // // ensure we are handling responses in order\n            // if (frame < latestFrame) return;\n            // latestFrame = frame;\n            console.log(res);\n            const new_engagement_point = {\n                x: time,\n                y: extractEngagement(res)\n            };\n            setRes((list)=>[\n                    ...list,\n                    new_engagement_point\n                ]);\n            console.log(new_engagement_point);\n        };\n        ws.addEventListener(\"close\", (event)=>{\n            if (streaming) {\n                ws = new WebSocket(wsURL);\n                console.log(\"WebSocket reconnecting...\", event);\n                createCallbacks();\n            }\n            // IF video is playing when streaming is stopped then pause the video\n            console.log(\"Websocket connection closed\", event);\n        });\n        ws.addEventListener(\"error\", (error)=>{\n            console.error(\"WebSocket error:\", error);\n        });\n    }\n    // capture image from webcam and send to websocket for every 5 seconds played in video\n    // const interval = setInterval(async () => {\n    //   const src = capture(); // returns base64 encoded image\n    //   if (src == null)\n    //     return \n    //   const models = { face: {} };\n    //   const payload_id = \"0\";\n    //   const message = JSON.stringify({\"data\": src, models, payload_id });\n    //   console.log(\"sending this message \" + message)\n    //   ws.send(message);\n    // }, 5000);\n    // capture image from webcam and returns base64 encoded webp\n    const capture = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(()=>{\n        const imageSrc = webcamRef.current.getScreenshot();\n        if (imageSrc == null) return;\n        // only include the <data> portion of </data> data:[<mediatype>][;base64],<data>\n        const imageSrcSplit = imageSrc.split(\",\")[1];\n        return imageSrcSplit;\n    }, [\n        webcamRef\n    ]);\n    // video player\n    // connect to websocket when video is played\n    const onPlay = ()=>{\n        connect();\n    };\n    // disconnect from websocket when video is paused\n    const onPause = ()=>{\n        setStreaming(false);\n        websocketRef.current.close(1000, \"video stopped\");\n    };\n    const onProgress = (param)=>{\n        let { played, playedSeconds, loaded, loadedSeconds } = param;\n        // send image to websocket if we have played 5 seconds more than the last time we sent an image\n        if (streaming && Math.floor(playedSeconds) % scanFrequency === 0) {\n            const src = capture(); // returns base64 encoded image\n            if (src == null) return;\n            const models = {\n                face: {}\n            };\n            const payload_id = Math.floor(playedSeconds).toString();\n            const message = JSON.stringify({\n                \"data\": src,\n                models,\n                payload_id\n            });\n            // console.log(\"sending this message \" + message)\n            websocketRef.current.send(message);\n            console.log(\"sending image to websocket\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white h-screen flex items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                lineNumber: 164,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-items-center align-middle flex-col pt-12 gap-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-around align-middle flex-row gap-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center align-middle flex-col\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ReactPlayer, {\n                                    className: \"max-h-fit\",\n                                    height: 400,\n                                    url: videoDemoUrl,\n                                    light: true,\n                                    onPlay: onPlay,\n                                    onPause: onPause,\n                                    onProgress: onProgress\n                                }, void 0, false, {\n                                    fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                                    lineNumber: 170,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                                lineNumber: 169,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center align-middle flex-col items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_webcam__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    ref: webcamRef,\n                                    videoConstraints: videoConstraints,\n                                    width: 400,\n                                    height: 720\n                                }, void 0, false, {\n                                    fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                                    lineNumber: 175,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                                lineNumber: 174,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                        lineNumber: 167,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative isolate  flex flex-row items-center justify-center  border-emerald-300/70\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_vis__WEBPACK_IMPORTED_MODULE_4__.XYPlot, {\n                            width: 600,\n                            height: 200,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_vis__WEBPACK_IMPORTED_MODULE_4__.HorizontalGridLines, {\n                                    style: {\n                                        stroke: \"#B7E9ED\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                                    lineNumber: 183,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_vis__WEBPACK_IMPORTED_MODULE_4__.VerticalGridLines, {\n                                    style: {\n                                        stroke: \"#B7E9ED\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                                    lineNumber: 184,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_vis__WEBPACK_IMPORTED_MODULE_4__.XAxis, {\n                                    title: \"X Axis\",\n                                    style: {\n                                        line: {\n                                            stroke: \"#ADDDE1\"\n                                        },\n                                        ticks: {\n                                            stroke: \"#ADDDE1\"\n                                        },\n                                        text: {\n                                            stroke: \"none\",\n                                            fill: \"#6b6b76\",\n                                            fontWeight: 600\n                                        }\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                                    lineNumber: 185,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_vis__WEBPACK_IMPORTED_MODULE_4__.YAxis, {\n                                    title: \"Y Axis\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                                    lineNumber: 193,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_vis__WEBPACK_IMPORTED_MODULE_4__.LineSeries, {\n                                    className: \"first-series\",\n                                    data: res,\n                                    style: {\n                                        strokeWidth: 4\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                                    lineNumber: 194,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                            lineNumber: 182,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                        lineNumber: 181,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl font-extrabold text-green-300 text-center px-3\",\n                                children: [\n                                    \" \",\n                                    \"Current Engagement: \".concat(res.length > 0 ? res[res.length - 1].y : \"No data yet\"),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                                lineNumber: 206,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                            lineNumber: 205,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                        lineNumber: 203,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                lineNumber: 165,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n        lineNumber: 163,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"rYpripqtOZmUNh5BQwRfr5h7Eoo=\");\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"ReactPlayer\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGVtby9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUN3QztBQUNmO0FBQ1E7QUFDRztBQVFqQjtBQUduQixxQkFBcUI7QUFDYTtBQUNsQyxNQUFNWSxjQUFjRCxtREFBT0EsQ0FBQyxJQUFNLDBPQUFzQjs7Ozs7O0lBQUlFLEtBQUs7O0tBQTNERDtBQUdOLE1BQU1FLG1CQUFtQjtJQUN2QkMsT0FBTztRQUFFQyxLQUFLO0lBQUk7SUFDbEJDLFFBQVE7UUFBRUQsS0FBSztJQUFJO0lBQ25CRSxhQUFhO0FBQ2Y7QUFHQSxNQUFNQyxhQUFhO0lBQ2pCO1FBQUVDLE1BQU07UUFBUUMsTUFBTTtJQUFJO0lBQzFCO1FBQUVELE1BQU07UUFBVUMsTUFBTTtJQUFJO0lBQzVCO1FBQUVELE1BQU07UUFBU0MsTUFBTTtJQUFJO0NBQzVCO0FBRUQsTUFBTUMsZ0JBQWdCLEdBQUcsVUFBVTtBQUVuQyxNQUFNQyxlQUFlO0FBRU4sU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR3pCLCtDQUFRQSxDQUFDO0lBRXJELE1BQU0wQixZQUFZM0IsNkNBQU1BLENBQUMsT0FBUSxzQkFBc0I7SUFDdkQsTUFBTTRCLGVBQWU1Qiw2Q0FBTUEsQ0FBQztJQUc1QixNQUFNLENBQUM2QixXQUFXQyxhQUFhLEdBQUc1QixxREFBYyxDQUFDLFFBQVMsa0NBQWtDO0lBQzVGLE1BQU0sQ0FBQzZCLEtBQUtDLE9BQU8sR0FBRzlCLHFEQUFjLENBQUMsRUFBRSxHQUFJLDBCQUEwQjtJQUdyRSxJQUFJK0IsS0FBSyxNQUFNLHVCQUF1QjtJQUN0QyxNQUFNQyxTQUFTQyxrREFBK0I7SUFDOUMsTUFBTUcsUUFBUSw2Q0FBb0QsT0FBUEo7SUFJM0QsU0FBU0ssa0JBQWtCUixHQUFHO1FBQzVCLElBQUksQ0FBQ0EsSUFBSVMsSUFBSSxDQUFDQyxXQUFXLEVBQUUsT0FBTyxFQUFFO1FBQ3BDLE1BQU0sRUFB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OzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDYTtnQ0FBR2IsV0FBVTs7b0NBQTBEO29DQUFJLHVCQUE2RSxPQUF2RDNELElBQUl5RSxNQUFNLEdBQUcsSUFBSXpFLEdBQUcsQ0FBQ0EsSUFBSXlFLE1BQU0sR0FBRyxFQUFFLENBQUN6QyxDQUFDLEdBQUc7b0NBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU12SztHQTlLd0J2QztNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2RlbW8vcGFnZS5qcz82NWRkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgV2ViY2FtIGZyb20gJ3JlYWN0LXdlYmNhbSdcbmltcG9ydCBIZWFkZXIgZnJvbSAnQC9jb21tb24vSGVhZGVyJ1xuaW1wb3J0IHtcbiAgWFlQbG90LFxuICBYQXhpcyxcbiAgWUF4aXMsXG4gIEhvcml6b250YWxHcmlkTGluZXMsXG4gIFZlcnRpY2FsR3JpZExpbmVzLFxuICBMaW5lU2VyaWVzXG59IGZyb20gJ3JlYWN0LXZpcyc7XG5cblxuLy8gQmFuZGFpZCBpbXBvcnQgZml4XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5jb25zdCBSZWFjdFBsYXllciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwicmVhY3QtcGxheWVyXCIpLCB7IHNzcjogZmFsc2UgfSk7XG5cblxuY29uc3QgdmlkZW9Db25zdHJhaW50cyA9IHtcbiAgd2lkdGg6IHsgbWluOiA0ODAgfSxcbiAgaGVpZ2h0OiB7IG1pbjogNzIwIH0sXG4gIGFzcGVjdFJhdGlvOiAxXG59O1xuXG5cbmNvbnN0IG5hdmlnYXRpb24gPSBbXG4gIHsgbmFtZTogJ0RlbW8nLCBocmVmOiAnIycgfSxcbiAgeyBuYW1lOiAnVmlzaW9uJywgaHJlZjogJyMnIH0sXG4gIHsgbmFtZTogJ0Fib3V0JywgaHJlZjogJyMnIH0sXG5dXG5cbmNvbnN0IHNjYW5GcmVxdWVuY3kgPSA1OyAvLyBzZWNvbmRzXG5cbmNvbnN0IHZpZGVvRGVtb1VybCA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0zTXFZRTJVdU4yNFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFttb2JpbGVNZW51T3Blbiwgc2V0TW9iaWxlTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgd2ViY2FtUmVmID0gdXNlUmVmKG51bGwpOyAgLy8gcmVmZXJlbmNlIHRvIHdlYmNhbVxuICBjb25zdCB3ZWJzb2NrZXRSZWYgPSB1c2VSZWYobnVsbCk7XG5cblxuICBjb25zdCBbc3RyZWFtaW5nLCBzZXRTdHJlYW1pbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpOyAgLy8gd2hldGhlciBvciBub3Qgd2UgYXJlIHN0cmVhbWluZ1xuICBjb25zdCBbcmVzLCBzZXRSZXNdID0gUmVhY3QudXNlU3RhdGUoW10pOyAgLy8gcmVzcG9uc2UgZnJvbSB3ZWJzb2NrZXRcbiAgXG5cbiAgbGV0IHdzID0gbnVsbDsgLy8gd2Vic29ja2V0IGNvbm5lY3Rpb25cbiAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWTtcbiAgY29uc3Qgd3NVUkwgPSBgd3NzOi8vYXBpLmh1bWUuYWkvdjAvc3RyZWFtL21vZGVscz9hcGlrZXk9JHthcGlLZXl9YDtcblxuXG5cbiAgZnVuY3Rpb24gZXh0cmFjdEVuZ2FnZW1lbnQocmVzKSB7XG4gICAgaWYgKCFyZXMuZmFjZS5wcmVkaWN0aW9ucykgcmV0dXJuIFtdO1xuICAgIGNvbnN0IHsgZW1vdGlvbnMgfSA9IHJlcy5mYWNlLnByZWRpY3Rpb25zWzBdO1xuICAgICBjb25zdCBpbnRlcmVzdCA9IGVtb3Rpb25zLmZpbmQoKGVtb3Rpb24pID0+IGVtb3Rpb24ubmFtZSA9PT0gJ0ludGVyZXN0Jykuc2NvcmU7XG4gICAgcmV0dXJuIGludGVyZXN0O1xuICB9XG5cblxuICBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgIHdzID0gbmV3IFdlYlNvY2tldCh3c1VSTClcbiAgICBjcmVhdGVDYWxsYmFja3MoKTtcblxuICAgIC8vIHNhdmUgdGhpcyB3ZWJzb2NrZXQgY29ubmVjdGlvblxuICAgIHdlYnNvY2tldFJlZi5jdXJyZW50ID0gd3M7XG4gICAgLy8gKHdzLCBcImFmdGVyIHJlZmVyZW5jZSBzYXZlXCIpO1xuXG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVDYWxsYmFja3MoKSB7XG4gICAgLy8gZGVmaW5lIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgd3Mub25vcGVuID0gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJXZWJTb2NrZXQgY29ubmVjdGlvbiBlc3RhYmxpc2hlZFwiKTtcbiAgICAgIHNldFN0cmVhbWluZyh0cnVlKVxuICAgIH1cbiAgICB3cy5vbm1lc3NhZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICBjb25zdCB0aW1lID0gcmVzLnBheWxvYWRfaWQ7XG4gICAgICAvLyAvLyBlbnN1cmUgd2UgYXJlIGhhbmRsaW5nIHJlc3BvbnNlcyBpbiBvcmRlclxuICAgICAgLy8gaWYgKGZyYW1lIDwgbGF0ZXN0RnJhbWUpIHJldHVybjtcbiAgICAgIC8vIGxhdGVzdEZyYW1lID0gZnJhbWU7XG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgY29uc3QgbmV3X2VuZ2FnZW1lbnRfcG9pbnQgPSB7eDogdGltZSwgeTogZXh0cmFjdEVuZ2FnZW1lbnQocmVzKX07XG4gICAgICBzZXRSZXMoKGxpc3QpID0+IFsuLi5saXN0LCBuZXdfZW5nYWdlbWVudF9wb2ludF0pO1xuICAgICAgY29uc29sZS5sb2cobmV3X2VuZ2FnZW1lbnRfcG9pbnQpO1xuICAgIH1cbiAgICB3cy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIChldmVudCkgPT4ge1xuICAgICAgaWYgKHN0cmVhbWluZykge1xuICAgICAgICB3cyA9IG5ldyBXZWJTb2NrZXQod3NVUkwpXG4gICAgICAgIGNvbnNvbGUubG9nKCdXZWJTb2NrZXQgcmVjb25uZWN0aW5nLi4uJywgZXZlbnQpO1xuICAgICAgICBjcmVhdGVDYWxsYmFja3MoKTtcbiAgICAgIH1cbiAgICAgIC8vIElGIHZpZGVvIGlzIHBsYXlpbmcgd2hlbiBzdHJlYW1pbmcgaXMgc3RvcHBlZCB0aGVuIHBhdXNlIHRoZSB2aWRlb1xuICAgICAgY29uc29sZS5sb2coJ1dlYnNvY2tldCBjb25uZWN0aW9uIGNsb3NlZCcsIGV2ZW50KVxuICAgIH0pXG5cbiAgICB3cy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignV2ViU29ja2V0IGVycm9yOicsIGVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGNhcHR1cmUgaW1hZ2UgZnJvbSB3ZWJjYW0gYW5kIHNlbmQgdG8gd2Vic29ja2V0IGZvciBldmVyeSA1IHNlY29uZHMgcGxheWVkIGluIHZpZGVvXG4gIC8vIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xuICAvLyAgIGNvbnN0IHNyYyA9IGNhcHR1cmUoKTsgLy8gcmV0dXJucyBiYXNlNjQgZW5jb2RlZCBpbWFnZVxuICAvLyAgIGlmIChzcmMgPT0gbnVsbClcbiAgLy8gICAgIHJldHVybiBcbiAgLy8gICBjb25zdCBtb2RlbHMgPSB7IGZhY2U6IHt9IH07XG4gIC8vICAgY29uc3QgcGF5bG9hZF9pZCA9IFwiMFwiO1xuICAvLyAgIGNvbnN0IG1lc3NhZ2UgPSBKU09OLnN0cmluZ2lmeSh7XCJkYXRhXCI6IHNyYywgbW9kZWxzLCBwYXlsb2FkX2lkIH0pO1xuICAvLyAgIGNvbnNvbGUubG9nKFwic2VuZGluZyB0aGlzIG1lc3NhZ2UgXCIgKyBtZXNzYWdlKVxuICAvLyAgIHdzLnNlbmQobWVzc2FnZSk7XG4gIC8vIH0sIDUwMDApO1xuXG5cbiAgLy8gY2FwdHVyZSBpbWFnZSBmcm9tIHdlYmNhbSBhbmQgcmV0dXJucyBiYXNlNjQgZW5jb2RlZCB3ZWJwXG4gIGNvbnN0IGNhcHR1cmUgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoKSA9PiB7XG4gICAgICBjb25zdCBpbWFnZVNyYyA9IHdlYmNhbVJlZi5jdXJyZW50LmdldFNjcmVlbnNob3QoKTtcbiAgICAgIGlmIChpbWFnZVNyYyA9PSBudWxsKVxuICAgICAgICByZXR1cm47XG4gICAgICAvLyBvbmx5IGluY2x1ZGUgdGhlIDxkYXRhPiBwb3J0aW9uIG9mIDwvZGF0YT4gZGF0YTpbPG1lZGlhdHlwZT5dWztiYXNlNjRdLDxkYXRhPlxuICAgICAgY29uc3QgaW1hZ2VTcmNTcGxpdCA9IGltYWdlU3JjLnNwbGl0KCcsJylbMV07XG4gICAgICByZXR1cm4gaW1hZ2VTcmNTcGxpdDtcbiAgICB9LFxuICAgIFt3ZWJjYW1SZWZdXG4gICk7XG5cblxuICAvLyB2aWRlbyBwbGF5ZXJcblxuXG4gIC8vIGNvbm5lY3QgdG8gd2Vic29ja2V0IHdoZW4gdmlkZW8gaXMgcGxheWVkXG4gIGNvbnN0IG9uUGxheSA9ICgpID0+IHtcbiAgICBjb25uZWN0KCk7XG4gIH07XG5cbiAgLy8gZGlzY29ubmVjdCBmcm9tIHdlYnNvY2tldCB3aGVuIHZpZGVvIGlzIHBhdXNlZFxuICBjb25zdCBvblBhdXNlID0gKCkgPT4ge1xuICAgIHNldFN0cmVhbWluZyhmYWxzZSk7XG4gICAgd2Vic29ja2V0UmVmLmN1cnJlbnQuY2xvc2UoMTAwMCwgJ3ZpZGVvIHN0b3BwZWQnKTtcbiAgfTtcblxuICBjb25zdCBvblByb2dyZXNzID0gKHtwbGF5ZWQsIHBsYXllZFNlY29uZHMsIGxvYWRlZCwgbG9hZGVkU2Vjb25kc30pID0+IHtcbiAgICAvLyBzZW5kIGltYWdlIHRvIHdlYnNvY2tldCBpZiB3ZSBoYXZlIHBsYXllZCA1IHNlY29uZHMgbW9yZSB0aGFuIHRoZSBsYXN0IHRpbWUgd2Ugc2VudCBhbiBpbWFnZVxuICAgIGlmIChzdHJlYW1pbmcgJiYgTWF0aC5mbG9vcihwbGF5ZWRTZWNvbmRzKSAlIHNjYW5GcmVxdWVuY3kgPT09IDApIHtcbiAgICAgIGNvbnN0IHNyYyA9IGNhcHR1cmUoKTsgLy8gcmV0dXJucyBiYXNlNjQgZW5jb2RlZCBpbWFnZVxuICAgICAgaWYgKHNyYyA9PSBudWxsKVxuICAgICAgICByZXR1cm4gXG4gICAgICBjb25zdCBtb2RlbHMgPSB7IGZhY2U6IHt9IH07XG4gICAgICBjb25zdCBwYXlsb2FkX2lkID0gTWF0aC5mbG9vcihwbGF5ZWRTZWNvbmRzKS50b1N0cmluZygpO1xuICAgICAgY29uc3QgbWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KHtcImRhdGFcIjogc3JjLCBtb2RlbHMsIHBheWxvYWRfaWQgfSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcInNlbmRpbmcgdGhpcyBtZXNzYWdlIFwiICsgbWVzc2FnZSlcbiAgICAgIHdlYnNvY2tldFJlZi5jdXJyZW50LnNlbmQobWVzc2FnZSk7XG4gICAgICBjb25zb2xlLmxvZyhcInNlbmRpbmcgaW1hZ2UgdG8gd2Vic29ja2V0XCIpXG4gICAgfSBcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8SGVhZGVyLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktaXRlbXMtY2VudGVyIGFsaWduLW1pZGRsZSBmbGV4LWNvbCBwdC0xMiBnYXAtMycgPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYXJvdW5kIGFsaWduLW1pZGRsZSBmbGV4LXJvdyBnYXAtMyc+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBhbGlnbi1taWRkbGUgZmxleC1jb2wnPlxuICAgICAgICAgICAgPFJlYWN0UGxheWVyIGNsYXNzTmFtZT1cIm1heC1oLWZpdFwiIGhlaWdodD17NDAwfSB1cmw9e3ZpZGVvRGVtb1VybH0gbGlnaHQ9e3RydWV9IG9uUGxheT17b25QbGF5fSBvblBhdXNlPXtvblBhdXNlfSAgb25Qcm9ncmVzcz17b25Qcm9ncmVzc30vPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFNxdWFyZSBhc3BlY3QgcmF0aW8gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tbWlkZGxlIGZsZXgtY29sIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICA8V2ViY2FtICByZWY9e3dlYmNhbVJlZn0gICAgIHZpZGVvQ29uc3RyYWludHM9e3ZpZGVvQ29uc3RyYWludHN9IHdpZHRoPXs0MDB9IGhlaWdodD17NzIwfSAvPiAgIFxuICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPC9kaXY+IFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaXNvbGF0ZSAgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgIGJvcmRlci1lbWVyYWxkLTMwMC83MFwiPlxuICAgICAgICAgIDxYWVBsb3Qgd2lkdGg9ezYwMH0gaGVpZ2h0PXsyMDB9PlxuICAgICAgICAgICAgPEhvcml6b250YWxHcmlkTGluZXMgc3R5bGU9e3tzdHJva2U6ICcjQjdFOUVEJ319IC8+XG4gICAgICAgICAgICA8VmVydGljYWxHcmlkTGluZXMgc3R5bGU9e3tzdHJva2U6ICcjQjdFOUVEJ319IC8+XG4gICAgICAgICAgICAgIDxYQXhpc1xuICAgICAgICAgICAgICAgIHRpdGxlPVwiWCBBeGlzXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgbGluZToge3N0cm9rZTogJyNBRERERTEnfSxcbiAgICAgICAgICAgICAgICAgIHRpY2tzOiB7c3Ryb2tlOiAnI0FERERFMSd9LFxuICAgICAgICAgICAgICAgICAgdGV4dDoge3N0cm9rZTogJ25vbmUnLCBmaWxsOiAnIzZiNmI3NicsIGZvbnRXZWlnaHQ6IDYwMH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8WUF4aXMgdGl0bGU9XCJZIEF4aXNcIiAvPlxuICAgICAgICAgICAgPExpbmVTZXJpZXNcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlyc3Qtc2VyaWVzXCJcbiAgICAgICAgICAgICAgZGF0YT17cmVzfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiA0XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L1hZUGxvdD4gXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHsvKiBoMSBjZW50ZXJlZCBiZWxvdyB3ZWJjYW0gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0yeGwgZm9udC1leHRyYWJvbGQgdGV4dC1ncmVlbi0zMDAgdGV4dC1jZW50ZXIgcHgtMyc+IHsgYEN1cnJlbnQgRW5nYWdlbWVudDogJHtyZXMubGVuZ3RoID4gMCA/IHJlc1tyZXMubGVuZ3RoIC0gMV0ueSA6IFwiTm8gZGF0YSB5ZXRcIn1gfSA8L2gxPiAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsidXNlUmVmIiwidXNlU3RhdGUiLCJSZWFjdCIsIldlYmNhbSIsIkhlYWRlciIsIlhZUGxvdCIsIlhBeGlzIiwiWUF4aXMiLCJIb3Jpem9udGFsR3JpZExpbmVzIiwiVmVydGljYWxHcmlkTGluZXMiLCJMaW5lU2VyaWVzIiwiZHluYW1pYyIsIlJlYWN0UGxheWVyIiwic3NyIiwidmlkZW9Db25zdHJhaW50cyIsIndpZHRoIiwibWluIiwiaGVpZ2h0IiwiYXNwZWN0UmF0aW8iLCJuYXZpZ2F0aW9uIiwibmFtZSIsImhyZWYiLCJzY2FuRnJlcXVlbmN5IiwidmlkZW9EZW1vVXJsIiwiSG9tZSIsIm1vYmlsZU1lbnVPcGVuIiwic2V0TW9iaWxlTWVudU9wZW4iLCJ3ZWJjYW1SZWYiLCJ3ZWJzb2NrZXRSZWYiLCJzdHJlYW1pbmciLCJzZXRTdHJlYW1pbmciLCJyZXMiLCJzZXRSZXMiLCJ3cyIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfS0VZIiwid3NVUkwiLCJleHRyYWN0RW5nYWdlbWVudCIsImZhY2UiLCJwcmVkaWN0aW9ucyIsImVtb3Rpb25zIiwiaW50ZXJlc3QiLCJmaW5kIiwiZW1vdGlvbiIsInNjb3JlIiwiY29ubmVjdCIsIldlYlNvY2tldCIsImNyZWF0ZUNhbGxiYWNrcyIsImN1cnJlbnQiLCJvbm9wZW4iLCJjb25zb2xlIiwibG9nIiwib25tZXNzYWdlIiwiZXZlbnQiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwidGltZSIsInBheWxvYWRfaWQiLCJuZXdfZW5nYWdlbWVudF9wb2ludCIsIngiLCJ5IiwibGlzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlcnJvciIsImNhcHR1cmUiLCJ1c2VDYWxsYmFjayIsImltYWdlU3JjIiwiZ2V0U2NyZWVuc2hvdCIsImltYWdlU3JjU3BsaXQiLCJzcGxpdCIsIm9uUGxheSIsIm9uUGF1c2UiLCJjbG9zZSIsIm9uUHJvZ3Jlc3MiLCJwbGF5ZWQiLCJwbGF5ZWRTZWNvbmRzIiwibG9hZGVkIiwibG9hZGVkU2Vjb25kcyIsIk1hdGgiLCJmbG9vciIsInNyYyIsIm1vZGVscyIsInRvU3RyaW5nIiwibWVzc2FnZSIsInN0cmluZ2lmeSIsInNlbmQiLCJkaXYiLCJjbGFzc05hbWUiLCJ1cmwiLCJsaWdodCIsInJlZiIsInN0eWxlIiwic3Ryb2tlIiwidGl0bGUiLCJsaW5lIiwidGlja3MiLCJ0ZXh0IiwiZmlsbCIsImZvbnRXZWlnaHQiLCJzdHJva2VXaWR0aCIsImgxIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/demo/page.js\n"));

/***/ })

});