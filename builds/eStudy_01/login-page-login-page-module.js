(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-page-login-page-module"],{

/***/ "pT+O":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _validators_password_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validators/password.validator */ "sY96");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _ui_components_ui_header_ui_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ui-components/ui-header/ui-header.component */ "fvR5");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _ui_components_ui_footer_ui_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ui-components/ui-footer/ui-footer.component */ "Wwn5");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");



















function LoginPageComponent_ng_container_9_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Toto u\u017Eivatelsk\u00E9 jm\u00E9no je zabran\u00E9, zkuste jin\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function LoginPageComponent_ng_container_9_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-icon", 16);
} }
function LoginPageComponent_ng_container_9_mat_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-icon", 17);
} }
function LoginPageComponent_ng_container_9_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-icon", 18);
} }
function LoginPageComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "U\u017Eivatelsk\u00E9 jm\u00E9no");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function LoginPageComponent_ng_container_9_Template_input_input_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r12.checkUsername($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, LoginPageComponent_ng_container_9_mat_error_5_Template, 2, 0, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, LoginPageComponent_ng_container_9_mat_icon_6_Template, 1, 0, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, LoginPageComponent_ng_container_9_mat_icon_7_Template, 1, 0, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, LoginPageComponent_ng_container_9_mat_icon_8_Template, 1, 0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r0.form.controls.username == null ? null : ctx_r0.form.controls.username.invalid) && (ctx_r0.form.controls.username.value == null ? null : ctx_r0.form.controls.username.value.length) > 0 && !ctx_r0.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r0.form.controls.username.value == null ? null : ctx_r0.form.controls.username.value.length) > 0 && ctx_r0.isCheckingProperties["username"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r0.form.controls.username.value == null ? null : ctx_r0.form.controls.username.value.length) > 0 && !ctx_r0.isCheckingProperties["username"] && ctx_r0.checkedProperties["username"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r0.form.controls.username.value == null ? null : ctx_r0.form.controls.username.value.length) > 0 && !ctx_r0.isCheckingProperties["username"] && !ctx_r0.checkedProperties["username"]);
} }
function LoginPageComponent_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Tento email se ji\u017E pou\u017E\u00EDv\u00E1, zkuste jin\u00FD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function LoginPageComponent_mat_icon_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-icon", 16);
} }
function LoginPageComponent_mat_icon_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-icon", 17);
} }
function LoginPageComponent_mat_icon_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-icon", 18);
} }
function LoginPageComponent_ng_container_22_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Hesla se neshoduj\u00ED !");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function LoginPageComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Zopakuj heslo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, LoginPageComponent_ng_container_22_mat_error_5_Template, 2, 0, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "T\u0159\u00EDda");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.form["controls"]["reEnterPassword"].invalid);
} }
function LoginPageComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u0160patn\u00E9 p\u0159ihla\u0161ovac\u00ED \u00FAdaje !");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function LoginPageComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginPageComponent_ng_container_25_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r15.doActionBasedOnRoute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " P\u0159ihl\u00E1sit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Nebo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
const REGISTER_FORM = {
    ['username']: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
    ]),
    ['reEnterPassword']: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
    ]),
    ['class']: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4),
    ]),
};
const LOGIN_FORM = {
    ['email']: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
    ]),
    ['password']: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
    ]),
};
class LoginPageComponent {
    constructor(router, authService, userService) {
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.isLogin = this.router.url === '/login' ? true : false;
        this.isCheckingProperties = {
            ['username']: false,
            ['email']: false,
        };
        this.checkedProperties = {
            ['username']: false,
            ['email']: false,
        };
        this.wrongCredentials = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](LOGIN_FORM);
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"]();
    }
    ngOnInit() {
        var _a, _b;
        if (this.isLogin && ((_b = (_a = this.form) === null || _a === void 0 ? void 0 : _a.controls) === null || _b === void 0 ? void 0 : _b.username)) {
            this.removeRegisterFormControls();
        }
        else if (!this.isLogin) {
            this.createRegisterForm();
        }
        this.form.reset();
    }
    doActionBasedOnRoute(register) {
        if (this.isLogin && !register) {
            this.loginUser();
        }
        else if (this.isLogin && register) {
            this.redirectToRegister();
        }
        else {
            this.registerUser();
        }
    }
    createRegisterForm() {
        Object.entries(REGISTER_FORM).forEach(([formControlName, formcontrol]) => {
            this.form.addControl(formControlName, formcontrol);
        });
        this.form.setValidators(_validators_password_validator__WEBPACK_IMPORTED_MODULE_2__["passwordMatcherValidator"]);
    }
    removeRegisterFormControls() {
        Object.keys(REGISTER_FORM).forEach((formControlName) => {
            this.form.removeControl(formControlName);
        });
    }
    redirectToRegister() {
        this.router.navigate(['/register']);
    }
    checkUsername(event) {
        if (!this.isLogin)
            this.checkFromProperties(event, 'username');
    }
    checkEmail(event) {
        if (!this.isLogin)
            this.checkFromProperties(event, 'email');
    }
    checkFromProperties(event, property) {
        if (event) {
            this.isCheckingProperties[property] = true;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(event)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((formChange) => {
                if (formChange) {
                    const propertyParam = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set(property, this.form.value[property]);
                    return this.userService.getUsers(propertyParam);
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe))
                .subscribe((foundUsers) => {
                if ((foundUsers === null || foundUsers === void 0 ? void 0 : foundUsers.length) === 0) {
                    this.checkedProperties[property] = true;
                }
                else {
                    this.checkedProperties[property] = false;
                    this.form['controls'][property].setErrors({ invalid: true });
                }
                this.isCheckingProperties[property] = false;
            });
        }
    }
    loginUser() {
        if (this.form.valid) {
            const user = {
                email: this.form.value.email,
                password: this.form.value.password,
            };
            this.authService
                .authenticateUser(user)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe))
                .subscribe((user) => {
                if (user) {
                    this.router.navigate(['/products']);
                }
            }, (err) => {
                if (err.status === 401) {
                    this.wrongCredentials = true;
                    this.form.reset();
                }
            });
        }
    }
    registerUser() {
        if (this.form.valid) {
            const user = {
                username: this.form.value.username,
                email: this.form.value.email,
                password: this.form.value.password,
                class: this.form.value.class.length > 0 ? this.form.value.class : null,
            };
            this.authService
                .registerUser(user)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe))
                .subscribe((user) => {
                if (user) {
                    this.form.reset();
                    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"](LOGIN_FORM);
                    this.router.navigate(['/products']);
                }
            });
        }
    }
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"])); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["estudy-login-page"]], decls: 29, vars: 10, consts: [["fxLayout", "column", 1, "main-content"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "login-form"], ["fxLayout", "column", "fxLayoutAlign", "space-between center"], ["fxLayout", "row", "fxLayoutAlign", "center end", "fxLayoutGap", "5px", 1, "login-form__title"], ["src", "../../../assets/imgs/logo02.png", "width", "40px"], ["fxLayout", "column", "fxLayoutAlign", "space-evenly stretch", 3, "formGroup"], [4, "ngIf"], ["matInput", "", "autocomplete", "off", "formControlName", "email", 3, "input"], ["matSuffix", "", "class", "icon fas fa-spinner fa-spin", 4, "ngIf"], ["matSuffix", "", "class", "icon-green fas fa-check", 4, "ngIf"], ["matSuffix", "", "class", "icon-warn fas fa-times", 4, "ngIf"], ["matInput", "", "type", "password", "formControlName", "password"], ["class", "login-form__error", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", "fxLayoutGap", "10px", 1, "login-form__footer"], ["mat-stroked-button", "", 3, "disabled", "click"], ["matInput", "", "autocomplete", "off", "formControlName", "username", 3, "input"], ["matSuffix", "", 1, "icon", "fas", "fa-spinner", "fa-spin"], ["matSuffix", "", 1, "icon-green", "fas", "fa-check"], ["matSuffix", "", 1, "icon-warn", "fas", "fa-times"], ["matInput", "", "type", "password", "formControlName", "reEnterPassword"], ["matInput", "", "formControlName", "class"], [1, "login-form__error"], ["mat-flat-button", "", 3, "click"], [1, "button-divider"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "estudy-ui-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "eStudy");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, LoginPageComponent_ng_container_9_Template, 9, 4, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function LoginPageComponent_Template_input_input_13_listener($event) { return ctx.checkEmail($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, LoginPageComponent_mat_error_14_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, LoginPageComponent_mat_icon_15_Template, 1, 0, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, LoginPageComponent_mat_icon_16_Template, 1, 0, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, LoginPageComponent_mat_icon_17_Template, 1, 0, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Heslo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, LoginPageComponent_ng_container_22_Template, 10, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, LoginPageComponent_mat_error_23_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, LoginPageComponent_ng_container_25_Template, 5, 0, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_26_listener() { return ctx.doActionBasedOnRoute(ctx.isLogin); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, " Registrovat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "estudy-ui-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.form.controls.email == null ? null : ctx.form.controls.email.invalid) && (ctx.form.controls.email == null ? null : ctx.form.controls.email.value == null ? null : ctx.form.controls.email.value.length) >= 4 && !ctx.isLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.form.controls.email.value == null ? null : ctx.form.controls.email.value.length) > 0 && ctx.isCheckingProperties["email"] && !ctx.isLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.form.controls.email.value == null ? null : ctx.form.controls.email.value.length) > 0 && !ctx.isCheckingProperties["email"] && ctx.checkedProperties["email"] && !ctx.isLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.form.controls.email.value == null ? null : ctx.form.controls.email.value.length) > 0 && !ctx.isCheckingProperties["email"] && !ctx.checkedProperties["email"] && !ctx.isLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.wrongCredentials);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.isLogin && ctx.form.invalid);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _ui_components_ui_header_ui_header_component__WEBPACK_IMPORTED_MODULE_10__["UiHeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _ui_components_ui_footer_ui_footer_component__WEBPACK_IMPORTED_MODULE_16__["UiFooterComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"]], styles: [".main-content[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-width: 100%;\n}\n\n.login-form[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.login-form__title[_ngcontent-%COMP%] {\n  width: 90%;\n  text-align: center;\n  padding: 5px;\n  background-color: #000;\n  color: #fff;\n}\n\n.login-form[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.login-form[_ngcontent-%COMP%]   .icon-green[_ngcontent-%COMP%] {\n  color: #27b89b;\n}\n\n.login-form[_ngcontent-%COMP%]   .icon-warn[_ngcontent-%COMP%] {\n  color: #d50000;\n}\n\n.login-form[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: inherit !important;\n  height: inherit !important;\n}\n\n.login-form__error[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.login-form__footer[_ngcontent-%COMP%] {\n  width: 95%;\n  font-size: 12px;\n  margin-top: 20px;\n}\n\n.login-form__footer[_ngcontent-%COMP%]   .button-divider[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n}\n\n.login-form__footer[_ngcontent-%COMP%]   .button-divider[_ngcontent-%COMP%]::before, .login-form__footer[_ngcontent-%COMP%]   .button-divider[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  width: 40%;\n  height: 1px;\n  background-color: #000;\n}\n\n.login-form__footer[_ngcontent-%COMP%]   .button-divider[_ngcontent-%COMP%]::before {\n  left: 0;\n}\n\n.login-form__footer[_ngcontent-%COMP%]   .button-divider[_ngcontent-%COMP%]::after {\n  right: 0;\n}\n\n.login-form__footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #000;\n  color: #fff;\n}\n\n.login-form__footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  background-color: #fff;\n  color: #000;\n}\n\n.login-form[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  height: 450px;\n  width: 400px;\n  padding: 20px;\n  color: #000;\n}\n\n.login-form[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 100%;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLE9BQUE7QUFERjs7QUFHRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFFQSxzQkNmWTtFRGdCWixXQUFBO0FBRko7O0FBS0U7RUFDRSxlQUFBO0FBSEo7O0FBS0k7RUFDRSxjQUFBO0FBSE47O0FBTUk7RUFDRSxjQUFBO0FBSk47O0FBUUU7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FBTko7O0FBU0U7RUFDRSxrQkFBQTtBQVBKOztBQVVFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVJKOztBQVVJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQVJOOztBQVVNO0VBRUUsV0FBQTtFQUNBLGtCQUFBO0VBRUEsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JDekRRO0FEK0NoQjs7QUFhTTtFQUNFLE9BQUE7QUFYUjs7QUFjTTtFQUNFLFFBQUE7QUFaUjs7QUFnQkk7RUFDRSxrQkFBQTtFQUVBLHNCQ3hFVTtFRHlFVixXQUFBO0FBZk47O0FBa0JJO0VBQ0Usc0JBQUE7RUFDQSxXQzlFVTtBRDhEaEI7O0FBb0JFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsV0N2Rlk7QURvRWhCOztBQXFCSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFuQk4iLCJmaWxlIjoibG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubG9naW4tZm9ybSB7XHJcbiAgZmxleDogMTtcclxuXHJcbiAgJl9fdGl0bGUge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgLmljb24ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgICYtZ3JlZW4ge1xyXG4gICAgICBjb2xvcjogIzI3Yjg5YjtcclxuICAgIH1cclxuXHJcbiAgICAmLXdhcm4ge1xyXG4gICAgICBjb2xvcjogI2Q1MDAwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1hdC1pY29uIHtcclxuICAgIHdpZHRoOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICZfX2Vycm9yIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX2Zvb3RlciB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgICAuYnV0dG9uLWRpdmlkZXIge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICY6OmJlZm9yZSxcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b246bGFzdC1jaGlsZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1hdC1jYXJkIHtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuXHJcbiAgICBmb3JtIHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1jb2xvcjogIzAwMDtcclxuJHNlY29uZGFyeS1jb2xvcjogIzU0NmU3YTtcclxuJHdhcm4tY29sb3I6ICNkNTAwMDA7XHJcblxyXG4kbWF0LWJsdWUtZ3JleTogKFxyXG4gIDUwOiAjZWNlZmYxLFxyXG4gIDEwMDogI2NmZDhkYyxcclxuICAyMDA6ICNiMGJlYzUsXHJcbiAgMzAwOiAjOTBhNGFlLFxyXG4gIDQwMDogIzc4OTA5YyxcclxuICA1MDA6ICNiYmQ1ZTIsXHJcbiAgNjAwOiAjNTQ2ZTdhLFxyXG4gIDcwMDogIzQ1NWE2NCxcclxuICA4MDA6ICMzNzQ3NGYsXHJcbiAgOTAwOiAjMjYzMjM4LFxyXG4gIEExMDA6ICNjZmQ4ZGMsXHJcbiAgQTIwMDogI2IwYmVjNSxcclxuICBBNDAwOiAjNzg5MDljLFxyXG4gIEE3MDA6ICM0NTVhNjQsXHJcbik7XHJcbiJdfQ== */"] });


/***/ }),

/***/ "x2uj":
/*!*************************************************!*\
  !*** ./src/app/login-page/login-page.module.ts ***!
  \*************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _ui_components_ui_header_ui_header_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui-components/ui-header/ui-header.module */ "YiTd");
/* harmony import */ var _ui_components_ui_footer_ui_footer_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui-components/ui-footer/ui-footer.module */ "0NjS");
/* harmony import */ var _login_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login-page.component */ "pT+O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













const routes = [
    { path: '', component: _login_page_component__WEBPACK_IMPORTED_MODULE_10__["LoginPageComponent"] },
    { path: 'register', component: _login_page_component__WEBPACK_IMPORTED_MODULE_10__["LoginPageComponent"] },
];
class LoginPageModule {
}
LoginPageModule.ɵfac = function LoginPageModule_Factory(t) { return new (t || LoginPageModule)(); };
LoginPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: LoginPageModule });
LoginPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _ui_components_ui_header_ui_header_module__WEBPACK_IMPORTED_MODULE_8__["UiHeaderModule"],
            _ui_components_ui_footer_ui_footer_module__WEBPACK_IMPORTED_MODULE_9__["UiFooterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](LoginPageModule, { declarations: [_login_page_component__WEBPACK_IMPORTED_MODULE_10__["LoginPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _ui_components_ui_header_ui_header_module__WEBPACK_IMPORTED_MODULE_8__["UiHeaderModule"],
        _ui_components_ui_footer_ui_footer_module__WEBPACK_IMPORTED_MODULE_9__["UiFooterModule"]], exports: [_login_page_component__WEBPACK_IMPORTED_MODULE_10__["LoginPageComponent"]] }); })();


/***/ })

}]);
//# sourceMappingURL=login-page-login-page-module.js.map