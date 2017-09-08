webpackJsonp([0],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/admindashboard/admin-apps/admin-apps.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admindashboard/admin-apps/admin-apps.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-apps works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/admindashboard/admin-apps/admin-apps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAppsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminAppsComponent = (function () {
    function AdminAppsComponent() {
    }
    AdminAppsComponent.prototype.ngOnInit = function () {
    };
    return AdminAppsComponent;
}());
AdminAppsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-apps',
        template: __webpack_require__("../../../../../src/app/admindashboard/admin-apps/admin-apps.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admindashboard/admin-apps/admin-apps.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdminAppsComponent);

//# sourceMappingURL=admin-apps.component.js.map

/***/ }),

/***/ "../../../../../src/app/admindashboard/admin-sub/admin-sub.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admindashboard/admin-sub/admin-sub.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading flex-center-both\" style=\"margin-top: -10rem\">\n        <h3 class=\"info info-title\">Statistics</h3></div>\n      <div class=\"panel-body\">\n        <div class=\"row\">\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n            <div class=\"card card-stats\">\n              <div class=\"card-header\" data-background-color=\"orange\">\n                <i class=\"material-icons\">face</i>\n              </div>\n              <div class=\"card-content\">\n                <p class=\"category\">Registered Users</p>\n                <h3 class=\"card-title\">184</h3>\n              </div>\n              <div class=\"card-footer\">\n                <div class=\"stats\">\n                  <i class=\"material-icons\">date_range</i> <b>5</b> newly registered today\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n            <div class=\"card card-stats\">\n              <div class=\"card-header\" data-background-color=\"red\">\n                <i class=\"material-icons\">equalizer</i>\n              </div>\n              <div class=\"card-content\">\n                <p class=\"category\">Themes</p>\n                <h3 class=\"card-title\">{{themSize}}</h3>\n              </div>\n              <div class=\"card-footer\">\n                <div class=\"stats\">\n                  <i class=\"material-icons\">local_offer</i> Most used theme: <b>Material simple</b>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n            <div class=\"card card-stats\">\n              <div class=\"card-header\" data-background-color=\"blue\">\n                <i class=\"material-icons\">store</i>\n              </div>\n              <div class=\"card-content\">\n                <p class=\"category\">All Apps</p>\n                <h3 class=\"card-title\">45</h3>\n              </div>\n              <div class=\"card-footer\">\n                <div class=\"stats\">\n                  <i class=\"material-icons\">date_range</i> Last 24 Hours\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <!--    <div class=\"panel panel-default\">\n          <div class=\"panel-heading flex-center-both\">\n            <h3 class=\"info info-title\">Action Menu</h3></div>\n          <div class=\"panel-body\">\n            <div class=\"row\">\n              <div class=\"col-sm-12\">\n                <div class=\"card\" style=\"padding: 0!important;\">\n                  <div class=\"card-header\">\n                    <ul class=\"nav nav-pills nav-pills-icons flex-container-box\"\n                        style=\"margin: -15px -20px 0 -20px!important;\">\n                      <li class=\"flex-item-tabnav\" [routerLinkActive]=\"['active']\"><a [routerLink]=\"['./users']\" style=\"box-shadow: none!important;\" data-toggle=\"tab\">Users</a></li>\n                      <li class=\"flex-item-tabnav\" [routerLinkActive]=\"['active']\"><a [routerLink]=\"['./themes']\" data-toggle=\"tab\">Themes</a></li>\n                      <li class=\"flex-item-tabnav\" [routerLinkActive]=\"['active']\"><a [routerLink]=\"['./apps']\" data-toggle=\"tab\">Apps</a></li>\n                    </ul>\n                  </div>\n                  <div class=\"card-content\">\n                    <router-outlet></router-outlet>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>-->\n\n\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading flex-center-both\">\n        <h3 class=\"info info-title\">Action Menu</h3></div>\n      <div class=\"panel-body\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"card\">\n              <div class=\"card-header card-header-tabs\" data-background-color=\"green\">\n                <div class=\"nav-tabs-navigation\">\n                  <div class=\"nav-tabs-wrapper\">\n                    <!--<span class=\"nav-tabs-title\">Tasks:</span>-->\n                    <ul class=\"nav nav-tabs flex-container-box\" data-tabs=\"tabs\">\n                      <li class=\"flex-item-tabnav\" [routerLinkActive]=\"['active']\">\n                        <a [routerLink]=\"['./users']\" data-toggle=\"tab\">Users</a>\n                      </li>\n                      <li class=\"flex-item-tabnav\" [routerLinkActive]=\"['active']\">\n                        <a [routerLink]=\"['./themes']\" data-toggle=\"tab\">Themes</a>\n                      </li>\n                      <li class=\"flex-item-tabnav\" [routerLinkActive]=\"['active']\">\n                        <a [routerLink]=\"['./apps']\" data-toggle=\"tab\">Apps</a></li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card-content\">\n                <div class=\"tab-content\">\n                  <router-outlet></router-outlet>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admindashboard/admin-sub/admin-sub.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_theme_service__ = __webpack_require__("../../../../../src/app/shared/service/theme.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model_ThemeResponse__ = __webpack_require__("../../../../../src/app/shared/model/ThemeResponse.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminSubComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminSubComponent = (function () {
    function AdminSubComponent(themeService) {
        this.themeService = themeService;
        this.themeService.getAndSetTheme();
    }
    AdminSubComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.themes = new __WEBPACK_IMPORTED_MODULE_2__shared_model_ThemeResponse__["a" /* ThemeResponse */];
        this.busy = this.themeService.getAllThemes().subscribe(function (res) {
            _this.themes = res;
            console.log('size in admin-sub == ' + res);
            _this.themSize = _this.themes.themes.length;
        }, function (error) {
            _this.themSize = 0;
            console.log('size ERROR in admin-sub == ' + error);
        });
    };
    AdminSubComponent.prototype.ngOnDestroy = function () {
        this.busy.unsubscribe();
    };
    return AdminSubComponent;
}());
AdminSubComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-sub',
        template: __webpack_require__("../../../../../src/app/admindashboard/admin-sub/admin-sub.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admindashboard/admin-sub/admin-sub.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_theme_service__["a" /* ThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_theme_service__["a" /* ThemeService */]) === "function" && _a || Object])
], AdminSubComponent);

var _a;
//# sourceMappingURL=admin-sub.component.js.map

/***/ }),

/***/ "../../../../../src/app/admindashboard/admin-theme/admin-theme.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admindashboard/admin-theme/admin-theme.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"padding: 10px\">\n  <div class=\"col\">\n    <div class=\"text-center\">\n      <button class=\"btn btn-fab btn-white btn-fab-mini\" rel=\"tooltip\" title=\"Add a New theme\"\n              data-toggle=\"modal\" data-target=\"#addThemeModal\">\n        <i class=\"material-icons\">add</i></button>\n    </div>\n    <div class=\"table-responsive\">\n      <form [formGroup]=\"editThemeForm\">\n      <table class=\"table\">\n        <thead class=\"alert-inverse\">\n        <tr>\n          <th class=\"text-center\"># ID</th>\n          <th>Name</th>\n          <th>Cover Photo</th>\n          <th>Jenkin Url</th>\n          <th class=\"text-right\">Actions</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let theme of themes.themes, let i = index \">\n          <td class=\"text-center\">{{theme.id}}</td>\n          <td><span>{{theme.name}}</span>\n            <!--<div [hidden]=\"!theme.isEditMode\">\n            <input class=\"form-control\" formControlName=\"thName\" type=\"text\" value=\"{{theme.name}}\">\n          </div>-->\n          </td>\n          <td><span>{{theme.image_url}}</span>\n            <!--<div [hidden]=\"!theme.isEditMode\">\n              <input class=\"form-control\" type=\"text\" formControlName=\"thPhoto\" value=\"{{theme.image_url}}\">\n            </div>-->\n          </td>\n          <td><span>{{theme.jenkins_job_url}}</span>\n            <!--<div [hidden]=\"!theme.isEditMode\">\n              <input class=\"form-control\" type=\"text\" formControlName=\"thJenkins\" value=\"{{theme.jenkins_job_url}}\">\n            </div>-->\n          </td>\n          <td class=\"td-actions text-right\">\n            <!--<button *ngIf=\"!theme.isEditMode\" type=\"button\" class=\"btn btn-primary btn-simple btn-xs\" (click)=\"setEditMode(i)\">-->\n            <button type=\"button\" class=\"btn btn-primary btn-simple btn-xs\" (click)=\"setThemeToEdit(theme)\"\n                    data-toggle=\"modal\" data-target=\"#editThemeModal\">\n              <i class=\"material-icons\">edit</i>\n            </button>\n            <button type=\"button\" class=\"btn btn-danger btn-simple btn-xs\" (click)=\"setThemeTodelete(theme)\"\n                    data-toggle=\"modal\" data-target=\"#confirmThemeDelete\">\n              <i class=\"material-icons\" >delete</i>\n            </button>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n      </form>\n    </div>\n  </div>\n</div>\n<div\n  [ngBusy]=\"{busy: busy, message: 'Loading...', backdrop: true, delay: 200, minDuration: 600, position: center}\">\n\n</div>\n<!--</div>-->\n"

/***/ }),

/***/ "../../../../../src/app/admindashboard/admin-theme/admin-theme.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model_ThemeModel__ = __webpack_require__("../../../../../src/app/shared/model/ThemeModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_theme_service__ = __webpack_require__("../../../../../src/app/shared/service/theme.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_model_ThemeResponse__ = __webpack_require__("../../../../../src/app/shared/model/ThemeResponse.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_service_notify_service__ = __webpack_require__("../../../../../src/app/shared/service/notify.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminThemeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ThemaUpd = (function () {
    function ThemaUpd() {
    }
    return ThemaUpd;
}());
var AdminThemeComponent = (function () {
    function AdminThemeComponent(fb, themeService, toastr, vRef, router, aRoute, notify) {
        this.fb = fb;
        this.themeService = themeService;
        this.toastr = toastr;
        this.vRef = vRef;
        this.router = router;
        this.aRoute = aRoute;
        this.notify = notify;
        this.editThemeForm = this.fb.group({
            thName: [null],
            thPhoto: [null],
            thJenkins: [null]
        });
        // this.themeService.getAndSetTheme();
        // this.fetchThemes();
    }
    AdminThemeComponent.prototype.ngOnInit = function () {
        this.themes = new __WEBPACK_IMPORTED_MODULE_4__shared_model_ThemeResponse__["a" /* ThemeResponse */]();
        this.editMode = false;
        this.updatedTheme = new __WEBPACK_IMPORTED_MODULE_2__shared_model_ThemeModel__["a" /* ThemeModel */];
        this.fetchThemes();
    };
    AdminThemeComponent.prototype.fetchThemes = function () {
        var _this = this;
        this.themeService.getAllThemes().subscribe(function (res) {
            _this.themes = res;
            _this.notify.showSuccess('All theme fetched successfully', 'success', _this.vRef);
            // this.busy.unsubscribe();
        }, function (err) {
            _this.notify.showError(err, 'An Error occured', _this.vRef);
            console.log('error inside fetch theme == ' + err);
        });
    };
    /*  setEditMode(index: any) {
        for (let i = 0; i < (1 + this.themes.themes.length); i++) {
          if (index === i) {
            console.log('lenth of arr == ' + this.themes.themes.length + ' passed id == ' + index);
            this.themes.themes[index].isEditMode = !this.themes.themes[index].isEditMode;
            this.editMode = true;
          }
        }
      }*/
    /*updatTheme(tname, tphoto, tjenkins, theme: ThemeModel, id: any, index: any) {
      console.log('new name == ' + tname + ' tphoto == ' + tphoto + ' jenkins == ' + tjenkins + ' id == ' + theme.id);
      for (let i = 0; i < (1 + this.themes.themes.length); i++) {
        if (index === i) {
          this.themes.themes[index - 1].isEditMode = !this.themes.themes[index - 1].isEditMode;
          this.editMode = true;
        }
      }
      if (tname != null) {
        this.newThemeName = tname;
      } else {
        this.newThemeName = theme.name;
      }
      if (tphoto != null) {
        this.newThemePhoto = tphoto;
      } else {
        this.newThemePhoto = theme.image_url;
      }
      if (tjenkins != null) {
        this.newThemeJenkins = tjenkins;
      } else {
        this.newThemeJenkins = theme.jenkins_job_url;
      }
      console.log('new name for update == ' + this.newThemeName + ' tphoto == '
        + this.newThemePhoto + ' jenkins == ' + this.newThemeJenkins);
  
      this.mTheme = new ThemaUpd;
      this.mTheme.id = theme.id;
      this.mTheme.name = this.newThemeName;
      this.mTheme.image_url = this.newThemePhoto;
      this.mTheme.jenkins_job_url = this.newThemeJenkins;
  
      this.busy = this.themeService.updateTheme(theme.id, this.mTheme).subscribe(res => {
        this.notify.showSuccess('Theme Successfully updated', 'Success', this.vRef);
        console.log('successful update == ' + res);
      }, err => {
        console.log('error on update == ' + err);
        this.notify.showError(err, 'An Error Occurred', this.vRef);
      });
    }*/
    /*  showSuccess(text: string, title: string) {
        this.toastr.success(text, title, {toastLife: 3000, showCloseButton: false});
        this.fetchThemes();
      }
    
      showError(text: string, title: string) {
        this.toastr.error(text, title);
      }*/
    AdminThemeComponent.prototype.ngOnDestroy = function () {
        if (this.busy != null) {
            this.busy.unsubscribe();
        }
    };
    AdminThemeComponent.prototype.setThemeToEdit = function (thema) {
        this.themeService.setThemeDel(thema);
    };
    AdminThemeComponent.prototype.setThemeTodelete = function (thema) {
        this.themeService.setThemeDel(thema);
    };
    return AdminThemeComponent;
}());
AdminThemeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-theme',
        template: __webpack_require__("../../../../../src/app/admindashboard/admin-theme/admin-theme.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admindashboard/admin-theme/admin-theme.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_service_theme_service__["a" /* ThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_service_theme_service__["a" /* ThemeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_toastr__["ToastsManager"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__shared_service_notify_service__["a" /* NotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_service_notify_service__["a" /* NotifyService */]) === "function" && _g || Object])
], AdminThemeComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=admin-theme.component.js.map

/***/ }),

/***/ "../../../../../src/app/admindashboard/admin-user/admin-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admindashboard/admin-user/admin-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n    <div class=\"card-content table-responsive\">\n      <table class=\"table table-hover\">\n        <thead>\n        <tr>\n          <th class=\"text-left\"># ID</th>\n          <th>Name</th>\n          <th>Address</th>\n          <th>website</th>\n          <th>Registered</th>\n          <th class=\"text-right\">Actions</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n          <td>1</td>\n          <td>Dakota Rice church</td>\n          <td>Old churchville road</td>\n          <td>www.ckrc.org</td>\n          <td>13/09/2017</td>\n          <td class=\"td-actions text-right\">\n            <button type=\"button\" class=\"btn btn-primary btn-simple btn-xs\">\n              <span class=\"\">Block</span>\n            </button>\n            <button type=\"button\" class=\"btn btn-danger btn-simple btn-xs\">\n              <span class=\"\">Delete</span>\n            </button>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/admindashboard/admin-user/admin-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminUserComponent = (function () {
    function AdminUserComponent() {
    }
    AdminUserComponent.prototype.ngOnInit = function () {
    };
    return AdminUserComponent;
}());
AdminUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-user',
        template: __webpack_require__("../../../../../src/app/admindashboard/admin-user/admin-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admindashboard/admin-user/admin-user.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdminUserComponent);

//# sourceMappingURL=admin-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/admindashboard/admindashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admindashboard/admindashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"sidebar\" data-active-color=\"white\" data-background-color=\"black\" data-image=\"../assets/img/rock.jpg\">\n    <app-sidebar [role]=\"isAdmin\"></app-sidebar>\n    <div class=\"sidebar-background\"></div>\n  </div>\n  <div class=\"main-panel\">\n    <app-navbar [role]=\"isAdmin\"></app-navbar>\n    <!--admin dashboard html should be here-->\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n<div\n  [ngBusy]=\"{busy: busy, message: 'Loading...', backdrop: true, delay: 200, minDuration: 600, position: center}\">\n\n</div>\n\n\n<!-- add theme Modal -->\n<div id=\"addThemeModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Add a New Theme</h4>\n      </div>\n      <div class=\"modal-body\" style=\"margin-top: -10px\">\n        <!--<p>Some text in the modal.</p>-->\n        <form [formGroup]=\"themeForm\">\n          <div class=\"form-group label-floating\">\n            <label class=\"control-label\">Theme Name:</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"themeNameCtr\" required>\n          </div>\n          <div class=\"form-group label-floating\">\n            <label class=\"control-label\">Theme Jenkins Url:</label>\n            <input type=\"text\" class=\"form-control\" value=\"http://\" formControlName=\"themeCodeUrlCtr\" required>\n          </div>\n          <div class=\"form-group label-floating\">\n            <label class=\"control-label\">Enter Theme Menu item Names (5)</label>\n          </div>\n          <div class=\"row\">\n            <div *ngFor=\"let menu of menuNames\" class=\"col-md-3\">\n              <input type=\"text\" class=\"form-control\" formControlName=\"{{menu.formCtrlName}}\"\n                     placeholder=\"{{menu.name}}\" required>\n            </div>\n          </div>\n          <!--<div class=\"form-group label-floating\">-->\n          <label class=\"control-label\">Theme Cover Photo:</label>\n          <div class=\"alert alert-danger\" style=\"padding: 0; box-shadow: none\">\n            <p class=\"text-center\">* Only One file can be uploaded</p>\n            <p class=\"text-center\">* Max file size = 2MB</p>\n          </div>\n          <!--<input type=\"file\" formControlName=\"imgCtr\" (change)=\"fileChange($event)\"\n                 accept=\"image/jpeg, image/x-png\" placeholder=\"Click to choose file\" required>-->\n          <!--</div>-->\n\n          <div *ngIf=\"upd\">\n            <image-upload\n              [max]=\"1\"\n              [buttonCaption]=\"'Select Images!'\"\n              [dropBoxMessage]=\"'Drop your images here!'\"\n              [extensions]=\"['jpg','png','jpeg']\"\n              [maxFileSize]=\"2096576\"\n              [fileTooLargeMessage]=\"'Image too large!'\"\n              (onFileUploadFinish)=\"imageUploaded($event)\"\n              (isPending)=\"disableSendButton($event)\"\n            ></image-upload>\n          </div>\n\n          <!---->\n          <!--[headers]=\"[{header: 'Authorization', value: 'MyToken'} ]\"\n            [headers]=\"[{header: 'Content-Type', value: 'multipart/form-data'} ]\"\n            [url]=\"'http://api.smartapp.tk/api/v1/image/upload'\"-->\n\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger btn-sm\" data-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"createTheme(themeForm.get('themeNameCtr').value,\n        themeForm.get('themeCodeUrlCtr').value, themeForm.get('tMenu1').value, themeForm.get('tMenu2').value,\n        themeForm.get('tMenu3').value, themeForm.get('tMenu4').value, themeForm.get('tMenu5').value)\"\n                data-dismiss=\"modal\" [disabled]=\"themeForm.invalid\">Add\n        </button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n<!-- Edit theme Modal -->\n<div *ngIf=\"themeDele\" id=\"editThemeModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Edit Theme</h4>\n      </div>\n      <div class=\"modal-body\" style=\"margin-top: -10px\">\n        <!--<p>Some text in the modal.</p>-->\n        <form [formGroup]=\"editThemeForm\">\n          <div class=\"form-group label-floating\">\n            <label class=\"control-label\">Theme Name:</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"name\" readonly>\n          </div>\n          <div class=\"form-group label-floating\">\n            <label class=\"control-label\">Theme Jenkins Url:</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"etCodeUrlCtr\" required>\n          </div>\n          <div class=\"form-group label-floating\">\n            <label class=\"control-label\">First Menu item Name</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"etMenu1\" required>\n          </div>\n          <div class=\"form-group label-floating\">\n            <label class=\"control-label\">Second Menu item Name</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"etMenu2\" required>\n          </div>\n          <div class=\"form-group label-floating\">\n            <label class=\"control-label\">Third Menu item Name</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"etMenu3\" required>\n          </div>\n          <div class=\"form-group label-floating\">\n            <label class=\"control-label\">Fourth Menu item Name</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"etMenu4\" required>\n          </div>\n          <div class=\"form-group label-floating\">\n            <label class=\"control-label\">Fifth Menu item Name</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"etMenu5\" required>\n          </div>\n\n          <label class=\"control-label\">Theme Cover Photo:</label>\n          <div *ngIf=\"!changePhoto\" class=\"row\">\n            <div class=\"col-sm-5\">\n            <img src=\"{{themeDele.image_url}}\" class=\"\" style=\"width: 150px; height: 100px;\">\n            </div>\n            <div class=\"col-sm-7 flex-center-both\">\n              <button class=\"btn btn-sm btn-info\" (click)=\"etChangePhoto()\">Change Photo</button>\n            </div>\n          </div>\n          <!--<div class=\"form-group label-floating\">-->\n\n\n          <div *ngIf=\"changePhoto\">\n            <div class=\"alert alert-danger\" style=\"padding: 0; box-shadow: none\">\n            <p class=\"text-center\">* Only One file can be uploaded</p>\n            <p class=\"text-center\">* Max file size = 2MB</p>\n          </div>\n            <image-upload\n              [max]=\"1\"\n              [buttonCaption]=\"'Select Images!'\"\n              [dropBoxMessage]=\"'Drop your images here!'\"\n              [extensions]=\"['jpg','png','jpeg']\"\n              [maxFileSize]=\"2096576\"\n              [fileTooLargeMessage]=\"'Image too large!'\"\n              (onFileUploadFinish)=\"editThemeImage($event)\"\n              (isPending)=\"disableSendButton($event)\"\n            ></image-upload>\n          </div>\n\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger btn-sm\" data-dismiss=\"modal\" (click)=\"cancelPhotoChange()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"editTheme(editThemeForm.get('name').value,\n        editThemeForm.get('etCodeUrlCtr').value, editThemeForm.get('etMenu1').value, editThemeForm.get('etMenu2').value,\n        editThemeForm.get('etMenu3').value, editThemeForm.get('etMenu4').value, editThemeForm.get('etMenu5').value)\"\n                data-dismiss=\"modal\" [disabled]=\"editThemeForm.invalid\">Edit\n        </button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n<!-- Delete theme Modal -->\n<div id=\"confirmThemeDelete\" class=\"modal fade in\" aria-labelledby=\"modallabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h3 class=\"modal-title\"><b>Confirm Delete Theme</b></h3>\n      </div>\n      <div class=\"modal-body\">\n        <h4 class=\"modal-title\">Are you sure you want to delete this theme?</h4>\n        <!--<h4 class=\"modal-title text-center\">\"{{themeDele.name}}\"</h4>-->\n      </div>\n      <div class=\"modal-footer\">\n        <button class=\"btn btn-danger btn-xs\" data-dismiss=\"modal\" aria-hidden=\"true\">No</button>\n        <button class=\"btn btn-success btn-xs\" data-dismiss=\"modal\" (click)=\"deleteTheme(themeDele)\">Yes</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/admindashboard/admindashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_user_auth_service__ = __webpack_require__("../../../../../src/app/shared/service/user-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_theme_service__ = __webpack_require__("../../../../../src/app/shared/service/theme.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_notify_service__ = __webpack_require__("../../../../../src/app/shared/service/notify.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmindashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UpdImgRes = (function () {
    function UpdImgRes() {
    }
    return UpdImgRes;
}());
var AdmindashboardComponent = (function () {
    function AdmindashboardComponent(userService, fb, themeService, router, aRoute, notify, vRef) {
        var _this = this;
        this.userService = userService;
        this.fb = fb;
        this.themeService = themeService;
        this.router = router;
        this.aRoute = aRoute;
        this.notify = notify;
        this.vRef = vRef;
        this.menuNames = [
            { name: 'Home', formCtrlName: 'tMenu1' },
            { name: 'Events', formCtrlName: 'tMenu2' },
            { name: 'Messages', formCtrlName: 'tMenu3' },
            { name: 'Give', formCtrlName: 'tMenu4' },
            { name: 'More', formCtrlName: 'tMenu5' }
        ];
        this.themeForm = this.fb.group({
            themeNameCtr: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            themeCodeUrlCtr: ['http://', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            tMenu1: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            tMenu2: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            tMenu3: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            tMenu4: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            tMenu5: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            imgCtr: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        });
        this.editThemeForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            etCodeUrlCtr: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            etMenu1: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            etMenu2: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            etMenu3: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            etMenu4: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            etMenu5: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required],
            etImgCtr: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
        });
        this.sub = this.themeService.getDelTheme().subscribe(function (tema) {
            _this.themeDele = tema;
            console.log('passed tema == ' + tema);
            _this.editThemeForm.controls['name'].setValue(_this.themeDele.name, { onlySelf: true });
            _this.editThemeForm.controls['etCodeUrlCtr'].setValue(_this.themeDele.jenkins_job_url, { onlySelf: true });
            _this.editThemeForm.controls['etMenu1'].setValue(_this.themeDele.first_menu, { onlySelf: true });
            _this.editThemeForm.controls['etMenu2'].setValue(_this.themeDele.second_menu, { onlySelf: true });
            _this.editThemeForm.controls['etMenu3'].setValue(_this.themeDele.third_menu, { onlySelf: true });
            _this.editThemeForm.controls['etMenu4'].setValue(_this.themeDele.fourth_menu, { onlySelf: true });
            _this.editThemeForm.controls['etMenu5'].setValue(_this.themeDele.fifth_menu, { onlySelf: true });
            _this.editThemeForm.controls['etImgCtr'].setValue(_this.themeDele.image_url, { onlySelf: true });
        });
    }
    AdmindashboardComponent.prototype.ngOnInit = function () {
        this.isAdmin = this.userService.getIsAdmin();
        this.upd = new UpdImgRes;
    };
    AdmindashboardComponent.prototype.ngOnDestroy = function () {
        if (this.busy != null) {
            this.busy.unsubscribe();
        }
        if (this.sub != null) {
            this.sub.unsubscribe();
        }
    };
    AdmindashboardComponent.prototype.etChangePhoto = function () {
        this.changePhoto = true;
        this.editThemeForm.controls['etImgCtr'].setValue('');
    };
    AdmindashboardComponent.prototype.cancelPhotoChange = function () {
        this.changePhoto = false;
    };
    AdmindashboardComponent.prototype.imageUploaded = function (event) {
        console.log('error response after upload == ' + event.file);
        this.selectedFile = event.file;
        this.themeForm.controls['imgCtr'].setValue(this.selectedFile);
        // (<FormControl>this.editThemeForm.controls['name']).setValue(this.themeDele.name, { onlySelf: true });
    };
    AdmindashboardComponent.prototype.editThemeImage = function (event) {
        console.log('error response after upload == ' + event.file);
        this.selectedFile = event.file;
        this.editThemeForm.controls['etImgCtr'].setValue(this.selectedFile);
        this.changePhoto = true;
    };
    AdmindashboardComponent.prototype.disableSendButton = function (event) {
        console.log('response in disable send button == ' + event);
    };
    AdmindashboardComponent.prototype.createTheme = function (themeName, themeJenkinsUrl, firstMenu, secondMenu, thirdMenu, fourthMenu, fifthMenu) {
        var _this = this;
        this.busy = this.themeService.addNewTheme(themeName, themeJenkinsUrl, firstMenu, secondMenu, thirdMenu, fourthMenu, fifthMenu, this.selectedFile)
            .subscribe(function (res) {
            _this.notify.showSuccess('New Theme ' + themeName + ' successfully added', 'Success', _this.vRef);
            _this.themeService.getAndSetTheme();
            /*setTimeout(() => {
              // this.router.navigate(['themes'], {relativeTo: this.aRoute.firstChild});
              // this.router.navigate(['/admin/dashboard/themes']);
            }, 3000);*/
        }, function (err) {
            _this.notify.showError(err, 'An Error occurred', _this.vRef);
            console.log('error response after upload == ' + err);
        });
    };
    AdmindashboardComponent.prototype.editTheme = function (themeName, themeJenkinsUrl, firstMenu, secondMenu, thirdMenu, fourthMenu, fifthMenu) {
        var _this = this;
        this.busy = this.themeService.updateTheme(this.themeDele.id, themeName, themeJenkinsUrl, firstMenu, secondMenu, thirdMenu, fourthMenu, fifthMenu, this.selectedFile)
            .subscribe(function (res) {
            _this.notify.showSuccess('Theme successfully updated', 'Success', _this.vRef);
            _this.themeService.getAndSetTheme();
        }, function (err) {
            _this.notify.showError(err, 'An Error occurred', _this.vRef);
            console.log('error response after upload == ' + err);
        });
        this.changePhoto = false;
        // this.editThemeForm.reset();
        /*this.busy = this.themeService.updateTheme(theme.id, this.mTheme).subscribe(res => {
          this.notify.showSuccess('Theme Successfully updated', 'Success', this.vRef);
          console.log('successful update == ' + res);
        }, err => {
          console.log('error on update == ' + err);
          this.notify.showError(err, 'An Error Occurred', this.vRef);
        });*/
    };
    AdmindashboardComponent.prototype.deleteTheme = function (thema) {
        var _this = this;
        console.log('theme to be del == ' + thema.name + ' themadel == ' + thema.id);
        this.busy = this.themeService.removeTheme(thema.id).subscribe(function (res) {
            console.log('on successful deletion == ' + res + ' json stringifid == ' + JSON.stringify(res));
            // this.router.navigate(['/admin/dashboard/themes']);
            // this.router.navigate(['themes'], {relativeTo: this.aRoute.firstChild});
            _this.themeService.getAndSetTheme();
        });
    };
    return AdmindashboardComponent;
}());
AdmindashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admindashboard',
        template: __webpack_require__("../../../../../src/app/admindashboard/admindashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admindashboard/admindashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_user_auth_service__["a" /* UserAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_user_auth_service__["a" /* UserAuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_service_theme_service__["a" /* ThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_service_theme_service__["a" /* ThemeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service_notify_service__["a" /* NotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service_notify_service__["a" /* NotifyService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _g || Object])
], AdmindashboardComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=admindashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-root/app-root.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-root/app-root.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app-root/app-root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_menu_service__ = __webpack_require__("../../../../../src/app/shared/service/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_model_FileModel__ = __webpack_require__("../../../../../src/app/shared/model/FileModel.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRootComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppRootComponent = (function () {
    function AppRootComponent(fb, menuService) {
        this.fb = fb;
        this.menuService = menuService;
        this.listItems = [];
        this.listForm = this.fb.group({
            listField: [null]
        });
        this.audioForm = this.fb.group({
            audioFileName: [null],
            audioFileUrl: ['http://']
        });
        this.videoForm = this.fb.group({
            videoFileName: [null],
            videoFileUrl: ['http://']
        });
        this.textAreaForm = this.fb.group({
            textAreaTitle: [null],
            textAreaTxt: [null]
        });
        this.urlForm = this.fb.group({
            urlTitle: [null],
            urlAddress: ['http://']
        });
    }
    AppRootComponent.prototype.ngOnInit = function () {
    };
    // send submenu list one to service
    AppRootComponent.prototype.pushListArray = function (listMass) {
        this.listItems = [];
        var array = listMass.split(',');
        for (var a = 0; a < array.length; a++) {
            this.aa = array[a].trim();
            this.listItems.push(this.aa);
        }
        this.menuService.setSubMenuArrayL1(this.listItems);
        this.listForm.reset();
    };
    // send submenu list two to service
    AppRootComponent.prototype.pushSubListArray = function (listMass) {
        console.log('pushed list == ' + listMass);
        this.listItems = [];
        var array = listMass.split(',');
        for (var a = 0; a < array.length; a++) {
            this.aa = array[a].trim();
            this.listItems.push(this.aa);
        }
        this.menuService.setSubMenuArrayL2(this.listItems);
        // this.listForm.reset();
        this.resetModalForm(this.listForm);
    };
    AppRootComponent.prototype.pushAudioModel = function (fileName, fileUrl, fileType) {
        var fileNew = new __WEBPACK_IMPORTED_MODULE_3__shared_model_FileModel__["a" /* FileModel */];
        fileNew.name = fileName;
        // fileNew.description = fileDesc;
        fileNew.content = fileUrl;
        fileNew.fileType = fileType;
        // push new audioFile to service
        this.menuService.setObservableFile(fileNew);
        this.resetModalHttpForm(this.audioForm, 'audioFileUrl');
    };
    AppRootComponent.prototype.pushVideoModel = function (fileName, fileUrl, fileType) {
        var fileNew = new __WEBPACK_IMPORTED_MODULE_3__shared_model_FileModel__["a" /* FileModel */];
        fileNew.name = fileName;
        // fileNew.description = fileDesc;
        fileNew.content = fileUrl;
        fileNew.fileType = fileType;
        // push new videoFile to service
        this.menuService.setObservableFile(fileNew);
        this.resetModalHttpForm(this.videoForm, 'videoFileUrl');
    };
    AppRootComponent.prototype.pushUrlModel = function (urlTitle, urlAddress, fileType) {
        var fileNew = new __WEBPACK_IMPORTED_MODULE_3__shared_model_FileModel__["a" /* FileModel */];
        fileNew.name = urlTitle;
        fileNew.content = urlAddress;
        fileNew.fileType = fileType;
        // push new url to service
        this.menuService.setObservableFile(fileNew);
        this.resetModalHttpForm(this.urlForm, 'urlAddress');
    };
    AppRootComponent.prototype.pushTextModel = function (textTitle, txt, fileType) {
        var fileNew = new __WEBPACK_IMPORTED_MODULE_3__shared_model_FileModel__["a" /* FileModel */];
        fileNew.name = textTitle;
        fileNew.content = txt;
        fileNew.fileType = fileType;
        // push new text to service
        this.menuService.setObservableFile(fileNew);
        this.resetModalForm(this.textAreaForm);
    };
    AppRootComponent.prototype.resetModalForm = function (form) {
        setTimeout(function () {
            form.reset();
        }, 2000);
    };
    AppRootComponent.prototype.resetModalHttpForm = function (form, controlName) {
        setTimeout(function () {
            form.reset();
            form.controls[controlName].setValue('http://', { onlySelf: true });
        }, 2000);
    };
    return AppRootComponent;
}());
AppRootComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-app-root',
        template: __webpack_require__("../../../../../src/app/app-root/app-root.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app-root/app-root.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_service_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_service_menu_service__["a" /* MenuService */]) === "function" && _b || Object])
], AppRootComponent);

var _a, _b;
//# sourceMappingURL=app-root.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_create_app_create_app_component__ = __webpack_require__("../../../../../src/app/dashboard/create-app/create-app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_publish_publish_component__ = __webpack_require__("../../../../../src/app/dashboard/publish/publish.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_settings_settings_component__ = __webpack_require__("../../../../../src/app/dashboard/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dashboard_select_theme_select_theme_component__ = __webpack_require__("../../../../../src/app/dashboard/select-theme/select-theme.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dashboard_edit_app_edit_app_component__ = __webpack_require__("../../../../../src/app/dashboard/edit-app/edit-app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dashboard_update_content_update_content_component__ = __webpack_require__("../../../../../src/app/dashboard/update-content/update-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_root_app_root_component__ = __webpack_require__("../../../../../src/app/app-root/app-root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pagenotfound_pagenotfound_component__ = __webpack_require__("../../../../../src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__builder_builder_component__ = __webpack_require__("../../../../../src/app/builder/builder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_service_app_info_service__ = __webpack_require__("../../../../../src/app/shared/service/app-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__builder_builder_sub_one_builder_sub_one_component__ = __webpack_require__("../../../../../src/app/builder/builder-sub-one/builder-sub-one.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__builder_builder_sub_two_builder_sub_two_component__ = __webpack_require__("../../../../../src/app/builder/builder-sub-two/builder-sub-two.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__builder_builder_sub_three_builder_sub_three_component__ = __webpack_require__("../../../../../src/app/builder/builder-sub-three/builder-sub-three.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__builder_builder_sub_four_builder_sub_four_component__ = __webpack_require__("../../../../../src/app/builder/builder-sub-four/builder-sub-four.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__builder_builder_sub_five_builder_sub_five_component__ = __webpack_require__("../../../../../src/app/builder/builder-sub-five/builder-sub-five.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_service_user_auth_service__ = __webpack_require__("../../../../../src/app/shared/service/user-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angular2_busy__ = __webpack_require__("../../../../angular2-busy/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angular2_busy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_angular2_busy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__shared_guard_auth_guard__ = __webpack_require__("../../../../../src/app/shared/guard/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__shared_service_menu_service__ = __webpack_require__("../../../../../src/app/shared/service/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__admindashboard_admindashboard_component__ = __webpack_require__("../../../../../src/app/admindashboard/admindashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__shared_guard_admin_auth_guard__ = __webpack_require__("../../../../../src/app/shared/guard/admin-auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__admindashboard_admin_sub_admin_sub_component__ = __webpack_require__("../../../../../src/app/admindashboard/admin-sub/admin-sub.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__admindashboard_admin_theme_admin_theme_component__ = __webpack_require__("../../../../../src/app/admindashboard/admin-theme/admin-theme.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__admindashboard_admin_user_admin_user_component__ = __webpack_require__("../../../../../src/app/admindashboard/admin-user/admin-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__admindashboard_admin_apps_admin_apps_component__ = __webpack_require__("../../../../../src/app/admindashboard/admin-apps/admin-apps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__shared_service_theme_service__ = __webpack_require__("../../../../../src/app/shared/service/theme.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_angular2_image_upload__ = __webpack_require__("../../../../angular2-image-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_angular2_image_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40_angular2_image_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__shared_service_notify_service__ = __webpack_require__("../../../../../src/app/shared/service/notify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__dashboard_design_design_component__ = __webpack_require__("../../../../../src/app/dashboard/design/design.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__dashboard_design_app_color_app_color_component__ = __webpack_require__("../../../../../src/app/dashboard/design/app-color/app-color.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__dashboard_design_app_splash_app_splash_component__ = __webpack_require__("../../../../../src/app/dashboard/design/app-splash/app-splash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_angular4_color_picker__ = __webpack_require__("../../../../angular4-color-picker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_angular4_color_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_45_angular4_color_picker__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__shared_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__shared_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__dashboard_create_app_create_app_component__["a" /* CreateAppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__dashboard_publish_publish_component__["a" /* PublishComponent */],
            __WEBPACK_IMPORTED_MODULE_14__dashboard_settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__dashboard_select_theme_select_theme_component__["a" /* SelectThemeComponent */],
            __WEBPACK_IMPORTED_MODULE_16__dashboard_edit_app_edit_app_component__["a" /* EditAppComponent */],
            __WEBPACK_IMPORTED_MODULE_17__dashboard_update_content_update_content_component__["a" /* UpdateContentComponent */],
            __WEBPACK_IMPORTED_MODULE_18__app_root_app_root_component__["a" /* AppRootComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */],
            __WEBPACK_IMPORTED_MODULE_20__builder_builder_component__["a" /* BuilderComponent */],
            __WEBPACK_IMPORTED_MODULE_22__builder_builder_sub_one_builder_sub_one_component__["a" /* BuilderSubOneComponent */],
            __WEBPACK_IMPORTED_MODULE_23__builder_builder_sub_two_builder_sub_two_component__["a" /* BuilderSubTwoComponent */],
            __WEBPACK_IMPORTED_MODULE_24__builder_builder_sub_three_builder_sub_three_component__["a" /* BuilderSubThreeComponent */],
            __WEBPACK_IMPORTED_MODULE_25__builder_builder_sub_four_builder_sub_four_component__["a" /* BuilderSubFourComponent */],
            __WEBPACK_IMPORTED_MODULE_26__builder_builder_sub_five_builder_sub_five_component__["a" /* BuilderSubFiveComponent */],
            __WEBPACK_IMPORTED_MODULE_33__admindashboard_admindashboard_component__["a" /* AdmindashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_35__admindashboard_admin_sub_admin_sub_component__["a" /* AdminSubComponent */],
            __WEBPACK_IMPORTED_MODULE_36__admindashboard_admin_theme_admin_theme_component__["a" /* AdminThemeComponent */],
            __WEBPACK_IMPORTED_MODULE_37__admindashboard_admin_user_admin_user_component__["a" /* AdminUserComponent */],
            __WEBPACK_IMPORTED_MODULE_38__admindashboard_admin_apps_admin_apps_component__["a" /* AdminAppsComponent */],
            __WEBPACK_IMPORTED_MODULE_42__dashboard_design_design_component__["a" /* DesignComponent */],
            __WEBPACK_IMPORTED_MODULE_43__dashboard_design_app_color_app_color_component__["a" /* AppColorComponent */],
            __WEBPACK_IMPORTED_MODULE_44__dashboard_design_app_splash_app_splash_component__["a" /* AppSplashComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_30__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_28_angular2_busy__["BusyModule"],
            __WEBPACK_IMPORTED_MODULE_45_angular4_color_picker__["ColorPickerModule"],
            __WEBPACK_IMPORTED_MODULE_40_angular2_image_upload__["ImageUploadModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_29_ng2_toastr__["ToastModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: '',
                    canActivate: [__WEBPACK_IMPORTED_MODULE_31__shared_guard_auth_guard__["a" /* AuthGuard */]],
                    component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */],
                    children: [
                        { path: '', redirectTo: 'user', pathMatch: 'full' },
                        {
                            path: 'user', component: __WEBPACK_IMPORTED_MODULE_18__app_root_app_root_component__["a" /* AppRootComponent */],
                            children: [
                                { path: '', redirectTo: 'app', pathMatch: 'full' },
                                { path: 'app', component: __WEBPACK_IMPORTED_MODULE_12__dashboard_create_app_create_app_component__["a" /* CreateAppComponent */] },
                                { path: 'select', component: __WEBPACK_IMPORTED_MODULE_15__dashboard_select_theme_select_theme_component__["a" /* SelectThemeComponent */] },
                                {
                                    path: 'build', component: __WEBPACK_IMPORTED_MODULE_20__builder_builder_component__["a" /* BuilderComponent */],
                                    children: [
                                        { path: '', redirectTo: 'page_one', pathMatch: 'full' },
                                        { path: 'page_one', component: __WEBPACK_IMPORTED_MODULE_22__builder_builder_sub_one_builder_sub_one_component__["a" /* BuilderSubOneComponent */] },
                                        { path: 'page_two', component: __WEBPACK_IMPORTED_MODULE_23__builder_builder_sub_two_builder_sub_two_component__["a" /* BuilderSubTwoComponent */] },
                                        { path: 'page_three', component: __WEBPACK_IMPORTED_MODULE_24__builder_builder_sub_three_builder_sub_three_component__["a" /* BuilderSubThreeComponent */] },
                                        { path: 'page_four', component: __WEBPACK_IMPORTED_MODULE_25__builder_builder_sub_four_builder_sub_four_component__["a" /* BuilderSubFourComponent */] },
                                        { path: 'page_five', component: __WEBPACK_IMPORTED_MODULE_26__builder_builder_sub_five_builder_sub_five_component__["a" /* BuilderSubFiveComponent */] }
                                    ]
                                },
                                { path: 'design', component: __WEBPACK_IMPORTED_MODULE_42__dashboard_design_design_component__["a" /* DesignComponent */],
                                    children: [
                                        { path: '', redirectTo: 'color', pathMatch: 'full' },
                                        { path: 'color', component: __WEBPACK_IMPORTED_MODULE_43__dashboard_design_app_color_app_color_component__["a" /* AppColorComponent */] },
                                        { path: 'icon', component: __WEBPACK_IMPORTED_MODULE_44__dashboard_design_app_splash_app_splash_component__["a" /* AppSplashComponent */] }
                                    ] },
                            ]
                        },
                    ]
                },
                {
                    path: 'admin',
                    component: __WEBPACK_IMPORTED_MODULE_33__admindashboard_admindashboard_component__["a" /* AdmindashboardComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_34__shared_guard_admin_auth_guard__["a" /* AdminAuthGuard */]],
                    children: [
                        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                        {
                            path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_35__admindashboard_admin_sub_admin_sub_component__["a" /* AdminSubComponent */],
                            children: [
                                { path: '', redirectTo: 'users', pathMatch: 'full' },
                                { path: 'users', component: __WEBPACK_IMPORTED_MODULE_37__admindashboard_admin_user_admin_user_component__["a" /* AdminUserComponent */] },
                                { path: 'themes', component: __WEBPACK_IMPORTED_MODULE_36__admindashboard_admin_theme_admin_theme_component__["a" /* AdminThemeComponent */] },
                                { path: 'apps', component: __WEBPACK_IMPORTED_MODULE_38__admindashboard_admin_apps_admin_apps_component__["a" /* AdminAppsComponent */] }
                            ]
                        }
                    ]
                },
                {
                    path: 'login',
                    component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */]
                },
                {
                    path: 'register',
                    component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */]
                },
                {
                    path: '**',
                    component: __WEBPACK_IMPORTED_MODULE_19__pagenotfound_pagenotfound_component__["a" /* PagenotfoundComponent */]
                }
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_21__shared_service_app_info_service__["a" /* AppInfoService */], __WEBPACK_IMPORTED_MODULE_27__shared_service_user_auth_service__["a" /* UserAuthService */], __WEBPACK_IMPORTED_MODULE_31__shared_guard_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_34__shared_guard_admin_auth_guard__["a" /* AdminAuthGuard */], __WEBPACK_IMPORTED_MODULE_32__shared_service_menu_service__["a" /* MenuService */], __WEBPACK_IMPORTED_MODULE_39__shared_service_theme_service__["a" /* ThemeService */], __WEBPACK_IMPORTED_MODULE_41__shared_service_notify_service__["a" /* NotifyService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/builder/builder-sub-five/builder-sub-five.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/builder/builder-sub-five/builder-sub-five.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"solid-border-heading\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-1\">\n        <!--<i class=\"material-icons flex-submenu-box\">home</i>-->\n        <button class=\"btn btn-primary btn-just-icon \">\n          <i class=\"material-icons\">{{menu_icon}}</i><b class=\"caret\"></b>\n        </button>\n      </div>\n      <div class=\"col-sm-4 col-sm-offset-0\" style=\"margin-top: -10px\">\n        <label style=\"margin-top: 15px; color: #4caf50; font-weight: 300; font-size: small\">Menu Title</label>\n        <div class=\"input-group\" style=\"margin-top: -30px\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newMenuName\" placeholder=\"{{menu_name}}\">\n        </div>\n      </div>\n      <div class=\"flex-right-both\" style=\"padding-top: 20px\">\n        <div class=\"col-sm-5\">\n          <div class=\"dropdown\">\n            <button href=\"#\" [disabled]=\"!newMenuName || menuAdded\" (click)=\"addContent()\"\n                    class=\"btn dropdown-toggle btn-sm\"\n                    data-toggle=\"dropdown\" aria-expanded=\"true\">Add Content<b class=\"caret\"></b>\n            </button>\n            <ul class=\"dropdown-menu\">\n              <li><a href=\"\" data-toggle=\"modal\" data-target=\"#myModal\">Menu List</a></li>\n              <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#audioModal\">Audio file</a></li>\n              <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#videoModal\">Video file</a></li>\n              <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#textareaModal\">Text</a></li>\n              <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#urlModal\">Url</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n\n      <!--<div class=\"panel panel-body\">\n        <a [routerLink]=\"['../design']\">test1</a>\n        <a [routerLink]=\"['../../design']\">test2</a>\n        <a [routerLink]=\"['../../../design']\">test3</a>\n      </div>-->\n\n    </div>\n  </div>\n</div>\n<!--</div>-->\n\n<!--Empty menu state view-->\n<div *ngIf=\"emptyState\">\n  <div class=\"row flex-center-both\">\n    <div class=\"col-sm-6\">\n      <div class=\"alert alert-with-icon alert-inverse\" style=\"box-shadow: none; padding: 10px;\">\n        <span class=\"text-center\"> No content added yet<br>Enter Menu TITLE to add contents</span>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--menu list to be populated after list has been populated-->\n<div class=\"panel panel-body\">\n  <div *ngIf=\"menuResponse\" class=\"container-fluid\" style=\"margin-top: 20px;\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"flex-left-both\">\n          <div class=\"nav nav-pills nav-pills-icons\" *ngFor=\"let li of menuResponse.subMenus, let i = index\">\n            <div class=\"card box-submenu-grey\">\n              <div class=\"card-header card-header-icon\" style=\"box-shadow: none\" data-background-color=\"orange\">\n                <p class=\"card-title\">{{li.name}}</p>\n              </div>\n              <div class=\"card-content\">\n                <div class=\"dropdown\">\n                  <button href=\"#\" class=\"btn btn-white btn-sm\" (click)=\"selectedSubmenu1(li, i)\"\n                          style=\"box-shadow: none\"\n                          data-toggle=\"dropdown\" aria-expanded=\"true\">\n                    Add Content\n                    <b class=\"caret\"></b>\n                  </button>\n                  <ul class=\"dropdown-menu\">\n                    <li><a href=\"\" data-toggle=\"modal\" data-target=\"#subMenuModal\">Menu List</a></li>\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#audioModal\">Audio file</a>\n                    </li>\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#videoModal\">Video file</a>\n                    </li>\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#textareaModal\">Text</a></li>\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#urlModal\">Url</a></li>\n                  </ul>\n                </div>\n              </div>\n              <div class=\"flex-center-both\" style=\"margin: -20px 0 -10px 0\">\n                <button class=\"btn btn-simple btn-xs btn-just-icon\" rel=\"tooltip\" title=\"delete\" style=\"padding: 2px;\"\n                        (click)=\"changeShowStatus(i, li)\">\n                  <span class=\"material-icons\">delete</span>\n                </button>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"padding-ten\" style=\"width: 100%!important;\">\n            <!--<div class=\"solid-border-box\">-->\n            <router-outlet></router-outlet>\n            <!--</div>-->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <!--submenu div to be visible once a new submenu has been added-->\n  <div *ngIf=\"subMenuRes\" class=\"container-fluid\" style=\"margin-top: 20px;\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <p class=\"font-title-text\" style=\"margin: 15px 0 -10px 20px\"><b>Submenu - {{top_menu_name}}</b></p>\n        <div class=\"flex-left-both\">\n          <div class=\"nav nav-pills nav-pills-icons\" *ngFor=\"let submenu of subMenuRes.menu, let i = index\">\n            <div class=\"card box-submenu2-grey\">\n              <div class=\"card-content\">\n                <div class=\"flex-center-both\" style=\"padding: 0 10px 0 10px!important;\">{{submenu.name}}</div>\n              </div>\n              <div class=\"card-footer\" style=\"padding: 0;\">\n                <div class=\"dropdown\">\n                  <button class=\"btn btn-simple btn-xs\" (click)=\"addFileToSubmenu2(submenu, i)\"\n                          data-toggle=\"dropdown\" aria-expanded=\"true\" style=\"padding: 2px;\">\n                    <span class=\"text-left\">Add<b class=\"caret\"></b></span>\n                  </button>\n                  <ul class=\"dropdown-menu\">\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#audioModal\">Audio file</a>\n                    </li>\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#videoModal\">Video file</a>\n                    </li>\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#textareaModal\">Text</a></li>\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#urlModal\">Url</a></li>\n                  </ul>\n                </div>\n                <button class=\"btn btn-simple btn-xs\" style=\"padding: 2px;\">\n                  <span class=\"text-right\">Delete</span>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <!--check for files and show file div-->\n  <div>\n    <div *ngIf=\"fileModel\">\n      <div class=\"row\">\n        <div class=\"card\">\n          <div class=\"form-margin\">\n            <!--div for audio and video files-->\n            <div class=\"flex-center-both font-title-text\"> = New File added to (<b>{{fileMenuName}}</b>) =</div>\n            <div class=\"card-content\" style=\"border-top: 1px solid #eeeeee; margin-top: 5px\">\n              <div class=\"text-left text-uppercase\" style=\"margin-bottom: 0\">File Info</div>\n              <form [formGroup]=\"editFileForm\">\n                <br>\n                <div class=\"row\">\n                  <div class=\"col-sm-3\"><b>File Name:</b></div>\n                  <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"!isEditMode\">\n                    <span class=\"text-capitalize\">{{fileModel.name}}</span>\n                  </div>\n                  <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"isEditMode\">\n                    <input type=\"text\" class=\"form-control\" style=\"margin: -35px 0 -5px 0; padding: 0\"\n                           formControlName=\"fileName\" value=\"{{fileModel.name}}\"></div>\n                  <div class=\"col col-sm-offset-0\" *ngIf=\"!isEditMode\">\n                    <button class=\"btn btn-simple btn-xs\" (click)=\"startEditMode()\" style=\"margin: 0\">\n                      <i class=\"material-icons\">edit</i></button>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-sm-3\"><b>File Type:</b></div>\n                  <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"!isEditMode\">\n                    <span class=\"text-capitalize\">{{fileModel.fileType}}</span>\n                  </div>\n                  <!--select for editing file type-->\n                  <div class=\"col-sm-offset-1 col-sm-6\" *ngIf=\"isEditMode\">\n                    <select class=\"bootstrap-select1 dropdown\" data-style=\"btn btn-primary btn-round btn-sm\" title=\"Single Select\"\n                            data-size=\"7\"\n                            [(ngModel)]=\"editedFileType\" [ngModelOptions]=\"{standalone: true}\">\n                      <option disabled selected>{{fileModel.fileType}}</option>\n                      <option *ngFor=\"let type of fileTypes\"\n                              [hidden]=\"fileModel.fileType === type.mValue\" [ngValue]=\"type.mValue\">{{type.mName}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"row\" *ngIf=\"fileModel.fileType === 'audio' || fileModel.fileType === 'video'\">\n                  <div class=\"col-sm-3\"><b>File Streaming Url:</b></div>\n                  <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"!isEditMode\">\n                    <span class=\"\">{{fileModel.content}}</span>\n                  </div>\n                  <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"isEditMode\">\n                    <input type=\"text\" class=\"form-control\" formControlName=\"fileContent\"\n                           style=\"margin: -20px 0 0 0\" value=\"{{fileModel.content}}\"></div>\n                  <div class=\"col col-sm-offset-0\" *ngIf=\"isEditMode\">\n                    <button class=\"btn btn-default btn-xs\"\n                            (click)=\"doneEditMode(editFileForm.get('fileName').value, editFileForm.get('fileContent').value)\"\n                            style=\"margin: 0\">\n                      <i class=\"material-icons\">done</i></button>\n                  </div>\n                </div>\n                <div class=\"row\" *ngIf=\"fileModel.fileType === 'text' || fileModel.fileType === 'url'\">\n                  <div class=\"col-sm-3\"><b>Text/Url:</b></div>\n                  <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"!isEditMode\">\n                    <span class=\"text-gray\">{{fileModel.content}}</span>\n                  </div>\n                  <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"isEditMode\">\n                    <input type=\"text\" class=\"form-control\" style=\"margin: -20px 0 0 0\"\n                           formControlName=\"fileContent\" value=\"{{fileModel.content}}\"></div>\n                  <div class=\"col col-sm-offset-0\" *ngIf=\"isEditMode\">\n                    <button class=\"btn btn-default btn-xs\" (click)=\"doneEditMode(editFileForm.get('fileName').value,\n              editFileForm.get('fileContent').value)\" style=\"margin: 0\">\n                      <i class=\"material-icons\">done</i></button>\n                  </div>\n                </div>\n                <div class=\"flex-center-both\" style=\"margin-top: 20px\">\n                  <button class=\"btn btn-primary btn-sm\" [disabled]=\"isEditMode\"\n                          (click)=\"saveFileToServer(editFileForm.get('fileName').value, editFileForm.get('fileContent').value)\">\n                    <span class=\"material-icons\">save</span> Save\n                  </button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n<div\n  [ngBusy]=\"{busy: busy, message: 'Loading...', backdrop: true, delay: 200, minDuration: 600, position: center}\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/builder/builder-sub-five/builder-sub-five.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_menu_service__ = __webpack_require__("../../../../../src/app/shared/service/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model_FileModel__ = __webpack_require__("../../../../../src/app/shared/model/FileModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_model_TextContentModel__ = __webpack_require__("../../../../../src/app/shared/model/TextContentModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_model_MenuPostModel__ = __webpack_require__("../../../../../src/app/shared/model/MenuPostModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_model_SubMenuPostModel__ = __webpack_require__("../../../../../src/app/shared/model/SubMenuPostModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_model_AppModel__ = __webpack_require__("../../../../../src/app/shared/model/AppModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_service_notify_service__ = __webpack_require__("../../../../../src/app/shared/service/notify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_service_app_info_service__ = __webpack_require__("../../../../../src/app/shared/service/app-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_service_theme_service__ = __webpack_require__("../../../../../src/app/shared/service/theme.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuilderSubFiveComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var BuilderSubFiveComponent = (function () {
    function BuilderSubFiveComponent(menuService, fb, notify, vRef, ais, route, aRoute, themeService) {
        this.menuService = menuService;
        this.fb = fb;
        this.notify = notify;
        this.vRef = vRef;
        this.ais = ais;
        this.route = route;
        this.aRoute = aRoute;
        this.themeService = themeService;
        this.listItems = [];
        this.subMenuList2 = [];
        this.submenuArr = [];
        this.submenuArr2 = [];
        this.fileTypes = [{ mName: 'Audio', mValue: 'audio' }, { mName: 'Video', mValue: 'video' },
            { mName: 'Text', mValue: 'text' }, { mName: 'Url', mValue: 'url' }];
        this.listForm = this.fb.group({
            listField: [null]
        });
        this.editFileForm = this.fb.group({
            fileName: [null],
            fileContent: [null]
        });
    }
    BuilderSubFiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuService.getMenuModel().subscribe(function (res) {
            _this.menu_model = res;
            _this.menu_name = _this.menu_model.menu_name;
            _this.menu_icon = _this.menu_model.menu_icon;
            console.log('returned menu modelled object == ' + JSON.stringify(res));
        });
        this.showHide = false;
        this.menuSelected2 = false;
        this.isEditMode = false;
        this.fileSaveStatus = false;
        this.emptyState = true;
        this.menuPostModel = new __WEBPACK_IMPORTED_MODULE_5__shared_model_MenuPostModel__["a" /* MenuPostModel */];
        this.submenuPModel = new __WEBPACK_IMPORTED_MODULE_6__shared_model_SubMenuPostModel__["a" /* SubMenuPostModel */];
        // this.fileModel = new FileModel;
        this.editedFileType = 'audio';
        this.textModel = new __WEBPACK_IMPORTED_MODULE_3__shared_model_TextContentModel__["a" /* TextContentModel */];
        this.appModel = new __WEBPACK_IMPORTED_MODULE_7__shared_model_AppModel__["a" /* AppModel */];
        this.appModel = this.ais.getAppInfo();
        this.getMenuFromServer();
        this.getSubmenuArr();
        this.getSubmenuArrayL2();
        this.getFileFromObservable();
        this.getSubmenu2Observables();
        // this.getSubmenuArr();
    };
    BuilderSubFiveComponent.prototype.ngOnChanges = function () {
    };
    BuilderSubFiveComponent.prototype.ngOnDestroy = function () {
        if (this.subMenuSub != null) {
            this.subMenuSub.unsubscribe();
        }
        if (this.busy != null) {
            this.busy.unsubscribe();
        }
    };
    BuilderSubFiveComponent.prototype.startEditMode = function () {
        this.isEditMode = true;
    };
    BuilderSubFiveComponent.prototype.doneEditMode = function (fileName, fileContent) {
        this.isEditMode = false;
        var editedFile = new __WEBPACK_IMPORTED_MODULE_2__shared_model_FileModel__["a" /* FileModel */];
        editedFile.name = fileName;
        editedFile.content = fileContent;
        editedFile.fileType = this.editedFileType;
        this.menuService.setObservableFile(editedFile);
        console.log('selected option jsonStrinigfy == ' + JSON.stringify(editedFile)
            + ' editted name and con == ' + fileName + ' cc == ' + fileContent);
    };
    BuilderSubFiveComponent.prototype.changeShowStatus = function (id, name) {
        console.log('passed array id == ' + id + ' name == ' + name);
        this.listItems.splice(id, 1);
        console.log('listItem after del == ' + this.listItems);
    };
    BuilderSubFiveComponent.prototype.selectedSubmenu1 = function (submenu, submenu1) {
        // console.log('selected submenu == ' + 'sub idd == ' + submenu.id + ' passed TOPID == ' + topId);
        this.top_menu_id = submenu.id;
        this.top_menu_name = submenu.name;
        this.menu1Index = submenu1;
        this.fileMenuName = submenu.name;
    };
    BuilderSubFiveComponent.prototype.getSubmenuArr = function () {
        var _this = this;
        this.subMenuSub = this.menuService.getSubMenuArrayL1().subscribe(function (subArray) {
            _this.listItems = subArray;
            _this.submenuArr = [];
            // loop thru the array, build each elemant into the submenu model
            for (var a = 0; a < _this.listItems.length; a++) {
                var subObject = {
                    'name': _this.listItems[a],
                    'content': '',
                    'content_type': '',
                    'appid': _this.appModel.appId
                };
                _this.submenuArr.push(subObject);
            }
            _this.menuPostModel.appid = _this.appModel.appId;
            _this.menuPostModel.name = _this.newMenuName;
            _this.menuPostModel.creator_email = _this.appModel.creator_email;
            _this.menuPostModel.submenus = _this.submenuArr;
            _this.sendMenuToServer(_this.menuPostModel);
        });
        console.log('list on init BUILDER SUB ONE == ' + this.listItems);
    };
    BuilderSubFiveComponent.prototype.getSubmenuArrayL2 = function () {
        var _this = this;
        this.subMenuSub = this.menuService.getSubMenuArrayL2().subscribe(function (subArray) {
            _this.subMenuList2 = subArray;
            _this.submenuArr2 = [];
            // loop thru the array, build each elemant into the submenu model
            for (var b = 0; b < _this.subMenuList2.length; b++) {
                var subObject = {
                    'name': _this.subMenuList2[b],
                    'content': 'list',
                    'content_type': 'list',
                    'appid': _this.appModel.appId,
                    'top_menu_id': _this.top_menu_id
                };
                _this.submenuArr2.push(subObject);
            }
            _this.menuService.setObservableSub(_this.submenuArr2);
            // this.sendSubMenu2ToServer(this.submenuArr2);
        });
    };
    BuilderSubFiveComponent.prototype.sendMenuToServer = function (menuObj) {
        /*this.menuPostModel.appid = this.appModel.appId;
         this.menuPostModel.name = this.newMenuName;
         this.menuPostModel.creator_email = this.appModel.appCreatorEmail;
         this.menuPostModel.submenus = this.submenuArr;*/
        this.menuService.setMenu1Obs(menuObj);
    };
    BuilderSubFiveComponent.prototype.getMenuFromServer = function () {
        var _this = this;
        this.menuService.getMenu1Obs().subscribe(function (res) {
            _this.menuResponse = res;
            _this.menuAdded = true;
            _this.emptyState = false;
            if (_this.menuResponse.subMenus.length <= 0) {
                _this.menuResponse = null;
                console.log('getMenuFromServer inside menu lenght check');
            }
        }, function (err) {
            console.log('error in sending menu to server == ' + err);
            _this.notify.showError('Please Check your Network and try again ' + '\n' + err, 'An Error occurred', _this.vRef);
        });
    };
    BuilderSubFiveComponent.prototype.getSubmenu2Observables = function () {
        var _this = this;
        this.menuService.getSubmenuObs().subscribe(function (res) {
            _this.subMenuRes = res;
            console.log('menu response before split #BuilderSubOneComponent == ' + JSON.stringify(res));
            if (_this.subMenuRes.menu.length <= 0) {
                _this.subMenuRes = null;
                // at this point remove the top menu item too
                // this.menuResponse.subMenus.splice(this.menu1Index, 1);
                _this.removeMenu();
                console.log('menu response after split #BuilderSubOneComponent == ' + JSON.stringify(_this.menuResponse));
                // this.menuService.setMenu1Obs()
            }
        }, function (err) {
            console.log('error in sending menu to server == ' + err);
            _this.notify.showError('Please Check your Network and try again ' + '\n' + err, 'An Error occurred', _this.vRef);
        });
    };
    BuilderSubFiveComponent.prototype.addContent = function () {
        console.log('new menu name == ' + this.newMenuName);
    };
    BuilderSubFiveComponent.prototype.addFileToSubmenu2 = function (submenu, index) {
        console.log('submenu iD sent as top menu id == ' + submenu.id + ' with index == ' + index);
        this.top_menu_id = submenu.id;
        this.fileMenuName = submenu.name;
        this.activeSubIndex = index;
    };
    BuilderSubFiveComponent.prototype.getFileFromObservable = function () {
        var _this = this;
        this.fileSub = this.menuService.getObservableFile().subscribe(function (res) {
            _this.fileModel = res;
            _this.menuAdded = true;
            if (_this.top_menu_id == null) {
                _this.fileMenuName = _this.newMenuName;
            }
            _this.emptyState = false;
            _this.editedFileType = _this.fileModel.fileType;
            _this.editFileForm.controls['fileName'].setValue(_this.fileModel.name, { onlySelf: true });
            _this.editFileForm.controls['fileContent'].setValue(_this.fileModel.content, { onlySelf: true });
        });
    };
    BuilderSubFiveComponent.prototype.saveFileToServer = function (fileName, fileContent) {
        var _this = this;
        var fileArr = [];
        // file is being added to a submenu if TOP MENU ID does not exist
        if (this.top_menu_id != null) {
            var subObject = {
                'name': fileName,
                'content': fileContent,
                'content_type': this.editedFileType,
                'appid': this.appModel.appId,
                'top_menu_id': this.top_menu_id
            };
            fileArr.push(subObject);
            this.busy = this.menuService.postSubMenuToServer(fileArr).subscribe(function (res) {
                console.log('response on sending file to server #BuilderSubOneComponent == ' + JSON.stringify(res));
                // on successful push, remove the submenu from the arraylist
                if (_this.subMenuRes != null) {
                    console.log('inside submenu null checker');
                    _this.removeSubmenu();
                }
                else {
                    console.log('inside Menu null checker');
                    _this.removeMenu();
                }
                _this.fileSaveStatus = true;
            }, function (err) {
                console.log('error in sending menu to server == ' + err);
                _this.notify.showError('Please Check your Network and try again ' + '\n' + err, 'An Error occurred', _this.vRef);
            });
        }
        else {
            // the file is to be added to a menu item
            var subObject = {
                'name': fileName,
                'content': fileContent,
                'content_type': this.editedFileType,
                'appid': this.appModel.appId
            };
            fileArr.push(subObject);
            this.menuPostModel.appid = this.appModel.appId;
            this.menuPostModel.name = this.newMenuName;
            this.menuPostModel.creator_email = this.appModel.creator_email;
            this.menuPostModel.submenus = fileArr;
            this.menuService.postMenuToServer(this.menuPostModel).subscribe(function (mRes) {
                console.log('hot-linked file response == ' + JSON.stringify(mRes));
                _this.prepareNextMenu();
            });
        }
        console.log('response on saving file to server #BuilderSubOneComponent == ' + JSON.stringify(fileArr));
    };
    BuilderSubFiveComponent.prototype.removeMenu = function () {
        this.menuResponse.subMenus.splice(this.menu1Index, 1);
        this.fileModel = null;
        this.notify.showSuccess('File save Successfully' + '\nAssociated menu closed for editing', 'Success', this.vRef);
        this.checkMenuEditingState();
    };
    BuilderSubFiveComponent.prototype.removeSubmenu = function () {
        console.log('inside remove submenu');
        this.subMenuRes.menu.splice(this.activeSubIndex, 1);
        this.menuService.subMenuObs.next(this.subMenuRes);
        this.fileModel = null;
        this.notify.showSuccess('File save Successfully' + '\nAssociated menu closed for editing', 'Success', this.vRef);
    };
    // this method checks if all added menus have been edited and auto-navigates to the NEXT MENU
    BuilderSubFiveComponent.prototype.checkMenuEditingState = function () {
        console.log('checkmenuEditing state inside fileStatus check' + ' submenu lenght == ' + this.menuResponse.subMenus.length);
        if (this.menuResponse.subMenus.length <= 0) {
            this.menuResponse = null;
            if (this.fileSaveStatus) {
                this.prepareNextMenu();
            }
        }
    };
    BuilderSubFiveComponent.prototype.prepareNextMenu = function () {
        /*this.busy = this.themeService.getThemeById(this.appModel.appThemeId).subscribe(res => {
         this.mThemeModel = res.theme;
         this.menuService.setMenuModel(this.mThemeModel.fourth_menu, 'attach_money', 'event contents');
         this.route.navigate(['./page_four'], {relativeTo: this.aRoute.parent});
         });*/
        this.route.navigate(['../design'], { relativeTo: this.aRoute.parent });
    };
    return BuilderSubFiveComponent;
}());
BuilderSubFiveComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-builder-sub-five',
        template: __webpack_require__("../../../../../src/app/builder/builder-sub-five/builder-sub-five.component.html"),
        styles: [__webpack_require__("../../../../../src/app/builder/builder-sub-five/builder-sub-five.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__shared_service_notify_service__["a" /* NotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__shared_service_notify_service__["a" /* NotifyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9__shared_service_app_info_service__["a" /* AppInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared_service_app_info_service__["a" /* AppInfoService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_10__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_router__["b" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* ActivatedRoute */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_11__shared_service_theme_service__["a" /* ThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__shared_service_theme_service__["a" /* ThemeService */]) === "function" && _h || Object])
], BuilderSubFiveComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=builder-sub-five.component.js.map

/***/ }),

/***/ "../../../../../src/app/builder/builder-sub-four/builder-sub-four.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/builder/builder-sub-four/builder-sub-four.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"solid-border-heading\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-1\">\n        <!--<i class=\"material-icons flex-submenu-box\">home</i>-->\n        <button class=\"btn btn-primary btn-just-icon \">\n          <i class=\"material-icons\">{{menu_icon}}</i><b class=\"caret\"></b>\n        </button>\n      </div>\n      <div class=\"col-sm-4 col-sm-offset-0\" style=\"margin-top: -10px\">\n        <label style=\"margin-top: 15px; color: #4caf50; font-weight: 300; font-size: small\">Menu Title</label>\n        <div class=\"input-group\" style=\"margin-top: -30px\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newMenuName\" placeholder=\"{{menu_name}}\">\n        </div>\n      </div>\n      <div class=\"flex-right-both\" style=\"padding-top: 20px\">\n        <div class=\"col-sm-5\">\n          <div class=\"dropdown\">\n            <button href=\"#\" [disabled]=\"!newMenuName || menuAdded\" (click)=\"addContent()\"\n                    class=\"btn dropdown-toggle btn-sm\"\n                    data-toggle=\"dropdown\" aria-expanded=\"true\">Add Content<b class=\"caret\"></b>\n            </button>\n            <ul class=\"dropdown-menu\">\n              <li><a href=\"\" data-toggle=\"modal\" data-target=\"#myModal\">Menu List</a></li>\n              <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#audioModal\">Audio file</a></li>\n              <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#videoModal\">Video file</a></li>\n              <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#textareaModal\">Text</a></li>\n              <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#urlModal\">Url</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--</div>-->\n\n<!--Empty menu state view-->\n<div *ngIf=\"emptyState\">\n  <div class=\"row flex-center-both\">\n    <div class=\"col-sm-6\">\n      <div class=\"alert alert-with-icon alert-inverse\" style=\"box-shadow: none; padding: 10px;\">\n        <span class=\"text-center\"> No content added yet<br>Enter Menu TITLE to add contents</span>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--menu list to be populated after list has been populated-->\n<div class=\"panel panel-body\">\n  <div *ngIf=\"menuResponse\" class=\"container-fluid\" style=\"margin-top: 20px;\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"flex-left-both\">\n          <div class=\"nav nav-pills nav-pills-icons\" *ngFor=\"let li of menuResponse.subMenus, let i = index\">\n            <div class=\"card box-submenu-grey\">\n              <div class=\"card-header card-header-icon\" style=\"box-shadow: none\" data-background-color=\"orange\">\n                <p class=\"card-title\">{{li.name}}</p>\n              </div>\n              <div class=\"card-content\">\n                <div class=\"dropdown\">\n                  <button href=\"#\" class=\"btn btn-white btn-sm\" (click)=\"selectedSubmenu1(li, i)\"\n                          style=\"box-shadow: none\"\n                          data-toggle=\"dropdown\" aria-expanded=\"true\">\n                    Add Content\n                    <b class=\"caret\"></b>\n                  </button>\n                  <ul class=\"dropdown-menu\">\n                    <li><a href=\"\" data-toggle=\"modal\" data-target=\"#subMenuModal\">Menu List</a></li>\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#audioModal\">Audio file</a>\n                    </li>\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#videoModal\">Video file</a>\n                    </li>\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#textareaModal\">Text</a></li>\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#urlModal\">Url</a></li>\n                  </ul>\n                </div>\n              </div>\n              <div class=\"flex-center-both\" style=\"margin: -20px 0 -10px 0\">\n                <button class=\"btn btn-simple btn-xs btn-just-icon\" rel=\"tooltip\" title=\"delete\" style=\"padding: 2px;\"\n                        (click)=\"changeShowStatus(i, li)\">\n                  <span class=\"material-icons\">delete</span>\n                </button>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"padding-ten\" style=\"width: 100%!important;\">\n            <!--<div class=\"solid-border-box\">-->\n            <router-outlet></router-outlet>\n            <!--</div>-->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <!--submenu div to be visible once a new submenu has been added-->\n  <div *ngIf=\"subMenuRes\" class=\"container-fluid\" style=\"margin-top: 20px;\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <p class=\"font-title-text\" style=\"margin: 15px 0 -10px 20px\"><b>Submenu - {{top_menu_name}}</b></p>\n        <div class=\"flex-left-both\">\n          <div class=\"nav nav-pills nav-pills-icons\" *ngFor=\"let submenu of subMenuRes.menu, let i = index\">\n            <div class=\"card box-submenu2-grey\">\n              <div class=\"card-content\">\n                <div class=\"flex-center-both\" style=\"padding: 0 10px 0 10px!important;\">{{submenu.name}}</div>\n              </div>\n              <div class=\"card-footer\" style=\"padding: 0;\">\n                <div class=\"dropdown\">\n                  <button class=\"btn btn-simple btn-xs\" (click)=\"addFileToSubmenu2(submenu, i)\"\n                          data-toggle=\"dropdown\" aria-expanded=\"true\" style=\"padding: 2px;\">\n                    <span class=\"text-left\">Add<b class=\"caret\"></b></span>\n                  </button>\n                  <ul class=\"dropdown-menu\">\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#audioModal\">Audio file</a>\n                    </li>\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#videoModal\">Video file</a>\n                    </li>\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#textareaModal\">Text</a></li>\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#urlModal\">Url</a></li>\n                  </ul>\n                </div>\n                <button class=\"btn btn-simple btn-xs\" style=\"padding: 2px;\">\n                  <span class=\"text-right\">Delete</span>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <!--check for files and show file div-->\n  <div>\n    <div *ngIf=\"fileModel\">\n      <div class=\"row\">\n        <div class=\"card\">\n          <div class=\"form-margin\">\n            <!--div for audio and video files-->\n            <div class=\"flex-center-both font-title-text\"> = New File added to (<b>{{fileMenuName}}</b>) =</div>\n            <div class=\"card-content\" style=\"border-top: 1px solid #eeeeee; margin-top: 5px\">\n              <div class=\"text-left text-uppercase\" style=\"margin-bottom: 0\">File Info</div>\n              <form [formGroup]=\"editFileForm\">\n                <br>\n                <div class=\"row\">\n                  <div class=\"col-sm-3\"><b>File Name:</b></div>\n                  <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"!isEditMode\">\n                    <span class=\"text-capitalize\">{{fileModel.name}}</span>\n                  </div>\n                  <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"isEditMode\">\n                    <input type=\"text\" class=\"form-control\" style=\"margin: -35px 0 -5px 0; padding: 0\"\n                           formControlName=\"fileName\" value=\"{{fileModel.name}}\"></div>\n                  <div class=\"col col-sm-offset-0\" *ngIf=\"!isEditMode\">\n                    <button class=\"btn btn-simple btn-xs\" (click)=\"startEditMode()\" style=\"margin: 0\">\n                      <i class=\"material-icons\">edit</i></button>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-sm-3\"><b>File Type:</b></div>\n                  <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"!isEditMode\">\n                    <span class=\"text-capitalize\">{{fileModel.fileType}}</span>\n                  </div>\n                  <!--select for editing file type-->\n                  <div class=\"col-sm-offset-1 col-sm-6\" *ngIf=\"isEditMode\">\n                    <select class=\"bootstrap-select1 dropdown\" data-style=\"btn btn-primary btn-round btn-sm\" title=\"Single Select\"\n                            data-size=\"7\"\n                            [(ngModel)]=\"editedFileType\" [ngModelOptions]=\"{standalone: true}\">\n                      <option disabled selected>{{fileModel.fileType}}</option>\n                      <option *ngFor=\"let type of fileTypes\"\n                              [hidden]=\"fileModel.fileType === type.mValue\" [ngValue]=\"type.mValue\">{{type.mName}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"row\" *ngIf=\"fileModel.fileType === 'audio' || fileModel.fileType === 'video'\">\n                  <div class=\"col-sm-3\"><b>File Streaming Url:</b></div>\n                  <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"!isEditMode\">\n                    <span class=\"\">{{fileModel.content}}</span>\n                  </div>\n                  <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"isEditMode\">\n                    <input type=\"text\" class=\"form-control\" formControlName=\"fileContent\"\n                           style=\"margin: -20px 0 0 0\" value=\"{{fileModel.content}}\"></div>\n                  <div class=\"col col-sm-offset-0\" *ngIf=\"isEditMode\">\n                    <button class=\"btn btn-default btn-xs\"\n                            (click)=\"doneEditMode(editFileForm.get('fileName').value, editFileForm.get('fileContent').value)\"\n                            style=\"margin: 0\">\n                      <i class=\"material-icons\">done</i></button>\n                  </div>\n                </div>\n                <div class=\"row\" *ngIf=\"fileModel.fileType === 'text' || fileModel.fileType === 'url'\">\n                  <div class=\"col-sm-3\"><b>Text/Url:</b></div>\n                  <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"!isEditMode\">\n                    <span class=\"text-gray\">{{fileModel.content}}</span>\n                  </div>\n                  <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"isEditMode\">\n                    <input type=\"text\" class=\"form-control\" style=\"margin: -20px 0 0 0\"\n                           formControlName=\"fileContent\" value=\"{{fileModel.content}}\"></div>\n                  <div class=\"col col-sm-offset-0\" *ngIf=\"isEditMode\">\n                    <button class=\"btn btn-default btn-xs\" (click)=\"doneEditMode(editFileForm.get('fileName').value,\n              editFileForm.get('fileContent').value)\" style=\"margin: 0\">\n                      <i class=\"material-icons\">done</i></button>\n                  </div>\n                </div>\n                <div class=\"flex-center-both\" style=\"margin-top: 20px\">\n                  <button class=\"btn btn-primary btn-sm\" [disabled]=\"isEditMode\"\n                          (click)=\"saveFileToServer(editFileForm.get('fileName').value, editFileForm.get('fileContent').value)\">\n                    <span class=\"material-icons\">save</span> Save\n                  </button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n<div\n  [ngBusy]=\"{busy: busy, message: 'Loading...', backdrop: true, delay: 200, minDuration: 600, position: center}\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/builder/builder-sub-four/builder-sub-four.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_menu_service__ = __webpack_require__("../../../../../src/app/shared/service/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model_FileModel__ = __webpack_require__("../../../../../src/app/shared/model/FileModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_model_TextContentModel__ = __webpack_require__("../../../../../src/app/shared/model/TextContentModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_model_MenuPostModel__ = __webpack_require__("../../../../../src/app/shared/model/MenuPostModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_model_SubMenuPostModel__ = __webpack_require__("../../../../../src/app/shared/model/SubMenuPostModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_model_AppModel__ = __webpack_require__("../../../../../src/app/shared/model/AppModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_service_notify_service__ = __webpack_require__("../../../../../src/app/shared/service/notify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_service_app_info_service__ = __webpack_require__("../../../../../src/app/shared/service/app-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_service_theme_service__ = __webpack_require__("../../../../../src/app/shared/service/theme.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuilderSubFourComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var BuilderSubFourComponent = (function () {
    function BuilderSubFourComponent(menuService, fb, notify, vRef, ais, route, aRoute, themeService) {
        this.menuService = menuService;
        this.fb = fb;
        this.notify = notify;
        this.vRef = vRef;
        this.ais = ais;
        this.route = route;
        this.aRoute = aRoute;
        this.themeService = themeService;
        this.listItems = [];
        this.subMenuList2 = [];
        this.submenuArr = [];
        this.submenuArr2 = [];
        this.fileTypes = [{ mName: 'Audio', mValue: 'audio' }, { mName: 'Video', mValue: 'video' },
            { mName: 'Text', mValue: 'text' }, { mName: 'Url', mValue: 'url' }];
        this.listForm = this.fb.group({
            listField: [null]
        });
        this.editFileForm = this.fb.group({
            fileName: [null],
            fileContent: [null]
        });
    }
    BuilderSubFourComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuService.getMenuModel().subscribe(function (res) {
            _this.menu_model = res;
            _this.menu_name = _this.menu_model.menu_name;
            _this.menu_icon = _this.menu_model.menu_icon;
            console.log('returned menu modelled object == ' + JSON.stringify(res));
        });
        this.showHide = false;
        this.menuSelected2 = false;
        this.isEditMode = false;
        this.fileSaveStatus = false;
        this.emptyState = true;
        this.menuPostModel = new __WEBPACK_IMPORTED_MODULE_5__shared_model_MenuPostModel__["a" /* MenuPostModel */];
        this.submenuPModel = new __WEBPACK_IMPORTED_MODULE_6__shared_model_SubMenuPostModel__["a" /* SubMenuPostModel */];
        // this.fileModel = new FileModel;
        this.editedFileType = 'audio';
        this.textModel = new __WEBPACK_IMPORTED_MODULE_3__shared_model_TextContentModel__["a" /* TextContentModel */];
        this.appModel = new __WEBPACK_IMPORTED_MODULE_7__shared_model_AppModel__["a" /* AppModel */];
        this.appModel = this.ais.getAppInfo();
        this.getMenuFromServer();
        this.getSubmenuArr();
        this.getSubmenuArrayL2();
        this.getFileFromObservable();
        this.getSubmenu2Observables();
        // this.getSubmenuArr();
    };
    BuilderSubFourComponent.prototype.ngOnChanges = function () {
    };
    BuilderSubFourComponent.prototype.ngOnDestroy = function () {
        if (this.subMenuSub != null) {
            this.subMenuSub.unsubscribe();
        }
        if (this.busy != null) {
            this.busy.unsubscribe();
        }
    };
    BuilderSubFourComponent.prototype.startEditMode = function () {
        this.isEditMode = true;
    };
    BuilderSubFourComponent.prototype.doneEditMode = function (fileName, fileContent) {
        this.isEditMode = false;
        var editedFile = new __WEBPACK_IMPORTED_MODULE_2__shared_model_FileModel__["a" /* FileModel */];
        editedFile.name = fileName;
        editedFile.content = fileContent;
        editedFile.fileType = this.editedFileType;
        this.menuService.setObservableFile(editedFile);
        console.log('selected option jsonStrinigfy == ' + JSON.stringify(editedFile)
            + ' editted name and con == ' + fileName + ' cc == ' + fileContent);
    };
    BuilderSubFourComponent.prototype.changeShowStatus = function (id, name) {
        console.log('passed array id == ' + id + ' name == ' + name);
        this.listItems.splice(id, 1);
        console.log('listItem after del == ' + this.listItems);
    };
    BuilderSubFourComponent.prototype.selectedSubmenu1 = function (submenu, submenu1) {
        // console.log('selected submenu == ' + 'sub idd == ' + submenu.id + ' passed TOPID == ' + topId);
        this.top_menu_id = submenu.id;
        this.top_menu_name = submenu.name;
        this.menu1Index = submenu1;
        this.fileMenuName = submenu.name;
    };
    BuilderSubFourComponent.prototype.getSubmenuArr = function () {
        var _this = this;
        this.subMenuSub = this.menuService.getSubMenuArrayL1().subscribe(function (subArray) {
            _this.listItems = subArray;
            _this.submenuArr = [];
            // loop thru the array, build each elemant into the submenu model
            for (var a = 0; a < _this.listItems.length; a++) {
                var subObject = {
                    'name': _this.listItems[a],
                    'content': '',
                    'content_type': '',
                    'appid': _this.appModel.appId
                };
                _this.submenuArr.push(subObject);
            }
            _this.menuPostModel.appid = _this.appModel.appId;
            _this.menuPostModel.name = _this.newMenuName;
            _this.menuPostModel.creator_email = _this.appModel.creator_email;
            _this.menuPostModel.submenus = _this.submenuArr;
            _this.sendMenuToServer(_this.menuPostModel);
        });
        console.log('list on init BUILDER SUB ONE == ' + this.listItems);
    };
    BuilderSubFourComponent.prototype.getSubmenuArrayL2 = function () {
        var _this = this;
        this.subMenuSub = this.menuService.getSubMenuArrayL2().subscribe(function (subArray) {
            _this.subMenuList2 = subArray;
            _this.submenuArr2 = [];
            // loop thru the array, build each elemant into the submenu model
            for (var b = 0; b < _this.subMenuList2.length; b++) {
                var subObject = {
                    'name': _this.subMenuList2[b],
                    'content': 'list',
                    'content_type': 'list',
                    'appid': _this.appModel.appId,
                    'top_menu_id': _this.top_menu_id
                };
                _this.submenuArr2.push(subObject);
            }
            _this.menuService.setObservableSub(_this.submenuArr2);
            // this.sendSubMenu2ToServer(this.submenuArr2);
        });
    };
    BuilderSubFourComponent.prototype.sendMenuToServer = function (menuObj) {
        /*this.menuPostModel.appid = this.appModel.appId;
         this.menuPostModel.name = this.newMenuName;
         this.menuPostModel.creator_email = this.appModel.appCreatorEmail;
         this.menuPostModel.submenus = this.submenuArr;*/
        this.menuService.setMenu1Obs(menuObj);
    };
    BuilderSubFourComponent.prototype.getMenuFromServer = function () {
        var _this = this;
        this.menuService.getMenu1Obs().subscribe(function (res) {
            _this.menuResponse = res;
            _this.menuAdded = true;
            _this.emptyState = false;
            if (_this.menuResponse.subMenus.length <= 0) {
                _this.menuResponse = null;
                console.log('getMenuFromServer inside menu lenght check');
            }
        }, function (err) {
            console.log('error in sending menu to server == ' + err);
            _this.notify.showError('Please Check your Network and try again ' + '\n' + err, 'An Error occurred', _this.vRef);
        });
    };
    BuilderSubFourComponent.prototype.getSubmenu2Observables = function () {
        var _this = this;
        this.menuService.getSubmenuObs().subscribe(function (res) {
            _this.subMenuRes = res;
            console.log('menu response before split #BuilderSubOneComponent == ' + JSON.stringify(res));
            if (_this.subMenuRes.menu.length <= 0) {
                _this.subMenuRes = null;
                // at this point remove the top menu item too
                // this.menuResponse.subMenus.splice(this.menu1Index, 1);
                _this.removeMenu();
                console.log('menu response after split #BuilderSubOneComponent == ' + JSON.stringify(_this.menuResponse));
                // this.menuService.setMenu1Obs()
            }
        }, function (err) {
            console.log('error in sending menu to server == ' + err);
            _this.notify.showError('Please Check your Network and try again ' + '\n' + err, 'An Error occurred', _this.vRef);
        });
    };
    BuilderSubFourComponent.prototype.addContent = function () {
        console.log('new menu name == ' + this.newMenuName);
    };
    BuilderSubFourComponent.prototype.addFileToSubmenu2 = function (submenu, index) {
        console.log('submenu iD sent as top menu id == ' + submenu.id + ' with index == ' + index);
        this.top_menu_id = submenu.id;
        this.fileMenuName = submenu.name;
        this.activeSubIndex = index;
    };
    BuilderSubFourComponent.prototype.getFileFromObservable = function () {
        var _this = this;
        this.fileSub = this.menuService.getObservableFile().subscribe(function (res) {
            _this.fileModel = res;
            _this.menuAdded = true;
            if (_this.top_menu_id == null) {
                _this.fileMenuName = _this.newMenuName;
            }
            _this.emptyState = false;
            _this.editedFileType = _this.fileModel.fileType;
            _this.editFileForm.controls['fileName'].setValue(_this.fileModel.name, { onlySelf: true });
            _this.editFileForm.controls['fileContent'].setValue(_this.fileModel.content, { onlySelf: true });
        });
    };
    BuilderSubFourComponent.prototype.saveFileToServer = function (fileName, fileContent) {
        var _this = this;
        var fileArr = [];
        // file is being added to a submenu if TOP MENU ID does not exist
        if (this.top_menu_id != null) {
            var subObject = {
                'name': fileName,
                'content': fileContent,
                'content_type': this.editedFileType,
                'appid': this.appModel.appId,
                'top_menu_id': this.top_menu_id
            };
            fileArr.push(subObject);
            this.busy = this.menuService.postSubMenuToServer(fileArr).subscribe(function (res) {
                console.log('response on sending file to server #BuilderSubOneComponent == ' + JSON.stringify(res));
                // on successful push, remove the submenu from the arraylist
                if (_this.subMenuRes != null) {
                    console.log('inside submenu null checker');
                    _this.removeSubmenu();
                }
                else {
                    console.log('inside Menu null checker');
                    _this.removeMenu();
                }
                _this.fileSaveStatus = true;
            }, function (err) {
                console.log('error in sending menu to server == ' + err);
                _this.notify.showError('Please Check your Network and try again ' + '\n' + err, 'An Error occurred', _this.vRef);
            });
        }
        else {
            // the file is to be added to a menu item
            var subObject = {
                'name': fileName,
                'content': fileContent,
                'content_type': this.editedFileType,
                'appid': this.appModel.appId
            };
            fileArr.push(subObject);
            this.menuPostModel.appid = this.appModel.appId;
            this.menuPostModel.name = this.newMenuName;
            this.menuPostModel.creator_email = this.appModel.creator_email;
            this.menuPostModel.submenus = fileArr;
            this.menuService.postMenuToServer(this.menuPostModel).subscribe(function (mRes) {
                console.log('hot-linked file response == ' + JSON.stringify(mRes));
                _this.prepareNextMenu();
            });
        }
        console.log('response on saving file to server #BuilderSubOneComponent == ' + JSON.stringify(fileArr));
    };
    BuilderSubFourComponent.prototype.removeMenu = function () {
        this.menuResponse.subMenus.splice(this.menu1Index, 1);
        this.fileModel = null;
        this.notify.showSuccess('File save Successfully' + '\nAssociated menu closed for editing', 'Success', this.vRef);
        this.checkMenuEditingState();
    };
    BuilderSubFourComponent.prototype.removeSubmenu = function () {
        console.log('inside remove submenu');
        this.subMenuRes.menu.splice(this.activeSubIndex, 1);
        this.menuService.subMenuObs.next(this.subMenuRes);
        this.fileModel = null;
        this.notify.showSuccess('File save Successfully' + '\nAssociated menu closed for editing', 'Success', this.vRef);
    };
    // this method checks if all added menus have been edited and auto-navigates to the NEXT MENU
    BuilderSubFourComponent.prototype.checkMenuEditingState = function () {
        console.log('checkmenuEditing state inside fileStatus check' + ' submenu lenght == ' + this.menuResponse.subMenus.length);
        if (this.menuResponse.subMenus.length <= 0) {
            this.menuResponse = null;
            if (this.fileSaveStatus) {
                this.prepareNextMenu();
            }
        }
    };
    BuilderSubFourComponent.prototype.prepareNextMenu = function () {
        var _this = this;
        this.busy = this.themeService.getThemeById(this.appModel.themeid).subscribe(function (res) {
            _this.mThemeModel = res.theme;
            _this.menuService.setMenuModel(_this.mThemeModel.fifth_menu, 'more_vert', 'event contents');
            _this.route.navigate(['./page_five'], { relativeTo: _this.aRoute.parent });
        });
    };
    return BuilderSubFourComponent;
}());
BuilderSubFourComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-builder-sub-four',
        template: __webpack_require__("../../../../../src/app/builder/builder-sub-four/builder-sub-four.component.html"),
        styles: [__webpack_require__("../../../../../src/app/builder/builder-sub-four/builder-sub-four.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__shared_service_notify_service__["a" /* NotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__shared_service_notify_service__["a" /* NotifyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9__shared_service_app_info_service__["a" /* AppInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared_service_app_info_service__["a" /* AppInfoService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_10__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_router__["b" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* ActivatedRoute */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_11__shared_service_theme_service__["a" /* ThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__shared_service_theme_service__["a" /* ThemeService */]) === "function" && _h || Object])
], BuilderSubFourComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=builder-sub-four.component.js.map

/***/ }),

/***/ "../../../../../src/app/builder/builder-sub-one/builder-sub-one.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.android-phone {\r\n  background: #303030;\r\n  position: fixed;\r\n  margin: 60px 0px 0px 100px;\r\n  width: 360px;\r\n  height: 640px;\r\n  padding: 0px;\r\n  border-top: 57px solid #303030;\r\n  border-right: 18px solid #303030;\r\n  border-bottom: 57px solid #303030;\r\n  border-left: 18px solid #303030;\r\n  border-radius: 30px;\r\n  display: block;\r\n  box-sizing: content-box;\r\n  -moz-box-sizing: content-box;\r\n  vertical-align: top;\r\n  -webkit-transform: scale(0.7);\r\n  transform: scale(0.7);\r\n  -webkit-transform-origin: left top;\r\n  transform-origin: left top;\r\n}\r\n@media only screen and (max-width: 1040px) {\r\n  .android-phone {\r\n    margin: 60px 0px 0px 30px;\r\n  }\r\n}\r\n@media only screen and (max-width: 980px) {\r\n  .android-phone {\r\n    margin: 60px 0px 0px 0px;\r\n  }\r\n}\r\n@media only screen and (max-width: 900px) {\r\n  .android-phone {\r\n    margin: 60px 0px 0px 0px;\r\n    -webkit-transform: scale(0.58);\r\n    transform: scale(0.58);\r\n  }\r\n}\r\n@media only screen and (max-width: 769px) {\r\n  .android-phone {\r\n    margin: 60px 0px 0px 0px;\r\n    -webkit-transform: scale(0.55);\r\n    transform: scale(0.55);\r\n  }\r\n}\r\n.android-phone #preview-wrapper {\r\n  position: absolute;\r\n  width: 360px;\r\n  height: 640px;\r\n  overflow: hidden;\r\n}\r\n.android-phone #android-navigation {\r\n  display: block;\r\n  position: absolute;\r\n  right: 0px;\r\n  bottom: 0px;\r\n  z-index: 10;\r\n  width: 100%;\r\n  height: 48px;\r\n  background: #000;\r\n  box-sizing: border-box;\r\n}\r\n.android-phone .android-back {\r\n  position: absolute;\r\n  left: 15%;\r\n  top: 13px;\r\n  font-size: 26px;\r\n  color: #fff;\r\n  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);\r\n}\r\n.android-phone .android-home {\r\n  width: 20px;\r\n  height: 20px;\r\n  position: absolute;\r\n  left: 50%;\r\n  margin-top: 13px;\r\n  margin-left: -8px;\r\n  border: 3px solid #fff;\r\n  border-radius: 50%;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15), inset 0px 2px 2px rgba(0, 0, 0, 0.15);\r\n}\r\n.android-phone #android-navigation:before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background: rgba(0, 0, 0, 0.25);\r\n}\r\n.android-phone #android-navigation:after {\r\n  position: absolute;\r\n  content: '';\r\n  right: 15%;\r\n  margin-top: 13px;\r\n  width: 13px;\r\n  height: 13px;\r\n  border: 3px solid #fff;\r\n  border-radius: 3px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15), inset 0px 2px 2px rgba(0, 0, 0, 0.15);\r\n}\r\n.android-phone .android-top {\r\n  width: 102%;\r\n  height: 57px;\r\n  position: absolute;\r\n  top: -75px;\r\n  left: 0px;\r\n  margin-left: -1%;\r\n  overflow: hidden;\r\n}\r\n.android-phone .android-top:after {\r\n  content: '';\r\n  width: 100%;\r\n  height: 57px;\r\n  border-radius: 50%;\r\n  background: #303030;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n.android-phone .android-bottom {\r\n  width: 102%;\r\n  height: 57px;\r\n  position: absolute;\r\n  bottom: -75px;\r\n  right: 0px;\r\n  margin-right: -1%;\r\n  overflow: hidden;\r\n}\r\n.android-phone .android-bottom:after {\r\n  content: '';\r\n  width: 100%;\r\n  height: 57px;\r\n  border-radius: 50%;\r\n  background: #303030;\r\n  position: absolute;\r\n  bottom: 0px;\r\n  left: 0;\r\n}\r\n.android-phone #statusbar-preview-android {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 25px;\r\n  top: 0px;\r\n}\r\n.android-phone #statusbar-preview-android:before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background: rgba(0, 0, 0, 0.25);\r\n}\r\n.android-phone #statusbar-time-android {\r\n  position: absolute;\r\n  right: 8px;\r\n  font-size: 15px;\r\n  font-family: \"Roboto\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\r\n  text-align: center;\r\n  line-height: 25px;\r\n  font-weight: normal;\r\n  transition: all 500ms;\r\n  color: #fff;\r\n}\r\n.android-phone #statusbar-connection-android {\r\n  position: absolute;\r\n  top: 0px;\r\n  right: 60px;\r\n  margin-top: 0px;\r\n  margin-left: 5px;\r\n  transition: all 500ms;\r\n}\r\n.android-phone #statusbar-connection-android::before {\r\n  position: absolute;\r\n  content: '';\r\n  right: 10px;\r\n  margin-top: 3px;\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n  border-width: 0 0 15px 15px;\r\n  border-color: transparent transparent #fff transparent;\r\n  transition: all 500ms;\r\n}\r\n.android-phone #statusbar-battery-android {\r\n  position: absolute;\r\n  top: 0px;\r\n  right: 0px;\r\n  width: 15px;\r\n  height: 10px;\r\n  padding: 1px;\r\n  border: 1px solid #fff;\r\n  margin-top: 6px;\r\n  margin-right: 50px;\r\n  transition: all 500ms;\r\n  -webkit-transform: rotate(-90deg);\r\n          transform: rotate(-90deg);\r\n}\r\n.android-phone #statusbar-battery-android:before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n  width: 70%;\r\n  height: 8px;\r\n  background: #fff;\r\n  transition: all 500ms;\r\n}\r\n.android-phone #statusbar-battery-android:after {\r\n  content: '';\r\n  position: absolute;\r\n  right: -2px;\r\n  top: 2px;\r\n  width: 1px;\r\n  height: 4px;\r\n  background: #fff;\r\n  transition: all 500ms;\r\n}\r\n/* PREVIEW-CONTENT ***********************************************/\r\n.android-phone #preview-content {\r\n  position: relative;\r\n  top: 80px;\r\n  left: 0;\r\n  height: 560px;\r\n  width: 100%;\r\n  padding: 0px;\r\n  background: #000;\r\n  text-align: left;\r\n  display: block;\r\n  overflow-y: scroll;\r\n  /* has to be scroll, not auto */\r\n  -webkit-overflow-scrolling: touch;\r\n  overflow-x: hidden;\r\n  box-sizing: border-box;\r\n}\r\n.android-phone #topbar-background {\r\n  width: 100%;\r\n  height: 55px;\r\n  background: #181818;\r\n  text-align: center;\r\n  z-index: 5;\r\n  position: absolute;\r\n  top: 25px;\r\n  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);\r\n}\r\n.android-phone #topbar-button {\r\n  position: absolute;\r\n  left: 15px;\r\n  top: 17px;\r\n  font-size: 20px;\r\n  padding: 0px;\r\n  background: transparent;\r\n  color: #e9e9e9;\r\n  border-radius: 3px;\r\n}\r\n.android-phone #topbar-title {\r\n  font-size: 18px;\r\n  line-height: 55px;\r\n  color: #e9e9e9;\r\n  font-weight: 300;\r\n  float: left;\r\n  margin-left: 50px;\r\n}\r\n.android-phone .content-title h3 {\r\n  font-size: 22px;\r\n}\r\n.android-phone .content-subheader h4 {\r\n  font-size: 18px;\r\n}\r\n.android-phone .content-text p {\r\n  font-size: 16px;\r\n  line-height: 135%;\r\n}\r\n.android-phone .content-detail span {\r\n  font-size: 12px;\r\n}\r\n.android-phone #content-button {\r\n  -webkit-appearance: none;\r\n  font-weight: 500;\r\n  border: none;\r\n  padding: 10px 20px;\r\n  margin: 15px 0px;\r\n  max-width: 100%;\r\n  text-transform: uppercase;\r\n  display: inline-block;\r\n  border-radius: 3px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);\r\n}\r\n.android-phone #content-forms {\r\n  margin-top: 10px;\r\n}\r\n.android-phone #content-input {\r\n  background: #f5f5f5;\r\n}\r\n.android-phone .list-item {\r\n  padding: 10px;\r\n  position: relative;\r\n  width: 100%;\r\n  border-bottom: 1px solid #000;\r\n  min-height: 40px;\r\n}\r\n.android-phone .list-image-wrapper {\r\n  position: relative;\r\n  max-width: 50%;\r\n  height: 100%;\r\n  background: #808080;\r\n  display: inline-block;\r\n  border-radius: 50%;\r\n}\r\n.android-phone .list-image {\r\n  width: 100%;\r\n  hieght: 0;\r\n  padding-bottom: 100%;\r\n}\r\n.android-phone .list-content-wrapper {\r\n  max-width: 70%;\r\n  height: 100%;\r\n  display: inline-block;\r\n  overflow: hidden;\r\n}\r\n.android-phone .list-title {\r\n  position: relative;\r\n  margin-left: 5px;\r\n  vertical-align: top;\r\n  display: inline-block;\r\n}\r\n.android-phone .list-item .list-description {\r\n  position: relative;\r\n  margin-top: 5px;\r\n  margin-left: 5px;\r\n  display: block;\r\n}\r\n/* EDGE CASES *****************/\r\n.android-phone #statusbar-preview {\r\n  display: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/builder/builder-sub-one/builder-sub-one.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"row\">\n  <div class=\"col-md-8\">-->\n    <div class=\"solid-border-heading\">\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"col-sm-1\">\n            <!--<i class=\"material-icons flex-submenu-box\">home</i>-->\n            <button class=\"btn btn-primary btn-just-icon \">\n              <i class=\"material-icons\">{{menu_icon}}</i><b class=\"caret\"></b>\n            </button>\n          </div>\n          <div class=\"col-sm-4 col-sm-offset-0\" style=\"margin-top: -10px\">\n            <label style=\"margin-top: 15px; color: #4caf50; font-weight: 300; font-size: small\">Menu Title</label>\n            <div class=\"input-group\" style=\"margin-top: -30px\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newMenuName\" placeholder=\"{{menu_name}}\">\n            </div>\n          </div>\n          <div class=\"flex-right-both\" style=\"padding-top: 20px\">\n            <div class=\"col-sm-5\">\n              <div class=\"dropdown\">\n                <!--<button href=\"#\" [disabled]=\"!newMenuName\" (click)=\"addContent()\"-->\n                <button href=\"#\" [disabled]=\"!newMenuName || menuAdded\" (click)=\"addContent()\"\n                        class=\"btn dropdown-toggle btn-sm\"\n                        data-toggle=\"dropdown\" aria-expanded=\"true\">Add Content<b class=\"caret\"></b>\n                </button>\n                <ul class=\"dropdown-menu\">\n                  <li><a href=\"\" data-toggle=\"modal\" data-target=\"#myModal\">Menu List</a></li>\n                  <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#audioModal\">Audio file</a>\n                  </li>\n                  <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#videoModal\">Video file</a>\n                  </li>\n                  <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#textareaModal\">Text</a></li>\n                  <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#urlModal\">Url</a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--</div>-->\n\n    <!--Empty menu state view-->\n    <div *ngIf=\"emptyState\">\n      <div class=\"row flex-center-both\">\n        <div class=\"col-sm-6\">\n          <div class=\"alert alert-with-icon alert-inverse\" style=\"box-shadow: none; padding: 10px;\">\n            <span class=\"text-center\"> No content added yet<br>Enter Menu TITLE to add contents</span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!--menu list to be populated after list has been populated-->\n    <div class=\"panel panel-body\">\n      <div *ngIf=\"menuResponse\" class=\"container-fluid\" style=\"margin-top: 20px;\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"flex-left-both\">\n              <div class=\"nav nav-pills nav-pills-icons\" *ngFor=\"let li of menuResponse.subMenus, let i = index\">\n                <div class=\"card box-submenu-grey\">\n                  <div class=\"card-header card-header-icon\" style=\"box-shadow: none\" data-background-color=\"orange\">\n                    <p class=\"card-title\">{{li.name}}</p>\n                  </div>\n                  <div class=\"card-content\">\n                    <div class=\"dropdown\">\n                      <button href=\"#\" class=\"btn btn-white btn-sm\" (click)=\"selectedSubmenu1(li, i)\"\n                              style=\"box-shadow: none\"\n                              data-toggle=\"dropdown\" aria-expanded=\"true\">\n                        Add Content\n                        <b class=\"caret\"></b>\n                      </button>\n                      <ul class=\"dropdown-menu\">\n                        <li><a href=\"\" data-toggle=\"modal\" data-target=\"#subMenuModal\">Menu List</a></li>\n                        <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#audioModal\">Audio\n                          file</a>\n                        </li>\n                        <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#videoModal\">Video\n                          file</a>\n                        </li>\n                        <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#textareaModal\">Text</a>\n                        </li>\n                        <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#urlModal\">Url</a></li>\n                      </ul>\n                    </div>\n                  </div>\n                  <div class=\"flex-center-both\" style=\"margin: -20px 0 -10px 0\">\n                    <button class=\"btn btn-simple btn-xs btn-just-icon\" rel=\"tooltip\" title=\"delete\"\n                            style=\"padding: 2px;\"\n                            (click)=\"deleteSubmenu(i, li.id)\">\n                      <span class=\"material-icons\">delete</span>\n                    </button>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"padding-ten\" style=\"width: 100%!important;\">\n                <!--<div class=\"solid-border-box\">-->\n                <router-outlet></router-outlet>\n                <!--</div>-->\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n      <!--submenu div to be visible once a new submenu has been added-->\n      <div *ngIf=\"subMenuRes\" class=\"container-fluid\" style=\"margin-top: 20px;\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <p class=\"font-title-text\" style=\"margin: 15px 0 -10px 20px\"><b>Submenu - {{top_menu_name}}</b></p>\n            <div class=\"flex-left-both\">\n              <div class=\"nav nav-pills nav-pills-icons\" *ngFor=\"let submenu of subMenuRes.menu, let i = index\">\n                <div class=\"card box-submenu2-grey\">\n                  <div class=\"card-content\">\n                    <div class=\"flex-center-both\" style=\"padding: 0 10px 0 10px!important;\">{{submenu.name}}</div>\n                  </div>\n                  <div class=\"card-footer\" style=\"padding: 0;\">\n                    <div class=\"dropdown\">\n                      <button class=\"btn btn-simple btn-xs\" (click)=\"addFileToSubmenu2(submenu, i)\"\n                              data-toggle=\"dropdown\" aria-expanded=\"true\" style=\"padding: 2px;\">\n                        <span class=\"text-left\">Add<b class=\"caret\"></b></span>\n                      </button>\n                      <ul class=\"dropdown-menu\">\n                        <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#audioModal\">Audio\n                          file</a>\n                        </li>\n                        <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#videoModal\">Video\n                          file</a>\n                        </li>\n                        <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#textareaModal\">Text</a>\n                        </li>\n                        <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#urlModal\">Url</a></li>\n                      </ul>\n                    </div>\n                    <button class=\"btn btn-simple btn-xs\" style=\"padding: 2px;\">\n                      <span class=\"text-right\">Delete</span>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n      <!--check for files and show file div-->\n      <div>\n        <div *ngIf=\"fileModel\">\n          <div class=\"row\">\n            <div class=\"card\">\n              <div class=\"form-margin\">\n                <!--div for audio and video files-->\n                <div class=\"flex-center-both font-title-text\"> = New File added to (<b>{{fileMenuName}}</b>) =</div>\n                <div class=\"card-content\" style=\"border-top: 1px solid #eeeeee; margin-top: 5px\">\n                  <div class=\"text-left text-uppercase\" style=\"margin-bottom: 0\">File Info</div>\n                  <form [formGroup]=\"editFileForm\">\n                    <br>\n                    <div class=\"row\">\n                      <div class=\"col-sm-3\"><b>File Name:</b></div>\n                      <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"!isEditMode\">\n                        <span class=\"text-capitalize\">{{fileModel.name}}</span>\n                      </div>\n                      <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"isEditMode\">\n                        <input type=\"text\" class=\"form-control\" style=\"margin: -35px 0 -5px 0; padding: 0\"\n                               formControlName=\"fileName\" value=\"{{fileModel.name}}\"></div>\n                      <div class=\"col col-sm-offset-0\" *ngIf=\"!isEditMode\">\n                        <button class=\"btn btn-simple btn-xs\" (click)=\"startEditMode()\" style=\"margin: 0\">\n                          <i class=\"material-icons\">edit</i></button>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-sm-3\"><b>File Type:</b></div>\n                      <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"!isEditMode\">\n                        <span class=\"text-capitalize\">{{fileModel.fileType}}</span>\n                      </div>\n                      <!--select for editing file type-->\n                      <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"isEditMode\">\n                        <select class=\"bootstrap-select1 dropdown\" style=\" box-shadow: none\" data-style=\"btn\"\n                                data-size=\"7\"\n                                [(ngModel)]=\"editedFileType\" [ngModelOptions]=\"{standalone: true}\">\n                          <option disabled selected>{{fileModel.fileType}}</option>\n                          <option *ngFor=\"let type of fileTypes\"\n                                  [hidden]=\"fileModel.fileType === type.mValue\" [ngValue]=\"type.mValue\">{{type.mName}}\n                          </option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"row\" *ngIf=\"fileModel.fileType === 'audio' || fileModel.fileType === 'video'\">\n                      <div class=\"col-sm-3\"><b>File Streaming Url:</b></div>\n                      <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"!isEditMode\">\n                        <span class=\"\">{{fileModel.content}}</span>\n                      </div>\n                      <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"isEditMode\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"fileContent\"\n                               style=\"margin: -20px 0 0 0\" value=\"{{fileModel.content}}\"></div>\n                      <div class=\"col col-sm-offset-0\" *ngIf=\"isEditMode\">\n                        <button class=\"btn btn-default btn-xs\"\n                                (click)=\"doneEditMode(editFileForm.get('fileName').value, editFileForm.get('fileContent').value)\"\n                                style=\"margin: 0\">\n                          <i class=\"material-icons\">done</i></button>\n                      </div>\n                    </div>\n                    <div class=\"row\" *ngIf=\"fileModel.fileType === 'text' || fileModel.fileType === 'url'\">\n                      <div class=\"col-sm-3\"><b>Text/Url:</b></div>\n                      <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"!isEditMode\">\n                        <span class=\"text-gray\">{{fileModel.content}}</span>\n                      </div>\n                      <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"isEditMode\">\n                        <input type=\"text\" class=\"form-control\" style=\"margin: -20px 0 0 0\"\n                               formControlName=\"fileContent\" value=\"{{fileModel.content}}\"></div>\n                      <div class=\"col col-sm-offset-0\" *ngIf=\"isEditMode\">\n                        <button class=\"btn btn-default btn-xs\" (click)=\"doneEditMode(editFileForm.get('fileName').value,\n              editFileForm.get('fileContent').value)\" style=\"margin: 0\">\n                          <i class=\"material-icons\">done</i></button>\n                      </div>\n                    </div>\n                    <div class=\"flex-center-both\" style=\"margin-top: 20px\">\n                      <button class=\"btn btn-primary btn-sm\" [disabled]=\"isEditMode\"\n                              (click)=\"saveFileToServer(editFileForm.get('fileName').value, editFileForm.get('fileContent').value)\">\n                        <span class=\"material-icons\">save</span> Save\n                      </button>\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  <!--</div>-->\n\n<div\n  [ngBusy]=\"{busy: busy, message: 'Loading...', backdrop: true, delay: 200, minDuration: 600, position: center}\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/builder/builder-sub-one/builder-sub-one.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_menu_service__ = __webpack_require__("../../../../../src/app/shared/service/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_model_MenuPostModel__ = __webpack_require__("../../../../../src/app/shared/model/MenuPostModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_model_AppModel__ = __webpack_require__("../../../../../src/app/shared/model/AppModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_app_info_service__ = __webpack_require__("../../../../../src/app/shared/service/app-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_service_notify_service__ = __webpack_require__("../../../../../src/app/shared/service/notify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_model_SubMenuPostModel__ = __webpack_require__("../../../../../src/app/shared/model/SubMenuPostModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_model_FileModel__ = __webpack_require__("../../../../../src/app/shared/model/FileModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_model_TextContentModel__ = __webpack_require__("../../../../../src/app/shared/model/TextContentModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_service_theme_service__ = __webpack_require__("../../../../../src/app/shared/service/theme.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuilderSubOneComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var BuilderSubOneComponent = (function () {
    function BuilderSubOneComponent(menuService, fb, notify, vRef, ais, route, aRoute, themeService) {
        this.menuService = menuService;
        this.fb = fb;
        this.notify = notify;
        this.vRef = vRef;
        this.ais = ais;
        this.route = route;
        this.aRoute = aRoute;
        this.themeService = themeService;
        this.listItems = [];
        this.subMenuList2 = [];
        this.submenuArr = [];
        this.submenuArr2 = [];
        this.fileTypes = [{ mName: 'Audio', mValue: 'audio' }, { mName: 'Video', mValue: 'video' },
            { mName: 'Text', mValue: 'text' }, { mName: 'Url', mValue: 'url' }];
        this.listForm = this.fb.group({
            listField: [null]
        });
        this.editFileForm = this.fb.group({
            fileName: [null],
            fileContent: [null]
        });
    }
    BuilderSubOneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuService.getMenuModel().subscribe(function (res) {
            _this.menu_model = res;
            _this.menu_name = _this.menu_model.menu_name;
            _this.menu_icon = _this.menu_model.menu_icon;
            console.log('returned menu modelled object == ' + JSON.stringify(res));
        });
        this.showHide = false;
        this.menuSelected2 = false;
        this.isEditMode = false;
        this.fileSaveStatus = false;
        this.emptyState = true;
        this.menuPostModel = new __WEBPACK_IMPORTED_MODULE_3__shared_model_MenuPostModel__["a" /* MenuPostModel */];
        this.submenuPModel = new __WEBPACK_IMPORTED_MODULE_7__shared_model_SubMenuPostModel__["a" /* SubMenuPostModel */];
        // this.fileModel = new FileModel;
        this.editedFileType = 'audio';
        this.textModel = new __WEBPACK_IMPORTED_MODULE_9__shared_model_TextContentModel__["a" /* TextContentModel */];
        this.appModel = new __WEBPACK_IMPORTED_MODULE_4__shared_model_AppModel__["a" /* AppModel */];
        this.appModel = this.ais.getAppInfo();
        this.getMenuFromServer();
        this.getSubmenuArr();
        this.getSubmenuArrayL2();
        this.getFileFromObservable();
        this.getSubmenu2Observables();
        // this.getSubmenuArr();
    };
    BuilderSubOneComponent.prototype.ngOnChanges = function () {
    };
    BuilderSubOneComponent.prototype.ngOnDestroy = function () {
        if (this.subMenuSub != null) {
            this.subMenuSub.unsubscribe();
        }
        if (this.busy != null) {
            this.busy.unsubscribe();
        }
    };
    BuilderSubOneComponent.prototype.startEditMode = function () {
        this.isEditMode = true;
    };
    BuilderSubOneComponent.prototype.doneEditMode = function (fileName, fileContent) {
        this.isEditMode = false;
        var editedFile = new __WEBPACK_IMPORTED_MODULE_8__shared_model_FileModel__["a" /* FileModel */];
        editedFile.name = fileName;
        editedFile.content = fileContent;
        editedFile.fileType = this.editedFileType;
        this.menuService.setObservableFile(editedFile);
        console.log('selected option jsonStrinigfy == ' + JSON.stringify(editedFile)
            + ' editted name and con == ' + fileName + ' cc == ' + fileContent);
    };
    BuilderSubOneComponent.prototype.deleteSubmenu = function (id, menuId) {
        var _this = this;
        console.log('passed array id DELETE == ' + id + ' Menu id == ' + menuId);
        // this.listItems.splice(id, 1);
        this.menuService.deleteMenuFromServer(menuId).subscribe(function (res) {
            console.log('Response on removing a menu == ' + JSON.stringify(res));
            _this.menuResponse.subMenus.splice(id, 1);
        });
        // console.log('listItem after del == ' + this.listItems);
    };
    BuilderSubOneComponent.prototype.selectedSubmenu1 = function (submenu, submenu1) {
        // console.log('selected submenu == ' + 'sub idd == ' + submenu.id + ' passed TOPID == ' + topId);
        this.top_menu_id = submenu.id;
        this.top_menu_name = submenu.name;
        this.menu1Index = submenu1;
        this.fileMenuName = submenu.name;
    };
    BuilderSubOneComponent.prototype.getSubmenuArr = function () {
        var _this = this;
        this.subMenuSub = this.menuService.getSubMenuArrayL1().subscribe(function (subArray) {
            _this.listItems = subArray;
            _this.submenuArr = [];
            // loop thru the array, build each elemant into the submenu model
            for (var a = 0; a < _this.listItems.length; a++) {
                var subObject = {
                    'name': _this.listItems[a],
                    'content': '',
                    'content_type': '',
                    'appid': _this.appModel.appId
                };
                _this.submenuArr.push(subObject);
            }
            _this.menuPostModel.appid = _this.appModel.appId;
            _this.menuPostModel.name = _this.newMenuName;
            _this.menuPostModel.creator_email = _this.appModel.creator_email;
            _this.menuPostModel.submenus = _this.submenuArr;
            _this.sendMenuToServer(_this.menuPostModel);
        });
        console.log('list on init BUILDER SUB ONE == ' + this.listItems);
    };
    BuilderSubOneComponent.prototype.getSubmenuArrayL2 = function () {
        var _this = this;
        this.subMenuSub = this.menuService.getSubMenuArrayL2().subscribe(function (subArray) {
            _this.subMenuList2 = subArray;
            _this.submenuArr2 = [];
            // loop thru the array, build each elemant into the submenu model
            for (var b = 0; b < _this.subMenuList2.length; b++) {
                var subObject = {
                    'name': _this.subMenuList2[b],
                    'content': 'list',
                    'content_type': 'list',
                    'appid': _this.appModel.appId,
                    'top_menu_id': _this.top_menu_id
                };
                _this.submenuArr2.push(subObject);
            }
            _this.menuService.setObservableSub(_this.submenuArr2);
            // this.sendSubMenu2ToServer(this.submenuArr2);
        });
    };
    BuilderSubOneComponent.prototype.sendMenuToServer = function (menuObj) {
        /*this.menuPostModel.appid = this.appModel.appId;
        this.menuPostModel.name = this.newMenuName;
        this.menuPostModel.creator_email = this.appModel.appCreatorEmail;
        this.menuPostModel.submenus = this.submenuArr;*/
        this.menuService.setMenu1Obs(menuObj);
    };
    BuilderSubOneComponent.prototype.getMenuFromServer = function () {
        var _this = this;
        this.menuService.getMenu1Obs().subscribe(function (res) {
            _this.menuResponse = res;
            _this.menuAdded = true;
            _this.emptyState = false;
            if (_this.menuResponse.subMenus.length <= 0) {
                _this.menuResponse = null;
                console.log('getMenuFromServer inside menu lenght check');
            }
        }, function (err) {
            console.log('error in sending menu to server == ' + err);
            _this.notify.showError('Please Check your Network and try again ' + '\n' + err, 'An Error occurred', _this.vRef);
        });
    };
    BuilderSubOneComponent.prototype.getSubmenu2Observables = function () {
        var _this = this;
        this.menuService.getSubmenuObs().subscribe(function (res) {
            _this.subMenuRes = res;
            console.log('menu response before split #BuilderSubOneComponent == ' + JSON.stringify(res));
            if (_this.subMenuRes.menu.length <= 0) {
                _this.subMenuRes = null;
                // at this point remove the top menu item too
                // this.menuResponse.subMenus.splice(this.menu1Index, 1);
                _this.removeMenu();
                console.log('menu response after split #BuilderSubOneComponent == ' + JSON.stringify(_this.menuResponse));
                // this.menuService.setMenu1Obs()
            }
        }, function (err) {
            console.log('error in sending menu to server == ' + err);
            _this.notify.showError('Please Check your Network and try again ' + '\n' + err, 'An Error occurred', _this.vRef);
        });
    };
    BuilderSubOneComponent.prototype.addContent = function () {
        console.log('new menu name == ' + this.newMenuName);
    };
    BuilderSubOneComponent.prototype.addFileToSubmenu2 = function (submenu, index) {
        console.log('submenu iD sent as top menu id == ' + submenu.id + ' with index == ' + index);
        this.top_menu_id = submenu.id;
        this.fileMenuName = submenu.name;
        this.activeSubIndex = index;
    };
    BuilderSubOneComponent.prototype.getFileFromObservable = function () {
        var _this = this;
        this.fileSub = this.menuService.getObservableFile().subscribe(function (res) {
            _this.fileModel = res;
            _this.menuAdded = true;
            if (_this.top_menu_id == null) {
                _this.fileMenuName = _this.newMenuName;
            }
            _this.emptyState = false;
            _this.editedFileType = _this.fileModel.fileType;
            _this.editFileForm.controls['fileName'].setValue(_this.fileModel.name, { onlySelf: true });
            _this.editFileForm.controls['fileContent'].setValue(_this.fileModel.content, { onlySelf: true });
        });
    };
    BuilderSubOneComponent.prototype.saveFileToServer = function (fileName, fileContent) {
        var _this = this;
        var fileArr = [];
        // file is being added to a submenu if TOP MENU ID does not exist
        if (this.top_menu_id != null) {
            var subObject = {
                'name': fileName,
                'content': fileContent,
                'content_type': this.editedFileType,
                'appid': this.appModel.appId,
                'top_menu_id': this.top_menu_id
            };
            fileArr.push(subObject);
            this.busy = this.menuService.postSubMenuToServer(fileArr).subscribe(function (res) {
                console.log('response on sending file to server #BuilderSubOneComponent == ' + JSON.stringify(res));
                // on successful push, remove the submenu from the arraylist
                if (_this.subMenuRes != null) {
                    console.log('inside submenu null checker');
                    _this.removeSubmenu();
                }
                else {
                    console.log('inside Menu null checker');
                    _this.removeMenu();
                }
                _this.fileSaveStatus = true;
            }, function (err) {
                console.log('error in sending menu to server == ' + err);
                _this.notify.showError('Please Check your Network and try again ' + '\n' + err, 'An Error occurred', _this.vRef);
            });
        }
        else {
            // the file is to be added to a menu item
            var subObject = {
                'name': fileName,
                'content': fileContent,
                'content_type': this.editedFileType,
                'appid': this.appModel.appId
            };
            fileArr.push(subObject);
            this.menuPostModel.appid = this.appModel.appId;
            this.menuPostModel.name = this.newMenuName;
            this.menuPostModel.creator_email = this.appModel.creator_email;
            this.menuPostModel.submenus = fileArr;
            this.menuService.postMenuToServer(this.menuPostModel).subscribe(function (mRes) {
                console.log('hot-linked file response == ' + JSON.stringify(mRes));
                _this.prepareNextMenu();
            });
        }
        console.log('response on saving file to server #BuilderSubOneComponent == ' + JSON.stringify(fileArr));
    };
    BuilderSubOneComponent.prototype.removeMenu = function () {
        this.menuResponse.subMenus.splice(this.menu1Index, 1);
        this.fileModel = null;
        this.notify.showSuccess('File save Successfully' + '\nAssociated menu closed for editing', 'Success', this.vRef);
        this.checkMenuEditingState();
    };
    BuilderSubOneComponent.prototype.removeSubmenu = function () {
        console.log('inside remove submenu');
        this.subMenuRes.menu.splice(this.activeSubIndex, 1);
        this.menuService.subMenuObs.next(this.subMenuRes);
        this.fileModel = null;
        this.notify.showSuccess('File save Successfully' + '\nAssociated menu closed for editing', 'Success', this.vRef);
    };
    // this method checks if all added menus have been edited and auto-navigates to the NEXT MENU
    BuilderSubOneComponent.prototype.checkMenuEditingState = function () {
        console.log('checkmenuEditing state inside fileStatus check' + ' submenu lenght == ' + this.menuResponse.subMenus.length);
        if (this.menuResponse.subMenus.length <= 0) {
            this.menuResponse = null;
            if (this.fileSaveStatus) {
                this.prepareNextMenu();
            }
        }
    };
    BuilderSubOneComponent.prototype.prepareNextMenu = function () {
        var _this = this;
        this.busy = this.themeService.getThemeById(this.appModel.themeid).subscribe(function (res) {
            _this.mThemeModel = res.theme;
            _this.menuService.setMenuModel(_this.mThemeModel.second_menu, 'assignment', 'event contents');
            _this.route.navigate(['./page_two'], { relativeTo: _this.aRoute.parent });
        });
    };
    return BuilderSubOneComponent;
}());
BuilderSubOneComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-builder-sub-one',
        template: __webpack_require__("../../../../../src/app/builder/builder-sub-one/builder-sub-one.component.html"),
        styles: [__webpack_require__("../../../../../src/app/builder/builder-sub-one/builder-sub-one.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__shared_service_notify_service__["a" /* NotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_service_notify_service__["a" /* NotifyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service_app_info_service__["a" /* AppInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service_app_info_service__["a" /* AppInfoService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_10__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_router__["b" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* ActivatedRoute */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_11__shared_service_theme_service__["a" /* ThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__shared_service_theme_service__["a" /* ThemeService */]) === "function" && _h || Object])
], BuilderSubOneComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=builder-sub-one.component.js.map

/***/ }),

/***/ "../../../../../src/app/builder/builder-sub-three/builder-sub-three.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/builder/builder-sub-three/builder-sub-three.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"solid-border-heading\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-1\">\n        <!--<i class=\"material-icons flex-submenu-box\">home</i>-->\n        <button class=\"btn btn-primary btn-just-icon \">\n          <i class=\"material-icons\">{{menu_icon}}</i><b class=\"caret\"></b>\n        </button>\n      </div>\n      <div class=\"col-sm-4 col-sm-offset-0\" style=\"margin-top: -10px\">\n        <label style=\"margin-top: 15px; color: #4caf50; font-weight: 300; font-size: small\">Menu Title</label>\n        <div class=\"input-group\" style=\"margin-top: -30px\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newMenuName\" placeholder=\"{{menu_name}}\">\n        </div>\n      </div>\n      <div class=\"flex-right-both\" style=\"padding-top: 20px\">\n        <div class=\"col-sm-5\">\n          <div class=\"dropdown\">\n            <button href=\"#\" [disabled]=\"!newMenuName || menuAdded\" (click)=\"addContent()\"\n                    class=\"btn dropdown-toggle btn-sm\"\n                    data-toggle=\"dropdown\" aria-expanded=\"true\">Add Content<b class=\"caret\"></b>\n            </button>\n            <ul class=\"dropdown-menu\">\n              <li><a href=\"\" data-toggle=\"modal\" data-target=\"#myModal\">Menu List</a></li>\n              <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#audioModal\">Audio file</a></li>\n              <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#videoModal\">Video file</a></li>\n              <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#textareaModal\">Text</a></li>\n              <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#urlModal\">Url</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--</div>-->\n\n<!--Empty menu state view-->\n<div *ngIf=\"emptyState\">\n  <div class=\"row flex-center-both\">\n    <div class=\"col-sm-6\">\n      <div class=\"alert alert-with-icon alert-inverse\" style=\"box-shadow: none; padding: 10px;\">\n        <span class=\"text-center\"> No content added yet<br>Enter Menu TITLE to add contents</span>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--menu list to be populated after list has been populated-->\n<div class=\"panel panel-body\">\n  <div *ngIf=\"menuResponse\" class=\"container-fluid\" style=\"margin-top: 20px;\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"flex-left-both\">\n          <div class=\"nav nav-pills nav-pills-icons\" *ngFor=\"let li of menuResponse.subMenus, let i = index\">\n            <div class=\"card box-submenu-grey\">\n              <div class=\"card-header card-header-icon\" style=\"box-shadow: none\" data-background-color=\"orange\">\n                <p class=\"card-title\">{{li.name}}</p>\n              </div>\n              <div class=\"card-content\">\n                <div class=\"dropdown\">\n                  <button href=\"#\" class=\"btn btn-white btn-sm\" (click)=\"selectedSubmenu1(li, i)\"\n                          style=\"box-shadow: none\"\n                          data-toggle=\"dropdown\" aria-expanded=\"true\">\n                    Add Content\n                    <b class=\"caret\"></b>\n                  </button>\n                  <ul class=\"dropdown-menu\">\n                    <li><a href=\"\" data-toggle=\"modal\" data-target=\"#subMenuModal\">Menu List</a></li>\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#audioModal\">Audio file</a>\n                    </li>\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#videoModal\">Video file</a>\n                    </li>\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#textareaModal\">Text</a></li>\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#urlModal\">Url</a></li>\n                  </ul>\n                </div>\n              </div>\n              <div class=\"flex-center-both\" style=\"margin: -20px 0 -10px 0\">\n                <button class=\"btn btn-simple btn-xs btn-just-icon\" rel=\"tooltip\" title=\"delete\" style=\"padding: 2px;\"\n                        (click)=\"changeShowStatus(i, li)\">\n                  <span class=\"material-icons\">delete</span>\n                </button>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"padding-ten\" style=\"width: 100%!important;\">\n            <!--<div class=\"solid-border-box\">-->\n            <router-outlet></router-outlet>\n            <!--</div>-->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <!--submenu div to be visible once a new submenu has been added-->\n  <div *ngIf=\"subMenuRes\" class=\"container-fluid\" style=\"margin-top: 20px;\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <p class=\"font-title-text\" style=\"margin: 15px 0 -10px 20px\"><b>Submenu - {{top_menu_name}}</b></p>\n        <div class=\"flex-left-both\">\n          <div class=\"nav nav-pills nav-pills-icons\" *ngFor=\"let submenu of subMenuRes.menu, let i = index\">\n            <div class=\"card box-submenu2-grey\">\n              <div class=\"card-content\">\n                <div class=\"flex-center-both\" style=\"padding: 0 10px 0 10px!important;\">{{submenu.name}}</div>\n              </div>\n              <div class=\"card-footer\" style=\"padding: 0;\">\n                <div class=\"dropdown\">\n                  <button class=\"btn btn-simple btn-xs\" (click)=\"addFileToSubmenu2(submenu, i)\"\n                          data-toggle=\"dropdown\" aria-expanded=\"true\" style=\"padding: 2px;\">\n                    <span class=\"text-left\">Add<b class=\"caret\"></b></span>\n                  </button>\n                  <ul class=\"dropdown-menu\">\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#audioModal\">Audio file</a>\n                    </li>\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#videoModal\">Video file</a>\n                    </li>\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#textareaModal\">Text</a></li>\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#urlModal\">Url</a></li>\n                  </ul>\n                </div>\n                <button class=\"btn btn-simple btn-xs\" style=\"padding: 2px;\">\n                  <span class=\"text-right\">Delete</span>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <!--check for files and show file div-->\n  <div>\n    <div *ngIf=\"fileModel\">\n      <div class=\"row\">\n        <div class=\"card\">\n          <div class=\"form-margin\">\n            <!--div for audio and video files-->\n            <div class=\"flex-center-both font-title-text\"> = New File added to (<b>{{fileMenuName}}</b>) =</div>\n            <div class=\"card-content\" style=\"border-top: 1px solid #eeeeee; margin-top: 5px\">\n              <div class=\"text-left text-uppercase\" style=\"margin-bottom: 0\">File Info</div>\n              <form [formGroup]=\"editFileForm\">\n                <br>\n                <div class=\"row\">\n                  <div class=\"col-sm-3\"><b>File Name:</b></div>\n                  <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"!isEditMode\">\n                    <span class=\"text-capitalize\">{{fileModel.name}}</span>\n                  </div>\n                  <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"isEditMode\">\n                    <input type=\"text\" class=\"form-control\" style=\"margin: -35px 0 -5px 0; padding: 0\"\n                           formControlName=\"fileName\" value=\"{{fileModel.name}}\"></div>\n                  <div class=\"col col-sm-offset-0\" *ngIf=\"!isEditMode\">\n                    <button class=\"btn btn-simple btn-xs\" (click)=\"startEditMode()\" style=\"margin: 0\">\n                      <i class=\"material-icons\">edit</i></button>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-sm-3\"><b>File Type:</b></div>\n                  <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"!isEditMode\">\n                    <span class=\"text-capitalize\">{{fileModel.fileType}}</span>\n                  </div>\n                  <!--select for editing file type-->\n                  <div class=\"col-sm-offset-1 col-sm-6\" *ngIf=\"isEditMode\">\n                    <select class=\"bootstrap-select1 dropdown\" data-style=\"btn btn-primary btn-round btn-sm\" title=\"Single Select\"\n                            data-size=\"7\"\n                            [(ngModel)]=\"editedFileType\" [ngModelOptions]=\"{standalone: true}\">\n                      <option disabled selected>{{fileModel.fileType}}</option>\n                      <option *ngFor=\"let type of fileTypes\"\n                              [hidden]=\"fileModel.fileType === type.mValue\" [ngValue]=\"type.mValue\">{{type.mName}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"row\" *ngIf=\"fileModel.fileType === 'audio' || fileModel.fileType === 'video'\">\n                  <div class=\"col-sm-3\"><b>File Streaming Url:</b></div>\n                  <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"!isEditMode\">\n                    <span class=\"\">{{fileModel.content}}</span>\n                  </div>\n                  <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"isEditMode\">\n                    <input type=\"text\" class=\"form-control\" formControlName=\"fileContent\"\n                           style=\"margin: -20px 0 0 0\" value=\"{{fileModel.content}}\"></div>\n                  <div class=\"col col-sm-offset-0\" *ngIf=\"isEditMode\">\n                    <button class=\"btn btn-default btn-xs\"\n                            (click)=\"doneEditMode(editFileForm.get('fileName').value, editFileForm.get('fileContent').value)\"\n                            style=\"margin: 0\">\n                      <i class=\"material-icons\">done</i></button>\n                  </div>\n                </div>\n                <div class=\"row\" *ngIf=\"fileModel.fileType === 'text' || fileModel.fileType === 'url'\">\n                  <div class=\"col-sm-3\"><b>Text/Url:</b></div>\n                  <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"!isEditMode\">\n                    <span class=\"text-gray\">{{fileModel.content}}</span>\n                  </div>\n                  <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"isEditMode\">\n                    <input type=\"text\" class=\"form-control\" style=\"margin: -20px 0 0 0\"\n                           formControlName=\"fileContent\" value=\"{{fileModel.content}}\"></div>\n                  <div class=\"col col-sm-offset-0\" *ngIf=\"isEditMode\">\n                    <button class=\"btn btn-default btn-xs\" (click)=\"doneEditMode(editFileForm.get('fileName').value,\n              editFileForm.get('fileContent').value)\" style=\"margin: 0\">\n                      <i class=\"material-icons\">done</i></button>\n                  </div>\n                </div>\n                <div class=\"flex-center-both\" style=\"margin-top: 20px\">\n                  <button class=\"btn btn-primary btn-sm\" [disabled]=\"isEditMode\"\n                          (click)=\"saveFileToServer(editFileForm.get('fileName').value, editFileForm.get('fileContent').value)\">\n                    <span class=\"material-icons\">save</span> Save\n                  </button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n<div\n  [ngBusy]=\"{busy: busy, message: 'Loading...', backdrop: true, delay: 200, minDuration: 600, position: center}\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/builder/builder-sub-three/builder-sub-three.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_menu_service__ = __webpack_require__("../../../../../src/app/shared/service/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model_FileModel__ = __webpack_require__("../../../../../src/app/shared/model/FileModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_model_TextContentModel__ = __webpack_require__("../../../../../src/app/shared/model/TextContentModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_model_MenuPostModel__ = __webpack_require__("../../../../../src/app/shared/model/MenuPostModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_model_SubMenuPostModel__ = __webpack_require__("../../../../../src/app/shared/model/SubMenuPostModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_model_AppModel__ = __webpack_require__("../../../../../src/app/shared/model/AppModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_service_notify_service__ = __webpack_require__("../../../../../src/app/shared/service/notify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_service_app_info_service__ = __webpack_require__("../../../../../src/app/shared/service/app-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_service_theme_service__ = __webpack_require__("../../../../../src/app/shared/service/theme.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuilderSubThreeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var BuilderSubThreeComponent = (function () {
    function BuilderSubThreeComponent(menuService, fb, notify, vRef, ais, route, aRoute, themeService) {
        this.menuService = menuService;
        this.fb = fb;
        this.notify = notify;
        this.vRef = vRef;
        this.ais = ais;
        this.route = route;
        this.aRoute = aRoute;
        this.themeService = themeService;
        this.listItems = [];
        this.subMenuList2 = [];
        this.submenuArr = [];
        this.submenuArr2 = [];
        this.fileTypes = [{ mName: 'Audio', mValue: 'audio' }, { mName: 'Video', mValue: 'video' },
            { mName: 'Text', mValue: 'text' }, { mName: 'Url', mValue: 'url' }];
        this.listForm = this.fb.group({
            listField: [null]
        });
        this.editFileForm = this.fb.group({
            fileName: [null],
            fileContent: [null]
        });
    }
    BuilderSubThreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuService.getMenuModel().subscribe(function (res) {
            _this.menu_model = res;
            _this.menu_name = _this.menu_model.menu_name;
            _this.menu_icon = _this.menu_model.menu_icon;
            console.log('returned menu modelled object == ' + JSON.stringify(res));
        });
        this.showHide = false;
        this.menuSelected2 = false;
        this.isEditMode = false;
        this.fileSaveStatus = false;
        this.emptyState = true;
        this.menuPostModel = new __WEBPACK_IMPORTED_MODULE_5__shared_model_MenuPostModel__["a" /* MenuPostModel */];
        this.submenuPModel = new __WEBPACK_IMPORTED_MODULE_6__shared_model_SubMenuPostModel__["a" /* SubMenuPostModel */];
        // this.fileModel = new FileModel;
        this.editedFileType = 'audio';
        this.textModel = new __WEBPACK_IMPORTED_MODULE_3__shared_model_TextContentModel__["a" /* TextContentModel */];
        this.appModel = new __WEBPACK_IMPORTED_MODULE_7__shared_model_AppModel__["a" /* AppModel */];
        this.appModel = this.ais.getAppInfo();
        this.getMenuFromServer();
        this.getSubmenuArr();
        this.getSubmenuArrayL2();
        this.getFileFromObservable();
        this.getSubmenu2Observables();
        // this.getSubmenuArr();
    };
    BuilderSubThreeComponent.prototype.ngOnChanges = function () {
    };
    BuilderSubThreeComponent.prototype.ngOnDestroy = function () {
        if (this.subMenuSub != null) {
            this.subMenuSub.unsubscribe();
        }
        if (this.busy != null) {
            this.busy.unsubscribe();
        }
    };
    BuilderSubThreeComponent.prototype.startEditMode = function () {
        this.isEditMode = true;
    };
    BuilderSubThreeComponent.prototype.doneEditMode = function (fileName, fileContent) {
        this.isEditMode = false;
        var editedFile = new __WEBPACK_IMPORTED_MODULE_2__shared_model_FileModel__["a" /* FileModel */];
        editedFile.name = fileName;
        editedFile.content = fileContent;
        editedFile.fileType = this.editedFileType;
        this.menuService.setObservableFile(editedFile);
        console.log('selected option jsonStrinigfy == ' + JSON.stringify(editedFile)
            + ' editted name and con == ' + fileName + ' cc == ' + fileContent);
    };
    BuilderSubThreeComponent.prototype.changeShowStatus = function (id, name) {
        console.log('passed array id == ' + id + ' name == ' + name);
        this.listItems.splice(id, 1);
        console.log('listItem after del == ' + this.listItems);
    };
    BuilderSubThreeComponent.prototype.selectedSubmenu1 = function (submenu, submenu1) {
        // console.log('selected submenu == ' + 'sub idd == ' + submenu.id + ' passed TOPID == ' + topId);
        this.top_menu_id = submenu.id;
        this.top_menu_name = submenu.name;
        this.menu1Index = submenu1;
        this.fileMenuName = submenu.name;
    };
    BuilderSubThreeComponent.prototype.getSubmenuArr = function () {
        var _this = this;
        this.subMenuSub = this.menuService.getSubMenuArrayL1().subscribe(function (subArray) {
            _this.listItems = subArray;
            _this.submenuArr = [];
            // loop thru the array, build each elemant into the submenu model
            for (var a = 0; a < _this.listItems.length; a++) {
                var subObject = {
                    'name': _this.listItems[a],
                    'content': '',
                    'content_type': '',
                    'appid': _this.appModel.appId
                };
                _this.submenuArr.push(subObject);
            }
            _this.menuPostModel.appid = _this.appModel.appId;
            _this.menuPostModel.name = _this.newMenuName;
            _this.menuPostModel.creator_email = _this.appModel.creator_email;
            _this.menuPostModel.submenus = _this.submenuArr;
            _this.sendMenuToServer(_this.menuPostModel);
        });
        console.log('list on init BUILDER SUB ONE == ' + this.listItems);
    };
    BuilderSubThreeComponent.prototype.getSubmenuArrayL2 = function () {
        var _this = this;
        this.subMenuSub = this.menuService.getSubMenuArrayL2().subscribe(function (subArray) {
            _this.subMenuList2 = subArray;
            _this.submenuArr2 = [];
            // loop thru the array, build each elemant into the submenu model
            for (var b = 0; b < _this.subMenuList2.length; b++) {
                var subObject = {
                    'name': _this.subMenuList2[b],
                    'content': 'list',
                    'content_type': 'list',
                    'appid': _this.appModel.appId,
                    'top_menu_id': _this.top_menu_id
                };
                _this.submenuArr2.push(subObject);
            }
            _this.menuService.setObservableSub(_this.submenuArr2);
            // this.sendSubMenu2ToServer(this.submenuArr2);
        });
    };
    BuilderSubThreeComponent.prototype.sendMenuToServer = function (menuObj) {
        /*this.menuPostModel.appid = this.appModel.appId;
         this.menuPostModel.name = this.newMenuName;
         this.menuPostModel.creator_email = this.appModel.appCreatorEmail;
         this.menuPostModel.submenus = this.submenuArr;*/
        this.menuService.setMenu1Obs(menuObj);
    };
    BuilderSubThreeComponent.prototype.getMenuFromServer = function () {
        var _this = this;
        this.menuService.getMenu1Obs().subscribe(function (res) {
            _this.menuResponse = res;
            _this.menuAdded = true;
            _this.emptyState = false;
            if (_this.menuResponse.subMenus.length <= 0) {
                _this.menuResponse = null;
                console.log('getMenuFromServer inside menu lenght check');
            }
        }, function (err) {
            console.log('error in sending menu to server == ' + err);
            _this.notify.showError('Please Check your Network and try again ' + '\n' + err, 'An Error occurred', _this.vRef);
        });
    };
    BuilderSubThreeComponent.prototype.getSubmenu2Observables = function () {
        var _this = this;
        this.menuService.getSubmenuObs().subscribe(function (res) {
            _this.subMenuRes = res;
            console.log('menu response before split #BuilderSubOneComponent == ' + JSON.stringify(res));
            if (_this.subMenuRes.menu.length <= 0) {
                _this.subMenuRes = null;
                // at this point remove the top menu item too
                // this.menuResponse.subMenus.splice(this.menu1Index, 1);
                _this.removeMenu();
                console.log('menu response after split #BuilderSubOneComponent == ' + JSON.stringify(_this.menuResponse));
                // this.menuService.setMenu1Obs()
            }
        }, function (err) {
            console.log('error in sending menu to server == ' + err);
            _this.notify.showError('Please Check your Network and try again ' + '\n' + err, 'An Error occurred', _this.vRef);
        });
    };
    BuilderSubThreeComponent.prototype.addContent = function () {
        console.log('new menu name == ' + this.newMenuName);
    };
    BuilderSubThreeComponent.prototype.addFileToSubmenu2 = function (submenu, index) {
        console.log('submenu iD sent as top menu id == ' + submenu.id + ' with index == ' + index);
        this.top_menu_id = submenu.id;
        this.fileMenuName = submenu.name;
        this.activeSubIndex = index;
    };
    BuilderSubThreeComponent.prototype.getFileFromObservable = function () {
        var _this = this;
        this.fileSub = this.menuService.getObservableFile().subscribe(function (res) {
            _this.fileModel = res;
            _this.menuAdded = true;
            if (_this.top_menu_id == null) {
                _this.fileMenuName = _this.newMenuName;
            }
            _this.emptyState = false;
            _this.editedFileType = _this.fileModel.fileType;
            _this.editFileForm.controls['fileName'].setValue(_this.fileModel.name, { onlySelf: true });
            _this.editFileForm.controls['fileContent'].setValue(_this.fileModel.content, { onlySelf: true });
        });
    };
    BuilderSubThreeComponent.prototype.saveFileToServer = function (fileName, fileContent) {
        var _this = this;
        var fileArr = [];
        // file is being added to a submenu if TOP MENU ID does not exist
        if (this.top_menu_id != null) {
            var subObject = {
                'name': fileName,
                'content': fileContent,
                'content_type': this.editedFileType,
                'appid': this.appModel.appId,
                'top_menu_id': this.top_menu_id
            };
            fileArr.push(subObject);
            this.busy = this.menuService.postSubMenuToServer(fileArr).subscribe(function (res) {
                console.log('response on sending file to server #BuilderSubOneComponent == ' + JSON.stringify(res));
                // on successful push, remove the submenu from the arraylist
                if (_this.subMenuRes != null) {
                    console.log('inside submenu null checker');
                    _this.removeSubmenu();
                }
                else {
                    console.log('inside Menu null checker');
                    _this.removeMenu();
                }
                _this.fileSaveStatus = true;
            }, function (err) {
                console.log('error in sending menu to server == ' + err);
                _this.notify.showError('Please Check your Network and try again ' + '\n' + err, 'An Error occurred', _this.vRef);
            });
        }
        else {
            // the file is to be added to a menu item
            var subObject = {
                'name': fileName,
                'content': fileContent,
                'content_type': this.editedFileType,
                'appid': this.appModel.appId
            };
            fileArr.push(subObject);
            this.menuPostModel.appid = this.appModel.appId;
            this.menuPostModel.name = this.newMenuName;
            this.menuPostModel.creator_email = this.appModel.creator_email;
            this.menuPostModel.submenus = fileArr;
            this.menuService.postMenuToServer(this.menuPostModel).subscribe(function (mRes) {
                console.log('hot-linked file response == ' + JSON.stringify(mRes));
                _this.prepareNextMenu();
            });
        }
        console.log('response on saving file to server #BuilderSubOneComponent == ' + JSON.stringify(fileArr));
    };
    BuilderSubThreeComponent.prototype.removeMenu = function () {
        this.menuResponse.subMenus.splice(this.menu1Index, 1);
        this.fileModel = null;
        this.notify.showSuccess('File save Successfully' + '\nAssociated menu closed for editing', 'Success', this.vRef);
        this.checkMenuEditingState();
    };
    BuilderSubThreeComponent.prototype.removeSubmenu = function () {
        console.log('inside remove submenu');
        this.subMenuRes.menu.splice(this.activeSubIndex, 1);
        this.menuService.subMenuObs.next(this.subMenuRes);
        this.fileModel = null;
        this.notify.showSuccess('File save Successfully' + '\nAssociated menu closed for editing', 'Success', this.vRef);
    };
    // this method checks if all added menus have been edited and auto-navigates to the NEXT MENU
    BuilderSubThreeComponent.prototype.checkMenuEditingState = function () {
        console.log('checkmenuEditing state inside fileStatus check' + ' submenu lenght == ' + this.menuResponse.subMenus.length);
        if (this.menuResponse.subMenus.length <= 0) {
            this.menuResponse = null;
            if (this.fileSaveStatus) {
                this.prepareNextMenu();
            }
        }
    };
    BuilderSubThreeComponent.prototype.prepareNextMenu = function () {
        var _this = this;
        this.busy = this.themeService.getThemeById(this.appModel.themeid).subscribe(function (res) {
            _this.mThemeModel = res.theme;
            _this.menuService.setMenuModel(_this.mThemeModel.fourth_menu, 'attach_money', 'event contents');
            _this.route.navigate(['./page_four'], { relativeTo: _this.aRoute.parent });
        });
    };
    return BuilderSubThreeComponent;
}());
BuilderSubThreeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-builder-sub-three',
        template: __webpack_require__("../../../../../src/app/builder/builder-sub-three/builder-sub-three.component.html"),
        styles: [__webpack_require__("../../../../../src/app/builder/builder-sub-three/builder-sub-three.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__shared_service_notify_service__["a" /* NotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__shared_service_notify_service__["a" /* NotifyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9__shared_service_app_info_service__["a" /* AppInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared_service_app_info_service__["a" /* AppInfoService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_10__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_router__["b" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* ActivatedRoute */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_11__shared_service_theme_service__["a" /* ThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__shared_service_theme_service__["a" /* ThemeService */]) === "function" && _h || Object])
], BuilderSubThreeComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=builder-sub-three.component.js.map

/***/ }),

/***/ "../../../../../src/app/builder/builder-sub-two/builder-sub-two.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/builder/builder-sub-two/builder-sub-two.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"solid-border-heading\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-1\">\n        <!--<i class=\"material-icons flex-submenu-box\">home</i>-->\n        <button class=\"btn btn-primary btn-just-icon \">\n          <i class=\"material-icons\">{{menu_icon}}</i><b class=\"caret\"></b>\n        </button>\n      </div>\n      <div class=\"col-sm-4 col-sm-offset-0\" style=\"margin-top: -10px\">\n        <label style=\"margin-top: 15px; color: #4caf50; font-weight: 300; font-size: small\">Menu Title</label>\n        <div class=\"input-group\" style=\"margin-top: -30px\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newMenuName\" placeholder=\"{{menu_name}}\">\n        </div>\n      </div>\n      <div class=\"flex-right-both\" style=\"padding-top: 20px\">\n        <div class=\"col-sm-5\">\n          <div class=\"dropdown\">\n            <button href=\"#\" [disabled]=\"!newMenuName || menuAdded\" (click)=\"addContent()\"\n                    class=\"btn dropdown-toggle btn-sm\"\n                    data-toggle=\"dropdown\" aria-expanded=\"true\">Add Content<b class=\"caret\"></b>\n            </button>\n            <ul class=\"dropdown-menu\">\n              <li><a href=\"\" data-toggle=\"modal\" data-target=\"#myModal\">Menu List</a></li>\n              <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#audioModal\">Audio file</a></li>\n              <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#videoModal\">Video file</a></li>\n              <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#textareaModal\">Text</a></li>\n              <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#urlModal\">Url</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--</div>-->\n\n<!--Empty menu state view-->\n<div *ngIf=\"emptyState\">\n  <div class=\"row flex-center-both\">\n    <div class=\"col-sm-6\">\n      <div class=\"alert alert-with-icon alert-inverse\" style=\"box-shadow: none; padding: 10px;\">\n        <span class=\"text-center\"> No content added yet<br>Enter Menu TITLE to add contents</span>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--menu list to be populated after list has been populated-->\n<div class=\"panel panel-body\">\n  <div *ngIf=\"menuResponse\" class=\"container-fluid\" style=\"margin-top: 20px;\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"flex-left-both\">\n          <div class=\"nav nav-pills nav-pills-icons\" *ngFor=\"let li of menuResponse.subMenus, let i = index\">\n            <div class=\"card box-submenu-grey\">\n              <div class=\"card-header card-header-icon\" style=\"box-shadow: none\" data-background-color=\"orange\">\n                <p class=\"card-title\">{{li.name}}</p>\n              </div>\n              <div class=\"card-content\">\n                <div class=\"dropdown\">\n                  <button href=\"#\" class=\"btn btn-white btn-sm\" (click)=\"selectedSubmenu1(li, i)\"\n                          style=\"box-shadow: none\"\n                          data-toggle=\"dropdown\" aria-expanded=\"true\">\n                    Add Content\n                    <b class=\"caret\"></b>\n                  </button>\n                  <ul class=\"dropdown-menu\">\n                    <li><a href=\"\" data-toggle=\"modal\" data-target=\"#subMenuModal\">Menu List</a></li>\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#audioModal\">Audio file</a>\n                    </li>\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#videoModal\">Video file</a>\n                    </li>\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#textareaModal\">Text</a></li>\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#urlModal\">Url</a></li>\n                  </ul>\n                </div>\n              </div>\n              <div class=\"flex-center-both\" style=\"margin: -20px 0 -10px 0\">\n                <button class=\"btn btn-simple btn-xs btn-just-icon\" rel=\"tooltip\" title=\"delete\" style=\"padding: 2px;\"\n                        (click)=\"changeShowStatus(i, li)\">\n                  <span class=\"material-icons\">delete</span>\n                </button>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"padding-ten\" style=\"width: 100%!important;\">\n            <!--<div class=\"solid-border-box\">-->\n            <router-outlet></router-outlet>\n            <!--</div>-->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <!--submenu div to be visible once a new submenu has been added-->\n  <div *ngIf=\"subMenuRes\" class=\"container-fluid\" style=\"margin-top: 20px;\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <p class=\"font-title-text\" style=\"margin: 15px 0 -10px 20px\"><b>Submenu - {{top_menu_name}}</b></p>\n        <div class=\"flex-left-both\">\n          <div class=\"nav nav-pills nav-pills-icons\" *ngFor=\"let submenu of subMenuRes.menu, let i = index\">\n            <div class=\"card box-submenu2-grey\">\n              <div class=\"card-content\">\n                <div class=\"flex-center-both\" style=\"padding: 0 10px 0 10px!important;\">{{submenu.name}}</div>\n              </div>\n              <div class=\"card-footer\" style=\"padding: 0;\">\n                <div class=\"dropdown\">\n                  <button class=\"btn btn-simple btn-xs\" (click)=\"addFileToSubmenu2(submenu, i)\"\n                          data-toggle=\"dropdown\" aria-expanded=\"true\" style=\"padding: 2px;\">\n                    <span class=\"text-left\">Add<b class=\"caret\"></b></span>\n                  </button>\n                  <ul class=\"dropdown-menu\">\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#audioModal\">Audio file</a>\n                    </li>\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#videoModal\">Video file</a>\n                    </li>\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#textareaModal\">Text</a></li>\n                    <li><a href=\"\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#urlModal\">Url</a></li>\n                  </ul>\n                </div>\n                <button class=\"btn btn-simple btn-xs\" style=\"padding: 2px;\">\n                  <span class=\"text-right\">Delete</span>\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <!--check for files and show file div-->\n  <div>\n    <div *ngIf=\"fileModel\">\n      <div class=\"row\">\n        <div class=\"card\">\n          <div class=\"form-margin\">\n            <!--div for audio and video files-->\n            <div class=\"flex-center-both font-title-text\"> = New File added to (<b>{{fileMenuName}}</b>) =</div>\n            <div class=\"card-content\" style=\"border-top: 1px solid #eeeeee; margin-top: 5px\">\n              <div class=\"text-left text-uppercase\" style=\"margin-bottom: 0\">File Info</div>\n              <form [formGroup]=\"editFileForm\">\n                <br>\n                <div class=\"row\">\n                  <div class=\"col-sm-3\"><b>File Name:</b></div>\n                  <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"!isEditMode\">\n                    <span class=\"text-capitalize\">{{fileModel.name}}</span>\n                  </div>\n                  <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"isEditMode\">\n                    <input type=\"text\" class=\"form-control\" style=\"margin: -35px 0 -5px 0; padding: 0\"\n                           formControlName=\"fileName\" value=\"{{fileModel.name}}\"></div>\n                  <div class=\"col col-sm-offset-0\" *ngIf=\"!isEditMode\">\n                    <button class=\"btn btn-simple btn-xs\" (click)=\"startEditMode()\" style=\"margin: 0\">\n                      <i class=\"material-icons\">edit</i></button>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-sm-3\"><b>File Type:</b></div>\n                  <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"!isEditMode\">\n                    <span class=\"text-capitalize\">{{fileModel.fileType}}</span>\n                  </div>\n                  <!--select for editing file type-->\n                  <div class=\"col-sm-offset-1 col-sm-6\" *ngIf=\"isEditMode\">\n                    <select class=\"bootstrap-select1 dropdown\" data-style=\"btn btn-primary btn-round btn-sm\"\n                            data-size=\"7\"\n                            [(ngModel)]=\"editedFileType\" [ngModelOptions]=\"{standalone: true}\">\n                      <option disabled selected>{{fileModel.fileType}}</option>\n                      <option *ngFor=\"let type of fileTypes\"\n                              [hidden]=\"fileModel.fileType === type.mValue\" [ngValue]=\"type.mValue\">{{type.mName}}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n                <div class=\"row\" *ngIf=\"fileModel.fileType === 'audio' || fileModel.fileType === 'video'\">\n                  <div class=\"col-sm-3\"><b>File Streaming Url:</b></div>\n                  <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"!isEditMode\">\n                    <span class=\"\">{{fileModel.content}}</span>\n                  </div>\n                  <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"isEditMode\">\n                    <input type=\"text\" class=\"form-control\" formControlName=\"fileContent\"\n                           style=\"margin: -20px 0 0 0\" value=\"{{fileModel.content}}\"></div>\n                  <div class=\"col col-sm-offset-0\" *ngIf=\"isEditMode\">\n                    <button class=\"btn btn-default btn-xs\"\n                            (click)=\"doneEditMode(editFileForm.get('fileName').value, editFileForm.get('fileContent').value)\"\n                            style=\"margin: 0\">\n                      <i class=\"material-icons\">done</i></button>\n                  </div>\n                </div>\n                <div class=\"row\" *ngIf=\"fileModel.fileType === 'text' || fileModel.fileType === 'url'\">\n                  <div class=\"col-sm-3\"><b>Text/Url:</b></div>\n                  <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"!isEditMode\">\n                    <span class=\"text-gray\">{{fileModel.content}}</span>\n                  </div>\n                  <div class=\"col-sm-offset-1 col-sm-3\" *ngIf=\"isEditMode\">\n                    <input type=\"text\" class=\"form-control\" style=\"margin: -20px 0 0 0\"\n                           formControlName=\"fileContent\" value=\"{{fileModel.content}}\"></div>\n                  <div class=\"col col-sm-offset-0\" *ngIf=\"isEditMode\">\n                    <button class=\"btn btn-default btn-xs\" (click)=\"doneEditMode(editFileForm.get('fileName').value,\n              editFileForm.get('fileContent').value)\" style=\"margin: 0\">\n                      <i class=\"material-icons\">done</i></button>\n                  </div>\n                </div>\n                <div class=\"flex-center-both\" style=\"margin-top: 20px\">\n                  <button class=\"btn btn-primary btn-sm\" [disabled]=\"isEditMode\"\n                          (click)=\"saveFileToServer(editFileForm.get('fileName').value, editFileForm.get('fileContent').value)\">\n                    <span class=\"material-icons\">save</span> Save\n                  </button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n<div\n  [ngBusy]=\"{busy: busy, message: 'Loading...', backdrop: true, delay: 200, minDuration: 600, position: center}\">\n</div>\n\n\n\n\n<!--\n<div class=\"solid-border-heading\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-1\">\n        &lt;!&ndash;<i class=\"material-icons flex-submenu-box\">home</i>&ndash;&gt;\n        <button class=\"btn btn-primary btn-just-icon \">\n          <i class=\"material-icons\">{{menu_icon}}</i><b class=\"caret\"></b>\n        </button>\n      </div>\n      <div class=\"col-sm-4 col-sm-offset-0\" style=\"margin-top: -10px\">\n        <label style=\"margin-top: 15px; color: #4caf50; font-weight: 300; font-size: small\">Menu Title</label>\n        <div class=\"input-group\" style=\"margin-top: -30px\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"{{menu_name}}\">\n        </div>\n      </div>\n      <div class=\"col flex-right-both\" style=\"padding-top: 20px\">\n        <button class=\"btn-white-border-pri btn-xs\" style=\"align-self: flex-end\">Edit Contents</button>\n      </div>\n    </div>\n  </div>\n</div>\n&lt;!&ndash;</div>&ndash;&gt;\n<div class=\"panel panel-body\">\n  Panel content\n</div>\n-->\n"

/***/ }),

/***/ "../../../../../src/app/builder/builder-sub-two/builder-sub-two.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_menu_service__ = __webpack_require__("../../../../../src/app/shared/service/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model_FileModel__ = __webpack_require__("../../../../../src/app/shared/model/FileModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_model_TextContentModel__ = __webpack_require__("../../../../../src/app/shared/model/TextContentModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_model_MenuPostModel__ = __webpack_require__("../../../../../src/app/shared/model/MenuPostModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_model_SubMenuPostModel__ = __webpack_require__("../../../../../src/app/shared/model/SubMenuPostModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_model_AppModel__ = __webpack_require__("../../../../../src/app/shared/model/AppModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_service_notify_service__ = __webpack_require__("../../../../../src/app/shared/service/notify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_service_app_info_service__ = __webpack_require__("../../../../../src/app/shared/service/app-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_service_theme_service__ = __webpack_require__("../../../../../src/app/shared/service/theme.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuilderSubTwoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var BuilderSubTwoComponent = (function () {
    function BuilderSubTwoComponent(menuService, fb, notify, vRef, ais, route, aRoute, themeService) {
        this.menuService = menuService;
        this.fb = fb;
        this.notify = notify;
        this.vRef = vRef;
        this.ais = ais;
        this.route = route;
        this.aRoute = aRoute;
        this.themeService = themeService;
        this.listItems = [];
        this.subMenuList2 = [];
        this.submenuArr = [];
        this.submenuArr2 = [];
        this.fileTypes = [{ mName: 'Audio', mValue: 'audio' }, { mName: 'Video', mValue: 'video' },
            { mName: 'Text', mValue: 'text' }, { mName: 'Url', mValue: 'url' }];
        this.listForm = this.fb.group({
            listField: [null]
        });
        this.editFileForm = this.fb.group({
            fileName: [null],
            fileContent: [null]
        });
    }
    BuilderSubTwoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuService.getMenuModel().subscribe(function (res) {
            _this.menu_model = res;
            _this.menu_name = _this.menu_model.menu_name;
            _this.menu_icon = _this.menu_model.menu_icon;
            console.log('returned menu modelled object == ' + JSON.stringify(res));
        });
        this.showHide = false;
        this.menuSelected2 = false;
        this.isEditMode = false;
        this.fileSaveStatus = false;
        this.emptyState = true;
        this.menuPostModel = new __WEBPACK_IMPORTED_MODULE_5__shared_model_MenuPostModel__["a" /* MenuPostModel */];
        this.submenuPModel = new __WEBPACK_IMPORTED_MODULE_6__shared_model_SubMenuPostModel__["a" /* SubMenuPostModel */];
        // this.fileModel = new FileModel;
        this.editedFileType = 'audio';
        this.textModel = new __WEBPACK_IMPORTED_MODULE_3__shared_model_TextContentModel__["a" /* TextContentModel */];
        this.appModel = new __WEBPACK_IMPORTED_MODULE_7__shared_model_AppModel__["a" /* AppModel */];
        this.appModel = this.ais.getAppInfo();
        this.getMenuFromServer();
        this.getSubmenuArr();
        this.getSubmenuArrayL2();
        this.getFileFromObservable();
        this.getSubmenu2Observables();
        // this.getSubmenuArr();
    };
    BuilderSubTwoComponent.prototype.ngOnChanges = function () {
    };
    BuilderSubTwoComponent.prototype.ngOnDestroy = function () {
        if (this.subMenuSub != null) {
            this.subMenuSub.unsubscribe();
        }
        if (this.busy != null) {
            this.busy.unsubscribe();
        }
    };
    BuilderSubTwoComponent.prototype.startEditMode = function () {
        this.isEditMode = true;
    };
    BuilderSubTwoComponent.prototype.doneEditMode = function (fileName, fileContent) {
        this.isEditMode = false;
        var editedFile = new __WEBPACK_IMPORTED_MODULE_2__shared_model_FileModel__["a" /* FileModel */];
        editedFile.name = fileName;
        editedFile.content = fileContent;
        editedFile.fileType = this.editedFileType;
        this.menuService.setObservableFile(editedFile);
        console.log('selected option jsonStrinigfy == ' + JSON.stringify(editedFile)
            + ' editted name and con == ' + fileName + ' cc == ' + fileContent);
    };
    BuilderSubTwoComponent.prototype.changeShowStatus = function (id, name) {
        console.log('passed array id == ' + id + ' name == ' + name);
        this.listItems.splice(id, 1);
        console.log('listItem after del == ' + this.listItems);
    };
    BuilderSubTwoComponent.prototype.selectedSubmenu1 = function (submenu, submenu1) {
        // console.log('selected submenu == ' + 'sub idd == ' + submenu.id + ' passed TOPID == ' + topId);
        this.top_menu_id = submenu.id;
        this.top_menu_name = submenu.name;
        this.menu1Index = submenu1;
        this.fileMenuName = submenu.name;
    };
    BuilderSubTwoComponent.prototype.getSubmenuArr = function () {
        var _this = this;
        this.subMenuSub = this.menuService.getSubMenuArrayL1().subscribe(function (subArray) {
            _this.listItems = subArray;
            _this.submenuArr = [];
            // loop thru the array, build each elemant into the submenu model
            for (var a = 0; a < _this.listItems.length; a++) {
                var subObject = {
                    'name': _this.listItems[a],
                    'content': '',
                    'content_type': '',
                    'appid': _this.appModel.appId
                };
                _this.submenuArr.push(subObject);
            }
            _this.menuPostModel.appid = _this.appModel.appId;
            _this.menuPostModel.name = _this.newMenuName;
            _this.menuPostModel.creator_email = _this.appModel.creator_email;
            _this.menuPostModel.submenus = _this.submenuArr;
            _this.sendMenuToServer(_this.menuPostModel);
        });
        console.log('list on init BUILDER SUB ONE == ' + this.listItems);
    };
    BuilderSubTwoComponent.prototype.getSubmenuArrayL2 = function () {
        var _this = this;
        this.subMenuSub = this.menuService.getSubMenuArrayL2().subscribe(function (subArray) {
            _this.subMenuList2 = subArray;
            _this.submenuArr2 = [];
            // loop thru the array, build each elemant into the submenu model
            for (var b = 0; b < _this.subMenuList2.length; b++) {
                var subObject = {
                    'name': _this.subMenuList2[b],
                    'content': 'list',
                    'content_type': 'list',
                    'appid': _this.appModel.appId,
                    'top_menu_id': _this.top_menu_id
                };
                _this.submenuArr2.push(subObject);
            }
            _this.menuService.setObservableSub(_this.submenuArr2);
            // this.sendSubMenu2ToServer(this.submenuArr2);
        });
    };
    BuilderSubTwoComponent.prototype.sendMenuToServer = function (menuObj) {
        /*this.menuPostModel.appid = this.appModel.appId;
         this.menuPostModel.name = this.newMenuName;
         this.menuPostModel.creator_email = this.appModel.appCreatorEmail;
         this.menuPostModel.submenus = this.submenuArr;*/
        this.menuService.setMenu1Obs(menuObj);
    };
    BuilderSubTwoComponent.prototype.getMenuFromServer = function () {
        var _this = this;
        this.menuService.getMenu1Obs().subscribe(function (res) {
            _this.menuResponse = res;
            _this.menuAdded = true;
            _this.emptyState = false;
            if (_this.menuResponse.subMenus.length <= 0) {
                _this.menuResponse = null;
                console.log('getMenuFromServer inside menu lenght check');
            }
        }, function (err) {
            console.log('error in sending menu to server == ' + err);
            _this.notify.showError('Please Check your Network and try again ' + '\n' + err, 'An Error occurred', _this.vRef);
        });
    };
    BuilderSubTwoComponent.prototype.getSubmenu2Observables = function () {
        var _this = this;
        this.menuService.getSubmenuObs().subscribe(function (res) {
            _this.subMenuRes = res;
            console.log('menu response before split #BuilderSubOneComponent == ' + JSON.stringify(res));
            if (_this.subMenuRes.menu.length <= 0) {
                _this.subMenuRes = null;
                // at this point remove the top menu item too
                // this.menuResponse.subMenus.splice(this.menu1Index, 1);
                _this.removeMenu();
                console.log('menu response after split #BuilderSubOneComponent == ' + JSON.stringify(_this.menuResponse));
                // this.menuService.setMenu1Obs()
            }
        }, function (err) {
            console.log('error in sending menu to server == ' + err);
            _this.notify.showError('Please Check your Network and try again ' + '\n' + err, 'An Error occurred', _this.vRef);
        });
    };
    BuilderSubTwoComponent.prototype.addContent = function () {
        console.log('new menu name == ' + this.newMenuName);
    };
    BuilderSubTwoComponent.prototype.addFileToSubmenu2 = function (submenu, index) {
        console.log('submenu iD sent as top menu id == ' + submenu.id + ' with index == ' + index);
        this.top_menu_id = submenu.id;
        this.fileMenuName = submenu.name;
        this.activeSubIndex = index;
    };
    BuilderSubTwoComponent.prototype.getFileFromObservable = function () {
        var _this = this;
        this.fileSub = this.menuService.getObservableFile().subscribe(function (res) {
            _this.fileModel = res;
            _this.menuAdded = true;
            if (_this.top_menu_id == null) {
                _this.fileMenuName = _this.newMenuName;
            }
            _this.emptyState = false;
            _this.editedFileType = _this.fileModel.fileType;
            _this.editFileForm.controls['fileName'].setValue(_this.fileModel.name, { onlySelf: true });
            _this.editFileForm.controls['fileContent'].setValue(_this.fileModel.content, { onlySelf: true });
        });
    };
    BuilderSubTwoComponent.prototype.saveFileToServer = function (fileName, fileContent) {
        var _this = this;
        var fileArr = [];
        // file is being added to a submenu if TOP MENU ID does not exist
        if (this.top_menu_id != null) {
            var subObject = {
                'name': fileName,
                'content': fileContent,
                'content_type': this.editedFileType,
                'appid': this.appModel.appId,
                'top_menu_id': this.top_menu_id
            };
            fileArr.push(subObject);
            this.busy = this.menuService.postSubMenuToServer(fileArr).subscribe(function (res) {
                console.log('response on sending file to server #BuilderSubOneComponent == ' + JSON.stringify(res));
                // on successful push, remove the submenu from the arraylist
                if (_this.subMenuRes != null) {
                    console.log('inside submenu null checker');
                    _this.removeSubmenu();
                }
                else {
                    console.log('inside Menu null checker');
                    _this.removeMenu();
                }
                _this.fileSaveStatus = true;
            }, function (err) {
                console.log('error in sending menu to server == ' + err);
                _this.notify.showError('Please Check your Network and try again ' + '\n' + err, 'An Error occurred', _this.vRef);
            });
        }
        else {
            // the file is to be added to a menu item
            var subObject = {
                'name': fileName,
                'content': fileContent,
                'content_type': this.editedFileType,
                'appid': this.appModel.appId
            };
            fileArr.push(subObject);
            this.menuPostModel.appid = this.appModel.appId;
            this.menuPostModel.name = this.newMenuName;
            this.menuPostModel.creator_email = this.appModel.creator_email;
            this.menuPostModel.submenus = fileArr;
            this.menuService.postMenuToServer(this.menuPostModel).subscribe(function (mRes) {
                console.log('hot-linked file response == ' + JSON.stringify(mRes));
                _this.prepareNextMenu();
            });
        }
        console.log('response on saving file to server #BuilderSubOneComponent == ' + JSON.stringify(fileArr));
    };
    BuilderSubTwoComponent.prototype.removeMenu = function () {
        this.menuResponse.subMenus.splice(this.menu1Index, 1);
        this.fileModel = null;
        this.notify.showSuccess('File save Successfully' + '\nAssociated menu closed for editing', 'Success', this.vRef);
        this.checkMenuEditingState();
    };
    BuilderSubTwoComponent.prototype.removeSubmenu = function () {
        console.log('inside remove submenu');
        this.subMenuRes.menu.splice(this.activeSubIndex, 1);
        this.menuService.subMenuObs.next(this.subMenuRes);
        this.fileModel = null;
        this.notify.showSuccess('File save Successfully' + '\nAssociated menu closed for editing', 'Success', this.vRef);
    };
    // this method checks if all added menus have been edited and auto-navigates to the NEXT MENU
    BuilderSubTwoComponent.prototype.checkMenuEditingState = function () {
        console.log('checkmenuEditing state inside fileStatus check' + ' submenu lenght == ' + this.menuResponse.subMenus.length);
        if (this.menuResponse.subMenus.length <= 0) {
            this.menuResponse = null;
            if (this.fileSaveStatus) {
                this.prepareNextMenu();
            }
        }
    };
    BuilderSubTwoComponent.prototype.prepareNextMenu = function () {
        var _this = this;
        this.busy = this.themeService.getThemeById(this.appModel.themeid).subscribe(function (res) {
            _this.mThemeModel = res.theme;
            _this.menuService.setMenuModel(_this.mThemeModel.third_menu, 'assignment', 'event contents');
            _this.route.navigate(['./page_three'], { relativeTo: _this.aRoute.parent });
        });
    };
    return BuilderSubTwoComponent;
}());
BuilderSubTwoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-builder-sub-two',
        template: __webpack_require__("../../../../../src/app/builder/builder-sub-two/builder-sub-two.component.html"),
        styles: [__webpack_require__("../../../../../src/app/builder/builder-sub-two/builder-sub-two.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__shared_service_notify_service__["a" /* NotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__shared_service_notify_service__["a" /* NotifyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9__shared_service_app_info_service__["a" /* AppInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared_service_app_info_service__["a" /* AppInfoService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_10__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_router__["b" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* ActivatedRoute */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_11__shared_service_theme_service__["a" /* ThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__shared_service_theme_service__["a" /* ThemeService */]) === "function" && _h || Object])
], BuilderSubTwoComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=builder-sub-two.component.js.map

/***/ }),

/***/ "../../../../../src/app/builder/builder.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/builder/builder.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container\">-->\n<div class=\"row\">\n  <div class=\"col-sm-10\">\n    <div class=\"flex-center-both\">\n      <p class=\"h3\"><b>Build & Design</b></p>\n    </div>\n  </div>\n  <!--<div class=\"col-sm-1\">\n    <div class=\"text-center flex-bae\">I'm done</div>\n  </div>\n  <div class=\"col-sm-1\">\n    <div class=\"flex-center-both\">\n      <button class=\"btn btn-success btn-sm\">Build my app</button>\n    </div>\n  </div>-->\n</div>\n\n<div class=\"row\" style=\"margin-top: 20px\">\n  <div class=\"col-sm-8\">\n    <div class=\"dotted-border-box\">\n      <div class=\"flex-left-both\">\n        <p class=\"font-title-text\"><b>Menu Items</b></p>\n        <ul class=\"nav nav-pills nav-pills-icons\">\n          <li [routerLinkActive]=\"['active', 'build-menu-selector', 'build-menu-selector-cyan']\"\n              [routerLinkActiveOptions]=\"{exact:true}\">\n            <a [routerLink]=\"['./page_one']\" (click)=\"setMenuModel(mThemeModel.first_menu, 'home', 'menu contents')\"\n               class=\"flex-item-box-menu disabled\" style=\"background-color: #00cc99\" data-toggle=\"tab\">\n              <div class=\"flex-col-container\">\n                <i class=\"material-icons flex-center-both\" style=\"margin-bottom: -10px\">home</i>\n                <p class=\"h6\" style=\"line-height: 0 !important;\">{{mThemeModel.first_menu}}</p>\n              </div>\n            </a>\n          </li>\n          <li [routerLinkActive]=\"['active', 'build-menu-selector', 'build-menu-selector-green']\"\n              [routerLinkActiveOptions]=\"{exact:true}\">\n            <a [routerLink]=\"['./page_two']\" (click)=\"setMenuModel(mThemeModel.second_menu, 'assignment', 'event contents')\"\n               class=\"flex-item-box-menu disabled\" style=\"background-color: #ade111\" data-toggle=\"tab\">\n              <div class=\"flex-col-container\">\n                <i class=\"material-icons flex-center-both\" style=\"margin-bottom: -10px\">assignment</i>\n                <p class=\"h6\" style=\"line-height: 0 !important;\">{{mThemeModel.second_menu}}</p>\n              </div>\n            </a>\n          </li>\n          <li [routerLinkActive]=\"['active', 'build-menu-selector', 'build-menu-selector-yellow']\"\n              [routerLinkActiveOptions]=\"{exact:true}\">\n            <a [routerLink]=\"['./page_three']\" (click)=\"setMenuModel(mThemeModel.third_menu, 'library_music', 'message contents')\"\n               class=\"flex-item-box-menu disabled\" style=\"background-color: #ffcc00\" data-toggle=\"tab\">\n              <div class=\"flex-col-container\">\n                <i class=\"material-icons flex-center-both\" style=\"margin-bottom: -10px\">library_music</i>\n                <p class=\"h6\" style=\"line-height: 0 !important;\">{{mThemeModel.third_menu}}</p>\n              </div>\n            </a>\n          </li>\n          <li [routerLinkActive]=\"['active', 'build-menu-selector', 'build-menu-selector-blue']\"\n              [routerLinkActiveOptions]=\"{exact:true}\">\n            <a [routerLink]=\"['./page_four']\" (click)=\"setMenuModel(mThemeModel.fourth_menu, 'attach_money', 'Give contents')\"\n               class=\"flex-item-box-menu disabled\" style=\"background-color: #339999\"\n               data-toggle=\"tab\">\n              <div class=\"flex-col-container flex-center-both\">\n                <i class=\"material-icons\" style=\"margin-bottom: -10px\">attach_money</i>\n                <p class=\"h6\" style=\"line-height: 0 !important;\">{{mThemeModel.fourth_menu}}</p>\n              </div>\n            </a>\n          </li>\n          <li [routerLinkActive]=\"['active', 'build-menu-selector', 'build-menu-selector-orange']\"\n              [routerLinkActiveOptions]=\"{exact:true}\">\n            <a [routerLink]=\"['./page_five']\" (click)=\"setMenuModel(mThemeModel.fifth_menu, 'more_vert', 'more contents')\"\n               class=\"flex-item-box-menu disabled\" style=\"background-color: #ff6600\"\n               data-toggle=\"tab\">\n              <div class=\"flex-col-container\">\n                <i class=\"material-icons flex-center-both\" style=\"margin-bottom: -10px\">more_vert</i>\n                <p class=\"h6\" style=\"line-height: 0 !important;\">{{mThemeModel.fifth_menu}}</p>\n              </div>\n            </a>\n          </li>\n        </ul>\n\n        <div class=\"padding-ten\" style=\"width: 100%!important;\">\n          <div class=\"solid-border-box\">\n            <!--<div class=\"dotted-border-box\">-->\n            <router-outlet></router-outlet>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n<!--</div>-->\n\n<div\n  [ngBusy]=\"{busy: busy, message: 'Loading...', backdrop: true, delay: 200, minDuration: 600, position: center}\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/builder/builder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_model_AppModel__ = __webpack_require__("../../../../../src/app/shared/model/AppModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_app_info_service__ = __webpack_require__("../../../../../src/app/shared/service/app-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_menu_service__ = __webpack_require__("../../../../../src/app/shared/service/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_theme_service__ = __webpack_require__("../../../../../src/app/shared/service/theme.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_model_ThemeModel__ = __webpack_require__("../../../../../src/app/shared/model/ThemeModel.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuilderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BuilderComponent = (function () {
    function BuilderComponent(ais, menuService, fb, themeService) {
        this.ais = ais;
        this.menuService = menuService;
        this.fb = fb;
        this.themeService = themeService;
        this.listForm = this.fb.group({
            listField: [null]
        });
    }
    BuilderComponent.prototype.ngOnInit = function () {
        this.mAppmodel = new __WEBPACK_IMPORTED_MODULE_1__shared_model_AppModel__["a" /* AppModel */];
        this.mAppmodel = this.ais.getAppInfo();
        this.mThemeModel = new __WEBPACK_IMPORTED_MODULE_6__shared_model_ThemeModel__["a" /* ThemeModel */];
        if (this.mAppmodel != null) {
            console.log('retrieved app info ID == ' + this.mAppmodel.appId + ' theme Id == ' + this.mAppmodel.themeid);
        }
        // this.setMenuModel('Home', 'home', 'menu contents');
        this.fetchThemeMenu();
    };
    BuilderComponent.prototype.setMenuModel = function (name, icon, content) {
        this.menuService.setMenuModel(name, icon, content);
        console.log('passed menu name inside BUILDER == ' + name);
    };
    BuilderComponent.prototype.fetchThemeMenu = function () {
        var _this = this;
        if (this.mAppmodel != null) {
            this.sub = this.themeService.getThemeById(this.mAppmodel.themeid).subscribe(function (res) {
                _this.mThemeModel = res.theme;
                _this.setMenuModel(_this.mThemeModel.first_menu, 'home', 'menu contents');
            });
        }
    };
    return BuilderComponent;
}());
BuilderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-builder',
        template: __webpack_require__("../../../../../src/app/builder/builder.component.html"),
        styles: [__webpack_require__("../../../../../src/app/builder/builder.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_service_app_info_service__["a" /* AppInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_service_app_info_service__["a" /* AppInfoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_service_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_service_menu_service__["a" /* MenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service_theme_service__["a" /* ThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service_theme_service__["a" /* ThemeService */]) === "function" && _d || Object])
], BuilderComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=builder.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/create-app/create-app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/create-app/create-app.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"center-block\">\n    <div class=\"container\" style=\"padding: 20px\">\n      <div class=\"content\">\n        <div class=\"flex-center-both\">\n          <button class=\"btn btn-success btn-round align-items-md-center\" (click)=\"startCreator()\">Create new app</button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <!--<div class=\"col\">-->\n  <div class=\"col\" style=\"margin-top: -25px\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h2 class=\"info info-title\">My Apps</h2></div>\n      <!--Alert when user has no app created yet-->\n      <div *ngIf=\"!hasApps\" class=\"flex-center-both\">\n        <div class=\"alert alert-info\">\n          You have no app Created yet\n        </div>\n      </div>\n\n      <div *ngIf=\"userApps\">\n      <div class=\"panel-body\">\n        <div class=\"row\">\n        <div class=\"flex-left-both\">\n          <!--each user created apps box-->\n          <div *ngFor=\"let app of userApps.apps, let i = index\">\n          <div class=\"flex-item-box\">\n            <div class=\"card card-stats\">\n              <div class=\"card-header\" data-background-color=\"orange\">\n                <i class=\"material-icons\">android</i>\n                <p style=\"font-size: x-small; font-family: Roboto-Condensed-Light, sans-serif\">Published</p>\n              </div>\n              <div class=\"card-content\">\n                <div class=\"flex-right-both\">\n                  <div class=\"flex-left-both\">\n                    <p class=\"subtitle-thin-text\" style=\"margin-top: 30px;\"><span style=\"color: green\">&#9632;</span>\n                      Created: {{app.created_at}}</p>\n                    <span class=\"subtitle-thin-text\"><span style=\"color: orange\">&#9679;</span> Last Updated: {{app.updated_at}}</span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card-content\">\n                <div class=\"flex-center-both\">\n                  <span class=\"card-header-text font-title-text\">{{app.name}}</span>\n                </div>\n                <div class=\"flex-center-both\">\n                  <button class=\"btn btn-round btn-grey-border btn-sm\">\n                    <i class=\"material-icons\">cloud_download</i> Preview\n                  </button>\n                </div>\n              </div>\n              <div class=\"card-footer flex-center-both\">\n                  <button class=\"btn btn-warning btn-xs\">Edit</button>\n                  <button class=\"btn btn-danger btn-xs\" (click)=\"deleteApp(app.id)\">Delete</button>\n                </div>\n              <div class=\"flex-center-both\" style=\"margin: -10px 0 10px 0\">\n              <button class=\"btn-grey-border btn-sm\">Update Content</button>\n              </div>\n            </div>\n          </div>\n          </div>\n        </div>\n        </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div\n    [ngBusy]=\"{busy: busy, message: 'Loading...', backdrop: true, delay: 200, minDuration: 600, position: center}\">\n  </div>\n\n\n  <!--</div>-->\n<!--</div>-->\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/create-app/create-app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_app_info_service__ = __webpack_require__("../../../../../src/app/shared/service/app-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_user_auth_service__ = __webpack_require__("../../../../../src/app/shared/service/user-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_notify_service__ = __webpack_require__("../../../../../src/app/shared/service/notify.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateAppComponent = (function () {
    function CreateAppComponent(router, aroute, ais, loggedChurch, notify, vRef) {
        this.router = router;
        this.aroute = aroute;
        this.ais = ais;
        this.loggedChurch = loggedChurch;
        this.notify = notify;
        this.vRef = vRef;
    }
    CreateAppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.busy = this.loggedChurch.getLoggedChurch().subscribe(function (res) {
            _this.email = res.user.email;
        });
        this.hasApps = false;
        this.getAllUserApps();
    };
    CreateAppComponent.prototype.ngOnDestroy = function () {
        if (this.busy != null) {
            this.busy.unsubscribe();
        }
    };
    CreateAppComponent.prototype.startCreator = function () {
        this.router.navigate(['select'], { relativeTo: this.aroute.parent });
    };
    CreateAppComponent.prototype.getAllUserApps = function () {
        var _this = this;
        this.busy = this.ais.fetchUserApps(this.email).subscribe(function (res) {
            _this.userApps = res;
            if (res.apps.length <= 0) {
                _this.hasApps = false;
            }
            else {
                _this.hasApps = true;
            }
        });
    };
    CreateAppComponent.prototype.deleteApp = function (appId) {
        var _this = this;
        this.busy = this.ais.deleteApp(appId).subscribe(function (res) {
            console.log('ON success of app deletion == ' + JSON.stringify(res));
            _this.showSuccessDel();
        }, function (err) {
            _this.notify.showError('Please check your network and try again' + '\n' + err, 'An Error Occurred', _this.vRef);
        });
    };
    CreateAppComponent.prototype.showSuccessDel = function () {
        this.notify.showSuccess('App successfully removed', 'SUCCESS', this.vRef);
        this.getAllUserApps();
    };
    return CreateAppComponent;
}());
CreateAppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-app',
        template: __webpack_require__("../../../../../src/app/dashboard/create-app/create-app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/create-app/create-app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_service_app_info_service__["a" /* AppInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_service_app_info_service__["a" /* AppInfoService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_service_user_auth_service__["a" /* UserAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_service_user_auth_service__["a" /* UserAuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_service_notify_service__["a" /* NotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_service_notify_service__["a" /* NotifyService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _f || Object])
], CreateAppComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=create-app.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"sidebar\" data-active-color=\"white\" data-background-color=\"black\" data-image=\"../assets/img/rock.jpg\">\n  <!--<div class=\"sidebar\" data-active-color=\"white\" data-background-color=\"black\" data-image=\"../assets/img/sidebar-1.jpg\">-->\n    <!-- <div class=\"sidebar\" data-color=\"red\" data-image=\"\"> -->\n    <app-sidebar></app-sidebar>\n    <div class=\"sidebar-background\" style=\"background-image: url(../../assets/img/sidebar-1.jpg)\"></div>\n  </div>\n  <div class=\"main-panel\">\n    <app-navbar></app-navbar>\n    <router-outlet></router-outlet>\n    <!--<dashboard-cmp></dashboard-cmp>-->\n    <!--<div *ngIf=\"!isMap()\">\n      <app-footer></app-footer>\n    </div>-->\n  </div>\n</div>\n\n\n\n<!--// menu modal-->\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">New Menu List</h4>\n      </div>\n      <div class=\"modal-body\" style=\"margin-top: -10px\">\n        <!--<p>Some text in the modal.</p>-->\n        <form [formGroup]=\"listForm\">\n          <div class=\"form-group\">\n            <label class=\"control-label\">Add menu list items separated by a comma:</label>\n            <input type=\"text\" class=\"form-control\"\n                   placeholder=\"Enter list items separated by a comma\" formControlName=\"listField\" required>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger btn-sm\" data-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary btn-sm\" data-dismiss=\"modal\"\n                (click)=\"pushListArray(listForm.get('listField').value)\" [disabled]=\"listForm.invalid\">Save\n        </button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n<!--// submenu modal-->\n<div id=\"subMenuModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">New Menu List</h4>\n      </div>\n      <div class=\"modal-body\" style=\"margin-top: -10px\">\n        <form [formGroup]=\"listForm\">\n          <div class=\"form-group\">\n            <label class=\"control-label\">Add menu list items separated by a comma:</label>\n            <input type=\"text\" class=\"form-control\"\n                   placeholder=\"Enter list items separated by a comma\" formControlName=\"listField\" required>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger btn-sm\" data-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary btn-sm\" data-dismiss=\"modal\"\n                (click)=\"pushSubListArray(listForm.get('listField').value)\" [disabled]=\"listForm.invalid\">Save\n        </button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n<!-- Audio Modal -->\n<div id=\"audioModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-body\" style=\"padding-top: -10px\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"green\">\n            <h4 class=\"card-title\">Add Audio file</h4>\n          </div>\n          <div class=\"card-content\">\n            <form [formGroup]=\"audioForm\">\n              <div class=\"form-group label-floating\">\n                <label class=\"control-label\">File Name</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"audioFileName\" required>\n              </div>\n              <div class=\"form-group label-floating\">\n                <label class=\"control-label\">Audio Url</label>\n                <input class=\"form-control\" formControlName=\"audioFileUrl\" type=\"text\" value=\"http://\" required>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-danger btn-sm\" data-dismiss=\"modal\">Cancel</button>\n                <button type=\"button\" class=\"btn btn-primary btn-sm\" data-dismiss=\"modal\"\n                        (click)=\"pushAudioModel(audioForm.get('audioFileName').value,\n                    audioForm.get('audioFileUrl').value, 'audio')\" [disabled]=\"audioForm.invalid\">Add</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Textarea Modal -->\n<div id=\"textareaModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <div class=\"card\" style=\"padding: 10px\">\n          <div class=\"card-header\" data-background-color=\"green\">\n            <h4 class=\"card-title\">Add Text</h4>\n          </div>\n          <form [formGroup]=\"textAreaForm\">\n            <div class=\"form-group label-floating\">\n              <label class=\"control-label\">Enter Title</label>\n              <input class=\"form-control\" formControlName=\"textAreaTitle\" type=\"text\" required>\n            </div>\n            <textarea class=\"form-control\" formControlName=\"textAreaTxt\" placeholder=\"Enter your text here\" rows=\"5\" required></textarea>\n            <br>\n          </form>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-danger btn-sm\" data-dismiss=\"modal\">Cancel</button>\n            <button type=\"button\" class=\"btn btn-primary btn-sm\" data-dismiss=\"modal\"\n                    (click)=\"pushTextModel(textAreaForm.get('textAreaTitle').value,\n                    textAreaForm.get('textAreaTxt').value, 'text')\"  [disabled]=\"textAreaForm.invalid\">Add\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Url Modal -->\n<div id=\"urlModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog modal-md\">\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-body\" style=\"padding-top: -10px\">\n        <div class=\"card\" style=\"padding: 10px\">\n          <div class=\"card-header\" data-background-color=\"green\">\n            <h4 class=\"card-title\">New Url</h4>\n          </div>\n          <form [formGroup]=\"urlForm\">\n            <div class=\"form-group label-floating\">\n              <label class=\"control-label\">Enter Url Title</label>\n              <input class=\"form-control\" formControlName=\"urlTitle\" type=\"text\" required>\n            </div>\n            <div class=\"form-group label-floating\">\n              <label class=\"control-label\">Enter Url</label>\n              <input class=\"form-control\" formControlName=\"urlAddress\" value=\"http://\" type=\"text\" required>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-danger btn-sm\" data-dismiss=\"modal\">Cancel</button>\n              <button type=\"button\" class=\"btn btn-primary btn-sm\" data-dismiss=\"modal\"\n                      (click)=\"pushUrlModel(urlForm.get('urlTitle').value,\n                    urlForm.get('urlAddress').value, 'url')\" [disabled]=\"urlForm.invalid\">Add\n              </button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- Add Video Modal -->\n<div id=\"videoModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-body\" style=\"padding-top: -10px\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"green\">\n            <h4 class=\"card-title\">Add Video file</h4>\n          </div>\n          <div class=\"card-content\">\n            <form [formGroup]=\"videoForm\">\n              <div class=\"form-group label-floating\">\n                <label class=\"control-label\">File Name</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"videoFileName\" required>\n              </div>\n\n              <div class=\"form-group label-floating\">\n                <label class=\"control-label\">Video Url</label>\n                <input class=\"form-control\" formControlName=\"videoFileUrl\" type=\"text\" value=\"http://\" required>\n              </div>\n            </form>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-danger btn-sm\" data-dismiss=\"modal\">Cancel</button>\n            <button type=\"button\" class=\"btn btn-primary btn-sm\" data-dismiss=\"modal\"\n                    (click)=\"pushVideoModel(videoForm.get('videoFileName').value,\n                     videoForm.get('videoFileUrl').value, 'video')\" [disabled]=\"videoForm.invalid\">Add\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_menu_service__ = __webpack_require__("../../../../../src/app/shared/service/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_model_FileModel__ = __webpack_require__("../../../../../src/app/shared/model/FileModel.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(fb, menuService) {
        this.fb = fb;
        this.menuService = menuService;
        this.listItems = [];
        this.listForm = this.fb.group({
            listField: [null]
        });
        this.audioForm = this.fb.group({
            audioFileName: [null],
            audioFileUrl: ['http://']
        });
        this.videoForm = this.fb.group({
            videoFileName: [null],
            videoFileUrl: ['http://']
        });
        this.textAreaForm = this.fb.group({
            textAreaTitle: [null],
            textAreaTxt: [null]
        });
        this.urlForm = this.fb.group({
            urlTitle: [null],
            urlAddress: ['http://']
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    // send submenu list one to service
    DashboardComponent.prototype.pushListArray = function (listMass) {
        this.listItems = [];
        var array = listMass.split(',');
        for (var a = 0; a < array.length; a++) {
            this.aa = array[a].trim();
            this.listItems.push(this.aa);
        }
        this.menuService.setSubMenuArrayL1(this.listItems);
        this.resetModalForm(this.listForm);
    };
    // send submenu list two to service
    DashboardComponent.prototype.pushSubListArray = function (listMass) {
        console.log('pushed list == ' + listMass);
        this.listItems = [];
        var array = listMass.split(',');
        for (var a = 0; a < array.length; a++) {
            this.aa = array[a].trim();
            this.listItems.push(this.aa);
        }
        this.menuService.setSubMenuArrayL2(this.listItems);
        // this.listForm.reset();
        this.resetModalForm(this.listForm);
    };
    DashboardComponent.prototype.pushAudioModel = function (fileName, fileUrl, fileType) {
        var fileNew = new __WEBPACK_IMPORTED_MODULE_3__shared_model_FileModel__["a" /* FileModel */];
        fileNew.name = fileName;
        // fileNew.description = fileDesc;
        fileNew.content = fileUrl;
        fileNew.fileType = fileType;
        // push new audioFile to service
        this.menuService.setObservableFile(fileNew);
        this.resetModalHttpForm(this.audioForm, 'audioFileUrl');
    };
    DashboardComponent.prototype.pushVideoModel = function (fileName, fileUrl, fileType) {
        var fileNew = new __WEBPACK_IMPORTED_MODULE_3__shared_model_FileModel__["a" /* FileModel */];
        fileNew.name = fileName;
        // fileNew.description = fileDesc;
        fileNew.content = fileUrl;
        fileNew.fileType = fileType;
        // push new videoFile to service
        this.menuService.setObservableFile(fileNew);
        this.resetModalHttpForm(this.videoForm, 'videoFileUrl');
    };
    DashboardComponent.prototype.pushUrlModel = function (urlTitle, urlAddress, fileType) {
        var fileNew = new __WEBPACK_IMPORTED_MODULE_3__shared_model_FileModel__["a" /* FileModel */];
        fileNew.name = urlTitle;
        fileNew.content = urlAddress;
        fileNew.fileType = fileType;
        // push new url to service
        this.menuService.setObservableFile(fileNew);
        this.resetModalHttpForm(this.urlForm, 'urlAddress');
    };
    DashboardComponent.prototype.pushTextModel = function (textTitle, txt, fileType) {
        var fileNew = new __WEBPACK_IMPORTED_MODULE_3__shared_model_FileModel__["a" /* FileModel */];
        fileNew.name = textTitle;
        fileNew.content = txt;
        fileNew.fileType = fileType;
        // push new text to service
        this.menuService.setObservableFile(fileNew);
        this.resetModalForm(this.textAreaForm);
    };
    DashboardComponent.prototype.resetModalForm = function (form) {
        setTimeout(function () {
            form.reset();
        }, 2000);
    };
    DashboardComponent.prototype.resetModalHttpForm = function (form, controlName) {
        setTimeout(function () {
            form.reset();
            form.controls[controlName].setValue('http://', { onlySelf: true });
        }, 2000);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_service_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_service_menu_service__["a" /* MenuService */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/design/app-color/app-color.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sp-preview {\r\n  width: 35px;\r\n  height: 35px;\r\n  border-radius: 4px;\r\n  border-width: 2px;\r\n  border-color: #2e2e2e;\r\n  box-shadow: 0 2px 2px 0 rgba(59, 89, 152, 0.14), 0 3px 1px -2px rgba(59, 89, 152, 0.2), 0 1px 5px 0 rgba(59, 89, 152, 0.12);\r\n}\r\n\r\n/*\r\n.sp-preview {\r\n  position: relative;\r\n  width: 25px;\r\n  height: 24px;\r\n  float: left;\r\n  z-index: 0;\r\n  border-width: initial;\r\n  border-style: none;\r\n  border-color: initial;\r\n  border-image: initial;\r\n  border-radius: 1px;\r\n}*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/design/app-color/app-color.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-body\">\n  <div class=\"row flex-center-both\">\n    <div class=\"col-sm-1 flex-right-both\">\n      <!--<div class=\"sp-preview btn\">-->\n      <input #sBox [(colorPicker)]=\"statusBcolor\" [style.background]=\"statusBcolor\" [cpOKButton]=\"true\"\n             [cpFallbackColor]=\"'#333333'\"\n             [cpOKButtonClass]=\"'btn btn-primary btn-xs'\"\n             [cpDialogDisplay]=\"'popup'\"\n             [cpSaveClickOutside]=\"true\"\n             (click)=\"onColorSelected(statusBcolor)\"\n             (colorPickerChange)=\"onColorChanged(sBox.value)\"\n             type=\"button\" class=\"sp-preview btn btn-round\" aria-describedby=\"btnGroupAddon\" style=\"margin-left: 5px\"/>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"text-left\"><b>Topbar Title</b> background color</div>\n    </div>\n  </div>\n  <!--<div class=\"row flex-center-both\">\n    <div class=\"col-sm-1 flex-right-both\">\n      &lt;!&ndash;<div class=\"sp-preview btn\">&ndash;&gt;\n      <input [(colorPicker)]=\"toolBcolor\" [style.background]=\"toolBcolor\" [cpOKButton]=\"true\"\n             [cpFallbackColor]=\"'#333333'\"\n             [cpOKButtonClass]=\"'btn btn-primary btn-xs'\"\n             [cpDialogDisplay]=\"'popup'\"\n             [cpSaveClickOutside]=\"true\"\n             (click)=\"onColorSelected(toolBcolor)\"\n             type=\"button\" class=\"sp-preview btn btn-round\" aria-describedby=\"btnGroupAddon\" style=\"margin-left: 5px\"/>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"text-left\">Top bar background color</div>\n    </div>\n  </div>-->\n  <div class=\"card-footer\">\n    <p class=\"h5 text-center\">\n      <b>Content Background and Text color</b>\n    </p>\n  </div>\n  <div class=\"card-footer\"></div>\n\n  <div class=\"flex-col-container\">\n    <div class=\"row\">\n      <div class=\"flex-center-both\">\n        <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n          <button type=\"button\" class=\"btn btn-white\" (click)=\"checkedThemeRadio(0, darkNLight[0])\">Light</button>\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"checkedThemeRadio(1, darkNLight[1])\">Dark</button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"container-fluid\">\n        <div class=\"row\" *ngFor=\"let thm of darkNLight, let i = index\" >\n          <div class=\"flex-container-box\" (click)=\"checkedThemeRadio(i, thm)\">\n            <div class=\"radio flex-center-both\">\n              <label class=\"col-sm-1\" style=\"font-size: large; color: #666; font-weight: 300;\">\n                <input type=\"radio\" name=\"optionsRadios\"  [value]=\"selectedAppTheme\" (change)=\"checkedThemeRadio(i, thm)\"\n                       [checked]=\"i === checkIndex\">{{thm.mName}}\n              </label>\n              <div class=\"col-sm-3 col-sm-offset-2\">\n                <h5 style=\"font-weight: 400\">Backgound:</h5>\n              </div>\n              <div class=\"col-sm-1 text-left\">\n                <div class=\"sp-preview\" [style.background-color]=\"thm.mBackground\"></div>\n              </div>\n              <div class=\"col-sm-2 col-sm-offset-1 text-right\">\n                <h5 style=\"font-weight: 400\">Text:</h5>\n              </div>\n              <div class=\"col-sm-1 text-left\">\n                <div class=\"sp-preview\" [style.background-color]=\"thm.mText\"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"flex-center-both\" style=\"margin-top: 10px\">\n    <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"saveSelection()\">Save</button>\n  </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/design/app-color/app-color.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_app_info_service__ = __webpack_require__("../../../../../src/app/shared/service/app-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_model_AppModel__ = __webpack_require__("../../../../../src/app/shared/model/AppModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_Utils_Color__ = __webpack_require__("../../../../../src/app/shared/Utils/Color.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_Utils_HEX__ = __webpack_require__("../../../../../src/app/shared/Utils/HEX.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppColorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppTheme = (function () {
    function AppTheme() {
    }
    return AppTheme;
}());
var AppColorComponent = (function () {
    function AppColorComponent(route, aRoute, ais) {
        this.route = route;
        this.aRoute = aRoute;
        this.ais = ais;
        this.statusBcolor = '#127bdc';
        this.darkNLight = [{ mName: 'Light', mBackground: '#ffffff', mText: '#333333' },
            { mName: 'Dark', mBackground: '#333333', mText: '#ffffff' }];
    }
    AppColorComponent.prototype.ngOnInit = function () {
        this.checkIndex = 0;
        this.selectedTheme = this.darkNLight[this.checkIndex];
        this.appModel = new __WEBPACK_IMPORTED_MODULE_3__shared_model_AppModel__["a" /* AppModel */];
        this.appModel = this.ais.getAppInfo();
        this.statT = new __WEBPACK_IMPORTED_MODULE_2__shared_service_app_info_service__["c" /* StatusToolBar */];
        this.statT.statusColor = this.statusBcolor;
        // this.statT.toolbarColor = this.toolBcolor;
        // this.hex = new HEX;
        this.ais.setSelectedAppStatusToolbar(this.statT);
    };
    AppColorComponent.prototype.onColorSelected = function (col) {
        console.log('selected color == ' + col);
    };
    AppColorComponent.prototype.onColorChanged = function () {
        this.statT.statusColor = this.statusBcolor;
        this.statT.toolbarColor = this.statusBcolor;
        this.ais.setSelectedAppStatusToolbar(this.statT);
    };
    AppColorComponent.prototype.checkedThemeRadio = function (ind, theme) {
        for (var a = 0; a < this.darkNLight.length; a++) {
            if (ind === a) {
                this.selectedAppTheme = true;
                this.checkIndex = a;
                this.ais.setSelectedAppColor(a);
                this.selectedTheme = theme;
                console.log('chosen thema == ' + this.selectedTheme.mName);
            }
            else {
                // this.setCheckedTheme = false;
            }
        }
    };
    AppColorComponent.prototype.convertColor = function (toolBarC) {
        // Instance Colors
        // let red = new Color(new RGB(255, 0, 0));
        var col = new __WEBPACK_IMPORTED_MODULE_4__shared_Utils_Color__["a" /* Color */](new __WEBPACK_IMPORTED_MODULE_5__shared_Utils_HEX__["a" /* HEX */](toolBarC));
        // Darken / Lighten
        //     let darkerRed = red.darken(60);
        var lighterGreen = col.lighten(25);
        // Outputs
        //     let rgbValue = darkerRed.toString(); // return: rgb(195,0,0)
        var hexValue = lighterGreen.toString(false); // return: #14cf14
        console.log('returned converted color == ' + hexValue);
        return hexValue;
    };
    AppColorComponent.prototype.saveSelection = function () {
        console.log('app info b4 color and bg added == ' + JSON.stringify(this.appModel));
        this.appModel.color_primary = this.convertColor(this.statusBcolor);
        this.appModel.color_primary_dark = this.statusBcolor;
        this.appModel.color_background = this.selectedTheme.mBackground;
        this.appModel.text_color = this.selectedTheme.mText;
        console.log('app info AFTER color and bg added == ' + JSON.stringify(this.appModel));
        this.ais.updateAppInfo(this.appModel);
        this.route.navigate(['./icon'], { relativeTo: this.aRoute.parent });
    };
    return AppColorComponent;
}());
AppColorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-app-color',
        template: __webpack_require__("../../../../../src/app/dashboard/design/app-color/app-color.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/design/app-color/app-color.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_service_app_info_service__["a" /* AppInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_service_app_info_service__["a" /* AppInfoService */]) === "function" && _c || Object])
], AppColorComponent);

var _a, _b, _c;
//# sourceMappingURL=app-color.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/design/app-splash/app-splash.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".splash-preview{\r\n  background-image: url(https://spt-thumb.s3.dualstack.us-east-1.amazonaws.com/1467028…);\r\n  background-size: cover;\r\n  width: 207px;\r\n  height: 368px;\r\n}\r\n\r\n.splash-render {\r\n  position: relative;\r\n  width: 160px;\r\n  height: 284px;\r\n  display: block;\r\n  vertical-align: bottom;\r\n  box-sizing: content-box;\r\n  background: rgb(234, 234, 234);\r\n  padding: 0px;\r\n  overflow: hidden;\r\n  margin: 10px auto;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  border-color: rgb(209, 209, 209);\r\n  -o-border-image: initial;\r\n     border-image: initial;\r\n  border-radius: 2px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/design/app-splash/app-splash.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-body\">\n  <div class=\"row flex-center-both\">\n    <div class=\"alert alert-danger\" style=\"padding: 5px 20px; box-shadow: none\">\n      <p class=\"text-center\">* Only One file can be uploaded</p>\n      <p class=\"text-center\">* Max file size = 2MB</p>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <div class=\"text-center\">\n        <p class=\"h4\">Select your splash screen image</p>\n      </div>\n\n      <div class=\"flex-center-both\">\n        <button class=\"btn btn-success btn-sm\" (click)=\"uploadSplash()\" [disabled]=\"!splashSelected\">Upload Splash</button>\n      </div>\n\n    </div>\n    <div class=\"col-sm-6\">\n      <image-upload\n        [max]=\"1\"\n        [buttonCaption]=\"'Select Images!'\"\n        [dropBoxMessage]=\"'Drop your images here!'\"\n        [extensions]=\"['jpg','png','jpeg']\"\n        [maxFileSize]=\"2096576\"\n        [fileTooLargeMessage]=\"'Image too large!'\"\n        (onFileUploadFinish)=\"imageUpload($event)\"\n        (isPending)=\"splashUploaded\"\n      ></image-upload>\n    </div>\n  </div>\n\n\n  <div class=\"row\" style=\"margin-top: 20px\">\n    <div class=\"col-sm-6\">\n      <div class=\"text-center\">\n        <p class=\"h4\">Select app icon image</p>\n        <p class=\"h5 text-danger\" style=\"font-size: 8pt\">**(Dimension: 512 x 512 px)**</p>\n        <div class=\"flex-center-both\">\n          <button class=\"btn btn-success btn-sm\" (click)=\"uploadIcon()\" [disabled]=\"!iconSelected\">Upload Icon</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6\">\n      <image-upload\n        [max]=\"1\"\n        [buttonCaption]=\"'Select Images!'\"\n        [dropBoxMessage]=\"'Drop your images here!'\"\n        [extensions]=\"['png']\"\n        [maxFileSize]=\"2096576\"\n        [fileTooLargeMessage]=\"'Image too large!'\"\n        (onFileUploadFinish)=\"iconUpload($event)\"\n        (isPending)=\"iconUploaded\"\n      ></image-upload>\n    </div>\n  </div>\n\n\n  <div *ngIf=\"iconUrl && splashUrl\" style=\"margin-top: 30px\">\n    <div class=\"flex-center-both\">\n      <button class=\"btn btn-success\" (click)=\"buildApp()\">Build my app</button>\n    </div>\n  </div>\n\n</div>\n\n<div\n  [ngBusy]=\"{busy: busy, message: 'Loading...', backdrop: true, delay: 200, minDuration: 600, position: center}\">\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/design/app-splash/app-splash.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_app_info_service__ = __webpack_require__("../../../../../src/app/shared/service/app-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model_AppModel__ = __webpack_require__("../../../../../src/app/shared/model/AppModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_notify_service__ = __webpack_require__("../../../../../src/app/shared/service/notify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSplashComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppSplashComponent = (function () {
    function AppSplashComponent(ais, notify, vRef, route) {
        this.ais = ais;
        this.notify = notify;
        this.vRef = vRef;
        this.route = route;
    }
    AppSplashComponent.prototype.ngOnInit = function () {
        this.appModel = new __WEBPACK_IMPORTED_MODULE_2__shared_model_AppModel__["a" /* AppModel */];
        this.appId = new __WEBPACK_IMPORTED_MODULE_1__shared_service_app_info_service__["b" /* BuildAppRes */];
        this.appModel = this.ais.getAppInfo();
        this.splashSelected = false;
        this.splashUploaded = false;
        this.iconSelected = false;
        this.iconUploaded = false;
    };
    AppSplashComponent.prototype.ngOnDestroy = function () {
        if (this.busy != null) {
            this.busy.unsubscribe();
        }
    };
    AppSplashComponent.prototype.imageUpload = function (event) {
        console.log('file response after upload == ' + event.file.name);
        this.selectedSplash = event.file;
        this.splashSelected = true;
    };
    AppSplashComponent.prototype.iconUpload = function (event) {
        console.log('file response after upload == ' + event.file.name);
        this.selectedIcon = event.file;
        this.iconSelected = true;
    };
    AppSplashComponent.prototype.uploadSplash = function () {
        var _this = this;
        this.busy = this.ais.uploadAppSplash(this.selectedSplash).subscribe(function (res) {
            _this.splashUrl = res.image_path;
            _this.appModel.splash_url = _this.splashUrl;
            _this.splashUploaded = true;
            _this.splashSelected = false;
            _this.notify.showSuccess('Splash Image upload successful', 'SUCCESS', _this.vRef);
        }, function (err) {
            _this.notify.showError(err, 'An Error Occured', _this.vRef);
        });
    };
    AppSplashComponent.prototype.uploadIcon = function () {
        var _this = this;
        this.busy = this.ais.uploadAppIcon(this.selectedIcon).subscribe(function (res) {
            _this.iconUrl = res.image_path;
            _this.appModel.icon_url = _this.iconUrl;
            _this.iconUploaded = true;
            _this.iconSelected = false;
            _this.notify.showSuccess('Icon upload successful', 'SUCCESS', _this.vRef);
        }, function (err) {
            _this.notify.showError(err, 'An Error Occured', _this.vRef);
        });
    };
    AppSplashComponent.prototype.buildApp = function () {
        var _this = this;
        console.log('appinfo of rady app == ' + JSON.stringify(this.appModel));
        this.ais.buildMyApp(this.appModel).subscribe(function (res) {
            // this.appId = res.appid;
            console.log('Response on communicating with Jenkins == ' + JSON.stringify(res));
            _this.returnHome();
        });
    };
    AppSplashComponent.prototype.returnHome = function () {
        var _this = this;
        this.notify.showSuccess('We are working on your App\nwe will mail you the created app soon', 'SUCCESS', this.vRef);
        setTimeout(function () {
            _this.route.navigate(['']);
        }, 2000);
    };
    return AppSplashComponent;
}());
AppSplashComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-app-splash',
        template: __webpack_require__("../../../../../src/app/dashboard/design/app-splash/app-splash.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/design/app-splash/app-splash.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_app_info_service__["a" /* AppInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_app_info_service__["a" /* AppInfoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_service_notify_service__["a" /* NotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_service_notify_service__["a" /* NotifyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], AppSplashComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app-splash.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/design/design.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.android-phone {\r\n  background: #303030;\r\n  position: fixed;\r\n  margin: 60px 0px 0px 100px;\r\n  width: 360px;\r\n  height: 640px;\r\n  padding: 0px;\r\n  border-top: 57px solid #303030;\r\n  border-right: 18px solid #303030;\r\n  border-bottom: 57px solid #303030;\r\n  border-left: 18px solid #303030;\r\n  border-radius: 30px;\r\n  display: block;\r\n  box-sizing: content-box;\r\n  -moz-box-sizing: content-box;\r\n  vertical-align: top;\r\n  -webkit-transform: scale(0.7);\r\n  transform: scale(0.7);\r\n  -webkit-transform-origin: left top;\r\n  transform-origin: left top;\r\n}\r\n@media only screen and (max-width: 1040px) {\r\n  .android-phone {\r\n    margin: 60px 0px 0px 30px;\r\n  }\r\n}\r\n@media only screen and (max-width: 980px) {\r\n  .android-phone {\r\n    margin: 60px 0px 0px 0px;\r\n  }\r\n}\r\n@media only screen and (max-width: 900px) {\r\n  .android-phone {\r\n    margin: 60px 0px 0px 0px;\r\n    -webkit-transform: scale(0.58);\r\n    transform: scale(0.58);\r\n  }\r\n}\r\n@media only screen and (max-width: 769px) {\r\n  .android-phone {\r\n    margin: 60px 0px 0px 0px;\r\n    -webkit-transform: scale(0.55);\r\n    transform: scale(0.55);\r\n  }\r\n}\r\n.android-phone #preview-wrapper {\r\n  position: absolute;\r\n  width: 360px;\r\n  height: 640px;\r\n  overflow: hidden;\r\n}\r\n.android-phone #android-navigation {\r\n  display: block;\r\n  position: absolute;\r\n  right: 0px;\r\n  bottom: 0px;\r\n  z-index: 10;\r\n  width: 100%;\r\n  height: 48px;\r\n  background: #000;\r\n  box-sizing: border-box;\r\n}\r\n.android-phone .android-back {\r\n  position: absolute;\r\n  left: 15%;\r\n  top: 13px;\r\n  font-size: 26px;\r\n  color: #fff;\r\n  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);\r\n}\r\n.android-phone .android-home {\r\n  width: 20px;\r\n  height: 20px;\r\n  position: absolute;\r\n  left: 50%;\r\n  margin-top: 13px;\r\n  margin-left: -8px;\r\n  border: 3px solid #fff;\r\n  border-radius: 50%;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15), inset 0px 2px 2px rgba(0, 0, 0, 0.15);\r\n}\r\n.android-phone #android-navigation:before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background: rgba(0, 0, 0, 0.25);\r\n}\r\n.android-phone #android-navigation:after {\r\n  position: absolute;\r\n  content: '';\r\n  right: 15%;\r\n  margin-top: 13px;\r\n  width: 13px;\r\n  height: 13px;\r\n  border: 3px solid #fff;\r\n  border-radius: 3px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15), inset 0px 2px 2px rgba(0, 0, 0, 0.15);\r\n}\r\n.android-phone .android-top {\r\n  width: 102%;\r\n  height: 57px;\r\n  position: absolute;\r\n  top: -75px;\r\n  left: 0px;\r\n  margin-left: -1%;\r\n  overflow: hidden;\r\n}\r\n.android-phone .android-top:after {\r\n  content: '';\r\n  width: 100%;\r\n  height: 57px;\r\n  border-radius: 50%;\r\n  background: #303030;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n.android-phone .android-bottom {\r\n  width: 102%;\r\n  height: 57px;\r\n  position: absolute;\r\n  bottom: -75px;\r\n  right: 0px;\r\n  margin-right: -1%;\r\n  overflow: hidden;\r\n}\r\n.android-phone .android-bottom:after {\r\n  content: '';\r\n  width: 100%;\r\n  height: 57px;\r\n  border-radius: 50%;\r\n  background: #303030;\r\n  position: absolute;\r\n  bottom: 0px;\r\n  left: 0;\r\n}\r\n.android-phone #statusbar-preview-android {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 25px;\r\n  top: 0px;\r\n}\r\n.android-phone #statusbar-preview-android:before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background: rgba(0, 0, 0, 0.25);\r\n}\r\n.android-phone #statusbar-time-android {\r\n  position: absolute;\r\n  right: 8px;\r\n  font-size: 15px;\r\n  font-family: \"Roboto\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\r\n  text-align: center;\r\n  line-height: 25px;\r\n  font-weight: normal;\r\n  transition: all 500ms;\r\n  color: #fff;\r\n}\r\n.android-phone #statusbar-connection-android {\r\n  position: absolute;\r\n  top: 0px;\r\n  right: 60px;\r\n  margin-top: 0px;\r\n  margin-left: 5px;\r\n  transition: all 500ms;\r\n}\r\n.android-phone #statusbar-connection-android::before {\r\n  position: absolute;\r\n  content: '';\r\n  right: 10px;\r\n  margin-top: 3px;\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n  border-width: 0 0 15px 15px;\r\n  border-color: transparent transparent #fff transparent;\r\n  transition: all 500ms;\r\n}\r\n.android-phone #statusbar-battery-android {\r\n  position: absolute;\r\n  top: 0px;\r\n  right: 0px;\r\n  width: 15px;\r\n  height: 10px;\r\n  padding: 1px;\r\n  border: 1px solid #fff;\r\n  margin-top: 6px;\r\n  margin-right: 50px;\r\n  transition: all 500ms;\r\n  -webkit-transform: rotate(-90deg);\r\n          transform: rotate(-90deg);\r\n}\r\n.android-phone #statusbar-battery-android:before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n  width: 70%;\r\n  height: 8px;\r\n  background: #fff;\r\n  transition: all 500ms;\r\n}\r\n.android-phone #statusbar-battery-android:after {\r\n  content: '';\r\n  position: absolute;\r\n  right: -2px;\r\n  top: 2px;\r\n  width: 1px;\r\n  height: 4px;\r\n  background: #fff;\r\n  transition: all 500ms;\r\n}\r\n/* PREVIEW-CONTENT ***********************************************/\r\n.android-phone #preview-content {\r\n  position: relative;\r\n  top: 80px;\r\n  left: 0;\r\n  height: 560px;\r\n  width: 100%;\r\n  padding: 0px;\r\n  background: #000;\r\n  text-align: left;\r\n  display: block;\r\n  overflow-y: scroll;\r\n  /* has to be scroll, not auto */\r\n  -webkit-overflow-scrolling: touch;\r\n  overflow-x: hidden;\r\n  box-sizing: border-box;\r\n}\r\n.android-phone #topbar-background {\r\n  width: 100%;\r\n  height: 55px;\r\n  background: #181818;\r\n  text-align: center;\r\n  z-index: 5;\r\n  position: absolute;\r\n  top: 25px;\r\n  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);\r\n}\r\n.android-phone #topbar-button {\r\n  position: absolute;\r\n  left: 15px;\r\n  top: 17px;\r\n  font-size: 20px;\r\n  padding: 0px;\r\n  background: transparent;\r\n  color: #e9e9e9;\r\n  border-radius: 3px;\r\n}\r\n.android-phone #topbar-title {\r\n  font-size: 18px;\r\n  line-height: 55px;\r\n  color: #e9e9e9;\r\n  font-weight: 300;\r\n  float: left;\r\n  margin-left: 50px;\r\n}\r\n.android-phone .content-title h3 {\r\n  font-size: 22px;\r\n}\r\n.android-phone .content-subheader h4 {\r\n  font-size: 18px;\r\n}\r\n.android-phone .content-text p {\r\n  font-size: 16px;\r\n  line-height: 135%;\r\n}\r\n.android-phone .content-detail span {\r\n  font-size: 12px;\r\n}\r\n.android-phone #content-button {\r\n  -webkit-appearance: none;\r\n  font-weight: 500;\r\n  border: none;\r\n  padding: 10px 20px;\r\n  margin: 15px 0px;\r\n  max-width: 100%;\r\n  text-transform: uppercase;\r\n  display: inline-block;\r\n  border-radius: 3px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);\r\n}\r\n.android-phone #content-forms {\r\n  margin-top: 10px;\r\n}\r\n.android-phone #content-input {\r\n  background: #f5f5f5;\r\n}\r\n.android-phone .list-item {\r\n  padding: 10px;\r\n  position: relative;\r\n  width: 100%;\r\n  border-bottom: 1px solid #000;\r\n  min-height: 40px;\r\n}\r\n.android-phone .list-image-wrapper {\r\n  position: relative;\r\n  max-width: 50%;\r\n  height: 100%;\r\n  background: #808080;\r\n  display: inline-block;\r\n  border-radius: 50%;\r\n}\r\n.android-phone .list-image {\r\n  width: 100%;\r\n  height: 0;\r\n  padding-bottom: 100%;\r\n}\r\n.android-phone .list-content-wrapper {\r\n  max-width: 70%;\r\n  height: 100%;\r\n  display: inline-block;\r\n  overflow: hidden;\r\n}\r\n.android-phone .list-title {\r\n  position: relative;\r\n  margin-left: 5px;\r\n  vertical-align: top;\r\n  display: inline-block;\r\n}\r\n.android-phone .list-item .list-description {\r\n  position: relative;\r\n  margin-top: 5px;\r\n  margin-left: 5px;\r\n  display: block;\r\n}\r\n/* EDGE CASES *****************/\r\n.android-phone #statusbar-preview {\r\n  display: none;\r\n}\r\n\r\n\r\n#colors-preview-menu .layout-menu-item {\r\n  font-size: 11px;\r\n  font-weight: 400;\r\n}\r\n#colors-preview-menu .layout-menu-item .sidebar-icon {\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n  vertical-align: middle;\r\n  padding-right: 5px;\r\n}\r\n#topbar-background #topbar-title {\r\n  font-size: 18px;\r\n}\r\n#content-background #content-header {\r\n  font-size: 15px;\r\n}\r\n#content-background #content-subheader {\r\n  font-size: 12px;\r\n}\r\n#content-background #content-text {\r\n  font-size: 11px;\r\n}\r\n#content-foreground #content-text2 {\r\n  font-size: 11px;\r\n}\r\n#content-background #content-detail {\r\n  font-size: 9px;\r\n  font-weight: 600;\r\n}\r\n\r\n/* COLOR SETTINGS *****************************************************************/\r\n.content-foreground {\r\n  padding: 10px;\r\n  margin: 10px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/design/design.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-10\">\n    <div class=\"flex-center-both\">\n      <p class=\"h3\"><b>Your App look & feel (Design)</b></p>\n    </div>\n  </div>\n  <!--<div class=\"col-sm-1\">\n    <div class=\"text-center flex-bae\">I'm done</div>\n  </div>\n  <div class=\"col-sm-1\">\n    <div class=\"flex-center-both\">\n      <button class=\"btn btn-success btn-sm\">Build my app</button>\n    </div>\n  </div>-->\n</div>\n\n<!--Tab to manage colors icons and splash-->\n<div class=\"row\" style=\"margin-top: 20px\">\n  <div class=\"col-sm-8\">\n    <div class=\"dotted-border-box\">\n      <div class=\"\">\n        <div class=\"\">\n          <div class=\"container-fluid\">\n        <ul class=\"nav nav-pills nav-pills-icons nav-justified\" style=\"box-shadow: none!important;\">\n          <li [routerLinkActive]=\"['active', 'build-menu-selector', 'build-menu-selector-primary']\"\n              [routerLinkActiveOptions]=\"{exact:true}\">\n            <a [routerLink]=\"['./color']\"\n               class=\"disabled\" data-toggle=\"tab\">\n              <div class=\"flex-col-container\">\n                <p class=\"h6\" >Colors</p>\n              </div>\n            </a>\n          </li>\n          <li [routerLinkActive]=\"['active', 'build-menu-selector', 'build-menu-selector-primary']\"\n              [routerLinkActiveOptions]=\"{exact:true}\">\n            <a [routerLink]=\"['./icon']\"\n               class=\"disabled\" data-toggle=\"tab\">\n              <div class=\"flex-col-container\">\n                <p class=\"h6\" >Icon & Splash</p>\n              </div>\n            </a>\n          </li>\n        </ul>\n          </div>\n          <!--<div class=\"panel panel-body\">-->\n          <div class=\"card\">\n            <router-outlet></router-outlet>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n\n  <!--my preview screen-->\n  <div class=\"col-md-4\" style=\"margin-top: -5em\">\n    <div class=\"android-phone portrait\">\n      <div class=\"android-top\"></div>\n      <div id=\"preview-wrapper\">\n        <div id=\"statusbar-preview\">\n          <div id=\"statusbar-connection\"></div>\n          <div id=\"statusbar-battery\"></div>\n          <div id=\"statusbar-time\">13:10</div>\n        </div>\n        <div id=\"statusbar-preview-android\" [style.background]=\"statusTB.statusColor\">\n          <div id=\"statusbar-connection-android\"></div>\n          <div id=\"statusbar-battery-android\"></div>\n          <div id=\"statusbar-time-android\">13:10</div>\n        </div>\n        <div id=\"topbar-background\" [style.background]=\"statusTB.statusColor\">\n          <div id=\"topbar-button\" style=\"color: rgb(255, 255, 255);\"><i class=\"fa fa-bars\"></i></div>\n          <div id=\"topbar-title\"\n               style=\"color: rgb(255, 255, 255); font-size: 22px; font-family: Roboto; font-weight: 300;\">Topbar title\n          </div>\n        </div>\n        <div id=\"preview-content\" [style.background]=\"[darkNLight[colorIndex].mBackBg]\" >\n          <div class=\"content-foreground\" [style.background]=\"[darkNLight[colorIndex].mBackground]\" >\n          <!--<div class=\"content-foreground\" style=\"background: rgb(255, 255, 255);\">-->\n            <h4 class=\"content-subtitle\" [style.color]=\"[darkNLight[colorIndex].mText]\"\n                style=\"font-size: 20px; font-family: Roboto; font-weight: 500;\">CONTENT</h4>\n            <hr class=\"sep2\" style=\"border-color: rgb(236, 236, 236);\">\n            <h3 class=\"content-title\" [style.color]=\"[darkNLight[colorIndex].mText]\">Title</h3>\n            <p class=\"content-text\" [style.color]=\"[darkNLight[colorIndex].mText]\"\n               style=\"font-size: 16px; font-family: Roboto; font-weight: 300; line-height: 17.6px;\">\n              This is text with a <span id=\"content-link\" style=\"color: rgb(114, 140, 157);\">link</span>.\n              This is how the layout of your app\n               will look upon completion. the background colors and text colors\n            </p>\n          </div>\n          <div class=\"content-foreground\" [style.background]=\"[darkNLight[colorIndex].mBackground]\">\n            <h4 class=\"content-subtitle\" [style.color]=\"[darkNLight[colorIndex].mText]\"\n                style=\"font-size: 18px; font-family: Roboto; font-weight: 500;\">LIST ITEMS</h4>\n            <hr class=\"sep2\" style=\"border-color: rgb(236, 236, 236);\">\n\n            <div class=\"list-item\" style=\"border-color: rgb(236, 236, 236);\">\n              <div class=\"list-image-wrapper\" style=\"width: 44px;\">\n                <div class=\"list-image\" style=\"padding-bottom: 44px;\"></div>\n              </div>\n              <div class=\"list-content-wrapper\">\n                <div class=\"list-title\" [style.color]=\"[darkNLight[colorIndex].mText]\"\n                     style=\"font-size: 18px; font-family: Roboto; font-weight: 500; line-height: 22px;\">\n                  Subtitle\n                </div>\n                <div class=\"list-description\" [style.color]=\"[darkNLight[colorIndex].mSubTitle]\"\n                     style=\"font-size: 12px; font-family: Roboto; font-weight: 400;\">Details\n                  about the list item.\n                </div>\n              </div>\n            </div>\n            <div class=\"list-item\" style=\"border-color: rgb(236, 236, 236);\">\n              <div class=\"list-image-wrapper\" style=\"width: 44px;\">\n                <div class=\"list-image\" style=\"padding-bottom: 44px;\"></div>\n              </div>\n              <div class=\"list-content-wrapper\">\n                <div class=\"list-title\" [style.color]=\"[darkNLight[colorIndex].mText]\"\n                     style=\"font-size: 18px; font-family: Roboto; font-weight: 500; line-height: 22px;\">\n                  Subtitle\n                </div>\n                <div class=\"list-description\" [style.color]=\"[darkNLight[colorIndex].mSubTitle]\"\n                     style=\"font-size: 12px; font-family: Roboto; font-weight: 400;\">Details\n                  about the list item.\n                </div>\n              </div>\n            </div>\n            <div class=\"list-item\" style=\"border-color: rgb(236, 236, 236);\">\n              <div class=\"list-image-wrapper\" style=\"width: 44px;\">\n                <div class=\"list-image\" style=\"padding-bottom: 44px;\"></div>\n              </div>\n              <div class=\"list-content-wrapper\">\n                <div class=\"list-title\" [style.color]=\"[darkNLight[colorIndex].mText]\"\n                     style=\"font-size: 18px; font-family: Roboto; font-weight: 500; line-height: 22px;\">\n                  Subtitle\n                </div>\n                <div class=\"list-description\" [style.color]=\"[darkNLight[colorIndex].mSubTitle]\"\n                     style=\"font-size: 12px; font-family: Roboto; font-weight: 400;\">Details\n                  about the list item.\n                </div>\n              </div>\n            </div>\n            <!--<div class=\"list-item\" style=\"border-color: rgb(236, 236, 236);\">\n              <div class=\"list-image-wrapper\" style=\"width: 44px;\">\n                <div class=\"list-image\" style=\"padding-bottom: 44px;\"></div>\n              </div>\n              <div class=\"list-content-wrapper\">\n                <div class=\"list-title\"\n                     style=\"color: rgb(67, 67, 67); font-size: 22px; font-family: Roboto; font-weight: 700; line-height: 22px;\">\n                  Subtitle\n                </div>\n                <div class=\"list-description\"\n                     style=\"color: rgb(92, 92, 92); font-size: 12px; font-family: Roboto; font-weight: 700;\">Details\n                  about the list item.\n                </div>\n              </div>\n            </div>\n            <div class=\"list-item\" style=\"border-color: rgb(236, 236, 236);\">\n              <div class=\"list-image-wrapper\" style=\"width: 44px;\">\n                <div class=\"list-image\" style=\"padding-bottom: 44px;\"></div>\n              </div>\n              <div class=\"list-content-wrapper\">\n                <div class=\"list-title\"\n                     style=\"color: rgb(67, 67, 67); font-size: 22px; font-family: Roboto; font-weight: 700; line-height: 22px;\">\n                  Subtitle\n                </div>\n                <div class=\"list-description\"\n                     style=\"color: rgb(92, 92, 92); font-size: 12px; font-family: Roboto; font-weight: 700;\">Details\n                  about the list item.\n                </div>\n              </div>\n            </div>-->\n          </div>\n        </div>\n        <div id=\"android-navigation\" style=\"background: #000000;\">\n          <div class=\"android-back\">◁</div>\n          <div class=\"android-home\"></div>\n        </div>\n      </div>\n      <div class=\"android-bottom\"></div>\n    </div>\n  </div>\n</div>\n\n<!--</div>-->\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/design/design.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_app_info_service__ = __webpack_require__("../../../../../src/app/shared/service/app-info.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesignComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DesignComponent = (function () {
    function DesignComponent(ais) {
        this.ais = ais;
        this.darkNLight = [{ mName: 'Light', mBackground: '#ffffff', mText: '#333333', mSubTitle: '#999999', mBackBg: '#ececec' },
            { mName: 'Dark', mBackground: '#333333', mText: '#ffffff', mSubTitle: '#e5e5e5', mBackBg: '#444444' }];
    }
    DesignComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ais.getSelectedAppColor().subscribe(function (res) {
            _this.colorIndex = res;
        });
        this.ais.getSelectedAppStatusToolbar().subscribe(function (res) {
            _this.statusTB = res;
        });
    };
    return DesignComponent;
}());
DesignComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-design',
        template: __webpack_require__("../../../../../src/app/dashboard/design/design.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/design/design.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service_app_info_service__["a" /* AppInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service_app_info_service__["a" /* AppInfoService */]) === "function" && _a || Object])
], DesignComponent);

var _a;
//# sourceMappingURL=design.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/edit-app/edit-app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/edit-app/edit-app.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  edit-app works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/edit-app/edit-app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditAppComponent = (function () {
    function EditAppComponent() {
    }
    EditAppComponent.prototype.ngOnInit = function () {
    };
    return EditAppComponent;
}());
EditAppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-app',
        template: __webpack_require__("../../../../../src/app/dashboard/edit-app/edit-app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/edit-app/edit-app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EditAppComponent);

//# sourceMappingURL=edit-app.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/publish/publish.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/publish/publish.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  publish works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/publish/publish.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublishComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PublishComponent = (function () {
    function PublishComponent() {
    }
    PublishComponent.prototype.ngOnInit = function () {
    };
    return PublishComponent;
}());
PublishComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-publish',
        template: __webpack_require__("../../../../../src/app/dashboard/publish/publish.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/publish/publish.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PublishComponent);

//# sourceMappingURL=publish.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/select-theme/select-theme.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/select-theme/select-theme.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <form [formGroup]=\"createForm\">\n      <div class=\"col-sm-5\">\n        <div class=\"form-group label-floating\">\n          <label class=\"control-label\">Enter App Name</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"appName\" [(ngModel)]=\"mAppModel.name\" required>\n        </div>\n        <div *ngIf=\"createForm.get('appName').invalid && createForm.get('appName').dirty\" class=\"input-group\">\n          <p class=\"validator-error\" style=\"padding-left: 0!important;\"\n             *ngIf=\"createForm.controls['name'].hasError('required')\">\n            * App Name is required *</p>\n        </div>\n      </div>\n      <div class=\"col-sm-5\">\n        <div class=\"form-group label-floating\">\n          <label class=\"control-label\">Enter App Tagline</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"appTagLine\" [(ngModel)]=\"mAppModel.app_tag_line\"\n                 required>\n        </div>\n        <div *ngIf=\"createForm.get('appTagLine').invalid && createForm.get('appTagLine').dirty\" class=\"input-group\">\n          <p class=\"validator-error\" style=\"padding-left: 0!important;\"\n             *ngIf=\"createForm.controls['app_tag_line'].hasError('required')\">\n            * App TagLine is required *</p>\n        </div>\n      </div>\n      <div class=\"col-sm-2\">\n        <button class=\"btn btn-success\" (click)=\"gotoBuilder()\" [disabled]=\"!createForm.valid || !setCheckedTheme\">Go\n        </button>\n      </div>\n    </form>\n  </div>\n\n  <div class=\"row\" style=\"padding-bottom: -10px !important;\">\n    <p class=\"h3\">Choose your preferred theme:</p>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"flex-left-both\">\n      <div *ngFor=\"let theme of allThemes.themes, let i = index;\">\n        <div class=\"flex-theme-box \" style=\"width: 280px!important; margin-top: -25px!important;\">\n          <div class=\"card\" style=\"background-color: #f3f3f3\" (click)=\"changeCheckStatus(i, theme.id)\">\n            <div class=\"card-header\">\n              <div class=\"flex-center-both\" style=\"margin: -12px 0 5px 0\">\n                <input type=\"radio\" name=\"optionsRadios\" [value]=\"setCheckedTheme\" (change)=\"changeCheckStatus(i, theme.id)\"\n                       [checked]=\"i === checkIndex\">\n              </div>\n              <div class=\"text-center\">{{theme.name}}</div>\n            </div>\n            <div class=\"card-avatar\">\n              <img class=\"container-photo\" src=\"{{theme.image_path}}\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div\n  [ngBusy]=\"{busy: busy, message: 'Loading...', backdrop: true, delay: 200, minDuration: 600, position: center}\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/select-theme/select-theme.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_model_AppModel__ = __webpack_require__("../../../../../src/app/shared/model/AppModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_app_info_service__ = __webpack_require__("../../../../../src/app/shared/service/app-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_model_ThemeResponse__ = __webpack_require__("../../../../../src/app/shared/model/ThemeResponse.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_service_theme_service__ = __webpack_require__("../../../../../src/app/shared/service/theme.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_service_notify_service__ = __webpack_require__("../../../../../src/app/shared/service/notify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_service_user_auth_service__ = __webpack_require__("../../../../../src/app/shared/service/user-auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectThemeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppIdResponse = (function () {
    function AppIdResponse() {
    }
    return AppIdResponse;
}());
var SelectThemeComponent = (function () {
    function SelectThemeComponent(fb, route, aRoute, ais, themeService, notify, vRef, loggedChurch) {
        this.fb = fb;
        this.route = route;
        this.aRoute = aRoute;
        this.ais = ais;
        this.themeService = themeService;
        this.notify = notify;
        this.vRef = vRef;
        this.loggedChurch = loggedChurch;
        this.createForm = this.fb.group({
            appName: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            appTagLine: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]
        });
        /*this.mAppModel.appName = this.app_name;
        this.mAppModel.appTagLine = this.app_tagline;
        */
    }
    SelectThemeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setCheckedTheme = false;
        this.mAppModel = new __WEBPACK_IMPORTED_MODULE_3__shared_model_AppModel__["a" /* AppModel */];
        this.allThemes = new __WEBPACK_IMPORTED_MODULE_5__shared_model_ThemeResponse__["a" /* ThemeResponse */];
        this.mAppIdRes = new AppIdResponse;
        this.loggedChurch.getLoggedChurch().subscribe(function (res) {
            _this.churchResponse = res;
        });
        // this.mAppModel.appTheme = 'default';
        this.fetchAllThemes();
    };
    SelectThemeComponent.prototype.ngOnDestroy = function () {
        if (this.busy != null) {
            this.busy.unsubscribe();
        }
    };
    SelectThemeComponent.prototype.changeCheckStatus = function (ind, themeId) {
        for (var a = 0; a < this.allThemes.themes.length; a++) {
            if (ind === a) {
                this.setCheckedTheme = true;
                this.checkIndex = a;
                this.selectedThemeId = themeId;
            }
            else {
                // this.setCheckedTheme = false;
            }
        }
    };
    SelectThemeComponent.prototype.fetchAllThemes = function () {
        var _this = this;
        this.busy = this.themeService.getUpdatedTheme().subscribe(function (res) {
            _this.allThemes = res;
        }, function (err) {
            _this.notify.showError('Please Check your Network and try again', 'Error', _this.vRef);
        });
    };
    SelectThemeComponent.prototype.gotoBuilder = function () {
        var _this = this;
        this.mAppModel.themeid = this.selectedThemeId;
        this.mAppModel.creator_email = this.churchResponse.user.email;
        // this.ais.updateAppInfo(this.mAppModel);
        // fetch app id
        this.busy = this.ais.fetchAppId(this.mAppModel.name, this.mAppModel.app_tag_line, this.mAppModel.themeid, this.mAppModel.creator_email)
            .subscribe(function (res) {
            _this.mAppIdRes = res;
            _this.mAppModel.appId = _this.mAppIdRes.appid;
            // update app info service
            _this.ais.updateAppInfo(_this.mAppModel);
            _this.route.navigate(['build'], { relativeTo: _this.aRoute.parent });
        }, function (err) {
            console.log('error from endpoint == ' + err);
            _this.notify.showError('Please Check your Network and try again ' + '\n' + err, 'An Error occurred', _this.vRef);
        });
        console.log('appinfo inside ' + this.mAppModel.name + ' theme id == ' + this.selectedThemeId);
    };
    return SelectThemeComponent;
}());
SelectThemeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-select-theme',
        template: __webpack_require__("../../../../../src/app/dashboard/select-theme/select-theme.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/select-theme/select-theme.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_service_app_info_service__["a" /* AppInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_service_app_info_service__["a" /* AppInfoService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__shared_service_theme_service__["a" /* ThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_service_theme_service__["a" /* ThemeService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__shared_service_notify_service__["a" /* NotifyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_service_notify_service__["a" /* NotifyService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__shared_service_user_auth_service__["a" /* UserAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__shared_service_user_auth_service__["a" /* UserAuthService */]) === "function" && _h || Object])
], SelectThemeComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=select-theme.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__("../../../../../src/app/dashboard/settings/settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/settings/settings.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SettingsComponent);

//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/update-content/update-content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/update-content/update-content.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  update-content works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/update-content/update-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpdateContentComponent = (function () {
    function UpdateContentComponent() {
    }
    UpdateContentComponent.prototype.ngOnInit = function () {
    };
    return UpdateContentComponent;
}());
UpdateContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-update-content',
        template: __webpack_require__("../../../../../src/app/dashboard/update-content/update-content.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/update-content/update-content.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UpdateContentComponent);

//# sourceMappingURL=update-content.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page app-name\">\n\n  <nav class=\"navbar navbar-primary navbar-transparent navbar-absolute\" role=\"navigation\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navigation-example-2\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"\"><div class=\"h3\" style=\"margin: 0; padding: 0\">\n          Smart<span style=\"color: #4caf50; font-weight: bold\">Church</span></div></a>\n      </div>\n      <div class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li>\n            <a [routerLink]=\"['']\" class=\"btn btn-round btn-transparent btn-xs\">Home\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n  <div class=\"full-page register-page\">\n    <!--<div class=\"content\" >-->\n      <div class=\"container login-page-pad\">\n        <div class=\"row\">\n\n          <div class=\"col-sm-4 col-md-offset-1\">\n            <h1  class=\"info info-title auth-title clearfix\">Login to Create your App</h1><br>\n          </div>\n\n          <div class=\"col-md-5 col-sm-5 col-md-offset-1 col-sm-offset-3\">\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n              <div class=\"card card-login card-hidden\">\n                <div class=\"card-header text-center\" data-background-color=\"green\">\n                  <h3 class=\"card-title\">Sign In</h3>\n                </div>\n\n                <div *ngIf=\"hasErrors\" class=\"alert alert-danger text-center\">{{errorText}}</div>\n\n                <br>\n                <div class=\"card-content form-margin\">\n                  <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">\n                                                <i class=\"material-icons\">email</i>\n                                            </span>\n                    <div class=\"form-group label-floating\">\n                      <label class=\"control-label\">Email address</label>\n                      <input type=\"email\" class=\"form-control\" formControlName=\"emailField\" [(ngModel)]=\"email\" required email>\n                    </div>\n                  </div>\n                  <div *ngIf=\"loginForm.get('emailField').invalid && loginForm.get('emailField').dirty\" class=\"input-group\">\n                    <p class=\"validator-error\" *ngIf=\"loginForm.controls['emailField'].hasError('required')\">\n                      ** Email is required **</p>\n                    <p class=\"validator-error\" *ngIf=\"!loginForm.controls['emailField'].hasError('required') && loginForm.get('emailField').hasError('email')\">\n                      ** Invalid email Address **</p>\n                  </div>\n\n                  <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">\n                                                <i class=\"material-icons\">lock_outline</i>\n                                            </span>\n                    <div class=\"form-group label-floating\">\n                      <label class=\"control-label\">Password</label>\n                      <input type=\"password\" class=\"form-control\" formControlName=\"pwdField\" [(ngModel)]=\"password\" required>\n                    </div>\n                  </div>\n                  <div *ngIf=\"loginForm.get('pwdField').invalid && loginForm.get('pwdField').dirty\" class=\"input-group\">\n                    <p class=\"validator-error\" *ngIf=\"loginForm.controls['pwdField'].hasError('required')\">\n                      ** Password is required **</p>\n                    <p class=\"validator-error\" *ngIf=\"loginForm.get('pwdField').hasError('minlength')\">\n                      ** Password cannot be less than 8 characters **</p>\n                  </div>\n                </div>\n                <div class=\"footer text-center form-margin\">\n                  <button class=\"btn btn-success btn-round\" [disabled]=\"!loginForm.valid\">LOGIN</button>\n                </div>\n                <p class=\"text-center\">Don't have an account yet ? <a [routerLink]=\"['../register']\">Register Here</a></p>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    <!--</div>-->\n    <div\n      [ngBusy]=\"{busy: busy, message: 'Loading...', backdrop: true, delay: 200, minDuration: 600, position: center}\">\n\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_user_auth_service__ = __webpack_require__("../../../../../src/app/shared/service/user-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(fb, loginService, toastr, vRef, router) {
        this.fb = fb;
        this.loginService = loginService;
        this.toastr = toastr;
        this.router = router;
        this.loginForm = this.fb.group({
            emailField: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].email]],
            // emailField: [null, [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]],
            pwdField: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(8)]]
        });
        this.toastr.setRootViewContainerRef(vRef);
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.getLoggedChurch().subscribe(function (res) {
            _this.cUser = res;
        });
        this.hasErrors = false;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log('logged church email == ' + this.email + ' password == ' + this.password);
        this.hasErrors = false;
        this.busy = this.loginService.loginUser(this.email, this.password).subscribe(function (res) {
            console.log('logged church == ' + res.user.role);
            _this.loginForm.disable();
            _this.loginService.setLoggedChurch(res);
            _this.showSuccess('Login Successful \nYou will be redirected soon', 'success');
        }, function (error) {
            _this.showError('Login not successful', 'An error occurred');
            _this.hasErrors = true;
            _this.errorText = error;
        });
    };
    LoginComponent.prototype.showSuccess = function (text, title) {
        var _this = this;
        this.toastr.success(text, title, { toastLife: 3000, showCloseButton: false });
        setTimeout(function () {
            if (_this.cUser.user.role === 1) {
                _this.loginService.setIsAdmin(_this.cUser.user.role);
                _this.router.navigate(['./admin']);
            }
            else {
                _this.router.navigate(['']);
            }
        }, 3000); // 5s
        // this.router.navigate(['']);
    };
    LoginComponent.prototype.showError = function (text, title) {
        this.toastr.error(text, title);
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        if (this.busy != null) {
            this.busy.unsubscribe();
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_service_user_auth_service__["a" /* UserAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_service_user_auth_service__["a" /* UserAuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/pagenotfound/pagenotfound.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pagenotfound/pagenotfound.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12 text-center\">\n      <div class=\"error-template\">\n        <h1>\n          Oops!</h1>\n        <h2>\n          404 Not Found</h2>\n        <div class=\"error-details\">\n          Sorry, an error has occured, Requested page not found!\n        </div>\n        <div class=\"error-actions\">\n          <a [routerLink]=\"['']\" class=\"btn btn-primary btn-lg\"><span class=\"material-icons\">home</span>\n            Take Me Back Home </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pagenotfound/pagenotfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagenotfoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagenotfoundComponent = (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    return PagenotfoundComponent;
}());
PagenotfoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pagenotfound',
        template: __webpack_require__("../../../../../src/app/pagenotfound/pagenotfound.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pagenotfound/pagenotfound.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PagenotfoundComponent);

//# sourceMappingURL=pagenotfound.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page app-name\">\n  <nav class=\"navbar navbar-primary navbar-transparent navbar-absolute\" role=\"navigation\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navigation-example-2\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"\">\n          <div class=\"h3\" style=\"margin: 0; padding: 0\">\n            Smart<span style=\"color: #4caf50; font-weight: bold\">Church</span></div>\n        </a>\n      </div>\n      <div class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li>\n            <a [routerLink]=\"['']\" class=\"btn btn-round btn-transparent btn-xs\">Home</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n  <div class=\"full-page register-page\" data-image=\"../../assets/img/rock.jpg\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-4 col-sm-offset-1\">\n          <div class=\"flex-cont\" style=\"padding-top: 10vh;\">\n            <div class=\"reg-title flex-bae\">Creating an account on our platform is easy</div>\n            <div class=\"reg-subtitle flex-bae\">Please fill in these fields to get started</div>\n          </div>\n        </div>\n\n        <div class=\"col-sm-5 col-sm-offset-1\">\n          <div class=\"card\">\n            <div class=\"card-header card-header-icon\" data-background-color=\"green\">\n              <i class=\"material-icons\">face</i>\n            </div>\n            <div class=\"card-content\">\n              <h2 class=\"card-title text-center\">Register</h2>\n\n              <div *ngIf=\"hasErrors\" class=\"alert alert-danger text-center\">{{errorText}}</div>\n\n              <div class=\"col\">\n                <form [formGroup]=\"registerForm\" class=\"form\">\n\n\n                  <div class=\"input-group\">\n                                                <span class=\"input-group-addon\">\n                                                    <i class=\"material-icons\">perm_identity</i>\n                                                </span>\n                    <div class=\"form-group label-floating\">\n                      <label class=\"control-label\">First Name</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"fName\" required>\n                    </div>\n                  </div>\n                  <div *ngIf=\"registerForm.get('fName').invalid && registerForm.get('fName').dirty\"\n                       class=\"input-group\">\n                    <p class=\"validator-error\" *ngIf=\"registerForm.controls['fName'].hasError('required')\">\n                      ** First Name is required **</p>\n                  </div>\n\n\n                  <div class=\"input-group\">\n                                                <span class=\"input-group-addon\">\n                                                    <i class=\"material-icons\">portrait</i>\n                                                </span>\n                    <div class=\"form-group label-floating\">\n                      <label class=\"control-label\">Last Name</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"lName\" required>\n                    </div>\n                  </div>\n                  <div *ngIf=\"registerForm.get('lName').invalid && registerForm.get('lName').dirty\"\n                       class=\"input-group\">\n                    <p class=\"validator-error\" *ngIf=\"registerForm.controls['lName'].hasError('required')\">\n                      ** Last Name is required **</p>\n                  </div>\n\n                  <div class=\"input-group\">\n                                                <span class=\"input-group-addon\">\n                                                    <i class=\"material-icons\">email</i>\n                                                </span>\n                    <div class=\"form-group label-floating\">\n                      <label class=\"control-label\">Email Address</label>\n                      <input type=\"email\" class=\"form-control\" formControlName=\"emailField\" required email>\n                    </div>\n                  </div>\n                  <div *ngIf=\"registerForm.get('emailField').invalid && registerForm.get('emailField').dirty\"\n                       class=\"input-group\">\n                    <p class=\"validator-error\"\n                       *ngIf=\"registerForm.controls['emailField'].hasError('required')\">\n                      ** Email is required **</p>\n                    <p class=\"validator-error\" *ngIf=\"!registerForm.controls['emailField'].hasError('required') &&\n                      registerForm.get('emailField').hasError('email')\">\n                      ** Invalid email Address **</p>\n                  </div>\n\n                  <div class=\"input-group\">\n                                                <span class=\"input-group-addon\">\n                                                    <i class=\"material-icons\">lock_outline</i>\n                                                </span>\n                    <div class=\"form-group label-floating\">\n                      <label class=\"control-label\">Password</label>\n                      <input type=\"password\" class=\"form-control\" formControlName=\"pwdField\" required>\n                    </div>\n                  </div>\n                  <div *ngIf=\"registerForm.get('pwdField').invalid && registerForm.get('pwdField').dirty\"\n                       class=\"input-group\">\n                    <p class=\"validator-error\"\n                       *ngIf=\"registerForm.controls['pwdField'].hasError('required')\">\n                      ** Password field is required **</p>\n                    <p class=\"validator-error\" *ngIf=\"!registerForm.controls['pwdField'].hasError('required') &&\n                       registerForm.get('pwdField').hasError('minlength')\">\n                      ** Password cannot be less than 8 characters **</p>\n                  </div>\n\n                  <div class=\"input-group\">\n                                                <span class=\"input-group-addon\">\n                                                    <i class=\"material-icons\">business</i>\n                                                </span>\n                    <div class=\"form-group label-floating\">\n                      <label class=\"control-label\">Church Name</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"churchName\" required>\n                    </div>\n                  </div>\n                  <div *ngIf=\"registerForm.get('churchName').invalid && registerForm.get('churchName').dirty\"\n                       class=\"input-group\">\n                    <p class=\"validator-error\" *ngIf=\"registerForm.controls['churchName'].hasError('required')\">\n                      ** Church Name is required **</p>\n                  </div>\n\n                  <div class=\"input-group\">\n                                                <span class=\"input-group-addon\">\n                                                    <i class=\"material-icons\">place</i>\n                                                </span>\n                    <div class=\"form-group label-floating\">\n                      <label class=\"control-label\">Church Address (Location)</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"cAddress\" required>\n                    </div>\n                  </div>\n                  <div *ngIf=\"registerForm.get('cAddress').invalid && registerForm.get('cAddress').dirty\"\n                       class=\"input-group\">\n                    <p class=\"validator-error\"\n                       *ngIf=\"registerForm.controls['cAddress'].hasError('required')\">\n                      ** Church Address is required **</p>\n                  </div>\n\n                  <div class=\"input-group\">\n                                                <span class=\"input-group-addon\">\n                                                    <i class=\"material-icons\">language</i>\n                                                </span>\n                    <div class=\"form-group label-floating\">\n                      <label class=\"control-label\">Church Web url</label>\n                      <input type=\"text\" class=\"form-control\" value=\"{{webText}}\"\n                             formControlName=\"cWebAddress\">\n                    </div>\n                  </div>\n                  <!-- If you want to add a checkbox to this form, uncomment this code -->\n                  <div class=\"checkbox\" style=\"padding-left: 10px\">\n                    <label>\n                      <input type=\"checkbox\" name=\"optionsCheckboxes\" [(ngModel)]=\"chkbox\" formControlName=\"chkbox\"\n                             (change)=\"checkee(chkbox)\"> I agree to the\n                      <a href=\"#something\">terms and conditions</a>.\n                    </label>\n                  </div>\n                  <!--</div>-->\n                  <div class=\"footer text-center\">\n                    <button class=\"btn btn-primary btn-round\" [disabled]=\"registerForm.invalid || !chkbox\"\n                            (click)=\"registerUser(registerForm.get('fName').value,\n                            registerForm.get('lName').value, registerForm.get('emailField').value,\n                            registerForm.get('pwdField').value, registerForm.get('churchName').value,\n                            registerForm.get('cWebAddress').value,registerForm.get('cAddress').value)\">Register\n                    </button>\n                  </div>\n                </form>\n\n                <p class=\"text-center form-margin\">Already Registered ? Please <a [routerLink]=\"['../login']\">Sign\n                  in</a> Here</p>\n\n              </div>\n            </div>\n            <!--</div>-->\n          </div>\n        </div>\n      </div>\n    </div>\n    <footer class=\"footer\">\n      <div class=\"container\">\n        <p class=\"copyright text-center\">\n          &copy;\n          <script>\n            document.write(new Date().getFullYear())\n          </script>\n          <a href=\"https://iqubesolutions.com.ng\">iQube Solutions 2017</a>\n        </p>\n      </div>\n    </footer>\n\n    <div\n      [ngBusy]=\"{busy: busy, message: 'Loading...', backdrop: true, delay: 200, minDuration: 600, position: center}\">\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_user_auth_service__ = __webpack_require__("../../../../../src/app/shared/service/user-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_model_ChurchModel__ = __webpack_require__("../../../../../src/app/shared/model/ChurchModel.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(fb, registerService, router, toastr, vRef) {
        this.fb = fb;
        this.registerService = registerService;
        this.router = router;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vRef);
        this.registerForm = this.fb.group({
            emailField: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].email]],
            // emailField: [null, [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]],
            pwdField: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(8)]],
            fName: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            lName: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            churchName: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            cWebAddress: ['http://'],
            cAddress: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            chkbox: [null]
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.webText = 'http://';
        this.church = new __WEBPACK_IMPORTED_MODULE_5__shared_model_ChurchModel__["a" /* ChurchModel */];
        this.registerService.getLoggedChurch().subscribe(function (res) {
            _this.cUser = res;
        });
        this.hasErrors = false;
    };
    RegisterComponent.prototype.checkee = function (sc) {
        console.log('check state == ' + this.registerForm.controls['cWebAddress'].value);
    };
    RegisterComponent.prototype.registerUser = function (fName, lName, email, pwd, cName, cWeb, cAddr) {
        var _this = this;
        this.church.first_name = fName;
        this.church.last_name = lName;
        this.church.email = email;
        this.church.password = pwd;
        this.church.church_name = cName;
        this.church.church_address = cAddr;
        this.church.church_website = cWeb;
        this.church.role = 2;
        this.hasErrors = false;
        console.log('church json b4 reg == ' + JSON.stringify(this.church));
        this.busy = this.registerService.registerUser(this.church).subscribe(function (res) {
            // this.submitPending = true;
            console.log('Error status code json = ' + res.json + ' response w/o json == ' + res);
            // this.showSuccess('Registration Successful', 'success', res.status);
            _this.performSilentLogin(_this.church.email, _this.church.password);
        }, function (error) {
            _this.showError('Could not create your Account', 'An Error occurred');
            // this.submitPending = false;
            _this.errorText = error;
            _this.hasErrors = true;
            console.log('checking church sent = ' + JSON.stringify(_this.church));
            console.log('Error status code json = ' + error);
            // this.loadAppInfo();
        });
    };
    RegisterComponent.prototype.showSuccess = function (text, title) {
        var _this = this;
        this.toastr.success(text, title, { toastLife: 3000, showCloseButton: false });
        setTimeout(function () {
            if (_this.cUser.user.role === 1) {
                _this.router.navigate(['./admin']);
            }
            else {
                _this.router.navigate(['']);
            }
        }, 3000); // 5s
        // this.router.navigate(['']);
    };
    RegisterComponent.prototype.showError = function (text, title) {
        this.toastr.error(text, title);
    };
    RegisterComponent.prototype.performSilentLogin = function (email, password) {
        var _this = this;
        this.registerService.loginUser(email, password).subscribe(function (res) {
            console.log('response after register auto-login == ' + res + ' json-formatted == ' + JSON.stringify(res));
            _this.registerService.setLoggedChurch(res);
            _this.showSuccess('Registration Successful \nYou will be redirected soon', 'success');
            // this.router.navigate(['']);
        }, function (error) {
            _this.showError('An Error Occurred while trying to sign you in, please check your network', 'error');
        });
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        if (this.busy != null) {
            this.busy.unsubscribe();
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_service_user_auth_service__["a" /* UserAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_service_user_auth_service__["a" /* UserAuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__["ToastsManager"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _e || Object])
], RegisterComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/AppSettings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = (function () {
    function AppSettings() {
    }
    return AppSettings;
}());

AppSettings.API_ENDPOINT = 'http://34.211.211.38/api/api/v1';
//# sourceMappingURL=AppSettings.js.map

/***/ }),

/***/ "../../../../../src/app/shared/Utils/Color.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HEX__ = __webpack_require__("../../../../../src/app/shared/Utils/HEX.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RGB__ = __webpack_require__("../../../../../src/app/shared/Utils/RGB.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Color; });


var Color = (function () {
    function Color(color) {
        if (__WEBPACK_IMPORTED_MODULE_0__HEX__["a" /* HEX */] != null || __WEBPACK_IMPORTED_MODULE_1__RGB__["a" /* RGB */] != null) {
            if (color instanceof __WEBPACK_IMPORTED_MODULE_0__HEX__["a" /* HEX */]) {
                this.hex = color;
                this.rgb = color.toRGB();
            }
            else if (color instanceof __WEBPACK_IMPORTED_MODULE_1__RGB__["a" /* RGB */]) {
                this.rgb = color;
                this.hex = color.toHex();
            }
        }
    }
    Color.prototype.lighten = function (by) {
        if (by != null && (this.rgb != null || this.hex != null)) {
            this.rgb = this.rgb.lighten(by);
            this.hex = this.rgb.toHex();
            return this;
        }
    };
    Color.prototype.darken = function (by) {
        this.rgb = this.rgb.darken(by);
        this.hex = this.rgb.toHex();
        return this;
    };
    Color.prototype.toString = function (rgb) {
        if (rgb === void 0) { rgb = true; }
        return (rgb) ? this.rgb.toString() : this.hex.toString();
    };
    Color.prototype.setAlpha = function (a) {
        this.rgb.setAlpha(a);
        this.hex = this.rgb.toHex();
        return this;
    };
    return Color;
}());

//# sourceMappingURL=Color.js.map

/***/ }),

/***/ "../../../../../src/app/shared/Utils/HEX.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RGB__ = __webpack_require__("../../../../../src/app/shared/Utils/RGB.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HEX; });

var HEX = (function () {
    function HEX(hex) {
        this.hex = '#000000';
        if (hex != null) {
            this.hex = (hex.toString().length === 6) ? '#' + hex : (hex.toString().length === 7) ? hex : null;
        }
    }
    HEX.prototype.toRGB = function () {
        if (this.hex != null) {
            var hexString = this.hex.substr(1).toString();
            return new __WEBPACK_IMPORTED_MODULE_0__RGB__["a" /* RGB */](parseInt(hexString.substr(0, 2), 16), parseInt(hexString.substr(2, 2), 16), parseInt(hexString.substr(4, 2), 16));
        }
    };
    HEX.prototype.toString = function () {
        return this.hex;
    };
    return HEX;
}());

//# sourceMappingURL=HEX.js.map

/***/ }),

/***/ "../../../../../src/app/shared/Utils/RGB.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HEX__ = __webpack_require__("../../../../../src/app/shared/Utils/HEX.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RGB; });

var RGB = (function () {
    function RGB(r, g, b) {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.alpha = 1;
        this.value = 0;
        this.setRed(r).setGreen(g).setBlue(b);
        this.updateValue();
    }
    RGB.prototype.getHexPart = function (v) {
        var h = v.toString(16);
        return (h.length > 1) ? h : '0' + h;
    };
    RGB.prototype.updateValue = function () {
        this.value = (this.getRed() + this.getGreen() + this.getBlue());
        return this;
    };
    RGB.prototype.getValue = function () {
        return this.value;
    };
    RGB.prototype.toHex = function () {
        var hexString = (this.getAlpha() < 1) ? this.toHexAlpha().toString() : '#' + this.getHexPart(this.getRed()) +
            this.getHexPart(this.getGreen()) + this.getHexPart(this.getBlue());
        return new __WEBPACK_IMPORTED_MODULE_0__HEX__["a" /* HEX */](hexString);
    };
    RGB.prototype.toHexAlpha = function (light) {
        if (light === void 0) { light = true; }
        var tmpRgb = new RGB(this.getRed(), this.getGreen(), this.getBlue());
        if (this.getAlpha() < 1) {
            var tmp = (1 - this.getAlpha());
            tmpRgb.setRed(tmpRgb.getRed() * tmp);
            tmpRgb.setGreen(tmpRgb.getGreen() * tmp);
            tmpRgb.setBlue(tmpRgb.getBlue() * tmp);
        }
        var adjustValue = (this.getAlpha() < 1) ? Math.floor(255 * this.getAlpha()) : 0;
        return (light) ? tmpRgb.lighten(adjustValue).toHex() : tmpRgb.darken(adjustValue).toHex();
    };
    RGB.prototype.setRed = function (value) {
        this.r = (value > 255) ? 255 : ((value < 0) ? 0 : Math.floor(value));
        return this.updateValue();
    };
    RGB.prototype.getRed = function () {
        return this.r;
    };
    RGB.prototype.setGreen = function (value) {
        this.g = (value > 255) ? 255 : ((value < 0) ? 0 : Math.floor(value));
        return this.updateValue();
    };
    RGB.prototype.getGreen = function () {
        return this.g;
    };
    RGB.prototype.setBlue = function (value) {
        this.b = (value > 255) ? 255 : ((value < 0) ? 0 : Math.floor(value));
        return this.updateValue();
    };
    RGB.prototype.getBlue = function () {
        return this.b;
    };
    RGB.prototype.setAlpha = function (a) {
        this.alpha = (a <= 1 && a >= 0) ? a : 1;
        return this;
    };
    RGB.prototype.getAlpha = function () {
        return this.alpha;
    };
    RGB.prototype.lighten = function (by) {
        this.setRed(this.getRed() + by)
            .setBlue(this.getBlue() + by)
            .setGreen(this.getGreen() + by);
        return this.updateValue();
    };
    RGB.prototype.darken = function (by) {
        this.setRed(this.getRed() - by)
            .setBlue(this.getBlue() - by)
            .setGreen(this.getGreen() - by);
        return this.updateValue();
    };
    RGB.prototype.toString = function () {
        return (this.alpha < 1) ? 'rgba(' + this.getRed() + ',' + this.getGreen() + ',' + this.getBlue() + ',' +
            this.getAlpha() + ')' : 'rgb(' + this.getRed() + ',' + this.getGreen() + ',' + this.getBlue() + ')';
    };
    return RGB;
}());

//# sourceMappingURL=RGB.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"#\">\n                        Home\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Company\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Portfolio\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Blog\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <p class=\"copyright pull-right\">\n            &copy;\n            {{test | date: 'yyyy'}}\n            <a href=\"https://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\n        </p>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html")
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/guard/admin-auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_auth_service__ = __webpack_require__("../../../../../src/app/shared/service/user-auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminAuthGuard = (function () {
    function AdminAuthGuard(userService, route) {
        this.userService = userService;
        this.route = route;
    }
    AdminAuthGuard.prototype.canActivate = function (next, state) {
        // return false;
        // this.loggedChurch = this.userService.getLoggedChurch();
        this.adminStatus = this.userService.getIsAdmin();
        console.log('logged admin status inside Guard == ' + this.adminStatus);
        if (!this.adminStatus) {
            this.route.navigate(['login']);
        }
        else {
            return true;
        }
    };
    return AdminAuthGuard;
}());
AdminAuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_user_auth_service__["a" /* UserAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_user_auth_service__["a" /* UserAuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AdminAuthGuard);

var _a, _b;
//# sourceMappingURL=admin-auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/shared/guard/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_auth_service__ = __webpack_require__("../../../../../src/app/shared/service/user-auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(userService, route) {
        this.userService = userService;
        this.route = route;
        // this.loggedChurch = this.userService.getLoggedChurch();
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        // return false;
        console.log('logged church inside Guard == ' + JSON.stringify(this.loggedChurch));
        if (this.userService.isLoggedIn) {
            // if (this.loggedChurch.user.role === 2) {
            return true;
            // }
        }
        else {
            this.route.navigate(['login']);
            // return true;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_user_auth_service__["a" /* UserAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_user_auth_service__["a" /* UserAuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/shared/model/AppModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModel; });
var AppModel = (function () {
    function AppModel() {
        this.appId = '';
        this.name = '';
        this.app_tag_line = '';
        this.color_primary = '';
        this.color_primary_dark = '';
        this.color_background = '';
        this.text_color = '';
        this.creator_email = '';
    }
    return AppModel;
}());

/*"name": "train0 app",
  "app_tag_line": "Jesus is Lord",
  "themeid": "1",
  "icon_url": "http://imgur/randomicon1.png",
  "splash_url": "http://imgur/randomsplash.jpg",
  "creator_email": "nuhiara@gmail.com",
  "color_primary" : "#88cc99",
  "color_primary_dark" : "#55cc99",
  "color_background" : "#ffffff",
  "text_color" : "#000000"*/
//# sourceMappingURL=AppModel.js.map

/***/ }),

/***/ "../../../../../src/app/shared/model/ChurchModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChurchModel; });
var ChurchModel = (function () {
    function ChurchModel() {
    }
    return ChurchModel;
}());

/*{
 "email": "eze@gmail.com",
 "first_name": "Nnabueze",
 "last_name": "Uhiara",
 "church_name": "catholic",
 "church_website": "http://imgur/randomsplash.com",
 "church_address": "1/2 opara avenue Umuahia",
 "sex" : "m",  "role" : 1,
 "password" : "12345678"
 }
 */
//# sourceMappingURL=ChurchModel.js.map

/***/ }),

/***/ "../../../../../src/app/shared/model/ChurchResponse.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChurchResponse; });
/* unused harmony export User */
/* unused harmony export Token */
var ChurchResponse = (function () {
    function ChurchResponse() {
    }
    return ChurchResponse;
}());

var User = (function () {
    function User() {
    }
    return User;
}());

var Token = (function () {
    function Token() {
    }
    return Token;
}());

/*{
  user :
 {
  id : 1,
  email :  nuhiara@gmail.com ,
  first_name :  Nnabueze ,
  last_name :  Uhiara ,
  role : 1,
  sex :  m ,
  church_name :  catholic ,
  church_address :  1/2 opara avenue Umuahia ,
  church_website :  http://imgur/randomsplash.com ,
  access_token : {
  revoked : 0,
  access_token :  1D506A4C521D1CF8D3DB756239F5BB50 ,
  refresh_key :  FGMRYA8VUOFFHPL
 }
 }
 }*/
//# sourceMappingURL=ChurchResponse.js.map

/***/ }),

/***/ "../../../../../src/app/shared/model/FileModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileModel; });
var FileModel = (function () {
    function FileModel() {
    }
    return FileModel;
}());

//# sourceMappingURL=FileModel.js.map

/***/ }),

/***/ "../../../../../src/app/shared/model/MenuModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuModel; });
var MenuModel = (function () {
    function MenuModel() {
    }
    return MenuModel;
}());

//# sourceMappingURL=MenuModel.js.map

/***/ }),

/***/ "../../../../../src/app/shared/model/MenuPostModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPostModel; });
var MenuPostModel = (function () {
    function MenuPostModel() {
    }
    return MenuPostModel;
}());

/*{
  "name" : "train",
  "content" : "come all ye faithful...",
  "appid" : 12,
  "creator_email" : "femibami4u20@gmail.com",
  "submenus" : [
  {
    "name" : "train_sub1",
    "content" : "cont1",
    "content_type" : "list",
    "appid" : 12
  },
  {
    "name" : "train_sub2",
    "content" : "cont2",
    "content_type" : "list",
    "appid" : 12
  },
  {
    "name" : "train_sub3",
    "content" : "cont3",
    "content_type" : "list",
    "appid" : 12
  }
]
}*/
//# sourceMappingURL=MenuPostModel.js.map

/***/ }),

/***/ "../../../../../src/app/shared/model/SubMenuPostModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubMenuPostModel; });
var SubMenuPostModel = (function () {
    function SubMenuPostModel() {
    }
    return SubMenuPostModel;
}());

//# sourceMappingURL=SubMenuPostModel.js.map

/***/ }),

/***/ "../../../../../src/app/shared/model/TextContentModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextContentModel; });
var TextContentModel = (function () {
    function TextContentModel() {
    }
    return TextContentModel;
}());

//# sourceMappingURL=TextContentModel.js.map

/***/ }),

/***/ "../../../../../src/app/shared/model/ThemeModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeModel; });
var ThemeModel = (function () {
    function ThemeModel() {
    }
    return ThemeModel;
}());

//# sourceMappingURL=ThemeModel.js.map

/***/ }),

/***/ "../../../../../src/app/shared/model/ThemeResponse.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeResponse; });
var ThemeResponse = (function () {
    function ThemeResponse() {
    }
    return ThemeResponse;
}());

//# sourceMappingURL=ThemeResponse.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-elevation navbar-absolute\" role=\"navigation\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-minimize\">\n      <button id=\"minimizeSidebar\" class=\"btn btn-round btn-white btn-fill btn-just-icon\">\n        <i class=\"material-icons visible-on-sidebar-regular\">more_vert</i>\n        <i class=\"material-icons visible-on-sidebar-mini\">view_list</i>\n      </button>\n    </div>\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <div *ngIf=\"!role\">\n        <a class=\"navbar-brand brand-text\" href=\"#\"><b>Apps</b></a>\n      </div>\n      <div *ngIf=\"role\" class=\"nav nav-brand brand-text\">\n        <p class=\"navbar-text\" style=\"margin-left: 5px\">Admin Dashboard</p>\n      </div>\n    </div>\n    <div class=\"collapse navbar-collapse\">\n      <div class=\"nav navbar-right\">\n        <div class=\"navbar-text\" style=\"color: grey;font-size: large; font-weight: 300\">Welcome <b>{{churchEmail}}</b>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  <!--</div>-->\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_routes_config__ = __webpack_require__("../../../../../src/app/sidebar/sidebar-routes.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_metadata__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.metadata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_ChurchResponse__ = __webpack_require__("../../../../../src/app/shared/model/ChurchResponse.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_user_auth_service__ = __webpack_require__("../../../../../src/app/shared/service/user-auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = (function () {
    function NavbarComponent(location, churchService) {
        this.churchService = churchService;
        this.location = location;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_routes_config__["a" /* ROUTES */].filter(function (listTitle) { return listTitle.menuType !== __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_metadata__["a" /* MenuType */].BRAND; });
        this.churchInfo = new __WEBPACK_IMPORTED_MODULE_4__model_ChurchResponse__["a" /* ChurchResponse */];
        // this.churchInfo = this.churchService.getLoggedChurch();
        this.churchService.getLoggedChurch().subscribe(function (res) {
            _this.churchInfo = res;
            _this.churchEmail = _this.churchInfo.user.email;
        });
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.getPath = function () {
        // console.log(this.location);
        return this.location.prepareExternalUrl(this.location.path());
    };
    return NavbarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NavbarComponent.prototype, "role", void 0);
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__service_user_auth_service__["a" /* UserAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_user_auth_service__["a" /* UserAuthService */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/service/app-info.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AppSettings__ = __webpack_require__("../../../../../src/app/shared/AppSettings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_ReplaySubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BuildAppRes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return StatusToolBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppInfoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppIdResponse = (function () {
    function AppIdResponse() {
    }
    return AppIdResponse;
}());
var BuildAppRes = (function () {
    function BuildAppRes() {
    }
    return BuildAppRes;
}());

var StatusToolBar = (function () {
    function StatusToolBar() {
    }
    return StatusToolBar;
}());

var AppInfoService = (function () {
    // public statusTool: Subject<StatusToolBar> = new ReplaySubject<StatusToolBar>(1);
    function AppInfoService(http) {
        this.http = http;
        this.partial_app_url = __WEBPACK_IMPORTED_MODULE_6__AppSettings__["a" /* AppSettings */].API_ENDPOINT + '/app/partial';
        this.img_upload_url = __WEBPACK_IMPORTED_MODULE_6__AppSettings__["a" /* AppSettings */].API_ENDPOINT + '/image/upload';
        this.app_url = __WEBPACK_IMPORTED_MODULE_6__AppSettings__["a" /* AppSettings */].API_ENDPOINT + '/app/';
        this.android_app_builder = __WEBPACK_IMPORTED_MODULE_6__AppSettings__["a" /* AppSettings */].API_ENDPOINT + '/android/';
        this.user_apps_url = __WEBPACK_IMPORTED_MODULE_6__AppSettings__["a" /* AppSettings */].API_ENDPOINT + '/app/creator/'; // append email
        this.space = new __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__["BehaviorSubject"](0);
        this.statusTool = new __WEBPACK_IMPORTED_MODULE_8_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            headers: this.headers
        });
        this.mAppRes = new BuildAppRes;
    }
    AppInfoService.prototype.updateAppInfo = function (appmodel) {
        /*this.mAppInfo.appName = appName;
        this.mAppInfo.appTagLine = appTagLine;
        this.mAppInfo.appTheme = appTheme;*/
        this.mAppInfo = appmodel;
    };
    AppInfoService.prototype.getAppInfo = function () {
        return this.mAppInfo;
    };
    AppInfoService.prototype.fetchUserApps = function (email) {
        return this.http.get(this.user_apps_url + email)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); });
    };
    AppInfoService.prototype.fetchAppId = function (appName, appTagLine, themeId, creator_email) {
        var app_body = { 'name': appName, 'app_tag_line': appTagLine, 'themeid': themeId, 'creator_email': creator_email };
        var body = JSON.stringify(app_body);
        console.log('json app body == ' + body);
        return this.http.post(this.partial_app_url, body, this.options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); });
    };
    AppInfoService.prototype.uploadAppSplash = function (file) {
        var formData = new FormData();
        formData.append('image', file, file.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        /** No need to include Content-Type in Angular 4 */
        headers.append('enctype', 'multipart/form-data');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.post(this.img_upload_url, formData)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); });
    };
    AppInfoService.prototype.uploadAppIcon = function (file) {
        var formData = new FormData();
        formData.append('image', file, file.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        /** No need to include Content-Type in Angular 4 */
        headers.append('enctype', 'multipart/form-data');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.post(this.img_upload_url, formData)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); });
    };
    AppInfoService.prototype.buildMyApp = function (appModel) {
        var _this = this;
        var mAppmodel = {
            'name': appModel.name,
            'app_tag_line': appModel.app_tag_line,
            'themeid': appModel.themeid,
            'icon_url': appModel.icon_url,
            'splash_url': appModel.splash_url,
            'creator_email': appModel.creator_email,
            'color_primary': appModel.color_primary,
            'color_primary_dark': appModel.color_primary_dark,
            'color_background': appModel.color_background,
            'text_color': appModel.text_color
        };
        var body = JSON.stringify(mAppmodel);
        // let appId = '';
        /*return this.http.post(this.app_url, body, this.options)
          .map((res: Response) => res.json())
          .catch((error: any) => Observable.throw(error.json().error || 'Server error'));*/
        console.log('appbody before final build == ' + body);
        return this.http.put(this.app_url + appModel.appId, body, this.options)
            .map(function (res) {
            _this.mAppRes = res.json();
            // appId = this.mAppRes.appid;
            console.log('gotten APP STATUS in service before Flatmap == ' + _this.mAppRes.status);
        })
            .flatMap(function (mBody) {
            console.log('MBody in flatmap ##APPINFO == ' + mBody + ' jsonified body == ' + JSON.stringify(mBody));
            return _this.http.get(_this.android_app_builder + appModel.appId)
                .map(function (resp) { return resp.json(); })
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); });
        }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); });
    };
    // Delete app
    AppInfoService.prototype.deleteApp = function (id) {
        return this.http.delete(this.app_url + id) // ...using put request
            .map(function (res) { return res.json(); }) //
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); });
    };
    AppInfoService.prototype.setSelectedAppColor = function (color) {
        this.space.next(color);
    };
    AppInfoService.prototype.getSelectedAppColor = function () {
        return this.space.asObservable();
    };
    AppInfoService.prototype.setSelectedAppStatusToolbar = function (color) {
        this.statusTool.next(color);
    };
    AppInfoService.prototype.getSelectedAppStatusToolbar = function () {
        return this.statusTool.asObservable();
    };
    return AppInfoService;
}());
AppInfoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _a || Object])
], AppInfoService);

var _a;
//# sourceMappingURL=app-info.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/service/menu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_MenuModel__ = __webpack_require__("../../../../../src/app/shared/model/MenuModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__AppSettings__ = __webpack_require__("../../../../../src/app/shared/AppSettings.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var FilePkg = (function () {
    function FilePkg() {
    }
    return FilePkg;
}());
var MenuService = (function () {
    function MenuService(http) {
        this.http = http;
        this.menu_post_url = 'http://api.smartapp.tk/api/v1/menu1/';
        this.subject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.menuSubject = new __WEBPACK_IMPORTED_MODULE_5_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.subjectL2 = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.fileSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        // public subMenuObs: ReplaySubject<any> = new ReplaySubject(1);
        this.subMenuObs = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.menu1Obs = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["Headers"]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["RequestOptions"]({
            headers: this.headers
        });
        this.menuModel = new __WEBPACK_IMPORTED_MODULE_1__model_MenuModel__["a" /* MenuModel */];
    }
    MenuService.prototype.setMenuModel = function (name, icon_text, content) {
        this.menuModel.menu_name = name;
        this.menuModel.menu_icon = icon_text;
        this.menuModel.menu_content = content;
        this.menuSubject.next(this.menuModel);
    };
    MenuService.prototype.getMenuModel = function () {
        return this.menuSubject.asObservable();
    };
    MenuService.prototype.setSubMenuArrayL1 = function (menuArr) {
        this.subject.next(menuArr);
    };
    MenuService.prototype.getSubMenuArrayL1 = function () {
        return this.subject.asObservable();
    };
    MenuService.prototype.setSubMenuArrayL2 = function (menuArr2) {
        this.subjectL2.next(menuArr2);
    };
    MenuService.prototype.getSubMenuArrayL2 = function () {
        return this.subjectL2.asObservable();
    };
    MenuService.prototype.setObservableFile = function (file) {
        this.fileSubject.next(file);
    };
    MenuService.prototype.getObservableFile = function () {
        return this.fileSubject.asObservable();
    };
    MenuService.prototype.postMenuToServer = function (menu) {
        var body = JSON.stringify(menu);
        console.log('POSTMENU in menuService strinigi body == ' + body);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_9__AppSettings__["a" /* AppSettings */].API_ENDPOINT + '/menu1', body, this.options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); });
    };
    MenuService.prototype.postSubMenuToServer = function (menu) {
        var body = JSON.stringify(menu);
        console.log('POSTMENU in menuService strinigi body == ' + body);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_9__AppSettings__["a" /* AppSettings */].API_ENDPOINT + '/submenu2', body, this.options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); });
    };
    MenuService.prototype.deleteMenuFromServer = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_9__AppSettings__["a" /* AppSettings */].API_ENDPOINT + '/submenu1/' + id) // ...using put request
            .map(function (res) { return res.json(); }) //
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); });
    };
    MenuService.prototype.setObservableSub = function (submenu) {
        var _this = this;
        this.postSubMenuToServer(submenu).subscribe(function (res) {
            _this.subMenuObs.next(res);
        }, function (err) {
            _this.subMenuObs.error(err);
            // this.subMenuObs = error;
        });
    };
    MenuService.prototype.getSubmenuObs = function () {
        return this.subMenuObs.asObservable();
    };
    MenuService.prototype.setMenu1Obs = function (menu) {
        var _this = this;
        this.postMenuToServer(menu).subscribe(function (res) {
            _this.menu1Obs.next(res);
            console.log('menu response in service == ' + JSON.stringify(res));
        }, function (err) {
            _this.menu1Obs.error(err);
            // this.subMenuObs = error;
        });
    };
    MenuService.prototype.getMenu1Obs = function () {
        return this.menu1Obs.asObservable();
    };
    return MenuService;
}());
MenuService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"]) === "function" && _a || Object])
], MenuService);

var _a;
//# sourceMappingURL=menu.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/service/notify.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotifyService = (function () {
    function NotifyService(toastr) {
        this.toastr = toastr;
    }
    NotifyService.prototype.showSuccess = function (text, title, vmRef) {
        this.toastr.setRootViewContainerRef(vmRef);
        this.toastr.success(text, title, { toastLife: 3000, showCloseButton: false });
        // this.fetchThemes();
    };
    NotifyService.prototype.showError = function (text, title, vmRef) {
        this.toastr.setRootViewContainerRef(vmRef);
        this.toastr.error(text, title);
    };
    return NotifyService;
}());
NotifyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastsManager"]) === "function" && _a || Object])
], NotifyService);

var _a;
//# sourceMappingURL=notify.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/service/theme.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_ThemeModel__ = __webpack_require__("../../../../../src/app/shared/model/ThemeModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model_ThemeResponse__ = __webpack_require__("../../../../../src/app/shared/model/ThemeResponse.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__AppSettings__ = __webpack_require__("../../../../../src/app/shared/AppSettings.ts");
/* unused harmony export UpdImgRes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var UpdImgRes = (function () {
    function UpdImgRes() {
    }
    return UpdImgRes;
}());

var CreateThemeModel = (function () {
    function CreateThemeModel() {
    }
    return CreateThemeModel;
}());
var SingleThemeResponse = (function () {
    function SingleThemeResponse() {
    }
    return SingleThemeResponse;
}());
var ThemeService = (function () {
    // public bSubject: Subject<ThemeResponse> = new BehaviorSubject<>(ThemeResponse);
    function ThemeService(http) {
        this.http = http;
        this.registrationUrl = 'http://api.smartapp.tk/api/v1/creator/auth/register';
        this.loginUrl = 'http://api.smartapp.tk/api/v1/creator/auth/login';
        this.all_theme_url = __WEBPACK_IMPORTED_MODULE_10__AppSettings__["a" /* AppSettings */].API_ENDPOINT + '/theme';
        this.theme_img_url = __WEBPACK_IMPORTED_MODULE_10__AppSettings__["a" /* AppSettings */].API_ENDPOINT + '/image/upload';
        this.subject = new __WEBPACK_IMPORTED_MODULE_9_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.themeArrSubject = new __WEBPACK_IMPORTED_MODULE_9_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.headers.append('Content-Type', 'application/json');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: this.headers
        });
        this.theme = new __WEBPACK_IMPORTED_MODULE_2__model_ThemeModel__["a" /* ThemeModel */];
        this.delTheme = new __WEBPACK_IMPORTED_MODULE_2__model_ThemeModel__["a" /* ThemeModel */];
        this.crTheme = new CreateThemeModel;
        this.imgRes = new UpdImgRes;
        this.themeResp = new __WEBPACK_IMPORTED_MODULE_8__model_ThemeResponse__["a" /* ThemeResponse */];
    }
    ThemeService.prototype.getUpdatedTheme = function () {
        // ...using get request
        return this.http.get(this.all_theme_url)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); });
    };
    ThemeService.prototype.getAndSetTheme = function () {
        var _this = this;
        // this.sub = this.getUpdatedTheme().subscribe(resp => {
        this.getUpdatedTheme().subscribe(function (resp) {
            // this.themeResp = resp;
            _this.themeArrSubject.next(resp);
            // this.themeArrSubject.complete();
        }, function (error) {
            _this.themeArrSubject.error(error);
            _this.themeErr = error;
        });
    };
    ThemeService.prototype.getAllThemes = function () {
        return this.themeArrSubject.asObservable();
    };
    ThemeService.prototype.getThemeById = function (id) {
        // ...using get request
        return this.http.get(this.all_theme_url + '/' + id)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); });
    };
    ThemeService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    ThemeService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.message || error);
    };
    // set theme to be deleted
    ThemeService.prototype.setThemeDel = function (themeDel) {
        this.delTheme = themeDel;
        this.subject.next(themeDel);
    };
    // get theme to be deleted
    ThemeService.prototype.getDelTheme = function () {
        return this.subject.asObservable();
    };
    // Add a new Theme
    ThemeService.prototype.addTheme = function (body) {
        var bodyString = JSON.stringify(body); // Stringify payload
        return this.http.post(this.all_theme_url, body, this.options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); });
    };
    // Update a Theme
    ThemeService.prototype.updateTheme = function (id, themeName, themeJenkins, firstMenu, secondMenu, thirdMenu, fourthMenu, fifthMenu, file) {
        var _this = this;
        var formData = new FormData();
        formData.append('image', file, file.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        console.log('response for image upload THEMESERVICE == ' + file.name);
        /** No need to include Content-Type in Angular 4 */
        headers.append('enctype', 'multipart/form-data');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.post(this.theme_img_url, formData)
            .map(function (res) {
            _this.imgRes = res.json();
            console.log('gotten image res inside service == ' + _this.imgRes.image_url);
            _this.crTheme.name = themeName;
            _this.crTheme.image_url = _this.imgRes.image_url;
            _this.crTheme.jenkins_job_url = themeJenkins;
            _this.crTheme.first_menu = firstMenu;
            _this.crTheme.second_menu = secondMenu;
            _this.crTheme.third_menu = thirdMenu;
            _this.crTheme.fourth_menu = fourthMenu;
            _this.crTheme.fifth_menu = fifthMenu;
        })
            .flatMap(function (body) {
            console.log('body in flatmap == ' + body + ' jsonified body == ' + JSON.stringify(body));
            return _this.http.put(_this.all_theme_url + '/' + id, JSON.stringify(_this.crTheme), _this.options)
                .map(function (resp) { return resp.json(); })
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json().error || 'Server in flatmap error'); });
        }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); });
        /*const bodyString = JSON.stringify(body); // Stringify payload
        console.log('updt body jsonStringify == ' + bodyString);
        return this.http.put(this.all_theme_url + '/' + id, bodyString, this.options) // ...using put request
          .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
          .catch((error: any) => Observable.throw(error.json().error || 'Server error'));*/
    };
    // Delete a theme
    ThemeService.prototype.removeTheme = function (id) {
        return this.http.delete(this.all_theme_url + "/" + id) // ...using put request
            .map(function (res) { return res.json(); }) //
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); });
    };
    ThemeService.prototype.addNewTheme = function (themeName, themeJenkins, firstMenu, secondMenu, thirdMenu, fourthMenu, fifthMenu, file) {
        var _this = this;
        var formData = new FormData();
        formData.append('image', file, file.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        /** No need to include Content-Type in Angular 4 */
        headers.append('enctype', 'multipart/form-data');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.http.post(this.theme_img_url, formData)
            .map(function (res) {
            _this.imgRes = res.json();
            console.log('gotten image res inside service == ' + _this.imgRes.image_path);
            _this.crTheme.name = themeName;
            _this.crTheme.image_url = _this.imgRes.image_path;
            _this.crTheme.jenkins_job_url = themeJenkins;
            _this.crTheme.first_menu = firstMenu;
            _this.crTheme.second_menu = secondMenu;
            _this.crTheme.third_menu = thirdMenu;
            _this.crTheme.fourth_menu = fourthMenu;
            _this.crTheme.fifth_menu = fifthMenu;
        })
            .flatMap(function (body) {
            console.log('body in flatmap == ' + body + ' jsonified body == ' + JSON.stringify(body));
            return _this.http.post(_this.all_theme_url, JSON.stringify(_this.crTheme), _this.options)
                .map(function (resp) { return resp.json(); })
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json().error || 'Server in flatmap error'); });
        }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); });
        /*const options = new RequestOptions({ headers: headers });
        return this.http.post(this.theme_img_url, formData)
          .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
          .catch((error: any) => Observable.throw(error.json().error || 'Server error'));*/
    };
    ThemeService.prototype.ngOnDestroy = function () {
        if (this.sub != null) {
            this.sub.unsubscribe();
        }
    };
    return ThemeService;
}());
ThemeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ThemeService);

var _a;
/*
.map((res: any) => res.json())
  .flatMap((book: any) => {
    return this.http.get('/api/authors/' + book.author_id)
      .map((res: any) => res.json());
  });

 const bodyString = JSON.stringify(body); // Stringify payload
 return this.http.post(this.all_theme_url, body, this.options) // ...using post request
 .map((res: Response) => res.json())*/
//# sourceMappingURL=theme.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/service/user-auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_ChurchResponse__ = __webpack_require__("../../../../../src/app/shared/model/ChurchResponse.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__AppSettings__ = __webpack_require__("../../../../../src/app/shared/AppSettings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_ReplaySubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UserAuthService = (function () {
    function UserAuthService(http) {
        this.http = http;
        this.registrationUrl = 'http://api.smartapp.tk/api/v1/creator/auth/register';
        this.newRegUrl = __WEBPACK_IMPORTED_MODULE_7__AppSettings__["a" /* AppSettings */].API_ENDPOINT + '/auth/register';
        this.newLoginUrl = __WEBPACK_IMPORTED_MODULE_7__AppSettings__["a" /* AppSettings */].API_ENDPOINT + '/auth/login';
        this.loginUrl = 'http://api.smartapp.tk/api/v1/creator/auth/login';
        this.loggedChurchSub = new __WEBPACK_IMPORTED_MODULE_8_rxjs_ReplaySubject__["ReplaySubject"](1);
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.headers.append('Content-Type', 'application/json');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: this.headers
        });
        this.isLoggedIn = false;
        this.isAdmin = false;
        this.loggedChurch = new __WEBPACK_IMPORTED_MODULE_6__model_ChurchResponse__["a" /* ChurchResponse */]();
    }
    UserAuthService.prototype.registerUser = function (data) {
        var body = JSON.stringify(data);
        console.log('strinigfied data == ' + body + ' church string == ' + data.email);
        return this.http.post(this.newRegUrl, body, this.options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserAuthService.prototype.loginUser = function (email, pwd) {
        var body = JSON.stringify({ 'email': email, 'password': pwd });
        console.log('login user inside service == ' + body);
        return this.http.post(this.newLoginUrl, body, this.options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error'); });
    };
    UserAuthService.prototype.setLoggedChurch = function (church) {
        console.log('inside setLogged in auth service email == ' + church.user.church_name);
        this.loggedChurch = church;
        this.loggedChurchSub.next(church);
        this.isLoggedIn = true;
    };
    UserAuthService.prototype.getLoggedChurch = function () {
        return this.loggedChurchSub.asObservable();
    };
    UserAuthService.prototype.setIsAdmin = function (role) {
        if (role === 1) {
            this.isAdmin = true;
        }
        else {
            this.isAdmin = false;
        }
    };
    UserAuthService.prototype.getIsAdmin = function () {
        return this.isAdmin;
    };
    UserAuthService.prototype.setIsLoggedIn = function () {
        // this.isLoggedIn = true;
        return this.isLoggedIn;
    };
    return UserAuthService;
}());
UserAuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UserAuthService);

var _a;
//# sourceMappingURL=user-auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar-routes.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.metadata.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });

var ROUTES = [
    { path: 'dashboard', title: 'Dashboard', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'material-icons' },
    { path: 'pages/timeline', title: 'Timeline Page', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'material-icons' },
    { path: 'pages/user', title: 'User Page', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'material-icons' },
    { path: 'components/buttons', title: 'Buttons', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'pe-7s-plugin' },
    { path: 'components/grid', title: 'Grid System', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'pe-7s-plugin' },
    { path: 'components/panels', title: 'Panels', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'pe-7s-plugin' },
    { path: 'components/sweet-alert', title: 'Sweet Alert', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'pe-7s-plugin' },
    { path: 'components/notifications', title: 'Notifications', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'pe-7s-plugin' },
    { path: 'components/icons', title: 'Icons', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'pe-7s-plugin' },
    { path: 'components/typography', title: 'Typography', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'pe-7s-plugin' },
    { path: 'forms/regular', title: 'Regular Forms', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'pe-7s-note2' },
    { path: 'forms/extended', title: 'Extended Forms', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'pe-7s-note2' },
    { path: 'forms/validation', title: 'Validation Forms', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'pe-7s-note2' },
    { path: 'forms/wizard', title: 'Wizard', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'pe-7s-note2' },
    { path: 'tables/regular', title: 'Regular Tables', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'pe-7s-news-paper' },
    { path: 'tables/extended', title: 'Extended Tables', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'pe-7s-news-paper' },
    { path: 'tables/datatables.net', title: 'DataTables.net', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'pe-7s-news-paper' },
    { path: 'maps/google', title: 'Google Maps', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'pe-7s-map-marker' },
    { path: 'maps/fullscreen', title: 'Full Screen Map', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'pe-7s-map-marker' },
    { path: 'maps/vector', title: 'Vector Map', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'pe-7s-map-marker' },
    { path: 'widgets', title: 'Widgets', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'material-icons' },
    { path: 'charts', title: 'Charts', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'material-icons' },
    { path: 'calendar', title: 'Calendar', menuType: __WEBPACK_IMPORTED_MODULE_0__sidebar_metadata__["a" /* MenuType */].LEFT, icon: 'material-icons' },
];
//# sourceMappingURL=sidebar-routes.config.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n  <!--<div class=\"logo-normal\">\n      <a href=\"https://www.creative-tim.com\" class=\"simple-text\">\n          Creative Tim\n      </a>\n  </div>-->\n\n  <div class=\"h3 text-center\" style=\"margin: 0; padding: 0; color: white\">\n    Smart<span style=\"color: #4caf50; font-weight: bold\">Church</span></div>\n</div>\n\n\n<div class=\"sidebar-wrapper\">\n\n  <div  *ngIf=\"!role\">\n    <div class=\"side-nav-circle\">F</div>\n  <div class=\"sidebar-name-text\">{{churchName}}</div>\n  <div class=\"sidebar-sub-text\">{{churchAddress}}</div>\n\n  <div class=\"nav-container\">\n    <ul class=\"nav\">\n      <!--<li routerLinkActive=\"active\">-->\n      <!--<a  [routerLink]=\"[menuItems[0].path]\">-->\n      <!--<i class=\"{{menuItems[0].icon}}\">dashboard</i>-->\n      <!--<p>{{menuItems[0].title}}</p>-->\n      <!--</a>-->\n      <!--</li>-->\n\n      <li routerLinkActive=\"active\">\n        <a data-toggle=\"collapse\" href=\"#formsExamples\">\n          <i class=\"material-icons\">grid_on</i>\n          <p>Apps\n            <b class=\"caret\"></b>\n          </p>\n        </a>\n        <div class=\"collapse\" id=\"formsExamples\">\n          <!--<ul class=\"nav\">-->\n          <!--<li routerLinkActive=\"active\">-->\n          <!--<a  [routerLink]=\"[menuItems[10].path]\">-->\n          <!--<span class=\"sidebar-mini\">RF</span>-->\n          <!--<span class=\"sidebar-normal\">{{menuItems[10].title}}</span>-->\n          <!--</a>-->\n          <!--</li>-->\n          <!--<li routerLinkActive=\"active\">-->\n          <!--<a  [routerLink]=\"[menuItems[11].path]\">-->\n          <!--<span class=\"sidebar-mini\">EF</span>-->\n          <!--<span class=\"sidebar-normal\">{{menuItems[11].title}}</span>-->\n          <!--</a>-->\n          <!--</li>-->\n          <!--<li routerLinkActive=\"active\">-->\n          <!--<a  [routerLink]=\"[menuItems[12].path]\">-->\n          <!--<span class=\"sidebar-mini\">VF</span>-->\n          <!--<span class=\"sidebar-normal\">{{menuItems[12].title}}</span>-->\n          <!--</a>-->\n          <!--</li>-->\n          <!--<li routerLinkActive=\"active\">-->\n          <!--<a  [routerLink]=\"[menuItems[13].path]\">-->\n          <!--<span class=\"sidebar-mini\">W</span>-->\n          <!--<span class=\"sidebar-normal\">{{menuItems[13].title}}</span>-->\n          <!--</a>-->\n          <!--</li>-->\n          <!--</ul>-->\n        </div>\n      </li>\n\n      <li routerLinkActive=\"active\">\n        <a data-toggle=\"collapse\" href=\"#tablesExamples\">\n          <i class=\"material-icons\">content_paste</i>\n          <p>Publish\n          </p>\n        </a>\n      </li>\n\n      <li routerLinkActive=\"active\">\n        <a data-toggle=\"collapse\" href=\"#mapsExamples\">\n          <i class=\"material-icons\">settings</i>\n          <p>Settings</p>\n        </a>\n      </li>\n\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"[menuItems[20].path]\">\n          <i class=\"material-icons\">help_outline</i>\n\n          <p>Help</p>\n        </a>\n      </li>\n\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"[menuItems[21].path]\">\n          <i class=\"material-icons\">keyboard_return</i>\n\n          <p>Logout</p>\n        </a>\n      </li>\n\n    </ul>\n  </div>\n  </div>\n\n  <div *ngIf=\"role\" class=\"nav-container\">\n    <div class=\"side-nav-circle\">G</div>\n\n    <div class=\"sidebar-name-text\">Global Admin</div>\n<ul class=\"nav\">\n  <li class=\"divider\"></li>\n    <li routerLinkActive=\"active\">\n      <a [routerLink]=\"\">\n        <i class=\"material-icons\">keyboard_return</i>\n        <p>Logout</p>\n      </a>\n    </li>\n  <li class=\"divider\"></li>\n\n    </ul>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_routes_config__ = __webpack_require__("../../../../../src/app/sidebar/sidebar-routes.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_metadata__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.metadata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_user_auth_service__ = __webpack_require__("../../../../../src/app/shared/service/user-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_model_ChurchResponse__ = __webpack_require__("../../../../../src/app/shared/model/ChurchResponse.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SidebarComponent = (function () {
    function SidebarComponent(churchService) {
        this.churchService = churchService;
        /*this.churchName = this.churchService.getLoggedChurch().data.creator.church_name;
         this.churchAddress = this.churchService.getLoggedChurch().data.creator.church_address;*/
        /*this.churchName = this.churchInfo.data.creator.church_name;
         this.churchAddress = this.churchInfo.data.creator.church_address;*/
        // console.log('logged church info status in sidebar == ' + this.churchInfo.status);
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.churchInfo = new __WEBPACK_IMPORTED_MODULE_4__shared_model_ChurchResponse__["a" /* ChurchResponse */];
        $.getScript('../../assets/js/sidebar-moving-tab.js');
        this.menuItems = __WEBPACK_IMPORTED_MODULE_1__sidebar_routes_config__["a" /* ROUTES */].filter(function (menuItem) { return menuItem.menuType !== __WEBPACK_IMPORTED_MODULE_2__sidebar_metadata__["a" /* MenuType */].BRAND; });
        // this.churchInfo = this.churchService.getLoggedChurch();
        this.churchService.getLoggedChurch().subscribe(function (res) {
            _this.churchInfo = res;
            _this.churchName = _this.churchInfo.user.church_name;
            _this.churchAddress = _this.churchInfo.user.church_address;
        });
        console.log('passed admin role == ' + this.role);
    };
    return SidebarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SidebarComponent.prototype, "role", void 0);
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_service_user_auth_service__["a" /* UserAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_service_user_auth_service__["a" /* UserAuthService */]) === "function" && _a || Object])
], SidebarComponent);

var _a;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.metadata.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuType; });
var MenuType;
(function (MenuType) {
    MenuType[MenuType["BRAND"] = 0] = "BRAND";
    MenuType[MenuType["LEFT"] = 1] = "LEFT";
    MenuType[MenuType["RIGHT"] = 2] = "RIGHT";
})(MenuType || (MenuType = {}));
//# sourceMappingURL=sidebar.metadata.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map