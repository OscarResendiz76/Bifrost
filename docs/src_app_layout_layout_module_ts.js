"use strict";
(self["webpackChunkng_material"] = self["webpackChunkng_material"] || []).push([["src_app_layout_layout_module_ts"],{

/***/ 4660:
/*!****************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);





const _c0 = function () { return ["/dashboard"]; };
const _c1 = function () { return ["/screen1"]; };
const _c2 = function () { return ["/screen2"]; };
class SidebarComponent {
    constructor() { }
    ngOnInit() {
        this.showMenu = '';
    }
    addExpandClass(element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 17, vars: 18, consts: [["id", "sidebar"], ["mat-list-item", "", 3, "routerLinkActive", "routerLink"], [1, "sidenav-icon"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-nav-list")(2, "a", 1)(3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1)(8, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "build");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 1)(13, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "people");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "active")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 9, "Dashboard"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "active")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 11, "Screen1"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "active")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 13, "Screen2"), " ");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItem, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: ["#sidebar[_ngcontent-%COMP%] {\n  width: 250px;\n  position: fixed;\n  top: 56px;\n  bottom: 0;\n  background: #fff;\n  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.24);\n  z-index: 999;\n  -ms-overflow-y: auto;\n  overflow-y: auto;\n}\n#sidebar[_ngcontent-%COMP%]   .mat-nav-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#sidebar[_ngcontent-%COMP%]   .mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n}\n#sidebar[_ngcontent-%COMP%]   .mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.nested-menu[_ngcontent-%COMP%]   .nested[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.nested-menu[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%] {\n  display: none;\n  height: 0;\n}\n.nested-menu[_ngcontent-%COMP%]   .expand.submenu[_ngcontent-%COMP%] {\n  display: block;\n  list-style-type: none;\n  height: auto;\n  margin: 0;\n}\n.nested-menu[_ngcontent-%COMP%]   .expand.submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: block;\n}\n@media screen and (max-width: 992px) {\n  #sidebar[_ngcontent-%COMP%] {\n    left: -250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFBSTtFQUNJLFdBQUE7QUFFUjtBQURRO0VBSUksY0FBQTtBQUFaO0FBSFk7RUFDSSxrQkFBQTtBQUtoQjtBQUVJO0VBQ0kscUJBQUE7QUFDUjtBQUNJO0VBQ0ksYUFBQTtFQUNBLFNBQUE7QUFDUjtBQUVRO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFBWjtBQUVnQjtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBQXBCO0FBTUE7RUFDSTtJQUNJLFlBQUE7RUFITjtBQUNGIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2lkZWJhciB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDU2cHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAtbXMtb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAubWF0LW5hdi1saXN0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgLm1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLm5lc3RlZC1tZW51IHtcclxuICAgIC5uZXN0ZWQge1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIH1cclxuICAgIC5zdWJtZW51IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgIH1cclxuICAgICYgLmV4cGFuZCB7XHJcbiAgICAgICAgJi5zdWJtZW51IHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICNzaWRlYmFyIHtcclxuICAgICAgICBsZWZ0OiAtMjUwcHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 645:
/*!**************************************************************!*\
  !*** ./src/app/layout/components/topnav/topnav.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopnavComponent": () => (/* binding */ TopnavComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 8589);










class TopnavComponent {
    constructor(router, translate) {
        this.router = router;
        this.translate = translate;
        this.router.events.subscribe(val => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }
    ngOnInit() {
        this.pushRightClass = 'push-right';
    }
    isToggled() {
        const dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }
    toggleSidebar() {
        const dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }
    onLoggedout() {
        localStorage.removeItem('isLoggedin');
        this.router.navigate(['/login']);
    }
    changeLang(language) {
        this.translate.use(language);
    }
}
TopnavComponent.ɵfac = function TopnavComponent_Factory(t) { return new (t || TopnavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService)); };
TopnavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TopnavComponent, selectors: [["app-topnav"]], decls: 59, vars: 26, consts: [["color", "primary", 1, "fix-nav"], ["type", "button", "mat-icon-button", "", 1, "visible-md", 3, "click"], ["aria-label", "Side nav toggle icon"], [1, "nav-brand"], [1, "hidden-sm", 2, "margin-left", "20px", "margin-top", "5px"], ["matInput", "", 3, "placeholder"], [1, "nav-spacer"], ["href", "https://github.com/start-javascript/sb-admin-material/archive/master.zip", "mat-raised-button", "", 1, "hidden-sm", 2, "margin-right", "10px"], ["mat-icon-button", "", 1, "hidden-sm", 3, "matMenuTriggerFor"], ["language", "matMenu"], ["mat-menu-item", "", 3, "click"], ["profile", "matMenu"], ["mat-menu-item", ""], ["mat-icon-button", "", 3, "click"]], template: function TopnavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopnavComponent_Template_button_click_1_listener() { return ctx.toggleSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " SB Admin Material ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 4)(7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 7)(12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "cloud_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 8)(17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "language");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-menu", null, 9)(21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopnavComponent_Template_button_click_21_listener() { return ctx.changeLang("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopnavComponent_Template_button_click_25_listener() { return ctx.changeLang("fr"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopnavComponent_Template_button_click_29_listener() { return ctx.changeLang("ur"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 8)(34, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-menu", null, 11)(38, "button", 12)(39, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 12)(45, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "inbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 12)(51, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopnavComponent_Template_button_click_56_listener() { return ctx.onLoggedout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 10, "Search"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 12, "Download Now"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 14, "English"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 16, "French"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 18, "Urdu"), "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 20, "Profile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](49, 22, "Inbox"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](55, 24, "Settings"));
    } }, dependencies: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuTrigger, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 1000;\n}\n\n.nav-brand[_ngcontent-%COMP%] {\n  width: 215px;\n  text-align: center;\n}\n\n.topnav-icon[_ngcontent-%COMP%] {\n  text-decoration: none;\n  display: flex;\n  color: #fff;\n}\n\n.nav-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.visible-md[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (max-width: 992px) {\n  .visible-md[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .visible-sm[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .nav-brand[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .hidden-sm[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcG5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBR0o7O0FBQUE7RUFDSSxjQUFBO0FBR0o7O0FBQUE7RUFDSSxhQUFBO0FBR0o7O0FBREE7RUFDSSxhQUFBO0FBSUo7O0FBRkE7RUFDSTtJQUNJLGNBQUE7RUFLTjtBQUNGOztBQUhBO0VBQ0k7SUFDSSxjQUFBO0VBS047O0VBSEU7SUFDSSxXQUFBO0VBTU47QUFDRjs7QUFKQTtFQUNJO0lBQ0ksYUFBQTtFQU1OO0FBQ0YiLCJmaWxlIjoidG9wbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG59XHJcbi5uYXYtYnJhbmQge1xyXG4gICAgd2lkdGg6IDIxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50b3BuYXYtaWNvbiB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5uYXYtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4udmlzaWJsZS1tZCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi52aXNpYmxlLXNtIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC52aXNpYmxlLW1kIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnZpc2libGUtc20ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLm5hdi1icmFuZCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5oaWRkZW4tc20ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 9689:
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutRoutingModule": () => (/* binding */ LayoutRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.component */ 6674);
/* harmony import */ var _screen2_screen2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screen2/screen2.component */ 117);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_flex-layout___ivy_ngcc___esm2015_flex-layout_js"), __webpack_require__.e("src_app_layout_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 9869)).then(m => m.DashboardModule)
            },
            {
                path: 'screen1',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_flex-layout___ivy_ngcc___esm2015_flex-layout_js"), __webpack_require__.e("src_app_layout_screen1_screen1_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./screen1/screen1.module */ 7360)).then(m => m.Screen1Module)
            },
            {
                path: 'screen2',
                component: _screen2_screen2_component__WEBPACK_IMPORTED_MODULE_1__.Screen2Component
            }
        ]
    }
];
class LayoutRoutingModule {
}
LayoutRoutingModule.ɵfac = function LayoutRoutingModule_Factory(t) { return new (t || LayoutRoutingModule)(); };
LayoutRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LayoutRoutingModule });
LayoutRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LayoutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 6674:
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/topnav/topnav.component */ 645);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ 4660);




class LayoutComponent {
    constructor() { }
    ngOnInit() { }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 4, vars: 0, consts: [[1, "main-container"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-topnav")(1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_0__.TopnavComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4805:
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ 4660);
/* harmony import */ var _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/topnav/topnav.component */ 645);
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout-routing.module */ 9689);
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.component */ 6674);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav/nav.component */ 6017);
/* harmony import */ var _screen2_screen2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screen2/screen2.component */ 117);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
















class LayoutModule {
}
LayoutModule.ɵfac = function LayoutModule_Factory(t) { return new (t || LayoutModule)(); };
LayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__.LayoutRoutingModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](LayoutModule, { declarations: [_screen2_screen2_component__WEBPACK_IMPORTED_MODULE_5__.Screen2Component, _layout_component__WEBPACK_IMPORTED_MODULE_3__.LayoutComponent, _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__.NavComponent, _components_topnav_topnav_component__WEBPACK_IMPORTED_MODULE_1__.TopnavComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__.LayoutRoutingModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule] }); })();


/***/ }),

/***/ 6017:
/*!*********************************************!*\
  !*** ./src/app/layout/nav/nav.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);










const _c0 = function () {
  return ["/dashboard"];
};

const _c1 = function () {
  return ["/screen1"];
};

const _c2 = function () {
  return ["/screen2"];
};

class NavComponent {
  constructor(breakpointObserver) {
    this.breakpointObserver = breakpointObserver;
    this.isHandset = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__.Breakpoints.Handset);
  }

}

NavComponent.ɵfac = function NavComponent_Factory(t) {
  return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__.BreakpointObserver));
};

NavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavComponent,
  selectors: [["app-nav"]],
  decls: 20,
  vars: 16,
  consts: [[1, "sidenav-container"], ["fixedInViewport", "true", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["color", "primary"], ["mat-list-item", "", 3, "routerLinkActive", "routerLink"], [1, "sidenav-icon"]],
  template: function NavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 0)(1, "mat-sidenav", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-toolbar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "SB Admin Marerial");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-nav-list")(8, "a", 4)(9, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Dashbard ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 4)(13, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "build");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Screen1 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 4)(17, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "people");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Screen2 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 9, ctx.isHandset).matches ? "over" : "side")("opened", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 11, ctx.isHandset).matches);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("role", ctx.isHandset ? "dialog" : "navigation");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", "active")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", "active")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", "active")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c2));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbar, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavContainer, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatListItem, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 250px;\n  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.24);\n}\n\n.topnav-icon[_ngcontent-%COMP%] {\n  text-decoration: none;\n  display: flex;\n  color: #fff;\n}\n\n.sidenav-icon[_ngcontent-%COMP%] {\n  text-decoration: none;\n  padding: 0 10px;\n}\n\n.nav-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSx5Q0FBQTtBQUNKOztBQUNBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUNBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0FBRUoiLCJmaWxlIjoibmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbn1cclxuLnRvcG5hdi1pY29uIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnNpZGVuYXYtaWNvbiB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbn1cclxuXHJcbi5uYXYtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4vLyAuZml4LW5hdiB7XHJcbi8vICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbi8vICAgICB0b3A6IDA7XHJcbi8vICAgICBsZWZ0OiAyNTBweDtcclxuLy8gICAgIHJpZ2h0OiAwO1xyXG4vLyB9XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 117:
/*!*****************************************************!*\
  !*** ./src/app/layout/screen2/screen2.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Screen2Component": () => (/* binding */ Screen2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class Screen2Component {
    constructor() { }
    ngOnInit() {
    }
}
Screen2Component.ɵfac = function Screen2Component_Factory(t) { return new (t || Screen2Component)(); };
Screen2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Screen2Component, selectors: [["app-screen2"]], decls: 2, vars: 0, template: function Screen2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " screen2 works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY3JlZW4yLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5843:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/delay.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "delay": () => (/* binding */ delay)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 328);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isDate */ 1293);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subscriber */ 14);
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Notification */ 7928);




function delay(delay, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
  const absoluteDelay = (0,_util_isDate__WEBPACK_IMPORTED_MODULE_1__.isDate)(delay);
  const delayFor = absoluteDelay ? +delay - scheduler.now() : Math.abs(delay);
  return source => source.lift(new DelayOperator(delayFor, scheduler));
}

class DelayOperator {
  constructor(delay, scheduler) {
    this.delay = delay;
    this.scheduler = scheduler;
  }

  call(subscriber, source) {
    return source.subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
  }

}

class DelaySubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_2__.Subscriber {
  constructor(destination, delay, scheduler) {
    super(destination);
    this.delay = delay;
    this.scheduler = scheduler;
    this.queue = [];
    this.active = false;
    this.errored = false;
  }

  static dispatch(state) {
    const source = state.source;
    const queue = source.queue;
    const scheduler = state.scheduler;
    const destination = state.destination;

    while (queue.length > 0 && queue[0].time - scheduler.now() <= 0) {
      queue.shift().notification.observe(destination);
    }

    if (queue.length > 0) {
      const delay = Math.max(0, queue[0].time - scheduler.now());
      this.schedule(state, delay);
    } else {
      this.unsubscribe();
      source.active = false;
    }
  }

  _schedule(scheduler) {
    this.active = true;
    const destination = this.destination;
    destination.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
      source: this,
      destination: this.destination,
      scheduler: scheduler
    }));
  }

  scheduleNotification(notification) {
    if (this.errored === true) {
      return;
    }

    const scheduler = this.scheduler;
    const message = new DelayMessage(scheduler.now() + this.delay, notification);
    this.queue.push(message);

    if (this.active === false) {
      this._schedule(scheduler);
    }
  }

  _next(value) {
    this.scheduleNotification(_Notification__WEBPACK_IMPORTED_MODULE_3__.Notification.createNext(value));
  }

  _error(err) {
    this.errored = true;
    this.queue = [];
    this.destination.error(err);
    this.unsubscribe();
  }

  _complete() {
    this.scheduleNotification(_Notification__WEBPACK_IMPORTED_MODULE_3__.Notification.createComplete());
    this.unsubscribe();
  }

}

class DelayMessage {
  constructor(time, notification) {
    this.time = time;
    this.notification = notification;
  }

}

/***/ }),

/***/ 1293:
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isDate.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDate": () => (/* binding */ isDate)
/* harmony export */ });
function isDate(value) {
  return value instanceof Date && !isNaN(+value);
}

/***/ }),

/***/ 1528:
/*!*************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/divider.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatDivider": () => (/* binding */ MatDivider),
/* harmony export */   "MatDividerModule": () => (/* binding */ MatDividerModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ 8971);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 9121);




/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

class MatDivider {
  constructor() {
    this._vertical = false;
    this._inset = false;
  }
  /** Whether the divider is vertically aligned. */


  get vertical() {
    return this._vertical;
  }

  set vertical(value) {
    this._vertical = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceBooleanProperty)(value);
  }
  /** Whether the divider is an inset divider. */


  get inset() {
    return this._inset;
  }

  set inset(value) {
    this._inset = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceBooleanProperty)(value);
  }

}

MatDivider.ɵfac = function MatDivider_Factory(t) {
  return new (t || MatDivider)();
};

MatDivider.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MatDivider,
  selectors: [["mat-divider"]],
  hostAttrs: ["role", "separator", 1, "mat-divider"],
  hostVars: 7,
  hostBindings: function MatDivider_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-orientation", ctx.vertical ? "vertical" : "horizontal");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-divider-vertical", ctx.vertical)("mat-divider-horizontal", !ctx.vertical)("mat-divider-inset", ctx.inset);
    }
  },
  inputs: {
    vertical: "vertical",
    inset: "inset"
  },
  decls: 0,
  vars: 0,
  template: function MatDivider_Template(rf, ctx) {},
  styles: [".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatDivider, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'mat-divider',
      host: {
        'role': 'separator',
        '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
        '[class.mat-divider-vertical]': 'vertical',
        '[class.mat-divider-horizontal]': '!vertical',
        '[class.mat-divider-inset]': 'inset',
        'class': 'mat-divider'
      },
      template: '',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      styles: [".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"]
    }]
  }], null, {
    vertical: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    inset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatDividerModule {}

MatDividerModule.ɵfac = function MatDividerModule_Factory(t) {
  return new (t || MatDividerModule)();
};

MatDividerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: MatDividerModule
});
MatDividerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatDividerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule],
      exports: [MatDivider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule],
      declarations: [MatDivider]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 7822:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/icon.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ICON_REGISTRY_PROVIDER": () => (/* binding */ ICON_REGISTRY_PROVIDER),
/* harmony export */   "ICON_REGISTRY_PROVIDER_FACTORY": () => (/* binding */ ICON_REGISTRY_PROVIDER_FACTORY),
/* harmony export */   "MAT_ICON_DEFAULT_OPTIONS": () => (/* binding */ MAT_ICON_DEFAULT_OPTIONS),
/* harmony export */   "MAT_ICON_LOCATION": () => (/* binding */ MAT_ICON_LOCATION),
/* harmony export */   "MAT_ICON_LOCATION_FACTORY": () => (/* binding */ MAT_ICON_LOCATION_FACTORY),
/* harmony export */   "MatIcon": () => (/* binding */ MatIcon),
/* harmony export */   "MatIconModule": () => (/* binding */ MatIconModule),
/* harmony export */   "MatIconRegistry": () => (/* binding */ MatIconRegistry),
/* harmony export */   "getMatIconFailedToSanitizeLiteralError": () => (/* binding */ getMatIconFailedToSanitizeLiteralError),
/* harmony export */   "getMatIconFailedToSanitizeUrlError": () => (/* binding */ getMatIconFailedToSanitizeUrlError),
/* harmony export */   "getMatIconNameNotFoundError": () => (/* binding */ getMatIconNameNotFoundError),
/* harmony export */   "getMatIconNoHttpProviderError": () => (/* binding */ getMatIconNoHttpProviderError)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/coercion */ 8971);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4350);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 2425);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 4661);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 4514);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);











/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * The Trusted Types policy, or null if Trusted Types are not
 * enabled/supported, or undefined if the policy has not been created yet.
 */

const _c0 = ["*"];
let policy;
/**
 * Returns the Trusted Types policy, or null if Trusted Types are not
 * enabled/supported. The first call to this function will create the policy.
 */

function getPolicy() {
  if (policy === undefined) {
    policy = null;

    if (typeof window !== 'undefined') {
      const ttWindow = window;

      if (ttWindow.trustedTypes !== undefined) {
        policy = ttWindow.trustedTypes.createPolicy('angular#components', {
          createHTML: s => s
        });
      }
    }
  }

  return policy;
}
/**
 * Unsafely promote a string to a TrustedHTML, falling back to strings when
 * Trusted Types are not available.
 * @security This is a security-sensitive function; any use of this function
 * must go through security review. In particular, it must be assured that the
 * provided string will never cause an XSS vulnerability if used in a context
 * that will be interpreted as HTML by a browser, e.g. when assigning to
 * element.innerHTML.
 */


function trustedHTMLFromString(html) {
  return getPolicy()?.createHTML(html) || html;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Returns an exception to be thrown in the case when attempting to
 * load an icon with a name that cannot be found.
 * @docs-private
 */


function getMatIconNameNotFoundError(iconName) {
  return Error(`Unable to find icon with the name "${iconName}"`);
}
/**
 * Returns an exception to be thrown when the consumer attempts to use
 * `<mat-icon>` without including @angular/common/http.
 * @docs-private
 */


function getMatIconNoHttpProviderError() {
  return Error('Could not find HttpClient provider for use with Angular Material icons. ' + 'Please include the HttpClientModule from @angular/common/http in your ' + 'app imports.');
}
/**
 * Returns an exception to be thrown when a URL couldn't be sanitized.
 * @param url URL that was attempted to be sanitized.
 * @docs-private
 */


function getMatIconFailedToSanitizeUrlError(url) {
  return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL ` + `via Angular's DomSanitizer. Attempted URL was "${url}".`);
}
/**
 * Returns an exception to be thrown when a HTML string couldn't be sanitized.
 * @param literal HTML that was attempted to be sanitized.
 * @docs-private
 */


function getMatIconFailedToSanitizeLiteralError(literal) {
  return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by ` + `Angular's DomSanitizer. Attempted literal was "${literal}".`);
}
/**
 * Configuration for an icon, including the URL and possibly the cached SVG element.
 * @docs-private
 */


class SvgIconConfig {
  constructor(url, svgText, options) {
    this.url = url;
    this.svgText = svgText;
    this.options = options;
  }

}
/**
 * Service to register and display icons used by the `<mat-icon>` component.
 * - Registers icon URLs by namespace and name.
 * - Registers icon set URLs by namespace.
 * - Registers aliases for CSS classes, for use with icon fonts.
 * - Loads icons from URLs and extracts individual icons from icon sets.
 */


class MatIconRegistry {
  constructor(_httpClient, _sanitizer, document, _errorHandler) {
    this._httpClient = _httpClient;
    this._sanitizer = _sanitizer;
    this._errorHandler = _errorHandler;
    /**
     * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
     */

    this._svgIconConfigs = new Map();
    /**
     * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
     * Multiple icon sets can be registered under the same namespace.
     */

    this._iconSetConfigs = new Map();
    /** Cache for icons loaded by direct URLs. */

    this._cachedIconsByUrl = new Map();
    /** In-progress icon fetches. Used to coalesce multiple requests to the same URL. */

    this._inProgressUrlFetches = new Map();
    /** Map from font identifiers to their CSS class names. Used for icon fonts. */

    this._fontCssClassesByAlias = new Map();
    /** Registered icon resolver functions. */

    this._resolvers = [];
    /**
     * The CSS classes to apply when an `<mat-icon>` component has no icon name, url, or font
     * specified. The default 'material-icons' value assumes that the material icon font has been
     * loaded as described at http://google.github.io/material-design-icons/#icon-font-for-the-web
     */

    this._defaultFontSetClass = ['material-icons'];
    this._document = document;
  }
  /**
   * Registers an icon by URL in the default namespace.
   * @param iconName Name under which the icon should be registered.
   * @param url
   */


  addSvgIcon(iconName, url, options) {
    return this.addSvgIconInNamespace('', iconName, url, options);
  }
  /**
   * Registers an icon using an HTML string in the default namespace.
   * @param iconName Name under which the icon should be registered.
   * @param literal SVG source of the icon.
   */


  addSvgIconLiteral(iconName, literal, options) {
    return this.addSvgIconLiteralInNamespace('', iconName, literal, options);
  }
  /**
   * Registers an icon by URL in the specified namespace.
   * @param namespace Namespace in which the icon should be registered.
   * @param iconName Name under which the icon should be registered.
   * @param url
   */


  addSvgIconInNamespace(namespace, iconName, url, options) {
    return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url, null, options));
  }
  /**
   * Registers an icon resolver function with the registry. The function will be invoked with the
   * name and namespace of an icon when the registry tries to resolve the URL from which to fetch
   * the icon. The resolver is expected to return a `SafeResourceUrl` that points to the icon,
   * an object with the icon URL and icon options, or `null` if the icon is not supported. Resolvers
   * will be invoked in the order in which they have been registered.
   * @param resolver Resolver function to be registered.
   */


  addSvgIconResolver(resolver) {
    this._resolvers.push(resolver);

    return this;
  }
  /**
   * Registers an icon using an HTML string in the specified namespace.
   * @param namespace Namespace in which the icon should be registered.
   * @param iconName Name under which the icon should be registered.
   * @param literal SVG source of the icon.
   */


  addSvgIconLiteralInNamespace(namespace, iconName, literal, options) {
    const cleanLiteral = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.HTML, literal); // TODO: add an ngDevMode check


    if (!cleanLiteral) {
      throw getMatIconFailedToSanitizeLiteralError(literal);
    } // Security: The literal is passed in as SafeHtml, and is thus trusted.


    const trustedLiteral = trustedHTMLFromString(cleanLiteral);
    return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig('', trustedLiteral, options));
  }
  /**
   * Registers an icon set by URL in the default namespace.
   * @param url
   */


  addSvgIconSet(url, options) {
    return this.addSvgIconSetInNamespace('', url, options);
  }
  /**
   * Registers an icon set using an HTML string in the default namespace.
   * @param literal SVG source of the icon set.
   */


  addSvgIconSetLiteral(literal, options) {
    return this.addSvgIconSetLiteralInNamespace('', literal, options);
  }
  /**
   * Registers an icon set by URL in the specified namespace.
   * @param namespace Namespace in which to register the icon set.
   * @param url
   */


  addSvgIconSetInNamespace(namespace, url, options) {
    return this._addSvgIconSetConfig(namespace, new SvgIconConfig(url, null, options));
  }
  /**
   * Registers an icon set using an HTML string in the specified namespace.
   * @param namespace Namespace in which to register the icon set.
   * @param literal SVG source of the icon set.
   */


  addSvgIconSetLiteralInNamespace(namespace, literal, options) {
    const cleanLiteral = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.HTML, literal);

    if (!cleanLiteral) {
      throw getMatIconFailedToSanitizeLiteralError(literal);
    } // Security: The literal is passed in as SafeHtml, and is thus trusted.


    const trustedLiteral = trustedHTMLFromString(cleanLiteral);
    return this._addSvgIconSetConfig(namespace, new SvgIconConfig('', trustedLiteral, options));
  }
  /**
   * Defines an alias for a CSS class name to be used for icon fonts. Creating an matIcon
   * component with the alias as the fontSet input will cause the class name to be applied
   * to the `<mat-icon>` element.
   *
   * @param alias Alias for the font.
   * @param className Class name override to be used instead of the alias.
   */


  registerFontClassAlias(alias, className = alias) {
    this._fontCssClassesByAlias.set(alias, className);

    return this;
  }
  /**
   * Returns the CSS class name associated with the alias by a previous call to
   * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
   */


  classNameForFontAlias(alias) {
    return this._fontCssClassesByAlias.get(alias) || alias;
  }
  /**
   * Sets the CSS classes to be used for icon fonts when an `<mat-icon>` component does not
   * have a fontSet input value, and is not loading an icon by name or URL.
   */


  setDefaultFontSetClass(...classNames) {
    this._defaultFontSetClass = classNames;
    return this;
  }
  /**
   * Returns the CSS classes to be used for icon fonts when an `<mat-icon>` component does not
   * have a fontSet input value, and is not loading an icon by name or URL.
   */


  getDefaultFontSetClass() {
    return this._defaultFontSetClass;
  }
  /**
   * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
   * The response from the URL may be cached so this will not always cause an HTTP request, but
   * the produced element will always be a new copy of the originally fetched icon. (That is,
   * it will not contain any modifications made to elements previously returned).
   *
   * @param safeUrl URL from which to fetch the SVG icon.
   */


  getSvgIconFromUrl(safeUrl) {
    const url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.RESOURCE_URL, safeUrl);

    if (!url) {
      throw getMatIconFailedToSanitizeUrlError(safeUrl);
    }

    const cachedIcon = this._cachedIconsByUrl.get(url);

    if (cachedIcon) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(cloneSvg(cachedIcon));
    }

    return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl, null)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(svg => this._cachedIconsByUrl.set(url, svg)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(svg => cloneSvg(svg)));
  }
  /**
   * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
   * and namespace. The icon must have been previously registered with addIcon or addIconSet;
   * if not, the Observable will throw an error.
   *
   * @param name Name of the icon to be retrieved.
   * @param namespace Namespace in which to look for the icon.
   */


  getNamedSvgIcon(name, namespace = '') {
    const key = iconKey(namespace, name);

    let config = this._svgIconConfigs.get(key); // Return (copy of) cached icon if possible.


    if (config) {
      return this._getSvgFromConfig(config);
    } // Otherwise try to resolve the config from one of the resolver functions.


    config = this._getIconConfigFromResolvers(namespace, name);

    if (config) {
      this._svgIconConfigs.set(key, config);

      return this._getSvgFromConfig(config);
    } // See if we have any icon sets registered for the namespace.


    const iconSetConfigs = this._iconSetConfigs.get(namespace);

    if (iconSetConfigs) {
      return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(getMatIconNameNotFoundError(key));
  }

  ngOnDestroy() {
    this._resolvers = [];

    this._svgIconConfigs.clear();

    this._iconSetConfigs.clear();

    this._cachedIconsByUrl.clear();
  }
  /**
   * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
   */


  _getSvgFromConfig(config) {
    if (config.svgText) {
      // We already have the SVG element for this icon, return a copy.
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(cloneSvg(this._svgElementFromConfig(config)));
    } else {
      // Fetch the icon from the config's URL, cache it, and return a copy.
      return this._loadSvgIconFromConfig(config).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(svg => cloneSvg(svg)));
    }
  }
  /**
   * Attempts to find an icon with the specified name in any of the SVG icon sets.
   * First searches the available cached icons for a nested element with a matching name, and
   * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
   * that have not been cached, and searches again after all fetches are completed.
   * The returned Observable produces the SVG element if possible, and throws
   * an error if no icon with the specified name can be found.
   */


  _getSvgFromIconSetConfigs(name, iconSetConfigs) {
    // For all the icon set SVG elements we've fetched, see if any contain an icon with the
    // requested name.
    const namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);

    if (namedIcon) {
      // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
      // time anyway, there's probably not much advantage compared to just always extracting
      // it from the icon set.
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(namedIcon);
    } // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
    // fetched, fetch them now and look for iconName in the results.


    const iconSetFetchRequests = iconSetConfigs.filter(iconSetConfig => !iconSetConfig.svgText).map(iconSetConfig => {
      return this._loadSvgIconSetFromConfig(iconSetConfig).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
        const url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.RESOURCE_URL, iconSetConfig.url); // Swallow errors fetching individual URLs so the
        // combined Observable won't necessarily fail.


        const errorMessage = `Loading icon set URL: ${url} failed: ${err.message}`;

        this._errorHandler.handleError(new Error(errorMessage));

        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null);
      }));
    }); // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
    // cached SVG element (unless the request failed), and we can check again for the icon.

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.forkJoin)(iconSetFetchRequests).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => {
      const foundIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs); // TODO: add an ngDevMode check


      if (!foundIcon) {
        throw getMatIconNameNotFoundError(name);
      }

      return foundIcon;
    }));
  }
  /**
   * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
   * tag matches the specified name. If found, copies the nested element to a new SVG element and
   * returns it. Returns null if no matching element is found.
   */


  _extractIconWithNameFromAnySet(iconName, iconSetConfigs) {
    // Iterate backwards, so icon sets added later have precedence.
    for (let i = iconSetConfigs.length - 1; i >= 0; i--) {
      const config = iconSetConfigs[i]; // Parsing the icon set's text into an SVG element can be expensive. We can avoid some of
      // the parsing by doing a quick check using `indexOf` to see if there's any chance for the
      // icon to be in the set. This won't be 100% accurate, but it should help us avoid at least
      // some of the parsing.

      if (config.svgText && config.svgText.toString().indexOf(iconName) > -1) {
        const svg = this._svgElementFromConfig(config);

        const foundIcon = this._extractSvgIconFromSet(svg, iconName, config.options);

        if (foundIcon) {
          return foundIcon;
        }
      }
    }

    return null;
  }
  /**
   * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
   * from it.
   */


  _loadSvgIconFromConfig(config) {
    return this._fetchIcon(config).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(svgText => config.svgText = svgText), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => this._svgElementFromConfig(config)));
  }
  /**
   * Loads the content of the icon set URL specified in the
   * SvgIconConfig and attaches it to the config.
   */


  _loadSvgIconSetFromConfig(config) {
    if (config.svgText) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null);
    }

    return this._fetchIcon(config).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(svgText => config.svgText = svgText));
  }
  /**
   * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
   * tag matches the specified name. If found, copies the nested element to a new SVG element and
   * returns it. Returns null if no matching element is found.
   */


  _extractSvgIconFromSet(iconSet, iconName, options) {
    // Use the `id="iconName"` syntax in order to escape special
    // characters in the ID (versus using the #iconName syntax).
    const iconSource = iconSet.querySelector(`[id="${iconName}"]`);

    if (!iconSource) {
      return null;
    } // Clone the element and remove the ID to prevent multiple elements from being added
    // to the page with the same ID.


    const iconElement = iconSource.cloneNode(true);
    iconElement.removeAttribute('id'); // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
    // the content of a new <svg> node.

    if (iconElement.nodeName.toLowerCase() === 'svg') {
      return this._setSvgAttributes(iconElement, options);
    } // If the node is a <symbol>, it won't be rendered so we have to convert it into <svg>. Note
    // that the same could be achieved by referring to it via <use href="#id">, however the <use>
    // tag is problematic on Firefox, because it needs to include the current page path.


    if (iconElement.nodeName.toLowerCase() === 'symbol') {
      return this._setSvgAttributes(this._toSvgElement(iconElement), options);
    } // createElement('SVG') doesn't work as expected; the DOM ends up with
    // the correct nodes, but the SVG content doesn't render. Instead we
    // have to create an empty SVG node using innerHTML and append its content.
    // Elements created using DOMParser.parseFromString have the same problem.
    // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display


    const svg = this._svgElementFromString(trustedHTMLFromString('<svg></svg>')); // Clone the node so we don't remove it from the parent icon set element.


    svg.appendChild(iconElement);
    return this._setSvgAttributes(svg, options);
  }
  /**
   * Creates a DOM element from the given SVG string.
   */


  _svgElementFromString(str) {
    const div = this._document.createElement('DIV');

    div.innerHTML = str;
    const svg = div.querySelector('svg'); // TODO: add an ngDevMode check

    if (!svg) {
      throw Error('<svg> tag not found');
    }

    return svg;
  }
  /**
   * Converts an element into an SVG node by cloning all of its children.
   */


  _toSvgElement(element) {
    const svg = this._svgElementFromString(trustedHTMLFromString('<svg></svg>'));

    const attributes = element.attributes; // Copy over all the attributes from the `symbol` to the new SVG, except the id.

    for (let i = 0; i < attributes.length; i++) {
      const {
        name,
        value
      } = attributes[i];

      if (name !== 'id') {
        svg.setAttribute(name, value);
      }
    }

    for (let i = 0; i < element.childNodes.length; i++) {
      if (element.childNodes[i].nodeType === this._document.ELEMENT_NODE) {
        svg.appendChild(element.childNodes[i].cloneNode(true));
      }
    }

    return svg;
  }
  /**
   * Sets the default attributes for an SVG element to be used as an icon.
   */


  _setSvgAttributes(svg, options) {
    svg.setAttribute('fit', '');
    svg.setAttribute('height', '100%');
    svg.setAttribute('width', '100%');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.

    if (options && options.viewBox) {
      svg.setAttribute('viewBox', options.viewBox);
    }

    return svg;
  }
  /**
   * Returns an Observable which produces the string contents of the given icon. Results may be
   * cached, so future calls with the same URL may not cause another HTTP request.
   */


  _fetchIcon(iconConfig) {
    const {
      url: safeUrl,
      options
    } = iconConfig;
    const withCredentials = options?.withCredentials ?? false;

    if (!this._httpClient) {
      throw getMatIconNoHttpProviderError();
    } // TODO: add an ngDevMode check


    if (safeUrl == null) {
      throw Error(`Cannot fetch icon from URL "${safeUrl}".`);
    }

    const url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.RESOURCE_URL, safeUrl); // TODO: add an ngDevMode check


    if (!url) {
      throw getMatIconFailedToSanitizeUrlError(safeUrl);
    } // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
    // already a request in progress for that URL. It's necessary to call share() on the
    // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.


    const inProgressFetch = this._inProgressUrlFetches.get(url);

    if (inProgressFetch) {
      return inProgressFetch;
    }

    const req = this._httpClient.get(url, {
      responseType: 'text',
      withCredentials
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(svg => {
      // Security: This SVG is fetched from a SafeResourceUrl, and is thus
      // trusted HTML.
      return trustedHTMLFromString(svg);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this._inProgressUrlFetches.delete(url)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.share)());

    this._inProgressUrlFetches.set(url, req);

    return req;
  }
  /**
   * Registers an icon config by name in the specified namespace.
   * @param namespace Namespace in which to register the icon config.
   * @param iconName Name under which to register the config.
   * @param config Config to be registered.
   */


  _addSvgIconConfig(namespace, iconName, config) {
    this._svgIconConfigs.set(iconKey(namespace, iconName), config);

    return this;
  }
  /**
   * Registers an icon set config in the specified namespace.
   * @param namespace Namespace in which to register the icon config.
   * @param config Config to be registered.
   */


  _addSvgIconSetConfig(namespace, config) {
    const configNamespace = this._iconSetConfigs.get(namespace);

    if (configNamespace) {
      configNamespace.push(config);
    } else {
      this._iconSetConfigs.set(namespace, [config]);
    }

    return this;
  }
  /** Parses a config's text into an SVG element. */


  _svgElementFromConfig(config) {
    if (!config.svgElement) {
      const svg = this._svgElementFromString(config.svgText);

      this._setSvgAttributes(svg, config.options);

      config.svgElement = svg;
    }

    return config.svgElement;
  }
  /** Tries to create an icon config through the registered resolver functions. */


  _getIconConfigFromResolvers(namespace, name) {
    for (let i = 0; i < this._resolvers.length; i++) {
      const result = this._resolvers[i](name, namespace);

      if (result) {
        return isSafeUrlWithOptions(result) ? new SvgIconConfig(result.url, null, result.options) : new SvgIconConfig(result, null);
      }
    }

    return undefined;
  }

}

MatIconRegistry.ɵfac = function MatIconRegistry_Factory(t) {
  return new (t || MatIconRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler));
};

MatIconRegistry.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MatIconRegistry,
  factory: MatIconRegistry.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatIconRegistry, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler
    }];
  }, null);
})();
/** @docs-private */


function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, httpClient, sanitizer, errorHandler, document) {
  return parentRegistry || new MatIconRegistry(httpClient, sanitizer, document, errorHandler);
}
/** @docs-private */


const ICON_REGISTRY_PROVIDER = {
  // If there is already an MatIconRegistry available, use that. Otherwise, provide a new one.
  provide: MatIconRegistry,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MatIconRegistry], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler, [new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), _angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]],
  useFactory: ICON_REGISTRY_PROVIDER_FACTORY
};
/** Clones an SVGElement while preserving type information. */

function cloneSvg(svg) {
  return svg.cloneNode(true);
}
/** Returns the cache key to use for an icon namespace and name. */


function iconKey(namespace, name) {
  return namespace + ':' + name;
}

function isSafeUrlWithOptions(value) {
  return !!(value.url && value.options);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatIcon.

/** @docs-private */


const _MatIconBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.mixinColor)(class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }

});
/** Injection token to be used to override the default options for `mat-icon`. */


const MAT_ICON_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_ICON_DEFAULT_OPTIONS');
/**
 * Injection token used to provide the current location to `MatIcon`.
 * Used to handle server-side rendering and to stub out during unit tests.
 * @docs-private
 */

const MAT_ICON_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-icon-location', {
  providedIn: 'root',
  factory: MAT_ICON_LOCATION_FACTORY
});
/** @docs-private */

function MAT_ICON_LOCATION_FACTORY() {
  const _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT);

  const _location = _document ? _document.location : null;

  return {
    // Note that this needs to be a function, rather than a property, because Angular
    // will only resolve it once, but we want the current path on each call.
    getPathname: () => _location ? _location.pathname + _location.search : ''
  };
}
/** SVG attributes that accept a FuncIRI (e.g. `url(<something>)`). */


const funcIriAttributes = ['clip-path', 'color-profile', 'src', 'cursor', 'fill', 'filter', 'marker', 'marker-start', 'marker-mid', 'marker-end', 'mask', 'stroke'];
/** Selector that can be used to find all elements that are using a `FuncIRI`. */

const funcIriAttributeSelector = funcIriAttributes.map(attr => `[${attr}]`).join(', ');
/** Regex that can be used to extract the id out of a FuncIRI. */

const funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;
/**
 * Component to display an icon. It can be used in the following ways:
 *
 * - Specify the svgIcon input to load an SVG icon from a URL previously registered with the
 *   addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
 *   MatIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
 *   "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
 *   Examples:
 *     `<mat-icon svgIcon="left-arrow"></mat-icon>
 *     <mat-icon svgIcon="animals:cat"></mat-icon>`
 *
 * - Use a font ligature as an icon by putting the ligature text in the content of the `<mat-icon>`
 *   component. By default the Material icons font is used as described at
 *   http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
 *   alternate font by setting the fontSet input to either the CSS class to apply to use the
 *   desired font, or to an alias previously registered with MatIconRegistry.registerFontClassAlias.
 *   Examples:
 *     `<mat-icon>home</mat-icon>
 *     <mat-icon fontSet="myfont">sun</mat-icon>`
 *
 * - Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
 *   font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
 *   CSS class which causes the glyph to be displayed via a :before selector, as in
 *   https://fortawesome.github.io/Font-Awesome/examples/
 *   Example:
 *     `<mat-icon fontSet="fa" fontIcon="alarm"></mat-icon>`
 */

class MatIcon extends _MatIconBase {
  constructor(elementRef, _iconRegistry, ariaHidden, _location, _errorHandler, defaults) {
    super(elementRef);
    this._iconRegistry = _iconRegistry;
    this._location = _location;
    this._errorHandler = _errorHandler;
    this._inline = false;
    this._previousFontSetClass = [];
    /** Subscription to the current in-progress SVG icon request. */

    this._currentIconFetch = rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription.EMPTY;

    if (defaults) {
      if (defaults.color) {
        this.color = this.defaultColor = defaults.color;
      }

      if (defaults.fontSet) {
        this.fontSet = defaults.fontSet;
      }
    } // If the user has not explicitly set aria-hidden, mark the icon as hidden, as this is
    // the right thing to do for the majority of icon use-cases.


    if (!ariaHidden) {
      elementRef.nativeElement.setAttribute('aria-hidden', 'true');
    }
  }
  /**
   * Whether the icon should be inlined, automatically sizing the icon to match the font size of
   * the element the icon is contained in.
   */


  get inline() {
    return this._inline;
  }

  set inline(inline) {
    this._inline = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(inline);
  }
  /** Name of the icon in the SVG icon set. */


  get svgIcon() {
    return this._svgIcon;
  }

  set svgIcon(value) {
    if (value !== this._svgIcon) {
      if (value) {
        this._updateSvgIcon(value);
      } else if (this._svgIcon) {
        this._clearSvgElement();
      }

      this._svgIcon = value;
    }
  }
  /** Font set that the icon is a part of. */


  get fontSet() {
    return this._fontSet;
  }

  set fontSet(value) {
    const newValue = this._cleanupFontValue(value);

    if (newValue !== this._fontSet) {
      this._fontSet = newValue;

      this._updateFontIconClasses();
    }
  }
  /** Name of an icon within a font set. */


  get fontIcon() {
    return this._fontIcon;
  }

  set fontIcon(value) {
    const newValue = this._cleanupFontValue(value);

    if (newValue !== this._fontIcon) {
      this._fontIcon = newValue;

      this._updateFontIconClasses();
    }
  }
  /**
   * Splits an svgIcon binding value into its icon set and icon name components.
   * Returns a 2-element array of [(icon set), (icon name)].
   * The separator for the two fields is ':'. If there is no separator, an empty
   * string is returned for the icon set and the entire value is returned for
   * the icon name. If the argument is falsy, returns an array of two empty strings.
   * Throws an error if the name contains two or more ':' separators.
   * Examples:
   *   `'social:cake' -> ['social', 'cake']
   *   'penguin' -> ['', 'penguin']
   *   null -> ['', '']
   *   'a:b:c' -> (throws Error)`
   */


  _splitIconName(iconName) {
    if (!iconName) {
      return ['', ''];
    }

    const parts = iconName.split(':');

    switch (parts.length) {
      case 1:
        return ['', parts[0]];
      // Use default namespace.

      case 2:
        return parts;

      default:
        throw Error(`Invalid icon name: "${iconName}"`);
      // TODO: add an ngDevMode check
    }
  }

  ngOnInit() {
    // Update font classes because ngOnChanges won't be called if none of the inputs are present,
    // e.g. <mat-icon>arrow</mat-icon> In this case we need to add a CSS class for the default font.
    this._updateFontIconClasses();
  }

  ngAfterViewChecked() {
    const cachedElements = this._elementsWithExternalReferences;

    if (cachedElements && cachedElements.size) {
      const newPath = this._location.getPathname(); // We need to check whether the URL has changed on each change detection since
      // the browser doesn't have an API that will let us react on link clicks and
      // we can't depend on the Angular router. The references need to be updated,
      // because while most browsers don't care whether the URL is correct after
      // the first render, Safari will break if the user navigates to a different
      // page and the SVG isn't re-rendered.


      if (newPath !== this._previousPath) {
        this._previousPath = newPath;

        this._prependPathToReferences(newPath);
      }
    }
  }

  ngOnDestroy() {
    this._currentIconFetch.unsubscribe();

    if (this._elementsWithExternalReferences) {
      this._elementsWithExternalReferences.clear();
    }
  }

  _usingFontIcon() {
    return !this.svgIcon;
  }

  _setSvgElement(svg) {
    this._clearSvgElement(); // Note: we do this fix here, rather than the icon registry, because the
    // references have to point to the URL at the time that the icon was created.


    const path = this._location.getPathname();

    this._previousPath = path;

    this._cacheChildrenWithExternalReferences(svg);

    this._prependPathToReferences(path);

    this._elementRef.nativeElement.appendChild(svg);
  }

  _clearSvgElement() {
    const layoutElement = this._elementRef.nativeElement;
    let childCount = layoutElement.childNodes.length;

    if (this._elementsWithExternalReferences) {
      this._elementsWithExternalReferences.clear();
    } // Remove existing non-element child nodes and SVGs, and add the new SVG element. Note that
    // we can't use innerHTML, because IE will throw if the element has a data binding.


    while (childCount--) {
      const child = layoutElement.childNodes[childCount]; // 1 corresponds to Node.ELEMENT_NODE. We remove all non-element nodes in order to get rid
      // of any loose text nodes, as well as any SVG elements in order to remove any old icons.

      if (child.nodeType !== 1 || child.nodeName.toLowerCase() === 'svg') {
        child.remove();
      }
    }
  }

  _updateFontIconClasses() {
    if (!this._usingFontIcon()) {
      return;
    }

    const elem = this._elementRef.nativeElement;
    const fontSetClasses = (this.fontSet ? [this._iconRegistry.classNameForFontAlias(this.fontSet)] : this._iconRegistry.getDefaultFontSetClass()).filter(className => className.length > 0);

    this._previousFontSetClass.forEach(className => elem.classList.remove(className));

    fontSetClasses.forEach(className => elem.classList.add(className));
    this._previousFontSetClass = fontSetClasses;

    if (this.fontIcon !== this._previousFontIconClass) {
      if (this._previousFontIconClass) {
        elem.classList.remove(this._previousFontIconClass);
      }

      if (this.fontIcon) {
        elem.classList.add(this.fontIcon);
      }

      this._previousFontIconClass = this.fontIcon;
    }
  }
  /**
   * Cleans up a value to be used as a fontIcon or fontSet.
   * Since the value ends up being assigned as a CSS class, we
   * have to trim the value and omit space-separated values.
   */


  _cleanupFontValue(value) {
    return typeof value === 'string' ? value.trim().split(' ')[0] : value;
  }
  /**
   * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
   * reference. This is required because WebKit browsers require references to be prefixed with
   * the current path, if the page has a `base` tag.
   */


  _prependPathToReferences(path) {
    const elements = this._elementsWithExternalReferences;

    if (elements) {
      elements.forEach((attrs, element) => {
        attrs.forEach(attr => {
          element.setAttribute(attr.name, `url('${path}#${attr.value}')`);
        });
      });
    }
  }
  /**
   * Caches the children of an SVG element that have `url()`
   * references that we need to prefix with the current path.
   */


  _cacheChildrenWithExternalReferences(element) {
    const elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
    const elements = this._elementsWithExternalReferences = this._elementsWithExternalReferences || new Map();

    for (let i = 0; i < elementsWithFuncIri.length; i++) {
      funcIriAttributes.forEach(attr => {
        const elementWithReference = elementsWithFuncIri[i];
        const value = elementWithReference.getAttribute(attr);
        const match = value ? value.match(funcIriPattern) : null;

        if (match) {
          let attributes = elements.get(elementWithReference);

          if (!attributes) {
            attributes = [];
            elements.set(elementWithReference, attributes);
          }

          attributes.push({
            name: attr,
            value: match[1]
          });
        }
      });
    }
  }
  /** Sets a new SVG icon with a particular name. */


  _updateSvgIcon(rawName) {
    this._svgNamespace = null;
    this._svgName = null;

    this._currentIconFetch.unsubscribe();

    if (rawName) {
      const [namespace, iconName] = this._splitIconName(rawName);

      if (namespace) {
        this._svgNamespace = namespace;
      }

      if (iconName) {
        this._svgName = iconName;
      }

      this._currentIconFetch = this._iconRegistry.getNamedSvgIcon(iconName, namespace).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1)).subscribe(svg => this._setSvgElement(svg), err => {
        const errorMessage = `Error retrieving icon ${namespace}:${iconName}! ${err.message}`;

        this._errorHandler.handleError(new Error(errorMessage));
      });
    }
  }

}

MatIcon.ɵfac = function MatIcon_Factory(t) {
  return new (t || MatIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('aria-hidden'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_ICON_LOCATION), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_ICON_DEFAULT_OPTIONS, 8));
};

MatIcon.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatIcon,
  selectors: [["mat-icon"]],
  hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
  hostVars: 7,
  hostBindings: function MatIcon_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-mat-icon-type", ctx._usingFontIcon() ? "font" : "svg")("data-mat-icon-name", ctx._svgName || ctx.fontIcon)("data-mat-icon-namespace", ctx._svgNamespace || ctx.fontSet);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-icon-inline", ctx.inline)("mat-icon-no-color", ctx.color !== "primary" && ctx.color !== "accent" && ctx.color !== "warn");
    }
  },
  inputs: {
    color: "color",
    inline: "inline",
    svgIcon: "svgIcon",
    fontSet: "fontSet",
    fontIcon: "fontIcon"
  },
  exportAs: ["matIcon"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function MatIcon_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  styles: [".mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      template: '<ng-content></ng-content>',
      selector: 'mat-icon',
      exportAs: 'matIcon',
      inputs: ['color'],
      host: {
        'role': 'img',
        'class': 'mat-icon notranslate',
        '[attr.data-mat-icon-type]': '_usingFontIcon() ? "font" : "svg"',
        '[attr.data-mat-icon-name]': '_svgName || fontIcon',
        '[attr.data-mat-icon-namespace]': '_svgNamespace || fontSet',
        '[class.mat-icon-inline]': 'inline',
        '[class.mat-icon-no-color]': 'color !== "primary" && color !== "accent" && color !== "warn"'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      styles: [".mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: MatIconRegistry
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['aria-hidden']
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_ICON_LOCATION]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_ICON_DEFAULT_OPTIONS]
      }]
    }];
  }, {
    inline: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    svgIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fontSet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fontIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatIconModule {}

MatIconModule.ɵfac = function MatIconModule_Factory(t) {
  return new (t || MatIconModule)();
};

MatIconModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatIconModule
});
MatIconModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatIconModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule],
      exports: [MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule],
      declarations: [MatIcon]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 6517:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/list.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_LIST": () => (/* binding */ MAT_LIST),
/* harmony export */   "MAT_NAV_LIST": () => (/* binding */ MAT_NAV_LIST),
/* harmony export */   "MAT_SELECTION_LIST_VALUE_ACCESSOR": () => (/* binding */ MAT_SELECTION_LIST_VALUE_ACCESSOR),
/* harmony export */   "MatList": () => (/* binding */ MatList),
/* harmony export */   "MatListAvatarCssMatStyler": () => (/* binding */ MatListAvatarCssMatStyler),
/* harmony export */   "MatListIconCssMatStyler": () => (/* binding */ MatListIconCssMatStyler),
/* harmony export */   "MatListItem": () => (/* binding */ MatListItem),
/* harmony export */   "MatListModule": () => (/* binding */ MatListModule),
/* harmony export */   "MatListOption": () => (/* binding */ MatListOption),
/* harmony export */   "MatListSubheaderCssMatStyler": () => (/* binding */ MatListSubheaderCssMatStyler),
/* harmony export */   "MatNavList": () => (/* binding */ MatNavList),
/* harmony export */   "MatSelectionList": () => (/* binding */ MatSelectionList),
/* harmony export */   "MatSelectionListChange": () => (/* binding */ MatSelectionListChange)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ 8971);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/a11y */ 4218);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ 1755);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/keycodes */ 8456);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ 1528);















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatList.

/** @docs-private */

const _c0 = ["*"];
const _c1 = ".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}button.mat-list-item,button.mat-list-option{padding:0;width:100%;background:none;color:inherit;border:none;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:left}[dir=rtl] button.mat-list-item,[dir=rtl] button.mat-list-option{text-align:right}button.mat-list-item::-moz-focus-inner,button.mat-list-option::-moz-focus-inner{border:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{display:block;top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{display:block;top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px;z-index:1}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-single-selected-option):not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}";
const _c2 = [[["", "mat-list-avatar", ""], ["", "mat-list-icon", ""], ["", "matListAvatar", ""], ["", "matListIcon", ""]], [["", "mat-line", ""], ["", "matLine", ""]], "*"];
const _c3 = ["[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]", "[mat-line], [matLine]", "*"];
const _c4 = ["text"];

function MatListOption_mat_pseudo_checkbox_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-pseudo-checkbox", 5);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx_r0.selected ? "checked" : "unchecked")("disabled", ctx_r0.disabled);
  }
}

const _c5 = ["*", [["", "mat-list-avatar", ""], ["", "mat-list-icon", ""], ["", "matListAvatar", ""], ["", "matListIcon", ""]]];
const _c6 = ["*", "[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]"];

const _MatListBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinDisabled)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinDisableRipple)(class {})); // Boilerplate for applying mixins to MatListItem.

/** @docs-private */


const _MatListItemMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinDisableRipple)(class {});
/**
 * Injection token that can be used to inject instances of `MatList`. It serves as
 * alternative token to the actual `MatList` class which could cause unnecessary
 * retention of the class and its component metadata.
 */


const MAT_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatList');
/**
 * Injection token that can be used to inject instances of `MatNavList`. It serves as
 * alternative token to the actual `MatNavList` class which could cause unnecessary
 * retention of the class and its component metadata.
 */

const MAT_NAV_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatNavList');

class MatNavList extends _MatListBase {
  constructor() {
    super(...arguments);
    /** Emits when the state of the list changes. */

    this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }

  ngOnChanges() {
    this._stateChanges.next();
  }

  ngOnDestroy() {
    this._stateChanges.complete();
  }

}

MatNavList.ɵfac = /* @__PURE__ */function () {
  let ɵMatNavList_BaseFactory;
  return function MatNavList_Factory(t) {
    return (ɵMatNavList_BaseFactory || (ɵMatNavList_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatNavList)))(t || MatNavList);
  };
}();

MatNavList.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatNavList,
  selectors: [["mat-nav-list"]],
  hostAttrs: ["role", "navigation", 1, "mat-nav-list", "mat-list-base"],
  inputs: {
    disableRipple: "disableRipple",
    disabled: "disabled"
  },
  exportAs: ["matNavList"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: MAT_NAV_LIST,
    useExisting: MatNavList
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function MatNavList_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  styles: [".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}button.mat-list-item,button.mat-list-option{padding:0;width:100%;background:none;color:inherit;border:none;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:left}[dir=rtl] button.mat-list-item,[dir=rtl] button.mat-list-option{text-align:right}button.mat-list-item::-moz-focus-inner,button.mat-list-option::-moz-focus-inner{border:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{display:block;top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{display:block;top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px;z-index:1}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-single-selected-option):not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatNavList, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-nav-list',
      exportAs: 'matNavList',
      host: {
        'role': 'navigation',
        'class': 'mat-nav-list mat-list-base'
      },
      inputs: ['disableRipple', 'disabled'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: MAT_NAV_LIST,
        useExisting: MatNavList
      }],
      template: "<ng-content></ng-content>\n\n",
      styles: [".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}button.mat-list-item,button.mat-list-option{padding:0;width:100%;background:none;color:inherit;border:none;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:left}[dir=rtl] button.mat-list-item,[dir=rtl] button.mat-list-option{text-align:right}button.mat-list-item::-moz-focus-inner,button.mat-list-option::-moz-focus-inner{border:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{display:block;top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{display:block;top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px;z-index:1}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-single-selected-option):not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}"]
    }]
  }], null, null);
})();

class MatList extends _MatListBase {
  constructor(_elementRef) {
    super();
    this._elementRef = _elementRef;
    /** Emits when the state of the list changes. */

    this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();

    if (this._getListType() === 'action-list') {
      _elementRef.nativeElement.classList.add('mat-action-list');
    }
  }

  _getListType() {
    const nodeName = this._elementRef.nativeElement.nodeName.toLowerCase();

    if (nodeName === 'mat-list') {
      return 'list';
    }

    if (nodeName === 'mat-action-list') {
      return 'action-list';
    }

    return null;
  }

  ngOnChanges() {
    this._stateChanges.next();
  }

  ngOnDestroy() {
    this._stateChanges.complete();
  }

}

MatList.ɵfac = function MatList_Factory(t) {
  return new (t || MatList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

MatList.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatList,
  selectors: [["mat-list"], ["mat-action-list"]],
  hostAttrs: [1, "mat-list", "mat-list-base"],
  inputs: {
    disableRipple: "disableRipple",
    disabled: "disabled"
  },
  exportAs: ["matList"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: MAT_LIST,
    useExisting: MatList
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function MatList_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  styles: [_c1],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatList, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-list, mat-action-list',
      exportAs: 'matList',
      host: {
        'class': 'mat-list mat-list-base'
      },
      inputs: ['disableRipple', 'disabled'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: MAT_LIST,
        useExisting: MatList
      }],
      template: "<ng-content></ng-content>\n\n",
      styles: [".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}button.mat-list-item,button.mat-list-option{padding:0;width:100%;background:none;color:inherit;border:none;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:left}[dir=rtl] button.mat-list-item,[dir=rtl] button.mat-list-option{text-align:right}button.mat-list-item::-moz-focus-inner,button.mat-list-option::-moz-focus-inner{border:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{display:block;top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{display:block;top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px;z-index:1}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-single-selected-option):not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, null);
})();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */


class MatListAvatarCssMatStyler {}

MatListAvatarCssMatStyler.ɵfac = function MatListAvatarCssMatStyler_Factory(t) {
  return new (t || MatListAvatarCssMatStyler)();
};

MatListAvatarCssMatStyler.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatListAvatarCssMatStyler,
  selectors: [["", "mat-list-avatar", ""], ["", "matListAvatar", ""]],
  hostAttrs: [1, "mat-list-avatar"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatListAvatarCssMatStyler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-list-avatar], [matListAvatar]',
      host: {
        'class': 'mat-list-avatar'
      }
    }]
  }], null, null);
})();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */


class MatListIconCssMatStyler {}

MatListIconCssMatStyler.ɵfac = function MatListIconCssMatStyler_Factory(t) {
  return new (t || MatListIconCssMatStyler)();
};

MatListIconCssMatStyler.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatListIconCssMatStyler,
  selectors: [["", "mat-list-icon", ""], ["", "matListIcon", ""]],
  hostAttrs: [1, "mat-list-icon"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatListIconCssMatStyler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-list-icon], [matListIcon]',
      host: {
        'class': 'mat-list-icon'
      }
    }]
  }], null, null);
})();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */


class MatListSubheaderCssMatStyler {}

MatListSubheaderCssMatStyler.ɵfac = function MatListSubheaderCssMatStyler_Factory(t) {
  return new (t || MatListSubheaderCssMatStyler)();
};

MatListSubheaderCssMatStyler.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatListSubheaderCssMatStyler,
  selectors: [["", "mat-subheader", ""], ["", "matSubheader", ""]],
  hostAttrs: [1, "mat-subheader"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatListSubheaderCssMatStyler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-subheader], [matSubheader]',
      host: {
        'class': 'mat-subheader'
      }
    }]
  }], null, null);
})();
/** An item within a Material Design list. */


class MatListItem extends _MatListItemMixinBase {
  constructor(_element, _changeDetectorRef, navList, list) {
    super();
    this._element = _element;
    this._isInteractiveList = false;
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this._disabled = false;
    this._isInteractiveList = !!(navList || list && list._getListType() === 'action-list');
    this._list = navList || list; // If no type attribute is specified for <button>, set it to "button".
    // If a type attribute is already specified, do nothing.

    const element = this._getHostElement();

    if (element.nodeName.toLowerCase() === 'button' && !element.hasAttribute('type')) {
      element.setAttribute('type', 'button');
    }

    if (this._list) {
      // React to changes in the state of the parent list since
      // some of the item's properties depend on it (e.g. `disableRipple`).
      this._list._stateChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this._destroyed)).subscribe(() => {
        _changeDetectorRef.markForCheck();
      });
    }
  }
  /** Whether the option is disabled. */


  get disabled() {
    return this._disabled || !!(this._list && this._list.disabled);
  }

  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceBooleanProperty)(value);
  }

  ngAfterContentInit() {
    (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.setLines)(this._lines, this._element);
  }

  ngOnDestroy() {
    this._destroyed.next();

    this._destroyed.complete();
  }
  /** Whether this list item should show a ripple effect when clicked. */


  _isRippleDisabled() {
    return !this._isInteractiveList || this.disableRipple || !!(this._list && this._list.disableRipple);
  }
  /** Retrieves the DOM element of the component host. */


  _getHostElement() {
    return this._element.nativeElement;
  }

}

MatListItem.ɵfac = function MatListItem_Factory(t) {
  return new (t || MatListItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_NAV_LIST, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_LIST, 8));
};

MatListItem.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatListItem,
  selectors: [["mat-list-item"], ["a", "mat-list-item", ""], ["button", "mat-list-item", ""]],
  contentQueries: function MatListItem_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatListAvatarCssMatStyler, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatListIconCssMatStyler, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatLine, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._avatar = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._icon = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lines = _t);
    }
  },
  hostAttrs: [1, "mat-list-item", "mat-focus-indicator"],
  hostVars: 4,
  hostBindings: function MatListItem_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-list-item-disabled", ctx.disabled)("mat-list-item-with-avatar", ctx._avatar || ctx._icon);
    }
  },
  inputs: {
    disableRipple: "disableRipple",
    disabled: "disabled"
  },
  exportAs: ["matListItem"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c3,
  decls: 6,
  vars: 2,
  consts: [[1, "mat-list-item-content"], ["mat-ripple", "", 1, "mat-list-item-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-list-text"]],
  template: function MatListItem_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx._isRippleDisabled());
    }
  },
  dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatRipple],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatListItem, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-list-item, a[mat-list-item], button[mat-list-item]',
      exportAs: 'matListItem',
      host: {
        'class': 'mat-list-item mat-focus-indicator',
        '[class.mat-list-item-disabled]': 'disabled',
        '[class.mat-list-item-with-avatar]': '_avatar || _icon'
      },
      inputs: ['disableRipple'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<span class=\"mat-list-item-content\">\n  <span class=\"mat-list-item-ripple\" mat-ripple\n       [matRippleTrigger]=\"_getHostElement()\"\n       [matRippleDisabled]=\"_isRippleDisabled()\">\n  </span>\n\n  <ng-content select=\"[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]\">\n  </ng-content>\n\n  <span class=\"mat-list-text\"><ng-content select=\"[mat-line], [matLine]\"></ng-content></span>\n\n  <ng-content></ng-content>\n</span>\n"
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: MatNavList,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_NAV_LIST]
      }]
    }, {
      type: MatList,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_LIST]
      }]
    }];
  }, {
    _lines: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatLine, {
        descendants: true
      }]
    }],
    _avatar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatListAvatarCssMatStyler]
    }],
    _icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatListIconCssMatStyler]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const _MatSelectionListBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinDisableRipple)(class {});

const _MatListOptionBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinDisableRipple)(class {});
/** @docs-private */


const MAT_SELECTION_LIST_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatSelectionList),
  multi: true
};
/** Change event that is being fired whenever the selected state of an option changes. */

class MatSelectionListChange {
  constructor(
  /** Reference to the selection list that emitted the event. */
  source,
  /** Reference to the options that have been changed. */
  options) {
    this.source = source;
    this.options = options;
  }

}
/**
 * Component for list-options of selection-list. Each list-option can automatically
 * generate a checkbox and can put current item into the selectionModel of selection-list
 * if the current item is selected.
 */


class MatListOption extends _MatListOptionBase {
  constructor(_element, _changeDetector,
  /** @docs-private */
  selectionList) {
    super();
    this._element = _element;
    this._changeDetector = _changeDetector;
    this.selectionList = selectionList;
    this._selected = false;
    this._disabled = false;
    this._hasFocus = false;
    /**
     * Emits when the selected state of the option has changed.
     * Use to facilitate two-data binding to the `selected` property.
     * @docs-private
     */

    this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Whether the label should appear before or after the checkbox. Defaults to 'after' */

    this.checkboxPosition = 'after';
    /**
     * This is set to true after the first OnChanges cycle so we don't clear the value of `selected`
     * in the first cycle.
     */

    this._inputsInitialized = false;
  }
  /** Theme color of the list option. This sets the color of the checkbox. */


  get color() {
    return this._color || this.selectionList.color;
  }

  set color(newValue) {
    this._color = newValue;
  }
  /** Value of the option */


  get value() {
    return this._value;
  }

  set value(newValue) {
    if (this.selected && !this.selectionList.compareWith(newValue, this.value) && this._inputsInitialized) {
      this.selected = false;
    }

    this._value = newValue;
  }
  /** Whether the option is disabled. */


  get disabled() {
    return this._disabled || this.selectionList && this.selectionList.disabled;
  }

  set disabled(value) {
    const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceBooleanProperty)(value);

    if (newValue !== this._disabled) {
      this._disabled = newValue;

      this._changeDetector.markForCheck();
    }
  }
  /** Whether the option is selected. */


  get selected() {
    return this.selectionList.selectedOptions.isSelected(this);
  }

  set selected(value) {
    const isSelected = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceBooleanProperty)(value);

    if (isSelected !== this._selected) {
      this._setSelected(isSelected);

      if (isSelected || this.selectionList.multiple) {
        this.selectionList._reportValueChange();
      }
    }
  }

  ngOnInit() {
    const list = this.selectionList;

    if (list._value && list._value.some(value => list.compareWith(this._value, value))) {
      this._setSelected(true);
    }

    const wasSelected = this._selected; // List options that are selected at initialization can't be reported properly to the form
    // control. This is because it takes some time until the selection-list knows about all
    // available options. Also it can happen that the ControlValueAccessor has an initial value
    // that should be used instead. Deferring the value change report to the next tick ensures
    // that the form control value is not being overwritten.

    Promise.resolve().then(() => {
      if (this._selected || wasSelected) {
        this.selected = true;

        this._changeDetector.markForCheck();
      }
    });
    this._inputsInitialized = true;
  }

  ngAfterContentInit() {
    (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.setLines)(this._lines, this._element);
  }

  ngOnDestroy() {
    if (this.selected) {
      // We have to delay this until the next tick in order
      // to avoid changed after checked errors.
      Promise.resolve().then(() => {
        this.selected = false;
      });
    }

    const hadFocus = this._hasFocus;

    const newActiveItem = this.selectionList._removeOptionFromList(this); // Only move focus if this option was focused at the time it was destroyed.


    if (hadFocus && newActiveItem) {
      newActiveItem.focus();
    }
  }
  /** Toggles the selection state of the option. */


  toggle() {
    this.selected = !this.selected;
  }
  /** Allows for programmatic focusing of the option. */


  focus() {
    this._element.nativeElement.focus();
  }
  /**
   * Returns the list item's text label. Implemented as a part of the FocusKeyManager.
   * @docs-private
   */


  getLabel() {
    return this._text ? this._text.nativeElement.textContent || '' : '';
  }
  /** Whether this list item should show a ripple effect when clicked. */


  _isRippleDisabled() {
    return this.disabled || this.disableRipple || this.selectionList.disableRipple;
  }

  _handleClick() {
    if (!this.disabled && (this.selectionList.multiple || !this.selected)) {
      this.toggle(); // Emit a change event if the selected state of the option changed through user interaction.

      this.selectionList._emitChangeEvent([this]);
    }
  }

  _handleFocus() {
    this.selectionList._setFocusedOption(this);

    this._hasFocus = true;
  }

  _handleBlur() {
    this.selectionList._onTouched();

    this._hasFocus = false;
  }
  /** Retrieves the DOM element of the component host. */


  _getHostElement() {
    return this._element.nativeElement;
  }
  /** Sets the selected state of the option. Returns whether the value has changed. */


  _setSelected(selected) {
    if (selected === this._selected) {
      return false;
    }

    this._selected = selected;

    if (selected) {
      this.selectionList.selectedOptions.select(this);
    } else {
      this.selectionList.selectedOptions.deselect(this);
    }

    this.selectedChange.emit(selected);

    this._changeDetector.markForCheck();

    return true;
  }
  /**
   * Notifies Angular that the option needs to be checked in the next change detection run. Mainly
   * used to trigger an update of the list option if the disabled state of the selection list
   * changed.
   */


  _markForCheck() {
    this._changeDetector.markForCheck();
  }

}

MatListOption.ɵfac = function MatListOption_Factory(t) {
  return new (t || MatListOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatSelectionList)));
};

MatListOption.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatListOption,
  selectors: [["mat-list-option"]],
  contentQueries: function MatListOption_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatListAvatarCssMatStyler, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatListIconCssMatStyler, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatLine, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._avatar = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._icon = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lines = _t);
    }
  },
  viewQuery: function MatListOption_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._text = _t.first);
    }
  },
  hostAttrs: ["role", "option", 1, "mat-list-item", "mat-list-option", "mat-focus-indicator"],
  hostVars: 15,
  hostBindings: function MatListOption_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatListOption_focus_HostBindingHandler() {
        return ctx._handleFocus();
      })("blur", function MatListOption_blur_HostBindingHandler() {
        return ctx._handleBlur();
      })("click", function MatListOption_click_HostBindingHandler() {
        return ctx._handleClick();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-selected", ctx.selected)("aria-disabled", ctx.disabled)("tabindex", -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-list-item-disabled", ctx.disabled)("mat-list-item-with-avatar", ctx._avatar || ctx._icon)("mat-primary", ctx.color === "primary")("mat-accent", ctx.color !== "primary" && ctx.color !== "warn")("mat-warn", ctx.color === "warn")("mat-list-single-selected-option", ctx.selected && !ctx.selectionList.multiple);
    }
  },
  inputs: {
    disableRipple: "disableRipple",
    checkboxPosition: "checkboxPosition",
    color: "color",
    value: "value",
    disabled: "disabled",
    selected: "selected"
  },
  outputs: {
    selectedChange: "selectedChange"
  },
  exportAs: ["matListOption"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c6,
  decls: 7,
  vars: 5,
  consts: [[1, "mat-list-item-content"], ["mat-ripple", "", 1, "mat-list-item-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [3, "state", "disabled", 4, "ngIf"], [1, "mat-list-text"], ["text", ""], [3, "state", "disabled"]],
  template: function MatListOption_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatListOption_mat_pseudo_checkbox_2_Template, 1, 2, "mat-pseudo-checkbox", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-list-item-content-reverse", ctx.checkboxPosition == "after");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx._isRippleDisabled());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectionList.multiple);
    }
  },
  dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatRipple, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatPseudoCheckbox, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatListOption, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-list-option',
      exportAs: 'matListOption',
      inputs: ['disableRipple'],
      host: {
        'role': 'option',
        'class': 'mat-list-item mat-list-option mat-focus-indicator',
        '(focus)': '_handleFocus()',
        '(blur)': '_handleBlur()',
        '(click)': '_handleClick()',
        '[class.mat-list-item-disabled]': 'disabled',
        '[class.mat-list-item-with-avatar]': '_avatar || _icon',
        // Manually set the "primary" or "warn" class if the color has been explicitly
        // set to "primary" or "warn". The pseudo checkbox picks up these classes for
        // its theme.
        '[class.mat-primary]': 'color === "primary"',
        // Even though accent is the default, we need to set this class anyway, because the  list might
        // be placed inside a parent that has one of the other colors with a higher specificity.
        '[class.mat-accent]': 'color !== "primary" && color !== "warn"',
        '[class.mat-warn]': 'color === "warn"',
        '[class.mat-list-single-selected-option]': 'selected && !selectionList.multiple',
        '[attr.aria-selected]': 'selected',
        '[attr.aria-disabled]': 'disabled',
        '[attr.tabindex]': '-1'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<div class=\"mat-list-item-content\"\n  [class.mat-list-item-content-reverse]=\"checkboxPosition == 'after'\">\n\n  <div mat-ripple\n    class=\"mat-list-item-ripple\"\n    [matRippleTrigger]=\"_getHostElement()\"\n    [matRippleDisabled]=\"_isRippleDisabled()\"></div>\n\n  <mat-pseudo-checkbox\n    *ngIf=\"selectionList.multiple\"\n    [state]=\"selected ? 'checked' : 'unchecked'\"\n    [disabled]=\"disabled\"></mat-pseudo-checkbox>\n\n  <div class=\"mat-list-text\" #text><ng-content></ng-content></div>\n\n  <ng-content select=\"[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]\">\n  </ng-content>\n\n</div>\n"
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: MatSelectionList,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatSelectionList)]
      }]
    }];
  }, {
    _avatar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatListAvatarCssMatStyler]
    }],
    _icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatListIconCssMatStyler]
    }],
    _lines: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatLine, {
        descendants: true
      }]
    }],
    selectedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _text: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['text']
    }],
    checkboxPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Material Design list component where each item is a selectable option. Behaves as a listbox.
 */


class MatSelectionList extends _MatSelectionListBase {
  constructor(_element, _changeDetector, _focusMonitor) {
    super();
    this._element = _element;
    this._changeDetector = _changeDetector;
    this._focusMonitor = _focusMonitor;
    this._multiple = true;
    this._contentInitialized = false;
    /** Emits a change event whenever the selected state of an option changes. */

    this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Theme color of the selection list. This sets the checkbox color for all list options. */

    this.color = 'accent';
    /**
     * Function used for comparing an option against the selected value when determining which
     * options should appear as selected. The first argument is the value of an options. The second
     * one is a value from the selected value. A boolean must be returned.
     */

    this.compareWith = (a1, a2) => a1 === a2;

    this._disabled = false;
    /** The currently selected options. */

    this.selectedOptions = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__.SelectionModel(this._multiple);
    /** The tabindex of the selection list. */

    this._tabIndex = -1;
    /** View to model callback that should be called whenever the selected options change. */

    this._onChange = _ => {};
    /** Emits when the list has been destroyed. */


    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** View to model callback that should be called if the list or its options lost focus. */

    this._onTouched = () => {};
  }
  /** Whether the selection list is disabled. */


  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceBooleanProperty)(value); // The `MatSelectionList` and `MatListOption` are using the `OnPush` change detection
    // strategy. Therefore the options will not check for any changes if the `MatSelectionList`
    // changed its state. Since we know that a change to `disabled` property of the list affects
    // the state of the options, we manually mark each option for check.

    this._markOptionsForCheck();
  }
  /** Whether selection is limited to one or multiple items (default multiple). */


  get multiple() {
    return this._multiple;
  }

  set multiple(value) {
    const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceBooleanProperty)(value);

    if (newValue !== this._multiple) {
      if (this._contentInitialized && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw new Error('Cannot change `multiple` mode of mat-selection-list after initialization.');
      }

      this._multiple = newValue;
      this.selectedOptions = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__.SelectionModel(this._multiple, this.selectedOptions.selected);
    }
  }

  ngAfterContentInit() {
    this._contentInitialized = true;
    this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__.FocusKeyManager(this.options).withWrap().withTypeAhead().withHomeAndEnd() // Allow disabled items to be focusable. For accessibility reasons, there must be a way for
    // screenreader users, that allows reading the different options of the list.
    .skipPredicate(() => false).withAllowedModifierKeys(['shiftKey']);

    if (this._value) {
      this._setOptionsFromValues(this._value);
    } // If the user attempts to tab out of the selection list, allow focus to escape.


    this._keyManager.tabOut.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this._destroyed)).subscribe(() => {
      this._allowFocusEscape();
    }); // When the number of options change, update the tabindex of the selection list.


    this.options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this._destroyed)).subscribe(() => {
      this._updateTabIndex();
    }); // Sync external changes to the model back to the options.

    this.selectedOptions.changed.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this._destroyed)).subscribe(event => {
      if (event.added) {
        for (let item of event.added) {
          item.selected = true;
        }
      }

      if (event.removed) {
        for (let item of event.removed) {
          item.selected = false;
        }
      }
    });

    this._focusMonitor.monitor(this._element).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this._destroyed)).subscribe(origin => {
      if (origin === 'keyboard' || origin === 'program') {
        let toFocus = 0;

        for (let i = 0; i < this.options.length; i++) {
          if (this.options.get(i)?.selected) {
            toFocus = i;
            break;
          }
        }

        this._keyManager.setActiveItem(toFocus);
      }
    });
  }

  ngOnChanges(changes) {
    const disableRippleChanges = changes['disableRipple'];
    const colorChanges = changes['color'];

    if (disableRippleChanges && !disableRippleChanges.firstChange || colorChanges && !colorChanges.firstChange) {
      this._markOptionsForCheck();
    }
  }

  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._element);

    this._destroyed.next();

    this._destroyed.complete();

    this._isDestroyed = true;
  }
  /** Focuses the selection list. */


  focus(options) {
    this._element.nativeElement.focus(options);
  }
  /** Selects all of the options. Returns the options that changed as a result. */


  selectAll() {
    return this._setAllOptionsSelected(true);
  }
  /** Deselects all of the options. Returns the options that changed as a result. */


  deselectAll() {
    return this._setAllOptionsSelected(false);
  }
  /** Sets the focused option of the selection-list. */


  _setFocusedOption(option) {
    this._keyManager.updateActiveItem(option);
  }
  /**
   * Removes an option from the selection list and updates the active item.
   * @returns Currently-active item.
   */


  _removeOptionFromList(option) {
    const optionIndex = this._getOptionIndex(option);

    if (optionIndex > -1 && this._keyManager.activeItemIndex === optionIndex) {
      // Check whether the option is the last item
      if (optionIndex > 0) {
        this._keyManager.updateActiveItem(optionIndex - 1);
      } else if (optionIndex === 0 && this.options.length > 1) {
        this._keyManager.updateActiveItem(Math.min(optionIndex + 1, this.options.length - 1));
      }
    }

    return this._keyManager.activeItem;
  }
  /** Passes relevant key presses to our key manager. */


  _keydown(event) {
    const keyCode = event.keyCode;
    const manager = this._keyManager;
    const previousFocusIndex = manager.activeItemIndex;
    const hasModifier = (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.hasModifierKey)(event);

    switch (keyCode) {
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.SPACE:
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.ENTER:
        if (!hasModifier && !manager.isTyping()) {
          this._toggleFocusedOption(); // Always prevent space from scrolling the page since the list has focus


          event.preventDefault();
        }

        break;

      default:
        // The "A" key gets special treatment, because it's used for the "select all" functionality.
        if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.A && this.multiple && (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.hasModifierKey)(event, 'ctrlKey') && !manager.isTyping()) {
          const shouldSelect = this.options.some(option => !option.disabled && !option.selected);

          this._setAllOptionsSelected(shouldSelect, true, true);

          event.preventDefault();
        } else {
          manager.onKeydown(event);
        }

    }

    if (this.multiple && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.UP_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.DOWN_ARROW) && event.shiftKey && manager.activeItemIndex !== previousFocusIndex) {
      this._toggleFocusedOption();
    }
  }
  /** Reports a value change to the ControlValueAccessor */


  _reportValueChange() {
    // Stop reporting value changes after the list has been destroyed. This avoids
    // cases where the list might wrongly reset its value once it is removed, but
    // the form control is still live.
    if (this.options && !this._isDestroyed) {
      const value = this._getSelectedOptionValues();

      this._onChange(value);

      this._value = value;
    }
  }
  /** Emits a change event if the selected state of an option changed. */


  _emitChangeEvent(options) {
    this.selectionChange.emit(new MatSelectionListChange(this, options));
  }
  /** Implemented as part of ControlValueAccessor. */


  writeValue(values) {
    this._value = values;

    if (this.options) {
      this._setOptionsFromValues(values || []);
    }
  }
  /** Implemented as a part of ControlValueAccessor. */


  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  /** Implemented as part of ControlValueAccessor. */


  registerOnChange(fn) {
    this._onChange = fn;
  }
  /** Implemented as part of ControlValueAccessor. */


  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  /** Sets the selected options based on the specified values. */


  _setOptionsFromValues(values) {
    this.options.forEach(option => option._setSelected(false));
    values.forEach(value => {
      const correspondingOption = this.options.find(option => {
        // Skip options that are already in the model. This allows us to handle cases
        // where the same primitive value is selected multiple times.
        return option.selected ? false : this.compareWith(option.value, value);
      });

      if (correspondingOption) {
        correspondingOption._setSelected(true);
      }
    });
  }
  /** Returns the values of the selected options. */


  _getSelectedOptionValues() {
    return this.options.filter(option => option.selected).map(option => option.value);
  }
  /** Toggles the state of the currently focused option if enabled. */


  _toggleFocusedOption() {
    let focusedIndex = this._keyManager.activeItemIndex;

    if (focusedIndex != null && this._isValidIndex(focusedIndex)) {
      let focusedOption = this.options.toArray()[focusedIndex];

      if (focusedOption && !focusedOption.disabled && (this._multiple || !focusedOption.selected)) {
        focusedOption.toggle(); // Emit a change event because the focused option changed its state through user
        // interaction.

        this._emitChangeEvent([focusedOption]);
      }
    }
  }
  /**
   * Sets the selected state on all of the options
   * and emits an event if anything changed.
   */


  _setAllOptionsSelected(isSelected, skipDisabled, isUserInput) {
    // Keep track of whether anything changed, because we only want to
    // emit the changed event when something actually changed.
    const changedOptions = [];
    this.options.forEach(option => {
      if ((!skipDisabled || !option.disabled) && option._setSelected(isSelected)) {
        changedOptions.push(option);
      }
    });

    if (changedOptions.length) {
      this._reportValueChange();

      if (isUserInput) {
        this._emitChangeEvent(changedOptions);
      }
    }

    return changedOptions;
  }
  /**
   * Utility to ensure all indexes are valid.
   * @param index The index to be checked.
   * @returns True if the index is valid for our list of options.
   */


  _isValidIndex(index) {
    return index >= 0 && index < this.options.length;
  }
  /** Returns the index of the specified list option. */


  _getOptionIndex(option) {
    return this.options.toArray().indexOf(option);
  }
  /** Marks all the options to be checked in the next change detection run. */


  _markOptionsForCheck() {
    if (this.options) {
      this.options.forEach(option => option._markForCheck());
    }
  }
  /**
   * Removes the tabindex from the selection list and resets it back afterwards, allowing the user
   * to tab out of it. This prevents the list from capturing focus and redirecting it back within
   * the list, creating a focus trap if it user tries to tab away.
   */


  _allowFocusEscape() {
    this._tabIndex = -1;
    setTimeout(() => {
      this._tabIndex = 0;

      this._changeDetector.markForCheck();
    });
  }
  /** Updates the tabindex based upon if the selection list is empty. */


  _updateTabIndex() {
    this._tabIndex = this.options.length === 0 ? -1 : 0;
  }

}

MatSelectionList.ɵfac = function MatSelectionList_Factory(t) {
  return new (t || MatSelectionList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__.FocusMonitor));
};

MatSelectionList.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatSelectionList,
  selectors: [["mat-selection-list"]],
  contentQueries: function MatSelectionList_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatListOption, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.options = _t);
    }
  },
  hostAttrs: ["role", "listbox", 1, "mat-selection-list", "mat-list-base"],
  hostVars: 3,
  hostBindings: function MatSelectionList_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatSelectionList_keydown_HostBindingHandler($event) {
        return ctx._keydown($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-multiselectable", ctx.multiple)("aria-disabled", ctx.disabled.toString())("tabindex", ctx._tabIndex);
    }
  },
  inputs: {
    disableRipple: "disableRipple",
    color: "color",
    compareWith: "compareWith",
    disabled: "disabled",
    multiple: "multiple"
  },
  outputs: {
    selectionChange: "selectionChange"
  },
  exportAs: ["matSelectionList"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_SELECTION_LIST_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function MatSelectionList_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  styles: [_c1],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSelectionList, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-selection-list',
      exportAs: 'matSelectionList',
      inputs: ['disableRipple'],
      host: {
        'role': 'listbox',
        'class': 'mat-selection-list mat-list-base',
        '(keydown)': '_keydown($event)',
        '[attr.aria-multiselectable]': 'multiple',
        '[attr.aria-disabled]': 'disabled.toString()',
        '[attr.tabindex]': '_tabIndex'
      },
      template: '<ng-content></ng-content>',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      providers: [MAT_SELECTION_LIST_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      styles: [".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}button.mat-list-item,button.mat-list-option{padding:0;width:100%;background:none;color:inherit;border:none;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:left}[dir=rtl] button.mat-list-item,[dir=rtl] button.mat-list-option{text-align:right}button.mat-list-item::-moz-focus-inner,button.mat-list-option::-moz-focus-inner{border:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{display:block;top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{display:block;top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px;z-index:1}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-single-selected-option):not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__.FocusMonitor
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MatListOption, {
        descendants: true
      }]
    }],
    selectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    compareWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    multiple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatListModule {}

MatListModule.ɵfac = function MatListModule_Factory(t) {
  return new (t || MatListModule)();
};

MatListModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatListModule
});
MatListModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatLineModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatPseudoCheckboxModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatLineModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatPseudoCheckboxModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDividerModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatListModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatLineModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatPseudoCheckboxModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule],
      exports: [MatList, MatNavList, MatListItem, MatListAvatarCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatLineModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule, MatListIconCssMatStyler, MatListSubheaderCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatPseudoCheckboxModule, MatSelectionList, MatListOption, _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDividerModule],
      declarations: [MatList, MatNavList, MatListItem, MatListAvatarCssMatStyler, MatListIconCssMatStyler, MatListSubheaderCssMatStyler, MatSelectionList, MatListOption]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 8589:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/menu.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_MENU_CONTENT": () => (/* binding */ MAT_MENU_CONTENT),
/* harmony export */   "MAT_MENU_DEFAULT_OPTIONS": () => (/* binding */ MAT_MENU_DEFAULT_OPTIONS),
/* harmony export */   "MAT_MENU_PANEL": () => (/* binding */ MAT_MENU_PANEL),
/* harmony export */   "MAT_MENU_SCROLL_STRATEGY": () => (/* binding */ MAT_MENU_SCROLL_STRATEGY),
/* harmony export */   "MatMenu": () => (/* binding */ MatMenu),
/* harmony export */   "MatMenuContent": () => (/* binding */ MatMenuContent),
/* harmony export */   "MatMenuItem": () => (/* binding */ MatMenuItem),
/* harmony export */   "MatMenuModule": () => (/* binding */ MatMenuModule),
/* harmony export */   "MatMenuTrigger": () => (/* binding */ MatMenuTrigger),
/* harmony export */   "_MatMenuBase": () => (/* binding */ _MatMenuBase),
/* harmony export */   "_MatMenuContentBase": () => (/* binding */ _MatMenuContentBase),
/* harmony export */   "_MatMenuTriggerBase": () => (/* binding */ _MatMenuTriggerBase),
/* harmony export */   "fadeInItems": () => (/* binding */ fadeInItems),
/* harmony export */   "matMenuAnimations": () => (/* binding */ matMenuAnimations),
/* harmony export */   "transformMenu": () => (/* binding */ transformMenu)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ 4218);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/coercion */ 8971);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/keycodes */ 8456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 8623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 3066);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 5843);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ 7520);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/bidi */ 2867);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/overlay */ 5895);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/platform */ 9107);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/scrolling */ 6328);



















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Animations used by the mat-menu component.
 * Animation duration and timing values are based on:
 * https://material.io/guidelines/components/menus.html#menus-usage
 * @docs-private
 */

const _c0 = ["mat-menu-item", ""];

function MatMenuItem__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "polygon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

const _c1 = ["*"];

function MatMenu_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatMenu_ng_template_0_Template_div_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._handleKeydown($event));
    })("click", function MatMenu_ng_template_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.closed.emit("click"));
    })("@transformMenu.start", function MatMenu_ng_template_0_Template_div_animation_transformMenu_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4._onAnimationStart($event));
    })("@transformMenu.done", function MatMenu_ng_template_0_Template_div_animation_transformMenu_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5._onAnimationDone($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r0.panelId)("ngClass", ctx_r0._classList)("@transformMenu", ctx_r0._panelAnimationState);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.ariaLabel || null)("aria-labelledby", ctx_r0.ariaLabelledby || null)("aria-describedby", ctx_r0.ariaDescribedby || null);
  }
}

const matMenuAnimations = {
  /**
   * This animation controls the menu panel's entry and exit from the page.
   *
   * When the menu panel is added to the DOM, it scales in and fades in its border.
   *
   * When the menu panel is removed from the DOM, it simply fades out after a brief
   * delay to display the ripple.
   */
  transformMenu: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('transformMenu', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    opacity: 0,
    transform: 'scale(0.8)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('120ms cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    opacity: 1,
    transform: 'scale(1)'
  }))), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('100ms 25ms linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    opacity: 0
  })))]),

  /**
   * This animation fades in the background color and content of the menu panel
   * after its containing element is scaled in.
   */
  fadeInItems: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('fadeInItems', [// TODO(crisbeto): this is inside the `transformMenu`
  // now. Remove next time we do breaking changes.
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('showing', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    opacity: 1
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    opacity: 0
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
};
/**
 * @deprecated
 * @breaking-change 8.0.0
 * @docs-private
 */

const fadeInItems = matMenuAnimations.fadeInItems;
/**
 * @deprecated
 * @breaking-change 8.0.0
 * @docs-private
 */

const transformMenu = matMenuAnimations.transformMenu;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `MatMenuContent`. It serves
 * as alternative token to the actual `MatMenuContent` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */

const MAT_MENU_CONTENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatMenuContent');

class _MatMenuContentBase {
  constructor(_template, _componentFactoryResolver, _appRef, _injector, _viewContainerRef, _document, _changeDetectorRef) {
    this._template = _template;
    this._componentFactoryResolver = _componentFactoryResolver;
    this._appRef = _appRef;
    this._injector = _injector;
    this._viewContainerRef = _viewContainerRef;
    this._document = _document;
    this._changeDetectorRef = _changeDetectorRef;
    /** Emits when the menu content has been attached. */

    this._attached = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }
  /**
   * Attaches the content with a particular context.
   * @docs-private
   */


  attach(context = {}) {
    if (!this._portal) {
      this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__.TemplatePortal(this._template, this._viewContainerRef);
    }

    this.detach();

    if (!this._outlet) {
      this._outlet = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__.DomPortalOutlet(this._document.createElement('div'), this._componentFactoryResolver, this._appRef, this._injector);
    }

    const element = this._template.elementRef.nativeElement; // Because we support opening the same menu from different triggers (which in turn have their
    // own `OverlayRef` panel), we have to re-insert the host element every time, otherwise we
    // risk it staying attached to a pane that's no longer in the DOM.

    element.parentNode.insertBefore(this._outlet.outletElement, element); // When `MatMenuContent` is used in an `OnPush` component, the insertion of the menu
    // content via `createEmbeddedView` does not cause the content to be seen as "dirty"
    // by Angular. This causes the `@ContentChildren` for menu items within the menu to
    // not be updated by Angular. By explicitly marking for check here, we tell Angular that
    // it needs to check for new menu items and update the `@ContentChild` in `MatMenu`.
    // @breaking-change 9.0.0 Make change detector ref required

    this._changeDetectorRef?.markForCheck();

    this._portal.attach(this._outlet, context);

    this._attached.next();
  }
  /**
   * Detaches the content.
   * @docs-private
   */


  detach() {
    if (this._portal.isAttached) {
      this._portal.detach();
    }
  }

  ngOnDestroy() {
    if (this._outlet) {
      this._outlet.dispose();
    }
  }

}

_MatMenuContentBase.ɵfac = function _MatMenuContentBase_Factory(t) {
  return new (t || _MatMenuContentBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

_MatMenuContentBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatMenuContentBase
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatMenuContentBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, null);
})();
/**
 * Menu content that will be rendered lazily once the menu is opened.
 */


class MatMenuContent extends _MatMenuContentBase {}

MatMenuContent.ɵfac = /* @__PURE__ */function () {
  let ɵMatMenuContent_BaseFactory;
  return function MatMenuContent_Factory(t) {
    return (ɵMatMenuContent_BaseFactory || (ɵMatMenuContent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatMenuContent)))(t || MatMenuContent);
  };
}();

MatMenuContent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatMenuContent,
  selectors: [["ng-template", "matMenuContent", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: MAT_MENU_CONTENT,
    useExisting: MatMenuContent
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatMenuContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[matMenuContent]',
      providers: [{
        provide: MAT_MENU_CONTENT,
        useExisting: MatMenuContent
      }]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Throws an exception for the case when menu's x-position value isn't valid.
 * In other words, it doesn't match 'before' or 'after'.
 * @docs-private
 */


function throwMatMenuInvalidPositionX() {
  throw Error(`xPosition value must be either 'before' or after'.
      Example: <mat-menu xPosition="before" #menu="matMenu"></mat-menu>`);
}
/**
 * Throws an exception for the case when menu's y-position value isn't valid.
 * In other words, it doesn't match 'above' or 'below'.
 * @docs-private
 */


function throwMatMenuInvalidPositionY() {
  throw Error(`yPosition value must be either 'above' or below'.
      Example: <mat-menu yPosition="above" #menu="matMenu"></mat-menu>`);
}
/**
 * Throws an exception for the case when a menu is assigned
 * to a trigger that is placed inside the same menu.
 * @docs-private
 */


function throwMatMenuRecursiveError() {
  throw Error(`matMenuTriggerFor: menu cannot contain its own trigger. Assign a menu that is ` + `not a parent of the trigger or move the trigger outside of the menu.`);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token used to provide the parent menu to menu-specific components.
 * @docs-private
 */


const MAT_MENU_PANEL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_MENU_PANEL');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatMenuItem.

/** @docs-private */

const _MatMenuItemBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.mixinDisableRipple)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.mixinDisabled)(class {}));
/**
 * Single item inside of a `mat-menu`. Provides the menu item styling and accessibility treatment.
 */


class MatMenuItem extends _MatMenuItemBase {
  constructor(_elementRef, _document, _focusMonitor, _parentMenu, _changeDetectorRef) {
    super();
    this._elementRef = _elementRef;
    this._document = _document;
    this._focusMonitor = _focusMonitor;
    this._parentMenu = _parentMenu;
    this._changeDetectorRef = _changeDetectorRef;
    /** ARIA role for the menu item. */

    this.role = 'menuitem';
    /** Stream that emits when the menu item is hovered. */

    this._hovered = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Stream that emits when the menu item is focused. */

    this._focused = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Whether the menu item is highlighted. */

    this._highlighted = false;
    /** Whether the menu item acts as a trigger for a sub-menu. */

    this._triggersSubmenu = false;
    _parentMenu?.addItem?.(this);
  }
  /** Focuses the menu item. */


  focus(origin, options) {
    if (this._focusMonitor && origin) {
      this._focusMonitor.focusVia(this._getHostElement(), origin, options);
    } else {
      this._getHostElement().focus(options);
    }

    this._focused.next(this);
  }

  ngAfterViewInit() {
    if (this._focusMonitor) {
      // Start monitoring the element so it gets the appropriate focused classes. We want
      // to show the focus style for menu items only when the focus was not caused by a
      // mouse or touch interaction.
      this._focusMonitor.monitor(this._elementRef, false);
    }
  }

  ngOnDestroy() {
    if (this._focusMonitor) {
      this._focusMonitor.stopMonitoring(this._elementRef);
    }

    if (this._parentMenu && this._parentMenu.removeItem) {
      this._parentMenu.removeItem(this);
    }

    this._hovered.complete();

    this._focused.complete();
  }
  /** Used to set the `tabindex`. */


  _getTabIndex() {
    return this.disabled ? '-1' : '0';
  }
  /** Returns the host DOM element. */


  _getHostElement() {
    return this._elementRef.nativeElement;
  }
  /** Prevents the default element actions if it is disabled. */


  _checkDisabled(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  /** Emits to the hover stream. */


  _handleMouseEnter() {
    this._hovered.next(this);
  }
  /** Gets the label to be used when determining whether the option should be focused. */


  getLabel() {
    const clone = this._elementRef.nativeElement.cloneNode(true);

    const icons = clone.querySelectorAll('mat-icon, .material-icons'); // Strip away icons so they don't show up in the text.

    for (let i = 0; i < icons.length; i++) {
      icons[i].remove();
    }

    return clone.textContent?.trim() || '';
  }

  _setHighlighted(isHighlighted) {
    // We need to mark this for check for the case where the content is coming from a
    // `matMenuContent` whose change detection tree is at the declaration position,
    // not the insertion position. See #23175.
    // @breaking-change 12.0.0 Remove null check for `_changeDetectorRef`.
    this._highlighted = isHighlighted;
    this._changeDetectorRef?.markForCheck();
  }

  _hasFocus() {
    return this._document && this._document.activeElement === this._getHostElement();
  }

}

MatMenuItem.ɵfac = function MatMenuItem_Factory(t) {
  return new (t || MatMenuItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_MENU_PANEL, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

MatMenuItem.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatMenuItem,
  selectors: [["", "mat-menu-item", ""]],
  hostAttrs: [1, "mat-focus-indicator"],
  hostVars: 10,
  hostBindings: function MatMenuItem_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatMenuItem_click_HostBindingHandler($event) {
        return ctx._checkDisabled($event);
      })("mouseenter", function MatMenuItem_mouseenter_HostBindingHandler() {
        return ctx._handleMouseEnter();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role)("tabindex", ctx._getTabIndex())("aria-disabled", ctx.disabled.toString())("disabled", ctx.disabled || null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-menu-item", true)("mat-menu-item-highlighted", ctx._highlighted)("mat-menu-item-submenu-trigger", ctx._triggersSubmenu);
    }
  },
  inputs: {
    disabled: "disabled",
    disableRipple: "disableRipple",
    role: "role"
  },
  exportAs: ["matMenuItem"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  attrs: _c0,
  ngContentSelectors: _c1,
  decls: 3,
  vars: 3,
  consts: [["matRipple", "", 1, "mat-menu-ripple", 3, "matRippleDisabled", "matRippleTrigger"], ["class", "mat-menu-submenu-icon", "viewBox", "0 0 5 10", "focusable", "false", 4, "ngIf"], ["viewBox", "0 0 5 10", "focusable", "false", 1, "mat-menu-submenu-icon"], ["points", "0,0 5,5 0,10"]],
  template: function MatMenuItem_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatMenuItem__svg_svg_2_Template, 2, 0, "svg", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleTrigger", ctx._getHostElement());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._triggersSubmenu);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRipple],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatMenuItem, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[mat-menu-item]',
      exportAs: 'matMenuItem',
      inputs: ['disabled', 'disableRipple'],
      host: {
        '[attr.role]': 'role',
        '[class.mat-menu-item]': 'true',
        '[class.mat-menu-item-highlighted]': '_highlighted',
        '[class.mat-menu-item-submenu-trigger]': '_triggersSubmenu',
        '[attr.tabindex]': '_getTabIndex()',
        '[attr.aria-disabled]': 'disabled.toString()',
        '[attr.disabled]': 'disabled || null',
        'class': 'mat-focus-indicator',
        '(click)': '_checkDisabled($event)',
        '(mouseenter)': '_handleMouseEnter()'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: "<ng-content></ng-content>\n<div class=\"mat-menu-ripple\" matRipple\n     [matRippleDisabled]=\"disableRipple || disabled\"\n     [matRippleTrigger]=\"_getHostElement()\">\n</div>\n\n<svg\n  *ngIf=\"_triggersSubmenu\"\n  class=\"mat-menu-submenu-icon\"\n  viewBox=\"0 0 5 10\"\n  focusable=\"false\"><polygon points=\"0,0 5,5 0,10\"/></svg>\n"
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
      }]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.FocusMonitor
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_MENU_PANEL]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    role: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injection token to be used to override the default options for `mat-menu`. */


const MAT_MENU_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-menu-default-options', {
  providedIn: 'root',
  factory: MAT_MENU_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */

function MAT_MENU_DEFAULT_OPTIONS_FACTORY() {
  return {
    overlapTrigger: false,
    xPosition: 'after',
    yPosition: 'below',
    backdropClass: 'cdk-overlay-transparent-backdrop'
  };
}

let menuPanelUid = 0;
/** Base class with all of the `MatMenu` functionality. */

class _MatMenuBase {
  constructor(_elementRef, _ngZone, _defaultOptions, // @breaking-change 15.0.0 `_changeDetectorRef` to become a required parameter.
  _changeDetectorRef) {
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this._defaultOptions = _defaultOptions;
    this._changeDetectorRef = _changeDetectorRef;
    this._xPosition = this._defaultOptions.xPosition;
    this._yPosition = this._defaultOptions.yPosition;
    /** Only the direct descendant menu items. */

    this._directDescendantItems = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
    /** Subscription to tab events on the menu panel */

    this._tabSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription.EMPTY;
    /** Config object to be passed into the menu's ngClass */

    this._classList = {};
    /** Current state of the panel animation. */

    this._panelAnimationState = 'void';
    /** Emits whenever an animation on the menu completes. */

    this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Class or list of classes to be added to the overlay panel. */

    this.overlayPanelClass = this._defaultOptions.overlayPanelClass || '';
    /** Class to be added to the backdrop element. */

    this.backdropClass = this._defaultOptions.backdropClass;
    this._overlapTrigger = this._defaultOptions.overlapTrigger;
    this._hasBackdrop = this._defaultOptions.hasBackdrop;
    /** Event emitted when the menu is closed. */

    this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Event emitted when the menu is closed.
     * @deprecated Switch to `closed` instead
     * @breaking-change 8.0.0
     */

    this.close = this.closed;
    this.panelId = `mat-menu-panel-${menuPanelUid++}`;
  }
  /** Position of the menu in the X axis. */


  get xPosition() {
    return this._xPosition;
  }

  set xPosition(value) {
    if (value !== 'before' && value !== 'after' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throwMatMenuInvalidPositionX();
    }

    this._xPosition = value;
    this.setPositionClasses();
  }
  /** Position of the menu in the Y axis. */


  get yPosition() {
    return this._yPosition;
  }

  set yPosition(value) {
    if (value !== 'above' && value !== 'below' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throwMatMenuInvalidPositionY();
    }

    this._yPosition = value;
    this.setPositionClasses();
  }
  /** Whether the menu should overlap its trigger. */


  get overlapTrigger() {
    return this._overlapTrigger;
  }

  set overlapTrigger(value) {
    this._overlapTrigger = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__.coerceBooleanProperty)(value);
  }
  /** Whether the menu has a backdrop. */


  get hasBackdrop() {
    return this._hasBackdrop;
  }

  set hasBackdrop(value) {
    this._hasBackdrop = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__.coerceBooleanProperty)(value);
  }
  /**
   * This method takes classes set on the host mat-menu element and applies them on the
   * menu template that displays in the overlay container.  Otherwise, it's difficult
   * to style the containing menu from outside the component.
   * @param classes list of class names
   */


  set panelClass(classes) {
    const previousPanelClass = this._previousPanelClass;

    if (previousPanelClass && previousPanelClass.length) {
      previousPanelClass.split(' ').forEach(className => {
        this._classList[className] = false;
      });
    }

    this._previousPanelClass = classes;

    if (classes && classes.length) {
      classes.split(' ').forEach(className => {
        this._classList[className] = true;
      });
      this._elementRef.nativeElement.className = '';
    }
  }
  /**
   * This method takes classes set on the host mat-menu element and applies them on the
   * menu template that displays in the overlay container.  Otherwise, it's difficult
   * to style the containing menu from outside the component.
   * @deprecated Use `panelClass` instead.
   * @breaking-change 8.0.0
   */


  get classList() {
    return this.panelClass;
  }

  set classList(classes) {
    this.panelClass = classes;
  }

  ngOnInit() {
    this.setPositionClasses();
  }

  ngAfterContentInit() {
    this._updateDirectDescendants();

    this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.FocusKeyManager(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd();
    this._tabSubscription = this._keyManager.tabOut.subscribe(() => this.closed.emit('tab')); // If a user manually (programmatically) focuses a menu item, we need to reflect that focus
    // change back to the key manager. Note that we don't need to unsubscribe here because _focused
    // is internal and we know that it gets completed on destroy.

    this._directDescendantItems.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(this._directDescendantItems), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(items => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(...items.map(item => item._focused)))).subscribe(focusedItem => this._keyManager.updateActiveItem(focusedItem));

    this._directDescendantItems.changes.subscribe(itemsList => {
      // Move focus to another item, if the active item is removed from the list.
      // We need to debounce the callback, because multiple items might be removed
      // in quick succession.
      const manager = this._keyManager;

      if (this._panelAnimationState === 'enter' && manager.activeItem?._hasFocus()) {
        const items = itemsList.toArray();
        const index = Math.max(0, Math.min(items.length - 1, manager.activeItemIndex || 0));

        if (items[index] && !items[index].disabled) {
          manager.setActiveItem(index);
        } else {
          manager.setNextItemActive();
        }
      }
    });
  }

  ngOnDestroy() {
    this._directDescendantItems.destroy();

    this._tabSubscription.unsubscribe();

    this.closed.complete();
  }
  /** Stream that emits whenever the hovered menu item changes. */


  _hovered() {
    // Coerce the `changes` property because Angular types it as `Observable<any>`
    const itemChanges = this._directDescendantItems.changes;
    return itemChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(this._directDescendantItems), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(items => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(...items.map(item => item._hovered))));
  }
  /*
   * Registers a menu item with the menu.
   * @docs-private
   * @deprecated No longer being used. To be removed.
   * @breaking-change 9.0.0
   */


  addItem(_item) {}
  /**
   * Removes an item from the menu.
   * @docs-private
   * @deprecated No longer being used. To be removed.
   * @breaking-change 9.0.0
   */


  removeItem(_item) {}
  /** Handle a keyboard event from the menu, delegating to the appropriate action. */


  _handleKeydown(event) {
    const keyCode = event.keyCode;
    const manager = this._keyManager;

    switch (keyCode) {
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.ESCAPE:
        if (!(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.hasModifierKey)(event)) {
          event.preventDefault();
          this.closed.emit('keydown');
        }

        break;

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.LEFT_ARROW:
        if (this.parentMenu && this.direction === 'ltr') {
          this.closed.emit('keydown');
        }

        break;

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.RIGHT_ARROW:
        if (this.parentMenu && this.direction === 'rtl') {
          this.closed.emit('keydown');
        }

        break;

      default:
        if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.UP_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.DOWN_ARROW) {
          manager.setFocusOrigin('keyboard');
        }

        manager.onKeydown(event);
        return;
    } // Don't allow the event to propagate if we've already handled it, or it may
    // end up reaching other overlays that were opened earlier (see #22694).


    event.stopPropagation();
  }
  /**
   * Focus the first item in the menu.
   * @param origin Action from which the focus originated. Used to set the correct styling.
   */


  focusFirstItem(origin = 'program') {
    // Wait for `onStable` to ensure iOS VoiceOver screen reader focuses the first item (#24735).
    this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1)).subscribe(() => {
      let menuPanel = null;

      if (this._directDescendantItems.length) {
        // Because the `mat-menuPanel` is at the DOM insertion point, not inside the overlay, we don't
        // have a nice way of getting a hold of the menuPanel panel. We can't use a `ViewChild` either
        // because the panel is inside an `ng-template`. We work around it by starting from one of
        // the items and walking up the DOM.
        menuPanel = this._directDescendantItems.first._getHostElement().closest('[role="menu"]');
      } // If an item in the menuPanel is already focused, avoid overriding the focus.


      if (!menuPanel || !menuPanel.contains(document.activeElement)) {
        const manager = this._keyManager;
        manager.setFocusOrigin(origin).setFirstItemActive(); // If there's no active item at this point, it means that all the items are disabled.
        // Move focus to the menuPanel panel so keyboard events like Escape still work. Also this will
        // give _some_ feedback to screen readers.

        if (!manager.activeItem && menuPanel) {
          menuPanel.focus();
        }
      }
    });
  }
  /**
   * Resets the active item in the menu. This is used when the menu is opened, allowing
   * the user to start from the first option when pressing the down arrow.
   */


  resetActiveItem() {
    this._keyManager.setActiveItem(-1);
  }
  /**
   * Sets the menu panel elevation.
   * @param depth Number of parent menus that come before the menu.
   */


  setElevation(depth) {
    // The elevation starts at the base and increases by one for each level.
    // Capped at 24 because that's the maximum elevation defined in the Material design spec.
    const elevation = Math.min(this._baseElevation + depth, 24);
    const newElevation = `${this._elevationPrefix}${elevation}`;
    const customElevation = Object.keys(this._classList).find(className => {
      return className.startsWith(this._elevationPrefix);
    });

    if (!customElevation || customElevation === this._previousElevation) {
      if (this._previousElevation) {
        this._classList[this._previousElevation] = false;
      }

      this._classList[newElevation] = true;
      this._previousElevation = newElevation;
    }
  }
  /**
   * Adds classes to the menu panel based on its position. Can be used by
   * consumers to add specific styling based on the position.
   * @param posX Position of the menu along the x axis.
   * @param posY Position of the menu along the y axis.
   * @docs-private
   */


  setPositionClasses(posX = this.xPosition, posY = this.yPosition) {
    const classes = this._classList;
    classes['mat-menu-before'] = posX === 'before';
    classes['mat-menu-after'] = posX === 'after';
    classes['mat-menu-above'] = posY === 'above';
    classes['mat-menu-below'] = posY === 'below'; // @breaking-change 15.0.0 Remove null check for `_changeDetectorRef`.

    this._changeDetectorRef?.markForCheck();
  }
  /** Starts the enter animation. */


  _startAnimation() {
    // @breaking-change 8.0.0 Combine with _resetAnimation.
    this._panelAnimationState = 'enter';
  }
  /** Resets the panel animation to its initial state. */


  _resetAnimation() {
    // @breaking-change 8.0.0 Combine with _startAnimation.
    this._panelAnimationState = 'void';
  }
  /** Callback that is invoked when the panel animation completes. */


  _onAnimationDone(event) {
    this._animationDone.next(event);

    this._isAnimating = false;
  }

  _onAnimationStart(event) {
    this._isAnimating = true; // Scroll the content element to the top as soon as the animation starts. This is necessary,
    // because we move focus to the first item while it's still being animated, which can throw
    // the browser off when it determines the scroll position. Alternatively we can move focus
    // when the animation is done, however moving focus asynchronously will interrupt screen
    // readers which are in the process of reading out the menu already. We take the `element`
    // from the `event` since we can't use a `ViewChild` to access the pane.

    if (event.toState === 'enter' && this._keyManager.activeItemIndex === 0) {
      event.element.scrollTop = 0;
    }
  }
  /**
   * Sets up a stream that will keep track of any newly-added menu items and will update the list
   * of direct descendants. We collect the descendants this way, because `_allItems` can include
   * items that are part of child menus, and using a custom way of registering items is unreliable
   * when it comes to maintaining the item order.
   */


  _updateDirectDescendants() {
    this._allItems.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(this._allItems)).subscribe(items => {
      this._directDescendantItems.reset(items.filter(item => item._parentMenu === this));

      this._directDescendantItems.notifyOnChanges();
    });
  }

}

_MatMenuBase.ɵfac = function _MatMenuBase_Factory(t) {
  return new (t || _MatMenuBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_MENU_DEFAULT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

_MatMenuBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatMenuBase,
  contentQueries: function _MatMenuBase_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_MENU_CONTENT, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatMenuItem, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatMenuItem, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lazyContent = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._allItems = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.items = _t);
    }
  },
  viewQuery: function _MatMenuBase_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
    }
  },
  inputs: {
    backdropClass: "backdropClass",
    ariaLabel: ["aria-label", "ariaLabel"],
    ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
    ariaDescribedby: ["aria-describedby", "ariaDescribedby"],
    xPosition: "xPosition",
    yPosition: "yPosition",
    overlapTrigger: "overlapTrigger",
    hasBackdrop: "hasBackdrop",
    panelClass: ["class", "panelClass"],
    classList: "classList"
  },
  outputs: {
    closed: "closed",
    close: "close"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatMenuBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_MENU_DEFAULT_OPTIONS]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    _allItems: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MatMenuItem, {
        descendants: true
      }]
    }],
    backdropClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-label']
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-labelledby']
    }],
    ariaDescribedby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-describedby']
    }],
    xPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    yPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    templateRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef]
    }],
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MatMenuItem, {
        descendants: false
      }]
    }],
    lazyContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MAT_MENU_CONTENT]
    }],
    overlapTrigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hasBackdrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    panelClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['class']
    }],
    classList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    closed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    close: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/** @docs-public MatMenu */


class MatMenu extends _MatMenuBase {
  constructor(elementRef, ngZone, defaultOptions, changeDetectorRef) {
    super(elementRef, ngZone, defaultOptions, changeDetectorRef);
    this._elevationPrefix = 'mat-elevation-z';
    this._baseElevation = 4;
  }

}

MatMenu.ɵfac = function MatMenu_Factory(t) {
  return new (t || MatMenu)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_MENU_DEFAULT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

MatMenu.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatMenu,
  selectors: [["mat-menu"]],
  hostVars: 3,
  hostBindings: function MatMenu_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
    }
  },
  exportAs: ["matMenu"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: MAT_MENU_PANEL,
    useExisting: MatMenu
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 1,
  vars: 0,
  consts: [["tabindex", "-1", "role", "menu", 1, "mat-menu-panel", 3, "id", "ngClass", "keydown", "click"], [1, "mat-menu-content"]],
  template: function MatMenu_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatMenu_ng_template_0_Template, 3, 6, "ng-template");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass],
  styles: ["mat-menu{display:none}.mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px;position:relative}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]::before{display:block;position:absolute;content:\"\";top:0;left:0;bottom:0;right:0}.cdk-high-contrast-active .mat-menu-item{margin-top:1px}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}.mat-menu-submenu-icon{position:absolute;top:50%;right:16px;transform:translateY(-50%);width:5px;height:10px;fill:currentColor}[dir=rtl] .mat-menu-submenu-icon{right:auto;left:16px;transform:translateY(-50%) scaleX(-1)}.cdk-high-contrast-active .mat-menu-submenu-icon{fill:CanvasText}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}"],
  encapsulation: 2,
  data: {
    animation: [matMenuAnimations.transformMenu, matMenuAnimations.fadeInItems]
  },
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatMenu, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-menu',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      exportAs: 'matMenu',
      host: {
        '[attr.aria-label]': 'null',
        '[attr.aria-labelledby]': 'null',
        '[attr.aria-describedby]': 'null'
      },
      animations: [matMenuAnimations.transformMenu, matMenuAnimations.fadeInItems],
      providers: [{
        provide: MAT_MENU_PANEL,
        useExisting: MatMenu
      }],
      template: "<ng-template>\n  <div\n    class=\"mat-menu-panel\"\n    [id]=\"panelId\"\n    [ngClass]=\"_classList\"\n    (keydown)=\"_handleKeydown($event)\"\n    (click)=\"closed.emit('click')\"\n    [@transformMenu]=\"_panelAnimationState\"\n    (@transformMenu.start)=\"_onAnimationStart($event)\"\n    (@transformMenu.done)=\"_onAnimationDone($event)\"\n    tabindex=\"-1\"\n    role=\"menu\"\n    [attr.aria-label]=\"ariaLabel || null\"\n    [attr.aria-labelledby]=\"ariaLabelledby || null\"\n    [attr.aria-describedby]=\"ariaDescribedby || null\">\n    <div class=\"mat-menu-content\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
      styles: ["mat-menu{display:none}.mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px;position:relative}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]::before{display:block;position:absolute;content:\"\";top:0;left:0;bottom:0;right:0}.cdk-high-contrast-active .mat-menu-item{margin-top:1px}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}.mat-menu-submenu-icon{position:absolute;top:50%;right:16px;transform:translateY(-50%);width:5px;height:10px;fill:currentColor}[dir=rtl] .mat-menu-submenu-icon{right:auto;left:16px;transform:translateY(-50%) scaleX(-1)}.cdk-high-contrast-active .mat-menu-submenu-icon{fill:CanvasText}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_MENU_DEFAULT_OPTIONS]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injection token that determines the scroll handling while the menu is open. */


const MAT_MENU_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-menu-scroll-strategy');
/** @docs-private */

function MAT_MENU_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition();
}
/** @docs-private */


const MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_MENU_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.Overlay],
  useFactory: MAT_MENU_SCROLL_STRATEGY_FACTORY
};
/**
 * Default top padding of the menu panel.
 * @deprecated No longer being used. Will be removed.
 * @breaking-change 15.0.0
 */

const MENU_PANEL_TOP_PADDING = 8;
/** Options for binding a passive event listener. */

const passiveEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__.normalizePassiveListenerOptions)({
  passive: true
}); // TODO(andrewseguin): Remove the kebab versions in favor of camelCased attribute selectors

class _MatMenuTriggerBase {
  constructor(_overlay, _element, _viewContainerRef, scrollStrategy, parentMenu, // `MatMenuTrigger` is commonly used in combination with a `MatMenuItem`.
  // tslint:disable-next-line: lightweight-tokens
  _menuItemInstance, _dir, _focusMonitor, _ngZone) {
    this._overlay = _overlay;
    this._element = _element;
    this._viewContainerRef = _viewContainerRef;
    this._menuItemInstance = _menuItemInstance;
    this._dir = _dir;
    this._focusMonitor = _focusMonitor;
    this._ngZone = _ngZone;
    this._overlayRef = null;
    this._menuOpen = false;
    this._closingActionsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription.EMPTY;
    this._hoverSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription.EMPTY;
    this._menuCloseSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription.EMPTY;
    /**
     * Handles touch start events on the trigger.
     * Needs to be an arrow function so we can easily use addEventListener and removeEventListener.
     */

    this._handleTouchStart = event => {
      if (!(0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.isFakeTouchstartFromScreenReader)(event)) {
        this._openedBy = 'touch';
      }
    }; // Tracking input type is necessary so it's possible to only auto-focus
    // the first item of the list when the menu is opened via the keyboard


    this._openedBy = undefined;
    /**
     * Whether focus should be restored when the menu is closed.
     * Note that disabling this option can have accessibility implications
     * and it's up to you to manage focus, if you decide to turn it off.
     */

    this.restoreFocus = true;
    /** Event emitted when the associated menu is opened. */

    this.menuOpened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Event emitted when the associated menu is opened.
     * @deprecated Switch to `menuOpened` instead
     * @breaking-change 8.0.0
     */
    // tslint:disable-next-line:no-output-on-prefix

    this.onMenuOpen = this.menuOpened;
    /** Event emitted when the associated menu is closed. */

    this.menuClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Event emitted when the associated menu is closed.
     * @deprecated Switch to `menuClosed` instead
     * @breaking-change 8.0.0
     */
    // tslint:disable-next-line:no-output-on-prefix

    this.onMenuClose = this.menuClosed;
    this._scrollStrategy = scrollStrategy;
    this._parentMaterialMenu = parentMenu instanceof _MatMenuBase ? parentMenu : undefined;

    _element.nativeElement.addEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);

    if (_menuItemInstance) {
      _menuItemInstance._triggersSubmenu = this.triggersSubmenu();
    }
  }
  /**
   * @deprecated
   * @breaking-change 8.0.0
   */


  get _deprecatedMatMenuTriggerFor() {
    return this.menu;
  }

  set _deprecatedMatMenuTriggerFor(v) {
    this.menu = v;
  }
  /** References the menu instance that the trigger is associated with. */


  get menu() {
    return this._menu;
  }

  set menu(menu) {
    if (menu === this._menu) {
      return;
    }

    this._menu = menu;

    this._menuCloseSubscription.unsubscribe();

    if (menu) {
      if (menu === this._parentMaterialMenu && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throwMatMenuRecursiveError();
      }

      this._menuCloseSubscription = menu.close.subscribe(reason => {
        this._destroyMenu(reason); // If a click closed the menu, we should close the entire chain of nested menus.


        if ((reason === 'click' || reason === 'tab') && this._parentMaterialMenu) {
          this._parentMaterialMenu.closed.emit(reason);
        }
      });
    }
  }

  ngAfterContentInit() {
    this._handleHover();
  }

  ngOnDestroy() {
    if (this._overlayRef) {
      this._overlayRef.dispose();

      this._overlayRef = null;
    }

    this._element.nativeElement.removeEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);

    this._menuCloseSubscription.unsubscribe();

    this._closingActionsSubscription.unsubscribe();

    this._hoverSubscription.unsubscribe();
  }
  /** Whether the menu is open. */


  get menuOpen() {
    return this._menuOpen;
  }
  /** The text direction of the containing app. */


  get dir() {
    return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
  }
  /** Whether the menu triggers a sub-menu or a top-level one. */


  triggersSubmenu() {
    return !!(this._menuItemInstance && this._parentMaterialMenu);
  }
  /** Toggles the menu between the open and closed states. */


  toggleMenu() {
    return this._menuOpen ? this.closeMenu() : this.openMenu();
  }
  /** Opens the menu. */


  openMenu() {
    const menu = this.menu;

    if (this._menuOpen || !menu) {
      return;
    }

    const overlayRef = this._createOverlay(menu);

    const overlayConfig = overlayRef.getConfig();
    const positionStrategy = overlayConfig.positionStrategy;

    this._setPosition(menu, positionStrategy);

    overlayConfig.hasBackdrop = menu.hasBackdrop == null ? !this.triggersSubmenu() : menu.hasBackdrop;
    overlayRef.attach(this._getPortal(menu));

    if (menu.lazyContent) {
      menu.lazyContent.attach(this.menuData);
    }

    this._closingActionsSubscription = this._menuClosingActions().subscribe(() => this.closeMenu());

    this._initMenu(menu);

    if (menu instanceof _MatMenuBase) {
      menu._startAnimation();

      menu._directDescendantItems.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(menu.close)).subscribe(() => {
        // Re-adjust the position without locking when the amount of items
        // changes so that the overlay is allowed to pick a new optimal position.
        positionStrategy.withLockedPosition(false).reapplyLastPosition();
        positionStrategy.withLockedPosition(true);
      });
    }
  }
  /** Closes the menu. */


  closeMenu() {
    this.menu?.close.emit();
  }
  /**
   * Focuses the menu trigger.
   * @param origin Source of the menu trigger's focus.
   */


  focus(origin, options) {
    if (this._focusMonitor && origin) {
      this._focusMonitor.focusVia(this._element, origin, options);
    } else {
      this._element.nativeElement.focus(options);
    }
  }
  /**
   * Updates the position of the menu to ensure that it fits all options within the viewport.
   */


  updatePosition() {
    this._overlayRef?.updatePosition();
  }
  /** Closes the menu and does the necessary cleanup. */


  _destroyMenu(reason) {
    if (!this._overlayRef || !this.menuOpen) {
      return;
    }

    const menu = this.menu;

    this._closingActionsSubscription.unsubscribe();

    this._overlayRef.detach(); // Always restore focus if the user is navigating using the keyboard or the menu was opened
    // programmatically. We don't restore for non-root triggers, because it can prevent focus
    // from making it back to the root trigger when closing a long chain of menus by clicking
    // on the backdrop.


    if (this.restoreFocus && (reason === 'keydown' || !this._openedBy || !this.triggersSubmenu())) {
      this.focus(this._openedBy);
    }

    this._openedBy = undefined;

    if (menu instanceof _MatMenuBase) {
      menu._resetAnimation();

      if (menu.lazyContent) {
        // Wait for the exit animation to finish before detaching the content.
        menu._animationDone.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(event => event.toState === 'void'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1), // Interrupt if the content got re-attached.
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(menu.lazyContent._attached)).subscribe({
          next: () => menu.lazyContent.detach(),
          // No matter whether the content got re-attached, reset the menu.
          complete: () => this._setIsMenuOpen(false)
        });
      } else {
        this._setIsMenuOpen(false);
      }
    } else {
      this._setIsMenuOpen(false);

      menu?.lazyContent?.detach();
    }
  }
  /**
   * This method sets the menu state to open and focuses the first item if
   * the menu was opened via the keyboard.
   */


  _initMenu(menu) {
    menu.parentMenu = this.triggersSubmenu() ? this._parentMaterialMenu : undefined;
    menu.direction = this.dir;

    this._setMenuElevation(menu);

    menu.focusFirstItem(this._openedBy || 'program');

    this._setIsMenuOpen(true);
  }
  /** Updates the menu elevation based on the amount of parent menus that it has. */


  _setMenuElevation(menu) {
    if (menu.setElevation) {
      let depth = 0;
      let parentMenu = menu.parentMenu;

      while (parentMenu) {
        depth++;
        parentMenu = parentMenu.parentMenu;
      }

      menu.setElevation(depth);
    }
  } // set state rather than toggle to support triggers sharing a menu


  _setIsMenuOpen(isOpen) {
    this._menuOpen = isOpen;
    this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();

    if (this.triggersSubmenu()) {
      this._menuItemInstance._setHighlighted(isOpen);
    }
  }
  /**
   * This method creates the overlay from the provided menu's template and saves its
   * OverlayRef so that it can be attached to the DOM when openMenu is called.
   */


  _createOverlay(menu) {
    if (!this._overlayRef) {
      const config = this._getOverlayConfig(menu);

      this._subscribeToPositions(menu, config.positionStrategy);

      this._overlayRef = this._overlay.create(config); // Consume the `keydownEvents` in order to prevent them from going to another overlay.
      // Ideally we'd also have our keyboard event logic in here, however doing so will
      // break anybody that may have implemented the `MatMenuPanel` themselves.

      this._overlayRef.keydownEvents().subscribe();
    }

    return this._overlayRef;
  }
  /**
   * This method builds the configuration object needed to create the overlay, the OverlayState.
   * @returns OverlayConfig
   */


  _getOverlayConfig(menu) {
    return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.OverlayConfig({
      positionStrategy: this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn('.mat-menu-panel, .mat-mdc-menu-panel'),
      backdropClass: menu.backdropClass || 'cdk-overlay-transparent-backdrop',
      panelClass: menu.overlayPanelClass,
      scrollStrategy: this._scrollStrategy(),
      direction: this._dir
    });
  }
  /**
   * Listens to changes in the position of the overlay and sets the correct classes
   * on the menu based on the new position. This ensures the animation origin is always
   * correct, even if a fallback position is used for the overlay.
   */


  _subscribeToPositions(menu, position) {
    if (menu.setPositionClasses) {
      position.positionChanges.subscribe(change => {
        const posX = change.connectionPair.overlayX === 'start' ? 'after' : 'before';
        const posY = change.connectionPair.overlayY === 'top' ? 'below' : 'above'; // @breaking-change 15.0.0 Remove null check for `ngZone`.
        // `positionChanges` fires outside of the `ngZone` and `setPositionClasses` might be
        // updating something in the view so we need to bring it back in.

        if (this._ngZone) {
          this._ngZone.run(() => menu.setPositionClasses(posX, posY));
        } else {
          menu.setPositionClasses(posX, posY);
        }
      });
    }
  }
  /**
   * Sets the appropriate positions on a position strategy
   * so the overlay connects with the trigger correctly.
   * @param positionStrategy Strategy whose position to update.
   */


  _setPosition(menu, positionStrategy) {
    let [originX, originFallbackX] = menu.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'];
    let [overlayY, overlayFallbackY] = menu.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'];
    let [originY, originFallbackY] = [overlayY, overlayFallbackY];
    let [overlayX, overlayFallbackX] = [originX, originFallbackX];
    let offsetY = 0;

    if (this.triggersSubmenu()) {
      // When the menu is a sub-menu, it should always align itself
      // to the edges of the trigger, instead of overlapping it.
      overlayFallbackX = originX = menu.xPosition === 'before' ? 'start' : 'end';
      originFallbackX = overlayX = originX === 'end' ? 'start' : 'end';

      if (this._parentMaterialMenu) {
        if (this._parentInnerPadding == null) {
          const firstItem = this._parentMaterialMenu.items.first;
          this._parentInnerPadding = firstItem ? firstItem._getHostElement().offsetTop : 0;
        }

        offsetY = overlayY === 'bottom' ? this._parentInnerPadding : -this._parentInnerPadding;
      }
    } else if (!menu.overlapTrigger) {
      originY = overlayY === 'top' ? 'bottom' : 'top';
      originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';
    }

    positionStrategy.withPositions([{
      originX,
      originY,
      overlayX,
      overlayY,
      offsetY
    }, {
      originX: originFallbackX,
      originY,
      overlayX: overlayFallbackX,
      overlayY,
      offsetY
    }, {
      originX,
      originY: originFallbackY,
      overlayX,
      overlayY: overlayFallbackY,
      offsetY: -offsetY
    }, {
      originX: originFallbackX,
      originY: originFallbackY,
      overlayX: overlayFallbackX,
      overlayY: overlayFallbackY,
      offsetY: -offsetY
    }]);
  }
  /** Returns a stream that emits whenever an action that should close the menu occurs. */


  _menuClosingActions() {
    const backdrop = this._overlayRef.backdropClick();

    const detachments = this._overlayRef.detachments();

    const parentClose = this._parentMaterialMenu ? this._parentMaterialMenu.closed : (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.of)();
    const hover = this._parentMaterialMenu ? this._parentMaterialMenu._hovered().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(active => active !== this._menuItemInstance), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(() => this._menuOpen)) : (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.of)();
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(backdrop, parentClose, hover, detachments);
  }
  /** Handles mouse presses on the trigger. */


  _handleMousedown(event) {
    if (!(0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.isFakeMousedownFromScreenReader)(event)) {
      // Since right or middle button clicks won't trigger the `click` event,
      // we shouldn't consider the menu as opened by mouse in those cases.
      this._openedBy = event.button === 0 ? 'mouse' : undefined; // Since clicking on the trigger won't close the menu if it opens a sub-menu,
      // we should prevent focus from moving onto it via click to avoid the
      // highlight from lingering on the menu item.

      if (this.triggersSubmenu()) {
        event.preventDefault();
      }
    }
  }
  /** Handles key presses on the trigger. */


  _handleKeydown(event) {
    const keyCode = event.keyCode; // Pressing enter on the trigger will trigger the click handler later.

    if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.ENTER || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.SPACE) {
      this._openedBy = 'keyboard';
    }

    if (this.triggersSubmenu() && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.RIGHT_ARROW && this.dir === 'ltr' || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.LEFT_ARROW && this.dir === 'rtl')) {
      this._openedBy = 'keyboard';
      this.openMenu();
    }
  }
  /** Handles click events on the trigger. */


  _handleClick(event) {
    if (this.triggersSubmenu()) {
      // Stop event propagation to avoid closing the parent menu.
      event.stopPropagation();
      this.openMenu();
    } else {
      this.toggleMenu();
    }
  }
  /** Handles the cases where the user hovers over the trigger. */


  _handleHover() {
    // Subscribe to changes in the hovered item in order to toggle the panel.
    if (!this.triggersSubmenu() || !this._parentMaterialMenu) {
      return;
    }

    this._hoverSubscription = this._parentMaterialMenu._hovered() // Since we might have multiple competing triggers for the same menu (e.g. a sub-menu
    // with different data and triggers), we have to delay it by a tick to ensure that
    // it won't be closed immediately after it is opened.
    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(active => active === this._menuItemInstance && !active.disabled), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.delay)(0, rxjs__WEBPACK_IMPORTED_MODULE_20__.asap)).subscribe(() => {
      this._openedBy = 'mouse'; // If the same menu is used between multiple triggers, it might still be animating
      // while the new trigger tries to re-open it. Wait for the animation to finish
      // before doing so. Also interrupt if the user moves to another item.

      if (this.menu instanceof _MatMenuBase && this.menu._isAnimating) {
        // We need the `delay(0)` here in order to avoid
        // 'changed after checked' errors in some cases. See #12194.
        this.menu._animationDone.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.delay)(0, rxjs__WEBPACK_IMPORTED_MODULE_20__.asap), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._parentMaterialMenu._hovered())).subscribe(() => this.openMenu());
      } else {
        this.openMenu();
      }
    });
  }
  /** Gets the portal that should be attached to the overlay. */


  _getPortal(menu) {
    // Note that we can avoid this check by keeping the portal on the menu panel.
    // While it would be cleaner, we'd have to introduce another required method on
    // `MatMenuPanel`, making it harder to consume.
    if (!this._portal || this._portal.templateRef !== menu.templateRef) {
      this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__.TemplatePortal(menu.templateRef, this._viewContainerRef);
    }

    return this._portal;
  }

}

_MatMenuTriggerBase.ɵfac = function _MatMenuTriggerBase_Factory(t) {
  return new (t || _MatMenuTriggerBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_MENU_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_MENU_PANEL, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatMenuItem, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

_MatMenuTriggerBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatMenuTriggerBase,
  hostVars: 3,
  hostBindings: function _MatMenuTriggerBase_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function _MatMenuTriggerBase_click_HostBindingHandler($event) {
        return ctx._handleClick($event);
      })("mousedown", function _MatMenuTriggerBase_mousedown_HostBindingHandler($event) {
        return ctx._handleMousedown($event);
      })("keydown", function _MatMenuTriggerBase_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-haspopup", ctx.menu ? "menu" : null)("aria-expanded", ctx.menuOpen || null)("aria-controls", ctx.menuOpen ? ctx.menu.panelId : null);
    }
  },
  inputs: {
    _deprecatedMatMenuTriggerFor: ["mat-menu-trigger-for", "_deprecatedMatMenuTriggerFor"],
    menu: ["matMenuTriggerFor", "menu"],
    menuData: ["matMenuTriggerData", "menuData"],
    restoreFocus: ["matMenuTriggerRestoreFocus", "restoreFocus"]
  },
  outputs: {
    menuOpened: "menuOpened",
    onMenuOpen: "onMenuOpen",
    menuClosed: "menuClosed",
    onMenuClose: "onMenuClose"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatMenuTriggerBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      host: {
        '[attr.aria-haspopup]': 'menu ? "menu" : null',
        '[attr.aria-expanded]': 'menuOpen || null',
        '[attr.aria-controls]': 'menuOpen ? menu.panelId : null',
        '(click)': '_handleClick($event)',
        '(mousedown)': '_handleMousedown($event)',
        '(keydown)': '_handleKeydown($event)'
      }
    }]
  }], function () {
    return [{
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.Overlay
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_MENU_SCROLL_STRATEGY]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_MENU_PANEL]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: MatMenuItem,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.FocusMonitor
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    _deprecatedMatMenuTriggerFor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mat-menu-trigger-for']
    }],
    menu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matMenuTriggerFor']
    }],
    menuData: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matMenuTriggerData']
    }],
    restoreFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matMenuTriggerRestoreFocus']
    }],
    menuOpened: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMenuOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    menuClosed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMenuClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/** Directive applied to an element that should trigger a `mat-menu`. */


class MatMenuTrigger extends _MatMenuTriggerBase {}

MatMenuTrigger.ɵfac = /* @__PURE__ */function () {
  let ɵMatMenuTrigger_BaseFactory;
  return function MatMenuTrigger_Factory(t) {
    return (ɵMatMenuTrigger_BaseFactory || (ɵMatMenuTrigger_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatMenuTrigger)))(t || MatMenuTrigger);
  };
}();

MatMenuTrigger.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatMenuTrigger,
  selectors: [["", "mat-menu-trigger-for", ""], ["", "matMenuTriggerFor", ""]],
  hostAttrs: [1, "mat-menu-trigger"],
  exportAs: ["matMenuTrigger"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatMenuTrigger, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `[mat-menu-trigger-for], [matMenuTriggerFor]`,
      host: {
        'class': 'mat-menu-trigger'
      },
      exportAs: 'matMenuTrigger'
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatMenuModule {}

MatMenuModule.ɵfac = function MatMenuModule_Factory(t) {
  return new (t || MatMenuModule)();
};

MatMenuModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatMenuModule
});
MatMenuModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.OverlayModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__.CdkScrollableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatMenuModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.OverlayModule],
      exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__.CdkScrollableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatCommonModule, MatMenu, MatMenuItem, MatMenuTrigger, MatMenuContent],
      declarations: [MatMenu, MatMenuItem, MatMenuTrigger, MatMenuContent],
      providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 6643:
/*!*************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/sidenav.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_DRAWER_DEFAULT_AUTOSIZE": () => (/* binding */ MAT_DRAWER_DEFAULT_AUTOSIZE),
/* harmony export */   "MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY": () => (/* binding */ MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY),
/* harmony export */   "MatDrawer": () => (/* binding */ MatDrawer),
/* harmony export */   "MatDrawerContainer": () => (/* binding */ MatDrawerContainer),
/* harmony export */   "MatDrawerContent": () => (/* binding */ MatDrawerContent),
/* harmony export */   "MatSidenav": () => (/* binding */ MatSidenav),
/* harmony export */   "MatSidenavContainer": () => (/* binding */ MatSidenavContainer),
/* harmony export */   "MatSidenavContent": () => (/* binding */ MatSidenavContent),
/* harmony export */   "MatSidenavModule": () => (/* binding */ MatSidenavModule),
/* harmony export */   "matDrawerAnimations": () => (/* binding */ matDrawerAnimations),
/* harmony export */   "throwMatDuplicatedDrawerError": () => (/* binding */ throwMatDuplicatedDrawerError)
/* harmony export */ });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ 6328);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ 2560);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/a11y */ 4218);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/bidi */ 2867);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/coercion */ 8971);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/keycodes */ 8456);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/platform */ 9107);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 8623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9361);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 823);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 4851);
















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Animations used by the Material drawers.
 * @docs-private
 */

const _c0 = ["*"];
const _c1 = ["content"];

function MatDrawerContainer_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatDrawerContainer_div_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2._onBackdropClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-drawer-shown", ctx_r0._isShowingBackdrop());
  }
}

function MatDrawerContainer_mat_drawer_content_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

const _c2 = [[["mat-drawer"]], [["mat-drawer-content"]], "*"];
const _c3 = ["mat-drawer", "mat-drawer-content", "*"];

function MatSidenavContainer_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatSidenavContainer_div_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2._onBackdropClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-drawer-shown", ctx_r0._isShowingBackdrop());
  }
}

function MatSidenavContainer_mat_sidenav_content_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

const _c4 = [[["mat-sidenav"]], [["mat-sidenav-content"]], "*"];
const _c5 = ["mat-sidenav", "mat-sidenav-content", "*"];
const _c6 = ".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer[style*=\"visibility: hidden\"]{display:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}";
const matDrawerAnimations = {
  /** Animation that slides a drawer in and out. */
  transformDrawer: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('transform', [// We remove the `transform` here completely, rather than setting it to zero, because:
  // 1. Having a transform can cause elements with ripples or an animated
  //    transform to shift around in Chrome with an RTL layout (see #10023).
  // 2. 3d transforms causes text to appear blurry on IE and Edge.
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('open, open-instant', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    'transform': 'none',
    'visibility': 'visible'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    // Avoids the shadow showing up when closed in SSR.
    'box-shadow': 'none',
    'visibility': 'hidden'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => open-instant', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('0ms')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void <=> open, open-instant => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('400ms cubic-bezier(0.25, 0.8, 0.25, 1)'))])
};
/**
 * Throws an exception when two MatDrawer are matching the same position.
 * @docs-private
 */

function throwMatDuplicatedDrawerError(position) {
  throw Error(`A drawer was already declared for 'position="${position}"'`);
}
/** Configures whether drawers should use auto sizing by default. */


const MAT_DRAWER_DEFAULT_AUTOSIZE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_DRAWER_DEFAULT_AUTOSIZE', {
  providedIn: 'root',
  factory: MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY
});
/**
 * Used to provide a drawer container to a drawer while avoiding circular references.
 * @docs-private
 */

const MAT_DRAWER_CONTAINER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_DRAWER_CONTAINER');
/** @docs-private */

function MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY() {
  return false;
}

class MatDrawerContent extends _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollable {
  constructor(_changeDetectorRef, _container, elementRef, scrollDispatcher, ngZone) {
    super(elementRef, scrollDispatcher, ngZone);
    this._changeDetectorRef = _changeDetectorRef;
    this._container = _container;
  }

  ngAfterContentInit() {
    this._container._contentMarginChanges.subscribe(() => {
      this._changeDetectorRef.markForCheck();
    });
  }

}

MatDrawerContent.ɵfac = function MatDrawerContent_Factory(t) {
  return new (t || MatDrawerContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatDrawerContainer)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

MatDrawerContent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatDrawerContent,
  selectors: [["mat-drawer-content"]],
  hostAttrs: [1, "mat-drawer-content"],
  hostVars: 4,
  hostBindings: function MatDrawerContent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", ctx._container._contentMargins.left, "px")("margin-right", ctx._container._contentMargins.right, "px");
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollable,
    useExisting: MatDrawerContent
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function MatDrawerContent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDrawerContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-drawer-content',
      template: '<ng-content></ng-content>',
      host: {
        'class': 'mat-drawer-content',
        '[style.margin-left.px]': '_container._contentMargins.left',
        '[style.margin-right.px]': '_container._contentMargins.right'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      providers: [{
        provide: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollable,
        useExisting: MatDrawerContent
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: MatDrawerContainer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatDrawerContainer)]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.ScrollDispatcher
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, null);
})();
/**
 * This component corresponds to a drawer that can be opened on the drawer container.
 */


class MatDrawer {
  constructor(_elementRef, _focusTrapFactory, _focusMonitor, _platform, _ngZone, _interactivityChecker, _doc, _container) {
    this._elementRef = _elementRef;
    this._focusTrapFactory = _focusTrapFactory;
    this._focusMonitor = _focusMonitor;
    this._platform = _platform;
    this._ngZone = _ngZone;
    this._interactivityChecker = _interactivityChecker;
    this._doc = _doc;
    this._container = _container;
    this._elementFocusedBeforeDrawerWasOpened = null;
    /** Whether the drawer is initialized. Used for disabling the initial animation. */

    this._enableAnimations = false;
    this._position = 'start';
    this._mode = 'over';
    this._disableClose = false;
    this._opened = false;
    /** Emits whenever the drawer has started animating. */

    this._animationStarted = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    /** Emits whenever the drawer is done animating. */

    this._animationEnd = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    /** Current state of the sidenav animation. */

    this._animationState = 'void';
    /** Event emitted when the drawer open state is changed. */

    this.openedChange = // Note this has to be async in order to avoid some issues with two-bindings (see #8872).
    new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(
    /* isAsync */
    true);
    /** Event emitted when the drawer has been opened. */

    this._openedStream = this.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(o => o), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => {}));
    /** Event emitted when the drawer has started opening. */

    this.openedStart = this._animationStarted.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(e => e.fromState !== e.toState && e.toState.indexOf('open') === 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mapTo)(undefined));
    /** Event emitted when the drawer has been closed. */

    this._closedStream = this.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(o => !o), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => {}));
    /** Event emitted when the drawer has started closing. */

    this.closedStart = this._animationStarted.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(e => e.fromState !== e.toState && e.toState === 'void'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mapTo)(undefined));
    /** Emits when the component is destroyed. */

    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    /** Event emitted when the drawer's position changes. */
    // tslint:disable-next-line:no-output-on-prefix

    this.onPositionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An observable that emits when the drawer mode changes. This is used by the drawer container to
     * to know when to when the mode changes so it can adapt the margins on the content.
     */

    this._modeChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.openedChange.subscribe(opened => {
      if (opened) {
        if (this._doc) {
          this._elementFocusedBeforeDrawerWasOpened = this._doc.activeElement;
        }

        this._takeFocus();
      } else if (this._isFocusWithinDrawer()) {
        this._restoreFocus(this._openedVia || 'program');
      }
    });
    /**
     * Listen to `keydown` events outside the zone so that change detection is not run every
     * time a key is pressed. Instead we re-enter the zone only if the `ESC` key is pressed
     * and we don't have close disabled.
     */

    this._ngZone.runOutsideAngular(() => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(this._elementRef.nativeElement, 'keydown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(event => {
        return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.ESCAPE && !this.disableClose && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.hasModifierKey)(event);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(event => this._ngZone.run(() => {
        this.close();
        event.stopPropagation();
        event.preventDefault();
      }));
    }); // We need a Subject with distinctUntilChanged, because the `done` event
    // fires twice on some browsers. See https://github.com/angular/angular/issues/24084


    this._animationEnd.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)((x, y) => {
      return x.fromState === y.fromState && x.toState === y.toState;
    })).subscribe(event => {
      const {
        fromState,
        toState
      } = event;

      if (toState.indexOf('open') === 0 && fromState === 'void' || toState === 'void' && fromState.indexOf('open') === 0) {
        this.openedChange.emit(this._opened);
      }
    });
  }
  /** The side that the drawer is attached to. */


  get position() {
    return this._position;
  }

  set position(value) {
    // Make sure we have a valid value.
    value = value === 'end' ? 'end' : 'start';

    if (value !== this._position) {
      // Static inputs in Ivy are set before the element is in the DOM.
      if (this._isAttached) {
        this._updatePositionInParent(value);
      }

      this._position = value;
      this.onPositionChanged.emit();
    }
  }
  /** Mode of the drawer; one of 'over', 'push' or 'side'. */


  get mode() {
    return this._mode;
  }

  set mode(value) {
    this._mode = value;

    this._updateFocusTrapState();

    this._modeChanged.next();
  }
  /** Whether the drawer can be closed with the escape key or by clicking on the backdrop. */


  get disableClose() {
    return this._disableClose;
  }

  set disableClose(value) {
    this._disableClose = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value);
  }
  /**
   * Whether the drawer should focus the first focusable element automatically when opened.
   * Defaults to false in when `mode` is set to `side`, otherwise defaults to `true`. If explicitly
   * enabled, focus will be moved into the sidenav in `side` mode as well.
   * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or AutoFocusTarget
   * instead.
   */


  get autoFocus() {
    const value = this._autoFocus; // Note that usually we don't allow autoFocus to be set to `first-tabbable` in `side` mode,
    // because we don't know how the sidenav is being used, but in some cases it still makes
    // sense to do it. The consumer can explicitly set `autoFocus`.

    if (value == null) {
      if (this.mode === 'side') {
        return 'dialog';
      } else {
        return 'first-tabbable';
      }
    }

    return value;
  }

  set autoFocus(value) {
    if (value === 'true' || value === 'false' || value == null) {
      value = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value);
    }

    this._autoFocus = value;
  }
  /**
   * Whether the drawer is opened. We overload this because we trigger an event when it
   * starts or end.
   */


  get opened() {
    return this._opened;
  }

  set opened(value) {
    this.toggle((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value));
  }
  /**
   * Focuses the provided element. If the element is not focusable, it will add a tabIndex
   * attribute to forcefully focus it. The attribute is removed after focus is moved.
   * @param element The element to focus.
   */


  _forceFocus(element, options) {
    if (!this._interactivityChecker.isFocusable(element)) {
      element.tabIndex = -1; // The tabindex attribute should be removed to avoid navigating to that element again

      this._ngZone.runOutsideAngular(() => {
        const callback = () => {
          element.removeEventListener('blur', callback);
          element.removeEventListener('mousedown', callback);
          element.removeAttribute('tabindex');
        };

        element.addEventListener('blur', callback);
        element.addEventListener('mousedown', callback);
      });
    }

    element.focus(options);
  }
  /**
   * Focuses the first element that matches the given selector within the focus trap.
   * @param selector The CSS selector for the element to set focus to.
   */


  _focusByCssSelector(selector, options) {
    let elementToFocus = this._elementRef.nativeElement.querySelector(selector);

    if (elementToFocus) {
      this._forceFocus(elementToFocus, options);
    }
  }
  /**
   * Moves focus into the drawer. Note that this works even if
   * the focus trap is disabled in `side` mode.
   */


  _takeFocus() {
    if (!this._focusTrap) {
      return;
    }

    const element = this._elementRef.nativeElement; // When autoFocus is not on the sidenav, if the element cannot be focused or does
    // not exist, focus the sidenav itself so the keyboard navigation still works.
    // We need to check that `focus` is a function due to Universal.

    switch (this.autoFocus) {
      case false:
      case 'dialog':
        return;

      case true:
      case 'first-tabbable':
        this._focusTrap.focusInitialElementWhenReady().then(hasMovedFocus => {
          if (!hasMovedFocus && typeof this._elementRef.nativeElement.focus === 'function') {
            element.focus();
          }
        });

        break;

      case 'first-heading':
        this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');

        break;

      default:
        this._focusByCssSelector(this.autoFocus);

        break;
    }
  }
  /**
   * Restores focus to the element that was originally focused when the drawer opened.
   * If no element was focused at that time, the focus will be restored to the drawer.
   */


  _restoreFocus(focusOrigin) {
    if (this.autoFocus === 'dialog') {
      return;
    }

    if (this._elementFocusedBeforeDrawerWasOpened) {
      this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened, focusOrigin);
    } else {
      this._elementRef.nativeElement.blur();
    }

    this._elementFocusedBeforeDrawerWasOpened = null;
  }
  /** Whether focus is currently within the drawer. */


  _isFocusWithinDrawer() {
    const activeEl = this._doc.activeElement;
    return !!activeEl && this._elementRef.nativeElement.contains(activeEl);
  }

  ngAfterViewInit() {
    this._isAttached = true;
    this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);

    this._updateFocusTrapState(); // Only update the DOM position when the sidenav is positioned at
    // the end since we project the sidenav before the content by default.


    if (this._position === 'end') {
      this._updatePositionInParent('end');
    }
  }

  ngAfterContentChecked() {
    // Enable the animations after the lifecycle hooks have run, in order to avoid animating
    // drawers that are open by default. When we're on the server, we shouldn't enable the
    // animations, because we don't want the drawer to animate the first time the user sees
    // the page.
    if (this._platform.isBrowser) {
      this._enableAnimations = true;
    }
  }

  ngOnDestroy() {
    if (this._focusTrap) {
      this._focusTrap.destroy();
    }

    this._anchor?.remove();
    this._anchor = null;

    this._animationStarted.complete();

    this._animationEnd.complete();

    this._modeChanged.complete();

    this._destroyed.next();

    this._destroyed.complete();
  }
  /**
   * Open the drawer.
   * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
   * Used for focus management after the sidenav is closed.
   */


  open(openedVia) {
    return this.toggle(true, openedVia);
  }
  /** Close the drawer. */


  close() {
    return this.toggle(false);
  }
  /** Closes the drawer with context that the backdrop was clicked. */


  _closeViaBackdropClick() {
    // If the drawer is closed upon a backdrop click, we always want to restore focus. We
    // don't need to check whether focus is currently in the drawer, as clicking on the
    // backdrop causes blurs the active element.
    return this._setOpen(
    /* isOpen */
    false,
    /* restoreFocus */
    true, 'mouse');
  }
  /**
   * Toggle this drawer.
   * @param isOpen Whether the drawer should be open.
   * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
   * Used for focus management after the sidenav is closed.
   */


  toggle(isOpen = !this.opened, openedVia) {
    // If the focus is currently inside the drawer content and we are closing the drawer,
    // restore the focus to the initially focused element (when the drawer opened).
    if (isOpen && openedVia) {
      this._openedVia = openedVia;
    }

    const result = this._setOpen(isOpen,
    /* restoreFocus */
    !isOpen && this._isFocusWithinDrawer(), this._openedVia || 'program');

    if (!isOpen) {
      this._openedVia = null;
    }

    return result;
  }
  /**
   * Toggles the opened state of the drawer.
   * @param isOpen Whether the drawer should open or close.
   * @param restoreFocus Whether focus should be restored on close.
   * @param focusOrigin Origin to use when restoring focus.
   */


  _setOpen(isOpen, restoreFocus, focusOrigin) {
    this._opened = isOpen;

    if (isOpen) {
      this._animationState = this._enableAnimations ? 'open' : 'open-instant';
    } else {
      this._animationState = 'void';

      if (restoreFocus) {
        this._restoreFocus(focusOrigin);
      }
    }

    this._updateFocusTrapState();

    return new Promise(resolve => {
      this.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(open => resolve(open ? 'open' : 'close'));
    });
  }

  _getWidth() {
    return this._elementRef.nativeElement ? this._elementRef.nativeElement.offsetWidth || 0 : 0;
  }
  /** Updates the enabled state of the focus trap. */


  _updateFocusTrapState() {
    if (this._focusTrap) {
      // The focus trap is only enabled when the drawer is open in any mode other than side.
      this._focusTrap.enabled = this.opened && this.mode !== 'side';
    }
  }
  /**
   * Updates the position of the drawer in the DOM. We need to move the element around ourselves
   * when it's in the `end` position so that it comes after the content and the visual order
   * matches the tab order. We also need to be able to move it back to `start` if the sidenav
   * started off as `end` and was changed to `start`.
   */


  _updatePositionInParent(newPosition) {
    const element = this._elementRef.nativeElement;
    const parent = element.parentNode;

    if (newPosition === 'end') {
      if (!this._anchor) {
        this._anchor = this._doc.createComment('mat-drawer-anchor');
        parent.insertBefore(this._anchor, element);
      }

      parent.appendChild(element);
    } else if (this._anchor) {
      this._anchor.parentNode.insertBefore(element, this._anchor);
    }
  }

}

MatDrawer.ɵfac = function MatDrawer_Factory(t) {
  return new (t || MatDrawer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_15__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DRAWER_CONTAINER, 8));
};

MatDrawer.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatDrawer,
  selectors: [["mat-drawer"]],
  viewQuery: function MatDrawer_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._content = _t.first);
    }
  },
  hostAttrs: ["tabIndex", "-1", 1, "mat-drawer"],
  hostVars: 12,
  hostBindings: function MatDrawer_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostListener"]("@transform.start", function MatDrawer_animation_transform_start_HostBindingHandler($event) {
        return ctx._animationStarted.next($event);
      })("@transform.done", function MatDrawer_animation_transform_done_HostBindingHandler($event) {
        return ctx._animationEnd.next($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("align", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@transform", ctx._animationState);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-drawer-end", ctx.position === "end")("mat-drawer-over", ctx.mode === "over")("mat-drawer-push", ctx.mode === "push")("mat-drawer-side", ctx.mode === "side")("mat-drawer-opened", ctx.opened);
    }
  },
  inputs: {
    position: "position",
    mode: "mode",
    disableClose: "disableClose",
    autoFocus: "autoFocus",
    opened: "opened"
  },
  outputs: {
    openedChange: "openedChange",
    _openedStream: "opened",
    openedStart: "openedStart",
    _closedStream: "closed",
    closedStart: "closedStart",
    onPositionChanged: "positionChanged"
  },
  exportAs: ["matDrawer"],
  ngContentSelectors: _c0,
  decls: 3,
  vars: 0,
  consts: [["cdkScrollable", "", 1, "mat-drawer-inner-container"], ["content", ""]],
  template: function MatDrawer_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollable],
  encapsulation: 2,
  data: {
    animation: [matDrawerAnimations.transformDrawer]
  },
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDrawer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-drawer',
      exportAs: 'matDrawer',
      animations: [matDrawerAnimations.transformDrawer],
      host: {
        'class': 'mat-drawer',
        // must prevent the browser from aligning text based on value
        '[attr.align]': 'null',
        '[class.mat-drawer-end]': 'position === "end"',
        '[class.mat-drawer-over]': 'mode === "over"',
        '[class.mat-drawer-push]': 'mode === "push"',
        '[class.mat-drawer-side]': 'mode === "side"',
        '[class.mat-drawer-opened]': 'opened',
        'tabIndex': '-1',
        '[@transform]': '_animationState',
        '(@transform.start)': '_animationStarted.next($event)',
        '(@transform.done)': '_animationEnd.next($event)'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: "<div class=\"mat-drawer-inner-container\" cdkScrollable #content>\r\n  <ng-content></ng-content>\r\n</div>\r\n"
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.FocusTrapFactory
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.FocusMonitor
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.InteractivityChecker
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.DOCUMENT]
      }]
    }, {
      type: MatDrawerContainer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_DRAWER_CONTAINER]
      }]
    }];
  }, {
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    mode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disableClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    opened: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    openedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _openedStream: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['opened']
    }],
    openedStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _closedStream: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['closed']
    }],
    closedStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onPositionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['positionChanged']
    }],
    _content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['content']
    }]
  });
})();
/**
 * `<mat-drawer-container>` component.
 *
 * This is the parent component to one or two `<mat-drawer>`s that validates the state internally
 * and coordinates the backdrop and content styling.
 */


class MatDrawerContainer {
  constructor(_dir, _element, _ngZone, _changeDetectorRef, viewportRuler, defaultAutosize = false, _animationMode) {
    this._dir = _dir;
    this._element = _element;
    this._ngZone = _ngZone;
    this._changeDetectorRef = _changeDetectorRef;
    this._animationMode = _animationMode;
    /** Drawers that belong to this container. */

    this._drawers = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
    /** Event emitted when the drawer backdrop is clicked. */

    this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits when the component is destroyed. */

    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    /** Emits on every ngDoCheck. Used for debouncing reflows. */

    this._doCheckSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    /**
     * Margins to be applied to the content. These are used to push / shrink the drawer content when a
     * drawer is open. We use margin rather than transform even for push mode because transform breaks
     * fixed position elements inside of the transformed element.
     */

    this._contentMargins = {
      left: null,
      right: null
    };
    this._contentMarginChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject(); // If a `Dir` directive exists up the tree, listen direction changes
    // and update the left/right properties to point to the proper start/end.

    if (_dir) {
      _dir.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(() => {
        this._validateDrawers();

        this.updateContentMargins();
      });
    } // Since the minimum width of the sidenav depends on the viewport width,
    // we need to recompute the margins if the viewport changes.


    viewportRuler.change().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(() => this.updateContentMargins());
    this._autosize = defaultAutosize;
  }
  /** The drawer child with the `start` position. */


  get start() {
    return this._start;
  }
  /** The drawer child with the `end` position. */


  get end() {
    return this._end;
  }
  /**
   * Whether to automatically resize the container whenever
   * the size of any of its drawers changes.
   *
   * **Use at your own risk!** Enabling this option can cause layout thrashing by measuring
   * the drawers on every change detection cycle. Can be configured globally via the
   * `MAT_DRAWER_DEFAULT_AUTOSIZE` token.
   */


  get autosize() {
    return this._autosize;
  }

  set autosize(value) {
    this._autosize = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value);
  }
  /**
   * Whether the drawer container should have a backdrop while one of the sidenavs is open.
   * If explicitly set to `true`, the backdrop will be enabled for drawers in the `side`
   * mode as well.
   */


  get hasBackdrop() {
    if (this._backdropOverride == null) {
      return !this._start || this._start.mode !== 'side' || !this._end || this._end.mode !== 'side';
    }

    return this._backdropOverride;
  }

  set hasBackdrop(value) {
    this._backdropOverride = value == null ? null : (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value);
  }
  /** Reference to the CdkScrollable instance that wraps the scrollable content. */


  get scrollable() {
    return this._userContent || this._content;
  }

  ngAfterContentInit() {
    this._allDrawers.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.startWith)(this._allDrawers), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(drawer => {
      this._drawers.reset(drawer.filter(item => !item._container || item._container === this));

      this._drawers.notifyOnChanges();
    });

    this._drawers.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.startWith)(null)).subscribe(() => {
      this._validateDrawers();

      this._drawers.forEach(drawer => {
        this._watchDrawerToggle(drawer);

        this._watchDrawerPosition(drawer);

        this._watchDrawerMode(drawer);
      });

      if (!this._drawers.length || this._isDrawerOpen(this._start) || this._isDrawerOpen(this._end)) {
        this.updateContentMargins();
      }

      this._changeDetectorRef.markForCheck();
    }); // Avoid hitting the NgZone through the debounce timeout.


    this._ngZone.runOutsideAngular(() => {
      this._doCheckSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.debounceTime)(10), // Arbitrary debounce time, less than a frame at 60fps
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(() => this.updateContentMargins());
    });
  }

  ngOnDestroy() {
    this._contentMarginChanges.complete();

    this._doCheckSubject.complete();

    this._drawers.destroy();

    this._destroyed.next();

    this._destroyed.complete();
  }
  /** Calls `open` of both start and end drawers */


  open() {
    this._drawers.forEach(drawer => drawer.open());
  }
  /** Calls `close` of both start and end drawers */


  close() {
    this._drawers.forEach(drawer => drawer.close());
  }
  /**
   * Recalculates and updates the inline styles for the content. Note that this should be used
   * sparingly, because it causes a reflow.
   */


  updateContentMargins() {
    // 1. For drawers in `over` mode, they don't affect the content.
    // 2. For drawers in `side` mode they should shrink the content. We do this by adding to the
    //    left margin (for left drawer) or right margin (for right the drawer).
    // 3. For drawers in `push` mode the should shift the content without resizing it. We do this by
    //    adding to the left or right margin and simultaneously subtracting the same amount of
    //    margin from the other side.
    let left = 0;
    let right = 0;

    if (this._left && this._left.opened) {
      if (this._left.mode == 'side') {
        left += this._left._getWidth();
      } else if (this._left.mode == 'push') {
        const width = this._left._getWidth();

        left += width;
        right -= width;
      }
    }

    if (this._right && this._right.opened) {
      if (this._right.mode == 'side') {
        right += this._right._getWidth();
      } else if (this._right.mode == 'push') {
        const width = this._right._getWidth();

        right += width;
        left -= width;
      }
    } // If either `right` or `left` is zero, don't set a style to the element. This
    // allows users to specify a custom size via CSS class in SSR scenarios where the
    // measured widths will always be zero. Note that we reset to `null` here, rather
    // than below, in order to ensure that the types in the `if` below are consistent.


    left = left || null;
    right = right || null;

    if (left !== this._contentMargins.left || right !== this._contentMargins.right) {
      this._contentMargins = {
        left,
        right
      }; // Pull back into the NgZone since in some cases we could be outside. We need to be careful
      // to do it only when something changed, otherwise we can end up hitting the zone too often.

      this._ngZone.run(() => this._contentMarginChanges.next(this._contentMargins));
    }
  }

  ngDoCheck() {
    // If users opted into autosizing, do a check every change detection cycle.
    if (this._autosize && this._isPushed()) {
      // Run outside the NgZone, otherwise the debouncer will throw us into an infinite loop.
      this._ngZone.runOutsideAngular(() => this._doCheckSubject.next());
    }
  }
  /**
   * Subscribes to drawer events in order to set a class on the main container element when the
   * drawer is open and the backdrop is visible. This ensures any overflow on the container element
   * is properly hidden.
   */


  _watchDrawerToggle(drawer) {
    drawer._animationStarted.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(event => event.fromState !== event.toState), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._drawers.changes)).subscribe(event => {
      // Set the transition class on the container so that the animations occur. This should not
      // be set initially because animations should only be triggered via a change in state.
      if (event.toState !== 'open-instant' && this._animationMode !== 'NoopAnimations') {
        this._element.nativeElement.classList.add('mat-drawer-transition');
      }

      this.updateContentMargins();

      this._changeDetectorRef.markForCheck();
    });

    if (drawer.mode !== 'side') {
      drawer.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._drawers.changes)).subscribe(() => this._setContainerClass(drawer.opened));
    }
  }
  /**
   * Subscribes to drawer onPositionChanged event in order to
   * re-validate drawers when the position changes.
   */


  _watchDrawerPosition(drawer) {
    if (!drawer) {
      return;
    } // NOTE: We need to wait for the microtask queue to be empty before validating,
    // since both drawers may be swapping positions at the same time.


    drawer.onPositionChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._drawers.changes)).subscribe(() => {
      this._ngZone.onMicrotaskEmpty.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(() => {
        this._validateDrawers();
      });
    });
  }
  /** Subscribes to changes in drawer mode so we can run change detection. */


  _watchDrawerMode(drawer) {
    if (drawer) {
      drawer._modeChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.merge)(this._drawers.changes, this._destroyed))).subscribe(() => {
        this.updateContentMargins();

        this._changeDetectorRef.markForCheck();
      });
    }
  }
  /** Toggles the 'mat-drawer-opened' class on the main 'mat-drawer-container' element. */


  _setContainerClass(isAdd) {
    const classList = this._element.nativeElement.classList;
    const className = 'mat-drawer-container-has-open';

    if (isAdd) {
      classList.add(className);
    } else {
      classList.remove(className);
    }
  }
  /** Validate the state of the drawer children components. */


  _validateDrawers() {
    this._start = this._end = null; // Ensure that we have at most one start and one end drawer.

    this._drawers.forEach(drawer => {
      if (drawer.position == 'end') {
        if (this._end != null && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throwMatDuplicatedDrawerError('end');
        }

        this._end = drawer;
      } else {
        if (this._start != null && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throwMatDuplicatedDrawerError('start');
        }

        this._start = drawer;
      }
    });

    this._right = this._left = null; // Detect if we're LTR or RTL.

    if (this._dir && this._dir.value === 'rtl') {
      this._left = this._end;
      this._right = this._start;
    } else {
      this._left = this._start;
      this._right = this._end;
    }
  }
  /** Whether the container is being pushed to the side by one of the drawers. */


  _isPushed() {
    return this._isDrawerOpen(this._start) && this._start.mode != 'over' || this._isDrawerOpen(this._end) && this._end.mode != 'over';
  }

  _onBackdropClicked() {
    this.backdropClick.emit();

    this._closeModalDrawersViaBackdrop();
  }

  _closeModalDrawersViaBackdrop() {
    // Close all open drawers where closing is not disabled and the mode is not `side`.
    [this._start, this._end].filter(drawer => drawer && !drawer.disableClose && this._canHaveBackdrop(drawer)).forEach(drawer => drawer._closeViaBackdropClick());
  }

  _isShowingBackdrop() {
    return this._isDrawerOpen(this._start) && this._canHaveBackdrop(this._start) || this._isDrawerOpen(this._end) && this._canHaveBackdrop(this._end);
  }

  _canHaveBackdrop(drawer) {
    return drawer.mode !== 'side' || !!this._backdropOverride;
  }

  _isDrawerOpen(drawer) {
    return drawer != null && drawer.opened;
  }

}

MatDrawerContainer.ɵfac = function MatDrawerContainer_Factory(t) {
  return new (t || MatDrawerContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DRAWER_DEFAULT_AUTOSIZE), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
};

MatDrawerContainer.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatDrawerContainer,
  selectors: [["mat-drawer-container"]],
  contentQueries: function MatDrawerContainer_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatDrawerContent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatDrawer, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._content = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._allDrawers = _t);
    }
  },
  viewQuery: function MatDrawerContainer_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatDrawerContent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._userContent = _t.first);
    }
  },
  hostAttrs: [1, "mat-drawer-container"],
  hostVars: 2,
  hostBindings: function MatDrawerContainer_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-drawer-container-explicit-backdrop", ctx._backdropOverride);
    }
  },
  inputs: {
    autosize: "autosize",
    hasBackdrop: "hasBackdrop"
  },
  outputs: {
    backdropClick: "backdropClick"
  },
  exportAs: ["matDrawerContainer"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: MAT_DRAWER_CONTAINER,
    useExisting: MatDrawerContainer
  }])],
  ngContentSelectors: _c3,
  decls: 4,
  vars: 2,
  consts: [["class", "mat-drawer-backdrop", 3, "mat-drawer-shown", "click", 4, "ngIf"], [4, "ngIf"], [1, "mat-drawer-backdrop", 3, "click"]],
  template: function MatDrawerContainer_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatDrawerContainer_div_0_Template, 1, 2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatDrawerContainer_mat_drawer_content_3_Template, 2, 0, "mat-drawer-content", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasBackdrop);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._content);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, MatDrawerContent],
  styles: [".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer[style*=\"visibility: hidden\"]{display:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDrawerContainer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-drawer-container',
      exportAs: 'matDrawerContainer',
      host: {
        'class': 'mat-drawer-container',
        '[class.mat-drawer-container-explicit-backdrop]': '_backdropOverride'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      providers: [{
        provide: MAT_DRAWER_CONTAINER,
        useExisting: MatDrawerContainer
      }],
      template: "<div class=\"mat-drawer-backdrop\" (click)=\"_onBackdropClicked()\" *ngIf=\"hasBackdrop\"\n     [class.mat-drawer-shown]=\"_isShowingBackdrop()\"></div>\n\n<ng-content select=\"mat-drawer\"></ng-content>\n\n<ng-content select=\"mat-drawer-content\">\n</ng-content>\n<mat-drawer-content *ngIf=\"!_content\">\n  <ng-content></ng-content>\n</mat-drawer-content>\n",
      styles: [".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer[style*=\"visibility: hidden\"]{display:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}"]
    }]
  }], function () {
    return [{
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.ViewportRuler
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_DRAWER_DEFAULT_AUTOSIZE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    _allDrawers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MatDrawer, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }],
    _content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatDrawerContent]
    }],
    _userContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [MatDrawerContent]
    }],
    autosize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hasBackdrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    backdropClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatSidenavContent extends MatDrawerContent {
  constructor(changeDetectorRef, container, elementRef, scrollDispatcher, ngZone) {
    super(changeDetectorRef, container, elementRef, scrollDispatcher, ngZone);
  }

}

MatSidenavContent.ɵfac = function MatSidenavContent_Factory(t) {
  return new (t || MatSidenavContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatSidenavContainer)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

MatSidenavContent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatSidenavContent,
  selectors: [["mat-sidenav-content"]],
  hostAttrs: [1, "mat-drawer-content", "mat-sidenav-content"],
  hostVars: 4,
  hostBindings: function MatSidenavContent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", ctx._container._contentMargins.left, "px")("margin-right", ctx._container._contentMargins.right, "px");
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollable,
    useExisting: MatSidenavContent
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function MatSidenavContent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSidenavContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-sidenav-content',
      template: '<ng-content></ng-content>',
      host: {
        'class': 'mat-drawer-content mat-sidenav-content',
        '[style.margin-left.px]': '_container._contentMargins.left',
        '[style.margin-right.px]': '_container._contentMargins.right'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      providers: [{
        provide: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollable,
        useExisting: MatSidenavContent
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: MatSidenavContainer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatSidenavContainer)]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.ScrollDispatcher
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, null);
})();

class MatSidenav extends MatDrawer {
  constructor() {
    super(...arguments);
    this._fixedInViewport = false;
    this._fixedTopGap = 0;
    this._fixedBottomGap = 0;
  }
  /** Whether the sidenav is fixed in the viewport. */


  get fixedInViewport() {
    return this._fixedInViewport;
  }

  set fixedInViewport(value) {
    this._fixedInViewport = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value);
  }
  /**
   * The gap between the top of the sidenav and the top of the viewport when the sidenav is in fixed
   * mode.
   */


  get fixedTopGap() {
    return this._fixedTopGap;
  }

  set fixedTopGap(value) {
    this._fixedTopGap = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceNumberProperty)(value);
  }
  /**
   * The gap between the bottom of the sidenav and the bottom of the viewport when the sidenav is in
   * fixed mode.
   */


  get fixedBottomGap() {
    return this._fixedBottomGap;
  }

  set fixedBottomGap(value) {
    this._fixedBottomGap = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceNumberProperty)(value);
  }

}

MatSidenav.ɵfac = /* @__PURE__ */function () {
  let ɵMatSidenav_BaseFactory;
  return function MatSidenav_Factory(t) {
    return (ɵMatSidenav_BaseFactory || (ɵMatSidenav_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatSidenav)))(t || MatSidenav);
  };
}();

MatSidenav.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatSidenav,
  selectors: [["mat-sidenav"]],
  hostAttrs: ["tabIndex", "-1", 1, "mat-drawer", "mat-sidenav"],
  hostVars: 17,
  hostBindings: function MatSidenav_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("align", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx.fixedInViewport ? ctx.fixedTopGap : null, "px")("bottom", ctx.fixedInViewport ? ctx.fixedBottomGap : null, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-drawer-end", ctx.position === "end")("mat-drawer-over", ctx.mode === "over")("mat-drawer-push", ctx.mode === "push")("mat-drawer-side", ctx.mode === "side")("mat-drawer-opened", ctx.opened)("mat-sidenav-fixed", ctx.fixedInViewport);
    }
  },
  inputs: {
    fixedInViewport: "fixedInViewport",
    fixedTopGap: "fixedTopGap",
    fixedBottomGap: "fixedBottomGap"
  },
  exportAs: ["matSidenav"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c0,
  decls: 3,
  vars: 0,
  consts: [["cdkScrollable", "", 1, "mat-drawer-inner-container"], ["content", ""]],
  template: function MatSidenav_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollable],
  encapsulation: 2,
  data: {
    animation: [matDrawerAnimations.transformDrawer]
  },
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSidenav, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-sidenav',
      exportAs: 'matSidenav',
      animations: [matDrawerAnimations.transformDrawer],
      host: {
        'class': 'mat-drawer mat-sidenav',
        'tabIndex': '-1',
        // must prevent the browser from aligning text based on value
        '[attr.align]': 'null',
        '[class.mat-drawer-end]': 'position === "end"',
        '[class.mat-drawer-over]': 'mode === "over"',
        '[class.mat-drawer-push]': 'mode === "push"',
        '[class.mat-drawer-side]': 'mode === "side"',
        '[class.mat-drawer-opened]': 'opened',
        '[class.mat-sidenav-fixed]': 'fixedInViewport',
        '[style.top.px]': 'fixedInViewport ? fixedTopGap : null',
        '[style.bottom.px]': 'fixedInViewport ? fixedBottomGap : null'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: "<div class=\"mat-drawer-inner-container\" cdkScrollable #content>\r\n  <ng-content></ng-content>\r\n</div>\r\n"
    }]
  }], null, {
    fixedInViewport: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fixedTopGap: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fixedBottomGap: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class MatSidenavContainer extends MatDrawerContainer {}

MatSidenavContainer.ɵfac = /* @__PURE__ */function () {
  let ɵMatSidenavContainer_BaseFactory;
  return function MatSidenavContainer_Factory(t) {
    return (ɵMatSidenavContainer_BaseFactory || (ɵMatSidenavContainer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatSidenavContainer)))(t || MatSidenavContainer);
  };
}();

MatSidenavContainer.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatSidenavContainer,
  selectors: [["mat-sidenav-container"]],
  contentQueries: function MatSidenavContainer_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatSidenavContent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatSidenav, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._content = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._allDrawers = _t);
    }
  },
  hostAttrs: [1, "mat-drawer-container", "mat-sidenav-container"],
  hostVars: 2,
  hostBindings: function MatSidenavContainer_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-drawer-container-explicit-backdrop", ctx._backdropOverride);
    }
  },
  exportAs: ["matSidenavContainer"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: MAT_DRAWER_CONTAINER,
    useExisting: MatSidenavContainer
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c5,
  decls: 4,
  vars: 2,
  consts: [["class", "mat-drawer-backdrop", 3, "mat-drawer-shown", "click", 4, "ngIf"], [4, "ngIf"], [1, "mat-drawer-backdrop", 3, "click"]],
  template: function MatSidenavContainer_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatSidenavContainer_div_0_Template, 1, 2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatSidenavContainer_mat_sidenav_content_3_Template, 2, 0, "mat-sidenav-content", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasBackdrop);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._content);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, MatSidenavContent],
  styles: [_c6],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSidenavContainer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-sidenav-container',
      exportAs: 'matSidenavContainer',
      host: {
        'class': 'mat-drawer-container mat-sidenav-container',
        '[class.mat-drawer-container-explicit-backdrop]': '_backdropOverride'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      providers: [{
        provide: MAT_DRAWER_CONTAINER,
        useExisting: MatSidenavContainer
      }],
      template: "<div class=\"mat-drawer-backdrop\" (click)=\"_onBackdropClicked()\" *ngIf=\"hasBackdrop\"\n     [class.mat-drawer-shown]=\"_isShowingBackdrop()\"></div>\n\n<ng-content select=\"mat-sidenav\"></ng-content>\n\n<ng-content select=\"mat-sidenav-content\">\n</ng-content>\n<mat-sidenav-content *ngIf=\"!_content\">\n  <ng-content></ng-content>\n</mat-sidenav-content>\n",
      styles: [".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer[style*=\"visibility: hidden\"]{display:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}"]
    }]
  }], null, {
    _allDrawers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MatSidenav, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }],
    _content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatSidenavContent]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatSidenavModule {}

MatSidenavModule.ɵfac = function MatSidenavModule_Factory(t) {
  return new (t || MatSidenavModule)();
};

MatSidenavModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatSidenavModule
});
MatSidenavModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatCommonModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollableModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSidenavModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatCommonModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollableModule],
      exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatCommonModule, MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent],
      declarations: [MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 2543:
/*!*************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/toolbar.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatToolbar": () => (/* binding */ MatToolbar),
/* harmony export */   "MatToolbarModule": () => (/* binding */ MatToolbarModule),
/* harmony export */   "MatToolbarRow": () => (/* binding */ MatToolbarRow),
/* harmony export */   "throwToolbarMixedModesError": () => (/* binding */ throwToolbarMixedModesError)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 9107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatToolbar.

/** @docs-private */

const _c0 = ["*", [["mat-toolbar-row"]]];
const _c1 = ["*", "mat-toolbar-row"];

const _MatToolbarBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.mixinColor)(class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }

});

class MatToolbarRow {}

MatToolbarRow.ɵfac = function MatToolbarRow_Factory(t) {
  return new (t || MatToolbarRow)();
};

MatToolbarRow.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: MatToolbarRow,
  selectors: [["mat-toolbar-row"]],
  hostAttrs: [1, "mat-toolbar-row"],
  exportAs: ["matToolbarRow"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatToolbarRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: 'mat-toolbar-row',
      exportAs: 'matToolbarRow',
      host: {
        'class': 'mat-toolbar-row'
      }
    }]
  }], null, null);
})();

class MatToolbar extends _MatToolbarBase {
  constructor(elementRef, _platform, document) {
    super(elementRef);
    this._platform = _platform; // TODO: make the document a required param when doing breaking changes.

    this._document = document;
  }

  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._checkToolbarMixedModes();

      this._toolbarRows.changes.subscribe(() => this._checkToolbarMixedModes());
    }
  }
  /**
   * Throws an exception when developers are attempting to combine the different toolbar row modes.
   */


  _checkToolbarMixedModes() {
    if (this._toolbarRows.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      // Check if there are any other DOM nodes that can display content but aren't inside of
      // a <mat-toolbar-row> element.
      const isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes).filter(node => !(node.classList && node.classList.contains('mat-toolbar-row'))).filter(node => node.nodeType !== (this._document ? this._document.COMMENT_NODE : 8)).some(node => !!(node.textContent && node.textContent.trim()));

      if (isCombinedUsage) {
        throwToolbarMixedModesError();
      }
    }
  }

}

MatToolbar.ɵfac = function MatToolbar_Factory(t) {
  return new (t || MatToolbar)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT));
};

MatToolbar.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MatToolbar,
  selectors: [["mat-toolbar"]],
  contentQueries: function MatToolbar_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatToolbarRow, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._toolbarRows = _t);
    }
  },
  hostAttrs: [1, "mat-toolbar"],
  hostVars: 4,
  hostBindings: function MatToolbar_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-toolbar-multiple-rows", ctx._toolbarRows.length > 0)("mat-toolbar-single-row", ctx._toolbarRows.length === 0);
    }
  },
  inputs: {
    color: "color"
  },
  exportAs: ["matToolbar"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 2,
  vars: 0,
  template: function MatToolbar_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1, 1);
    }
  },
  styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatToolbar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'mat-toolbar',
      exportAs: 'matToolbar',
      inputs: ['color'],
      host: {
        'class': 'mat-toolbar',
        '[class.mat-toolbar-multiple-rows]': '_toolbarRows.length > 0',
        '[class.mat-toolbar-single-row]': '_toolbarRows.length === 0'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      template: "<ng-content></ng-content>\n<ng-content select=\"mat-toolbar-row\"></ng-content>\n",
      styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
      }]
    }];
  }, {
    _toolbarRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [MatToolbarRow, {
        descendants: true
      }]
    }]
  });
})();
/**
 * Throws an exception when attempting to combine the different toolbar row modes.
 * @docs-private
 */


function throwToolbarMixedModesError() {
  throw Error('MatToolbar: Attempting to combine different toolbar modes. ' + 'Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content ' + 'inside of a `<mat-toolbar>` for a single row.');
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatToolbarModule {}

MatToolbarModule.ɵfac = function MatToolbarModule_Factory(t) {
  return new (t || MatToolbarModule)();
};

MatToolbarModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: MatToolbarModule
});
MatToolbarModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatToolbarModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule],
      exports: [MatToolbar, MatToolbarRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule],
      declarations: [MatToolbar, MatToolbarRow]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_layout_layout_module_ts.js.map