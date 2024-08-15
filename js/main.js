/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_actionsSteps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/_actionsSteps.js */ "./src/js/components/_actionsSteps.js");

document.addEventListener('DOMContentLoaded', () => {
  (0,_components_actionsSteps_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

/***/ }),

/***/ "./src/js/components/_actionsSteps.js":
/*!********************************************!*\
  !*** ./src/js/components/_actionsSteps.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const actionsSteps = () => {
  const steps = document.querySelectorAll(".steps__item");
  const sendButtons = document.querySelectorAll(".steps__btn");
  let currentStep = 0;
  sendButtons.forEach((button, index) => {
    button.addEventListener("click", event => {
      if (button.type === "submit") {
        event.preventDefault();
        const form = steps[index].querySelector(".steps__form");
        const inputs = form.querySelectorAll('input[type="radio"], input[type="checkbox"], input, select, textarea');
        let allInputsFilled = true;
        inputs.forEach(input => {
          if (input.type === "radio") {
            if (!form.querySelector(`input[name="${input.name}"]:checked`)) {
              allInputsFilled = false;
            }
          } else if (input.type === "checkbox") {
            if (!form.querySelector(`input[name="${input.name}"]:checked`)) {
              allInputsFilled = false;
            }
          } else if (!input.value) {
            allInputsFilled = false;
          }
        });
        if (allInputsFilled) {
          setTimeout(() => {
            if (index < steps.length - 1) {
              steps[index].classList.add("steps__item_filled");
              steps[currentStep].querySelector(".steps__form").style.display = "none";
              steps[currentStep].classList.remove("steps__item_active");
              steps[currentStep + 1].classList.add("steps__item_active");
              currentStep++;
            }
            const filledSteps = document.querySelectorAll(".steps__item_filled");
            filledSteps.forEach(step => {
              step.remove();
            });
          }, 500);
        } else {
          alert("Заполните все поля");
        }
      } else {
        if (index === steps.length - 1) {
          return;
        }
        steps[index].classList.add("steps__item_filled");
        steps[currentStep].querySelector(".steps__form").style.display = "none";
        steps[currentStep].classList.remove("steps__item_active");
        steps[currentStep + 1].classList.add("steps__item_active");
        currentStep++;
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (actionsSteps);

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
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components.js */ "./src/js/_components.js");

/******/ })()
;
//# sourceMappingURL=main.js.map