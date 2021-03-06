/*!
 * dual-list v1.0.0
 * https://github.com/anupriya7295/DualList#readme
 *
 * Copyright 2018-present Anupriya V
 * Released under the MIT license
 *
 * Date: 2019-05-20T09:52:44.465Z
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.DualList = {}));
}(this, function (exports) { 'use strict';

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
	var script = {
	  name: 'FormDualList',
	  props: {
	    label: {
	      type: String
	    },
	    options: {},
	    selected: {
	      default: []
	    },
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
	  }
	};

	function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
	/* server only */
	, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
	  if (typeof shadowMode !== 'boolean') {
	    createInjectorSSR = createInjector;
	    createInjector = shadowMode;
	    shadowMode = false;
	  } // Vue.extend constructor export interop.


	  var options = typeof script === 'function' ? script.options : script; // render functions

	  if (template && template.render) {
	    options.render = template.render;
	    options.staticRenderFns = template.staticRenderFns;
	    options._compiled = true; // functional template

	    if (isFunctionalTemplate) {
	      options.functional = true;
	    }
	  } // scopedId


	  if (scopeId) {
	    options._scopeId = scopeId;
	  }

	  var hook;

	  if (moduleIdentifier) {
	    // server build
	    hook = function hook(context) {
	      // 2.3 injection
	      context = context || // cached call
	      this.$vnode && this.$vnode.ssrContext || // stateful
	      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
	      // 2.2 with runInNewContext: true

	      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
	        context = __VUE_SSR_CONTEXT__;
	      } // inject component styles


	      if (style) {
	        style.call(this, createInjectorSSR(context));
	      } // register component module identifier for async chunk inference


	      if (context && context._registeredComponents) {
	        context._registeredComponents.add(moduleIdentifier);
	      }
	    }; // used by ssr in case component is cached and beforeCreate
	    // never gets called


	    options._ssrRegister = hook;
	  } else if (style) {
	    hook = shadowMode ? function () {
	      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
	    } : function (context) {
	      style.call(this, createInjector(context));
	    };
	  }

	  if (hook) {
	    if (options.functional) {
	      // register for functional component in vue file
	      var originalRender = options.render;

	      options.render = function renderWithStyleInjection(h, context) {
	        hook.call(context);
	        return originalRender(h, context);
	      };
	    } else {
	      // inject component registration as beforeCreate hook
	      var existing = options.beforeCreate;
	      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
	    }
	  }

	  return script;
	}

	var normalizeComponent_1 = normalizeComponent;

	var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

	function createInjector(context) {
	  return function (id, style) {
	    return addStyle(id, style);
	  };
	}

	var HEAD = document.head || document.getElementsByTagName('head')[0];
	var styles = {};

	function addStyle(id, css) {
	  var group = isOldIE ? css.media || 'default' : id;
	  var style = styles[group] || (styles[group] = {
	    ids: new Set(),
	    styles: []
	  });

	  if (!style.ids.has(id)) {
	    style.ids.add(id);
	    var code = css.source;

	    if (css.map) {
	      // https://developer.chrome.com/devtools/docs/javascript-debugging
	      // this makes source maps inside style tags work properly in Chrome
	      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

	      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
	    }

	    if (!style.element) {
	      style.element = document.createElement('style');
	      style.element.type = 'text/css';
	      if (css.media) style.element.setAttribute('media', css.media);
	      HEAD.appendChild(style.element);
	    }

	    if ('styleSheet' in style.element) {
	      style.styles.push(code);
	      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
	    } else {
	      var index = style.ids.size - 1;
	      var textNode = document.createTextNode(code);
	      var nodes = style.element.childNodes;
	      if (nodes[index]) style.element.removeChild(nodes[index]);
	      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
	    }
	  }
	}

	var browser = createInjector;

	/* script */
	var __vue_script__ = script;
	/* template */

	var __vue_render__ = function __vue_render__() {
	  var _vm = this;

	  var _h = _vm.$createElement;

	  var _c = _vm._self._c || _h;

	  return _c('div', {
	    staticClass: "m-3"
	  }, [_c('div', {
	    staticClass: "m-2"
	  }, [_c('label', [_vm._v(_vm._s(_vm.label))]), _c('br')]), _vm._v(" "), _c('b-row', [_c('b-col', [_vm.enableOptionSearch ? _c('b-form-group', [_c('b-form-input', {
	    class: _vm.optionSearchClass ? _vm.optionSearchClass + " searchBox" : 'searchBox',
	    attrs: {
	      "id": 'optionSearch',
	      "name": 'optionSearch',
	      "type": 'text',
	      "placeholder": 'Search'
	    },
	    model: {
	      value: _vm.optionSearch,
	      callback: function callback($$v) {
	        _vm.optionSearch = $$v;
	      },
	      expression: "optionSearch"
	    }
	  })], 1) : _vm._e()], 1), _vm._v(" "), _c('b-col', [_c('b-form-group', [_c('b-form-input', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: _vm.enableSelectedSearch,
	      expression: "enableSelectedSearch"
	    }],
	    class: _vm.selectedSearch ? _vm.selectedSearch + " searchBox ml-3" : 'searchBox ml-3',
	    attrs: {
	      "id": 'selectedSearch',
	      "name": 'selectedSearch',
	      "type": 'text',
	      "placeholder": 'Search'
	    },
	    model: {
	      value: _vm.selectedSearch,
	      callback: function callback($$v) {
	        _vm.selectedSearch = $$v;
	      },
	      expression: "selectedSearch"
	    }
	  })], 1)], 1)], 1), _vm._v(" "), _c('b-row', [_c('b-col', [_c('b-card-group', {
	    attrs: {
	      "deck": ""
	    }
	  }, [_c('b-card', {
	    class: _vm.optionBoxClass ? _vm.optionBoxClass + " dualBlock p-2" : 'dualBlock p-2'
	  }, _vm._l(_vm.items, function (item, index) {
	    return _c('div', {
	      key: index
	    }, [_c('a', {
	      attrs: {
	        "href": "#"
	      },
	      on: {
	        "click": function click($event) {
	          return _vm.transferToRight(index);
	        }
	      }
	    }, [_vm.textField ? _c('span', [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(item[_vm.textField]) + "\n\t\t\t\t\t\t\t\t")]) : _vm._e(), _vm._v(" "), !_vm.textField ? _c('span', [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(item) + "\n\t\t\t\t\t\t\t\t")]) : _vm._e()])]);
	  }), 0)], 1)], 1), _vm._v(" "), _c('div', {
	    staticClass: "p-1"
	  }, [_c('div', {
	    staticClass: "action mt-3"
	  }, [_c('b-row', [_c('b-button', {
	    class: _vm.moveRightClass ? "" + _vm.moveRightClass : '',
	    attrs: {
	      "type": "button",
	      "variant": "outline-info"
	    },
	    on: {
	      "click": function click($event) {
	        return _vm.transferToRight();
	      }
	    }
	  }, [_vm._v("\n            " + _vm._s(_vm.moveRight) + "\n          ")])], 1), _vm._v(" "), _c('b-row', {
	    staticClass: "mt-2"
	  }, [_c('b-button', {
	    class: _vm.moveLeftClass ? "" + _vm.moveLeftClass : '',
	    attrs: {
	      "type": "button",
	      "variant": "outline-info"
	    },
	    on: {
	      "click": function click($event) {
	        return _vm.transferToLeft();
	      }
	    }
	  }, [_vm._v("\n            " + _vm._s(_vm.moveLeft) + "\n          ")])], 1)], 1)]), _vm._v(" "), _c('b-col', [_c('b-card-group', {
	    attrs: {
	      "deck": ""
	    }
	  }, [_c('b-card', {
	    class: _vm.selectedBoxClass ? _vm.selectedBoxClass + " dualBlock" : 'dualBlock'
	  }, _vm._l(_vm.selectedItems, function (item, index) {
	    return _c('div', {
	      key: index
	    }, [_c('a', {
	      attrs: {
	        "href": "#"
	      },
	      on: {
	        "click": function click($event) {
	          return _vm.transferToLeft(index);
	        }
	      }
	    }, [_vm.textField ? _c('span', [_vm._v("\n                  " + _vm._s(item[_vm.textField]) + "\n                  ")]) : _vm._e(), _vm._v(" "), !_vm.textField ? _c('span', [_vm._v("\n                  " + _vm._s(item) + "\n                  ")]) : _vm._e()])]);
	  }), 0)], 1)], 1)], 1)], 1);
	};

	var __vue_staticRenderFns__ = [];
	/* style */

	var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
	  if (!inject) return;
	  inject("data-v-26f6d980_0", {
	    source: ".dualBlock{height:120px;overflow-y:scroll;font-size:13px}.card-body{padding:4px}.searchBox{width:97%}",
	    map: undefined,
	    media: undefined
	  });
	};
	/* scoped */


	var __vue_scope_id__ = undefined;
	/* module identifier */

	var __vue_module_identifier__ = undefined;
	/* functional template */

	var __vue_is_functional_template__ = false;
	/* style inject SSR */

	var _FormDualList = normalizeComponent_1({
	  render: __vue_render__,
	  staticRenderFns: __vue_staticRenderFns__
	}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, browser, undefined);

	var FormDualList = _FormDualList;

	exports.FormDualList = FormDualList;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
