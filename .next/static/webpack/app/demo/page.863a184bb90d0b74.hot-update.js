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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-webcam */ \"(app-pages-browser)/./node_modules/react-webcam/dist/react-webcam.js\");\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_webcam__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common/Header */ \"(app-pages-browser)/./src/common/Header.js\");\n/* harmony import */ var react_vis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-vis */ \"(app-pages-browser)/./node_modules/react-vis/es/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/shared/lib/app-dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n// Bandaid import fix\n\nconst ReactPlayer = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_node_modules_react-player_lib_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! react-player */ \"(app-pages-browser)/./node_modules/react-player/lib/index.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js -> \" + \"react-player\"\n        ]\n    },\n    ssr: false\n});\n_c = ReactPlayer;\nconst videoConstraints = {\n    width: {\n        min: 480\n    },\n    height: {\n        min: 720\n    },\n    aspectRatio: 1\n};\nconst scanFrequency = 5; // seconds\nconst videoDemoUrl = \"https://www.youtube.com/watch?v=3MqYE2UuN24\";\nfunction Home() {\n    _s();\n    const webcamRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // reference to webcam\n    const websocketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [streaming, setStreaming] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false); // whether or not we are streaming\n    const [res, setRes] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]); // response from websocket\n    const minX = Math.min(...res.map((point)=>point.x));\n    const maxX = Math.max(...res.map((point)=>point.x));\n    const minY = Math.min(...res.map((point)=>point.y));\n    const maxY = Math.max(...res.map((point)=>point.y));\n    let ws = null; // websocket connection\n    const apiKey = \"BdejEB5Arn7np9aAyl2eT1tJflfr41QHW6GlquSliAg9jBfQ\";\n    const wsURL = \"wss://api.hume.ai/v0/stream/models?apikey=\".concat(apiKey);\n    function extractEngagement(res) {\n        if (!res.face.predictions) return [];\n        const { emotions } = res.face.predictions[0];\n        const interest = emotions.find((emotion)=>emotion.name === \"Interest\").score;\n        return interest;\n    }\n    function connect() {\n        ws = new WebSocket(wsURL);\n        createCallbacks();\n        // save this websocket connection\n        websocketRef.current = ws;\n    // (ws, \"after reference save\");\n    }\n    function createCallbacks() {\n        // define callback function\n        ws.onopen = ()=>{\n            console.log(\"WebSocket connection established\");\n            setStreaming(true);\n        };\n        ws.onmessage = (event)=>{\n            const res = JSON.parse(event.data);\n            const time = res.payload_id;\n            // // ensure we are handling responses in order\n            // if (frame < latestFrame) return;\n            // latestFrame = frame;\n            console.log(res);\n            const new_engagement_point = {\n                x: time,\n                y: extractEngagement(res)\n            };\n            setRes((list)=>[\n                    ...list,\n                    new_engagement_point\n                ]);\n            console.log(new_engagement_point);\n        };\n        ws.addEventListener(\"close\", (event)=>{\n            if (streaming) {\n                console.log(\"WebSocket reconnecting...\", event);\n                setTimeout(()=>{\n                    connect();\n                }, 3000);\n            }\n            // IF video is playing when streaming is stopped then pause the video\n            console.log(\"Websocket connection closed\", event);\n        });\n        ws.addEventListener(\"error\", (error)=>{\n            console.error(\"WebSocket error:\", error);\n        });\n    }\n    // capture image from webcam and returns base64 encoded webp\n    const capture = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(()=>{\n        const imageSrc = webcamRef.current.getScreenshot();\n        if (imageSrc == null) return;\n        // only include the <data> portion of </data> data:[<mediatype>][;base64],<data>\n        const imageSrcSplit = imageSrc.split(\",\")[1];\n        return imageSrcSplit;\n    }, [\n        webcamRef\n    ]);\n    // video player\n    // connect to websocket when video is played\n    const onPlay = ()=>{\n        connect();\n    };\n    // disconnect from websocket when video is paused\n    const onPause = ()=>{\n        setStreaming(false);\n        websocketRef.current.close(1000, \"video stopped\");\n    };\n    const onProgress = (param)=>{\n        let { played, playedSeconds, loaded, loadedSeconds } = param;\n        // send image to websocket if we have played 5 seconds more than the last time we sent an image\n        if (streaming && Math.floor(playedSeconds) % scanFrequency === 0) {\n            const src = capture(); // returns base64 encoded image\n            if (src == null) return;\n            const models = {\n                face: {}\n            };\n            const payload_id = Math.floor(playedSeconds).toString();\n            const message = JSON.stringify({\n                \"data\": src,\n                models,\n                payload_id\n            });\n            // console.log(\"sending this message \" + message)\n            websocketRef.current.send(message);\n            console.log(\"sending image to websocket\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white h-screen flex items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                lineNumber: 155,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-items-center align-middle flex-col pt-12 gap-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-around align-middle flex-row gap-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center align-middle flex-col\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ReactPlayer, {\n                                    className: \"max-h-fit\",\n                                    height: 400,\n                                    url: videoDemoUrl,\n                                    light: true,\n                                    onPlay: onPlay,\n                                    onPause: onPause,\n                                    onProgress: onProgress\n                                }, void 0, false, {\n                                    fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                                    lineNumber: 161,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                                lineNumber: 160,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center align-middle flex-col items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_webcam__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    ref: webcamRef,\n                                    videoConstraints: videoConstraints,\n                                    width: 400,\n                                    height: 720\n                                }, void 0, false, {\n                                    fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                                    lineNumber: 166,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                                lineNumber: 165,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                        lineNumber: 158,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative isolate  flex flex-row items-center justify-center  border-emerald-300/70\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_vis__WEBPACK_IMPORTED_MODULE_4__.XYPlot, {\n                            width: 600,\n                            height: 200,\n                            xDomain: [\n                                minX,\n                                maxX\n                            ],\n                            yDomain: [\n                                minY,\n                                maxY\n                            ],\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_vis__WEBPACK_IMPORTED_MODULE_4__.HorizontalGridLines, {}, void 0, false, {\n                                    fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                                    lineNumber: 174,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_vis__WEBPACK_IMPORTED_MODULE_4__.VerticalGridLines, {}, void 0, false, {\n                                    fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                                    lineNumber: 175,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_vis__WEBPACK_IMPORTED_MODULE_4__.XAxis, {\n                                    title: \"X Axis\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                                    lineNumber: 176,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_vis__WEBPACK_IMPORTED_MODULE_4__.YAxis, {\n                                    title: \"Y Axis\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                                    lineNumber: 177,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_vis__WEBPACK_IMPORTED_MODULE_4__.LineSeries, {\n                                    data: res,\n                                    color: \"green\" // Set line color to green\n                                    ,\n                                    strokeWidth: 4,\n                                    style: {\n                                        fill: \"none\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                                    lineNumber: 178,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                            lineNumber: 173,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                        lineNumber: 172,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl font-extrabold text-green-300 text-center px-3\",\n                                children: [\n                                    \" \",\n                                    \"Current Engagement: \".concat(res.length > 0 ? res[res.length - 1].y : \"No data yet\"),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                                lineNumber: 189,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                            lineNumber: 188,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                        lineNumber: 186,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n                lineNumber: 156,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/trevorkwan/Projects/CalHacks/src/app/demo/page.js\",\n        lineNumber: 154,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"1XtKMhsnR466KXYlxXSrLgl5hEo=\");\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"ReactPlayer\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGVtby9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUM4QjtBQUNMO0FBQ1E7QUFDRztBQVFqQjtBQUduQixxQkFBcUI7QUFDYTtBQUNsQyxNQUFNVyxjQUFjRCxtREFBT0EsQ0FBQyxJQUFNLDBPQUFzQjs7Ozs7O0lBQUlFLEtBQUs7O0tBQTNERDtBQUdOLE1BQU1FLG1CQUFtQjtJQUN2QkMsT0FBTztRQUFFQyxLQUFLO0lBQUk7SUFDbEJDLFFBQVE7UUFBRUQsS0FBSztJQUFJO0lBQ25CRSxhQUFhO0FBQ2Y7QUFJQSxNQUFNQyxnQkFBZ0IsR0FBRyxVQUFVO0FBRW5DLE1BQU1DLGVBQWU7QUFFTixTQUFTQzs7SUFJdEIsTUFBTUMsWUFBWXJCLDZDQUFNQSxDQUFDLE9BQVEsc0JBQXNCO0lBQ3ZELE1BQU1zQixlQUFldEIsNkNBQU1BLENBQUM7SUFHNUIsTUFBTSxDQUFDdUIsV0FBV0MsYUFBYSxHQUFHdkIscURBQWMsQ0FBQyxRQUFTLGtDQUFrQztJQUM1RixNQUFNLENBQUN5QixLQUFLQyxPQUFPLEdBQUcxQixxREFBYyxDQUFDLEVBQUUsR0FBSSwwQkFBMEI7SUFFckUsTUFBTTJCLE9BQU9DLEtBQUtkLEdBQUcsSUFBSVcsSUFBSUksR0FBRyxDQUFDLENBQUNDLFFBQVVBLE1BQU1DLENBQUM7SUFDbkQsTUFBTUMsT0FBT0osS0FBS0ssR0FBRyxJQUFJUixJQUFJSSxHQUFHLENBQUMsQ0FBQ0MsUUFBVUEsTUFBTUMsQ0FBQztJQUNuRCxNQUFNRyxPQUFPTixLQUFLZCxHQUFHLElBQUlXLElBQUlJLEdBQUcsQ0FBQyxDQUFDQyxRQUFVQSxNQUFNSyxDQUFDO0lBQ25ELE1BQU1DLE9BQU9SLEtBQUtLLEdBQUcsSUFBSVIsSUFBSUksR0FBRyxDQUFDLENBQUNDLFFBQVVBLE1BQU1LLENBQUM7SUFFbkQsSUFBSUUsS0FBSyxNQUFNLHVCQUF1QjtJQUN0QyxNQUFNQyxTQUFTQyxrREFBK0I7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R0FBRyxFQUFFLENBQUN0RSxDQUFDLEdBQUc7b0NBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU12SztHQWxLd0JoQjtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2RlbW8vcGFnZS5qcz82NWRkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBXZWJjYW0gZnJvbSAncmVhY3Qtd2ViY2FtJ1xuaW1wb3J0IEhlYWRlciBmcm9tICdAL2NvbW1vbi9IZWFkZXInXG5pbXBvcnQge1xuICBYWVBsb3QsXG4gIFhBeGlzLFxuICBZQXhpcyxcbiAgSG9yaXpvbnRhbEdyaWRMaW5lcyxcbiAgVmVydGljYWxHcmlkTGluZXMsXG4gIExpbmVTZXJpZXNcbn0gZnJvbSAncmVhY3QtdmlzJztcblxuXG4vLyBCYW5kYWlkIGltcG9ydCBmaXhcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmNvbnN0IFJlYWN0UGxheWVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJyZWFjdC1wbGF5ZXJcIiksIHsgc3NyOiBmYWxzZSB9KTtcblxuXG5jb25zdCB2aWRlb0NvbnN0cmFpbnRzID0ge1xuICB3aWR0aDogeyBtaW46IDQ4MCB9LFxuICBoZWlnaHQ6IHsgbWluOiA3MjAgfSxcbiAgYXNwZWN0UmF0aW86IDFcbn07XG5cblxuXG5jb25zdCBzY2FuRnJlcXVlbmN5ID0gNTsgLy8gc2Vjb25kc1xuXG5jb25zdCB2aWRlb0RlbW9VcmwgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9M01xWUUyVXVOMjRcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG5cblxuICBjb25zdCB3ZWJjYW1SZWYgPSB1c2VSZWYobnVsbCk7ICAvLyByZWZlcmVuY2UgdG8gd2ViY2FtXG4gIGNvbnN0IHdlYnNvY2tldFJlZiA9IHVzZVJlZihudWxsKTtcblxuXG4gIGNvbnN0IFtzdHJlYW1pbmcsIHNldFN0cmVhbWluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7ICAvLyB3aGV0aGVyIG9yIG5vdCB3ZSBhcmUgc3RyZWFtaW5nXG4gIGNvbnN0IFtyZXMsIHNldFJlc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7ICAvLyByZXNwb25zZSBmcm9tIHdlYnNvY2tldFxuICBcbiAgY29uc3QgbWluWCA9IE1hdGgubWluKC4uLnJlcy5tYXAoKHBvaW50KSA9PiBwb2ludC54KSk7XG4gIGNvbnN0IG1heFggPSBNYXRoLm1heCguLi5yZXMubWFwKChwb2ludCkgPT4gcG9pbnQueCkpO1xuICBjb25zdCBtaW5ZID0gTWF0aC5taW4oLi4ucmVzLm1hcCgocG9pbnQpID0+IHBvaW50LnkpKTtcbiAgY29uc3QgbWF4WSA9IE1hdGgubWF4KC4uLnJlcy5tYXAoKHBvaW50KSA9PiBwb2ludC55KSk7XG5cbiAgbGV0IHdzID0gbnVsbDsgLy8gd2Vic29ja2V0IGNvbm5lY3Rpb25cbiAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWTtcbiAgY29uc3Qgd3NVUkwgPSBgd3NzOi8vYXBpLmh1bWUuYWkvdjAvc3RyZWFtL21vZGVscz9hcGlrZXk9JHthcGlLZXl9YDtcblxuXG5cbiAgZnVuY3Rpb24gZXh0cmFjdEVuZ2FnZW1lbnQocmVzKSB7XG4gICAgaWYgKCFyZXMuZmFjZS5wcmVkaWN0aW9ucykgcmV0dXJuIFtdO1xuICAgIGNvbnN0IHsgZW1vdGlvbnMgfSA9IHJlcy5mYWNlLnByZWRpY3Rpb25zWzBdO1xuICAgICBjb25zdCBpbnRlcmVzdCA9IGVtb3Rpb25zLmZpbmQoKGVtb3Rpb24pID0+IGVtb3Rpb24ubmFtZSA9PT0gJ0ludGVyZXN0Jykuc2NvcmU7XG4gICAgcmV0dXJuIGludGVyZXN0O1xuICB9XG5cblxuICBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgIHdzID0gbmV3IFdlYlNvY2tldCh3c1VSTClcbiAgICBjcmVhdGVDYWxsYmFja3MoKTtcblxuICAgIC8vIHNhdmUgdGhpcyB3ZWJzb2NrZXQgY29ubmVjdGlvblxuICAgIHdlYnNvY2tldFJlZi5jdXJyZW50ID0gd3M7XG4gICAgLy8gKHdzLCBcImFmdGVyIHJlZmVyZW5jZSBzYXZlXCIpO1xuXG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVDYWxsYmFja3MoKSB7XG4gICAgLy8gZGVmaW5lIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgd3Mub25vcGVuID0gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJXZWJTb2NrZXQgY29ubmVjdGlvbiBlc3RhYmxpc2hlZFwiKTtcbiAgICAgIHNldFN0cmVhbWluZyh0cnVlKVxuICAgIH1cbiAgICB3cy5vbm1lc3NhZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICBjb25zdCB0aW1lID0gcmVzLnBheWxvYWRfaWQ7XG4gICAgICAvLyAvLyBlbnN1cmUgd2UgYXJlIGhhbmRsaW5nIHJlc3BvbnNlcyBpbiBvcmRlclxuICAgICAgLy8gaWYgKGZyYW1lIDwgbGF0ZXN0RnJhbWUpIHJldHVybjtcbiAgICAgIC8vIGxhdGVzdEZyYW1lID0gZnJhbWU7XG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgY29uc3QgbmV3X2VuZ2FnZW1lbnRfcG9pbnQgPSB7eDogdGltZSwgeTogZXh0cmFjdEVuZ2FnZW1lbnQocmVzKX07XG4gICAgICBzZXRSZXMoKGxpc3QpID0+IFsuLi5saXN0LCBuZXdfZW5nYWdlbWVudF9wb2ludF0pO1xuICAgICAgY29uc29sZS5sb2cobmV3X2VuZ2FnZW1lbnRfcG9pbnQpO1xuICAgIH1cbiAgICB3cy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIChldmVudCkgPT4ge1xuICAgICAgaWYgKHN0cmVhbWluZykge1xuICAgICAgICBjb25zb2xlLmxvZygnV2ViU29ja2V0IHJlY29ubmVjdGluZy4uLicsIGV2ZW50KTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY29ubmVjdCgpO1xuICAgICAgICB9LCAzMDAwKTtcblxuICAgICAgfVxuICAgICAgLy8gSUYgdmlkZW8gaXMgcGxheWluZyB3aGVuIHN0cmVhbWluZyBpcyBzdG9wcGVkIHRoZW4gcGF1c2UgdGhlIHZpZGVvXG4gICAgICBjb25zb2xlLmxvZygnV2Vic29ja2V0IGNvbm5lY3Rpb24gY2xvc2VkJywgZXZlbnQpXG4gICAgfSlcblxuICAgIHdzLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdXZWJTb2NrZXQgZXJyb3I6JywgZXJyb3IpO1xuICAgIH0pO1xuICB9XG5cblxuXG4gIC8vIGNhcHR1cmUgaW1hZ2UgZnJvbSB3ZWJjYW0gYW5kIHJldHVybnMgYmFzZTY0IGVuY29kZWQgd2VicFxuICBjb25zdCBjYXB0dXJlID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKCkgPT4ge1xuICAgICAgY29uc3QgaW1hZ2VTcmMgPSB3ZWJjYW1SZWYuY3VycmVudC5nZXRTY3JlZW5zaG90KCk7XG4gICAgICBpZiAoaW1hZ2VTcmMgPT0gbnVsbClcbiAgICAgICAgcmV0dXJuO1xuICAgICAgLy8gb25seSBpbmNsdWRlIHRoZSA8ZGF0YT4gcG9ydGlvbiBvZiA8L2RhdGE+IGRhdGE6WzxtZWRpYXR5cGU+XVs7YmFzZTY0XSw8ZGF0YT5cbiAgICAgIGNvbnN0IGltYWdlU3JjU3BsaXQgPSBpbWFnZVNyYy5zcGxpdCgnLCcpWzFdO1xuICAgICAgcmV0dXJuIGltYWdlU3JjU3BsaXQ7XG4gICAgfSxcbiAgICBbd2ViY2FtUmVmXVxuICApO1xuXG5cbiAgLy8gdmlkZW8gcGxheWVyXG5cblxuICAvLyBjb25uZWN0IHRvIHdlYnNvY2tldCB3aGVuIHZpZGVvIGlzIHBsYXllZFxuICBjb25zdCBvblBsYXkgPSAoKSA9PiB7XG4gICAgY29ubmVjdCgpO1xuICB9O1xuXG4gIC8vIGRpc2Nvbm5lY3QgZnJvbSB3ZWJzb2NrZXQgd2hlbiB2aWRlbyBpcyBwYXVzZWRcbiAgY29uc3Qgb25QYXVzZSA9ICgpID0+IHtcbiAgICBzZXRTdHJlYW1pbmcoZmFsc2UpO1xuICAgIHdlYnNvY2tldFJlZi5jdXJyZW50LmNsb3NlKDEwMDAsICd2aWRlbyBzdG9wcGVkJyk7XG4gIH07XG5cbiAgY29uc3Qgb25Qcm9ncmVzcyA9ICh7cGxheWVkLCBwbGF5ZWRTZWNvbmRzLCBsb2FkZWQsIGxvYWRlZFNlY29uZHN9KSA9PiB7XG4gICAgLy8gc2VuZCBpbWFnZSB0byB3ZWJzb2NrZXQgaWYgd2UgaGF2ZSBwbGF5ZWQgNSBzZWNvbmRzIG1vcmUgdGhhbiB0aGUgbGFzdCB0aW1lIHdlIHNlbnQgYW4gaW1hZ2VcbiAgICBpZiAoc3RyZWFtaW5nICYmIE1hdGguZmxvb3IocGxheWVkU2Vjb25kcykgJSBzY2FuRnJlcXVlbmN5ID09PSAwKSB7XG4gICAgICBjb25zdCBzcmMgPSBjYXB0dXJlKCk7IC8vIHJldHVybnMgYmFzZTY0IGVuY29kZWQgaW1hZ2VcbiAgICAgIGlmIChzcmMgPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIFxuICAgICAgY29uc3QgbW9kZWxzID0geyBmYWNlOiB7fSB9O1xuICAgICAgY29uc3QgcGF5bG9hZF9pZCA9IE1hdGguZmxvb3IocGxheWVkU2Vjb25kcykudG9TdHJpbmcoKTtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBKU09OLnN0cmluZ2lmeSh7XCJkYXRhXCI6IHNyYywgbW9kZWxzLCBwYXlsb2FkX2lkIH0pO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJzZW5kaW5nIHRoaXMgbWVzc2FnZSBcIiArIG1lc3NhZ2UpXG4gICAgICB3ZWJzb2NrZXRSZWYuY3VycmVudC5zZW5kKG1lc3NhZ2UpO1xuICAgICAgY29uc29sZS5sb2coXCJzZW5kaW5nIGltYWdlIHRvIHdlYnNvY2tldFwiKVxuICAgIH0gXG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBoLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPEhlYWRlci8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWl0ZW1zLWNlbnRlciBhbGlnbi1taWRkbGUgZmxleC1jb2wgcHQtMTIgZ2FwLTMnID5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWFyb3VuZCBhbGlnbi1taWRkbGUgZmxleC1yb3cgZ2FwLTMnPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tbWlkZGxlIGZsZXgtY29sJz5cbiAgICAgICAgICAgIDxSZWFjdFBsYXllciBjbGFzc05hbWU9XCJtYXgtaC1maXRcIiBoZWlnaHQ9ezQwMH0gdXJsPXt2aWRlb0RlbW9Vcmx9IGxpZ2h0PXt0cnVlfSBvblBsYXk9e29uUGxheX0gb25QYXVzZT17b25QYXVzZX0gIG9uUHJvZ3Jlc3M9e29uUHJvZ3Jlc3N9Lz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBTcXVhcmUgYXNwZWN0IHJhdGlvICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIGFsaWduLW1pZGRsZSBmbGV4LWNvbCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgPFdlYmNhbSAgcmVmPXt3ZWJjYW1SZWZ9ICAgICB2aWRlb0NvbnN0cmFpbnRzPXt2aWRlb0NvbnN0cmFpbnRzfSB3aWR0aD17NDAwfSBoZWlnaHQ9ezcyMH0gLz4gICBcbiAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDwvZGl2PiBcblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGlzb2xhdGUgIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyICBib3JkZXItZW1lcmFsZC0zMDAvNzBcIj5cbiAgICAgICAgPFhZUGxvdCB3aWR0aD17NjAwfSBoZWlnaHQ9ezIwMH0geERvbWFpbj17W21pblgsIG1heFhdfSB5RG9tYWluPXtbbWluWSwgbWF4WV19PlxuICAgICAgPEhvcml6b250YWxHcmlkTGluZXMgLz5cbiAgICAgIDxWZXJ0aWNhbEdyaWRMaW5lcyAvPlxuICAgICAgPFhBeGlzIHRpdGxlPVwiWCBBeGlzXCIgLz5cbiAgICAgIDxZQXhpcyB0aXRsZT1cIlkgQXhpc1wiIC8+XG4gICAgICA8TGluZVNlcmllc1xuICAgICAgIGRhdGE9e3Jlc31cbiAgICAgICBjb2xvcj1cImdyZWVuXCIgICAgICAgICAgIC8vIFNldCBsaW5lIGNvbG9yIHRvIGdyZWVuXG4gICAgICAgc3Ryb2tlV2lkdGg9ezR9ICAgICAgICAgLy8gU2V0IGxpbmUgdGhpY2tuZXNzXG4gICAgICAgc3R5bGU9e3sgZmlsbDogJ25vbmUnIH19IC8vIFJlbW92ZSBmaWxsIHVuZGVybmVhdGgvYWJvdmUgdGhlIGxpbmVcbiAgICAgICAvPlxuICAgIDwvWFlQbG90PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7LyogaDEgY2VudGVyZWQgYmVsb3cgd2ViY2FtICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtMnhsIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JlZW4tMzAwIHRleHQtY2VudGVyIHB4LTMnPiB7IGBDdXJyZW50IEVuZ2FnZW1lbnQ6ICR7cmVzLmxlbmd0aCA+IDAgPyByZXNbcmVzLmxlbmd0aCAtIDFdLnkgOiBcIk5vIGRhdGEgeWV0XCJ9YH0gPC9oMT4gIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbInVzZVJlZiIsIlJlYWN0IiwiV2ViY2FtIiwiSGVhZGVyIiwiWFlQbG90IiwiWEF4aXMiLCJZQXhpcyIsIkhvcml6b250YWxHcmlkTGluZXMiLCJWZXJ0aWNhbEdyaWRMaW5lcyIsIkxpbmVTZXJpZXMiLCJkeW5hbWljIiwiUmVhY3RQbGF5ZXIiLCJzc3IiLCJ2aWRlb0NvbnN0cmFpbnRzIiwid2lkdGgiLCJtaW4iLCJoZWlnaHQiLCJhc3BlY3RSYXRpbyIsInNjYW5GcmVxdWVuY3kiLCJ2aWRlb0RlbW9VcmwiLCJIb21lIiwid2ViY2FtUmVmIiwid2Vic29ja2V0UmVmIiwic3RyZWFtaW5nIiwic2V0U3RyZWFtaW5nIiwidXNlU3RhdGUiLCJyZXMiLCJzZXRSZXMiLCJtaW5YIiwiTWF0aCIsIm1hcCIsInBvaW50IiwieCIsIm1heFgiLCJtYXgiLCJtaW5ZIiwieSIsIm1heFkiLCJ3cyIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfS0VZIiwid3NVUkwiLCJleHRyYWN0RW5nYWdlbWVudCIsImZhY2UiLCJwcmVkaWN0aW9ucyIsImVtb3Rpb25zIiwiaW50ZXJlc3QiLCJmaW5kIiwiZW1vdGlvbiIsIm5hbWUiLCJzY29yZSIsImNvbm5lY3QiLCJXZWJTb2NrZXQiLCJjcmVhdGVDYWxsYmFja3MiLCJjdXJyZW50Iiwib25vcGVuIiwiY29uc29sZSIsImxvZyIsIm9ubWVzc2FnZSIsImV2ZW50IiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsInRpbWUiLCJwYXlsb2FkX2lkIiwibmV3X2VuZ2FnZW1lbnRfcG9pbnQiLCJsaXN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJlcnJvciIsImNhcHR1cmUiLCJ1c2VDYWxsYmFjayIsImltYWdlU3JjIiwiZ2V0U2NyZWVuc2hvdCIsImltYWdlU3JjU3BsaXQiLCJzcGxpdCIsIm9uUGxheSIsIm9uUGF1c2UiLCJjbG9zZSIsIm9uUHJvZ3Jlc3MiLCJwbGF5ZWQiLCJwbGF5ZWRTZWNvbmRzIiwibG9hZGVkIiwibG9hZGVkU2Vjb25kcyIsImZsb29yIiwic3JjIiwibW9kZWxzIiwidG9TdHJpbmciLCJtZXNzYWdlIiwic3RyaW5naWZ5Iiwic2VuZCIsImRpdiIsImNsYXNzTmFtZSIsInVybCIsImxpZ2h0IiwicmVmIiwieERvbWFpbiIsInlEb21haW4iLCJ0aXRsZSIsImNvbG9yIiwic3Ryb2tlV2lkdGgiLCJzdHlsZSIsImZpbGwiLCJoMSIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/demo/page.js\n"));

/***/ })

});