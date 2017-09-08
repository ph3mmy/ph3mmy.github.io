webpackJsonp([2],{

/***/ "../../../../../src/assets/img/rock.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "rock.473eb212519235402020.jpg";

/***/ }),

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n.app-name {\n  height: 100%;\n  background-size:100% 100%;\n  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(" + __webpack_require__("../../../../../src/assets/img/rock.jpg") + ") no-repeat center;\n  padding-top: 10px;\n}\n\n.form-spacer {\n  padding: 30px;\n}\n.form-margin {\n  margin: 30px;\n}\n\n.padding-ten {\n  padding: 10px;\n}\n\na.disabled {\n  pointer-events: none;\n  cursor: not-allowed;\n}\n\n\n.auth-title {\n  font-family: Roboto, cursive;\n  font-size: 4vw;\n  font-style: normal;\n  font-variant: normal;\n  line-height: 1.2;\n  display: inline;\n  -ms-flex-item-align: center !important;\n      -ms-grid-row-align: center !important;\n      align-self: center !important;\n  white-space: inherit;\n  font-weight: 700;\n  color: white;\n}\n\n.flex-cont {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column wrap;\n          flex-flow: column wrap;\n  -webkit-box-pack: center !important;\n      -ms-flex-pack: center !important;\n          justify-content: center !important;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center !important;\n      align-content: center !important;\n}\n\n.flex-centered {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 100% !important;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column wrap;\n          flex-flow: column wrap;\n  -webkit-box-pack: center !important;\n      -ms-flex-pack: center !important;\n          justify-content: center !important;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center !important;\n      align-content: center !important;\n}\n\n.flex-center-both {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: auto;\n  width: auto;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.flex-left-both {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: auto;\n  -webkit-box-orient:horizontal;\n  -webkit-box-direction:normal;\n      -ms-flex-flow:row wrap ;\n          flex-flow:row wrap ;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.flex-right-both {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: auto;\n  -webkit-box-orient:vertical;\n  -webkit-box-direction:normal;\n      -ms-flex-flow:column wrap ;\n          flex-flow:column wrap ;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n\n.flexcontainer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: inherit !important; /* works with row or column */\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.flex-container-box {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around ;\n}\n\n.flex-col-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column wrap;\n          flex-flow: column wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n/*shape styles*/\n\n.build-menu-selector {\n  text-align: center;\n  position: relative;\n}\n\n.build-menu-selector:after {\n  content: ' ';\n  width: 0;\n  height: 0;\n  display: block;\n  border-left: 15px solid transparent;\n  border-right: 15px solid transparent;\n  border-top: 15px solid #4caf50;\n  position: relative;\n  margin-top: -5px;\n  left: 38%;\n}\n\n.build-menu-selector-cyan:after {\n  border-top: 15px solid #00cc99 !important;\n}\n\n.build-menu-selector-green:after {\n  border-top: 15px solid #ade111 !important;\n}\n\n.build-menu-selector-yellow:after {\n  border-top: 15px solid #ffcc00 !important;\n}\n\n.build-menu-selector-blue:after {\n  border-top: 15px solid #339999 !important;\n}\n\n.build-menu-selector-orange:after {\n  border-top: 15px solid #ff6600 !important;\n}\n\n.build-menu-selector-primary:after {\n  border-top: 15px solid #4caf50 !important;\n}\n\n\n.wizard li {\n  background: #efefef;\n  display: inline-block;\n  margin-right: 5px;\n  min-width: 150px;\n  outline: none;\n  padding: 10px 40px 10px;\n  position: relative;\n  text-decoration: none;\n}\n\n.wizard .active {\n  background: #007ACC;\n  color: #fff;\n}\n\n.wizard li:before {\n  width: 0;\n  height: 0;\n  border-top: 25px inset transparent;\n  border-bottom: 35px inset transparent;\n  border-left: 20px solid #fff;\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n}\n\n.wizard li:after {\n  width: 0;\n  height: 0;\n  border-top: 35px inset transparent;\n  border-bottom: 25px inset transparent;\n  border-left: 21px solid #efefef;\n  position: absolute;\n  content: \"\";\n  top: 0;\n  right: -20px;\n  z-index: 2;\n}\n\n.wizard li:first-child:before,\n.wizard li:last-child:after {\n  border: none;\n}\n\n.wizard li.active:after {\n  border-left: 21px solid #007ACC;\n}\n\n\n.flex-item-box {\n  padding: 5px;\n  width: 280px;\n  height: auto;\n  line-height: normal;\n  margin: 0;\n  color: white;\n  font-weight: normal;\n  font-size: 2em;\n}\n\n.flex-theme-box {\n  padding: 5px;\n  width: 280px;\n  height: 400px;\n  line-height: normal;\n  margin: 5px;\n  color: white;\n  font-weight: 200;\n  font-size: 1.5em;\n}\n.flex-submenu-box {\n  padding: 5px;\n  width: 36px;\n  height: 36px;\n  line-height: 36px;\n  margin: 0;\n  color: white;\n  font-weight: normal;\n  font-size: 2em;\n}\n\n.flex-item-box-menu {\n  padding: 5px;\n  width: 120px;\n  height: 120px;\n  line-height: 120px;\n  margin: 5px;\n  color: white;\n  font-weight: normal;\n  font-size: 2em;\n  text-align: center;\n}\n\n.flex-item-box-submenu {\n  padding: 0;\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  margin: 5px;\n  color: darkgray;\n  background: transparent;\n  font-weight: normal;\n  font-size: 2em;\n  text-align: center;\n}\n\n.flex-bae {\n  margin-top: 10px;\n  -ms-flex-item-align: auto !important;\n      -ms-grid-row-align: auto !important;\n      align-self: auto !important;\n}\n\n.flex-item-tabnav {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0px;\n          flex: 1 1 0;\n  text-align: center;\n  margin: 0;\n}\n\n\n.box-submenu-grey {\n  background-color: #f6f6f6 !important;\n  /*border: 1px double #c5c5c5!important;*/\n  color: #666;\n  width: auto !important;\n  height: auto;\n  margin: 13px;\n  padding: 0!important;\n  /*background: transparent;*/\n  text-align: center;\n}\n\n.box-submenu2-grey {\n  background-color: #f6f6f6 !important;\n  /*border: 1px double #c5c5c5!important;*/\n  color: #666;\n  width: auto !important;\n  height: auto;\n  margin: 15px;\n  padding: 0!important;\n  /*background: transparent;*/\n  text-align: center;\n}\n\n.side-nav-circle {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  background: #4caf50;\n  line-height: 120px;\n  font-size: 40px;\n  text-align: center;\n  color: white;\n  font-weight: bold;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.reg-title {\n  font-family: Roboto, sans-serif;\n  font-size: 3.5vw;\n  font-style: normal;\n  font-variant: normal;\n  margin: 0 !important;\n  line-height: 1;\n  display: inline;\n  -ms-flex-item-align: center !important;\n      -ms-grid-row-align: center !important;\n      align-self: center !important;\n  white-space: pre-wrap;\n  font-weight: 500;\n  color: white;\n}\n\n/*font related styles*/\n.reg-subtitle {\n  font-family: Roboto-Thin, monospace;\n  font-size: 3vw;\n  font-style: normal;\n  font-variant: normal;\n  line-height: 1;\n  display: inline;\n  white-space: pre-wrap;\n  color: white;\n}\n\n.subtitle-thin-text {\n  font-size: x-small;\n  font-weight: 400;\n  color: #999;\n}\n\n.font-title-text {\n  color: #666;\n  font-weight: 300;\n  font-size: larger;\n}\n.sidebar-name-text {\n  color: #fff;\n  font-weight: 500;\n  font-size: medium;\n  text-align: center;\n  width: auto;\n  height: auto;\n  margin-top: 10px;\n}\n.sidebar-sub-text {\n  color: #ddd;\n  font-weight: 300;\n  font-size: small;\n  text-align: center;\n  width: auto;\n  height: auto;\n}\n\n.brand-text {\n  font-size: 32px;\n}\n/*end of font and text syles*/\n\n.login-page-pad {\n  position: relative;\n  z-index: 3;\n  padding-top: 15vh !important;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  max-height: 100%;\n}\n\n.validator-error {\n  padding: 0 0 0 5rem;\n  margin: -10px 0 -5px 5px;\n  font-size: x-small;\n  color: red;\n}\n.reg-margin {\n  margin-top: -1px !important;\n  padding: 0 0 0 6rem !important;\n}\n\n#auth-page {\n@extend .auth-title;\n}\n\n.justify-content-md-start {\n  -webkit-box-pack:start!important;\n  -ms-flex-pack:start!important;\n  justify-content:flex-start!important\n}\n.justify-content-md-end {\n  -webkit-box-pack:end!important;\n  -ms-flex-pack:end!important;\n  justify-content:flex-end!important\n}\n.justify-content-md-center {\n  -webkit-box-pack:center!important;\n  -ms-flex-pack:center!important;\n  justify-content:center!important\n}\n.justify-content-md-between {\n  -webkit-box-pack:justify!important;\n  -ms-flex-pack:justify!important;\n  justify-content:space-between!important\n}\n\n.align-items-md-start {\n  -webkit-box-align:start!important;\n  -ms-flex-align:start!important;\n  align-items:flex-start!important\n}\n.align-items-md-end {\n  -webkit-box-align:end!important;\n  -ms-flex-align:end!important;\n  align-items:flex-end!important\n}\n.align-items-md-center {\n  -webkit-box-align:center!important;\n  -ms-flex-align:center!important;\n  align-items:center!important\n}\n.align-items-md-baseline {\n  -webkit-box-align:baseline!important;\n  -ms-flex-align:baseline!important;\n  align-items:baseline!important\n}\n.align-items-md-stretch {\n  -webkit-box-align:stretch!important;\n  -ms-flex-align:stretch!important;\n  align-items:stretch!important\n}\n.align-content-md-start {\n  -ms-flex-line-pack:start!important;\n  align-content:flex-start!important\n}\n.align-content-md-end {\n  -ms-flex-line-pack:end!important;\n  align-content:flex-end!important\n}\n.align-content-md-center {\n  -ms-flex-line-pack:center!important;\n  align-content:center!important\n}\n.align-content-md-between {\n  -ms-flex-line-pack:justify!important;\n  align-content:space-between!important\n}\n.align-content-md-around {\n  -ms-flex-line-pack:distribute!important;\n  align-content:space-around!important\n}\n.align-content-md-stretch {\n  -ms-flex-line-pack:stretch!important;\n  align-content:stretch!important\n}\n.align-self-md-auto {\n  -webkit-align-self:auto!important;\n  -ms-flex-item-align:auto!important;\n  -ms-grid-row-align:auto!important;\n  align-self:auto!important\n}\n.align-self-md-start {\n  -webkit-align-self:flex-start!important;\n  -ms-flex-item-align:start!important;\n  align-self:flex-start!important\n}\n.align-self-md-end {\n  -webkit-align-self:flex-end!important;\n  -ms-flex-item-align:end!important;\n  align-self:flex-end!important\n}\n.align-self-md-center {\n  -webkit-align-self:center!important;\n  -ms-flex-item-align:center!important;\n  -ms-grid-row-align:center!important;\n  align-self:center!important\n}\n.align-self-md-baseline {\n  -webkit-align-self:baseline!important;\n  -ms-flex-item-align:baseline!important;\n  align-self:baseline!important\n}\n.align-self-md-stretch {\n  -webkit-align-self:stretch!important;\n  -ms-grid-row-align:stretch!important;\n  -ms-flex-item-align:stretch!important;\n      align-self:stretch!important\n}\n\n.btn-white-border {\n  background: Transparent no-repeat;\n  cursor:pointer;\n  overflow: hidden;\n  outline:none;\n  line-height: .2;\n  border:  0.1em solid white;\n  display:  inline-block;\n  -ms-flex-item-align: center !important;\n      -ms-grid-row-align: center !important;\n      align-self: center !important;\n  float:  none;\n  padding: 5px;\n  text-align:  center;\n  font-size:  14px;\n  color:  #fff;\n}\n\n.btn-white-border:hover  {\n  color:  #fff;\n  background:  rgba(255, 255, 255, 0.2);\n  transition:box-shadow .45s;\n  box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)\n}\n\n.btn-grey-border {\n  background-color: transparent !important;\n  border: 1px solid #e5e5e5!important;\n  -ms-flex-item-align: center !important;\n      -ms-grid-row-align: center !important;\n      align-self: center !important;\n  color: #666;\n}\n\n.btn-grey-border:hover {\n  /*background-color: white !important;*/\n  background: #4caf50 !important;\n  color: white !important;\n  /*border: 1px solid #4caf50!important;*/\n  box-shadow: 0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px\n  rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12);\n}\n\n.btn-white-border-pri {\n  background-color: white !important;\n  border: 1px solid #c5c5c5!important;\n  color: #666;\n}\n\n.btn-white-border-pri:hover {\n  /*background-color: white !important;*/\n  background: white !important;\n  color: #4caf50 !important;\n  font-weight: 500;\n  border-color: #4caf50;\n}\n\n.dotted-border-box {\n  background-color: transparent !important;\n  border: 1px dashed #999!important;\n  -ms-flex-item-align: start !important;\n      align-self: flex-start !important;\n  color: #666;\n  padding: 10px !important;\n}\n\n.solid-border-box {\n  background-color: transparent !important;\n  border: 1px solid #f2f2f2!important;\n  -ms-flex-item-align: start !important;\n      align-self: flex-start !important;\n  color: #666;\n  padding-bottom: -10px !important;\n}\n\n.solid-border-heading {\n  color:#333;\n  font-size: medium;\n  background-color:#e9e9e9;\n  border-color:#ddd;\n  padding: 10px;\n  margin: -1px 0 0 0!important;\n}\n\n.btn-transparent {\n  background-color: transparent !important;\n  border: 1px solid #fff!important;\n  -ms-flex-item-align: center !important;\n      -ms-grid-row-align: center !important;\n      align-self: center !important;\n}\n.btn-transparent:hover {\n  /*background-color: white !important;*/\n  background: #4caf50 !important;\n  color: white !important;\n  border: 1px solid #4caf50!important;\n  box-shadow: 0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px\n  rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12);\n}\n\n.sc-tal {\n  border: 1px solid #a5a5a5;\n  border-radius: 30px;\n  display: inline-block;\n  font-size: 16px;\n  line-height: 16px;\n  padding: 10px;\n  text-align: center;\n}\n.navbar-elevation {\n  box-shadow: 1px 4px 7px -6px rgba(0,0,0,0.75);\n}\n\n/*image related styles*/\n.container-photo {\n  width: 280px;\n  height: 400px !important;\n}\n\n/* resize images */\n.container-photo img {\n  width: 100%;\n  height: auto !important;\n  /*height: auto;*/\n}\n\n/*select style*/\n.selcls {\n  padding: 9px;\n  border: solid 1px #517B97;\n  outline: 0;\n  background: -moz-linear-gradient(top, #FFFFFF, #CAD9E3 1px, #FFFFFF 25px);\n  box-shadow: rgba(0,0,0, 0.1) 0px 0px 8px;\n  -moz-box-shadow: rgba(0,0,0, 0.1) 0px 0px 8px;\n  -webkit-box-shadow: rgba(0,0,0, 0.1) 0px 0px 8px;\n\n}\n\n/*menu scroll css classes*/\n/* Styles go here */\n\n\n.bootstrap-select1 {\n  max-width: 200px;\n}\n.bootstrap-select1 .btn {\n  background-color: #141414;\n  border-style: solid;\n  border-left-width: 3px;\n  border-left-color: #00DDDD;\n  border-top: none;\n  border-bottom: none;\n  border-right: none;\n  color: white;\n  font-weight: 200;\n  padding: 12px 12px;\n  font-size: 16px;\n  margin-bottom: 10px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.bootstrap-select1 .dropdown-menu {\n  margin: 15px 0 0;\n}\nselect::-ms-expand {\n  /* for IE 11 */\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map