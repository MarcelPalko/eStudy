(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-page-login-page-module"],{

/***/ "bSwM":
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js ***!
  \**************************************************************************/
/*! exports provided: MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR, MAT_CHECKBOX_DEFAULT_OPTIONS, MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY, MAT_CHECKBOX_REQUIRED_VALIDATOR, MatCheckbox, MatCheckboxChange, MatCheckboxModule, MatCheckboxRequiredValidator, _MatCheckboxRequiredValidatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR", function() { return MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_DEFAULT_OPTIONS", function() { return MAT_CHECKBOX_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY", function() { return MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_REQUIRED_VALIDATOR", function() { return MAT_CHECKBOX_REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCheckbox", function() { return MatCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCheckboxChange", function() { return MatCheckboxChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCheckboxModule", function() { return MatCheckboxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCheckboxRequiredValidator", function() { return MatCheckboxRequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatCheckboxRequiredValidatorModule", function() { return _MatCheckboxRequiredValidatorModule; });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/observers */ "GU7r");








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token to be used to override the default options for `mat-checkbox`. */





const _c0 = ["input"];
const _c1 = function () { return { enterDuration: 150 }; };
const _c2 = ["*"];
const MAT_CHECKBOX_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-checkbox-default-options', {
    providedIn: 'root',
    factory: MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */
function MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY() {
    return {
        color: 'accent',
        clickAction: 'check-indeterminate',
    };
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Increasing integer for generating unique ids for checkbox components.
let nextUniqueId = 0;
// Default checkbox configuration.
const defaults = MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY();
/**
 * Provider Expression that allows mat-checkbox to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
const MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(() => MatCheckbox),
    multi: true
};
/** Change event object emitted by MatCheckbox. */
class MatCheckboxChange {
}
// Boilerplate for applying mixins to MatCheckbox.
/** @docs-private */
class MatCheckboxBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
const _MatCheckboxMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinDisabled"])(MatCheckboxBase))));
/**
 * A material design checkbox component. Supports all of the functionality of an HTML5 checkbox,
 * and exposes a similar API. A MatCheckbox can be either checked, unchecked, indeterminate, or
 * disabled. Note that all additional accessibility attributes are taken care of by the component,
 * so there is no need to provide them yourself. However, if you want to omit a label and still
 * have the checkbox be accessible, you may supply an [aria-label] input.
 * See: https://material.io/design/components/selection-controls.html
 */
class MatCheckbox extends _MatCheckboxMixinBase {
    constructor(elementRef, _changeDetectorRef, _focusMonitor, _ngZone, tabIndex, _animationMode, _options) {
        super(elementRef);
        this._changeDetectorRef = _changeDetectorRef;
        this._focusMonitor = _focusMonitor;
        this._ngZone = _ngZone;
        this._animationMode = _animationMode;
        this._options = _options;
        /**
         * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
         * take precedence so this may be omitted.
         */
        this.ariaLabel = '';
        /**
         * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
         */
        this.ariaLabelledby = null;
        this._uniqueId = `mat-checkbox-${++nextUniqueId}`;
        /** A unique id for the checkbox input. If none is supplied, it will be auto-generated. */
        this.id = this._uniqueId;
        /** Whether the label should appear after or before the checkbox. Defaults to 'after' */
        this.labelPosition = 'after';
        /** Name value will be applied to the input element if present */
        this.name = null;
        /** Event emitted when the checkbox's `checked` value changes. */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /** Event emitted when the checkbox's `indeterminate` value changes. */
        this.indeterminateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
         * @docs-private
         */
        this._onTouched = () => { };
        this._currentAnimationClass = '';
        this._currentCheckState = 0 /* Init */;
        this._controlValueAccessorChangeFn = () => { };
        this._checked = false;
        this._disabled = false;
        this._indeterminate = false;
        this._options = this._options || defaults;
        this.color = this.defaultColor = this._options.color || defaults.color;
        this.tabIndex = parseInt(tabIndex) || 0;
    }
    /** Returns the unique id for the visual hidden input. */
    get inputId() { return `${this.id || this._uniqueId}-input`; }
    /** Whether the checkbox is required. */
    get required() { return this._required; }
    set required(value) { this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value); }
    ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef, true).subscribe(focusOrigin => {
            if (!focusOrigin) {
                // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                // Angular does not expect events to be raised during change detection, so any state change
                // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
                // See https://github.com/angular/angular/issues/17793. To work around this, we defer
                // telling the form control it has been touched until the next tick.
                Promise.resolve().then(() => {
                    this._onTouched();
                    this._changeDetectorRef.markForCheck();
                });
            }
        });
        this._syncIndeterminate(this._indeterminate);
    }
    // TODO: Delete next major revision.
    ngAfterViewChecked() { }
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    /**
     * Whether the checkbox is checked.
     */
    get checked() { return this._checked; }
    set checked(value) {
        if (value != this.checked) {
            this._checked = value;
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Whether the checkbox is disabled. This fully overrides the implementation provided by
     * mixinDisabled, but the mixin is still required because mixinTabIndex requires it.
     */
    get disabled() { return this._disabled; }
    set disabled(value) {
        const newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        if (newValue !== this.disabled) {
            this._disabled = newValue;
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
     * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
     * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
     * set to false.
     */
    get indeterminate() { return this._indeterminate; }
    set indeterminate(value) {
        const changed = value != this._indeterminate;
        this._indeterminate = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        if (changed) {
            if (this._indeterminate) {
                this._transitionCheckState(3 /* Indeterminate */);
            }
            else {
                this._transitionCheckState(this.checked ? 1 /* Checked */ : 2 /* Unchecked */);
            }
            this.indeterminateChange.emit(this._indeterminate);
        }
        this._syncIndeterminate(this._indeterminate);
    }
    _isRippleDisabled() {
        return this.disableRipple || this.disabled;
    }
    /** Method being called whenever the label text changes. */
    _onLabelTextChange() {
        // Since the event of the `cdkObserveContent` directive runs outside of the zone, the checkbox
        // component will be only marked for check, but no actual change detection runs automatically.
        // Instead of going back into the zone in order to trigger a change detection which causes
        // *all* components to be checked (if explicitly marked or not using OnPush), we only trigger
        // an explicit change detection for the checkbox view and its children.
        this._changeDetectorRef.detectChanges();
    }
    // Implemented as part of ControlValueAccessor.
    writeValue(value) {
        this.checked = !!value;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    // Implemented as part of ControlValueAccessor.
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    _getAriaChecked() {
        if (this.checked) {
            return 'true';
        }
        return this.indeterminate ? 'mixed' : 'false';
    }
    _transitionCheckState(newState) {
        let oldState = this._currentCheckState;
        let element = this._elementRef.nativeElement;
        if (oldState === newState) {
            return;
        }
        if (this._currentAnimationClass.length > 0) {
            element.classList.remove(this._currentAnimationClass);
        }
        this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
        this._currentCheckState = newState;
        if (this._currentAnimationClass.length > 0) {
            element.classList.add(this._currentAnimationClass);
            // Remove the animation class to avoid animation when the checkbox is moved between containers
            const animationClass = this._currentAnimationClass;
            this._ngZone.runOutsideAngular(() => {
                setTimeout(() => {
                    element.classList.remove(animationClass);
                }, 1000);
            });
        }
    }
    _emitChangeEvent() {
        const event = new MatCheckboxChange();
        event.source = this;
        event.checked = this.checked;
        this._controlValueAccessorChangeFn(this.checked);
        this.change.emit(event);
        // Assigning the value again here is redundant, but we have to do it in case it was
        // changed inside the `change` listener which will cause the input to be out of sync.
        if (this._inputElement) {
            this._inputElement.nativeElement.checked = this.checked;
        }
    }
    /** Toggles the `checked` state of the checkbox. */
    toggle() {
        this.checked = !this.checked;
    }
    /**
     * Event handler for checkbox input element.
     * Toggles checked state if element is not disabled.
     * Do not toggle on (change) event since IE doesn't fire change event when
     *   indeterminate checkbox is clicked.
     * @param event
     */
    _onInputClick(event) {
        var _a;
        const clickAction = (_a = this._options) === null || _a === void 0 ? void 0 : _a.clickAction;
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `checkbox` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
        // If resetIndeterminate is false, and the current state is indeterminate, do nothing on click
        if (!this.disabled && clickAction !== 'noop') {
            // When user manually click on the checkbox, `indeterminate` is set to false.
            if (this.indeterminate && clickAction !== 'check') {
                Promise.resolve().then(() => {
                    this._indeterminate = false;
                    this.indeterminateChange.emit(this._indeterminate);
                });
            }
            this.toggle();
            this._transitionCheckState(this._checked ? 1 /* Checked */ : 2 /* Unchecked */);
            // Emit our custom change event if the native input emitted one.
            // It is important to only emit it, if the native input triggered one, because
            // we don't want to trigger a change event, when the `checked` variable changes for example.
            this._emitChangeEvent();
        }
        else if (!this.disabled && clickAction === 'noop') {
            // Reset native input when clicked with noop. The native checkbox becomes checked after
            // click, reset it to be align with `checked` value of `mat-checkbox`.
            this._inputElement.nativeElement.checked = this.checked;
            this._inputElement.nativeElement.indeterminate = this.indeterminate;
        }
    }
    /** Focuses the checkbox. */
    focus(origin, options) {
        if (origin) {
            this._focusMonitor.focusVia(this._inputElement, origin, options);
        }
        else {
            this._inputElement.nativeElement.focus(options);
        }
    }
    _onInteractionEvent(event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the `change` output.
        event.stopPropagation();
    }
    _getAnimationClassForCheckStateTransition(oldState, newState) {
        // Don't transition if animations are disabled.
        if (this._animationMode === 'NoopAnimations') {
            return '';
        }
        let animSuffix = '';
        switch (oldState) {
            case 0 /* Init */:
                // Handle edge case where user interacts with checkbox that does not have [(ngModel)] or
                // [checked] bound to it.
                if (newState === 1 /* Checked */) {
                    animSuffix = 'unchecked-checked';
                }
                else if (newState == 3 /* Indeterminate */) {
                    animSuffix = 'unchecked-indeterminate';
                }
                else {
                    return '';
                }
                break;
            case 2 /* Unchecked */:
                animSuffix = newState === 1 /* Checked */ ?
                    'unchecked-checked' : 'unchecked-indeterminate';
                break;
            case 1 /* Checked */:
                animSuffix = newState === 2 /* Unchecked */ ?
                    'checked-unchecked' : 'checked-indeterminate';
                break;
            case 3 /* Indeterminate */:
                animSuffix = newState === 1 /* Checked */ ?
                    'indeterminate-checked' : 'indeterminate-unchecked';
                break;
        }
        return `mat-checkbox-anim-${animSuffix}`;
    }
    /**
     * Syncs the indeterminate value with the checkbox DOM node.
     *
     * We sync `indeterminate` directly on the DOM node, because in Ivy the check for whether a
     * property is supported on an element boils down to `if (propName in element)`. Domino's
     * HTMLInputElement doesn't have an `indeterminate` property so Ivy will warn during
     * server-side rendering.
     */
    _syncIndeterminate(value) {
        const nativeCheckbox = this._inputElement;
        if (nativeCheckbox) {
            nativeCheckbox.nativeElement.indeterminate = value;
        }
    }
}
MatCheckbox.ɵfac = function MatCheckbox_Factory(t) { return new (t || MatCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_CHECKBOX_DEFAULT_OPTIONS, 8)); };
MatCheckbox.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MatCheckbox, selectors: [["mat-checkbox"]], viewQuery: function MatCheckbox_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
    } }, hostAttrs: [1, "mat-checkbox"], hostVars: 12, hostBindings: function MatCheckbox_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("tabindex", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-checkbox-indeterminate", ctx.indeterminate)("mat-checkbox-checked", ctx.checked)("mat-checkbox-disabled", ctx.disabled)("mat-checkbox-label-before", ctx.labelPosition == "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } }, inputs: { disableRipple: "disableRipple", color: "color", tabIndex: "tabIndex", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], id: "id", labelPosition: "labelPosition", name: "name", required: "required", checked: "checked", disabled: "disabled", indeterminate: "indeterminate", ariaDescribedby: ["aria-describedby", "ariaDescribedby"], value: "value" }, outputs: { change: "change", indeterminateChange: "indeterminateChange" }, exportAs: ["matCheckbox"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c2, decls: 17, vars: 20, consts: [[1, "mat-checkbox-layout"], ["label", ""], [1, "mat-checkbox-inner-container"], ["type", "checkbox", 1, "mat-checkbox-input", "cdk-visually-hidden", 3, "id", "required", "checked", "disabled", "tabIndex", "change", "click"], ["input", ""], ["matRipple", "", 1, "mat-checkbox-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleRadius", "matRippleCentered", "matRippleAnimation"], [1, "mat-ripple-element", "mat-checkbox-persistent-ripple"], [1, "mat-checkbox-frame"], [1, "mat-checkbox-background"], ["version", "1.1", "focusable", "false", "viewBox", "0 0 24 24", 0, "xml", "space", "preserve", 1, "mat-checkbox-checkmark"], ["fill", "none", "stroke", "white", "d", "M4.1,12.7 9,17.6 20.3,6.3", 1, "mat-checkbox-checkmark-path"], [1, "mat-checkbox-mixedmark"], [1, "mat-checkbox-label", 3, "cdkObserveContent"], ["checkboxLabel", ""], [2, "display", "none"]], template: function MatCheckbox_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function MatCheckbox_Template_input_change_3_listener($event) { return ctx._onInteractionEvent($event); })("click", function MatCheckbox_Template_input_click_3_listener($event) { return ctx._onInputClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkObserveContent", function MatCheckbox_Template_span_cdkObserveContent_12_listener() { return ctx._onLabelTextChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("for", ctx.inputId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-checkbox-inner-container-no-side-margin", !_r2.textContent || !_r2.textContent.trim());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.inputId)("required", ctx.required)("checked", ctx.checked)("disabled", ctx.disabled)("tabIndex", ctx.tabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("value", ctx.value)("name", ctx.name)("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-checked", ctx._getAriaChecked())("aria-describedby", ctx.ariaDescribedby);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx._isRippleDisabled())("matRippleRadius", 20)("matRippleCentered", true)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](19, _c1));
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["CdkObserveContent"]], styles: ["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{display:inline-block;transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.cdk-high-contrast-active .mat-checkbox.cdk-keyboard-focused .mat-checkbox-frame{border-style:dotted}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);-webkit-print-color-adjust:exact;color-adjust:exact}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{display:block;width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}\n"], encapsulation: 2, changeDetection: 0 });
MatCheckbox.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"], args: ['tabindex',] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_CHECKBOX_DEFAULT_OPTIONS,] }] }
];
MatCheckbox.propDecorators = {
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['aria-labelledby',] }],
    ariaDescribedby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['aria-describedby',] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    labelPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    indeterminateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    _inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['input',] }],
    ripple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"],] }],
    checked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    indeterminate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatCheckbox, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'mat-checkbox',
                template: "<label [attr.for]=\"inputId\" class=\"mat-checkbox-layout\" #label>\n  <span class=\"mat-checkbox-inner-container\"\n       [class.mat-checkbox-inner-container-no-side-margin]=\"!checkboxLabel.textContent || !checkboxLabel.textContent.trim()\">\n    <input #input\n           class=\"mat-checkbox-input cdk-visually-hidden\" type=\"checkbox\"\n           [id]=\"inputId\"\n           [required]=\"required\"\n           [checked]=\"checked\"\n           [attr.value]=\"value\"\n           [disabled]=\"disabled\"\n           [attr.name]=\"name\"\n           [tabIndex]=\"tabIndex\"\n           [attr.aria-label]=\"ariaLabel || null\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           [attr.aria-checked]=\"_getAriaChecked()\"\n           [attr.aria-describedby]=\"ariaDescribedby\"\n           (change)=\"_onInteractionEvent($event)\"\n           (click)=\"_onInputClick($event)\">\n    <span matRipple class=\"mat-checkbox-ripple mat-focus-indicator\"\n         [matRippleTrigger]=\"label\"\n         [matRippleDisabled]=\"_isRippleDisabled()\"\n         [matRippleRadius]=\"20\"\n         [matRippleCentered]=\"true\"\n         [matRippleAnimation]=\"{enterDuration: 150}\">\n      <span class=\"mat-ripple-element mat-checkbox-persistent-ripple\"></span>\n    </span>\n    <span class=\"mat-checkbox-frame\"></span>\n    <span class=\"mat-checkbox-background\">\n      <svg version=\"1.1\"\n           focusable=\"false\"\n           class=\"mat-checkbox-checkmark\"\n           viewBox=\"0 0 24 24\"\n           xml:space=\"preserve\">\n        <path class=\"mat-checkbox-checkmark-path\"\n              fill=\"none\"\n              stroke=\"white\"\n              d=\"M4.1,12.7 9,17.6 20.3,6.3\"/>\n      </svg>\n      <!-- Element for rendering the indeterminate state checkbox. -->\n      <span class=\"mat-checkbox-mixedmark\"></span>\n    </span>\n  </span>\n  <span class=\"mat-checkbox-label\" #checkboxLabel (cdkObserveContent)=\"_onLabelTextChange()\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
                exportAs: 'matCheckbox',
                host: {
                    'class': 'mat-checkbox',
                    '[id]': 'id',
                    '[attr.tabindex]': 'null',
                    '[class.mat-checkbox-indeterminate]': 'indeterminate',
                    '[class.mat-checkbox-checked]': 'checked',
                    '[class.mat-checkbox-disabled]': 'disabled',
                    '[class.mat-checkbox-label-before]': 'labelPosition == "before"',
                    '[class._mat-animation-noopable]': `_animationMode === 'NoopAnimations'`
                },
                providers: [MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR],
                inputs: ['disableRipple', 'color', 'tabIndex'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                styles: ["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{display:inline-block;transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.cdk-high-contrast-active .mat-checkbox.cdk-keyboard-focused .mat-checkbox-frame{border-style:dotted}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);-webkit-print-color-adjust:exact;color-adjust:exact}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{display:block;width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"],
                args: ['tabindex']
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [MAT_CHECKBOX_DEFAULT_OPTIONS]
            }] }]; }, { ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-labelledby']
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], indeterminateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], indeterminate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], ariaDescribedby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-describedby']
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], _inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['input']
        }], ripple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"]]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const MAT_CHECKBOX_REQUIRED_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(() => MatCheckboxRequiredValidator),
    multi: true
};
/**
 * Validator for Material checkbox's required attribute in template-driven checkbox.
 * Current CheckboxRequiredValidator only work with `input type=checkbox` and does not
 * work with `mat-checkbox`.
 */
class MatCheckboxRequiredValidator extends _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxRequiredValidator"] {
}
MatCheckboxRequiredValidator.ɵfac = function MatCheckboxRequiredValidator_Factory(t) { return ɵMatCheckboxRequiredValidator_BaseFactory(t || MatCheckboxRequiredValidator); };
MatCheckboxRequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatCheckboxRequiredValidator, selectors: [["mat-checkbox", "required", "", "formControlName", ""], ["mat-checkbox", "required", "", "formControl", ""], ["mat-checkbox", "required", "", "ngModel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([MAT_CHECKBOX_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]] });
const ɵMatCheckboxRequiredValidator_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MatCheckboxRequiredValidator);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatCheckboxRequiredValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: `mat-checkbox[required][formControlName],
             mat-checkbox[required][formControl], mat-checkbox[required][ngModel]`,
                providers: [MAT_CHECKBOX_REQUIRED_VALIDATOR]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** This module is used by both original and MDC-based checkbox implementations. */
class _MatCheckboxRequiredValidatorModule {
}
_MatCheckboxRequiredValidatorModule.ɵfac = function _MatCheckboxRequiredValidatorModule_Factory(t) { return new (t || _MatCheckboxRequiredValidatorModule)(); };
_MatCheckboxRequiredValidatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: _MatCheckboxRequiredValidatorModule });
_MatCheckboxRequiredValidatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_MatCheckboxRequiredValidatorModule, { declarations: [MatCheckboxRequiredValidator], exports: [MatCheckboxRequiredValidator] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatCheckboxRequiredValidatorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                exports: [MatCheckboxRequiredValidator],
                declarations: [MatCheckboxRequiredValidator]
            }]
    }], null, null); })();
class MatCheckboxModule {
}
MatCheckboxModule.ɵfac = function MatCheckboxModule_Factory(t) { return new (t || MatCheckboxModule)(); };
MatCheckboxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MatCheckboxModule });
MatCheckboxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["ObserversModule"],
            _MatCheckboxRequiredValidatorModule
        ], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _MatCheckboxRequiredValidatorModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatCheckboxModule, { declarations: function () { return [MatCheckbox]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["ObserversModule"], _MatCheckboxRequiredValidatorModule]; }, exports: function () { return [MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _MatCheckboxRequiredValidatorModule]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatCheckboxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["ObserversModule"],
                    _MatCheckboxRequiredValidatorModule
                ],
                exports: [MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _MatCheckboxRequiredValidatorModule],
                declarations: [MatCheckbox]
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



//# sourceMappingURL=checkbox.js.map

/***/ }),

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
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");




















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
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "U\u017Eivatelsk\u00E9 jm\u00E9no");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function LoginPageComponent_ng_container_9_Template_input_input_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r13.checkUsername($event); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Souhlas\u00EDm se ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "zpracov\u00E1n\u00EDm osobn\u00EDch \u00FAdaj\u016F");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.form["controls"]["reEnterPassword"].invalid);
} }
function LoginPageComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u0160patn\u00E9 p\u0159ihla\u0161ovac\u00ED \u00FAdaje !");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function LoginPageComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginPageComponent_ng_container_25_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r16.doActionBasedOnRoute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " P\u0159ihl\u00E1sit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Nebo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function LoginPageComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Ji\u017E m\u00E1te \u00FA\u010Det ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "P\u0159ihl\u00E1sit se");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
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
    ['gdprCheck']: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
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
                email: this.form.value.email.toLocaleLowerCase(),
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
        var _a;
        if (this.form.valid) {
            const user = {
                username: this.form.value.username,
                email: this.form.value.email.toLocaleLowerCase(),
                password: this.form.value.password,
                class: ((_a = this.form.value) === null || _a === void 0 ? void 0 : _a.class.length) > 0 ? this.form.value.class : null,
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
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["estudy-login-page"]], decls: 30, vars: 11, consts: [["fxLayout", "column", 1, "main-content"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "login-form"], ["fxLayout", "column", "fxLayoutAlign", "space-between center"], ["fxLayout", "row", "fxLayoutAlign", "center end", "fxLayoutGap", "5px", 1, "login-form__title"], ["src", "../../../assets/imgs/logo-white.png", "width", "40px"], ["fxLayout", "column", "fxLayoutAlign", "space-evenly stretch", 3, "formGroup"], [4, "ngIf"], ["matInput", "", "autocomplete", "off", "formControlName", "email", 3, "input"], ["matSuffix", "", "class", "icon fas fa-spinner fa-spin", 4, "ngIf"], ["matSuffix", "", "class", "icon-green fas fa-check", 4, "ngIf"], ["matSuffix", "", "class", "icon-warn fas fa-times", 4, "ngIf"], ["matInput", "", "type", "password", "formControlName", "password"], ["class", "login-form__error", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", "fxLayoutGap", "10px", 1, "login-form__footer"], ["mat-stroked-button", "", 3, "disabled", "click"], ["matInput", "", "autocomplete", "off", "formControlName", "username", 3, "input"], ["matSuffix", "", 1, "icon", "fas", "fa-spinner", "fa-spin"], ["matSuffix", "", 1, "icon-green", "fas", "fa-check"], ["matSuffix", "", 1, "icon-warn", "fas", "fa-times"], ["matInput", "", "type", "password", "formControlName", "reEnterPassword"], ["matInput", "", "formControlName", "class"], ["formControlName", "gdprCheck", "required", ""], [1, "login-form__error"], ["mat-flat-button", "", 3, "click"], [1, "button-divider"], [1, "return-link"], ["routerLink", "/login"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, LoginPageComponent_ng_container_22_Template, 14, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, LoginPageComponent_mat_error_23_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, LoginPageComponent_ng_container_25_Template, 5, 0, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_26_listener() { return ctx.doActionBasedOnRoute(ctx.isLogin); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, " Registrovat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, LoginPageComponent_ng_container_28_Template, 5, 0, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "estudy-ui-footer");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLogin);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _ui_components_ui_header_ui_header_component__WEBPACK_IMPORTED_MODULE_10__["UiHeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _ui_components_ui_footer_ui_footer_component__WEBPACK_IMPORTED_MODULE_16__["UiFooterComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckbox"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: [".main-content[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-width: 100%;\n}\n\n  .mat-checkbox-ripple .mat-ripple-element {\n  background-color: black !important;\n}\n\n  .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: black !important;\n}\n\n.login-form[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.login-form__title[_ngcontent-%COMP%] {\n  width: 90%;\n  text-align: center;\n  padding: 5px;\n  background-color: #000;\n  color: #fff;\n}\n\n.login-form[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.login-form[_ngcontent-%COMP%]   .icon-green[_ngcontent-%COMP%] {\n  color: #27b89b;\n}\n\n.login-form[_ngcontent-%COMP%]   .icon-warn[_ngcontent-%COMP%] {\n  color: #d50000;\n}\n\n.login-form[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: inherit !important;\n  height: inherit !important;\n}\n\n.login-form__error[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.login-form__footer[_ngcontent-%COMP%] {\n  width: 95%;\n  font-size: 12px;\n  margin-top: 20px;\n}\n\n.login-form__footer[_ngcontent-%COMP%]   .button-divider[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n}\n\n.login-form__footer[_ngcontent-%COMP%]   .button-divider[_ngcontent-%COMP%]::before, .login-form__footer[_ngcontent-%COMP%]   .button-divider[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  width: 40%;\n  height: 1px;\n  background-color: #000;\n}\n\n.login-form__footer[_ngcontent-%COMP%]   .button-divider[_ngcontent-%COMP%]::before {\n  left: 0;\n}\n\n.login-form__footer[_ngcontent-%COMP%]   .button-divider[_ngcontent-%COMP%]::after {\n  right: 0;\n}\n\n.login-form__footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #000;\n  color: #fff;\n}\n\n.login-form__footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  background-color: #fff;\n  color: #000;\n}\n\n.login-form[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  height: 500px;\n  width: 400px;\n  padding: 20px;\n  color: #000;\n}\n\n.login-form[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 100%;\n  margin-top: 20px;\n}\n\n.login-form[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .return-link[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.login-form[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .return-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #000;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLGtDQUFBO0FBREY7O0FBSUE7RUFDRSxrQ0FBQTtBQURGOztBQUlBO0VBQ0UsT0FBQTtBQURGOztBQUdFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUVBLHNCQ3ZCWTtFRHdCWixXQUFBO0FBRko7O0FBS0U7RUFDRSxlQUFBO0FBSEo7O0FBS0k7RUFDRSxjQUFBO0FBSE47O0FBTUk7RUFDRSxjQUFBO0FBSk47O0FBUUU7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FBTko7O0FBU0U7RUFDRSxrQkFBQTtBQVBKOztBQVVFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVJKOztBQVVJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQVJOOztBQVVNO0VBRUUsV0FBQTtFQUNBLGtCQUFBO0VBRUEsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JDakVRO0FEdURoQjs7QUFhTTtFQUNFLE9BQUE7QUFYUjs7QUFjTTtFQUNFLFFBQUE7QUFaUjs7QUFnQkk7RUFDRSxrQkFBQTtFQUVBLHNCQ2hGVTtFRGlGVixXQUFBO0FBZk47O0FBa0JJO0VBQ0Usc0JBQUE7RUFDQSxXQ3RGVTtBRHNFaEI7O0FBb0JFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsV0MvRlk7QUQ0RWhCOztBQXFCSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFuQk47O0FBc0JJO0VBQ0Usa0JBQUE7QUFwQk47O0FBc0JNO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFwQlIiLCJmaWxlIjoibG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0ge1xyXG4gIGZsZXg6IDE7XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIC5pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICAmLWdyZWVuIHtcclxuICAgICAgY29sb3I6ICMyN2I4OWI7XHJcbiAgICB9XHJcblxyXG4gICAgJi13YXJuIHtcclxuICAgICAgY29sb3I6ICNkNTAwMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICB3aWR0aDogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAmX19lcnJvciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19mb290ZXIge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gICAgLmJ1dHRvbi1kaXZpZGVyIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAmOjpiZWZvcmUsXHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uOmxhc3QtY2hpbGQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtYXQtY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcblxyXG4gICAgZm9ybSB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAucmV0dXJuLWxpbmsge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnktY29sb3I6ICMwMDA7XHJcbiRzZWNvbmRhcnktY29sb3I6ICM1NDZlN2E7XHJcbiR3YXJuLWNvbG9yOiAjZDUwMDAwO1xyXG5cclxuJG1hdC1ibHVlLWdyZXk6IChcclxuICA1MDogI2VjZWZmMSxcclxuICAxMDA6ICNjZmQ4ZGMsXHJcbiAgMjAwOiAjYjBiZWM1LFxyXG4gIDMwMDogIzkwYTRhZSxcclxuICA0MDA6ICM3ODkwOWMsXHJcbiAgNTAwOiAjYmJkNWUyLFxyXG4gIDYwMDogIzU0NmU3YSxcclxuICA3MDA6ICM0NTVhNjQsXHJcbiAgODAwOiAjMzc0NzRmLFxyXG4gIDkwMDogIzI2MzIzOCxcclxuICBBMTAwOiAjY2ZkOGRjLFxyXG4gIEEyMDA6ICNiMGJlYzUsXHJcbiAgQTQwMDogIzc4OTA5YyxcclxuICBBNzAwOiAjNDU1YTY0LFxyXG4pO1xyXG4iXX0= */"] });


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
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _ui_components_ui_header_ui_header_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui-components/ui-header/ui-header.module */ "YiTd");
/* harmony import */ var _ui_components_ui_footer_ui_footer_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ui-components/ui-footer/ui-footer.module */ "0NjS");
/* harmony import */ var _login_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login-page.component */ "pT+O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














const routes = [
    { path: '', component: _login_page_component__WEBPACK_IMPORTED_MODULE_11__["LoginPageComponent"] },
    { path: 'register', component: _login_page_component__WEBPACK_IMPORTED_MODULE_11__["LoginPageComponent"] },
];
class LoginPageModule {
}
LoginPageModule.ɵfac = function LoginPageModule_Factory(t) { return new (t || LoginPageModule)(); };
LoginPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: LoginPageModule });
LoginPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
            _ui_components_ui_header_ui_header_module__WEBPACK_IMPORTED_MODULE_9__["UiHeaderModule"],
            _ui_components_ui_footer_ui_footer_module__WEBPACK_IMPORTED_MODULE_10__["UiFooterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](LoginPageModule, { declarations: [_login_page_component__WEBPACK_IMPORTED_MODULE_11__["LoginPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _ui_components_ui_header_ui_header_module__WEBPACK_IMPORTED_MODULE_9__["UiHeaderModule"],
        _ui_components_ui_footer_ui_footer_module__WEBPACK_IMPORTED_MODULE_10__["UiFooterModule"]], exports: [_login_page_component__WEBPACK_IMPORTED_MODULE_11__["LoginPageComponent"]] }); })();


/***/ })

}]);
//# sourceMappingURL=login-page-login-page-module.js.map