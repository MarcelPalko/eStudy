(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-page-products-page-module"],{

/***/ "0MNC":
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js ***!
  \*******************************************************************/
/*! exports provided: BreakpointObserver, Breakpoints, LayoutModule, MediaMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakpointObserver", function() { return BreakpointObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breakpoints", function() { return Breakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaMatcher", function() { return MediaMatcher; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");






/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class LayoutModule {
}
LayoutModule.ɵfac = function LayoutModule_Factory(t) { return new (t || LayoutModule)(); };
LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{}]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Global registry for all dynamically-created, injected media queries. */
const mediaQueriesForWebkitCompatibility = new Set();
/** Style tag that holds all of the dynamically-created media queries. */
let mediaQueryStyleNode;
/** A utility for calling matchMedia queries. */
class MediaMatcher {
    constructor(_platform) {
        this._platform = _platform;
        this._matchMedia = this._platform.isBrowser && window.matchMedia ?
            // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
            // call it from a different scope.
            window.matchMedia.bind(window) :
            noopMatchMedia;
    }
    /**
     * Evaluates the given media query and returns the native MediaQueryList from which results
     * can be retrieved.
     * Confirms the layout engine will trigger for the selector query provided and returns the
     * MediaQueryList for the query provided.
     */
    matchMedia(query) {
        if (this._platform.WEBKIT) {
            createEmptyStyleRule(query);
        }
        return this._matchMedia(query);
    }
}
MediaMatcher.ɵfac = function MediaMatcher_Factory(t) { return new (t || MediaMatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"])); };
MediaMatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function MediaMatcher_Factory() { return new MediaMatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"])); }, token: MediaMatcher, providedIn: "root" });
MediaMatcher.ctorParameters = () => [
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaMatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] }]; }, null); })();
/**
 * For Webkit engines that only trigger the MediaQueryListListener when
 * there is at least one CSS selector for the respective media query.
 */
function createEmptyStyleRule(query) {
    if (mediaQueriesForWebkitCompatibility.has(query)) {
        return;
    }
    try {
        if (!mediaQueryStyleNode) {
            mediaQueryStyleNode = document.createElement('style');
            mediaQueryStyleNode.setAttribute('type', 'text/css');
            document.head.appendChild(mediaQueryStyleNode);
        }
        if (mediaQueryStyleNode.sheet) {
            mediaQueryStyleNode.sheet
                .insertRule(`@media ${query} {.fx-query-test{ }}`, 0);
            mediaQueriesForWebkitCompatibility.add(query);
        }
    }
    catch (e) {
        console.error(e);
    }
}
/** No-op matchMedia replacement for non-browser platforms. */
function noopMatchMedia(query) {
    // Use `as any` here to avoid adding additional necessary properties for
    // the noop matcher.
    return {
        matches: query === 'all' || query === '',
        media: query,
        addListener: () => { },
        removeListener: () => { }
    };
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Utility for checking the matching state of @media queries. */
class BreakpointObserver {
    constructor(_mediaMatcher, _zone) {
        this._mediaMatcher = _mediaMatcher;
        this._zone = _zone;
        /**  A map of all media queries currently being listened for. */
        this._queries = new Map();
        /** A subject for all other observables to takeUntil based on. */
        this._destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /** Completes the active subject, signalling to all other observables to complete. */
    ngOnDestroy() {
        this._destroySubject.next();
        this._destroySubject.complete();
    }
    /**
     * Whether one or more media queries match the current viewport size.
     * @param value One or more media queries to check.
     * @returns Whether any of the media queries match.
     */
    isMatched(value) {
        const queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(value));
        return queries.some(mediaQuery => this._registerQuery(mediaQuery).mql.matches);
    }
    /**
     * Gets an observable of results for the given queries that will emit new results for any changes
     * in matching of the given queries.
     * @param value One or more media queries to check.
     * @returns A stream of matches for the given queries.
     */
    observe(value) {
        const queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(value));
        const observables = queries.map(query => this._registerQuery(query).observable);
        let stateObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(observables);
        // Emit the first state immediately, and then debounce the subsequent emissions.
        stateObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["concat"])(stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)), stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(0)));
        return stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(breakpointStates => {
            const response = {
                matches: false,
                breakpoints: {},
            };
            breakpointStates.forEach(({ matches, query }) => {
                response.matches = response.matches || matches;
                response.breakpoints[query] = matches;
            });
            return response;
        }));
    }
    /** Registers a specific query to be listened for. */
    _registerQuery(query) {
        // Only set up a new MediaQueryList if it is not already being listened for.
        if (this._queries.has(query)) {
            return this._queries.get(query);
        }
        const mql = this._mediaMatcher.matchMedia(query);
        // Create callback for match changes and add it is as a listener.
        const queryObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            // Listener callback methods are wrapped to be placed back in ngZone. Callbacks must be placed
            // back into the zone because matchMedia is only included in Zone.js by loading the
            // webapis-media-query.js file alongside the zone.js file.  Additionally, some browsers do not
            // have MediaQueryList inherit from EventTarget, which causes inconsistencies in how Zone.js
            // patches it.
            const handler = (e) => this._zone.run(() => observer.next(e));
            mql.addListener(handler);
            return () => {
                mql.removeListener(handler);
            };
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(mql), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ matches }) => ({ query, matches })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroySubject));
        // Add the MediaQueryList to the set of queries.
        const output = { observable: queryObservable, mql };
        this._queries.set(query, output);
        return output;
    }
}
BreakpointObserver.ɵfac = function BreakpointObserver_Factory(t) { return new (t || BreakpointObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
BreakpointObserver.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function BreakpointObserver_Factory() { return new BreakpointObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MediaMatcher), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); }, token: BreakpointObserver, providedIn: "root" });
BreakpointObserver.ctorParameters = () => [
    { type: MediaMatcher },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreakpointObserver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: MediaMatcher }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();
/**
 * Split each query string into separate query strings if two queries are provided as comma
 * separated.
 */
function splitQueries(queries) {
    return queries.map(query => query.split(','))
        .reduce((a1, a2) => a1.concat(a2))
        .map(query => query.trim());
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// PascalCase is being used as Breakpoints is used like an enum.
// tslint:disable-next-line:variable-name
const Breakpoints = {
    XSmall: '(max-width: 599.98px)',
    Small: '(min-width: 600px) and (max-width: 959.98px)',
    Medium: '(min-width: 960px) and (max-width: 1279.98px)',
    Large: '(min-width: 1280px) and (max-width: 1919.98px)',
    XLarge: '(min-width: 1920px)',
    Handset: '(max-width: 599.98px) and (orientation: portrait), ' +
        '(max-width: 959.98px) and (orientation: landscape)',
    Tablet: '(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), ' +
        '(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)',
    Web: '(min-width: 840px) and (orientation: portrait), ' +
        '(min-width: 1280px) and (orientation: landscape)',
    HandsetPortrait: '(max-width: 599.98px) and (orientation: portrait)',
    TabletPortrait: '(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)',
    WebPortrait: '(min-width: 840px) and (orientation: portrait)',
    HandsetLandscape: '(max-width: 959.98px) and (orientation: landscape)',
    TabletLandscape: '(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)',
    WebLandscape: '(min-width: 1280px) and (orientation: landscape)',
};

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



//# sourceMappingURL=layout.js.map

/***/ }),

/***/ "0NjS":
/*!*************************************************************!*\
  !*** ./src/app/ui-components/ui-footer/ui-footer.module.ts ***!
  \*************************************************************/
/*! exports provided: UiFooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiFooterModule", function() { return UiFooterModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _ui_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-footer.component */ "Wwn5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class UiFooterModule {
}
UiFooterModule.ɵfac = function UiFooterModule_Factory(t) { return new (t || UiFooterModule)(); };
UiFooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: UiFooterModule });
UiFooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](UiFooterModule, { declarations: [_ui_footer_component__WEBPACK_IMPORTED_MODULE_3__["UiFooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]], exports: [_ui_footer_component__WEBPACK_IMPORTED_MODULE_3__["UiFooterComponent"]] }); })();


/***/ }),

/***/ "DJ0e":
/*!*******************************************************!*\
  !*** ./src/app/products-page/products-page.module.ts ***!
  \*******************************************************/
/*! exports provided: ProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _ui_components_ui_header_ui_header_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ui-components/ui-header/ui-header.module */ "YiTd");
/* harmony import */ var _ui_components_ui_footer_ui_footer_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ui-components/ui-footer/ui-footer.module */ "0NjS");
/* harmony import */ var _products_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./products-page.component */ "Xqhn");
/* harmony import */ var _product_detail_page_product_detail_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../product-detail-page/product-detail-page.component */ "jyIL");
/* harmony import */ var _favourite_products_page_favourite_products_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../favourite-products-page/favourite-products-page.component */ "Iga3");
/* harmony import */ var _interceptors_aut_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../interceptors/aut.guard */ "iCWs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");


















const routes = [
    {
        path: '',
        component: _products_page_component__WEBPACK_IMPORTED_MODULE_12__["ProductsPageComponent"],
    },
    {
        path: 'favourite',
        canActivate: [_interceptors_aut_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]],
        component: _favourite_products_page_favourite_products_page_component__WEBPACK_IMPORTED_MODULE_14__["FavouriteProductsPageComponent"],
    },
    { path: ':id', component: _product_detail_page_product_detail_page_component__WEBPACK_IMPORTED_MODULE_13__["ProductDetailPageComponent"] },
];
class ProductsPageModule {
}
ProductsPageModule.ɵfac = function ProductsPageModule_Factory(t) { return new (t || ProductsPageModule)(); };
ProductsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: ProductsPageModule });
ProductsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            _ui_components_ui_header_ui_header_module__WEBPACK_IMPORTED_MODULE_10__["UiHeaderModule"],
            _ui_components_ui_footer_ui_footer_module__WEBPACK_IMPORTED_MODULE_11__["UiFooterModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](ProductsPageModule, { declarations: [_products_page_component__WEBPACK_IMPORTED_MODULE_12__["ProductsPageComponent"],
        _favourite_products_page_favourite_products_page_component__WEBPACK_IMPORTED_MODULE_14__["FavouriteProductsPageComponent"],
        _product_detail_page_product_detail_page_component__WEBPACK_IMPORTED_MODULE_13__["ProductDetailPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
        _ui_components_ui_header_ui_header_module__WEBPACK_IMPORTED_MODULE_10__["UiHeaderModule"],
        _ui_components_ui_footer_ui_footer_module__WEBPACK_IMPORTED_MODULE_11__["UiFooterModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"]] }); })();


/***/ }),

/***/ "Iga3":
/*!******************************************************************************!*\
  !*** ./src/app/favourite-products-page/favourite-products-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: FavouriteProductsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouriteProductsPageComponent", function() { return FavouriteProductsPageComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _ui_components_ui_header_ui_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui-components/ui-header/ui-header.component */ "fvR5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_components_ui_footer_ui_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ui-components/ui-footer/ui-footer.component */ "Wwn5");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");















function FavouriteProductsPageComponent_ng_container_11_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FavouriteProductsPageComponent_ng_container_11_ng_container_1_ng_container_1_Template_mat_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r10.showProductDetail(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FavouriteProductsPageComponent_ng_container_11_ng_container_1_ng_container_1_Template_div_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r12.removeProduct(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", product_r8.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](product_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" - ", product_r8.description, " ");
} }
function FavouriteProductsPageComponent_ng_container_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, FavouriteProductsPageComponent_ng_container_11_ng_container_1_ng_container_1_Template, 12, 3, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r6.user.favouriteProducts);
} }
function FavouriteProductsPageComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, FavouriteProductsPageComponent_ng_container_11_ng_container_1_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.user.favouriteProducts.length > 0)("ngIfElse", _r4);
} }
function FavouriteProductsPageComponent_mat_card_13_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FavouriteProductsPageComponent_mat_card_13_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const i_r14 = ctx.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r15.returnProductBack(i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Vr\u00E1tit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@fadeOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Chcete vr\u00E1tit ", notification_r13.title, " zp\u011Bt ? ");
} }
function FavouriteProductsPageComponent_ng_template_15_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function FavouriteProductsPageComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, FavouriteProductsPageComponent_ng_template_15_ng_container_0_Template, 9, 0, "ng-container", 9);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.cycleFor(4));
} }
function FavouriteProductsPageComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Zat\u00EDm nem\u00E1te ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\u017E\u00E1dn\u00E9 produkty");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " v seznamu obl\u00EDben\u00FDch, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "b", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FavouriteProductsPageComponent_ng_template_17_Template_b_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r19.returnToProducts(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "vr\u00E1tit se a pokra\u010Dovat v held\u00E1n\u00ED");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class FavouriteProductsPageComponent {
    constructor(authService, userService, router) {
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.user = null;
        this.productsToRemove = [];
        this.isLoading = false;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"]();
    }
    ngOnInit() {
        const idParam = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('_id', this.authService.getUser()._id);
        this.isLoading = true;
        this.userService
            .getUsers(idParam)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe))
            .subscribe((user) => {
            this.user = user[0] || null;
            this.isLoading = false;
            this.userService.userPropertiesChanged$.next(user[0]);
            /** #TODO - User save to localStorage on change */
            this.authService.setUser(user[0]);
        });
        /** Possible memory leak */
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationStart"] && !event.url.includes('favourite')))
            .subscribe((redirect) => {
            if (redirect) {
                this.removeProducts();
            }
        });
    }
    removeProduct(index) {
        const removedProduct = this.user.favouriteProducts[index];
        this.productsToRemove.push(removedProduct);
        this.user.favouriteProducts.splice(index, 1);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(7000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(() => {
            if (this.productsToRemove.find((product) => product._id === removedProduct._id)) {
                return this.userService.patchUser(this.user._id, Object.assign({}, this.user));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe))
            .subscribe((user) => {
            if (user && this.productsToRemove.length > 0) {
                this.productsToRemove.shift();
                this.user = user;
                this.authService.setUser(user);
                this.userService.userPropertiesChanged$.next(user);
            }
        });
    }
    removeProducts() {
        this.userService
            .patchUser(this.user._id, Object.assign({}, this.user))
            .subscribe((user) => {
            this.user = user;
            this.authService.setUser(user);
            this.userService.userPropertiesChanged$.next(user);
        });
    }
    returnProductBack(index) {
        const removedProduct = this.productsToRemove[index];
        this.productsToRemove.splice(index, 1);
        this.user.favouriteProducts.splice(index, 0, removedProduct);
    }
    showProductDetail(index) {
        this.router.navigate([
            `/products/${this.user.favouriteProducts[index]._id}`,
        ]);
    }
    returnToProducts() {
        this.router.navigate(['/products']);
    }
    cycleFor(range) {
        return Array(range).map((x, i) => i);
    }
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
FavouriteProductsPageComponent.ɵfac = function FavouriteProductsPageComponent_Factory(t) { return new (t || FavouriteProductsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
FavouriteProductsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: FavouriteProductsPageComponent, selectors: [["estudy-favourite-products-page"]], decls: 19, vars: 3, consts: [["fxLayout", "column", 1, "main-content"], ["fxLayout", "column", "fxLayoutGap", "20px", 1, "body"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxLayoutGap", "5px", 1, "title"], [1, "fas", "fa-heart"], [4, "ngIf", "ngIfElse"], ["fxLayout", "column-reverse", "fxLayoutGap", "10px", 1, "notifications"], ["class", "return-card", "fxLayout", "row", "fxLayoutAlign", "space-between center", 4, "ngFor", "ngForOf"], ["ghostLoading", ""], ["noProducts", ""], [4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "favourite-item", 3, "click"], ["fxFlex", "1 1 80%", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "30px"], ["width", "90px", 3, "src"], [1, "favourite-item__title"], [1, "favourite-item__delete-button", 3, "click"], [1, "fas", "fa-times"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "return-card"], [1, "fas", "fa-info-circle"], ["fxFlex", "1 1 280px", 1, "return-card__text"], ["mat-flat-button", "", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "favourite-item__ghost-loading"], ["fxFlex", "1 1 80%", "fxFlex.xs", "1 1 70%", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "30px"], ["fxFlex", "1 1 3%", "fxFlex.xs", "1 1 9%"], [1, "no-products"], [3, "click"]], template: function FavouriteProductsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "estudy-ui-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Tv\u00E9 obl\u00EDben\u00E9 produkty ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Kliknut\u00EDm na produkt");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " si zobraz\u00EDte podrobnosti");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, FavouriteProductsPageComponent_ng_container_11_Template, 2, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, FavouriteProductsPageComponent_mat_card_13_Template, 6, 2, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "estudy-ui-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, FavouriteProductsPageComponent_ng_template_15_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, FavouriteProductsPageComponent_ng_template_17_Template, 7, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoading)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.productsToRemove);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _ui_components_ui_header_ui_header_component__WEBPACK_IMPORTED_MODULE_9__["UiHeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _ui_components_ui_footer_ui_footer_component__WEBPACK_IMPORTED_MODULE_11__["UiFooterComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"]], styles: [".main-content[_ngcontent-%COMP%] {\n  max-height: 100vh;\n  min-width: 100%;\n}\n\n.body[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 20px 50px;\n  overflow-y: scroll;\n  scroll-behavior: smooth;\n}\n\n.body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 16px;\n}\n\n.body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background-color: #e4e4e4;\n  border-radius: 4px;\n}\n\n.body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 100px;\n  border: 4px solid transparent;\n  background-clip: content-box;\n  background-color: #000;\n}\n\n.title[_ngcontent-%COMP%] {\n  padding: 40px;\n  border-bottom: 1px solid #a5a5a533;\n  text-align: center;\n  margin-bottom: 40px !important;\n}\n\n.title[_ngcontent-%COMP%]   i.fa-heart[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  color: #d50000;\n}\n\n.favourite-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 100%;\n  min-height: 90px;\n  max-height: 90px;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  overflow: hidden;\n}\n\n.favourite-item__title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.favourite-item__delete-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 30px;\n  color: #d50000;\n  margin-right: 20px;\n}\n\n.favourite-item__ghost-loading[_ngcontent-%COMP%] {\n  height: 90px;\n  background-color: #fff;\n}\n\n.favourite-item__ghost-loading[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n  animation: pulse 1s infinite ease-in-out;\n}\n\n.favourite-item__ghost-loading[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-of-type {\n  height: 60px;\n  margin-left: 20px;\n}\n\n.favourite-item__ghost-loading[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-of-type {\n  height: 30px;\n  margin-right: 20px;\n}\n\n.favourite-item[_ngcontent-%COMP%]:hover {\n  filter: brightness(97%);\n  box-shadow: 0 14px 28px -6px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n\n.body[_ngcontent-%COMP%]    > .favourite-item[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 20px !important;\n}\n\n.notifications[_ngcontent-%COMP%] {\n  z-index: 99999;\n  position: fixed;\n  bottom: 40px;\n  right: 25px;\n  width: 450px;\n}\n\n.return-card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 450px;\n  background-color: #000;\n  color: #fff;\n}\n\n.return-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n.return-card__text[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n\n.no-products[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n.no-products[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:nth-child(2) {\n  cursor: pointer;\n  padding-bottom: 1px;\n  border-bottom: 2px solid #000;\n}\n\nestudy-ui-footer[_ngcontent-%COMP%] {\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n}\n\n@media only screen and (max-width: 599px) {\n    estudy-ui-header .header {\n    width: 100%;\n    position: fixed;\n  }\n\n  .body[_ngcontent-%COMP%] {\n    padding: 20px;\n    margin-top: 120px;\n    overflow-y: auto;\n  }\n  .body[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n  }\n\n  .title[_ngcontent-%COMP%] {\n    padding: 40px 0;\n  }\n  .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  .favourite-item[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    max-width: 30px;\n  }\n  .favourite-item__title[_ngcontent-%COMP%] {\n    font-size: 15px;\n    padding-right: 10px;\n  }\n  .favourite-item__delete-button[_ngcontent-%COMP%] {\n    margin-right: 0;\n    font-size: 20px;\n  }\n  .favourite-item__ghost-loading[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-of-type {\n    margin: 10px 0 10px 20px;\n  }\n}\n\n@keyframes pulse {\n  0% {\n    background-color: rgba(165, 165, 165, 0.1);\n  }\n  50% {\n    background-color: rgba(165, 165, 165, 0.2);\n  }\n  100% {\n    background-color: rgba(165, 165, 165, 0.1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZhdm91cml0ZS1wcm9kdWN0cy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxXQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0U7RUFDRSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQURKOztBQUtBO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQUZGOztBQUlFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBRko7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxREFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBS0U7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQUhKOztBQU1FO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFPRTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtBQUxKOztBQU9JO0VBQ0UseUJBQUE7RUFDQSx3Q0FBQTtBQUxOOztBQVFJO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBTk47O0FBU0k7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFQTjs7QUFZQTtFQUNFLHVCQUFBO0VBQ0EsaUZBQUE7QUFURjs7QUFhQTtFQUNFLDhCQUFBO0FBVkY7O0FBYUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBRUEsWUFBQTtBQVhGOztBQWNBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBRUEsc0JBQUE7RUFDQSxXQUFBO0FBWkY7O0FBY0U7RUFDRSxlQUFBO0FBWko7O0FBZUU7RUFDRSxxQkFBQTtBQWJKOztBQWlCQTtFQUNFLGtCQUFBO0FBZEY7O0FBZ0JFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFkSjs7QUFrQkE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFmRjs7QUFrQkE7RUFFSTtJQUNFLFdBQUE7SUFDQSxlQUFBO0VBaEJKOztFQW9CQTtJQUNFLGFBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VBakJGO0VBbUJFO0lBQ0UsYUFBQTtFQWpCSjs7RUFxQkE7SUFDRSxlQUFBO0VBbEJGO0VBb0JFO0lBQ0UsZUFBQTtFQWxCSjs7RUF1QkU7SUFDRSxlQUFBO0VBcEJKO0VBdUJFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VBckJKO0VBd0JFO0lBQ0UsZUFBQTtJQUNBLGVBQUE7RUF0Qko7RUEwQkk7SUFDRSx3QkFBQTtFQXhCTjtBQUNGOztBQTZCQTtFQUNFO0lBQ0UsMENBQUE7RUEzQkY7RUE2QkE7SUFDRSwwQ0FBQTtFQTNCRjtFQTZCQTtJQUNFLDBDQUFBO0VBM0JGO0FBQ0YiLCJmaWxlIjoiZmF2b3VyaXRlLXByb2R1Y3RzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250ZW50IHtcclxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5ib2R5IHtcclxuICBmbGV4OiAxO1xyXG4gIHBhZGRpbmc6IDIwcHggNTBweDtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICB9XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2E1YTVhNTMzO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gIGkuZmEtaGVhcnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGNvbG9yOiAjZDUwMDAwO1xyXG4gIH1cclxufVxyXG5cclxuLmZhdm91cml0ZS1pdGVtIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogOTBweDtcclxuICBtYXgtaGVpZ2h0OiA5MHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gICZfX2RlbGV0ZS1idXR0b24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICNkNTAwMDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAmX19naG9zdC1sb2FkaW5nIHtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblxyXG4gICAgJiA+IGRpdiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbiAgICAgIGFuaW1hdGlvbjogcHVsc2UgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IGRpdjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAmID4gZGl2Omxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZhdm91cml0ZS1pdGVtOmhvdmVyIHtcclxuICBmaWx0ZXI6IGJyaWdodG5lc3MoOTclKTtcclxuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yNSksXHJcbiAgICAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG59XHJcblxyXG4uYm9keSA+IC5mYXZvdXJpdGUtaXRlbTpsYXN0LW9mLXR5cGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbnMge1xyXG4gIHotaW5kZXg6IDk5OTk5O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDQwcHg7XHJcbiAgcmlnaHQ6IDI1cHg7XHJcblxyXG4gIHdpZHRoOiA0NTBweDtcclxufVxyXG5cclxuLnJldHVybi1jYXJkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5cclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcblxyXG4gICZfX3RleHQge1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIH1cclxufVxyXG5cclxuLm5vLXByb2R1Y3RzIHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblxyXG4gIGI6bnRoLWNoaWxkKDIpIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcclxuICB9XHJcbn1cclxuXHJcbmVzdHVkeS11aS1mb290ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcclxuICA6Om5nLWRlZXAgZXN0dWR5LXVpLWhlYWRlciB7XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ib2R5IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMjBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDQwcHggMDtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mYXZvdXJpdGUtaXRlbSB7XHJcbiAgICAmID4gZGl2ID4gaW1nIHtcclxuICAgICAgbWF4LXdpZHRoOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2RlbGV0ZS1idXR0b24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAmX19naG9zdC1sb2FkaW5nIHtcclxuICAgICAgJiA+IGRpdjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBtYXJnaW46IDEwcHggMCAxMHB4IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gIDAlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY1LCAxNjUsIDE2NSwgMC4xKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY1LCAxNjUsIDE2NSwgMC4yKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NSwgMTY1LCAxNjUsIDAuMSk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('320ms 150ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('280ms 150ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
                ]),
            ]),
        ] } });


/***/ }),

/***/ "Qu3c":
/*!*************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js ***!
  \*************************************************************************/
/*! exports provided: MAT_TOOLTIP_DEFAULT_OPTIONS, MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY, MAT_TOOLTIP_SCROLL_STRATEGY, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER, MatTooltip, MatTooltipModule, SCROLL_THROTTLE_MS, TOOLTIP_PANEL_CLASS, TooltipComponent, getMatTooltipInvalidPositionError, matTooltipAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS", function() { return MAT_TOOLTIP_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY", function() { return MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY", function() { return MAT_TOOLTIP_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY", function() { return MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER", function() { return MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTooltip", function() { return MatTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTooltipModule", function() { return MatTooltipModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_THROTTLE_MS", function() { return SCROLL_THROTTLE_MS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLTIP_PANEL_CLASS", function() { return TOOLTIP_PANEL_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatTooltipInvalidPositionError", function() { return getMatTooltipInvalidPositionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matTooltipAnimations", function() { return matTooltipAnimations; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Animations used by MatTooltip.
 * @docs-private
 */








const matTooltipAnimations = {
    /** Animation that transitions a tooltip in and out. */
    tooltipState: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('state', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('initial, void, hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ opacity: 0, transform: 'scale(0)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ transform: 'scale(1)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('* => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('200ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ opacity: 0, transform: 'scale(0)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ opacity: 0.5, transform: 'scale(0.99)', offset: 0.5 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ opacity: 1, transform: 'scale(1)', offset: 1 })
        ]))),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('* => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('100ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ opacity: 0 }))),
    ])
};

/** Time in ms to throttle repositioning after scroll events. */
const SCROLL_THROTTLE_MS = 20;
/** CSS class that will be attached to the overlay panel. */
const TOOLTIP_PANEL_CLASS = 'mat-tooltip-panel';
/** Options used to bind passive event listeners. */
const passiveListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["normalizePassiveListenerOptions"])({ passive: true });
/**
 * Time between the user putting the pointer on a tooltip
 * trigger and the long press event being fired.
 */
const LONGPRESS_DELAY = 500;
/**
 * Creates an error to be thrown if the user supplied an invalid tooltip position.
 * @docs-private
 */
function getMatTooltipInvalidPositionError(position) {
    return Error(`Tooltip position "${position}" is invalid.`);
}
/** Injection token that determines the scroll handling while a tooltip is visible. */
const MAT_TOOLTIP_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-tooltip-scroll-strategy');
/** @docs-private */
function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(overlay) {
    return () => overlay.scrollStrategies.reposition({ scrollThrottle: SCROLL_THROTTLE_MS });
}
/** @docs-private */
const MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MAT_TOOLTIP_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]],
    useFactory: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY,
};
/** Injection token to be used to override the default options for `matTooltip`. */
const MAT_TOOLTIP_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-tooltip-default-options', {
    providedIn: 'root',
    factory: MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */
function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
    return {
        showDelay: 0,
        hideDelay: 0,
        touchendHideDelay: 1500,
    };
}
/**
 * Directive that attaches a material design tooltip to the host element. Animates the showing and
 * hiding of a tooltip provided position (defaults to below the element).
 *
 * https://material.io/design/components/tooltips.html
 */
class MatTooltip {
    constructor(_overlay, _elementRef, _scrollDispatcher, _viewContainerRef, _ngZone, _platform, _ariaDescriber, _focusMonitor, scrollStrategy, _dir, _defaultOptions, 
    /** @breaking-change 11.0.0 _document argument to become required. */
    _document) {
        this._overlay = _overlay;
        this._elementRef = _elementRef;
        this._scrollDispatcher = _scrollDispatcher;
        this._viewContainerRef = _viewContainerRef;
        this._ngZone = _ngZone;
        this._platform = _platform;
        this._ariaDescriber = _ariaDescriber;
        this._focusMonitor = _focusMonitor;
        this._dir = _dir;
        this._defaultOptions = _defaultOptions;
        this._position = 'below';
        this._disabled = false;
        this._viewInitialized = false;
        this._pointerExitEventsInitialized = false;
        /** The default delay in ms before showing the tooltip after show is called */
        this.showDelay = this._defaultOptions.showDelay;
        /** The default delay in ms before hiding the tooltip after hide is called */
        this.hideDelay = this._defaultOptions.hideDelay;
        /**
         * How touch gestures should be handled by the tooltip. On touch devices the tooltip directive
         * uses a long press gesture to show and hide, however it can conflict with the native browser
         * gestures. To work around the conflict, Angular Material disables native gestures on the
         * trigger, but that might not be desirable on particular elements (e.g. inputs and draggable
         * elements). The different values for this option configure the touch event handling as follows:
         * - `auto` - Enables touch gestures for all elements, but tries to avoid conflicts with native
         *   browser gestures on particular elements. In particular, it allows text selection on inputs
         *   and textareas, and preserves the native browser dragging on elements marked as `draggable`.
         * - `on` - Enables touch gestures for all elements and disables native
         *   browser gestures with no exceptions.
         * - `off` - Disables touch gestures. Note that this will prevent the tooltip from
         *   showing on touch devices.
         */
        this.touchGestures = 'auto';
        this._message = '';
        /** Manually-bound passive event listeners. */
        this._passiveListeners = [];
        /** Emits when the component is destroyed. */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        /**
         * Handles the keydown events on the host element.
         * Needs to be an arrow function so that we can use it in addEventListener.
         */
        this._handleKeydown = (event) => {
            if (this._isTooltipVisible() && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["hasModifierKey"])(event)) {
                event.preventDefault();
                event.stopPropagation();
                this._ngZone.run(() => this.hide(0));
            }
        };
        this._scrollStrategy = scrollStrategy;
        if (_defaultOptions) {
            if (_defaultOptions.position) {
                this.position = _defaultOptions.position;
            }
            if (_defaultOptions.touchGestures) {
                this.touchGestures = _defaultOptions.touchGestures;
            }
        }
        _ngZone.runOutsideAngular(() => {
            _elementRef.nativeElement.addEventListener('keydown', this._handleKeydown);
        });
    }
    /** Allows the user to define the position of the tooltip relative to the parent element */
    get position() { return this._position; }
    set position(value) {
        if (value !== this._position) {
            this._position = value;
            if (this._overlayRef) {
                this._updatePosition();
                if (this._tooltipInstance) {
                    this._tooltipInstance.show(0);
                }
                this._overlayRef.updatePosition();
            }
        }
    }
    /** Disables the display of the tooltip. */
    get disabled() { return this._disabled; }
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);
        // If tooltip is disabled, hide immediately.
        if (this._disabled) {
            this.hide(0);
        }
        else {
            this._setupPointerEnterEventsIfNeeded();
        }
    }
    /** The message to be displayed in the tooltip */
    get message() { return this._message; }
    set message(value) {
        this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this._message, 'tooltip');
        // If the message is not a string (e.g. number), convert it to a string and trim it.
        // Must convert with `String(value)`, not `${value}`, otherwise Closure Compiler optimises
        // away the string-conversion: https://github.com/angular/components/issues/20684
        this._message = value != null ? String(value).trim() : '';
        if (!this._message && this._isTooltipVisible()) {
            this.hide(0);
        }
        else {
            this._setupPointerEnterEventsIfNeeded();
            this._updateTooltipMessage();
            this._ngZone.runOutsideAngular(() => {
                // The `AriaDescriber` has some functionality that avoids adding a description if it's the
                // same as the `aria-label` of an element, however we can't know whether the tooltip trigger
                // has a data-bound `aria-label` or when it'll be set for the first time. We can avoid the
                // issue by deferring the description by a tick so Angular has time to set the `aria-label`.
                Promise.resolve().then(() => {
                    this._ariaDescriber.describe(this._elementRef.nativeElement, this.message, 'tooltip');
                });
            });
        }
    }
    /** Classes to be passed to the tooltip. Supports the same syntax as `ngClass`. */
    get tooltipClass() { return this._tooltipClass; }
    set tooltipClass(value) {
        this._tooltipClass = value;
        if (this._tooltipInstance) {
            this._setTooltipClass(this._tooltipClass);
        }
    }
    ngAfterViewInit() {
        // This needs to happen after view init so the initial values for all inputs have been set.
        this._viewInitialized = true;
        this._setupPointerEnterEventsIfNeeded();
        this._focusMonitor.monitor(this._elementRef)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed))
            .subscribe(origin => {
            // Note that the focus monitor runs outside the Angular zone.
            if (!origin) {
                this._ngZone.run(() => this.hide(0));
            }
            else if (origin === 'keyboard') {
                this._ngZone.run(() => this.show());
            }
        });
    }
    /**
     * Dispose the tooltip when destroyed.
     */
    ngOnDestroy() {
        const nativeElement = this._elementRef.nativeElement;
        clearTimeout(this._touchstartTimeout);
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._tooltipInstance = null;
        }
        // Clean up the event listeners set in the constructor
        nativeElement.removeEventListener('keydown', this._handleKeydown);
        this._passiveListeners.forEach(([event, listener]) => {
            nativeElement.removeEventListener(event, listener, passiveListenerOptions);
        });
        this._passiveListeners.length = 0;
        this._destroyed.next();
        this._destroyed.complete();
        this._ariaDescriber.removeDescription(nativeElement, this.message, 'tooltip');
        this._focusMonitor.stopMonitoring(nativeElement);
    }
    /** Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input */
    show(delay = this.showDelay) {
        if (this.disabled || !this.message || (this._isTooltipVisible() &&
            !this._tooltipInstance._showTimeoutId && !this._tooltipInstance._hideTimeoutId)) {
            return;
        }
        const overlayRef = this._createOverlay();
        this._detach();
        this._portal = this._portal || new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__["ComponentPortal"](TooltipComponent, this._viewContainerRef);
        this._tooltipInstance = overlayRef.attach(this._portal).instance;
        this._tooltipInstance.afterHidden()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed))
            .subscribe(() => this._detach());
        this._setTooltipClass(this._tooltipClass);
        this._updateTooltipMessage();
        this._tooltipInstance.show(delay);
    }
    /** Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input */
    hide(delay = this.hideDelay) {
        if (this._tooltipInstance) {
            this._tooltipInstance.hide(delay);
        }
    }
    /** Shows/hides the tooltip */
    toggle() {
        this._isTooltipVisible() ? this.hide() : this.show();
    }
    /** Returns true if the tooltip is currently visible to the user */
    _isTooltipVisible() {
        return !!this._tooltipInstance && this._tooltipInstance.isVisible();
    }
    /** Create the overlay config and position strategy */
    _createOverlay() {
        if (this._overlayRef) {
            return this._overlayRef;
        }
        const scrollableAncestors = this._scrollDispatcher.getAncestorScrollContainers(this._elementRef);
        // Create connected position strategy that listens for scroll events to reposition.
        const strategy = this._overlay.position()
            .flexibleConnectedTo(this._elementRef)
            .withTransformOriginOn('.mat-tooltip')
            .withFlexibleDimensions(false)
            .withViewportMargin(8)
            .withScrollableContainers(scrollableAncestors);
        strategy.positionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(change => {
            if (this._tooltipInstance) {
                if (change.scrollableViewProperties.isOverlayClipped && this._tooltipInstance.isVisible()) {
                    // After position changes occur and the overlay is clipped by
                    // a parent scrollable then close the tooltip.
                    this._ngZone.run(() => this.hide(0));
                }
            }
        });
        this._overlayRef = this._overlay.create({
            direction: this._dir,
            positionStrategy: strategy,
            panelClass: TOOLTIP_PANEL_CLASS,
            scrollStrategy: this._scrollStrategy()
        });
        this._updatePosition();
        this._overlayRef.detachments()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed))
            .subscribe(() => this._detach());
        return this._overlayRef;
    }
    /** Detaches the currently-attached tooltip. */
    _detach() {
        if (this._overlayRef && this._overlayRef.hasAttached()) {
            this._overlayRef.detach();
        }
        this._tooltipInstance = null;
    }
    /** Updates the position of the current tooltip. */
    _updatePosition() {
        const position = this._overlayRef.getConfig().positionStrategy;
        const origin = this._getOrigin();
        const overlay = this._getOverlayPosition();
        position.withPositions([
            Object.assign(Object.assign({}, origin.main), overlay.main),
            Object.assign(Object.assign({}, origin.fallback), overlay.fallback)
        ]);
    }
    /**
     * Returns the origin position and a fallback position based on the user's position preference.
     * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
     */
    _getOrigin() {
        const isLtr = !this._dir || this._dir.value == 'ltr';
        const position = this.position;
        let originPosition;
        if (position == 'above' || position == 'below') {
            originPosition = { originX: 'center', originY: position == 'above' ? 'top' : 'bottom' };
        }
        else if (position == 'before' ||
            (position == 'left' && isLtr) ||
            (position == 'right' && !isLtr)) {
            originPosition = { originX: 'start', originY: 'center' };
        }
        else if (position == 'after' ||
            (position == 'right' && isLtr) ||
            (position == 'left' && !isLtr)) {
            originPosition = { originX: 'end', originY: 'center' };
        }
        else if (typeof ngDevMode === 'undefined' || ngDevMode) {
            throw getMatTooltipInvalidPositionError(position);
        }
        const { x, y } = this._invertPosition(originPosition.originX, originPosition.originY);
        return {
            main: originPosition,
            fallback: { originX: x, originY: y }
        };
    }
    /** Returns the overlay position and a fallback position based on the user's preference */
    _getOverlayPosition() {
        const isLtr = !this._dir || this._dir.value == 'ltr';
        const position = this.position;
        let overlayPosition;
        if (position == 'above') {
            overlayPosition = { overlayX: 'center', overlayY: 'bottom' };
        }
        else if (position == 'below') {
            overlayPosition = { overlayX: 'center', overlayY: 'top' };
        }
        else if (position == 'before' ||
            (position == 'left' && isLtr) ||
            (position == 'right' && !isLtr)) {
            overlayPosition = { overlayX: 'end', overlayY: 'center' };
        }
        else if (position == 'after' ||
            (position == 'right' && isLtr) ||
            (position == 'left' && !isLtr)) {
            overlayPosition = { overlayX: 'start', overlayY: 'center' };
        }
        else if (typeof ngDevMode === 'undefined' || ngDevMode) {
            throw getMatTooltipInvalidPositionError(position);
        }
        const { x, y } = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY);
        return {
            main: overlayPosition,
            fallback: { overlayX: x, overlayY: y }
        };
    }
    /** Updates the tooltip message and repositions the overlay according to the new message length */
    _updateTooltipMessage() {
        // Must wait for the message to be painted to the tooltip so that the overlay can properly
        // calculate the correct positioning based on the size of the text.
        if (this._tooltipInstance) {
            this._tooltipInstance.message = this.message;
            this._tooltipInstance._markForCheck();
            this._ngZone.onMicrotaskEmpty.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(() => {
                if (this._tooltipInstance) {
                    this._overlayRef.updatePosition();
                }
            });
        }
    }
    /** Updates the tooltip class */
    _setTooltipClass(tooltipClass) {
        if (this._tooltipInstance) {
            this._tooltipInstance.tooltipClass = tooltipClass;
            this._tooltipInstance._markForCheck();
        }
    }
    /** Inverts an overlay position. */
    _invertPosition(x, y) {
        if (this.position === 'above' || this.position === 'below') {
            if (y === 'top') {
                y = 'bottom';
            }
            else if (y === 'bottom') {
                y = 'top';
            }
        }
        else {
            if (x === 'end') {
                x = 'start';
            }
            else if (x === 'start') {
                x = 'end';
            }
        }
        return { x, y };
    }
    /** Binds the pointer events to the tooltip trigger. */
    _setupPointerEnterEventsIfNeeded() {
        // Optimization: Defer hooking up events if there's no message or the tooltip is disabled.
        if (this._disabled || !this.message || !this._viewInitialized ||
            this._passiveListeners.length) {
            return;
        }
        // The mouse events shouldn't be bound on mobile devices, because they can prevent the
        // first tap from firing its click event or can cause the tooltip to open for clicks.
        if (this._platformSupportsMouseEvents()) {
            this._passiveListeners
                .push(['mouseenter', () => {
                    this._setupPointerExitEventsIfNeeded();
                    this.show();
                }]);
        }
        else if (this.touchGestures !== 'off') {
            this._disableNativeGesturesIfNecessary();
            this._passiveListeners
                .push(['touchstart', () => {
                    // Note that it's important that we don't `preventDefault` here,
                    // because it can prevent click events from firing on the element.
                    this._setupPointerExitEventsIfNeeded();
                    clearTimeout(this._touchstartTimeout);
                    this._touchstartTimeout = setTimeout(() => this.show(), LONGPRESS_DELAY);
                }]);
        }
        this._addListeners(this._passiveListeners);
    }
    _setupPointerExitEventsIfNeeded() {
        if (this._pointerExitEventsInitialized) {
            return;
        }
        this._pointerExitEventsInitialized = true;
        const exitListeners = [];
        if (this._platformSupportsMouseEvents()) {
            exitListeners.push(['mouseleave', () => this.hide()], ['wheel', event => this._wheelListener(event)]);
        }
        else if (this.touchGestures !== 'off') {
            this._disableNativeGesturesIfNecessary();
            const touchendListener = () => {
                clearTimeout(this._touchstartTimeout);
                this.hide(this._defaultOptions.touchendHideDelay);
            };
            exitListeners.push(['touchend', touchendListener], ['touchcancel', touchendListener]);
        }
        this._addListeners(exitListeners);
        this._passiveListeners.push(...exitListeners);
    }
    _addListeners(listeners) {
        listeners.forEach(([event, listener]) => {
            this._elementRef.nativeElement.addEventListener(event, listener, passiveListenerOptions);
        });
    }
    _platformSupportsMouseEvents() {
        return !this._platform.IOS && !this._platform.ANDROID;
    }
    /** Listener for the `wheel` event on the element. */
    _wheelListener(event) {
        if (this._isTooltipVisible()) {
            // @breaking-change 11.0.0 Remove `|| document` once the document is a required param.
            const doc = this._document || document;
            const elementUnderPointer = doc.elementFromPoint(event.clientX, event.clientY);
            const element = this._elementRef.nativeElement;
            // On non-touch devices we depend on the `mouseleave` event to close the tooltip, but it
            // won't fire if the user scrolls away using the wheel without moving their cursor. We
            // work around it by finding the element under the user's cursor and closing the tooltip
            // if it's not the trigger.
            if (elementUnderPointer !== element && !element.contains(elementUnderPointer)) {
                this.hide();
            }
        }
    }
    /** Disables the native browser gestures, based on how the tooltip has been configured. */
    _disableNativeGesturesIfNecessary() {
        const gestures = this.touchGestures;
        if (gestures !== 'off') {
            const element = this._elementRef.nativeElement;
            const style = element.style;
            // If gestures are set to `auto`, we don't disable text selection on inputs and
            // textareas, because it prevents the user from typing into them on iOS Safari.
            if (gestures === 'on' || (element.nodeName !== 'INPUT' && element.nodeName !== 'TEXTAREA')) {
                style.userSelect = style.msUserSelect = style.webkitUserSelect =
                    style.MozUserSelect = 'none';
            }
            // If we have `auto` gestures and the element uses native HTML dragging,
            // we don't set `-webkit-user-drag` because it prevents the native behavior.
            if (gestures === 'on' || !element.draggable) {
                style.webkitUserDrag = 'none';
            }
            style.touchAction = 'none';
            style.webkitTapHighlightColor = 'transparent';
        }
    }
}
MatTooltip.ɵfac = function MatTooltip_Factory(t) { return new (t || MatTooltip)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["AriaDescriber"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_TOOLTIP_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_TOOLTIP_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); };
MatTooltip.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: MatTooltip, selectors: [["", "matTooltip", ""]], hostAttrs: [1, "mat-tooltip-trigger"], inputs: { showDelay: ["matTooltipShowDelay", "showDelay"], hideDelay: ["matTooltipHideDelay", "hideDelay"], touchGestures: ["matTooltipTouchGestures", "touchGestures"], position: ["matTooltipPosition", "position"], disabled: ["matTooltipDisabled", "disabled"], message: ["matTooltip", "message"], tooltipClass: ["matTooltipClass", "tooltipClass"] }, exportAs: ["matTooltip"] });
MatTooltip.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatcher"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["AriaDescriber"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_TOOLTIP_SCROLL_STRATEGY,] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_TOOLTIP_DEFAULT_OPTIONS,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
MatTooltip.propDecorators = {
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['matTooltipPosition',] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['matTooltipDisabled',] }],
    showDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['matTooltipShowDelay',] }],
    hideDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['matTooltipHideDelay',] }],
    touchGestures: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['matTooltipTouchGestures',] }],
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['matTooltip',] }],
    tooltipClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['matTooltipClass',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatTooltip, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[matTooltip]',
                exportAs: 'matTooltip',
                host: {
                    'class': 'mat-tooltip-trigger'
                }
            }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatcher"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_10__["Platform"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["AriaDescriber"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [MAT_TOOLTIP_SCROLL_STRATEGY]
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [MAT_TOOLTIP_DEFAULT_OPTIONS]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }]; }, { showDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matTooltipShowDelay']
        }], hideDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matTooltipHideDelay']
        }], touchGestures: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matTooltipTouchGestures']
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matTooltipPosition']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matTooltipDisabled']
        }], message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matTooltip']
        }], tooltipClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matTooltipClass']
        }] }); })();
/**
 * Internal component that wraps the tooltip's content.
 * @docs-private
 */
class TooltipComponent {
    constructor(_changeDetectorRef, _breakpointObserver) {
        this._changeDetectorRef = _changeDetectorRef;
        this._breakpointObserver = _breakpointObserver;
        /** Property watched by the animation framework to show or hide the tooltip */
        this._visibility = 'initial';
        /** Whether interactions on the page should close the tooltip */
        this._closeOnInteraction = false;
        /** Subject for notifying that the tooltip has been hidden from the view */
        this._onHide = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        /** Stream that emits whether the user has a handset-sized display.  */
        this._isHandset = this._breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["Breakpoints"].Handset);
    }
    /**
     * Shows the tooltip with an animation originating from the provided origin
     * @param delay Amount of milliseconds to the delay showing the tooltip.
     */
    show(delay) {
        // Cancel the delayed hide if it is scheduled
        if (this._hideTimeoutId) {
            clearTimeout(this._hideTimeoutId);
            this._hideTimeoutId = null;
        }
        // Body interactions should cancel the tooltip if there is a delay in showing.
        this._closeOnInteraction = true;
        this._showTimeoutId = setTimeout(() => {
            this._visibility = 'visible';
            this._showTimeoutId = null;
            // Mark for check so if any parent component has set the
            // ChangeDetectionStrategy to OnPush it will be checked anyways
            this._markForCheck();
        }, delay);
    }
    /**
     * Begins the animation to hide the tooltip after the provided delay in ms.
     * @param delay Amount of milliseconds to delay showing the tooltip.
     */
    hide(delay) {
        // Cancel the delayed show if it is scheduled
        if (this._showTimeoutId) {
            clearTimeout(this._showTimeoutId);
            this._showTimeoutId = null;
        }
        this._hideTimeoutId = setTimeout(() => {
            this._visibility = 'hidden';
            this._hideTimeoutId = null;
            // Mark for check so if any parent component has set the
            // ChangeDetectionStrategy to OnPush it will be checked anyways
            this._markForCheck();
        }, delay);
    }
    /** Returns an observable that notifies when the tooltip has been hidden from view. */
    afterHidden() {
        return this._onHide;
    }
    /** Whether the tooltip is being displayed. */
    isVisible() {
        return this._visibility === 'visible';
    }
    ngOnDestroy() {
        this._onHide.complete();
    }
    _animationStart() {
        this._closeOnInteraction = false;
    }
    _animationDone(event) {
        const toState = event.toState;
        if (toState === 'hidden' && !this.isVisible()) {
            this._onHide.next();
        }
        if (toState === 'visible' || toState === 'hidden') {
            this._closeOnInteraction = true;
        }
    }
    /**
     * Interactions on the HTML body should close the tooltip immediately as defined in the
     * material design spec.
     * https://material.io/design/components/tooltips.html#behavior
     */
    _handleBodyInteraction() {
        if (this._closeOnInteraction) {
            this.hide(0);
        }
    }
    /**
     * Marks that the tooltip needs to be checked in the next change detection run.
     * Mainly used for rendering the initial text before positioning a tooltip, which
     * can be problematic in components with OnPush change detection.
     */
    _markForCheck() {
        this._changeDetectorRef.markForCheck();
    }
}
TooltipComponent.ɵfac = function TooltipComponent_Factory(t) { return new (t || TooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["BreakpointObserver"])); };
TooltipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TooltipComponent, selectors: [["mat-tooltip-component"]], hostAttrs: ["aria-hidden", "true"], hostVars: 2, hostBindings: function TooltipComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TooltipComponent_click_HostBindingHandler() { return ctx._handleBodyInteraction(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveBody"])("auxclick", function TooltipComponent_auxclick_HostBindingHandler() { return ctx._handleBodyInteraction(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveBody"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("zoom", ctx._visibility === "visible" ? 1 : null);
    } }, decls: 3, vars: 7, consts: [[1, "mat-tooltip", 3, "ngClass"]], template: function TooltipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("@state.start", function TooltipComponent_Template_div_animation_state_start_0_listener() { return ctx._animationStart(); })("@state.done", function TooltipComponent_Template_div_animation_state_done_0_listener($event) { return ctx._animationDone($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_0_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-tooltip-handset", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 5, ctx._isHandset)) == null ? null : tmp_0_0.matches);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.tooltipClass)("@state", ctx._visibility);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".mat-tooltip-panel{pointer-events:none !important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}\n"], encapsulation: 2, data: { animation: [matTooltipAnimations.tooltipState] }, changeDetection: 0 });
TooltipComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["BreakpointObserver"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TooltipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'mat-tooltip-component',
                template: "<div class=\"mat-tooltip\"\n     [ngClass]=\"tooltipClass\"\n     [class.mat-tooltip-handset]=\"(_isHandset | async)?.matches\"\n     [@state]=\"_visibility\"\n     (@state.start)=\"_animationStart()\"\n     (@state.done)=\"_animationDone($event)\">{{message}}</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                animations: [matTooltipAnimations.tooltipState],
                host: {
                    // Forces the element to have a layout in IE and Edge. This fixes issues where the element
                    // won't be rendered if the animations are disabled or there is no web animations polyfill.
                    '[style.zoom]': '_visibility === "visible" ? 1 : null',
                    '(body:click)': 'this._handleBodyInteraction()',
                    '(body:auxclick)': 'this._handleBodyInteraction()',
                    'aria-hidden': 'true'
                },
                styles: [".mat-tooltip-panel{pointer-events:none !important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["BreakpointObserver"] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatTooltipModule {
}
MatTooltipModule.ɵfac = function MatTooltipModule_Factory(t) { return new (t || MatTooltipModule)(); };
MatTooltipModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MatTooltipModule });
MatTooltipModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [[
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"],
        ], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatTooltipModule, { declarations: function () { return [MatTooltip, TooltipComponent]; }, imports: function () { return [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]]; }, exports: function () { return [MatTooltip, TooltipComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"]]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatTooltipModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"],
                ],
                exports: [MatTooltip, TooltipComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"]],
                declarations: [MatTooltip, TooltipComponent],
                entryComponents: [TooltipComponent],
                providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER]
            }]
    }], null, null); })();

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



//# sourceMappingURL=tooltip.js.map

/***/ }),

/***/ "STbY":
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js ***!
  \**********************************************************************/
/*! exports provided: MAT_MENU_CONTENT, MAT_MENU_DEFAULT_OPTIONS, MAT_MENU_PANEL, MAT_MENU_SCROLL_STRATEGY, MatMenu, MatMenuContent, MatMenuItem, MatMenuModule, MatMenuTrigger, _MatMenuBase, _MatMenuDirectivesModule, fadeInItems, matMenuAnimations, transformMenu, ɵangular_material_src_material_menu_menu_a, ɵangular_material_src_material_menu_menu_b, ɵangular_material_src_material_menu_menu_c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_MENU_CONTENT", function() { return MAT_MENU_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_MENU_DEFAULT_OPTIONS", function() { return MAT_MENU_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_MENU_PANEL", function() { return MAT_MENU_PANEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_MENU_SCROLL_STRATEGY", function() { return MAT_MENU_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMenu", function() { return MatMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMenuContent", function() { return MatMenuContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMenuItem", function() { return MatMenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMenuModule", function() { return MatMenuModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMenuTrigger", function() { return MatMenuTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatMenuBase", function() { return _MatMenuBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatMenuDirectivesModule", function() { return _MatMenuDirectivesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInItems", function() { return fadeInItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matMenuAnimations", function() { return matMenuAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMenu", function() { return transformMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_menu_menu_a", function() { return MAT_MENU_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_menu_menu_b", function() { return MAT_MENU_SCROLL_STRATEGY_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_menu_menu_c", function() { return MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER; });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");















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
const _c1 = ["*"];
function MatMenu_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown", function MatMenu_ng_template_0_Template_div_keydown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r1._handleKeydown($event); })("click", function MatMenu_ng_template_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.closed.emit("click"); })("@transformMenu.start", function MatMenu_ng_template_0_Template_div_animation_transformMenu_start_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4._onAnimationStart($event); })("@transformMenu.done", function MatMenu_ng_template_0_Template_div_animation_transformMenu_done_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5._onAnimationDone($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx_r0.panelId)("ngClass", ctx_r0._classList)("@transformMenu", ctx_r0._panelAnimationState);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", ctx_r0.ariaLabel || null)("aria-labelledby", ctx_r0.ariaLabelledby || null)("aria-describedby", ctx_r0.ariaDescribedby || null);
} }
const matMenuAnimations = {
    /**
     * This animation controls the menu panel's entry and exit from the page.
     *
     * When the menu panel is added to the DOM, it scales in and fades in its border.
     *
     * When the menu panel is removed from the DOM, it simply fades out after a brief
     * delay to display the ripple.
     */
    transformMenu: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('transformMenu', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
            opacity: 0,
            transform: 'scale(0.8)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
            opacity: 1,
            transform: 'scale(1)'
        }))),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('100ms 25ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0 })))
    ]),
    /**
     * This animation fades in the background color and content of the menu panel
     * after its containing element is scaled in.
     */
    fadeInItems: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('fadeInItems', [
        // TODO(crisbeto): this is inside the `transformMenu`
        // now. Remove next time we do breaking changes.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')
        ])
    ])
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
const MAT_MENU_CONTENT = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MatMenuContent');
/**
 * Menu content that will be rendered lazily once the menu is opened.
 */
class MatMenuContent {
    constructor(_template, _componentFactoryResolver, _appRef, _injector, _viewContainerRef, _document, _changeDetectorRef) {
        this._template = _template;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._injector = _injector;
        this._viewContainerRef = _viewContainerRef;
        this._document = _document;
        this._changeDetectorRef = _changeDetectorRef;
        /** Emits when the menu content has been attached. */
        this._attached = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    /**
     * Attaches the content with a particular context.
     * @docs-private
     */
    attach(context = {}) {
        if (!this._portal) {
            this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["TemplatePortal"](this._template, this._viewContainerRef);
        }
        this.detach();
        if (!this._outlet) {
            this._outlet = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["DomPortalOutlet"](this._document.createElement('div'), this._componentFactoryResolver, this._appRef, this._injector);
        }
        const element = this._template.elementRef.nativeElement;
        // Because we support opening the same menu from different triggers (which in turn have their
        // own `OverlayRef` panel), we have to re-insert the host element every time, otherwise we
        // risk it staying attached to a pane that's no longer in the DOM.
        element.parentNode.insertBefore(this._outlet.outletElement, element);
        // When `MatMenuContent` is used in an `OnPush` component, the insertion of the menu
        // content via `createEmbeddedView` does not cause the content to be seen as "dirty"
        // by Angular. This causes the `@ContentChildren` for menu items within the menu to
        // not be updated by Angular. By explicitly marking for check here, we tell Angular that
        // it needs to check for new menu items and update the `@ContentChild` in `MatMenu`.
        // @breaking-change 9.0.0 Make change detector ref required
        if (this._changeDetectorRef) {
            this._changeDetectorRef.markForCheck();
        }
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
MatMenuContent.ɵfac = function MatMenuContent_Factory(t) { return new (t || MatMenuContent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"])); };
MatMenuContent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: MatMenuContent, selectors: [["ng-template", "matMenuContent", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{ provide: MAT_MENU_CONTENT, useExisting: MatMenuContent }])] });
MatMenuContent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatMenuContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'ng-template[matMenuContent]',
                providers: [{ provide: MAT_MENU_CONTENT, useExisting: MatMenuContent }]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Throws an exception for the case when menu trigger doesn't have a valid mat-menu instance
 * @docs-private
 */
function throwMatMenuMissingError() {
    throw Error(`matMenuTriggerFor: must pass in an mat-menu instance.

    Example:
      <mat-menu #menu="matMenu"></mat-menu>
      <button [matMenuTriggerFor]="menu"></button>`);
}
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
    throw Error(`matMenuTriggerFor: menu cannot contain its own trigger. Assign a menu that is ` +
        `not a parent of the trigger or move the trigger outside of the menu.`);
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
const MAT_MENU_PANEL = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_MENU_PANEL');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatMenuItem.
/** @docs-private */
class MatMenuItemBase {
}
const _MatMenuItemMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["mixinDisabled"])(MatMenuItemBase));
/**
 * Single item inside of a `mat-menu`. Provides the menu item styling and accessibility treatment.
 */
class MatMenuItem extends _MatMenuItemMixinBase {
    constructor(_elementRef, 
    /**
     * @deprecated `_document` parameter is no longer being used and will be removed.
     * @breaking-change 12.0.0
     */
    _document, _focusMonitor, _parentMenu) {
        // @breaking-change 8.0.0 make `_focusMonitor` and `document` required params.
        super();
        this._elementRef = _elementRef;
        this._focusMonitor = _focusMonitor;
        this._parentMenu = _parentMenu;
        /** ARIA role for the menu item. */
        this.role = 'menuitem';
        /** Stream that emits when the menu item is hovered. */
        this._hovered = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /** Stream that emits when the menu item is focused. */
        this._focused = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /** Whether the menu item is highlighted. */
        this._highlighted = false;
        /** Whether the menu item acts as a trigger for a sub-menu. */
        this._triggersSubmenu = false;
        if (_parentMenu && _parentMenu.addItem) {
            _parentMenu.addItem(this);
        }
    }
    /** Focuses the menu item. */
    focus(origin, options) {
        if (this._focusMonitor && origin) {
            this._focusMonitor.focusVia(this._getHostElement(), origin, options);
        }
        else {
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
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _checkDisabled(event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
    /** Emits to the hover stream. */
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _handleMouseEnter() {
        this._hovered.next(this);
    }
    /** Gets the label to be used when determining whether the option should be focused. */
    getLabel() {
        var _a, _b;
        const clone = this._elementRef.nativeElement.cloneNode(true);
        const icons = clone.querySelectorAll('mat-icon, .material-icons');
        // Strip away icons so they don't show up in the text.
        for (let i = 0; i < icons.length; i++) {
            const icon = icons[i];
            (_a = icon.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(icon);
        }
        return ((_b = clone.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || '';
    }
}
MatMenuItem.ɵfac = function MatMenuItem_Factory(t) { return new (t || MatMenuItem)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_MENU_PANEL, 8)); };
MatMenuItem.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MatMenuItem, selectors: [["", "mat-menu-item", ""]], hostAttrs: [1, "mat-focus-indicator"], hostVars: 10, hostBindings: function MatMenuItem_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatMenuItem_click_HostBindingHandler($event) { return ctx._checkDisabled($event); })("mouseenter", function MatMenuItem_mouseenter_HostBindingHandler() { return ctx._handleMouseEnter(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("role", ctx.role)("tabindex", ctx._getTabIndex())("aria-disabled", ctx.disabled.toString())("disabled", ctx.disabled || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-menu-item", true)("mat-menu-item-highlighted", ctx._highlighted)("mat-menu-item-submenu-trigger", ctx._triggersSubmenu);
    } }, inputs: { disabled: "disabled", disableRipple: "disableRipple", role: "role" }, exportAs: ["matMenuItem"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], attrs: _c0, ngContentSelectors: _c1, decls: 2, vars: 2, consts: [["matRipple", "", 1, "mat-menu-ripple", 3, "matRippleDisabled", "matRippleTrigger"]], template: function MatMenuItem_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleTrigger", ctx._getHostElement());
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRipple"]], encapsulation: 2, changeDetection: 0 });
MatMenuItem.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"],] }] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_MENU_PANEL,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
MatMenuItem.propDecorators = {
    role: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    _checkDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['click', ['$event'],] }],
    _handleMouseEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['mouseenter',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatMenuItem, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
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
                    'class': 'mat-focus-indicator'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                template: "<ng-content></ng-content>\n<div class=\"mat-menu-ripple\" matRipple\n     [matRippleDisabled]=\"disableRipple || disabled\"\n     [matRippleTrigger]=\"_getHostElement()\">\n</div>\n"
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
            }] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [MAT_MENU_PANEL]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, { role: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], 
    /** Prevents the default element actions if it is disabled. */
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _checkDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
            args: ['click', ['$event']]
        }], 
    /** Emits to the hover stream. */
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _handleMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
            args: ['mouseenter']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token to be used to override the default options for `mat-menu`. */
const MAT_MENU_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-menu-default-options', {
    providedIn: 'root',
    factory: MAT_MENU_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */
function MAT_MENU_DEFAULT_OPTIONS_FACTORY() {
    return {
        overlapTrigger: false,
        xPosition: 'after',
        yPosition: 'below',
        backdropClass: 'cdk-overlay-transparent-backdrop',
    };
}
/**
 * Start elevation for the menu panel.
 * @docs-private
 */
const MAT_MENU_BASE_ELEVATION = 4;
let menuPanelUid = 0;
/** Base class with all of the `MatMenu` functionality. */
class _MatMenuBase {
    constructor(_elementRef, _ngZone, _defaultOptions) {
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._defaultOptions = _defaultOptions;
        this._xPosition = this._defaultOptions.xPosition;
        this._yPosition = this._defaultOptions.yPosition;
        /** Only the direct descendant menu items. */
        this._directDescendantItems = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"]();
        /** Subscription to tab events on the menu panel */
        this._tabSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        /** Config object to be passed into the menu's ngClass */
        this._classList = {};
        /** Current state of the panel animation. */
        this._panelAnimationState = 'void';
        /** Emits whenever an animation on the menu completes. */
        this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        /** Class or list of classes to be added to the overlay panel. */
        this.overlayPanelClass = this._defaultOptions.overlayPanelClass || '';
        /** Class to be added to the backdrop element. */
        this.backdropClass = this._defaultOptions.backdropClass;
        this._overlapTrigger = this._defaultOptions.overlapTrigger;
        this._hasBackdrop = this._defaultOptions.hasBackdrop;
        /** Event emitted when the menu is closed. */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event emitted when the menu is closed.
         * @deprecated Switch to `closed` instead
         * @breaking-change 8.0.0
         */
        this.close = this.closed;
        this.panelId = `mat-menu-panel-${menuPanelUid++}`;
    }
    /** Position of the menu in the X axis. */
    get xPosition() { return this._xPosition; }
    set xPosition(value) {
        if (value !== 'before' && value !== 'after' &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throwMatMenuInvalidPositionX();
        }
        this._xPosition = value;
        this.setPositionClasses();
    }
    /** Position of the menu in the Y axis. */
    get yPosition() { return this._yPosition; }
    set yPosition(value) {
        if (value !== 'above' && value !== 'below' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throwMatMenuInvalidPositionY();
        }
        this._yPosition = value;
        this.setPositionClasses();
    }
    /** Whether the menu should overlap its trigger. */
    get overlapTrigger() { return this._overlapTrigger; }
    set overlapTrigger(value) {
        this._overlapTrigger = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
    }
    /** Whether the menu has a backdrop. */
    get hasBackdrop() { return this._hasBackdrop; }
    set hasBackdrop(value) {
        this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
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
            previousPanelClass.split(' ').forEach((className) => {
                this._classList[className] = false;
            });
        }
        this._previousPanelClass = classes;
        if (classes && classes.length) {
            classes.split(' ').forEach((className) => {
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
    get classList() { return this.panelClass; }
    set classList(classes) { this.panelClass = classes; }
    ngOnInit() {
        this.setPositionClasses();
    }
    ngAfterContentInit() {
        this._updateDirectDescendants();
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusKeyManager"](this._directDescendantItems)
            .withWrap()
            .withTypeAhead()
            .withHomeAndEnd();
        this._tabSubscription = this._keyManager.tabOut.subscribe(() => this.closed.emit('tab'));
        // If a user manually (programmatically) focuses a menu item, we need to reflect that focus
        // change back to the key manager. Note that we don't need to unsubscribe here because _focused
        // is internal and we know that it gets completed on destroy.
        this._directDescendantItems.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(this._directDescendantItems), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(items => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(...items.map((item) => item._focused)))).subscribe(focusedItem => this._keyManager.updateActiveItem(focusedItem));
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
        return itemChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(this._directDescendantItems), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(items => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(...items.map((item) => item._hovered))));
    }
    /*
     * Registers a menu item with the menu.
     * @docs-private
     * @deprecated No longer being used. To be removed.
     * @breaking-change 9.0.0
     */
    addItem(_item) { }
    /**
     * Removes an item from the menu.
     * @docs-private
     * @deprecated No longer being used. To be removed.
     * @breaking-change 9.0.0
     */
    removeItem(_item) { }
    /** Handle a keyboard event from the menu, delegating to the appropriate action. */
    _handleKeydown(event) {
        const keyCode = event.keyCode;
        const manager = this._keyManager;
        switch (keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ESCAPE"]:
                if (!Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["hasModifierKey"])(event)) {
                    event.preventDefault();
                    this.closed.emit('keydown');
                }
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["LEFT_ARROW"]:
                if (this.parentMenu && this.direction === 'ltr') {
                    this.closed.emit('keydown');
                }
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["RIGHT_ARROW"]:
                if (this.parentMenu && this.direction === 'rtl') {
                    this.closed.emit('keydown');
                }
                break;
            default:
                if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["DOWN_ARROW"]) {
                    manager.setFocusOrigin('keyboard');
                }
                manager.onKeydown(event);
        }
    }
    /**
     * Focus the first item in the menu.
     * @param origin Action from which the focus originated. Used to set the correct styling.
     */
    focusFirstItem(origin = 'program') {
        // When the content is rendered lazily, it takes a bit before the items are inside the DOM.
        if (this.lazyContent) {
            this._ngZone.onStable
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
                .subscribe(() => this._focusFirstItem(origin));
        }
        else {
            this._focusFirstItem(origin);
        }
    }
    /**
     * Actual implementation that focuses the first item. Needs to be separated
     * out so we don't repeat the same logic in the public `focusFirstItem` method.
     */
    _focusFirstItem(origin) {
        const manager = this._keyManager;
        manager.setFocusOrigin(origin).setFirstItemActive();
        // If there's no active item at this point, it means that all the items are disabled.
        // Move focus to the menu panel so keyboard events like Escape still work. Also this will
        // give _some_ feedback to screen readers.
        if (!manager.activeItem && this._directDescendantItems.length) {
            let element = this._directDescendantItems.first._getHostElement().parentElement;
            // Because the `mat-menu` is at the DOM insertion point, not inside the overlay, we don't
            // have a nice way of getting a hold of the menu panel. We can't use a `ViewChild` either
            // because the panel is inside an `ng-template`. We work around it by starting from one of
            // the items and walking up the DOM.
            while (element) {
                if (element.getAttribute('role') === 'menu') {
                    element.focus();
                    break;
                }
                else {
                    element = element.parentElement;
                }
            }
        }
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
        const elevation = Math.min(MAT_MENU_BASE_ELEVATION + depth, 24);
        const newElevation = `mat-elevation-z${elevation}`;
        const customElevation = Object.keys(this._classList).find(c => c.startsWith('mat-elevation-z'));
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
        classes['mat-menu-below'] = posY === 'below';
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
        this._isAnimating = true;
        // Scroll the content element to the top as soon as the animation starts. This is necessary,
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
        this._allItems.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(this._allItems))
            .subscribe((items) => {
            this._directDescendantItems.reset(items.filter(item => item._parentMenu === this));
            this._directDescendantItems.notifyOnChanges();
        });
    }
}
_MatMenuBase.ɵfac = function _MatMenuBase_Factory(t) { return new (t || _MatMenuBase)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_MENU_DEFAULT_OPTIONS)); };
_MatMenuBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: _MatMenuBase, contentQueries: function _MatMenuBase_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MAT_MENU_CONTENT, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatMenuItem, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatMenuItem, 0);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.lazyContent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._allItems = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.items = _t);
    } }, viewQuery: function _MatMenuBase_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
    } }, inputs: { backdropClass: "backdropClass", xPosition: "xPosition", yPosition: "yPosition", overlapTrigger: "overlapTrigger", hasBackdrop: "hasBackdrop", panelClass: ["class", "panelClass"], classList: "classList", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], ariaDescribedby: ["aria-describedby", "ariaDescribedby"] }, outputs: { closed: "closed", close: "close" } });
_MatMenuBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_MENU_DEFAULT_OPTIONS,] }] }
];
_MatMenuBase.propDecorators = {
    _allItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [MatMenuItem, { descendants: true },] }],
    backdropClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['aria-labelledby',] }],
    ariaDescribedby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['aria-describedby',] }],
    xPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    yPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    templateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"],] }],
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [MatMenuItem, { descendants: false },] }],
    lazyContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [MAT_MENU_CONTENT,] }],
    overlapTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    hasBackdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    panelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['class',] }],
    classList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_MatMenuBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [MAT_MENU_DEFAULT_OPTIONS]
            }] }]; }, { backdropClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], xPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], yPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], overlapTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], hasBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['class']
        }], classList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], _allItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [MatMenuItem, { descendants: true }]
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['aria-labelledby']
        }], ariaDescribedby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['aria-describedby']
        }], templateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]]
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [MatMenuItem, { descendants: false }]
        }], lazyContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [MAT_MENU_CONTENT]
        }] }); })();
/** @docs-public MatMenu */
class MatMenu extends _MatMenuBase {
    constructor(elementRef, ngZone, defaultOptions) {
        super(elementRef, ngZone, defaultOptions);
    }
}
MatMenu.ɵfac = function MatMenu_Factory(t) { return new (t || MatMenu)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_MENU_DEFAULT_OPTIONS)); };
MatMenu.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MatMenu, selectors: [["mat-menu"]], hostVars: 3, hostBindings: function MatMenu_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
    } }, exportAs: ["matMenu"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            { provide: MAT_MENU_PANEL, useExisting: MatMenu },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 1, vars: 0, consts: [["tabindex", "-1", "role", "menu", 1, "mat-menu-panel", 3, "id", "ngClass", "keydown", "click"], [1, "mat-menu-content"]], template: function MatMenu_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MatMenu_ng_template_0_Template, 3, 6, "ng-template");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], styles: ["mat-menu{display:none}.mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]{pointer-events:none}.cdk-high-contrast-active .mat-menu-item{margin-top:1px}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:\"\";display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"], encapsulation: 2, data: { animation: [
            matMenuAnimations.transformMenu,
            matMenuAnimations.fadeInItems
        ] }, changeDetection: 0 });
MatMenu.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_MENU_DEFAULT_OPTIONS,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatMenu, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'mat-menu',
                template: "<ng-template>\n  <div\n    class=\"mat-menu-panel\"\n    [id]=\"panelId\"\n    [ngClass]=\"_classList\"\n    (keydown)=\"_handleKeydown($event)\"\n    (click)=\"closed.emit('click')\"\n    [@transformMenu]=\"_panelAnimationState\"\n    (@transformMenu.start)=\"_onAnimationStart($event)\"\n    (@transformMenu.done)=\"_onAnimationDone($event)\"\n    tabindex=\"-1\"\n    role=\"menu\"\n    [attr.aria-label]=\"ariaLabel || null\"\n    [attr.aria-labelledby]=\"ariaLabelledby || null\"\n    [attr.aria-describedby]=\"ariaDescribedby || null\">\n    <div class=\"mat-menu-content\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                exportAs: 'matMenu',
                host: {
                    '[attr.aria-label]': 'null',
                    '[attr.aria-labelledby]': 'null',
                    '[attr.aria-describedby]': 'null'
                },
                animations: [
                    matMenuAnimations.transformMenu,
                    matMenuAnimations.fadeInItems
                ],
                providers: [
                    { provide: MAT_MENU_PANEL, useExisting: MatMenu },
                ],
                styles: ["mat-menu{display:none}.mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]{pointer-events:none}.cdk-high-contrast-active .mat-menu-item{margin-top:1px}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:\"\";display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [MAT_MENU_DEFAULT_OPTIONS]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token that determines the scroll handling while the menu is open. */
const MAT_MENU_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-menu-scroll-strategy');
/** @docs-private */
function MAT_MENU_SCROLL_STRATEGY_FACTORY(overlay) {
    return () => overlay.scrollStrategies.reposition();
}
/** @docs-private */
const MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MAT_MENU_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]],
    useFactory: MAT_MENU_SCROLL_STRATEGY_FACTORY,
};
/** Default top padding of the menu panel. */
const MENU_PANEL_TOP_PADDING = 8;
/** Options for binding a passive event listener. */
const passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["normalizePassiveListenerOptions"])({ passive: true });
// TODO(andrewseguin): Remove the kebab versions in favor of camelCased attribute selectors
/** Directive applied to an element that should trigger a `mat-menu`. */
class MatMenuTrigger {
    constructor(_overlay, _element, _viewContainerRef, scrollStrategy, parentMenu, 
    // `MatMenuTrigger` is commonly used in combination with a `MatMenuItem`.
    // tslint:disable-next-line: lightweight-tokens
    _menuItemInstance, _dir, 
    // TODO(crisbeto): make the _focusMonitor required when doing breaking changes.
    // @breaking-change 8.0.0
    _focusMonitor) {
        this._overlay = _overlay;
        this._element = _element;
        this._viewContainerRef = _viewContainerRef;
        this._menuItemInstance = _menuItemInstance;
        this._dir = _dir;
        this._focusMonitor = _focusMonitor;
        this._overlayRef = null;
        this._menuOpen = false;
        this._closingActionsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        this._hoverSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        this._menuCloseSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
        /**
         * Handles touch start events on the trigger.
         * Needs to be an arrow function so we can easily use addEventListener and removeEventListener.
         */
        this._handleTouchStart = (event) => {
            if (!Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["isFakeTouchstartFromScreenReader"])(event)) {
                this._openedBy = 'touch';
            }
        };
        // Tracking input type is necessary so it's possible to only auto-focus
        // the first item of the list when the menu is opened via the keyboard
        this._openedBy = undefined;
        /**
         * Whether focus should be restored when the menu is closed.
         * Note that disabling this option can have accessibility implications
         * and it's up to you to manage focus, if you decide to turn it off.
         */
        this.restoreFocus = true;
        /** Event emitted when the associated menu is opened. */
        this.menuOpened = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event emitted when the associated menu is opened.
         * @deprecated Switch to `menuOpened` instead
         * @breaking-change 8.0.0
         */
        // tslint:disable-next-line:no-output-on-prefix
        this.onMenuOpen = this.menuOpened;
        /** Event emitted when the associated menu is closed. */
        this.menuClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
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
    get _deprecatedMatMenuTriggerFor() { return this.menu; }
    set _deprecatedMatMenuTriggerFor(v) {
        this.menu = v;
    }
    /** References the menu instance that the trigger is associated with. */
    get menu() { return this._menu; }
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
            this._menuCloseSubscription = menu.close.subscribe((reason) => {
                this._destroyMenu(reason);
                // If a click closed the menu, we should close the entire chain of nested menus.
                if ((reason === 'click' || reason === 'tab') && this._parentMaterialMenu) {
                    this._parentMaterialMenu.closed.emit(reason);
                }
            });
        }
    }
    ngAfterContentInit() {
        this._checkMenu();
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
        if (this._menuOpen) {
            return;
        }
        this._checkMenu();
        const overlayRef = this._createOverlay();
        const overlayConfig = overlayRef.getConfig();
        this._setPosition(overlayConfig.positionStrategy);
        overlayConfig.hasBackdrop = this.menu.hasBackdrop == null ? !this.triggersSubmenu() :
            this.menu.hasBackdrop;
        overlayRef.attach(this._getPortal());
        if (this.menu.lazyContent) {
            this.menu.lazyContent.attach(this.menuData);
        }
        this._closingActionsSubscription = this._menuClosingActions().subscribe(() => this.closeMenu());
        this._initMenu();
        if (this.menu instanceof _MatMenuBase) {
            this.menu._startAnimation();
        }
    }
    /** Closes the menu. */
    closeMenu() {
        this.menu.close.emit();
    }
    /**
     * Focuses the menu trigger.
     * @param origin Source of the menu trigger's focus.
     */
    focus(origin, options) {
        if (this._focusMonitor && origin) {
            this._focusMonitor.focusVia(this._element, origin, options);
        }
        else {
            this._element.nativeElement.focus(options);
        }
    }
    /** Closes the menu and does the necessary cleanup. */
    _destroyMenu(reason) {
        if (!this._overlayRef || !this.menuOpen) {
            return;
        }
        const menu = this.menu;
        this._closingActionsSubscription.unsubscribe();
        this._overlayRef.detach();
        // Always restore focus if the user is navigating using the keyboard or the menu was opened
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
                menu._animationDone
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(event => event.toState === 'void'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), 
                // Interrupt if the content got re-attached.
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(menu.lazyContent._attached))
                    .subscribe({
                    next: () => menu.lazyContent.detach(),
                    // No matter whether the content got re-attached, reset the menu.
                    complete: () => this._setIsMenuOpen(false)
                });
            }
            else {
                this._setIsMenuOpen(false);
            }
        }
        else {
            this._setIsMenuOpen(false);
            if (menu.lazyContent) {
                menu.lazyContent.detach();
            }
        }
    }
    /**
     * This method sets the menu state to open and focuses the first item if
     * the menu was opened via the keyboard.
     */
    _initMenu() {
        this.menu.parentMenu = this.triggersSubmenu() ? this._parentMaterialMenu : undefined;
        this.menu.direction = this.dir;
        this._setMenuElevation();
        this.menu.focusFirstItem(this._openedBy || 'program');
        this._setIsMenuOpen(true);
    }
    /** Updates the menu elevation based on the amount of parent menus that it has. */
    _setMenuElevation() {
        if (this.menu.setElevation) {
            let depth = 0;
            let parentMenu = this.menu.parentMenu;
            while (parentMenu) {
                depth++;
                parentMenu = parentMenu.parentMenu;
            }
            this.menu.setElevation(depth);
        }
    }
    // set state rather than toggle to support triggers sharing a menu
    _setIsMenuOpen(isOpen) {
        this._menuOpen = isOpen;
        this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();
        if (this.triggersSubmenu()) {
            this._menuItemInstance._highlighted = isOpen;
        }
    }
    /**
     * This method checks that a valid instance of MatMenu has been passed into
     * matMenuTriggerFor. If not, an exception is thrown.
     */
    _checkMenu() {
        if (!this.menu && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throwMatMenuMissingError();
        }
    }
    /**
     * This method creates the overlay from the provided menu's template and saves its
     * OverlayRef so that it can be attached to the DOM when openMenu is called.
     */
    _createOverlay() {
        if (!this._overlayRef) {
            const config = this._getOverlayConfig();
            this._subscribeToPositions(config.positionStrategy);
            this._overlayRef = this._overlay.create(config);
            // Consume the `keydownEvents` in order to prevent them from going to another overlay.
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
    _getOverlayConfig() {
        return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayConfig"]({
            positionStrategy: this._overlay.position()
                .flexibleConnectedTo(this._element)
                .withLockedPosition()
                .withGrowAfterOpen()
                .withTransformOriginOn('.mat-menu-panel, .mat-mdc-menu-panel'),
            backdropClass: this.menu.backdropClass || 'cdk-overlay-transparent-backdrop',
            panelClass: this.menu.overlayPanelClass,
            scrollStrategy: this._scrollStrategy(),
            direction: this._dir
        });
    }
    /**
     * Listens to changes in the position of the overlay and sets the correct classes
     * on the menu based on the new position. This ensures the animation origin is always
     * correct, even if a fallback position is used for the overlay.
     */
    _subscribeToPositions(position) {
        if (this.menu.setPositionClasses) {
            position.positionChanges.subscribe(change => {
                const posX = change.connectionPair.overlayX === 'start' ? 'after' : 'before';
                const posY = change.connectionPair.overlayY === 'top' ? 'below' : 'above';
                this.menu.setPositionClasses(posX, posY);
            });
        }
    }
    /**
     * Sets the appropriate positions on a position strategy
     * so the overlay connects with the trigger correctly.
     * @param positionStrategy Strategy whose position to update.
     */
    _setPosition(positionStrategy) {
        let [originX, originFallbackX] = this.menu.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'];
        let [overlayY, overlayFallbackY] = this.menu.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'];
        let [originY, originFallbackY] = [overlayY, overlayFallbackY];
        let [overlayX, overlayFallbackX] = [originX, originFallbackX];
        let offsetY = 0;
        if (this.triggersSubmenu()) {
            // When the menu is a sub-menu, it should always align itself
            // to the edges of the trigger, instead of overlapping it.
            overlayFallbackX = originX = this.menu.xPosition === 'before' ? 'start' : 'end';
            originFallbackX = overlayX = originX === 'end' ? 'start' : 'end';
            offsetY = overlayY === 'bottom' ? MENU_PANEL_TOP_PADDING : -MENU_PANEL_TOP_PADDING;
        }
        else if (!this.menu.overlapTrigger) {
            originY = overlayY === 'top' ? 'bottom' : 'top';
            originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';
        }
        positionStrategy.withPositions([
            { originX, originY, overlayX, overlayY, offsetY },
            { originX: originFallbackX, originY, overlayX: overlayFallbackX, overlayY, offsetY },
            {
                originX,
                originY: originFallbackY,
                overlayX,
                overlayY: overlayFallbackY,
                offsetY: -offsetY
            },
            {
                originX: originFallbackX,
                originY: originFallbackY,
                overlayX: overlayFallbackX,
                overlayY: overlayFallbackY,
                offsetY: -offsetY
            }
        ]);
    }
    /** Returns a stream that emits whenever an action that should close the menu occurs. */
    _menuClosingActions() {
        const backdrop = this._overlayRef.backdropClick();
        const detachments = this._overlayRef.detachments();
        const parentClose = this._parentMaterialMenu ? this._parentMaterialMenu.closed : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])();
        const hover = this._parentMaterialMenu ? this._parentMaterialMenu._hovered().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(active => active !== this._menuItemInstance), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(() => this._menuOpen)) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(backdrop, parentClose, hover, detachments);
    }
    /** Handles mouse presses on the trigger. */
    _handleMousedown(event) {
        if (!Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["isFakeMousedownFromScreenReader"])(event)) {
            // Since right or middle button clicks won't trigger the `click` event,
            // we shouldn't consider the menu as opened by mouse in those cases.
            this._openedBy = event.button === 0 ? 'mouse' : undefined;
            // Since clicking on the trigger won't close the menu if it opens a sub-menu,
            // we should prevent focus from moving onto it via click to avoid the
            // highlight from lingering on the menu item.
            if (this.triggersSubmenu()) {
                event.preventDefault();
            }
        }
    }
    /** Handles key presses on the trigger. */
    _handleKeydown(event) {
        const keyCode = event.keyCode;
        // Pressing enter on the trigger will trigger the click handler later.
        if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["SPACE"]) {
            this._openedBy = 'keyboard';
        }
        if (this.triggersSubmenu() && ((keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["RIGHT_ARROW"] && this.dir === 'ltr') ||
            (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["LEFT_ARROW"] && this.dir === 'rtl'))) {
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
        }
        else {
            this.toggleMenu();
        }
    }
    /** Handles the cases where the user hovers over the trigger. */
    _handleHover() {
        // Subscribe to changes in the hovered item in order to toggle the panel.
        if (!this.triggersSubmenu() || !this._parentMaterialMenu) {
            return;
        }
        this._hoverSubscription = this._parentMaterialMenu._hovered()
            // Since we might have multiple competing triggers for the same menu (e.g. a sub-menu
            // with different data and triggers), we have to delay it by a tick to ensure that
            // it won't be closed immediately after it is opened.
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(active => active === this._menuItemInstance && !active.disabled), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(0, rxjs__WEBPACK_IMPORTED_MODULE_4__["asapScheduler"]))
            .subscribe(() => {
            this._openedBy = 'mouse';
            // If the same menu is used between multiple triggers, it might still be animating
            // while the new trigger tries to re-open it. Wait for the animation to finish
            // before doing so. Also interrupt if the user moves to another item.
            if (this.menu instanceof _MatMenuBase && this.menu._isAnimating) {
                // We need the `delay(0)` here in order to avoid
                // 'changed after checked' errors in some cases. See #12194.
                this.menu._animationDone
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(0, rxjs__WEBPACK_IMPORTED_MODULE_4__["asapScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._parentMaterialMenu._hovered()))
                    .subscribe(() => this.openMenu());
            }
            else {
                this.openMenu();
            }
        });
    }
    /** Gets the portal that should be attached to the overlay. */
    _getPortal() {
        // Note that we can avoid this check by keeping the portal on the menu panel.
        // While it would be cleaner, we'd have to introduce another required method on
        // `MatMenuPanel`, making it harder to consume.
        if (!this._portal || this._portal.templateRef !== this.menu.templateRef) {
            this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["TemplatePortal"](this.menu.templateRef, this._viewContainerRef);
        }
        return this._portal;
    }
}
MatMenuTrigger.ɵfac = function MatMenuTrigger_Factory(t) { return new (t || MatMenuTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_MENU_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_MENU_PANEL, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MatMenuItem, 10), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"])); };
MatMenuTrigger.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: MatMenuTrigger, selectors: [["", "mat-menu-trigger-for", ""], ["", "matMenuTriggerFor", ""]], hostAttrs: ["aria-haspopup", "true", 1, "mat-menu-trigger"], hostVars: 2, hostBindings: function MatMenuTrigger_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mousedown", function MatMenuTrigger_mousedown_HostBindingHandler($event) { return ctx._handleMousedown($event); })("keydown", function MatMenuTrigger_keydown_HostBindingHandler($event) { return ctx._handleKeydown($event); })("click", function MatMenuTrigger_click_HostBindingHandler($event) { return ctx._handleClick($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", ctx.menuOpen || null)("aria-controls", ctx.menuOpen ? ctx.menu.panelId : null);
    } }, inputs: { restoreFocus: ["matMenuTriggerRestoreFocus", "restoreFocus"], _deprecatedMatMenuTriggerFor: ["mat-menu-trigger-for", "_deprecatedMatMenuTriggerFor"], menu: ["matMenuTriggerFor", "menu"], menuData: ["matMenuTriggerData", "menuData"] }, outputs: { menuOpened: "menuOpened", onMenuOpen: "onMenuOpen", menuClosed: "menuClosed", onMenuClose: "onMenuClose" }, exportAs: ["matMenuTrigger"] });
MatMenuTrigger.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_MENU_SCROLL_STRATEGY,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_MENU_PANEL,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
    { type: MatMenuItem, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] }
];
MatMenuTrigger.propDecorators = {
    _deprecatedMatMenuTriggerFor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['mat-menu-trigger-for',] }],
    menu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['matMenuTriggerFor',] }],
    menuData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['matMenuTriggerData',] }],
    restoreFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['matMenuTriggerRestoreFocus',] }],
    menuOpened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    onMenuOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    menuClosed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    onMenuClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatMenuTrigger, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: `[mat-menu-trigger-for], [matMenuTriggerFor]`,
                host: {
                    'class': 'mat-menu-trigger',
                    'aria-haspopup': 'true',
                    '[attr.aria-expanded]': 'menuOpen || null',
                    '[attr.aria-controls]': 'menuOpen ? menu.panelId : null',
                    '(mousedown)': '_handleMousedown($event)',
                    '(keydown)': '_handleKeydown($event)',
                    '(click)': '_handleClick($event)'
                },
                exportAs: 'matMenuTrigger'
            }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [MAT_MENU_SCROLL_STRATEGY]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [MAT_MENU_PANEL]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }, { type: MatMenuItem, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"]
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] }]; }, { restoreFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matMenuTriggerRestoreFocus']
        }], menuOpened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], onMenuOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], menuClosed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], onMenuClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], _deprecatedMatMenuTriggerFor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['mat-menu-trigger-for']
        }], menu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matMenuTriggerFor']
        }], menuData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['matMenuTriggerData']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Used by both the current `MatMenuModule` and the MDC `MatMenuModule`
 * to declare the menu-related directives.
 */
class _MatMenuDirectivesModule {
}
_MatMenuDirectivesModule.ɵfac = function _MatMenuDirectivesModule_Factory(t) { return new (t || _MatMenuDirectivesModule)(); };
_MatMenuDirectivesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: _MatMenuDirectivesModule });
_MatMenuDirectivesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_MatMenuDirectivesModule, { declarations: function () { return [MatMenuTrigger, MatMenuContent]; }, exports: function () { return [MatMenuTrigger, MatMenuContent, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_MatMenuDirectivesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                exports: [MatMenuTrigger, MatMenuContent, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"]],
                declarations: [
                    MatMenuTrigger,
                    MatMenuContent,
                ],
                providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
            }]
    }], null, null); })();
class MatMenuModule {
}
MatMenuModule.ɵfac = function MatMenuModule_Factory(t) { return new (t || MatMenuModule)(); };
MatMenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MatMenuModule });
MatMenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"],
            _MatMenuDirectivesModule,
        ], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], _MatMenuDirectivesModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatMenuModule, { declarations: function () { return [MatMenu, MatMenuItem]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"], _MatMenuDirectivesModule]; }, exports: function () { return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], MatMenu, MatMenuItem, _MatMenuDirectivesModule]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatMenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"],
                    _MatMenuDirectivesModule,
                ],
                exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkScrollableModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatCommonModule"], MatMenu, MatMenuItem, _MatMenuDirectivesModule],
                declarations: [MatMenu, MatMenuItem],
                providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
            }]
    }], null, null); })();

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



//# sourceMappingURL=menu.js.map

/***/ }),

/***/ "Wwn5":
/*!****************************************************************!*\
  !*** ./src/app/ui-components/ui-footer/ui-footer.component.ts ***!
  \****************************************************************/
/*! exports provided: UiFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiFooterComponent", function() { return UiFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





class UiFooterComponent {
    constructor(router) {
        this.router = router;
        this.date = new Date();
    }
    ngOnInit() { }
    redirectToAboutPage() {
        this.router.navigate(['/about']);
    }
}
UiFooterComponent.ɵfac = function UiFooterComponent_Factory(t) { return new (t || UiFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
UiFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UiFooterComponent, selectors: [["estudy-ui-footer"]], decls: 10, vars: 4, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "15px", 1, "footer"], ["mat-flat-button", ""], [1, "footer__version"], [1, "footer__title"], ["mat-flat-button", "", 3, "click"]], template: function UiFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "v 2.0.4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UiFooterComponent_Template_button_click_7_listener() { return ctx.redirectToAboutPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Marcel Palko");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A9 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 1, ctx.date, "yyyy"), "\u00A0\u00A0eStudy | ");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".footer[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30px;\n  padding: 0 20px;\n  background-color: #000;\n  color: #fff;\n  font-size: 12px;\n}\n.footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  max-height: 20px;\n  font-size: 12px;\n}\n.footer__version[_ngcontent-%COMP%] {\n  margin-top: -7px !important;\n}\n.footer__title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1aS1mb290ZXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFFQSxzQkNQYztFRFFkLFdBQUE7RUFDQSxlQUFBO0FBRkY7QUFJRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUZKO0FBS0U7RUFDRSwyQkFBQTtBQUhKO0FBT0k7RUFDRSxnQkFBQTtBQUxOIiwiZmlsZSI6InVpLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmZvb3RlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbiAgYnV0dG9uOmZpcnN0LWNoaWxkIHtcclxuICAgIG1heC1oZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAmX192ZXJzaW9uIHtcclxuICAgIG1hcmdpbi10b3A6IC03cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRwcmltYXJ5LWNvbG9yOiAjMDAwO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjNTQ2ZTdhO1xyXG4kd2Fybi1jb2xvcjogI2Q1MDAwMDtcclxuXHJcbiRtYXQtYmx1ZS1ncmV5OiAoXHJcbiAgNTA6ICNlY2VmZjEsXHJcbiAgMTAwOiAjY2ZkOGRjLFxyXG4gIDIwMDogI2IwYmVjNSxcclxuICAzMDA6ICM5MGE0YWUsXHJcbiAgNDAwOiAjNzg5MDljLFxyXG4gIDUwMDogI2JiZDVlMixcclxuICA2MDA6ICM1NDZlN2EsXHJcbiAgNzAwOiAjNDU1YTY0LFxyXG4gIDgwMDogIzM3NDc0ZixcclxuICA5MDA6ICMyNjMyMzgsXHJcbiAgQTEwMDogI2NmZDhkYyxcclxuICBBMjAwOiAjYjBiZWM1LFxyXG4gIEE0MDA6ICM3ODkwOWMsXHJcbiAgQTcwMDogIzQ1NWE2NCxcclxuKTtcclxuIl19 */"] });


/***/ }),

/***/ "Xqhn":
/*!**********************************************************!*\
  !*** ./src/app/products-page/products-page.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageComponent", function() { return ProductsPageComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _types_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types/product */ "zWuZ");
/* harmony import */ var _feature_components_feature_item_creation_dialog_feature_item_creation_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../feature-components/feature-item-creation-dialog/feature-item-creation-dialog.component */ "OLNt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/product.service */ "Gdn9");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_components_ui_header_ui_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ui-components/ui-header/ui-header.component */ "fvR5");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _ui_components_ui_footer_ui_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ui-components/ui-footer/ui-footer.component */ "Wwn5");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");


/** RXJS */


/** Types */



















const _c0 = ["productsContainer"];
const _c1 = ["viewContainer"];
const _c2 = ["categorySearchElement"];
function ProductsPageComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0, 20);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r8);
} }
function ProductsPageComponent_ng_container_14_mat_chip_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} }
function ProductsPageComponent_ng_container_14_mat_chip_2_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-chip", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductsPageComponent_ng_container_14_mat_chip_2_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34); const category_r31 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r33.toggleActiveCategory(category_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ProductsPageComponent_ng_container_14_mat_chip_2_ng_container_1_Template, 2, 0, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r31 = ctx.$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("chip--active", ctx_r26.activeFilters.category.includes(category_r31));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r26.activeFilters.category.includes(category_r31));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", category_r31, " ");
} }
function ProductsPageComponent_ng_container_14_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductsPageComponent_ng_container_14_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r35.clearActiveCategories(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Vypnout vybran\u00E9 Kategorie ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ProductsPageComponent_ng_container_14_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductsPageComponent_ng_container_14_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r39); const category_r37 = ctx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r38.addToActiveCategories(category_r37); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", category_r37, " ");
} }
function ProductsPageComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ProductsPageComponent_ng_container_14_mat_chip_2_Template, 3, 4, "mat-chip", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("menuOpened", function ProductsPageComponent_ng_container_14_Template_button_menuOpened_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r40.menuOpened(); })("menuClosed", function ProductsPageComponent_ng_container_14_Template_button_menuClosed_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r42.menuClosed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Zobrazit v\u00EDce ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ProductsPageComponent_ng_container_14_button_6_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-menu", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "input", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductsPageComponent_ng_container_14_Template_input_click_10_listener($event) { return $event.stopPropagation(); })("keypress", function ProductsPageComponent_ng_container_14_Template_input_keypress_10_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ProductsPageComponent_ng_container_14_button_13_Template, 2, 1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductsPageComponent_ng_container_14_Template_div_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r45.toggleSort(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " Datum vlo\u017Een\u00ED: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " Zobrazeno ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, " produkt\u016F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](3, 8, ctx_r2.categories, 0, ctx_r2.activeCategoriesCount));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matMenuTriggerFor", _r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.activeFilters.category.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("overlapTrigger", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx_r2.categorySearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.filteredCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@rotate", ctx_r2.sortBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.countOfShowedProducts);
} }
function ProductsPageComponent_ng_container_17_ng_container_1_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0, 20);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r18);
} }
function ProductsPageComponent_ng_container_17_ng_container_1_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductsPageComponent_ng_container_17_ng_container_1_ng_container_1_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r57); const product_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r55.toggleFavourite(product_r49); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](product_r49.isFavourite ? "fas fa-heart" : "far fa-heart");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("card__favourite--isFavourite", product_r49.isFavourite);
} }
function ProductsPageComponent_ng_container_17_ng_container_1_ng_container_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matTooltip", ctx_r53.getStatus(product_r49.status).tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r53.getStatus(product_r49.status).icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r53.getStatus(product_r49.status).type === "ACTIVE" ? "card__status--communication" : "card__status--sold");
} }
function ProductsPageComponent_ng_container_17_ng_container_1_ng_container_1_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-chip", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductsPageComponent_ng_container_17_ng_container_1_ng_container_1_ng_container_17_Template_mat_chip_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r62); const product_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r60.openProductDetail(product_r49._id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", product_r49.categories.length - 1, " DAL\u0160\u00CD...");
} }
function ProductsPageComponent_ng_container_17_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-card", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dblclick", function ProductsPageComponent_ng_container_17_ng_container_1_ng_container_1_Template_mat_card_dblclick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r65); const product_r49 = ctx.$implicit; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r64.toggleFavourite(product_r49); })("click", function ProductsPageComponent_ng_container_17_ng_container_1_ng_container_1_Template_mat_card_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r65); const product_r49 = ctx.$implicit; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r66.openProductDetail(product_r49._id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("load", function ProductsPageComponent_ng_container_17_ng_container_1_ng_container_1_Template_img_load_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r65); const i_r50 = ctx.index; const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r67.onImageLoad($event, i_r50); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ProductsPageComponent_ng_container_17_ng_container_1_ng_container_1_ng_container_3_Template, 1, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ProductsPageComponent_ng_container_17_ng_container_1_ng_container_1_div_4_Template, 2, 4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ProductsPageComponent_ng_container_17_ng_container_1_ng_container_1_div_5_Template, 2, 4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Kategorie:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-chip-list", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-chip", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductsPageComponent_ng_container_17_ng_container_1_ng_container_1_Template_mat_chip_click_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r65); const product_r49 = ctx.$implicit; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r68.openProductDetail(product_r49._id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ProductsPageComponent_ng_container_17_ng_container_1_ng_container_1_ng_container_17_Template, 3, 1, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r49 = ctx.$implicit;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@fadeOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", product_r49.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !(product_r49 == null ? null : product_r49.loaded));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r47.loggedUser && product_r49.userId !== (ctx_r47.loggedUser == null ? null : ctx_r47.loggedUser._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r47.loggedUser && product_r49.userId !== (ctx_r47.loggedUser == null ? null : ctx_r47.loggedUser._id) && (product_r49 == null ? null : product_r49.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r47.useMobileView && product_r49.title.length > 10 ? product_r49.title.slice(0, 10) + "..." : product_r49.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](10, 9, product_r49.createdAt, "shortDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", product_r49.categories[0], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", product_r49.categories.length > 1 && (!ctx_r47.useMobileView || product_r49.categories[0].length < 9));
} }
function ProductsPageComponent_ng_container_17_ng_container_1_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-card", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} }
function ProductsPageComponent_ng_container_17_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ProductsPageComponent_ng_container_17_ng_container_1_ng_container_3_ng_container_1_Template, 2, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r48.loadMore)("ngIfElse", _r16);
} }
function ProductsPageComponent_ng_container_17_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ProductsPageComponent_ng_container_17_ng_container_1_ng_container_1_Template, 18, 12, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ProductsPageComponent_ng_container_17_ng_container_1_ng_container_3_Template, 2, 2, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](2, 2, ctx_r46.allProducts, 0, ctx_r46.countOfShowedProducts));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r46.cycleFor(ctx_r46.claculateRestOfCards(true)));
} }
function ProductsPageComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ProductsPageComponent_ng_container_17_ng_container_1_Template, 4, 6, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.allProducts.length > 0)("ngIfElse", _r10);
} }
function ProductsPageComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0, 20);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r20);
} }
function ProductsPageComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0, 20);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r24);
} }
function ProductsPageComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0, 20);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r22);
} }
function ProductsPageComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "eStudy");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@fadeOutContainer", undefined);
} }
function ProductsPageComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Polo\u017Eky s n\u00E1zvem ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " nebyly nalezeny ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r11.form["controls"]["search"].value);
} }
function ProductsPageComponent_ng_template_27_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} }
function ProductsPageComponent_ng_template_27_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} }
function ProductsPageComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ProductsPageComponent_ng_template_27_ng_container_1_Template, 2, 0, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ProductsPageComponent_ng_template_27_ng_container_3_Template, 2, 0, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r13.cycleFor(4));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r13.cycleFor(2));
} }
function ProductsPageComponent_ng_template_29_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](1, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r16);
} }
function ProductsPageComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, ProductsPageComponent_ng_template_29_ng_container_0_Template, 2, 1, "ng-container", 41);
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r15.cycleFor(ctx_r15.getRowItemsCount()));
} }
function ProductsPageComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ProductsPageComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@fadeOutContainer", undefined);
} }
function ProductsPageComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Aplikace pot\u0159ebuje obnovit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductsPageComponent_ng_template_35_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r78); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r77.reloadPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Obnovit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@fadeOut", undefined);
} }
function ProductsPageComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductsPageComponent_ng_template_37_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r80); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r79.scrollTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@fadeOut", undefined);
} }
function ProductsPageComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductsPageComponent_ng_template_39_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r82); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r81.openCreationDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@fadeOut", undefined);
} }
const _c3 = function (a0) { return { top: a0 }; };
const ITEMS_COUNT_IN_ROW_BY_RESOLUTION = {
    3040: 13,
    2880: 10,
    2560: 8,
    2400: 8,
    2133: 7,
    1920: 6,
    1745: 6,
    1536: 5,
    1280: 4,
    1097: 3,
    768: 2,
    599: 3,
    450: 4,
};
class ProductsPageComponent {
    constructor(router, activatedRoute, authService, userService, productService, dialog) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.userService = userService;
        this.productService = productService;
        this.dialog = dialog;
        this.productIsClicked = true;
        this.loadMore = false;
        this.loaded = false;
        this.aplicationNeedReload = false;
        this.showScrollButton = false;
        this.showMenu = true;
        this.showIntroContainer = sessionStorage.getItem('alreadyVisited')
            ? false
            : true;
        this.useMobileView = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
        this.categorySearch = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('');
        this.activeFilters = {
            search: '',
            category: '',
        };
        this.activeCategoriesCount = 5;
        this.sortBy = 'HIGH';
        this.lastChange = '';
        this.products = [];
        this.favouriteProducts = [];
        this.categories = [];
        this.countOfShowedProducts = 0;
        this.previousPosition = 0;
        this.INTRO_DELAY_TIMER = 0;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
    }
    onWindowScroll(event) {
        const actualPosition = event.scrollTop;
        const max = event.offsetHeight;
        this.showMenu =
            this.previousPosition > actualPosition - 2 && !this.loadMore;
        if (actualPosition === 0) {
            this.showMenu = true;
            this.showScrollButton = false;
        }
        if (this.previousPosition <= actualPosition &&
            actualPosition > max - 800 &&
            !this.loadMore) {
            this.loadMore = true;
            this.showScrollButton = true;
            this.showMoreProducts();
        }
        this.previousPosition = actualPosition;
    }
    onResize(event) {
        this.useMobileView = event.target.innerWidth <= 1024;
    }
    get allProducts() {
        this.activeFilters.search = this.form.get('search').value.toLowerCase();
        let products = this.sortProductsByDate();
        if (Object.values(this.activeFilters).every((value) => value.length <= 0)) {
            return products;
        }
        if (this.activeFilters.category.length > 0) {
            const activeCategories = this.activeFilters.category.split('|');
            products = this.products.filter((product) => activeCategories.some((category) => product.categories
                .map((pCat) => pCat.toLocaleLowerCase())
                .includes(category.toLocaleLowerCase())));
        }
        if (this.activeFilters.search.length > 0) {
            products = products.filter((product) => product.title.toLowerCase().includes(this.activeFilters.search));
        }
        return products;
    }
    get filteredCategories() {
        const searchValue = this.categorySearch.value.toLocaleLowerCase();
        if (searchValue.length > 0) {
            return this.categories.filter((category, index) => category.toLocaleLowerCase().startsWith(searchValue) &&
                index >= this.activeCategoriesCount);
        }
        return this.categories.slice(this.activeCategoriesCount);
    }
    sortProductsByDate() {
        const sortedItems = this.products.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
        if (this.sortBy === 'LOW') {
            return sortedItems;
        }
        return sortedItems.reverse();
    }
    ngOnInit() {
        var _a;
        this.loggedUser = this.authService.getUser() || null;
        const idParam = `_id=${(_a = this.loggedUser) === null || _a === void 0 ? void 0 : _a._id}`;
        if (!sessionStorage.getItem('alreadyVisited')) {
            sessionStorage.setItem('alreadyVisited', 'TRUE');
            this.INTRO_DELAY_TIMER = 4000;
        }
        this.refresh.next();
        this.refresh
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(this.INTRO_DELAY_TIMER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => (this.showIntroContainer = false)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([
            this.productService.getProducts(),
            this.productService.getLastChange(),
            this.loggedUser ? this.userService.getUsers(idParam) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null),
        ])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([products, dbInformation, users]) => {
            this.lastChange = dbInformation.productsLastChange;
            if (users) {
                this.authService.removeUser();
                this.authService.setUser(users[0]);
                this.userService.userPropertiesChanged$.next(users[0]);
            }
            return products || [];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe))
            .subscribe((products) => {
            this.useMobileView = window.innerWidth <= 1024;
            if ((products === null || products === void 0 ? void 0 : products.length) > 0) {
                if (this.loggedUser) {
                    this.favouriteProducts = [...this.loggedUser.favouriteProducts];
                    this.favouriteProducts.forEach((product) => {
                        this.products = this.products.map((item) => {
                            if (item._id === product._id) {
                                return Object.assign(Object.assign({}, item), { isFavourite: true });
                            }
                            else {
                                return item;
                            }
                        });
                    });
                }
                this.products = products.map((item) => {
                    const favourite = this.favouriteProducts.findIndex((favItem) => favItem._id === item._id) >= 0
                        ? true
                        : false;
                    return Object.assign(Object.assign({}, item), { isFavourite: favourite });
                });
                this.countOfShowedProducts =
                    products.length > this.itemsCountOnLoad()
                        ? this.itemsCountOnLoad()
                        : products.length;
            }
            let categoriesWithFreq = [];
            const arrayCategories = [].concat.apply([], this.products.map((product) => product.categories.map((category) => category.trim())));
            [...new Set(arrayCategories)].forEach((cat) => {
                categoriesWithFreq.push({
                    key: cat,
                    count: arrayCategories.filter((item) => item === cat).length,
                });
            });
            categoriesWithFreq.sort((a, b) => b.count - a.count);
            this.categories = [
                ...categoriesWithFreq.map((i) => arrayCategories.find((j) => j === i.key)),
            ];
            this.loaded = true;
        });
        this.form.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe))
            .subscribe((change) => {
            if (change) {
                this.countOfShowedProducts = this.allProducts.length;
            }
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(90000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => this.productService.getLastChange()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((item) => item.productsLastChange || ''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe))
            .subscribe((productsLastChange) => {
            if (this.lastChange !== productsLastChange) {
                this.lastChange = productsLastChange;
                this.aplicationNeedReload = true;
            }
        });
    }
    getStatus(productStatus) {
        return _types_product__WEBPACK_IMPORTED_MODULE_4__["STATUSES"].find((s) => s.type === productStatus);
    }
    getRowItemsCount() {
        const windowWidth = +window.innerWidth;
        const closestRes = Object.keys(ITEMS_COUNT_IN_ROW_BY_RESOLUTION).reduce((prev, current) => {
            return Math.abs(+current - windowWidth) < Math.abs(+prev - +windowWidth)
                ? current
                : prev;
        });
        return ITEMS_COUNT_IN_ROW_BY_RESOLUTION[closestRes];
    }
    addToActiveCategories(category) {
        const categoryPosition = this.categories.findIndex((cat) => cat === category);
        this.categories.splice(categoryPosition, 1);
        this.categories.splice(this.activeCategoriesCount, 0, category);
        this.activeCategoriesCount++;
        this.toggleActiveCategory(category);
    }
    toggleActiveCategory(category) {
        if (!this.activeFilters.category.includes(category)) {
            this.activeFilters.category += `${category}|`;
        }
        else {
            const categoryPosition = this.categories.findIndex((cat) => cat === category);
            this.activeFilters.category = this.activeFilters.category.replace(`${category}|`, '');
            this.categories.splice(categoryPosition, 1);
            this.categories.splice(this.categories.length, 0, category);
            this.activeCategoriesCount -= this.activeCategoriesCount === 5 ? 0 : 1;
        }
        this.countOfShowedProducts = this.allProducts.length;
    }
    clearActiveCategories() {
        this.activeFilters.category = '';
        this.activeCategoriesCount = 5;
        this.showMoreProducts(true);
    }
    menuOpened() {
        /** This is not a good practise cuz we break angular-lifecycle => #Refactor */
        setTimeout(() => {
            this.categorySearchElement.nativeElement.focus();
        }, 0);
    }
    menuClosed() {
        this.categorySearch.setValue('');
    }
    toggleSort() {
        this.sortBy = this.sortBy === 'LOW' ? 'HIGH' : 'LOW';
    }
    toggleFavourite(product) {
        var _a;
        if (this.loggedUser && product.userId !== ((_a = this.loggedUser) === null || _a === void 0 ? void 0 : _a._id)) {
            this.productIsClicked = false;
            product.isFavourite = !product.isFavourite;
            if (this.favouriteProducts.map((item) => item._id).includes(product._id)) {
                this.favouriteProducts = this.favouriteProducts.filter((item) => item._id !== product._id);
            }
            else {
                this.favouriteProducts.push(product);
            }
            this.userService
                .patchUser(this.loggedUser._id, {
                favouriteProducts: [...this.favouriteProducts],
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe))
                .subscribe((user) => {
                if (user)
                    this.loggedUser = user;
            });
            this.loggedUser = Object.assign(Object.assign({}, this.loggedUser), { favouriteProducts: [...this.favouriteProducts] });
            this.userService.userPropertiesChanged$.next(this.loggedUser);
            this.authService.removeUser();
            this.authService.setUser(this.loggedUser);
        }
    }
    /**
     * @param range Takes range for counter
     * @returns Array of numbers for HTML cycle for loop
     */
    cycleFor(range) {
        return range > 0 ? Array(range).map((x, i) => i) : [];
    }
    itemsCountOnLoad() {
        const countLine = this.getRowItemsCount();
        const countLoad = Math.ceil(this.productsContainer.nativeElement.offsetHeight / 370) *
            countLine;
        return countLoad;
    }
    claculateRestOfCards(spacer) {
        const itemsCountToLine = this.getRowItemsCount();
        const rowsCount = Math.ceil(this.countOfShowedProducts / itemsCountToLine);
        const loadCount = rowsCount * itemsCountToLine - this.countOfShowedProducts;
        if (spacer &&
            this.countOfShowedProducts !== this.products.length &&
            this.countOfShowedProducts !== 0) {
            return itemsCountToLine * rowsCount - this.countOfShowedProducts;
        }
        return loadCount === 0 && this.loadMore ? itemsCountToLine : loadCount;
    }
    clickedOnCard(targetElement) {
        return (targetElement.tagName !== 'I' &&
            targetElement.className !== 'card__favourite');
    }
    openProductDetail(id, event) {
        if (this.clickedOnCard(event.target)) {
            this.productIsClicked = true;
            setTimeout(() => {
                if (this.productIsClicked) {
                    this.router.navigate([id], { relativeTo: this.activatedRoute });
                }
            }, 250);
        }
    }
    loggedOut(event) {
        if (event) {
            this.loaded = false;
            this.loggedUser = null;
            this.favouriteProducts = [];
            window.location.reload();
        }
    }
    createdProduct(event) {
        if (event) {
            this.aplicationNeedReload = false;
            this.reloadPage();
        }
    }
    showMoreProducts(startLoad) {
        setTimeout(() => {
            this.countOfShowedProducts += startLoad
                ? this.itemsCountOnLoad()
                : this.claculateRestOfCards();
            this.loadMore = false;
            if (this.countOfShowedProducts >= this.products.length) {
                this.countOfShowedProducts = this.products.length;
            }
        }, 1000);
    }
    reloadPage() {
        this.scrollTop();
        this.loaded = false;
        this.refresh.next();
        this.aplicationNeedReload = false;
    }
    scrollTop() {
        this.viewContainer.nativeElement.scrollTo({ top: 0, behavior: 'smooth' });
        this.showScrollButton = false;
    }
    openCreationDialog() {
        if (this.loggedUser) {
            const dialogRef = this.dialog.open(_feature_components_feature_item_creation_dialog_feature_item_creation_dialog_component__WEBPACK_IMPORTED_MODULE_5__["FeatureItemCreationDialogComponent"], {
                height: '80vh',
                width: '70vw',
            });
            dialogRef.afterClosed().subscribe((event) => {
                this.refresh.next(event);
            });
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    onImageLoad(evt, index) {
        if (evt && evt.target) {
            this.products[index]['loaded'] = true;
        }
    }
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
ProductsPageComponent.ɵfac = function ProductsPageComponent_Factory(t) { return new (t || ProductsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_10__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"])); };
ProductsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ProductsPageComponent, selectors: [["estudy-products-page"]], viewQuery: function ProductsPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.productsContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.viewContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.categorySearchElement = _t.first);
    } }, hostBindings: function ProductsPageComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("resize", function ProductsPageComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveWindow"]);
    } }, decls: 41, vars: 14, consts: [["fxLayout", "column", 1, "main-content"], [3, "ngTemplateOutlet", 4, "ngIf"], [3, "form", "ngStyle", "loggedOut", "createdProduct"], ["fxLayout", "column", 1, "content", 3, "scroll"], ["viewContainer", ""], ["fxLayout", "column", 1, "page-quote"], ["fxLayout.xs", "column", "fxLayoutAlign", "space-between end", "fxLayoutGap", "30px", "fxLayoutGap.xs", "0", 1, "filters"], [4, "ngIf", "ngIfElse"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between start", 1, "body"], ["productsContainer", ""], ["fxLayout", "row", "fxLayout.xs", "row wrap", "fxLayoutAlign", "start end", "fxLayoutAlign.xs", "end end", "fxLayoutGap", "20px", 1, "notification-container"], ["showIntro", ""], ["itemsNotFound", ""], ["filtersGhostLoading", ""], ["productsGhostLoading", ""], ["cardGhostLoading", ""], ["imageRendering", ""], ["reloadCard", ""], ["scrollToTop", ""], ["addButton", ""], [3, "ngTemplateOutlet"], ["fxFlex.xs", "1 1 100%", "fxFlex", "1 1 50%", "fxLayout", "row wrap", "fxLayout.xs", "row", "fxLayoutAlign", "start end", "fxLayoutGap", "20px"], ["color", "primary", "class", "chip", 3, "chip--active", "click", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", 1, "black", 3, "matMenuTriggerFor", "menuOpened", "menuClosed"], ["mat-flat-button", "", "class", "warn", 3, "click", 4, "ngIf"], ["yPosition", "below", 3, "overlapTrigger"], ["menu", "matMenu"], ["fxLayout", "column", 1, "menu-content"], ["type", "text", 3, "formControl", "click", "keypress"], ["categorySearchElement", ""], [1, "menu-content__categories"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutAlign.xs", "space-between center", "fxLayoutGap", "30px"], ["fxFlex.xs", "0 0 45%", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutAlign.xs", "center center", 1, "filters__sort", 3, "click"], [1, "fas", "fa-long-arrow-alt-up"], ["fxFlex.xs", "0 0 50%", 1, "filters__items-count"], ["color", "primary", 1, "chip", 3, "click"], [4, "ngIf"], [1, "fas", "fa-check"], ["mat-flat-button", "", 1, "warn", 3, "click"], ["mat-menu-item", "", 3, "click"], [4, "ngFor", "ngForOf"], ["fxLayout", "column", "fxLayoutAlign", "space-between center", 1, "card", 3, "dblclick", "click"], ["height", "180px", "loading", "lazy", 3, "src", "load"], ["class", "card__favourite", "fxLayout", "row", "fxLayoutAlign", "center center", 3, "click", 4, "ngIf"], ["class", "card__status", "matTooltipPosition", "below", "fxLayout", "row", "fxLayoutAlign", "center center", 3, "matTooltip", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "end stretch", 1, "card__categories"], ["fxLayout.xs", "row"], ["color", "primary", 1, "chip", "black", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "card__favourite", 3, "click"], ["matTooltipPosition", "below", "fxLayout", "row", "fxLayoutAlign", "center center", 1, "card__status", 3, "matTooltip"], [3, "ngClass"], ["fxLayout", "column", "fxLayoutAlign", "space-between center", 1, "card", "hidden"], ["fxLayout", "row", "fxLayoutAlign", "center start", 1, "eStudy-intro"], ["src", "../../assets/imgs/infinite-loader.gif"], [1, "center-self"], ["fxLayout", "row wrap", "fxLayout.xs", "row", "fxLayoutGap", "20px"], ["fxLayout", "row", "fxLayoutGap", "20px"], [1, "ghost-loading__filter"], ["fxLayout", "column", "fxLayoutAlign", "space-between center", 1, "card"], [1, "ghost-loading__card-img"], [1, "ghost-loading__card-title"], [1, "ghost-loading__card-timestamp"], [1, "rendering"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "reload-card"], [1, "fas", "fa-info-circle"], ["mat-flat-button", "", 3, "click"], [1, "scroll-top-button", 3, "click"], [1, "fas", "fa-arrow-alt-circle-up"], [1, "fas", "fa-plus"]], template: function ProductsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ProductsPageComponent_ng_container_1_Template, 1, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "estudy-ui-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("loggedOut", function ProductsPageComponent_Template_estudy_ui_header_loggedOut_2_listener($event) { return ctx.loggedOut($event); })("createdProduct", function ProductsPageComponent_Template_estudy_ui_header_createdProduct_2_listener($event) { return ctx.createdProduct($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("scroll", function ProductsPageComponent_Template_div_scroll_3_listener($event) { return ctx.onWindowScroll($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Hled\u00E1m u\u010Debnice nebo materi\u00E1ly");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "co ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "nejsnadn\u011Bji");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ProductsPageComponent_ng_container_14_Template, 24, 12, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ProductsPageComponent_ng_container_17_Template, 2, 2, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, ProductsPageComponent_ng_container_19_Template, 1, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, ProductsPageComponent_ng_container_20_Template, 1, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, ProductsPageComponent_ng_container_21_Template, 1, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "estudy-ui-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, ProductsPageComponent_ng_template_23_Template, 4, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, ProductsPageComponent_ng_template_25_Template, 5, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, ProductsPageComponent_ng_template_27_Template, 4, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, ProductsPageComponent_ng_template_29_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, ProductsPageComponent_ng_template_31_Template, 5, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, ProductsPageComponent_ng_template_33_Template, 3, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, ProductsPageComponent_ng_template_35_Template, 6, 1, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, ProductsPageComponent_ng_template_37_Template, 2, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, ProductsPageComponent_ng_template_39_Template, 2, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](28);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showIntroContainer);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("form", ctx.form)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](12, _c3, ctx.showMenu ? "0px" : "-205px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("content--spacing", !ctx.showScrollButton && !ctx.useMobileView);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loaded)("ngIfElse", _r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loaded)("ngIfElse", _r14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.aplicationNeedReload);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.useMobileView);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showScrollButton);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _ui_components_ui_header_ui_header_component__WEBPACK_IMPORTED_MODULE_14__["UiHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__["DefaultStyleDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutGapDirective"], _ui_components_ui_footer_ui_footer_component__WEBPACK_IMPORTED_MODULE_16__["UiFooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgTemplateOutlet"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenu"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChip"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCard"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__["MatChipList"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__["DefaultClassDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]], styles: [".main-content[_ngcontent-%COMP%] {\n  max-height: 100vh;\n  min-width: 100%;\n}\n\nestudy-ui-header[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  z-index: 999;\n  transition: top 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.content[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100vh;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  scroll-behavior: smooth;\n  transition: all 250ms ease;\n}\n\n.content--spacing[_ngcontent-%COMP%] {\n  padding-top: 70px;\n}\n\n.eStudy-intro[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  position: absolute;\n  z-index: 9999;\n  background-color: #000;\n  color: #fff;\n}\n\n.eStudy-intro[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 150px;\n  margin-top: 215px;\n}\n\n.eStudy-intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 50px;\n  margin-top: 300px;\n  margin-left: -5px;\n}\n\n.body[_ngcontent-%COMP%] {\n  width: 100%;\n  flex: 1;\n  padding: 20px;\n}\n\n.page-quote[_ngcontent-%COMP%] {\n  padding: 40px;\n  margin-right: -15px;\n  text-align: center;\n}\n\n  .mat-menu-content:not(:empty) {\n  padding: 0 !important;\n}\n\n  .mat-menu-panel {\n  position: fixed;\n  margin-top: 50px;\n  max-height: 300px !important;\n  overflow-y: hidden;\n}\n\n  .mat-menu-panel input {\n  padding: 10px;\n  font-size: 20px;\n  outline: none;\n  border: 1px solid #000;\n  border-radius: 3px;\n}\n\n.chip[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-radius: 3px;\n  background-color: #fff;\n  transition: background-color 250ms linear;\n  margin-top: 20px !important;\n}\n\n.chip[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.chip--active[_ngcontent-%COMP%] {\n  background-color: #000;\n  color: #fff;\n}\n\n.chip[_ngcontent-%COMP%]    ~ button[_ngcontent-%COMP%] {\n  margin-top: 20px !important;\n}\n\n.mat-standard-chip[_ngcontent-%COMP%]::after {\n  all: unset;\n}\n\n.card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 240px;\n  height: 350px;\n  padding: 0px 0px 30px;\n  margin: 20px;\n  text-align: center;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  overflow: hidden;\n}\n\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.card__favourite[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  top: 10px;\n  right: 0;\n  background-color: #fff;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);\n}\n\n.card__favourite[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.card__favourite--isFavourite[_ngcontent-%COMP%] {\n  color: #d50000;\n}\n\n.card__status[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  font-size: 22px;\n  position: absolute;\n  top: 60px;\n  right: 0;\n  background-color: #fff;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);\n}\n\n.card__status--communication[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n\n.card__status--sold[_ngcontent-%COMP%] {\n  color: #27b89b;\n}\n\n.card[_ngcontent-%COMP%]   mat-chip-list[_ngcontent-%COMP%] {\n  padding: 0 8px;\n}\n\n.card[_ngcontent-%COMP%]   mat-chip-list[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%] {\n  margin-top: 8px !important;\n}\n\n.card[_ngcontent-%COMP%]     .mat-chip-list-wrapper {\n  justify-content: center !important;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  filter: brightness(97%);\n  transform: scale(1.04), translateZ(0);\n  box-shadow: 0 14px 28px -6px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n\n.hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.filters[_ngcontent-%COMP%] {\n  margin: 0 40px;\n  padding: 0px 0px 15px;\n  border-bottom: 1px solid #a5a5a533;\n}\n\n.filters__results[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  color: #000000;\n}\n\n.filters__results[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  transition: all 320ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n}\n\n.filters__sort[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 7px 10px;\n  border: 1px solid;\n  border-radius: 3px;\n}\n\n.filters__sort[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  transition: transform 320ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n}\n\n.filters__items-count[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 10px 0 10px 20px;\n  border-left: 1px solid;\n}\n\n.menu-content[_ngcontent-%COMP%] {\n  max-height: 300px;\n  min-height: 64px;\n}\n\n.menu-content__categories[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n\n.notification-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 40px;\n  right: 25px;\n}\n\n.reload-card[_ngcontent-%COMP%] {\n  width: 390px;\n  height: 60px;\n  background-color: #000;\n  color: #fff;\n}\n\n.reload-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n.scroll-top-button[_ngcontent-%COMP%] {\n  width: 30px;\n  text-align: center;\n  cursor: pointer;\n  background-color: #000;\n  color: #fff;\n}\n\n.scroll-top-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n.black[_ngcontent-%COMP%] {\n  background-color: #000;\n  color: #fff;\n}\n\n.warn[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  color: #fff;\n}\n\n.center-self[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  overflow: hidden;\n  text-align: center;\n  word-break: break-word;\n}\n\n.ghost-loading__filter[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 30px;\n  border-radius: 3px;\n  background-color: #e6e6e6;\n  animation: pulse 1s infinite ease-in-out;\n  margin-top: 20px !important;\n}\n\n.ghost-loading__card-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n}\n\n.ghost-loading__card-title[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 21px;\n}\n\n.ghost-loading__card-timestamp[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 21px;\n}\n\n.ghost-loading__card-img[_ngcontent-%COMP%], .ghost-loading__card-title[_ngcontent-%COMP%], .ghost-loading__card-timestamp[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n  animation: pulse 1s infinite ease-in-out;\n}\n\n.rendering[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #e6e6e6;\n  width: 100%;\n  height: 185px;\n}\n\n.rendering[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n@media only screen and (max-width: 1024px) {\n  .content[_ngcontent-%COMP%] {\n    padding-top: 135px;\n  }\n}\n\n@media only screen and (max-width: 599px) {\n  *[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 0;\n    background-color: transparent;\n  }\n\n  .eStudy-intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-left: -5px;\n    margin-top: 290px;\n  }\n  .eStudy-intro[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-left: -15px;\n    margin-top: 200px;\n  }\n\n  .body[_ngcontent-%COMP%] {\n    padding: 0 15px 0 15px;\n  }\n\n  .page-quote[_ngcontent-%COMP%] {\n    padding: 40px 20px 20px;\n    margin-right: 0;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 250px;\n    padding: 0 0 30px;\n    margin: 20px 0;\n  }\n  .card__categories[_ngcontent-%COMP%] {\n    margin-bottom: -15px !important;\n  }\n  .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 120px;\n    border-radius: 0;\n  }\n  .card[_ngcontent-%COMP%]   mat-chip-list[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%] {\n    padding: 2px 8px;\n    font-size: 10px;\n  }\n\n    .mat-menu-panel {\n    width: 250px;\n    margin-top: 55px;\n    right: 15px;\n  }\n\n  .menu-content[_ngcontent-%COMP%] {\n    max-height: 260px;\n  }\n\n  .filters[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .filters[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n    width: 100%;\n    overflow-x: scroll;\n    padding: 0 15px;\n  }\n  .filters[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child   button[_ngcontent-%COMP%] {\n    min-width: -moz-fit-content;\n    min-width: fit-content;\n  }\n  .filters[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child::-webkit-scrollbar {\n    height: 0;\n    width: 0;\n    display: none;\n  }\n  .filters[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n    width: 100%;\n    padding: 0 15px;\n    margin-top: 20px;\n  }\n  .filters__sort[_ngcontent-%COMP%] {\n    margin-right: 0 !important;\n    padding: 7px 10px;\n  }\n  .filters__items-count[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 5px 0 5px 10px;\n  }\n  .filters__items-count[_ngcontent-%COMP%]::before {\n    left: -10px;\n  }\n\n  .notification-container[_ngcontent-%COMP%] {\n    right: 20px;\n  }\n\n  .reload-card[_ngcontent-%COMP%] {\n    width: 310px;\n    margin-bottom: 15px;\n    margin-right: 0 !important;\n  }\n  .reload-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin: 0 0 0 15px;\n  }\n  .reload-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-left: -35px;\n  }\n\n  .ghost-loading__filter[_ngcontent-%COMP%] {\n    margin-top: 10px !important;\n  }\n  .ghost-loading__card-img[_ngcontent-%COMP%] {\n    height: 120px;\n  }\n  .ghost-loading__card-title[_ngcontent-%COMP%] {\n    width: 120px;\n    margin-top: 10px;\n  }\n  .ghost-loading__card-img[_ngcontent-%COMP%], .ghost-loading__card-title[_ngcontent-%COMP%], .ghost-loading__card-timestamp[_ngcontent-%COMP%] {\n    background-color: #e6e6e6;\n    animation: pulse 1s infinite ease-in-out;\n  }\n\n  .rendering[_ngcontent-%COMP%] {\n    height: 120px;\n  }\n}\n\n@keyframes pulse {\n  0% {\n    background-color: rgba(165, 165, 165, 0.1);\n  }\n  50% {\n    background-color: rgba(165, 165, 165, 0.2);\n  }\n  100% {\n    background-color: rgba(165, 165, 165, 0.1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2R1Y3RzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFEQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtBQURGOztBQUdFO0VBQ0UsaUJBQUE7QUFESjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBRUEsc0JBQUE7RUFDQSxXQUFBO0FBSEY7O0FBS0U7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFISjs7QUFNRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBSko7O0FBUUE7RUFDRSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7QUFMRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBU0U7RUFDRSxxQkFBQTtBQU5KOztBQVNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQVBKOztBQVNJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQVBOOztBQVlBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Q0FBQTtFQUNBLDJCQUFBO0FBVEY7O0FBV0U7RUFDRSxrQkFBQTtBQVRKOztBQVlFO0VBQ0Usc0JDN0ZZO0VEOEZaLFdBQUE7QUFWSjs7QUFhRTtFQUNFLDJCQUFBO0FBWEo7O0FBZUE7RUFDRSxVQUFBO0FBWkY7O0FBZUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0VBQ0EsZ0JBQUE7QUFaRjs7QUFjRTtFQUNFLGtCQUFBO0FBWko7O0FBZUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBRUEsc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EscURBQUE7QUFmSjs7QUFpQkk7RUFDRSxlQUFBO0FBZk47O0FBa0JJO0VBQ0UsY0FBQTtBQWhCTjs7QUFvQkU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBRUEsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUVBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLHFEQUFBO0FBcEJKOztBQXNCSTtFQUNFLGNBQUE7QUFwQk47O0FBdUJJO0VBQ0UsY0FBQTtBQXJCTjs7QUF5QkU7RUFDRSxjQUFBO0FBdkJKOztBQXlCSTtFQUNFLDBCQUFBO0FBdkJOOztBQTJCRTtFQUNFLGtDQUFBO0FBekJKOztBQTZCQTtFQUNFLHVCQUFBO0VBQ0EscUNBQUE7RUFDQSxpRkFBQTtBQTFCRjs7QUE4QkE7RUFDRSxrQkFBQTtBQTNCRjs7QUE4QkE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxrQ0FBQTtBQTNCRjs7QUE2QkU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUVBLGNBQUE7QUE1Qko7O0FBOEJJO0VBQ0UsNERBQUE7QUE1Qk47O0FBZ0NFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQTlCSjs7QUFnQ0k7RUFDRSxnQkFBQTtFQUNBLGtFQUFBO0FBOUJOOztBQWtDRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQWhDSjs7QUFvQ0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBakNGOztBQW1DRTtFQUNFLGdCQUFBO0FBakNKOztBQXFDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQWxDRjs7QUFxQ0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUVBLHNCQUFBO0VBQ0EsV0FBQTtBQW5DRjs7QUFxQ0U7RUFDRSxlQUFBO0FBbkNKOztBQXVDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFFQSxzQkFBQTtFQUNBLFdBQUE7QUFyQ0Y7O0FBdUNFO0VBQ0UsZUFBQTtBQXJDSjs7QUF5Q0E7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUF0Q0Y7O0FBeUNBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBdENGOztBQXlDQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBdkNGOztBQTJDRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0EsMkJBQUE7QUF4Q0o7O0FBNENJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUExQ047O0FBNkNJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUEzQ047O0FBOENJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUE1Q047O0FBK0NJO0VBR0UseUJBQUE7RUFDQSx3Q0FBQTtBQS9DTjs7QUFvREE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFqREY7O0FBbURFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFqREo7O0FBcURBO0VBQ0U7SUFDRSxrQkFBQTtFQWxERjtBQUNGOztBQXFEQTtFQUNFO0lBQ0UsUUFBQTtJQUNBLDZCQUFBO0VBbkRGOztFQXVERTtJQUNFLGlCQUFBO0lBQ0EsaUJBQUE7RUFwREo7RUF1REU7SUFDRSxrQkFBQTtJQUNBLGlCQUFBO0VBckRKOztFQXlEQTtJQUNFLHNCQUFBO0VBdERGOztFQXlEQTtJQUNFLHVCQUFBO0lBQ0EsZUFBQTtFQXRERjs7RUF5REE7SUFDRSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0lBQ0EsY0FBQTtFQXRERjtFQXdERTtJQUNFLCtCQUFBO0VBdERKO0VBeURFO0lBQ0UsYUFBQTtJQUNBLGdCQUFBO0VBdkRKO0VBMkRJO0lBQ0UsZ0JBQUE7SUFDQSxlQUFBO0VBekROOztFQStERTtJQUNFLFlBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7RUE1REo7O0VBZ0VBO0lBQ0UsaUJBQUE7RUE3REY7O0VBZ0VBO0lBQ0UsU0FBQTtFQTdERjtFQStERTtJQUNFLFdBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7RUE3REo7RUErREk7SUFDRSwyQkFBQTtJQUFBLHNCQUFBO0VBN0ROO0VBZ0VJO0lBQ0UsU0FBQTtJQUNBLFFBQUE7SUFDQSxhQUFBO0VBOUROO0VBa0VFO0lBQ0UsV0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQWhFSjtFQW1FRTtJQUNFLDBCQUFBO0lBQ0EsaUJBQUE7RUFqRUo7RUFvRUU7SUFDRSxrQkFBQTtJQUNBLHVCQUFBO0VBbEVKO0VBb0VJO0lBQ0UsV0FBQTtFQWxFTjs7RUF1RUE7SUFDRSxXQUFBO0VBcEVGOztFQXVFQTtJQUNFLFlBQUE7SUFDQSxtQkFBQTtJQUNBLDBCQUFBO0VBcEVGO0VBc0VFO0lBQ0Usa0JBQUE7RUFwRUo7RUF1RUU7SUFDRSxrQkFBQTtFQXJFSjs7RUEwRUU7SUFDRSwyQkFBQTtFQXZFSjtFQTJFSTtJQUNFLGFBQUE7RUF6RU47RUE0RUk7SUFDRSxZQUFBO0lBQ0EsZ0JBQUE7RUExRU47RUE2RUk7SUFHRSx5QkFBQTtJQUNBLHdDQUFBO0VBN0VOOztFQWtGQTtJQUNFLGFBQUE7RUEvRUY7QUFDRjs7QUFrRkE7RUFDRTtJQUNFLDBDQUFBO0VBaEZGO0VBa0ZBO0lBQ0UsMENBQUE7RUFoRkY7RUFrRkE7SUFDRSwwQ0FBQTtFQWhGRjtBQUNGIiwiZmlsZSI6InByb2R1Y3RzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbi5tYWluLWNvbnRlbnQge1xyXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxufVxyXG5cclxuZXN0dWR5LXVpLWhlYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICB0cmFuc2l0aW9uOiB0b3AgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2U7XHJcblxyXG4gICYtLXNwYWNpbmcge1xyXG4gICAgcGFkZGluZy10b3A6IDcwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZVN0dWR5LWludHJvIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiA5OTk5O1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5cclxuICBpbWcge1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDIxNXB4O1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib2R5IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4OiAxO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5wYWdlLXF1b3RlIHtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG46Om5nLWRlZXAge1xyXG4gIC5tYXQtbWVudS1jb250ZW50Om5vdCg6ZW1wdHkpIHtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tYXQtbWVudS1wYW5lbCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHggIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNoaXAge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDI1MG1zIGxpbmVhcjtcclxuICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgJi0tYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAmIH4gYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtc3RhbmRhcmQtY2hpcDo6YWZ0ZXIge1xyXG4gIGFsbDogdW5zZXQ7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDI0MHB4O1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbiAgcGFkZGluZzogMHB4IDBweCAzMHB4O1xyXG4gIG1hcmdpbjogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgaW1nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gICZfX2Zhdm91cml0ZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xyXG4gICAgYm94LXNoYWRvdzogMCA3cHggMzBweCAtMTBweCByZ2JhKDE1MCwgMTcwLCAxODAsIDAuNSk7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAmLS1pc0Zhdm91cml0ZSB7XHJcbiAgICAgIGNvbG9yOiAjZDUwMDAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fc3RhdHVzIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjBweDtcclxuICAgIHJpZ2h0OiAwO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDdweCAzMHB4IC0xMHB4IHJnYmEoMTUwLCAxNzAsIDE4MCwgMC41KTtcclxuXHJcbiAgICAmLS1jb21tdW5pY2F0aW9uIHtcclxuICAgICAgY29sb3I6ICMzZjUxYjU7XHJcbiAgICB9XHJcblxyXG4gICAgJi0tc29sZCB7XHJcbiAgICAgIGNvbG9yOiAjMjdiODliO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWF0LWNoaXAtbGlzdCB7XHJcbiAgICBwYWRkaW5nOiAwIDhweDtcclxuXHJcbiAgICBtYXQtY2hpcCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5tYXQtY2hpcC1saXN0LXdyYXBwZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICBmaWx0ZXI6IGJyaWdodG5lc3MoOTclKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpLCB0cmFuc2xhdGVaKDApO1xyXG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjI1KSxcclxuICAgIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLmZpbHRlcnMge1xyXG4gIG1hcmdpbjogMCA0MHB4O1xyXG4gIHBhZGRpbmc6IDBweCAwcHggMTVweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2E1YTVhNTMzO1xyXG5cclxuICAmX19yZXN1bHRzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuXHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAzMjBtcyBjdWJpYy1iZXppZXIoMC43ODUsIDAuMTM1LCAwLjE1LCAwLjg2KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3NvcnQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogN3B4IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHJcbiAgICBpIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMyMG1zIGN1YmljLWJlemllcigwLjc4NSwgMC4xMzUsIDAuMTUsIDAuODYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9faXRlbXMtY291bnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTBweCAwIDEwcHggMjBweDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubWVudS1jb250ZW50IHtcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICBtaW4taGVpZ2h0OiA2NHB4O1xyXG5cclxuICAmX19jYXRlZ29yaWVzIHtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogNDBweDtcclxuICByaWdodDogMjVweDtcclxufVxyXG5cclxuLnJlbG9hZC1jYXJkIHtcclxuICB3aWR0aDogMzkwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5cclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcbn1cclxuXHJcbi5zY3JvbGwtdG9wLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYmxhY2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi53YXJuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uY2VudGVyLXNlbGYge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxufVxyXG5cclxuLmdob3N0LWxvYWRpbmcge1xyXG4gICZfX2ZpbHRlciB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG4gICAgYW5pbWF0aW9uOiBwdWxzZSAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICZfX2NhcmQge1xyXG4gICAgJi1pbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgIH1cclxuXHJcbiAgICAmLXRpdGxlIHtcclxuICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICBoZWlnaHQ6IDIxcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi10aW1lc3RhbXAge1xyXG4gICAgICB3aWR0aDogOTBweDtcclxuICAgICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgfVxyXG5cclxuICAgICYtaW1nLFxyXG4gICAgJi10aXRsZSxcclxuICAgICYtdGltZXN0YW1wIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxuICAgICAgYW5pbWF0aW9uOiBwdWxzZSAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5yZW5kZXJpbmcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTg1cHg7XHJcblxyXG4gIGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZy10b3A6IDEzNXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xyXG4gICo6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAuZVN0dWR5LWludHJvIHtcclxuICAgIGgxIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDI5MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHggMCAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLnBhZ2UtcXVvdGUge1xyXG4gICAgcGFkZGluZzogNDBweCAyMHB4IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgcGFkZGluZzogMCAwIDMwcHg7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuXHJcbiAgICAmX19jYXRlZ29yaWVzIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogLTE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIG1hdC1jaGlwLWxpc3Qge1xyXG4gICAgICBtYXQtY2hpcCB7XHJcbiAgICAgICAgcGFkZGluZzogMnB4IDhweDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCB7XHJcbiAgICAubWF0LW1lbnUtcGFuZWwge1xyXG4gICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDU1cHg7XHJcbiAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1lbnUtY29udGVudCB7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNjBweDtcclxuICB9XHJcblxyXG4gIC5maWx0ZXJzIHtcclxuICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAmID4gZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmID4gZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fc29ydCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nOiA3cHggMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAmX19pdGVtcy1jb3VudCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogNXB4IDAgNXB4IDEwcHg7XHJcblxyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubm90aWZpY2F0aW9uLWNvbnRhaW5lciB7XHJcbiAgICByaWdodDogMjBweDtcclxuICB9XHJcblxyXG4gIC5yZWxvYWQtY2FyZCB7XHJcbiAgICB3aWR0aDogMzEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgbWFyZ2luOiAwIDAgMCAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMzVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5naG9zdC1sb2FkaW5nIHtcclxuICAgICZfX2ZpbHRlciB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAmX19jYXJkIHtcclxuICAgICAgJi1pbWcge1xyXG4gICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYtdGl0bGUge1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLWltZyxcclxuICAgICAgJi10aXRsZSxcclxuICAgICAgJi10aW1lc3RhbXAge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJlbmRlcmluZyB7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgMCUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjUsIDE2NSwgMTY1LCAwLjEpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjUsIDE2NSwgMTY1LCAwLjIpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY1LCAxNjUsIDE2NSwgMC4xKTtcclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnktY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktY29sb3I6ICM1NDZlN2E7XHJcbiR3YXJuLWNvbG9yOiAjZDUwMDAwO1xyXG5cclxuJG1hdC1ibHVlLWdyZXk6IChcclxuICA1MDogI2VjZWZmMSxcclxuICAxMDA6ICNjZmQ4ZGMsXHJcbiAgMjAwOiAjYjBiZWM1LFxyXG4gIDMwMDogIzkwYTRhZSxcclxuICA0MDA6ICM3ODkwOWMsXHJcbiAgNTAwOiAjYmJkNWUyLFxyXG4gIDYwMDogIzU0NmU3YSxcclxuICA3MDA6ICM0NTVhNjQsXHJcbiAgODAwOiAjMzc0NzRmLFxyXG4gIDkwMDogIzI2MzIzOCxcclxuICBBMTAwOiAjY2ZkOGRjLFxyXG4gIEEyMDA6ICNiMGJlYzUsXHJcbiAgQTQwMDogIzc4OTA5YyxcclxuICBBNzAwOiAjNDU1YTY0LFxyXG4pO1xyXG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ display: 'none', opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms 150ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ display: 'block', opacity: 1 })),
                ]),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('320ms 150ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('280ms 150ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                ]),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('rotate', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('LOW', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotate(0)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('HIGH', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotate(180deg)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open <=> closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('250ms')]),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeOutContainer', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('280ms 150ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                ]),
            ]),
        ] } });


/***/ }),

/***/ "jyIL":
/*!**********************************************************************!*\
  !*** ./src/app/product-detail-page/product-detail-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProductDetailPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPageComponent", function() { return ProductDetailPageComponent; });
/* harmony import */ var _types_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/product */ "zWuZ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _feature_components_feature_item_creation_dialog_feature_item_creation_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../feature-components/feature-item-creation-dialog/feature-item-creation-dialog.component */ "OLNt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/product.service */ "Gdn9");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/chat.service */ "sjK5");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _ui_components_ui_header_ui_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ui-components/ui-header/ui-header.component */ "fvR5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_components_ui_footer_ui_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../ui-components/ui-footer/ui-footer.component */ "Wwn5");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/** Types */























const _c0 = ["chatContainer"];
function ProductDetailPageComponent_ng_container_4_img_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductDetailPageComponent_ng_container_4_img_2_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); const i_r16 = ctx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r17.showImage(i_r16); })("load", function ProductDetailPageComponent_ng_container_4_img_2_Template_img_load_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r19.onImageLoad($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", image_r15, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
} }
function ProductDetailPageComponent_ng_container_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0, 16);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
function ProductDetailPageComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ProductDetailPageComponent_ng_container_4_img_2_Template, 1, 1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ProductDetailPageComponent_ng_container_4_ng_container_4_Template, 1, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.product.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-image", "url(" + ctx_r0.product.images[ctx_r0.selectedImage] + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.useMobileView);
} }
function ProductDetailPageComponent_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0, 16);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
function ProductDetailPageComponent_ng_container_6_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductDetailPageComponent_ng_container_6_ng_container_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30); const i_r28 = ctx.index; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r29.setStatusToProduct(i_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const status_r27 = ctx.$implicit;
    const i_r28 = ctx.index;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMapInterpolate1"]("status ", status_r27.class, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("status--selected", ctx_r21.loggedUser && ctx_r21.loggedUser._id === ctx_r21.product.userId && i_r28 === ctx_r21.selectedStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matTooltip", status_r27.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](status_r27.icon);
} }
function ProductDetailPageComponent_ng_container_6_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Produkt je ozna\u010Den jako ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Prodan\u00FD");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " p\u0159idejte si produkt do obl\u00EDben\u00FDch a vy\u010Dkejte zda bude je\u0161t\u011B dostupn\u00FD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ProductDetailPageComponent_ng_container_6_ng_container_10_div_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r34.getUnreadMessages(i_r33), " ");
} }
function ProductDetailPageComponent_ng_container_6_ng_container_10_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductDetailPageComponent_ng_container_6_ng_container_10_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r37); const chatUser_r32 = ctx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r36.selectChat(chatUser_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ProductDetailPageComponent_ng_container_6_ng_container_10_div_2_ng_container_2_Template, 3, 1, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chatUser_r32 = ctx.$implicit;
    const i_r33 = ctx.index;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("avatar-mini--selected", ctx_r31.activeChat === i_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matTooltip", chatUser_r32.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", chatUser_r32.username.slice(0, 2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r31.getUnreadMessages(i_r33) > 0 && ctx_r31.author);
} }
function ProductDetailPageComponent_ng_container_6_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ProductDetailPageComponent_ng_container_6_ng_container_10_div_2_Template, 3, 5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r23.chatUsers);
} }
function ProductDetailPageComponent_ng_container_6_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-card", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductDetailPageComponent_ng_container_6_ng_container_11_Template_mat_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r38.scrollToBottom(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} }
function ProductDetailPageComponent_ng_container_6_ng_container_14_div_1_small_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](((tmp_0_0 = ctx_r42.getUser(message_r41.authorId)) == null ? null : tmp_0_0.username) || ctx_r42.author.username);
} }
function ProductDetailPageComponent_ng_container_6_ng_container_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ProductDetailPageComponent_ng_container_6_ng_container_14_div_1_small_5_Template, 2, 1, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r41 = ctx.$implicit;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("chat__messages--normal", ctx_r40.loggedUser._id != message_r41.authorId)("chat__messages--reverse", ctx_r40.loggedUser._id === message_r41.authorId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("fxLayout", ctx_r40.loggedUser._id === message_r41.authorId ? "row-reverse" : "row");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", message_r41.authorId === ctx_r40.author._id ? ctx_r40.author.username.slice(0, 2) : ctx_r40.getUser(message_r41.authorId).username.slice(0, 2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", message_r41.text, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r40.loggedUser._id !== message_r41.authorId);
} }
function ProductDetailPageComponent_ng_container_6_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ProductDetailPageComponent_ng_container_6_ng_container_14_div_1_Template, 6, 8, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r26.chats[ctx_r26.activeChat].messages);
} }
function ProductDetailPageComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ProductDetailPageComponent_ng_container_6_ng_container_2_Template, 1, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Stav produktu:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ProductDetailPageComponent_ng_container_6_ng_container_7_Template, 3, 8, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ProductDetailPageComponent_ng_container_6_div_9_Template, 8, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ProductDetailPageComponent_ng_container_6_ng_container_10_Template, 3, 1, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ProductDetailPageComponent_ng_container_6_ng_container_11_Template, 3, 0, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("scroll", function ProductDetailPageComponent_ng_container_6_Template_div_scroll_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r44.showScrollToBottom($event.target); })("load", function ProductDetailPageComponent_ng_container_6_Template_div_load_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r45); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r46.scrollToBottom(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ProductDetailPageComponent_ng_container_6_ng_container_14_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "mat-card", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup.enter", function ProductDetailPageComponent_ng_container_6_Template_input_keyup_enter_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r45); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r47.sendMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductDetailPageComponent_ng_container_6_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r45); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r48.sendMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " Poslat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.useMobileView);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.getStatuses());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.loggedUser && ctx_r1.loggedUser._id !== ctx_r1.author._id && ctx_r1.product.status === "SOLD" && (ctx_r1.chats[ctx_r1.activeChat] == null ? null : ctx_r1.chats[ctx_r1.activeChat].messages == null ? null : ctx_r1.chats[ctx_r1.activeChat].messages.length) <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.chatUsers.length > 0 && ctx_r1.chats.length > 0 && ctx_r1.loggedUser && ctx_r1.loggedUser._id === ctx_r1.author._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.showScrollButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r1.chats[ctx_r1.activeChat] == null ? null : ctx_r1.chats[ctx_r1.activeChat].messages == null ? null : ctx_r1.chats[ctx_r1.activeChat].messages.length) > 0)("ngIfElse", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", ctx_r1.messageField);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.messageField.value.length === 0 || ctx_r1.loggedUser && ctx_r1.loggedUser._id === ctx_r1.author._id && ctx_r1.chats.length <= 0);
} }
function ProductDetailPageComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0, 16);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngTemplateOutlet", _r11);
} }
function ProductDetailPageComponent_ng_template_10_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "sup", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductDetailPageComponent_ng_template_10_ng_container_3_Template_sup_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r51.openEditDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} }
function ProductDetailPageComponent_ng_template_10_mat_chip_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-chip", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", category_r53, " ");
} }
function ProductDetailPageComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ProductDetailPageComponent_ng_template_10_ng_container_3_Template, 3, 0, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-chip-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ProductDetailPageComponent_ng_template_10_mat_chip_5_Template, 2, 1, "mat-chip", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", ctx_r4.product.title, " - ", ctx_r4.product.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.loggedUser && ctx_r4.loggedUser._id === ctx_r4.product.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r4.product.categories);
} }
function ProductDetailPageComponent_ng_template_12_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} }
function ProductDetailPageComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ProductDetailPageComponent_ng_template_12_ng_container_8_Template, 11, 0, "ng-container", 23);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.useMobileView);
} }
function ProductDetailPageComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "div", 54);
} }
function ProductDetailPageComponent_ng_template_16_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Zat\u00EDm nem\u00E1te \u017E\u00E1dn\u00E9 zpr\u00E1vy, jakmile n\u011Bkdo zareaguje, chat se v\u00E1m ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "zp\u0159\u00EDstupn\u00ED");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ProductDetailPageComponent_ng_template_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Zat\u00EDm nem\u00E1te \u017E\u00E1dn\u00E9 zpr\u00E1vy, zpr\u00E1vu po\u0161lete po kliknut\u00ED na tla\u010D\u00EDtko ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Poslat");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function ProductDetailPageComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, ProductDetailPageComponent_ng_template_16_div_0_Template, 4, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ProductDetailPageComponent_ng_template_16_div_1_Template, 4, 0, "div", 23);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r10.loggedUser && ctx_r10.loggedUser._id === ctx_r10.author._id && ctx_r10.chats.length <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r10.loggedUser || ctx_r10.loggedUser._id !== ctx_r10.author._id);
} }
function ProductDetailPageComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Stav produktu byl \u00FAsp\u011B\u0161n\u011B zm\u011Bn\u011Bn");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@fadeOutContainer", undefined);
} }
class ProductDetailPageComponent {
    constructor(route, productService, userService, authService, chatService, dialog, router) {
        this.route = route;
        this.productService = productService;
        this.userService = userService;
        this.authService = authService;
        this.chatService = chatService;
        this.dialog = dialog;
        this.router = router;
        this.loggedUser = this.authService.getUser();
        this.messageField = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.selectedImage = 0;
        this.imagesLoaded = false;
        this.loaded = false;
        this.showScrollButton = false;
        this.statusChanged = false;
        this.useMobileView = false;
        this.chats = [];
        this.activeChat = 0;
        this.chatUsers = [];
        this.selectedStatus = -1;
        this.imagesLoadedCount = 0;
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"]();
        this.messageStateBuffer = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"]();
        this.id = this.route.snapshot.paramMap.get('id');
    }
    onResize(event) {
        this.useMobileView = event.target.innerWidth <= 1279;
    }
    ngOnInit() {
        this.useMobileView = window.innerWidth <= 1279;
        const idParam = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('_id', this.id);
        this.productService
            .getProducts(idParam)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((product) => {
            if (product) {
                this.product = product[0];
                this.selectedStatus = _types_product__WEBPACK_IMPORTED_MODULE_0__["STATUSES"].findIndex((status) => status.type === this.product.status);
                return this.chatService
                    .getChats(product[0]._id)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null)));
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((chats) => {
            let userIdsParam = `_id=${this.product.userId}`;
            if (chats) {
                chats.forEach((chat) => {
                    this.chats.push(chat);
                    userIdsParam += `&_id=${chat.userIds.filter((user) => user._id !== this.product.userId)[0]}`;
                });
            }
            return this.userService.getUsers(userIdsParam);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe))
            .subscribe((users) => {
            this.author = users.find((user) => user._id === this.product.userId);
            this.chatUsers = users.filter((user) => user._id !== this.author._id);
            if (this.chats.length > 0 &&
                this.getUnreadMessages(this.activeChat) > 0) {
                this.messageStateBuffer.next(this.chats[this.activeChat]);
            }
            /** This is not a good practise cuz we break angular-lifecycle => #Refactor */
            setTimeout(() => this.scrollToBottom());
            this.loaded = true;
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(1000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["skipWhile"])(() => !this.loaded || this.chats.length === 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(() => {
            const listOfChats = [];
            this.chats.map((chat) => listOfChats.push(this.chatService.getChatState(chat._id)));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(listOfChats);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((chats) => {
            return [].concat.apply([], chats.map((chat) => chat));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe))
            .subscribe((chats) => {
            chats.forEach((chat, index) => {
                if (this.chats[index].changedDate !== chat.changedDate) {
                    this.chats[index] = Object.assign(Object.assign({}, this.chats[index]), { messages: chat.messages.map((message) => {
                            return Object.assign({}, message);
                        }), changedDate: chat.changedDate });
                    if (chat._id === this.chats[this.activeChat]._id) {
                        this.messageStateBuffer.next(chat);
                    }
                    /** This is not a good practise cuz we break angular-lifecycle => #Refactor */
                    setTimeout(() => this.scrollToBottom());
                }
            });
        });
        this.messageStateBuffer
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((chat) => {
            chat.messages.map((message) => (message.status = 'READ'));
            return chat;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((chat) => this.chatService.patchChat(chat._id, chat)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe))
            .subscribe((updatedChat) => {
            this.chats.find((chat) => chat._id === updatedChat._id).messages =
                updatedChat.messages;
        });
    }
    showImage(index) {
        this.selectedImage = index;
    }
    getUser(id) {
        if (id === this.loggedUser._id) {
            return this.loggedUser;
        }
        const userInActiveChat = id
            ? id
            : this.chats[this.activeChat].userIds.filter((id) => id !== this.product.userId)[0];
        return this.chatUsers.find((user) => user._id === userInActiveChat);
    }
    getUnreadMessages(index) {
        return this.chats[index].messages.filter((message) => message.status === 'CREATED' && message.authorId !== this.author._id).length;
    }
    getStatuses() {
        if (this.loggedUser && this.product.userId === this.loggedUser._id) {
            return _types_product__WEBPACK_IMPORTED_MODULE_0__["STATUSES"];
        }
        else {
            return _types_product__WEBPACK_IMPORTED_MODULE_0__["STATUSES"].filter((item, index) => index === this.selectedStatus);
        }
    }
    openEditDialog() {
        const dialogRef = this.dialog.open(_feature_components_feature_item_creation_dialog_feature_item_creation_dialog_component__WEBPACK_IMPORTED_MODULE_6__["FeatureItemCreationDialogComponent"], {
            height: '80vh',
            width: '70vw',
            data: this.product,
        });
        dialogRef.afterClosed().subscribe((product) => {
            if (product) {
                this.product = product;
            }
        });
    }
    selectChat(user) {
        this.activeChat =
            this.chats.findIndex((chat) => chat.userIds.includes(user._id)) || 0;
        if (this.getUnreadMessages(this.activeChat) > 0) {
            this.messageStateBuffer.next(this.chats[this.activeChat]);
        }
        /** This is not a good practise cuz we break angular-lifecycle => #Refactor */
        setTimeout(() => this.scrollToBottom());
        this.showScrollButton = false;
    }
    showScrollToBottom(event) {
        if (event.scrollTop + 20 < this.chatContainer.nativeElement.offsetHeight) {
            this.showScrollButton = true;
        }
        else {
            this.showScrollButton = false;
        }
    }
    scrollToBottom() {
        try {
            this.chatContainer.nativeElement.scrollTop =
                this.chatContainer.nativeElement.scrollHeight * 999;
        }
        catch (err) { }
        this.showScrollButton = false;
    }
    setStatusToProduct(index) {
        if (this.product.userId === this.loggedUser._id) {
            this.selectedStatus = index;
            const product = Object.assign(Object.assign({}, this.product), { status: _types_product__WEBPACK_IMPORTED_MODULE_0__["STATUSES"][this.selectedStatus].type, images: this.product.images.map((image) => image.replace(this.productService.AWS_URL, '')) });
            this.productService
                .patchProduct(this.product._id, product)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe))
                .subscribe((updatedProduct) => {
                this.product = Object.assign(Object.assign({}, updatedProduct), { images: updatedProduct.images.map((image) => `${this.productService.AWS_URL}${image}`) });
                this.statusChanged = true;
                setTimeout(() => {
                    this.statusChanged = false;
                }, 2000);
            });
        }
    }
    constructUrlFromMessage(message) {
        let match = message.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi);
        let formatedmessage = message;
        match === null || match === void 0 ? void 0 : match.map((url) => {
            formatedmessage = formatedmessage.replace(url, '<a href="' + url + '" target="_BLANK">' + url + '</a>');
        });
        return formatedmessage;
    }
    destructFromMessage(message) {
        var _a;
        const match = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
        const destructed = ((_a = message.match(match)) === null || _a === void 0 ? void 0 : _a[1]) || message;
        return destructed;
    }
    sendMessage() {
        if (!this.loggedUser) {
            this.router.navigate(['/login']);
            return;
        }
        const sentForChat = this.chats.length > 0 ? this.chats[this.activeChat] : null;
        let message = {
            text: this.messageField.value,
            chatId: (sentForChat === null || sentForChat === void 0 ? void 0 : sentForChat._id) || '',
            productId: this.product._id,
        };
        const chatRoom = this.chats.length > 0
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null)
            : this.chatService.createChat({
                userIds: [this.loggedUser._id, this.author._id],
                productId: this.product._id,
                messages: [],
            });
        this.messageField.setValue('', { emitEvent: false });
        chatRoom
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((chat) => chat || sentForChat), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((chat) => {
            message.chatId = chat._id;
            return this.chatService.sendMessage(message);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe))
            .subscribe((chat) => {
            this.chats[this.activeChat] = chat;
            /** This is not a good practise cuz we break angular-lifecycle => #Refactor */
            setTimeout(() => this.scrollToBottom());
        });
    }
    onImageLoad(evt) {
        if (evt && evt.target) {
            this.product.loaded = true;
            this.imagesLoadedCount++;
            if (this.product.images.length === this.imagesLoadedCount) {
                this.loaded = true;
            }
        }
    }
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
ProductDetailPageComponent.ɵfac = function ProductDetailPageComponent_Factory(t) { return new (t || ProductDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_12__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
ProductDetailPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ProductDetailPageComponent, selectors: [["estudy-product-detail-page"]], viewQuery: function ProductDetailPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.chatContainer = _t.first);
    } }, hostBindings: function ProductDetailPageComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("resize", function ProductDetailPageComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresolveWindow"]);
    } }, decls: 20, vars: 5, consts: [["fxLayout", "column", 1, "main-content"], ["fxLayout", "row", "fxLayoutAlign", "center start", "fxLayout.lt-lg", "column", "fxLayoutAlign.lt-lg", "start center", 1, "body"], ["fxLayout", "row", "fxLayout.lt-lg", "column-reverse", "fxFlex", "0 0 50%"], [4, "ngIf", "ngIfElse"], ["fxLayout", "column", "fxLayoutGap", "45px", "fxLayoutGap.lt-lg", "20px", "fxFlex", "0 0 50%"], ["fxLayout", "row", "fxLayoutAlign", "start end", "fxLayoutGap", "20px", 1, "notification-container"], [3, "ngTemplateOutlet", 4, "ngIf"], ["productTitle", ""], ["ghostLoadingImages", ""], ["ghostLoadingProduct", ""], ["noChat", ""], ["statusChangedNotification", ""], ["fxLayout", "column", "fxLayout.lt-lg", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "20px", 1, "image-list"], ["width", "150", "loading", "lazy", 3, "src", "click", "load", 4, "ngFor", "ngForOf"], [1, "big-image"], ["width", "150", "loading", "lazy", 3, "src", "click", "load"], [3, "ngTemplateOutlet"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", "fxLayout.lt-lg", "column"], ["fxLayout", "column", "fxLayoutGap", "10px", 1, "statuses"], ["fxLayout", "row", "fxLayoutAlign", "end center", "fxLayoutGap", "10px"], [4, "ngFor", "ngForOf"], ["fxLayout", "column", "fxLayoutAlign", "space-between start", 1, "chat"], ["class", "chat__wrapper", "fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf"], [4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "end start", "fxLayoutGap", "20px", 1, "chat__messages", 3, "scroll", "load"], ["chatContainer", ""], ["fxlayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap.lt-lg", "10px"], ["placeholder", "Zpr\u00E1va", 3, "formControl", "keyup.enter"], ["mat-flat-button", "", 1, "black", 3, "disabled", "click"], [1, "fas", "fa-paper-plane"], ["mat-flat-button", "", "disableRipple", "", "matTooltipPosition", "below", 3, "matTooltip", "click"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "chat__wrapper"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "10px", 1, "users-chat"], ["class", "avatar-mini", "fxLayout", "column", "fxLayoutAlign", "center center", "matTooltipPosition", "above", 3, "matTooltip", "avatar-mini--selected", "click", 4, "ngFor", "ngForOf"], ["fxLayout", "column", "fxLayoutAlign", "center center", "matTooltipPosition", "above", 1, "avatar-mini", 3, "matTooltip", "click"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "length-circle"], [1, "scroll-bottom-button", 3, "click"], [1, "fas", "fa-arrow-alt-circle-down"], ["fxLayoutGap", "10px", 3, "fxLayout", "chat__messages--normal", "chat__messages--reverse", 4, "ngFor", "ngForOf"], ["fxLayoutGap", "10px", 3, "fxLayout"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "avatar-mini"], ["fxLayout", "column", "fxLayoutAlign", "start start"], ["fxLayoutAlign", "center center", 1, "chat__message", 3, "innerHTML"], ["fxLayout", "column", "fxLayoutGap", "10px", 1, "product-title"], ["class", "chip", "color", "primary", 4, "ngFor", "ngForOf"], ["matTooltip", "Upravit produkt", "matTooltipPosition", "below", 1, "edit-button", 3, "click"], [1, "fas", "fa-edit"], ["color", "primary", 1, "chip"], ["fxLayout", "column", "fxLayout.lt-lg", "row", "fxLayoutGap", "20px", 1, "image-list", "image-list--loading"], [1, "big-image", "big-image--loading"], ["fxLayout.lt-lg", "column", "fxLayoutGap.lt-lg", "10px", 1, "product-title--loading"], ["fxLayout.lt-lg", "row", "fxLayoutGap.lt-lg", "10px"], ["fxLayout", "column", "fxLayoutGap", "10px", 1, "product-title--loading"], ["fxLayout", "row", "fxLayoutGap", "10px"], [1, "chat--loading"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "change-card"], [1, "fas", "fa-check-circle"]], template: function ProductDetailPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "estudy-ui-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ProductDetailPageComponent_ng_container_4_Template, 5, 4, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ProductDetailPageComponent_ng_container_6_Template, 20, 9, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ProductDetailPageComponent_ng_container_8_Template, 1, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "estudy-ui-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ProductDetailPageComponent_ng_template_10_Template, 6, 4, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, ProductDetailPageComponent_ng_template_12_Template, 9, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ProductDetailPageComponent_ng_template_14_Template, 11, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, ProductDetailPageComponent_ng_template_16_Template, 2, 2, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ProductDetailPageComponent_ng_template_18_Template, 6, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](13);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loaded)("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loaded)("ngIfElse", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.statusChanged);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutDirective"], _ui_components_ui_header_ui_header_component__WEBPACK_IMPORTED_MODULE_15__["UiHeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutGapDirective"], _ui_components_ui_footer_ui_footer_component__WEBPACK_IMPORTED_MODULE_17__["UiFooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgTemplateOutlet"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChip"]], styles: [".main-content[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  max-height: 100vh;\n  min-width: 100%;\n}\n\n.body[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 40px;\n  overflow-y: auto;\n}\n\n.mat-standard-chip[_ngcontent-%COMP%]::after {\n  all: unset;\n}\n\n.image-list[_ngcontent-%COMP%] {\n  cursor: pointer;\n  max-width: 350px;\n}\n\n.image-list--loading[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 150px;\n  background-color: #e6e6e6;\n  animation: pulse 1s infinite ease-in-out;\n}\n\n.big-image[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 400px;\n  margin: 0px 40px;\n  background-size: contain !important;\n  background-repeat: no-repeat !important;\n}\n\n.big-image--loading[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n  animation: pulse 1s infinite ease-in-out;\n}\n\n.product-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\n.product-title--loading[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.product-title--loading[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  height: 40px;\n  width: 70%;\n  background-color: #e6e6e6;\n  animation: pulse 1s infinite ease-in-out;\n}\n\n.product-title--loading[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2)   div[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 60px;\n  background-color: #e6e6e6;\n  animation: pulse 1s infinite ease-in-out;\n}\n\n.edit-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 18px;\n  transition: all 320ms ease-in-out;\n}\n\n.edit-button[_ngcontent-%COMP%]:hover {\n  color: #3f51b5;\n}\n\n.statuses[_ngcontent-%COMP%] {\n  min-width: 90px;\n  margin-top: 10px;\n}\n\n.status[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 22px;\n  transform: scale(0.9);\n  transition: all 320ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.status--communication[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n\n.status--sold[_ngcontent-%COMP%] {\n  background-color: #27b89b;\n}\n\n.status--selected[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n\n.status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: -3px !important;\n}\n\n.chip[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  background-color: #000;\n  color: #fff;\n  transition: background-color 250ms linear;\n}\n\n.users-chat[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 20px;\n  border-radius: 4px 4px 0 0;\n  background-color: #fff;\n}\n\n.users-chat[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n\n.users-chat[_ngcontent-%COMP%]    + .scroll-bottom-button[_ngcontent-%COMP%] {\n  top: 70px;\n}\n\n.avatar-mini[_ngcontent-%COMP%] {\n  height: 40px;\n  min-width: 40px;\n  border-radius: 4px;\n  font-size: 15px;\n  text-transform: uppercase;\n  color: #fff;\n  background-color: #000000;\n}\n\n.avatar-mini--selected[_ngcontent-%COMP%] {\n  color: #000000;\n  background-color: #fff;\n  border: 1px solid #000;\n}\n\n.length-circle[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  font-size: 12px;\n  background-color: #d50000;\n  color: #fff;\n  top: -6px;\n  right: -5px;\n  z-index: 6;\n}\n\n.black[_ngcontent-%COMP%] {\n  background-color: #000;\n  color: #fff;\n}\n\n.scroll-bottom-button[_ngcontent-%COMP%] {\n  width: 20px !important;\n  height: 20px;\n  padding: 10px;\n  border-radius: 4px !important;\n  position: absolute;\n  top: 10px;\n  left: 0;\n  right: 0;\n  margin-right: auto;\n  margin-left: auto;\n  transition: opacity 320ms cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  opacity: 0.2;\n  text-align: center;\n  cursor: pointer;\n  background-color: #000;\n  color: #fff;\n}\n\n.scroll-bottom-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.scroll-bottom-button[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.chat[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #a5a5a51a;\n  border-radius: 3px;\n}\n\n.chat__wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 995;\n  background-color: rgba(72, 72, 72, 0.4);\n  color: #fff;\n  text-align: center;\n  border-radius: 3px;\n}\n\n.chat__messages[_ngcontent-%COMP%] {\n  display: block !important;\n  height: 300px;\n  width: 100%;\n  padding: 20px;\n  overflow-y: auto;\n  scroll-behavior: smooth;\n}\n\n.chat__messages--normal[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.chat__messages--reverse[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: end;\n}\n\n.chat__message[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 3px;\n  word-break: break-word;\n  background-color: #fff;\n}\n\n.chat__message[_ngcontent-%COMP%]    + small[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.chat[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 0 0 4px 4px;\n}\n\n.chat[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 70%;\n  padding: 10px 45px 10px 20px;\n  font-size: 16px;\n  outline: none;\n  border: 1px solid #a5a5a51a;\n  border-radius: 3px;\n}\n\n.chat[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 2px 16px;\n}\n\n.chat[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.chat--loading[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 365px;\n  background-color: #e6e6e6;\n  animation: pulse 1s infinite ease-in-out;\n}\n\n.notification-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 40px;\n  right: 25px;\n}\n\n.change-card[_ngcontent-%COMP%] {\n  width: 390px;\n  height: 60px;\n  background-color: #27b89b;\n  color: #fff;\n}\n\n.change-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n@media only screen and (max-width: 1279px) {\n  .body[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .body[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n    width: 100%;\n    overflow: hidden;\n  }\n  .body[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n    width: 100%;\n  }\n\n  .product-title[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    margin-right: 0;\n  }\n  .product-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 20px;\n    text-align: center;\n  }\n  .product-title--loading[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .product-title--loading[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n    height: 30px;\n    width: 100%;\n    background-color: #e6e6e6;\n    animation: pulse 1s infinite ease-in-out;\n  }\n  .product-title--loading[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2)   div[_ngcontent-%COMP%] {\n    height: 30px;\n    width: 60px;\n    background-color: #e6e6e6;\n    animation: pulse 1s infinite ease-in-out;\n  }\n\n  .image-list[_ngcontent-%COMP%] {\n    min-width: 100%;\n    max-height: 150px;\n    overflow-x: auto;\n    overflow-y: hidden;\n    margin: 20px -20px 20px 0;\n  }\n\n  .big-image[_ngcontent-%COMP%] {\n    width: unset;\n    height: 300px;\n    background-position: center;\n  }\n\n  .statuses[_ngcontent-%COMP%] {\n    margin: 0;\n    padding-right: 10px;\n    align-self: flex-end;\n  }\n  .statuses[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    margin-bottom: 5px !important;\n  }\n\n  .chat[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    max-width: 35%;\n  }\n\n  .change-card[_ngcontent-%COMP%] {\n    width: 320px;\n  }\n}\n\n@keyframes pulse {\n  0% {\n    background-color: rgba(165, 165, 165, 0.1);\n  }\n  50% {\n    background-color: rgba(165, 165, 165, 0.2);\n  }\n  100% {\n    background-color: rgba(165, 165, 165, 0.1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2R1Y3QtZGV0YWlsLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUVBLHlCQUFBO0VBQ0Esd0NBQUE7QUFBSjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUVBLGdCQUFBO0VBRUEsbUNBQUE7RUFDQSx1Q0FBQTtBQUhGOztBQUtFO0VBQ0UseUJBQUE7RUFDQSx3Q0FBQTtBQUhKOztBQVFFO0VBQ0Usa0JBQUE7QUFMSjs7QUFRRTtFQUNFLG1CQUFBO0FBTko7O0FBUUk7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7QUFOTjs7QUFVTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtBQVJSOztBQWNBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQVhGOztBQWFFO0VBQ0UsY0FBQTtBQVhKOztBQWVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBWkY7O0FBZUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsNERBQUE7RUFDQSx3RUFBQTtBQVpGOztBQWNFO0VBQ0UseUJBQUE7QUFaSjs7QUFlRTtFQUNFLHlCQUFBO0FBYko7O0FBZ0JFO0VBQ0UscUJBQUE7QUFkSjs7QUFpQkU7RUFDRSwyQkFBQTtBQWZKOztBQW1CQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFFQSxzQkFBQTtBQWpCRjs7QUFtQkU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFqQko7O0FBcUJBO0VBQ0UsU0FBQTtBQWxCRjs7QUFxQkE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBbEJGOztBQW9CRTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FBbEJKOztBQXNCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFwQkY7O0FBdUJBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0FBcEJGOztBQXVCQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUVBLGdFQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQXRCRjs7QUF3QkU7RUFDRSxlQUFBO0FBdEJKOztBQTBCQTtFQUNFLFVBQUE7QUF2QkY7O0FBMEJBO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBdkJGOztBQXlCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQXZCSjs7QUEwQkU7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUF4Qko7O0FBMEJJO0VBQ0UsV0FBQTtBQXhCTjs7QUEyQkk7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7QUF6Qk47O0FBNkJFO0VBQ0UsYUFBQTtFQUVBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQTVCSjs7QUE4Qkk7RUFDRSxnQkFBQTtBQTVCTjs7QUFnQ0U7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7QUE5Qko7O0FBZ0NJO0VBQ0UsVUFBQTtFQUNBLDRCQUFBO0VBRUEsZUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBL0JOOztBQW1DRTtFQUNFLGlCQUFBO0FBakNKOztBQW1DSTtFQUNFLGdCQUFBO0FBakNOOztBQXFDRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBRUEseUJBQUE7RUFDQSx3Q0FBQTtBQXBDSjs7QUF3Q0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFyQ0Y7O0FBd0NBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFFQSx5QkFBQTtFQUNBLFdBQUE7QUF0Q0Y7O0FBd0NFO0VBQ0UsZUFBQTtBQXRDSjs7QUEwQ0E7RUFDRTtJQUNFLGFBQUE7RUF2Q0Y7RUF5Q0U7SUFDRSxXQUFBO0lBQ0EsZ0JBQUE7RUF2Q0o7RUEwQ0U7SUFDRSxXQUFBO0VBeENKOztFQTRDQTtJQUNFLG1CQUFBO0lBQ0EsZUFBQTtFQXpDRjtFQTJDRTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtFQXpDSjtFQTRDRTtJQUNFLG1CQUFBO0VBMUNKO0VBNENJO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSx5QkFBQTtJQUNBLHdDQUFBO0VBMUNOO0VBOENNO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSx5QkFBQTtJQUNBLHdDQUFBO0VBNUNSOztFQWtEQTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSx5QkFBQTtFQS9DRjs7RUFrREE7SUFDRSxZQUFBO0lBQ0EsYUFBQTtJQUNBLDJCQUFBO0VBL0NGOztFQWtEQTtJQUNFLFNBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0VBL0NGO0VBaURFO0lBQ0UsNkJBQUE7RUEvQ0o7O0VBcURJO0lBQ0UsY0FBQTtFQWxETjs7RUF1REE7SUFDRSxZQUFBO0VBcERGO0FBQ0Y7O0FBdURBO0VBQ0U7SUFDRSwwQ0FBQTtFQXJERjtFQXVEQTtJQUNFLDBDQUFBO0VBckRGO0VBdURBO0lBQ0UsMENBQUE7RUFyREY7QUFDRiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGVudCB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgbWF4LWhlaWdodDogMTAwdmg7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYm9keSB7XHJcbiAgZmxleDogMTtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtc3RhbmRhcmQtY2hpcDo6YWZ0ZXIge1xyXG4gIGFsbDogdW5zZXQ7XHJcbn1cclxuXHJcbi5pbWFnZS1saXN0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAzNTBweDtcclxuXHJcbiAgJi0tbG9hZGluZyBkaXYge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG4gICAgYW5pbWF0aW9uOiBwdWxzZSAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICB9XHJcbn1cclxuXHJcbi5iaWctaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG5cclxuICBtYXJnaW46IDBweCA0MHB4O1xyXG5cclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW4gIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcblxyXG4gICYtLWxvYWRpbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxuICAgIGFuaW1hdGlvbjogcHVsc2UgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvZHVjdC10aXRsZSB7XHJcbiAgaDEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgJi0tbG9hZGluZyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgICYgPiBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbiAgICAgIGFuaW1hdGlvbjogcHVsc2UgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICBkaXYge1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG4gICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5lZGl0LWJ1dHRvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMzIwbXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICMzZjUxYjU7XHJcbiAgfVxyXG59XHJcblxyXG4uc3RhdHVzZXMge1xyXG4gIG1pbi13aWR0aDogOTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uc3RhdHVzIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAzMjBtcyBjdWJpYy1iZXppZXIoMC43ODUsIDAuMTM1LCAwLjE1LCAwLjg2KTtcclxuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XHJcblxyXG4gICYtLWNvbW11bmljYXRpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcclxuICB9XHJcblxyXG4gICYtLXNvbGQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3Yjg5YjtcclxuICB9XHJcblxyXG4gICYtLXNlbGVjdGVkIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB9XHJcblxyXG4gIGkge1xyXG4gICAgbWFyZ2luLXRvcDogLTNweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmNoaXAge1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjUwbXMgbGluZWFyO1xyXG59XHJcblxyXG4udXNlcnMtY2hhdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cclxuICAmID4gKiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4udXNlcnMtY2hhdCArIC5zY3JvbGwtYm90dG9tLWJ1dHRvbiB7XHJcbiAgdG9wOiA3MHB4O1xyXG59XHJcblxyXG4uYXZhdGFyLW1pbmkge1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtaW4td2lkdGg6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcblxyXG4gICYtLXNlbGVjdGVkIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubGVuZ3RoLWNpcmNsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDUwMDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRvcDogLTZweDtcclxuICByaWdodDogLTVweDtcclxuICB6LWluZGV4OiA2O1xyXG59XHJcblxyXG4uYmxhY2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5zY3JvbGwtYm90dG9tLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuXHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMjBtcyBjdWJpYy1iZXppZXIoMC43ODUsIDAuMTM1LCAwLjE1LCAwLjg2KTtcclxuICBvcGFjaXR5OiAwLjI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5cclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuXHJcbi5zY3JvbGwtYm90dG9tLWJ1dHRvbjpob3ZlciB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmNoYXQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTVhNWE1MWE7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cclxuICAmX193cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogOTk1O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcyLCA3MiwgNzIsIDAuNCk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcblxyXG4gICZfX21lc3NhZ2VzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG5cclxuICAgICYtLW5vcm1hbCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgICYtLXJldmVyc2Uge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19tZXNzYWdlIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblxyXG4gICAgJiArIHNtYWxsIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1hdC1jYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDRweCA0cHg7XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDQ1cHggMTBweCAyMHB4O1xyXG5cclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYTVhNWE1MWE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAycHggMTZweDtcclxuXHJcbiAgICBpIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYtLWxvYWRpbmcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDM2NXB4O1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbiAgICBhbmltYXRpb246IHB1bHNlIDFzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbi1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDQwcHg7XHJcbiAgcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5jaGFuZ2UtY2FyZCB7XHJcbiAgd2lkdGg6IDM5MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3Yjg5YjtcclxuICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xyXG4gIC5ib2R5IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICAgJiA+IGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHJvZHVjdC10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJi0tbG9hZGluZyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgICAmID4gZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxuICAgICAgICBhbmltYXRpb246IHB1bHNlIDFzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmID4gZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxuICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaW1hZ2UtbGlzdCB7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICBtYXJnaW46IDIwcHggLTIwcHggMjBweCAwO1xyXG4gIH1cclxuXHJcbiAgLmJpZy1pbWFnZSB7XHJcbiAgICB3aWR0aDogdW5zZXQ7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnN0YXR1c2VzIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuXHJcbiAgICBzbWFsbCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNoYXQge1xyXG4gICAgbWF0LWNhcmQge1xyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzNSU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jaGFuZ2UtY2FyZCB7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcclxuICAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NSwgMTY1LCAxNjUsIDAuMSk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NSwgMTY1LCAxNjUsIDAuMik7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjUsIDE2NSwgMTY1LCAwLjEpO1xyXG4gIH1cclxufVxyXG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('fadeOutContainer', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('280ms 150ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 })),
                ]),
            ]),
        ] } });


/***/ }),

/***/ "sjK5":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _http_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-request.service */ "VssQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ChatService extends _http_request_service__WEBPACK_IMPORTED_MODULE_1__["HttpRequestService"] {
    constructor(http) {
        super(http);
        this.url = {
            root: 'api/chats',
            sendMessage: 'api/chats/message',
        };
    }
    getChats(productId) {
        const productIdParam = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('productId', productId);
        return this.get(this.url.root, productIdParam);
    }
    getChatState(chatId) {
        const chatIdParam = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().set('id', chatId);
        return this.get(`${this.url.root}/change`, chatIdParam);
    }
    createChat(payload) {
        return this.post(`${this.url.root}`, payload);
    }
    sendMessage(payload) {
        return this.post(`${this.url.sendMessage}`, payload);
    }
    patchChat(id, payload) {
        return this.patch(`${this.url.root}/${id}`, payload);
    }
    deleteChat(id) {
        return this.delete(`${this.url.root}/${id}`);
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zWuZ":
/*!**********************************!*\
  !*** ./src/app/types/product.ts ***!
  \**********************************/
/*! exports provided: STATUSES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUSES", function() { return STATUSES; });
const STATUSES = [
    {
        type: 'ACTIVE',
        icon: 'fas fa-solid fa-users',
        class: 'status--communication',
        tooltip: 'O tento produk má zájem více lidí',
    },
    {
        type: 'SOLD',
        icon: 'fas fa-solid fa-handshake',
        class: 'status--sold',
        tooltip: 'Produkt je již zarezervován',
    },
];


/***/ })

}]);
//# sourceMappingURL=products-page-products-page-module.js.map