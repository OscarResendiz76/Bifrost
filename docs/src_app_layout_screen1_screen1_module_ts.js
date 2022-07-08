"use strict";
(self["webpackChunkng_material"] = self["webpackChunkng_material"] || []).push([["src_app_layout_screen1_screen1_module_ts"],{

/***/ 2061:
/*!**********************************************************!*\
  !*** ./src/app/layout/screen1/screen1-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Screen1RoutingModule": () => (/* binding */ Screen1RoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _screen1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen1.component */ 5406);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _screen1_component__WEBPACK_IMPORTED_MODULE_0__.Screen1Component
    }
];
class Screen1RoutingModule {
}
Screen1RoutingModule.ɵfac = function Screen1RoutingModule_Factory(t) { return new (t || Screen1RoutingModule)(); };
Screen1RoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: Screen1RoutingModule });
Screen1RoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Screen1RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5406:
/*!*****************************************************!*\
  !*** ./src/app/layout/screen1/screen1.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Screen1Component": () => (/* binding */ Screen1Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class Screen1Component {
    constructor() { }
    ngOnInit() {
    }
}
Screen1Component.ɵfac = function Screen1Component_Factory(t) { return new (t || Screen1Component)(); };
Screen1Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Screen1Component, selectors: [["app-screen1"]], decls: 2, vars: 0, template: function Screen1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " screen1 works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY3JlZW4xLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7360:
/*!**************************************************!*\
  !*** ./src/app/layout/screen1/screen1.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Screen1Module": () => (/* binding */ Screen1Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _screen1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen1.component */ 5406);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 1378);
/* harmony import */ var _screen1_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screen1-routing.module */ 2061);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class Screen1Module {
}
Screen1Module.ɵfac = function Screen1Module_Factory(t) { return new (t || Screen1Module)(); };
Screen1Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: Screen1Module });
Screen1Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _screen1_routing_module__WEBPACK_IMPORTED_MODULE_1__.Screen1RoutingModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule.withConfig({ addFlexToParent: false })] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](Screen1Module, { declarations: [_screen1_component__WEBPACK_IMPORTED_MODULE_0__.Screen1Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _screen1_routing_module__WEBPACK_IMPORTED_MODULE_1__.Screen1RoutingModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_layout_screen1_screen1_module_ts.js.map