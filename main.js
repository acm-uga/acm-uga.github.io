/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/eventSlide.ts":
/*!***************************!*\
  !*** ./src/eventSlide.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderEventSlide\": () => (/* binding */ renderEventSlide)\n/* harmony export */ });\n/* harmony import */ var _info_eventInfo_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info/eventInfo.json */ \"./src/info/eventInfo.json\");\n\n/** Stores the ACM Events */\nconst eventInfo = _info_eventInfo_json__WEBPACK_IMPORTED_MODULE_0__;\n/** Initialize the eventNodes (Cards) */\nlet eventNodes;\n/** Render event slides from event_info */\nfunction renderEventSlide() {\n    const elem = document.getElementById(\"event-carousel\"); // The container for the inserted links\n    // Null check elem\n    if (!elem) {\n        throw new Error(\"No .event-carousel element\");\n    }\n    var count = 0;\n    while (count < eventInfo.length) {\n        const listItem = document.createElement(\"li\");\n        const link = document.createElement(\"a\");\n        const title = document.createElement(\"h3\");\n        const short = document.createElement(\"p\");\n        const date = document.createElement(\"p\");\n        const img = document.createElement(\"img\");\n        listItem.className = \"event-item\";\n        listItem.append(link);\n        link.append(img, title, date, short);\n        img.src = eventInfo[count]['img'];\n        title.appendChild(document.createTextNode(eventInfo[count][\"title\"]));\n        short.appendChild(document.createTextNode(eventInfo[count][\"short\"]));\n        date.appendChild(document.createTextNode(eventInfo[count][\"date\"]));\n        short.className = \"event-short\";\n        date.className = \"event-date\";\n        // Save index of event\n        listItem.dataset.index = count + \"\";\n        elem.appendChild(listItem);\n        count = count + 1;\n    }\n    eventNodes = document.querySelectorAll('.event-item');\n    // Carousel setup\n    initializeCarousel();\n    setJumpToListeners();\n    // Set up button events\n    const incrementButton = document.querySelector('.increment-carousel');\n    const decrementButton = document.querySelector('.decrement-carousel');\n    // Null check buttons\n    if (!(incrementButton && decrementButton)) {\n        throw new Error(\"Increment or decrement buttons are null.\");\n    }\n    incrementButton.addEventListener('click', incrementCarousel);\n    decrementButton.addEventListener('click', decrementCarousel);\n}\nlet currentCenter = 2;\n/**Initialize carousel on events, place each element on the carousel\n * according to its index in eventNodes, centering on currentCenter.\n*/\nconst initializeCarousel = function () {\n    // Initialize with center index\n    carouselFromCenter(currentCenter);\n};\n/** Remove the inner/outer right/left classes from each\n * event node.\n */\nconst removeClass = function () {\n    eventNodes.forEach(node => {\n        node.classList.remove('outer', 'inner', 'inner-right', 'outer-right', 'center', 'inner-left', 'outer-left');\n    });\n};\n/** Takes the given index and gives the proper\n * classes to each event card to generate a\n * carousel with the n-th index as the center\n */\nconst carouselFromCenter = function (n) {\n    // Set classes to default values\n    removeClass();\n    // Add classes to appropriate index\n    eventNodes.item(circularIndex(n - 2)).classList.add('outer', 'outer-left');\n    eventNodes.item(circularIndex(n - 1)).classList.add('inner', 'inner-left');\n    eventNodes.item(circularIndex(n)).classList.add('center');\n    eventNodes.item(circularIndex(n + 1)).classList.add('inner', 'inner-right');\n    eventNodes.item(circularIndex(n + 2)).classList.add('outer', 'outer-right');\n};\n/** Take the given number, checks if\n * it is in range of the index, and returns it, or reduces\n * it to an indexable value\n */\nconst circularIndex = function (index) {\n    if (index >= 0 && index < eventNodes.length) {\n        index = index;\n    }\n    else if (index < 0) {\n        index = circularIndex(index + eventNodes.length);\n    }\n    else {\n        index = circularIndex(index % eventNodes.length);\n    }\n    return index;\n};\nconst incrementCarousel = function () {\n    currentCenter++;\n    initializeCarousel();\n};\nconst decrementCarousel = function () {\n    currentCenter--;\n    initializeCarousel();\n};\n/** Set event listeners to jump to each event */\nconst setJumpToListeners = function () {\n    eventNodes.forEach(node => {\n        node.addEventListener('click', (e) => {\n            const index = node.dataset.index;\n            if (index == undefined) {\n                throw new Error(\"Event node has undefined index.\");\n            }\n            currentCenter = parseInt(index);\n            initializeCarousel();\n        });\n    });\n};\n\n\n//# sourceURL=webpack://acm-uga.github.io/./src/eventSlide.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _eventSlide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventSlide */ \"./src/eventSlide.ts\");\n\n// Render slide\n(0,_eventSlide__WEBPACK_IMPORTED_MODULE_0__.renderEventSlide)();\n// Hamburger menu\nconst expandedMenu = document.querySelector('#expanded-menu');\nlet opening = false;\nconst body = document.querySelector('body');\n// Null check body\nif (body && expandedMenu) {\n    body.addEventListener('click', (e) => {\n        if (!opening && expandedMenu.classList.contains('opened')) {\n            expandedMenu.classList.remove('opened');\n        }\n        opening = false;\n    });\n}\nconst hamburger = document.querySelector('#hamburger');\nif (hamburger && expandedMenu) {\n    hamburger.addEventListener('click', (e) => {\n        opening = true;\n        expandedMenu.classList.add('opened');\n    });\n}\n\n\n//# sourceURL=webpack://acm-uga.github.io/./src/index.ts?");

/***/ }),

/***/ "./src/info/eventInfo.json":
/*!*********************************!*\
  !*** ./src/info/eventInfo.json ***!
  \*********************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"title\":\"Open Source Project\",\"short\":\"Join us for our first ever open source project! Add to your resumè and create something great!\",\"long\":\"This is event 1\\'s super long description!\",\"img\":\"./resources/event_imgs/open-source-project.png\",\"date\":\"Every Wednesday at 5:30PM\"},{\"title\":\"Flutter Foreward Extended\",\"short\":\"ACM and GDG Athens present a workshop on Flutter, Google\\'s cross-platform development framework! Join us and learn how you can code your first Flutter app!\",\"long\":\"This is event 1\\'s super long description!\",\"img\":\"./resources/event_imgs/FLutter workshop.png\",\"date\":\"02/16/23\"},{\"title\":\"ACM Research Panel\",\"short\":\"Come to the research panel to discuss research oportunities at UGA. Ask questions and explore your specific research interests.\",\"long\":\"This is event 1\\'s super long description!\",\"img\":\"./resources/event_imgs/Reasearch GBM 3 (2).png\",\"date\":\"02/09/23\"},{\"title\":\"Company Speaker: StateFarm\",\"short\":\"ACM is proud to host a guest speaker from StateFarm! Join us for exciting insight from the technology side of insurance buisness.\",\"long\":\"This is event 1\\'s super long description!\",\"img\":\"./resources/event_imgs/gmb-2-statefarm.png\",\"date\":\"01/26/23\"},{\"title\":\"Fullstack Development\",\"short\":\"Join ACM, GDG Athens, and UGAHacks for a crash course on full stack developement in preparation for the upcoming hackathon!\",\"long\":\"This is event 2\\'s super long description!\",\"img\":\"./resources/event_imgs/Full_Stack_Graphic.png\",\"date\":\"01/19/23\"}]');\n\n//# sourceURL=webpack://acm-uga.github.io/./src/info/eventInfo.json?");

/***/ })

/******/ 	});
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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;