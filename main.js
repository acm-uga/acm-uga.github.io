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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_event_slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/event-slide */ \"./src/scripts/event-slide.js\");\n\r\n\r\n// Render slide\r\n(0,_scripts_event_slide__WEBPACK_IMPORTED_MODULE_0__.renderEventSlide)();\r\n\r\n// Hamburger menu\r\nconst expandedMenu = document.querySelector('#expanded-menu');\r\nlet opening = false;\r\ndocument.querySelector('body').addEventListener('click', (e) => {\r\n    if (!opening && expandedMenu.classList.contains('opened')) {\r\n        document.querySelector('#expanded-menu').classList.remove('opened');\r\n    }\r\n    opening = false;\r\n});\r\ndocument.querySelector('#hamburger').addEventListener('click', (e) => {\r\n    opening = true;\r\n    expandedMenu.classList.add('opened');\r\n});\r\n\n\n//# sourceURL=webpack://acm-uga.github.io/./src/index.js?");

/***/ }),

/***/ "./src/scripts/event-slide.js":
/*!************************************!*\
  !*** ./src/scripts/event-slide.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderEventSlide\": () => (/* binding */ renderEventSlide)\n/* harmony export */ });\n\r\nvar event_info = [ \r\n    \r\n    {\"title\":\"Open Source Project\", \"short\": \"Join us for our first ever open source project! Add to your resumè and create something great!\", \"long\": \"This is event 1's super long description!\", \"img\":\"../resources/event_imgs/open-source-project.png\", \"date\":\"Every Wednesday at 5:30PM\"},  \r\n    {\"title\":\"Flutter Foreward Extended\", \"short\": \"ACM and GDG Athens present a workshop on Flutter, Google's cross-platform development framework! Join us and learn how you can code your first Flutter app!\", \"long\": \"This is event 1's super long description!\", \"img\":\"../resources/event_imgs/FLutter workshop.png\", \"date\":\"02/16/23\"},\r\n    {\"title\":\"ACM Research Panel\", \"short\": \"Come to the research panel to discuss research oportunities at UGA. Ask questions and explore your specific research interests.\", \"long\": \"This is event 1's super long description!\", \"img\":\"../resources/event_imgs/Reasearch GBM 3 (2).png\", \"date\":\"02/09/23\"},\r\n    {\"title\":\"Company Speaker: StateFarm\", \"short\": \"ACM is proud to host a guest speaker from StateFarm! Join us for exciting insight from the technology side of insurance buisness.\", \"long\":\"This is event 1's super long description!\", \"img\": \"../resources/event_imgs/gmb-2-statefarm.png\", \"date\":\"01/26/23\"},\r\n    {\"title\":\"Fullstack Development\", \"short\": \"Join ACM, GDG Athens, and UGAHacks for a crash course on full stack developement in preparation for the upcoming hackathon!\", \"long\": \"This is event 2's super long description!\", \"img\":\"../resources/event_imgs/Full_Stack_Graphic.png\", \"date\":\"01/19/23\"},\r\n   \r\n    \r\n   \r\n      \r\n    \r\n];\r\n\r\nlet eventNodes = null;\r\n\r\n/** Render event slides from event_info */\r\nfunction renderEventSlide() { \r\n    var elem = document.getElementById(\"event-carousel\"); //The container for the inserted links\r\n    var count = 0;\r\n    while (count < event_info.length) { \r\n        var listItem = document.createElement(\"li\");\r\n        var link = document.createElement(\"a\");\r\n        var title = document.createElement(\"h3\");\r\n        var short = document.createElement(\"p\");\r\n        var date = document.createElement(\"p\");\r\n        var img = document.createElement(\"img\");\r\n\r\n        listItem.className = \"event-item\";\r\n\r\n        listItem.append(link);\r\n        link.append(img,title,date, short);\r\n        img.src=event_info[count]['img'];\r\n        title.appendChild(document.createTextNode(event_info[count][\"title\"]));\r\n        short.appendChild(document.createTextNode(event_info[count][\"short\"]));\r\n        date.appendChild(document.createTextNode(event_info[count][\"date\"]));\r\n        short.className = \"event-short\";\r\n        date.className = \"event-date\";\r\n\r\n        // Save index of event\r\n        listItem.dataset.index = count;\r\n\r\n        elem.appendChild(listItem);\r\n        count = count + 1;\r\n    }\r\n    eventNodes = document.querySelectorAll('.event-item');\r\n\r\n    // Carousel setup\r\n    initializeCarousel();\r\n    setJumpToListeners();\r\n    // Set up button events\r\n    document.querySelector('.increment-carousel').addEventListener('click', incrementCarousel)\r\n    document.querySelector('.decrement-carousel').addEventListener('click', decrementCarousel)\r\n}\r\n\r\nlet currentCenter = 2;\r\n\r\n/**Initialize carousel on events, place each element on the carousel\r\n * according to its index in eventNodes, centering on currentCenter.\r\n*/\r\nconst initializeCarousel = function() {\r\n    // Initialize with center index\r\n    carouselFromCenter(currentCenter);\r\n}\r\n\r\n/** Remove the inner/outer right/left classes from each\r\n * event node.\r\n */\r\nconst removeClass = function() {\r\n    eventNodes.forEach(node => {\r\n        node.classList.remove('outer', 'inner', 'inner-right', 'outer-right', 'center', 'inner-left', 'outer-left'); \r\n    })\r\n}\r\n\r\n/** Takes the given index and gives the proper\r\n * classes to each event card to generate a\r\n * carousel with the n-th index as the center\r\n */\r\nconst carouselFromCenter = function(n) {\r\n    // Set classes to default values\r\n    removeClass();\r\n    // Add classes to appropriate index\r\n    eventNodes.item(circularIndex(n - 2)).classList.add('outer', 'outer-left');\r\n    eventNodes.item(circularIndex(n - 1)).classList.add('inner', 'inner-left');\r\n    eventNodes.item(circularIndex(n)).classList.add('center');\r\n    eventNodes.item(circularIndex(n + 1)).classList.add('inner', 'inner-right');\r\n    eventNodes.item(circularIndex(n + 2)).classList.add('outer', 'outer-right');\r\n}\r\n\r\n/** Take the given number, checks if\r\n * it is in range of the index, and returns it, or reduces\r\n * it to an indexable value\r\n */\r\nconst circularIndex = function (index) {\r\n    if (index >= 0 && index < eventNodes.length) {\r\n        index = index;\r\n    } else if (index < 0) {\r\n        index = circularIndex(index + eventNodes.length);\r\n    } else {\r\n        index = circularIndex(index % eventNodes.length);\r\n    }\r\n    return index;\r\n}\r\n\r\nconst incrementCarousel = function () {\r\n    currentCenter++;\r\n    initializeCarousel();\r\n}\r\n\r\nconst decrementCarousel = function () {\r\n    currentCenter--;\r\n    initializeCarousel();\r\n}\r\n\r\n/** Set event listeners to jump to each event */\r\nconst setJumpToListeners = function () {\r\n    eventNodes.forEach( node => {\r\n        node.addEventListener('click', (e) => {\r\n            currentCenter = parseInt(node.dataset.index);\r\n            initializeCarousel();\r\n        })\r\n    })\r\n}\n\n//# sourceURL=webpack://acm-uga.github.io/./src/scripts/event-slide.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;