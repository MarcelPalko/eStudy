(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-about-page-about-page-module"],{

/***/ "Bryu":
/*!***************************************************************!*\
  !*** ./src/app/ui-components/about-page/about-page.module.ts ***!
  \***************************************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _ui_header_ui_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui-header/ui-header.module */ "YiTd");
/* harmony import */ var _about_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-page.component */ "DVmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [{ path: '', component: _about_page_component__WEBPACK_IMPORTED_MODULE_4__["AboutPageComponent"] }];
class AboutPageModule {
}
AboutPageModule.ɵfac = function AboutPageModule_Factory(t) { return new (t || AboutPageModule)(); };
AboutPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AboutPageModule });
AboutPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            _ui_header_ui_header_module__WEBPACK_IMPORTED_MODULE_3__["UiHeaderModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AboutPageModule, { declarations: [_about_page_component__WEBPACK_IMPORTED_MODULE_4__["AboutPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _ui_header_ui_header_module__WEBPACK_IMPORTED_MODULE_3__["UiHeaderModule"]] }); })();


/***/ }),

/***/ "DVmb":
/*!******************************************************************!*\
  !*** ./src/app/ui-components/about-page/about-page.component.ts ***!
  \******************************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _ui_header_ui_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui-header/ui-header.component */ "fvR5");



class AboutPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutPageComponent.ɵfac = function AboutPageComponent_Factory(t) { return new (t || AboutPageComponent)(); };
AboutPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutPageComponent, selectors: [["estudy-about-page"]], decls: 23, vars: 0, consts: [["fxLayout", "column", 1, "main-content"], [1, "body"], ["fxLayout", "column"], [1, "body__quote"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "30px", 1, "body__creator"], ["fxLayout", "column", "fxLayoutGap", "10px", 1, "body__creator-box"], ["src", "../../../assets/imgs/me.jpg", "width", "350px"]], template: function AboutPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "estudy-ui-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bez my\u0161lenky a bez \u010Dlov\u011Bka by to ne\u0161lo...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\"Nem\u016F\u017Eeme nutit my\u0161lenky. \u00DAsp\u011B\u0161n\u00E9 n\u00E1pady jsou v\u00FDsledkem pomal\u00E9ho r\u016Fstu.\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u00A0Toto je cit\u00E1t, kter\u00FD m\u011B prov\u00E1z\u00ED cel\u00FDm v\u00FDvojem. Jmenuji se Marcel Palko a jsem zakladatelem aplikace eStudy. Jsem student a z\u00E1rove\u0148 juniorn\u00ED frontend v\u00FDvoj\u00E1\u0159, v oblasti webov\u00E9ho v\u00FDvoje se pohybuji ji\u017E t\u0159et\u00EDm rokem. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Pro\u010D vlastn\u011B studentsk\u00FD bazar ? P\u0159i n\u00E1stupu na st\u0159edn\u00ED \u0161kolu kupujete mnoho knih, kter\u00E9 t\u0159eba ani nevyu\u017Eijete. Probl\u00E9m nast\u00E1v\u00E1 v moment\u011B kdy nev\u00EDme co s nimi, za p\u016Fvodn\u00ED cenu je neprod\u00E1me a na konec je prod\u00E1me za \u010Dokol\u00E1du kamar\u00E1dovi nebo rodinn\u00E9mu p\u0159\u00EDslu\u0161n\u00EDkovi. A\u0165 chceme nebo ne pen\u00EDze zp\u011Bt nez\u00EDsk\u00E1me. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Proto vznikl eStudy,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " m\u00E9 \u017Eivotn\u00ED zku\u0161enosti m\u011B donutili vytvo\u0159it n\u011Bco co je \u0159e\u0161en\u00EDm. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Marcel Palko ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Tv\u016Frce aplikace ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _ui_header_ui_header_component__WEBPACK_IMPORTED_MODULE_2__["UiHeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"]], styles: [".main-content[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  max-height: 100vh;\n  min-width: 100%;\n}\n\n.body[_ngcontent-%COMP%] {\n  height: calc(100vh - 210px);\n  min-height: 100%;\n  padding: 70px 50px;\n  overflow-y: scroll;\n}\n\n.body__quote[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-size: 40px;\n  line-height: 42px;\n}\n\n.body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n}\n\n.body__creator-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  line-height: 23px;\n}\n\n@media only screen and (max-width: 599px) {\n  estudy-ui-header[_ngcontent-%COMP%] {\n    margin-top: 55px;\n  }\n\n  .body__quote[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n    font-size: 30px;\n    line-height: 32px;\n  }\n  .body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .body__creator-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhYm91dC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7QUFBSjs7QUFLTTtFQUNFLGlCQUFBO0FBSFI7O0FBU0E7RUFDRTtJQUNFLGdCQUFBO0VBTkY7O0VBVUU7SUFDRSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQVBKO0VBVUU7SUFDRSxlQUFBO0VBUko7RUFhTTtJQUNFLFVBQUE7RUFYUjtBQUNGIiwiZmlsZSI6ImFib3V0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250ZW50IHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5ib2R5IHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMTBweCk7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiA3MHB4IDUwcHg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cclxuICAmX19xdW90ZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fY3JlYXRvciB7XHJcbiAgICAmLWJveCB7XHJcbiAgICAgIGgzIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xyXG4gIGVzdHVkeS11aS1oZWFkZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNTVweDtcclxuICB9XHJcblxyXG4gIC5ib2R5IHtcclxuICAgICZfX3F1b3RlIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAmX19jcmVhdG9yIHtcclxuICAgICAgJi1ib3gge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=ui-components-about-page-about-page-module.js.map