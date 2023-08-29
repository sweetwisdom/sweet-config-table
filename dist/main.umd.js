(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["main"] = factory(require("vue"));
	else
		root["main"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 203:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-85.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/table/table.vue?vue&type=script&lang=jsx&
/* harmony default export */ var tablevue_type_script_lang_jsx_ = ({
  inheritAttrs: false,
  name: 'EcTable',
  props: {
    data: {
      type: Array
    },
    columns: {
      type: Array
    }
  },
  render() {
    const h = arguments[0];
    const getTableColumn = data => {
      const excludeList = ['index', 'expand', 'selection'];
      const slots = {};
      if (data.headerRender) {
        slots.header = () => data.headerRender();
      }
      if (data.headerSlot) {
        slots.header = () => this.$scopedSlots[data.headerSlot]();
      }
      if (data.render) {
        slots.default = scope => data.render(scope);
      } else if (excludeList.indexOf(data.type) === -1) {
        slots.default = scope => scope.row[data.prop] || '--';
      }
      if (data.slots) {
        slots.default = scope => this.$scopedSlots[data.slots](scope);
      }
      return h("el-table-column", {
        "attrs": {
          "align": "center",
          ...data
        },
        "scopedSlots": slots
      }, [data.children && data.children.map(i => getTableColumn(i))]);
    };
    const tableColumns = this.columns.map(getTableColumn);
    return h("div", [this.$slots.ooz, h("el-table", {
      "attrs": {
        "data": this.data,
        "tooltip-effect": "dark",
        "stripe": true,
        "border": true,
        ...this.$attrs
      },
      "ref": "table",
      "on": {
        ...this.$listeners
      }
    }, [tableColumns])]);
  }
});
;// CONCATENATED MODULE: ./packages/table/table.vue?vue&type=script&lang=jsx&
 /* harmony default export */ var table_tablevue_type_script_lang_jsx_ = (tablevue_type_script_lang_jsx_); 
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

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
  if (moduleIdentifier) {
    // server build
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
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./packages/table/table.vue
var render, staticRenderFns
;



/* normalize component */
;
var component = normalizeComponent(
  table_tablevue_type_script_lang_jsx_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var table = (component.exports);
;// CONCATENATED MODULE: ./packages/table/index.js

/* harmony default export */ var packages_table = (table);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-85.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/show/show.vue?vue&type=template&id=11a3b0a0&scoped=true&
var showvue_type_template_id_11a3b0a0_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div');
};
var showvue_type_template_id_11a3b0a0_scoped_true_staticRenderFns = [];

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-86.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/show/show.vue?vue&type=script&lang=ts&setup=true&


/* harmony default export */ var showvue_type_script_lang_ts_setup_true_ = (/*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
  __name: 'show',
  setup(__props) {
    const state = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.reactive)({
      count: 0
    });
    return {
      __sfc: true,
      state
    };
  }
}));
;// CONCATENATED MODULE: ./packages/show/show.vue?vue&type=script&lang=ts&setup=true&
 /* harmony default export */ var show_showvue_type_script_lang_ts_setup_true_ = (showvue_type_script_lang_ts_setup_true_); 
;// CONCATENATED MODULE: ./packages/show/show.vue





/* normalize component */
;
var show_component = normalizeComponent(
  show_showvue_type_script_lang_ts_setup_true_,
  showvue_type_template_id_11a3b0a0_scoped_true_render,
  showvue_type_template_id_11a3b0a0_scoped_true_staticRenderFns,
  false,
  null,
  "11a3b0a0",
  null
  
)

/* harmony default export */ var show = (show_component.exports);
;// CONCATENATED MODULE: ./packages/show/index.js

show.name = 'ZShow';
/* harmony default export */ var packages_show = ((/* unused pure expression or super */ null && (ZShow)));
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-85.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[4]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/protable/index.vue?vue&type=template&id=a750e3aa&scoped=true&
var protablevue_type_template_id_a750e3aa_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "page-box"
  }, [!!_vm.search ? _c('el-form', {
    ref: "searchForm",
    staticClass: "search",
    attrs: {
      "model": _vm.searchModel,
      "inline": true,
      "label-position": "left",
      "label-width": _vm.search.labelWidth
    }
  }, [_vm._l(_vm.search.fields, function (item) {
    return _c('el-form-item', {
      key: item.name,
      attrs: {
        "label": item.label,
        "prop": item.name
      }
    }, [item.type === 'custom' ? _vm._t(item.slot) : item.type === 'select' ? _c('el-select', {
      style: {
        width: _vm.search.inputWidth,
        ...item.style
      },
      attrs: {
        "filterable": !!item.filterable,
        "multiple": !!item.multiple,
        "clearable": "",
        "placeholder": `请选择${item.label}`
      },
      model: {
        value: _vm.searchModel[item.name],
        callback: function ($$v) {
          _vm.$set(_vm.searchModel, item.name, $$v);
        },
        expression: "searchModel[item.name]"
      }
    }, _vm._l(item.options, function (option) {
      return _c('el-option', {
        key: option.value,
        attrs: {
          "label": option.name,
          "value": option.value
        }
      });
    }), 1) : item.type === 'radio' ? _c('el-radio-group', {
      style: {
        width: _vm.search.inputWidth,
        ...item.style
      },
      model: {
        value: _vm.searchModel[item.name],
        callback: function ($$v) {
          _vm.$set(_vm.searchModel, item.name, $$v);
        },
        expression: "searchModel[item.name]"
      }
    }, _vm._l(item.options, function (option) {
      return _c('el-radio', {
        key: option.value,
        attrs: {
          "label": option.value
        }
      }, [_vm._v(_vm._s(option.name))]);
    }), 1) : item.type === 'radio-button' ? _c('el-radio-group', {
      style: {
        width: _vm.search.inputWidth,
        ...item.style
      },
      model: {
        value: _vm.searchModel[item.name],
        callback: function ($$v) {
          _vm.$set(_vm.searchModel, item.name, $$v);
        },
        expression: "searchModel[item.name]"
      }
    }, _vm._l(item.options, function (option) {
      return _c('el-radio-button', {
        key: option.value,
        attrs: {
          "label": option.value
        }
      }, [_vm._v(_vm._s(option.name))]);
    }), 1) : item.type === 'checkbox' ? _c('el-checkbox-group', {
      style: {
        width: _vm.search.inputWidth,
        ...item.style
      },
      model: {
        value: _vm.searchModel[item.name],
        callback: function ($$v) {
          _vm.$set(_vm.searchModel, item.name, $$v);
        },
        expression: "searchModel[item.name]"
      }
    }, _vm._l(item.options, function (option) {
      return _c('el-checkbox', {
        key: option.value,
        attrs: {
          "label": option.value
        }
      }, [_vm._v(_vm._s(option.name))]);
    }), 1) : item.type === 'checkbox-button' ? _c('el-checkbox-group', {
      style: {
        width: _vm.search.inputWidth,
        ...item.style
      },
      model: {
        value: _vm.searchModel[item.name],
        callback: function ($$v) {
          _vm.$set(_vm.searchModel, item.name, $$v);
        },
        expression: "searchModel[item.name]"
      }
    }, _vm._l(item.options, function (option) {
      return _c('el-checkbox-button', {
        key: option.value,
        attrs: {
          "label": option.value
        }
      }, [_vm._v(_vm._s(option.name))]);
    }), 1) : item.type === 'date' ? _c('el-date-picker', {
      style: {
        width: _vm.search.inputWidth,
        ...item.style
      },
      attrs: {
        "type": "date",
        "value-format": "yyyy-MM-dd",
        "placeholder": `请选择${item.label}`
      },
      model: {
        value: _vm.searchModel[item.name],
        callback: function ($$v) {
          _vm.$set(_vm.searchModel, item.name, $$v);
        },
        expression: "searchModel[item.name]"
      }
    }) : item.type === 'datetime' ? _c('el-date-picker', {
      style: {
        width: _vm.search.inputWidth,
        ...item.style
      },
      attrs: {
        "type": "datetime",
        "value-format": "yyyy-MM-dd HH:mm:ss",
        "clearable": "",
        "placeholder": `请选择${item.label}`
      },
      model: {
        value: _vm.searchModel[item.name],
        callback: function ($$v) {
          _vm.$set(_vm.searchModel, item.name, $$v);
        },
        expression: "searchModel[item.name]"
      }
    }) : item.type === 'daterange' ? _c('el-date-picker', {
      style: {
        width: _vm.search.inputWidth,
        ...item.style
      },
      attrs: {
        "type": "daterange",
        "value-format": "yyyy-MM-dd",
        "range-separator": "-",
        "start-placeholder": "开始日期",
        "end-placeholder": "结束日期",
        "clearable": ""
      },
      on: {
        "change": function ($event) {
          return _vm.handleDateChange($event, item);
        }
      },
      model: {
        value: _vm.searchModel[item.name],
        callback: function ($$v) {
          _vm.$set(_vm.searchModel, item.name, $$v);
        },
        expression: "searchModel[item.name]"
      }
    }) : item.type === 'datetimerange' ? _c('el-date-picker', {
      style: {
        width: _vm.search.inputWidth,
        ...item.style
      },
      attrs: {
        "type": "datetimerange",
        "value-format": "yyyy-MM-dd HH:mm:ss",
        "range-separator": "-",
        "start-placeholder": "开始时间",
        "end-placeholder": "结束时间",
        "clearable": ""
      },
      on: {
        "change": function ($event) {
          return _vm.handleDateChange($event, item);
        }
      },
      model: {
        value: _vm.searchModel[item.name],
        callback: function ($$v) {
          _vm.$set(_vm.searchModel, item.name, $$v);
        },
        expression: "searchModel[item.name]"
      }
    }) : item.type === 'number' ? _c('el-input-number', {
      style: {
        width: _vm.search.inputWidth,
        ...item.style
      },
      attrs: {
        "placeholder": `请输入${item.label}`,
        "controls-position": "right",
        "min": item.min,
        "max": item.max
      },
      model: {
        value: _vm.searchModel[item.name],
        callback: function ($$v) {
          _vm.$set(_vm.searchModel, item.name, $$v);
        },
        expression: "searchModel[item.name]"
      }
    }) : item.type === 'textarea' ? _c('el-input', {
      style: {
        width: _vm.search.inputWidth,
        ...item.style
      },
      attrs: {
        "type": "textarea",
        "clearable": "",
        "placeholder": `请输入${item.label}`
      },
      model: {
        value: _vm.searchModel[item.name],
        callback: function ($$v) {
          _vm.$set(_vm.searchModel, item.name, $$v);
        },
        expression: "searchModel[item.name]"
      }
    }) : _c('el-input', {
      style: {
        width: _vm.search.inputWidth,
        ...item.style
      },
      attrs: {
        "placeholder": `请输入${item.label}`,
        "clearable": ""
      },
      model: {
        value: _vm.searchModel[item.name],
        callback: function ($$v) {
          _vm.$set(_vm.searchModel, item.name, $$v);
        },
        expression: "searchModel[item.name]"
      }
    })], 2);
  }), _c('el-form-item', {
    staticClass: "search-btn"
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "icon": "el-icon-search"
    },
    on: {
      "click": _vm.handleSearch
    }
  }, [_vm._v("查询")]), _c('el-button', {
    attrs: {
      "icon": "el-icon-refresh-right"
    },
    on: {
      "click": _vm.handleReset
    }
  }, [_vm._v("重置")])], 1)], 2) : _vm._e(), !_vm.hideTitleBar ? _c('div', {
    staticClass: "head"
  }, [_vm._t("title", function () {
    return [_c('span', {
      staticClass: "title"
    }, [_vm._v(_vm._s(_vm.title))])];
  }), _c('div', {
    staticClass: "toolbar"
  }, [_vm._t("toolbar")], 2)], 2) : _vm._e(), _c('div', {
    staticClass: "table"
  }, [_c('el-table', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: _vm.loading,
      expression: "loading"
    }],
    ref: "table",
    attrs: {
      "data": _vm.tableData,
      "row-key": _vm.rowKey,
      "tree-props": _vm.tree.treeProps,
      "lazy": _vm.tree.lazy,
      "load": _vm.tree.load,
      "tooltip-effect": "dark",
      "height": "100%",
      "stripe": "",
      "border": _vm.border
    },
    on: {
      "selection-change": _vm.handleSelectionChange
    }
  }, _vm._l(_vm.columns, function (item) {
    return _c('el-table-column', _vm._b({
      key: item.label,
      attrs: {
        "filter-method": item.filters && _vm.filterHandler,
        "show-overflow-tooltip": !item.wrap
      },
      scopedSlots: _vm._u([!!item.labelSlot ? {
        key: "header",
        fn: function (scope) {
          return [_vm._t(item.labelSlot, null, null, scope)];
        }
      } : null, !!item.tdSlot ? {
        key: "default",
        fn: function (scope) {
          return [_vm._t(item.tdSlot, null, null, scope)];
        }
      } : null], null, true)
    }, 'el-table-column', item, false));
  }), 1)], 1), _vm.paginationConfig.show && _vm.total > 0 ? _c('el-pagination', {
    staticClass: "pagination",
    style: _vm.paginationConfig.style,
    attrs: {
      "current-page": _vm.pageNum,
      "page-sizes": _vm.paginationConfig.pageSizes,
      "page-size": _vm.pageSize,
      "layout": _vm.paginationConfig.layout,
      "total": _vm.total
    },
    on: {
      "size-change": _vm.handleSizeChange,
      "update:currentPage": function ($event) {
        _vm.pageNum = $event;
      },
      "update:current-page": function ($event) {
        _vm.pageNum = $event;
      },
      "current-change": _vm.handleCurrentChange,
      "update:pageSize": function ($event) {
        _vm.pageSize = $event;
      },
      "update:page-size": function ($event) {
        _vm.pageSize = $event;
      }
    }
  }) : _vm._e()], 1);
};
var protablevue_type_template_id_a750e3aa_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-85.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/protable/index.vue?vue&type=script&lang=js&
const getSearchModel = search => {
  const searchModel = {};
  if (search && search.fields) {
    search.fields.forEach(item => {
      switch (item.type) {
        case 'checkbox':
        case 'checkbox-button':
          searchModel[item.name] = [];
          break;
        default:
          break;
      }
      if (item.defaultValue !== undefined) {
        searchModel[item.name] = item.defaultValue;
        // 日期范围和时间范围真实变量默认值
        if ((item.type === 'daterange' || item.type === 'datetimerange') && !!item.trueNames && Array.isArray(item.defaultValue)) {
          item.defaultValue.forEach((val, index) => {
            searchModel[item.trueNames[index]] = val;
          });
        }
      }
    });
  }
  return searchModel;
};
/* harmony default export */ var protablevue_type_script_lang_js_ = ({
  name: 'ProTable',
  props: {
    // 请求数据的方法
    request: {
      type: Function
    },
    // 表格标题
    title: {
      type: String,
      default: ''
    },
    // 是否隐藏标题栏
    hideTitleBar: {
      type: Boolean,
      default: false
    },
    // 搜索表单配置，false表示不显示搜索表单
    search: {
      type: [Boolean, Object],
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    // 表头配置
    columns: {
      type: Array,
      default: function (params) {
        return [];
      }
    },
    // 行数据的Key，同elementUI的table组件的row-key
    rowKey: {
      type: String,
      default: 'id'
    },
    // 分页配置，false表示不显示分页
    pagination: {
      type: [Boolean, Object],
      default: () => ({})
    },
    tree: {
      type: Object,
      default: () => ({})
    }
  },
  components: {},
  data() {
    let paginationConfig = {
      show: false
    };
    if (typeof this.pagination === 'object') {
      const {
        layout,
        pageSizes,
        style
      } = this.pagination;
      paginationConfig = {
        show: true,
        layout: layout || 'total, sizes, prev, pager, next, jumper',
        pageSizes: pageSizes || [10, 20, 30, 40, 50, 100],
        style: style || {}
      };
    }
    return {
      searchModel: getSearchModel(this.search),
      loading: false,
      tableData: [],
      total: 0,
      pageNum: 1,
      pageSize: !!this.pagination && this.pagination.pageSize || 10,
      paginationConfig
    };
  },
  created() {
    // 请求列表数据
    this.getTableData();
  },
  methods: {
    // 请求列表数据
    async getTableData() {
      this.loading = true;
      const searchModel = this.optimizeFields(this.search);
      const {
        data,
        total
      } = await this.request({
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        ...searchModel
      });
      this.loading = false;
      this.tableData = data;
      this.total = total;
    },
    // 搜索
    handleSearch() {
      this.pageNum = 1;
      this.getTableData();
    },
    // 重置函数
    handleReset() {
      if (JSON.stringify(this.searchModel) === '{}') {
        return;
      }
      this.pageNum = 1;
      this.searchModel = getSearchModel(this.search);
      this.getTableData();
    },
    // 刷新
    refresh() {
      this.getTableData();
    },
    // 优化搜索字段，
    // 1、如果搜索配置有transform处理函数，执行transform
    // 2、删除日期范围默认的name字段
    optimizeFields(search) {
      const searchModel = JSON.parse(JSON.stringify(this.searchModel));
      if (search && search.fields) {
        search.fields.forEach(item => {
          if (!searchModel.hasOwnProperty(item.name)) {
            return;
          }
          if (!!item.transform) {
            searchModel[item.name] = item.transform(searchModel[item.name]);
          }
          if ((item.type === 'daterange' || item.type === 'datetimerange') && !!item.trueNames) {
            delete searchModel[item.name];
          }
        });
      }
      return searchModel;
    },
    // 当前页变化
    handleCurrentChange(page) {
      this.getTableData();
    },
    // 改变每页size数量
    handleSizeChange(value) {
      this.pageNum = 1;
      this.getTableData();
    },
    // 全选
    handleSelectionChange(arr) {
      this.$emit('selectionChange', arr);
    },
    // 过滤方法
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    },
    // 日期范围
    handleDateChange(value, item) {
      if (!item.trueNames) {
        return;
      }
      if (!!value) {
        value.forEach((val, index) => {
          this.searchModel[item.trueNames[index]] = val;
        });
      } else {
        item.trueNames.forEach(key => {
          delete this.searchModel[key];
        });
      }
    }
  }
});
;// CONCATENATED MODULE: ./packages/protable/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_protablevue_type_script_lang_js_ = (protablevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-67.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-67.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-67.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-67.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/protable/index.vue?vue&type=style&index=0&id=a750e3aa&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/protable/index.vue?vue&type=style&index=0&id=a750e3aa&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ./packages/protable/index.vue



;


/* normalize component */

var protable_component = normalizeComponent(
  packages_protablevue_type_script_lang_js_,
  protablevue_type_template_id_a750e3aa_scoped_true_render,
  protablevue_type_template_id_a750e3aa_scoped_true_staticRenderFns,
  false,
  null,
  "a750e3aa",
  null
  
)

/* harmony default export */ var protable = (protable_component.exports);
;// CONCATENATED MODULE: ./packages/protable/index.js

/* harmony default export */ var packages_protable = (protable);
;// CONCATENATED MODULE: ./packages/index.js
// 入口文件
// import ZButton from './button';




// const components = [ZButton, ZTable, ZShow];
const components = [packages_protable, packages_table];
// 全局注册组件
const install = function (Vue) {
  if (install.installed) return; // 防止重复安装
  install.installed = true; // 标记已安装
  // 遍历注册全局组件

  components.map(component => Vue.component(component.name, component));
};
/* harmony default export */ var packages_0 = ({
  install
});
// 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_0);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});