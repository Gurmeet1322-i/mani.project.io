(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jubairayeshi/Projects/Angular/markting/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: 'https://api.blyott.com/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DLli":
/*!*****************************************************!*\
  !*** ./src/app/common/spinner/spinner.component.ts ***!
  \*****************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "JqCM");


class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], decls: 3, vars: 0, consts: [[2, "color", "white"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGlubmVyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "EmIs":
/*!*******************************************************!*\
  !*** ./src/app/common/alert-service/alert-service.ts ***!
  \*******************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class AlertService {
    logoutSwal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                title: 'Are you sure?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Logout'
            });
        });
    }
    deleteSwal(title) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                title,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Delete'
            });
        });
    }
    somethingWentWrong() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        });
    }
    success(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'success',
                title: msg,
                showConfirmButton: false,
                timer: 1500
            });
        });
    }
    promtBox() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                title: 'Enter amount.',
                input: 'number',
                showCancelButton: true,
                confirmButtonText: 'Submit',
                showLoaderOnConfirm: true,
            });
        });
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "G11N":
/*!***************************************************!*\
  !*** ./src/app/auth/sign-in/sign-in.component.ts ***!
  \***************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "l207");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");






class SignInComponent {
    constructor(fb, router, toastrService) {
        this.fb = fb;
        this.router = router;
        this.toastrService = toastrService;
    }
    ngOnInit() {
        this.signInForm = this.fb.group({
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])]
        });
    }
    submit() {
        this.toastrService.success(_constants__WEBPACK_IMPORTED_MODULE_1__["MESSAGES"].OTP_SEND_SUCCESSFULLY);
        this.router.navigate([_constants__WEBPACK_IMPORTED_MODULE_1__["AUTH_PATH"].VERIFY_OTP]);
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 14, vars: 1, consts: [[1, "d-flex", "justify-content-center", "align-items-center", "container"], [1, "card", "py-5", "px-3"], [1, "text-center"], ["src", "../assets/img/undraw_Confirmed_re_sef7.svg", "width", "150px", "height", "150px", "alt", ""], [1, "m-0", "text-center"], [1, "mobile-text", "mt-1"], [3, "formGroup", "submit"], [1, "form-group"], ["type", "text", "placeholder", "+91 86684833", "autofocus", "", 1, "form-control"], [1, "mt-3", "text-center"], [1, "btn", "btn-danger", "px-4", "verify"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Verify Your Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Please enter your mobile number to receive a varification code. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function SignInComponent_Template_form_submit_8_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Verify");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.signInForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"]], styles: [".container[_ngcontent-%COMP%] {\n    margin-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbn0iXX0= */"] });


/***/ }),

/***/ "LWT+":
/*!*********************************************************!*\
  !*** ./src/app/auth/verify-otp/verify-otp.component.ts ***!
  \*********************************************************/
/*! exports provided: VerifyOtpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyOtpComponent", function() { return VerifyOtpComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constants */ "l207");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_common_alert_service_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/alert-service/alert-service */ "EmIs");






const _c0 = ["first"];
const _c1 = ["second"];
const _c2 = ["third"];
const _c3 = ["forth"];
class VerifyOtpComponent {
    constructor(router, fb, alertService) {
        this.router = router;
        this.fb = fb;
        this.alertService = alertService;
        this.OtpForm = this.fb.group({
            one: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            two: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            three: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            four: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    submit() {
        this.alertService.success(src_app_constants__WEBPACK_IMPORTED_MODULE_1__["MESSAGES"].YOUR_USER_VERIFYED_SUCCESSFULLY).then(res => {
            this.router.navigate([src_app_constants__WEBPACK_IMPORTED_MODULE_1__["MAIN_PATHS"].MAIN]);
        }).catch(error => {
            console.log('Error:- ', error);
        });
    }
    input(event) {
        if (this.OtpForm.value.one.length == 1) {
            this.second.nativeElement.focus();
        }
        else {
            this.first.nativeElement.focus();
        }
        if (this.OtpForm.value.two.length == 1) {
            this.third.nativeElement.focus();
        }
        else {
            this.second.nativeElement.focus();
        }
        if (this.OtpForm.value.three.length == 1) {
            this.forth.nativeElement.focus();
        }
        else {
            this.third.nativeElement.focus();
        }
    }
}
VerifyOtpComponent.ɵfac = function VerifyOtpComponent_Factory(t) { return new (t || VerifyOtpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_common_alert_service_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"])); };
VerifyOtpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: VerifyOtpComponent, selectors: [["app-verify-otp"]], viewQuery: function VerifyOtpComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.first = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.second = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.third = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.forth = _t.first);
    } }, decls: 30, vars: 1, consts: [[1, "d-flex", "justify-content-center", "align-items-center", "container"], [1, "card", "py-5", "px-3"], [1, "text-center"], ["src", "../assets/img/undraw_pending_approval_xuu9.svg", "width", "100px", "height", "100px", "alt", ""], [1, "m-0", "text-center", "mt-1"], [1, "mobile-text", "text-center"], [1, "text-danger"], [3, "formGroup", "submit"], [1, "d-flex", "flex-row", "mt-3"], ["type", "text", "formControlName", "one", "autofocus", "", 1, "form-control", "text-center", 3, "input"], ["first", ""], ["type", "text", "formControlName", "two", "max", "9", 1, "form-control", "text-center", 3, "input"], ["second", ""], ["type", "text", "formControlName", "three", "max", "9", 1, "form-control", "text-center", 3, "input"], ["third", ""], ["type", "text", "formControlName", "four", "max", "9", 1, "form-control", "text-center", 3, "input"], ["forth", ""], [1, "mt-3", "text-center"], [1, "btn", "btn-danger", "px-4", "verify"], [1, "text-center", "mt-3"], [1, "d-block", "mobile-text"], [1, "font-weight-bold", "text-danger", "cursor"]], template: function VerifyOtpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Mobile Number Verification");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Enter the code we just send on your mobile phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "b", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "+91 86684833");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function VerifyOtpComponent_Template_form_submit_12_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function VerifyOtpComponent_Template_input_input_14_listener($event) { return ctx.input($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function VerifyOtpComponent_Template_input_input_16_listener($event) { return ctx.input($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function VerifyOtpComponent_Template_input_input_18_listener($event) { return ctx.input($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function VerifyOtpComponent_Template_input_input_20_listener($event) { return ctx.input($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Validate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Don't receive the code?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Resend");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.OtpForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: [".container[_ngcontent-%COMP%] {\n    margin-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmeS1vdHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJ2ZXJpZnktb3RwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbn0iXX0= */"] });


/***/ }),

/***/ "Qc4i":
/*!***************************************************!*\
  !*** ./src/app/common/spinner/spinner-service.ts ***!
  \***************************************************/
/*! exports provided: SpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerService", function() { return SpinnerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "JqCM");


class SpinnerService {
    constructor(spinner) {
        this.spinner = spinner;
    }
    showSpinner() {
        this.spinner.show(undefined, {
            type: 'square-jelly-box',
            size: 'medium',
            bdColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            fullScreen: true
        });
    }
    hideSpinner() {
        this.spinner.hide();
    }
}
SpinnerService.ɵfac = function SpinnerService_Factory(t) { return new (t || SpinnerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"])); };
SpinnerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SpinnerService, factory: SpinnerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/spinner/spinner.component */ "DLli");



class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'angular-boiler-point';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _common_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Wuue":
/*!******************************************************!*\
  !*** ./src/app/core/services/interceptor-service.ts ***!
  \******************************************************/
/*! exports provided: InterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorService", function() { return InterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constants */ "l207");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _common_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../common/spinner/spinner-service */ "Qc4i");








class InterceptorService {
    constructor(router, toastr, spinner) {
        this.router = router;
        this.toastr = toastr;
        this.spinner = spinner;
    }
    intercept(req, next) {
        this.spinner.showSpinner();
        // Clone the request to add the new header.
        const token = localStorage.getItem("accessToken");
        if (token) {
            req = req.clone({
                headers: req.headers.set("authorization", token)
            });
        }
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                if (event.url.includes(src_app_constants__WEBPACK_IMPORTED_MODULE_3__["AUTH_APIS"].LOGIN)) {
                    const message = event.body.msg;
                    this.toastr.success('success');
                }
                this.spinner.hideSpinner();
            }
        }, (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const status = err.error.statusCode;
            const message = err.error.message;
            this.spinner.hideSpinner();
            if (status === 401) {
                localStorage.clear();
                this.toastr.error(message);
                alert('success');
                this.router.navigateByUrl(`/${src_app_constants__WEBPACK_IMPORTED_MODULE_3__["AUTH_PATH"].SIGN_IN}`);
            }
            else {
                this.toastr.error(message);
            }
        })));
    }
}
InterceptorService.ɵfac = function InterceptorService_Factory(t) { return new (t || InterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_common_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_7__["SpinnerService"])); };
InterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: InterceptorService, factory: InterceptorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/sign-in/sign-in.component */ "G11N");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _common_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/spinner/spinner.component */ "DLli");
/* harmony import */ var _core_services_interceptor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/services/interceptor-service */ "Wuue");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _auth_verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/verify-otp/verify-otp.component */ "LWT+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _core_services_interceptor_service__WEBPACK_IMPORTED_MODULE_9__["InterceptorService"],
            multi: true
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot({
                tapToDismiss: true,
                progressAnimation: 'increasing',
                closeButton: true,
                timeOut: 2000
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__["SignInComponent"],
        _common_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__["SpinnerComponent"],
        _auth_verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_11__["VerifyOtpComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"]] }); })();


/***/ }),

/***/ "l207":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: AUTH_PATH, AUTH_APIS, REGEX, API_PATH, MAIN_PATHS, ADMIN_PATH, USER_ROUTES, ADMIN_ROUTES, PAYMENT_REQUEST_TABLE, USER_TABLE, MESSAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_PATH", function() { return AUTH_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_APIS", function() { return AUTH_APIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGEX", function() { return REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_PATH", function() { return API_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN_PATHS", function() { return MAIN_PATHS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADMIN_PATH", function() { return ADMIN_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_ROUTES", function() { return USER_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADMIN_ROUTES", function() { return ADMIN_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_REQUEST_TABLE", function() { return PAYMENT_REQUEST_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_TABLE", function() { return USER_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGES", function() { return MESSAGES; });
const AUTH_PATH = {
    SIGN_IN: 'sign-in',
    VERIFY_OTP: 'otp-verify'
};
const AUTH_APIS = {
    LOGIN: 'login'
};
const REGEX = {
    EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
};
const API_PATH = {
    SERVER_RESPONCE: 'serverResponse'
};
const MAIN_PATHS = {
    MAIN: 'main',
    CONTACT_LIST: 'home',
    ACCOUNT: 'account'
};
const ADMIN_PATH = {
    ADMIN: 'admin',
    DASHBOARD: 'dashboard',
    USERS: 'users'
};
const USER_ROUTES = [
    {
        path: 'home',
        name: 'Home',
        role: 2
    },
    {
        path: 'account',
        name: 'Account',
        role: 2
    },
    {
        path: '../admin',
        name: 'Admin',
        role: 1
    }
];
const ADMIN_ROUTES = [
    {
        path: 'dashboard',
        name: 'Dashboard',
        role: 1
    },
    {
        path: 'users',
        name: 'Users',
        role: 1
    }
];
const PAYMENT_REQUEST_TABLE = [
    {
        key: '',
        case: 'serial',
        name: 'S.No.',
    },
    {
        key: 'name',
        case: 'normal',
        name: 'Name',
    },
    {
        key: 'phone',
        case: 'normal',
        name: 'Phone',
    },
    {
        key: 'totalAmount',
        case: 'amount',
        name: 'Total Amount',
    },
    {
        key: 'widhrawAmount',
        case: 'withdraw',
        name: 'Widhraw Amount',
    },
    {
        key: 'action',
        case: 'acceptReject',
        name: 'Action',
    }
];
const USER_TABLE = [
    {
        key: '',
        case: 'serial',
        name: 'S.No.',
    },
    {
        key: 'name',
        case: 'normal',
        name: 'Name',
    },
    {
        key: 'phone',
        case: 'normal',
        name: 'Phone',
    },
    {
        key: 'otp',
        case: 'normal',
        name: 'OTP',
    },
    {
        key: 'totalAmount',
        case: 'amount',
        name: 'Amount',
    },
    {
        key: 'action',
        case: 'editDelete',
        name: 'Action',
    }
];
const MESSAGES = {
    OTP_SEND_SUCCESSFULLY: "Otp send on your register number.",
    YOUR_USER_VERIFYED_SUCCESSFULLY: 'You Registred successfully.'
};


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/sign-in/sign-in.component */ "G11N");
/* harmony import */ var _auth_verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/verify-otp/verify-otp.component */ "LWT+");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "l207");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', redirectTo: _constants__WEBPACK_IMPORTED_MODULE_3__["AUTH_PATH"].SIGN_IN, pathMatch: 'full' },
    { path: _constants__WEBPACK_IMPORTED_MODULE_3__["AUTH_PATH"].SIGN_IN, component: _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_1__["SignInComponent"] },
    { path: _constants__WEBPACK_IMPORTED_MODULE_3__["AUTH_PATH"].VERIFY_OTP, component: _auth_verify_otp_verify_otp_component__WEBPACK_IMPORTED_MODULE_2__["VerifyOtpComponent"] },
    { path: _constants__WEBPACK_IMPORTED_MODULE_3__["MAIN_PATHS"].MAIN, canActivate: [], loadChildren: () => __webpack_require__.e(/*! import() | main-main-module */ "main-main-module").then(__webpack_require__.bind(null, /*! ./main/main.module */ "XpXM")).then((m) => m.MainModule) },
    { path: _constants__WEBPACK_IMPORTED_MODULE_3__["ADMIN_PATH"].ADMIN, loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "jkDv")).then((m) => m.AdminModule) },
    { path: '**', pathMatch: 'full', redirectTo: _constants__WEBPACK_IMPORTED_MODULE_3__["AUTH_PATH"].SIGN_IN }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map