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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-webcam */ \"(app-pages-browser)/./node_modules/react-webcam/dist/react-webcam.js\");\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_webcam__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common/Header */ \"(app-pages-browser)/./src/common/Header.js\");\n/* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-vis */ \"(app-pages-browser)/./node_modules/react-vis/es/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/shared/lib/app-dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n// Bandaid import fix\n\nconst ReactPlayer = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_node_modules_react-player_lib_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! react-player */ \"(app-pages-browser)/./node_modules/react-player/lib/index.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js -> \" + \"react-player\"\n        ]\n    },\n    ssr: false\n});\n_c = ReactPlayer;\nconst videoConstraints = {\n    width: {\n        min: 480\n    },\n    height: {\n        min: 720\n    },\n    aspectRatio: 1\n};\nconst scanFrequency = 5; // seconds\nconst videoDemoUrl = \"https://www.youtube.com/watch?v=3MqYE2UuN24\";\nfunction Home() {\n    _s();\n    const webcamRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // reference to webcam\n    const websocketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [streaming, setStreaming] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false); // whether or not we are streaming\n    const [res, setRes] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]); // response from websocket\n    const minX = Math.min(...res.map((point)=>point.x));\n    const maxX = Math.max(...res.map((point)=>point.x));\n    const minY = Math.min(...res.map((point)=>point.y));\n    const maxY = Math.max(...res.map((point)=>point.y));\n    let ws = null; // websocket connection\n    const apiKey = \"BdejEB5Arn7np9aAyl2eT1tJflfr41QHW6GlquSliAg9jBfQ\";\n    const wsURL = \"wss://api.hume.ai/v0/stream/models?apikey=\".concat(apiKey);\n    function extractEngagement(res) {\n        if (!res.face.predictions) return [];\n        const { emotions } = res.face.predictions[0];\n        const interest = emotions.find((emotion)=>emotion.name === \"Interest\").score;\n        return interest;\n    }\n    function connect() {\n        ws = new WebSocket(wsURL);\n        createCallbacks();\n        // save this websocket connection\n        websocketRef.current = ws;\n    // (ws, \"after reference save\");\n    }\n    function createCallbacks() {\n        // define callback function\n        ws.onopen = ()=>{\n            console.log(\"WebSocket connection established\");\n            setStreaming(true);\n        };\n        ws.onmessage = (event)=>{\n            const res = JSON.parse(event.data);\n            const time = res.payload_id;\n            // // ensure we are handling responses in order\n            // if (frame < latestFrame) return;\n            // latestFrame = frame;\n            console.log(res);\n            const new_engagement_point = {\n                x: time,\n                y: extractEngagement(res)\n            };\n            setRes((list)=>[\n                    ...list,\n                    new_engagement_point\n                ]);\n            console.log(new_engagement_point);\n        };\n        ws.addEventListener(\"close\", (event)=>{\n            if (streaming || event.code === 1006) {\n                console.log(\"WebSocket reconnecting...\", event);\n                setTimeout(()=>{\n                    connect();\n                }, 3000);\n            }\n            // IF video is playing when streaming is stopped then pause the video\n            console.log(\"Websocket connection closed\", event);\n        });\n        ws.addEventListener(\"error\", (error)=>{\n            console.error(\"WebSocket error:\", error);\n        });\n    }\n    // capture image from webcam and returns base64 encoded webp\n    const capture = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(()=>{\n        const imageSrc = webcamRef.current.getScreenshot();\n        if (imageSrc == null) return;\n        // only include the <data> portion of </data> data:[<mediatype>][;base64],<data>\n        const imageSrcSplit = imageSrc.split(\",\")[1];\n        return imageSrcSplit;\n    }, [\n        webcamRef\n    ]);\n    // video player\n    // connect to websocket when video is played\n    const onPlay = ()=>{\n        connect();\n    };\n    // disconnect from websocket when video is paused\n    const onPause = ()=>{\n        setStreaming(false);\n        websocketRef.current.close(1000, \"video stopped\");\n    };\n    const onProgress = (param)=>{\n        let { played, playedSeconds, loaded, loadedSeconds } = param;\n        // send image to websocket if we have played 5 seconds more than the last time we sent an image\n        if (streaming && Math.floor(playedSeconds) % scanFrequency === 0) {\n            const src = capture(); // returns base64 encoded image\n            if (src == null) return;\n            const models = {\n                face: {}\n            };\n            const payload_id = Math.floor(playedSeconds).toString();\n            const message = JSON.stringify({\n                \"data\": src,\n                models,\n                payload_id\n            });\n            // console.log(\"sending this message \" + message)\n            websocketRef.current.send(message);\n            console.log(\"sending image to websocket\");\n        }\n    };\n    const onEnded = ()=>{\n        setStreaming(false);\n        websocketRef.current.close(1000, \"video ended\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white h-screen flex items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                lineNumber: 160,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-items-center align-middle flex-col pt-12 gap-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-around align-middle flex-row gap-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center align-middle flex-col\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ReactPlayer, {\n                                    className: \"max-h-fit\",\n                                    height: 400,\n                                    url: videoDemoUrl,\n                                    light: true,\n                                    onPlay: onPlay,\n                                    onPause: onPause,\n                                    onProgress: onProgress\n                                }, void 0, false, {\n                                    fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                                    lineNumber: 166,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                                lineNumber: 165,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center align-middle flex-col items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_webcam__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    ref: webcamRef,\n                                    videoConstraints: videoConstraints,\n                                    width: 400,\n                                    height: 720\n                                }, void 0, false, {\n                                    fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                                    lineNumber: 171,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                                lineNumber: 170,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                        lineNumber: 163,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative isolate  flex flex-row items-center justify-center  border-emerald-300/70\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_vis__WEBPACK_IMPORTED_MODULE_4__.XYPlot, {\n                            width: 600,\n                            height: 200,\n                            xDomain: [\n                                minX,\n                                maxX\n                            ],\n                            yDomain: [\n                                minY,\n                                maxY\n                            ],\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_vis__WEBPACK_IMPORTED_MODULE_4__.HorizontalGridLines, {}, void 0, false, {\n                                    fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                                    lineNumber: 179,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_vis__WEBPACK_IMPORTED_MODULE_4__.VerticalGridLines, {}, void 0, false, {\n                                    fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                                    lineNumber: 180,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_vis__WEBPACK_IMPORTED_MODULE_4__.XAxis, {\n                                    title: \"X Axis\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                                    lineNumber: 181,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_vis__WEBPACK_IMPORTED_MODULE_4__.YAxis, {\n                                    title: \"Y Axis\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                                    lineNumber: 182,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_vis__WEBPACK_IMPORTED_MODULE_4__.LineSeries, {\n                                    data: res,\n                                    color: \"green\" // Set line color to green\n                                    ,\n                                    strokeWidth: 4,\n                                    style: {\n                                        fill: \"none\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                                    lineNumber: 183,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                            lineNumber: 178,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                        lineNumber: 177,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl font-extrabold text-green-300 text-center px-3\",\n                                children: [\n                                    \" \",\n                                    \"Current Engagement: \".concat(res.length > 0 ? res[res.length - 1].y : \"No data yet\"),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                                lineNumber: 194,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                            lineNumber: 193,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                        lineNumber: 191,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                lineNumber: 161,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n        lineNumber: 159,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"1XtKMhsnR466KXYlxXSrLgl5hEo=\");\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"ReactPlayer\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGVtby9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUM4QjtBQUNMO0FBQ1E7QUFDRztBQVFqQjtBQUduQixxQkFBcUI7QUFDYTtBQUNsQyxNQUFNVyxjQUFjRCxtREFBT0EsQ0FBQyxJQUFNLDBPQUFzQjs7Ozs7O0lBQUlFLEtBQUs7O0tBQTNERDtBQUdOLE1BQU1FLG1CQUFtQjtJQUN2QkMsT0FBTztRQUFFQyxLQUFLO0lBQUk7SUFDbEJDLFFBQVE7UUFBRUQsS0FBSztJQUFJO0lBQ25CRSxhQUFhO0FBQ2Y7QUFJQSxNQUFNQyxnQkFBZ0IsR0FBRyxVQUFVO0FBRW5DLE1BQU1DLGVBQWU7QUFFTixTQUFTQzs7SUFJdEIsTUFBTUMsWUFBWXJCLDZDQUFNQSxDQUFDLE9BQVEsc0JBQXNCO0lBQ3ZELE1BQU1zQixlQUFldEIsNkNBQU1BLENBQUM7SUFHNUIsTUFBTSxDQUFDdUIsV0FBV0MsYUFBYSxHQUFHdkIscURBQWMsQ0FBQyxRQUFTLGtDQUFrQztJQUM1RixNQUFNLENBQUN5QixLQUFLQyxPQUFPLEdBQUcxQixxREFBYyxDQUFDLEVBQUUsR0FBSSwwQkFBMEI7SUFFckUsTUFBTTJCLE9BQU9DLEtBQUtkLEdBQUcsSUFBSVcsSUFBSUksR0FBRyxDQUFDLENBQUNDLFFBQVVBLE1BQU1DLENBQUM7SUFDbkQsTUFBTUMsT0FBT0osS0FBS0ssR0FBRyxJQUFJUixJQUFJSSxHQUFHLENBQUMsQ0FBQ0MsUUFBVUEsTUFBTUMsQ0FBQztJQUNuRCxNQUFNRyxPQUFPTixLQUFLZCxHQUFHLElBQUlXLElBQUlJLEdBQUcsQ0FBQyxDQUFDQyxRQUFVQSxNQUFNSyxDQUFDO0lBQ25ELE1BQU1DLE9BQU9SLEtBQUtLLEdBQUcsSUFBSVIsSUFBSUksR0FBRyxDQUFDLENBQUNDLFFBQVVBLE1BQU1LLENBQUM7SUFFbkQsSUFBSUUsS0FBSyxNQUFNLHVCQUF1QjtJQUN0QyxNQUFNQyxTQUFTQyxrREFBK0I7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Yiw0RUFBQ1c7Z0NBQUdYLFdBQVU7O29DQUEwRDtvQ0FBSSx1QkFBNkUsT0FBdkR0RSxJQUFJa0YsTUFBTSxHQUFHLElBQUlsRixHQUFHLENBQUNBLElBQUlrRixNQUFNLEdBQUcsRUFBRSxDQUFDeEUsQ0FBQyxHQUFHO29DQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdks7R0F2S3dCaEI7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9kZW1vL3BhZ2UuanM/NjVkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgV2ViY2FtIGZyb20gJ3JlYWN0LXdlYmNhbSdcbmltcG9ydCBIZWFkZXIgZnJvbSAnQC9jb21tb24vSGVhZGVyJ1xuaW1wb3J0IHtcbiAgWFlQbG90LFxuICBYQXhpcyxcbiAgWUF4aXMsXG4gIEhvcml6b250YWxHcmlkTGluZXMsXG4gIFZlcnRpY2FsR3JpZExpbmVzLFxuICBMaW5lU2VyaWVzXG59IGZyb20gJ3JlYWN0LXZpcyc7XG5cblxuLy8gQmFuZGFpZCBpbXBvcnQgZml4XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5jb25zdCBSZWFjdFBsYXllciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwicmVhY3QtcGxheWVyXCIpLCB7IHNzcjogZmFsc2UgfSk7XG5cblxuY29uc3QgdmlkZW9Db25zdHJhaW50cyA9IHtcbiAgd2lkdGg6IHsgbWluOiA0ODAgfSxcbiAgaGVpZ2h0OiB7IG1pbjogNzIwIH0sXG4gIGFzcGVjdFJhdGlvOiAxXG59O1xuXG5cblxuY29uc3Qgc2NhbkZyZXF1ZW5jeSA9IDU7IC8vIHNlY29uZHNcblxuY29uc3QgdmlkZW9EZW1vVXJsID0gXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PTNNcVlFMlV1TjI0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuXG5cbiAgY29uc3Qgd2ViY2FtUmVmID0gdXNlUmVmKG51bGwpOyAgLy8gcmVmZXJlbmNlIHRvIHdlYmNhbVxuICBjb25zdCB3ZWJzb2NrZXRSZWYgPSB1c2VSZWYobnVsbCk7XG5cblxuICBjb25zdCBbc3RyZWFtaW5nLCBzZXRTdHJlYW1pbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpOyAgLy8gd2hldGhlciBvciBub3Qgd2UgYXJlIHN0cmVhbWluZ1xuICBjb25zdCBbcmVzLCBzZXRSZXNdID0gUmVhY3QudXNlU3RhdGUoW10pOyAgLy8gcmVzcG9uc2UgZnJvbSB3ZWJzb2NrZXRcbiAgXG4gIGNvbnN0IG1pblggPSBNYXRoLm1pbiguLi5yZXMubWFwKChwb2ludCkgPT4gcG9pbnQueCkpO1xuICBjb25zdCBtYXhYID0gTWF0aC5tYXgoLi4ucmVzLm1hcCgocG9pbnQpID0+IHBvaW50LngpKTtcbiAgY29uc3QgbWluWSA9IE1hdGgubWluKC4uLnJlcy5tYXAoKHBvaW50KSA9PiBwb2ludC55KSk7XG4gIGNvbnN0IG1heFkgPSBNYXRoLm1heCguLi5yZXMubWFwKChwb2ludCkgPT4gcG9pbnQueSkpO1xuXG4gIGxldCB3cyA9IG51bGw7IC8vIHdlYnNvY2tldCBjb25uZWN0aW9uXG4gIGNvbnN0IGFwaUtleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9LRVk7XG4gIGNvbnN0IHdzVVJMID0gYHdzczovL2FwaS5odW1lLmFpL3YwL3N0cmVhbS9tb2RlbHM/YXBpa2V5PSR7YXBpS2V5fWA7XG5cblxuXG4gIGZ1bmN0aW9uIGV4dHJhY3RFbmdhZ2VtZW50KHJlcykge1xuICAgIGlmICghcmVzLmZhY2UucHJlZGljdGlvbnMpIHJldHVybiBbXTtcbiAgICBjb25zdCB7IGVtb3Rpb25zIH0gPSByZXMuZmFjZS5wcmVkaWN0aW9uc1swXTtcbiAgICAgY29uc3QgaW50ZXJlc3QgPSBlbW90aW9ucy5maW5kKChlbW90aW9uKSA9PiBlbW90aW9uLm5hbWUgPT09ICdJbnRlcmVzdCcpLnNjb3JlO1xuICAgIHJldHVybiBpbnRlcmVzdDtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICB3cyA9IG5ldyBXZWJTb2NrZXQod3NVUkwpXG4gICAgY3JlYXRlQ2FsbGJhY2tzKCk7XG5cbiAgICAvLyBzYXZlIHRoaXMgd2Vic29ja2V0IGNvbm5lY3Rpb25cbiAgICB3ZWJzb2NrZXRSZWYuY3VycmVudCA9IHdzO1xuICAgIC8vICh3cywgXCJhZnRlciByZWZlcmVuY2Ugc2F2ZVwiKTtcblxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2FsbGJhY2tzKCkge1xuICAgIC8vIGRlZmluZSBjYWxsYmFjayBmdW5jdGlvblxuICAgIHdzLm9ub3BlbiA9ICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiV2ViU29ja2V0IGNvbm5lY3Rpb24gZXN0YWJsaXNoZWRcIik7XG4gICAgICBzZXRTdHJlYW1pbmcodHJ1ZSlcbiAgICB9XG4gICAgd3Mub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgY29uc3QgdGltZSA9IHJlcy5wYXlsb2FkX2lkO1xuICAgICAgLy8gLy8gZW5zdXJlIHdlIGFyZSBoYW5kbGluZyByZXNwb25zZXMgaW4gb3JkZXJcbiAgICAgIC8vIGlmIChmcmFtZSA8IGxhdGVzdEZyYW1lKSByZXR1cm47XG4gICAgICAvLyBsYXRlc3RGcmFtZSA9IGZyYW1lO1xuICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgIGNvbnN0IG5ld19lbmdhZ2VtZW50X3BvaW50ID0ge3g6IHRpbWUsIHk6IGV4dHJhY3RFbmdhZ2VtZW50KHJlcyl9O1xuICAgICAgc2V0UmVzKChsaXN0KSA9PiBbLi4ubGlzdCwgbmV3X2VuZ2FnZW1lbnRfcG9pbnRdKTtcbiAgICAgIGNvbnNvbGUubG9nKG5ld19lbmdhZ2VtZW50X3BvaW50KTtcbiAgICB9XG4gICAgd3MuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChzdHJlYW1pbmcgfHwgZXZlbnQuY29kZSA9PT0gMTAwNikge1xuICAgICAgICBjb25zb2xlLmxvZygnV2ViU29ja2V0IHJlY29ubmVjdGluZy4uLicsIGV2ZW50KTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY29ubmVjdCgpO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICAgIH1cbiAgICAgIC8vIElGIHZpZGVvIGlzIHBsYXlpbmcgd2hlbiBzdHJlYW1pbmcgaXMgc3RvcHBlZCB0aGVuIHBhdXNlIHRoZSB2aWRlb1xuICAgICAgY29uc29sZS5sb2coJ1dlYnNvY2tldCBjb25uZWN0aW9uIGNsb3NlZCcsIGV2ZW50KVxuICAgIH0pXG5cbiAgICB3cy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignV2ViU29ja2V0IGVycm9yOicsIGVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG5cblxuICAvLyBjYXB0dXJlIGltYWdlIGZyb20gd2ViY2FtIGFuZCByZXR1cm5zIGJhc2U2NCBlbmNvZGVkIHdlYnBcbiAgY29uc3QgY2FwdHVyZSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgICgpID0+IHtcbiAgICAgIGNvbnN0IGltYWdlU3JjID0gd2ViY2FtUmVmLmN1cnJlbnQuZ2V0U2NyZWVuc2hvdCgpO1xuICAgICAgaWYgKGltYWdlU3JjID09IG51bGwpXG4gICAgICAgIHJldHVybjtcbiAgICAgIC8vIG9ubHkgaW5jbHVkZSB0aGUgPGRhdGE+IHBvcnRpb24gb2YgPC9kYXRhPiBkYXRhOls8bWVkaWF0eXBlPl1bO2Jhc2U2NF0sPGRhdGE+XG4gICAgICBjb25zdCBpbWFnZVNyY1NwbGl0ID0gaW1hZ2VTcmMuc3BsaXQoJywnKVsxXTtcbiAgICAgIHJldHVybiBpbWFnZVNyY1NwbGl0O1xuICAgIH0sXG4gICAgW3dlYmNhbVJlZl1cbiAgKTtcblxuXG4gIC8vIHZpZGVvIHBsYXllclxuXG5cbiAgLy8gY29ubmVjdCB0byB3ZWJzb2NrZXQgd2hlbiB2aWRlbyBpcyBwbGF5ZWRcbiAgY29uc3Qgb25QbGF5ID0gKCkgPT4ge1xuICAgIGNvbm5lY3QoKTtcbiAgfTtcblxuICAvLyBkaXNjb25uZWN0IGZyb20gd2Vic29ja2V0IHdoZW4gdmlkZW8gaXMgcGF1c2VkXG4gIGNvbnN0IG9uUGF1c2UgPSAoKSA9PiB7XG4gICAgc2V0U3RyZWFtaW5nKGZhbHNlKTtcbiAgICB3ZWJzb2NrZXRSZWYuY3VycmVudC5jbG9zZSgxMDAwLCAndmlkZW8gc3RvcHBlZCcpO1xuICB9O1xuXG4gIGNvbnN0IG9uUHJvZ3Jlc3MgPSAoe3BsYXllZCwgcGxheWVkU2Vjb25kcywgbG9hZGVkLCBsb2FkZWRTZWNvbmRzfSkgPT4ge1xuICAgIC8vIHNlbmQgaW1hZ2UgdG8gd2Vic29ja2V0IGlmIHdlIGhhdmUgcGxheWVkIDUgc2Vjb25kcyBtb3JlIHRoYW4gdGhlIGxhc3QgdGltZSB3ZSBzZW50IGFuIGltYWdlXG4gICAgaWYgKHN0cmVhbWluZyAmJiBNYXRoLmZsb29yKHBsYXllZFNlY29uZHMpICUgc2NhbkZyZXF1ZW5jeSA9PT0gMCkge1xuICAgICAgY29uc3Qgc3JjID0gY2FwdHVyZSgpOyAvLyByZXR1cm5zIGJhc2U2NCBlbmNvZGVkIGltYWdlXG4gICAgICBpZiAoc3JjID09IG51bGwpXG4gICAgICAgIHJldHVybiBcbiAgICAgIGNvbnN0IG1vZGVscyA9IHsgZmFjZToge30gfTtcbiAgICAgIGNvbnN0IHBheWxvYWRfaWQgPSBNYXRoLmZsb29yKHBsYXllZFNlY29uZHMpLnRvU3RyaW5nKCk7XG4gICAgICBjb25zdCBtZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkoe1wiZGF0YVwiOiBzcmMsIG1vZGVscywgcGF5bG9hZF9pZCB9KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwic2VuZGluZyB0aGlzIG1lc3NhZ2UgXCIgKyBtZXNzYWdlKVxuICAgICAgd2Vic29ja2V0UmVmLmN1cnJlbnQuc2VuZChtZXNzYWdlKTtcbiAgICAgIGNvbnNvbGUubG9nKFwic2VuZGluZyBpbWFnZSB0byB3ZWJzb2NrZXRcIilcbiAgICB9IFxuICB9XG5cbiAgY29uc3Qgb25FbmRlZCA9ICgpID0+IHtcbiAgICBzZXRTdHJlYW1pbmcoZmFsc2UpO1xuICAgIHdlYnNvY2tldFJlZi5jdXJyZW50LmNsb3NlKDEwMDAsICd2aWRlbyBlbmRlZCcpO1xuICAgIFxuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgaC1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxIZWFkZXIvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1pdGVtcy1jZW50ZXIgYWxpZ24tbWlkZGxlIGZsZXgtY29sIHB0LTEyIGdhcC0zJyA+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1hcm91bmQgYWxpZ24tbWlkZGxlIGZsZXgtcm93IGdhcC0zJz5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIGFsaWduLW1pZGRsZSBmbGV4LWNvbCc+XG4gICAgICAgICAgICA8UmVhY3RQbGF5ZXIgY2xhc3NOYW1lPVwibWF4LWgtZml0XCIgaGVpZ2h0PXs0MDB9IHVybD17dmlkZW9EZW1vVXJsfSBsaWdodD17dHJ1ZX0gb25QbGF5PXtvblBsYXl9IG9uUGF1c2U9e29uUGF1c2V9ICBvblByb2dyZXNzPXtvblByb2dyZXNzfS8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogU3F1YXJlIGFzcGVjdCByYXRpbyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBhbGlnbi1taWRkbGUgZmxleC1jb2wgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgIDxXZWJjYW0gIHJlZj17d2ViY2FtUmVmfSAgICAgdmlkZW9Db25zdHJhaW50cz17dmlkZW9Db25zdHJhaW50c30gd2lkdGg9ezQwMH0gaGVpZ2h0PXs3MjB9IC8+ICAgXG4gICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8L2Rpdj4gXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpc29sYXRlICBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciAgYm9yZGVyLWVtZXJhbGQtMzAwLzcwXCI+XG4gICAgICAgIDxYWVBsb3Qgd2lkdGg9ezYwMH0gaGVpZ2h0PXsyMDB9IHhEb21haW49e1ttaW5YLCBtYXhYXX0geURvbWFpbj17W21pblksIG1heFldfT5cbiAgICAgIDxIb3Jpem9udGFsR3JpZExpbmVzIC8+XG4gICAgICA8VmVydGljYWxHcmlkTGluZXMgLz5cbiAgICAgIDxYQXhpcyB0aXRsZT1cIlggQXhpc1wiIC8+XG4gICAgICA8WUF4aXMgdGl0bGU9XCJZIEF4aXNcIiAvPlxuICAgICAgPExpbmVTZXJpZXNcbiAgICAgICBkYXRhPXtyZXN9XG4gICAgICAgY29sb3I9XCJncmVlblwiICAgICAgICAgICAvLyBTZXQgbGluZSBjb2xvciB0byBncmVlblxuICAgICAgIHN0cm9rZVdpZHRoPXs0fSAgICAgICAgIC8vIFNldCBsaW5lIHRoaWNrbmVzc1xuICAgICAgIHN0eWxlPXt7IGZpbGw6ICdub25lJyB9fSAvLyBSZW1vdmUgZmlsbCB1bmRlcm5lYXRoL2Fib3ZlIHRoZSBsaW5lXG4gICAgICAgLz5cbiAgICA8L1hZUGxvdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgey8qIGgxIGNlbnRlcmVkIGJlbG93IHdlYmNhbSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTJ4bCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyZWVuLTMwMCB0ZXh0LWNlbnRlciBweC0zJz4geyBgQ3VycmVudCBFbmdhZ2VtZW50OiAke3Jlcy5sZW5ndGggPiAwID8gcmVzW3Jlcy5sZW5ndGggLSAxXS55IDogXCJObyBkYXRhIHlldFwifWB9IDwvaDE+ICBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJSZWFjdCIsIldlYmNhbSIsIkhlYWRlciIsIlhZUGxvdCIsIlhBeGlzIiwiWUF4aXMiLCJIb3Jpem9udGFsR3JpZExpbmVzIiwiVmVydGljYWxHcmlkTGluZXMiLCJMaW5lU2VyaWVzIiwiZHluYW1pYyIsIlJlYWN0UGxheWVyIiwic3NyIiwidmlkZW9Db25zdHJhaW50cyIsIndpZHRoIiwibWluIiwiaGVpZ2h0IiwiYXNwZWN0UmF0aW8iLCJzY2FuRnJlcXVlbmN5IiwidmlkZW9EZW1vVXJsIiwiSG9tZSIsIndlYmNhbVJlZiIsIndlYnNvY2tldFJlZiIsInN0cmVhbWluZyIsInNldFN0cmVhbWluZyIsInVzZVN0YXRlIiwicmVzIiwic2V0UmVzIiwibWluWCIsIk1hdGgiLCJtYXAiLCJwb2ludCIsIngiLCJtYXhYIiwibWF4IiwibWluWSIsInkiLCJtYXhZIiwid3MiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX0tFWSIsIndzVVJMIiwiZXh0cmFjdEVuZ2FnZW1lbnQiLCJmYWNlIiwicHJlZGljdGlvbnMiLCJlbW90aW9ucyIsImludGVyZXN0IiwiZmluZCIsImVtb3Rpb24iLCJuYW1lIiwic2NvcmUiLCJjb25uZWN0IiwiV2ViU29ja2V0IiwiY3JlYXRlQ2FsbGJhY2tzIiwiY3VycmVudCIsIm9ub3BlbiIsImNvbnNvbGUiLCJsb2ciLCJvbm1lc3NhZ2UiLCJldmVudCIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCJ0aW1lIiwicGF5bG9hZF9pZCIsIm5ld19lbmdhZ2VtZW50X3BvaW50IiwibGlzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb2RlIiwic2V0VGltZW91dCIsImVycm9yIiwiY2FwdHVyZSIsInVzZUNhbGxiYWNrIiwiaW1hZ2VTcmMiLCJnZXRTY3JlZW5zaG90IiwiaW1hZ2VTcmNTcGxpdCIsInNwbGl0Iiwib25QbGF5Iiwib25QYXVzZSIsImNsb3NlIiwib25Qcm9ncmVzcyIsInBsYXllZCIsInBsYXllZFNlY29uZHMiLCJsb2FkZWQiLCJsb2FkZWRTZWNvbmRzIiwiZmxvb3IiLCJzcmMiLCJtb2RlbHMiLCJ0b1N0cmluZyIsIm1lc3NhZ2UiLCJzdHJpbmdpZnkiLCJzZW5kIiwib25FbmRlZCIsImRpdiIsImNsYXNzTmFtZSIsInVybCIsImxpZ2h0IiwicmVmIiwieERvbWFpbiIsInlEb21haW4iLCJ0aXRsZSIsImNvbG9yIiwic3Ryb2tlV2lkdGgiLCJzdHlsZSIsImZpbGwiLCJoMSIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/demo/page.js\n"));

/***/ })

});