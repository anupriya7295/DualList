(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dual-list"] = factory();
	else
		root["dual-list"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0205":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1f47":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormDualList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0205");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormDualList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormDualList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormDualList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"68dfc669-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FormDualList.vue?vue&type=template&id=d48bda82&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"m-3"},[_c('div',{staticClass:"m-2"},[_c('label',[_vm._v(_vm._s(_vm.label))]),_c('br')]),_c('b-row',[_c('b-col',[(_vm.enableOptionSearch)?_c('b-form-group',[_c('b-form-input',{class:_vm.optionSearchClass ? (_vm.optionSearchClass + " searchBox") : 'searchBox',attrs:{"id":'optionSearch',"name":'optionSearch',"type":'text',"placeholder":'Search'},model:{value:(_vm.optionSearch),callback:function ($$v) {_vm.optionSearch=$$v},expression:"optionSearch"}})],1):_vm._e()],1),_c('b-col',[_c('b-form-group',[_c('b-form-input',{directives:[{name:"show",rawName:"v-show",value:(_vm.enableSelectedSearch),expression:"enableSelectedSearch"}],class:_vm.selectedSearch ? (_vm.selectedSearch + " searchBox ml-3") : 'searchBox ml-3',attrs:{"id":'selectedSearch',"name":'selectedSearch',"type":'text',"placeholder":'Search'},model:{value:(_vm.selectedSearch),callback:function ($$v) {_vm.selectedSearch=$$v},expression:"selectedSearch"}})],1)],1)],1),_c('b-row',[_c('b-col',[_c('b-card-group',{attrs:{"deck":""}},[_c('b-card',{class:_vm.optionBoxClass ? (_vm.optionBoxClass + " dualBlock p-2") : 'dualBlock p-2'},_vm._l((_vm.items),function(item,index){return _c('div',{key:index},[_c('a',{attrs:{"href":"#"},on:{"click":function($event){return _vm.transferToRight(index)}}},[(_vm.textField)?_c('span',[_vm._v("\n\t\t\t\t\t\t\t\t"+_vm._s(item[_vm.textField])+"\n\t\t\t\t\t\t\t\t")]):_vm._e(),(!_vm.textField)?_c('span',[_vm._v("\n\t\t\t\t\t\t\t\t"+_vm._s(item)+"\n\t\t\t\t\t\t\t\t")]):_vm._e()])])}),0)],1)],1),_c('div',{staticClass:"p-1"},[_c('div',{staticClass:"action mt-3"},[_c('b-row',[_c('b-button',{class:_vm.moveRightClass ? ("" + _vm.moveRightClass) : '',attrs:{"type":"button","variant":"outline-info"},on:{"click":function($event){return _vm.transferToRight()}}},[_vm._v("\n            "+_vm._s(_vm.moveRight)+"\n          ")])],1),_c('b-row',{staticClass:"mt-2"},[_c('b-button',{class:_vm.moveLeftClass ? ("" + _vm.moveLeftClass) : '',attrs:{"type":"button","variant":"outline-info"},on:{"click":function($event){return _vm.transferToLeft()}}},[_vm._v("\n            "+_vm._s(_vm.moveLeft)+"\n          ")])],1)],1)]),_c('b-col',[_c('b-card-group',{attrs:{"deck":""}},[_c('b-card',{class:_vm.selectedBoxClass ? (_vm.selectedBoxClass + " dualBlock") : 'dualBlock'},_vm._l((_vm.selectedItems),function(item,index){return _c('div',{key:index},[_c('a',{attrs:{"href":"#"},on:{"click":function($event){return _vm.transferToLeft(index)}}},[(_vm.textField)?_c('span',[_vm._v("\n                  "+_vm._s(item[_vm.textField])+"\n                  ")]):_vm._e(),(!_vm.textField)?_c('span',[_vm._v("\n                  "+_vm._s(item)+"\n                  ")]):_vm._e()])])}),0)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FormDualList.vue?vue&type=template&id=d48bda82&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FormDualList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FormDualListvue_type_script_lang_js_ = ({
  name: 'FormDualList',
  props: {
    label: {
      type: String
    },
    options: {},
    selected: {},
    enableOptionSearch: {
      type: Boolean,
      default: true
    },
    enableSelectedSearch: {
      type: Boolean,
      default: true
    },
    optionSearchClass: {},
    selectedSearchClass: {},
    moveRight: {
      type: String,
      default: '>>'
    },
    moveLeft: {
      type: String,
      default: '<<'
    },
    moveRightClass: {},
    moveLeftClass: {},
    optionBoxClass: {},
    selectedBoxClass: {},
    textField: {
      type: String
    }
  },
  data: function data() {
    return {
      optionSearch: '',
      selectedSearch: ''
    };
  },
  methods: {
    transferToRight: function transferToRight(index) {
      this.transfer(this.items, this.selected, index);
    },
    transferToLeft: function transferToLeft(index) {
      this.transfer(this.selected, this.items, index);
    },
    transfer: function transfer(from, to, index) {
      if (index >= 0) {
        to.push(from[index]);
        from.splice(index, 1);
      } else {
        from.forEach(function (element) {
          to.push(element);
        });
        from.splice(0, from.length);
      }
    },
    has: function has(data, value) {
      return data.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    },
    getSearchData: function getSearchData(searchKey, data) {
      var _this = this;

      if (searchKey) {
        return data.filter(function (a) {
          if (_this.textField) {
            return _this.has(a[_this.textField], searchKey);
          } else {
            return _this.has(a, searchKey);
          }
        });
      } else {
        return data;
      }
    }
  },
  computed: {
    items: function items() {
      var _this2 = this;

      var filteredOptions = [];

      if (this.textField) {
        var selectedValues = this.selected.map(function (a) {
          return a[_this2.textField];
        });
        filteredOptions = this.options.filter(function (e) {
          return !selectedValues.includes(e[_this2.textField]);
        });
      } else {
        filteredOptions = this.options.filter(function (e) {
          return !_this2.selected.includes(e);
        });
      }

      return this.getSearchData(this.optionSearch, filteredOptions);
    },
    selectedItems: function selectedItems() {
      return this.getSearchData(this.selectedSearch, this.selected);
    }
  },
  components: {}
});
// CONCATENATED MODULE: ./src/components/FormDualList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FormDualListvue_type_script_lang_js_ = (FormDualListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/FormDualList.vue?vue&type=style&index=0&lang=css&
var FormDualListvue_type_style_index_0_lang_css_ = __webpack_require__("1f47");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/FormDualList.vue






/* normalize component */

var component = normalizeComponent(
  components_FormDualListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FormDualList = (component.exports);
// CONCATENATED MODULE: ./src/components/index.js

/* harmony default export */ var components = ({
  FormDualList: FormDualList
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (components);



/***/ })

/******/ });
});
//# sourceMappingURL=dual-list.umd.js.map