/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/carlos-gutenberg-blocks/edit.js":
/*!*********************************************!*\
  !*** ./src/carlos-gutenberg-blocks/edit.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const ASPECT_RATIOS = [{
  label: "9:16 (Vertical)",
  value: "9:16"
}, {
  label: "1:1 (Cuadrado)",
  value: "1:1"
}, {
  label: "4:3 (Horizontal)",
  value: "4:3"
}, {
  label: "4:5 (Vertical)",
  value: "4:5"
}];
function Edit({
  attributes,
  setAttributes
}) {
  const {
    images = [],
    alignRight,
    boxSize = 30,
    mobileBoxSize = 80,
    aspectRatio = "1:1",
    floatDuration = 18,
    cycleDuration = 3,
    floatDelay = 2,
    slideUpDuration = 1,
    slideOutDuration = 1,
    spacing = 20,
    automaticSizing = false
  } = attributes;
  const onSelectImages = newImages => {
    setAttributes({
      images: newImages.map(img => ({
        id: img.id,
        url: img.url
      }))
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Images Settings", "carlos-gutenberg-blocks"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Automatic Sizing", "carlos-gutenberg-blocks"),
          checked: automaticSizing,
          onChange: () => setAttributes({
            automaticSizing: !automaticSizing
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Adjust boxes to fit parent container", "carlos-gutenberg-blocks"),
          __nextHasNoMarginBottom: true
        }), !automaticSizing && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Desktop Size", "carlos-gutenberg-blocks"),
            value: boxSize,
            onChange: value => setAttributes({
              boxSize: value
            }),
            min: 10,
            max: 90,
            initialPosition: 30,
            __nextHasNoMarginBottom: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mobile Size", "carlos-gutenberg-blocks"),
            value: mobileBoxSize,
            onChange: value => setAttributes({
              mobileBoxSize: value
            }),
            min: 30,
            max: 100,
            initialPosition: 80,
            __nextHasNoMarginBottom: true
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aspect Ratio", "carlos-gutenberg-blocks"),
          value: aspectRatio,
          options: ASPECT_RATIOS,
          onChange: value => setAttributes({
            aspectRatio: value
          }),
          __nextHasNoMarginBottom: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Box Spacing (px)", "carlos-gutenberg-blocks"),
          value: spacing,
          onChange: value => setAttributes({
            spacing: value
          }),
          min: 10,
          max: 50,
          initialPosition: 20,
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Space between floating boxes", "carlos-gutenberg-blocks"),
          __nextHasNoMarginBottom: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Align Right", "carlos-gutenberg-blocks"),
          checked: alignRight,
          onChange: () => setAttributes({
            alignRight: !alignRight
          }),
          __nextHasNoMarginBottom: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
          onSelect: onSelectImages,
          allowedTypes: ["image"],
          multiple: true,
          gallery: true,
          value: images.map(image => image.id),
          render: ({
            open
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            onClick: open,
            variant: "primary",
            children: images.length > 0 ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Change Images", "carlos-gutenberg-blocks") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Select Images", "carlos-gutenberg-blocks")
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "image-preview-panel",
          children: images.map((image, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
            src: image.url,
            alt: `Imagen ${index + 1}`,
            style: {
              width: "50px",
              height: "50px",
              marginRight: "5px",
              marginTop: "5px",
              border: "1px solid #ccc",
              objectFit: "cover"
            }
          }, index))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Animation Timing Settings", "carlos-gutenberg-blocks"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Total Float Duration (seconds)", "carlos-gutenberg-blocks"),
          value: floatDuration,
          onChange: value => setAttributes({
            floatDuration: value
          }),
          min: 5,
          max: 30,
          initialPosition: 18,
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("How long the boxes will float before sliding out", "carlos-gutenberg-blocks"),
          __nextHasNoMarginBottom: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Float Cycle Speed (seconds)", "carlos-gutenberg-blocks"),
          value: cycleDuration,
          onChange: value => setAttributes({
            cycleDuration: value
          }),
          min: 1,
          max: 10,
          initialPosition: 3,
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Duration of each float up/down cycle", "carlos-gutenberg-blocks"),
          __nextHasNoMarginBottom: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Initial Delay (seconds)", "carlos-gutenberg-blocks"),
          value: floatDelay,
          onChange: value => setAttributes({
            floatDelay: value
          }),
          min: 0,
          max: 5,
          initialPosition: 2,
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Delay before floating starts", "carlos-gutenberg-blocks"),
          __nextHasNoMarginBottom: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slide In Duration (seconds)", "carlos-gutenberg-blocks"),
          value: slideUpDuration,
          onChange: value => setAttributes({
            slideUpDuration: value
          }),
          min: 0.5,
          max: 3,
          step: 0.1,
          initialPosition: 1,
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("How fast the boxes slide in", "carlos-gutenberg-blocks"),
          __nextHasNoMarginBottom: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slide Out Duration (seconds)", "carlos-gutenberg-blocks"),
          value: slideOutDuration,
          onChange: value => setAttributes({
            slideOutDuration: value
          }),
          min: 0.5,
          max: 3,
          step: 0.1,
          initialPosition: 1,
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("How fast the boxes slide out", "carlos-gutenberg-blocks"),
          __nextHasNoMarginBottom: true
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "cgb-floating-boxes-editor",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: `cgb-group ${automaticSizing ? 'automatic-sizing' : ''}`,
          style: {
            "--aspect-ratio": aspectRatio.replace(":", "/"),
            "--spacing": `${spacing}px`,
            aspectRatio: aspectRatio.replace(":", "/")
          },
          children: images.slice(0, 3).map((image, index) => {
            const baseClassName = "cgb-floating-box";
            const positionClassName = index === 1 ? "cgb-second" : index === 2 ? "cgb-third" : "";
            const alignmentClassName = alignRight ? "align-right" : "align-left";
            const className = `${baseClassName} ${positionClassName} ${alignmentClassName}`;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: className,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                src: image.url,
                alt: `Imagen ${index + 1}`
              })
            }, index);
          })
        })
      })
    })]
  });
}

/***/ }),

/***/ "./src/carlos-gutenberg-blocks/index.js":
/*!**********************************************!*\
  !*** ./src/carlos-gutenberg-blocks/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/carlos-gutenberg-blocks/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/carlos-gutenberg-blocks/editor.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/carlos-gutenberg-blocks/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/carlos-gutenberg-blocks/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/carlos-gutenberg-blocks/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/carlos-gutenberg-blocks/save.js":
/*!*********************************************!*\
  !*** ./src/carlos-gutenberg-blocks/save.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function save({
  attributes
}) {
  const {
    images = [],
    alignRight,
    boxSize = 30,
    mobileBoxSize = 80,
    aspectRatio = "1:1",
    floatDuration = 18,
    cycleDuration = 3,
    floatDelay = 2,
    slideUpDuration = 1,
    slideOutDuration = 1,
    spacing = 20,
    automaticSizing = false
  } = attributes;

  // Dividir las imágenes en grupos de 3
  const imageGroups = [];
  for (let i = 0; i < images.length; i += 3) {
    imageGroups.push(images.slice(i, i + 3));
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(),
    "data-float-duration": floatDuration,
    "data-cycle-duration": cycleDuration,
    "data-float-delay": floatDelay,
    "data-slide-up-duration": slideUpDuration,
    "data-slide-out-duration": slideOutDuration,
    "data-spacing": spacing,
    style: {
      minHeight: automaticSizing ? "300px" : "auto"
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "cgb-floating-boxes-frontend",
      style: {
        height: "100%"
      },
      children: imageGroups.map((group, groupIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: `cgb-group ${automaticSizing ? "automatic-sizing" : ""} ${groupIndex === 0 ? 'active' : ''}`,
        "data-group-index": groupIndex,
        style: {
          ...(automaticSizing ? {
            aspectRatio: aspectRatio.replace(":", "/"),
            "--aspect-ratio": aspectRatio.replace(":", "/"),
            "--aspect-ratio-width": aspectRatio.split(":")[0],
            "--aspect-ratio-height": aspectRatio.split(":")[1],
            width: "100%",
            height: "100%"
          } : {
            "--box-size": `${boxSize}vw`,
            "--mobile-box-size": `${mobileBoxSize}vw`,
            "--aspect-ratio": aspectRatio.replace(":", "/"),
            "--aspect-ratio-width": aspectRatio.split(":")[0],
            "--aspect-ratio-height": aspectRatio.split(":")[1],
            aspectRatio: aspectRatio.replace(":", "/")
          }),
          "--spacing": `${spacing}px`,
          "--float-duration": `${floatDuration}s`,
          "--float-cycle-duration": `${cycleDuration}s`,
          "--float-delay": `${floatDelay}s`,
          "--slide-up-duration": `${slideUpDuration}s`,
          "--slide-out-duration": `${slideOutDuration}s`
        },
        children: group.map((image, index) => {
          const baseClassName = "cgb-floating-box";
          const positionClassName = index === 1 ? "cgb-second" : index === 2 ? "cgb-third" : "";
          const alignmentClassName = alignRight ? "align-right" : "align-left";
          const className = `${baseClassName} ${positionClassName} ${alignmentClassName}`;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: className,
            "aria-label": `Floating box ${index + 1}`,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
              src: image.url,
              alt: `Imagen ${groupIndex * 3 + index + 1}`
            })
          }, index);
        })
      }, groupIndex))
    })
  });
}

/***/ }),

/***/ "./src/carlos-gutenberg-blocks/editor.scss":
/*!*************************************************!*\
  !*** ./src/carlos-gutenberg-blocks/editor.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/carlos-gutenberg-blocks/style.scss":
/*!************************************************!*\
  !*** ./src/carlos-gutenberg-blocks/style.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/carlos-gutenberg-blocks/block.json":
/*!************************************************!*\
  !*** ./src/carlos-gutenberg-blocks/block.json ***!
  \************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/carlos-gutenberg-blocks","version":"0.1.0","title":"Carlos Gutenberg Blocks","category":"widgets","icon":"smiley","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false,"align":["wide","full"],"spacing":{"margin":true,"padding":true}},"attributes":{"images":{"type":"array","default":[],"items":{"type":"object","properties":{"id":{"type":"number"},"url":{"type":"string"}}}},"boxSize":{"type":"number","default":30},"mobileBoxSize":{"type":"number","default":80},"alignRight":{"type":"boolean","default":false},"aspectRatio":{"type":"string","default":"1:1"},"floatDuration":{"type":"number","default":18},"cycleDuration":{"type":"number","default":6},"spacing":{"type":"number","default":20},"floatDelay":{"type":"number","default":2},"slideUpDuration":{"type":"number","default":1},"slideOutDuration":{"type":"number","default":1},"automaticSizing":{"type":"boolean","default":false}},"textdomain":"carlos-gutenberg-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"carlos-gutenberg-blocks/index": 0,
/******/ 			"carlos-gutenberg-blocks/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkcarlos_gutenberg_blocks"] = globalThis["webpackChunkcarlos_gutenberg_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["carlos-gutenberg-blocks/style-index"], () => (__webpack_require__("./src/carlos-gutenberg-blocks/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map