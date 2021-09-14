(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "+AC2":
/*!***************************************************!*\
  !*** ./src/app/main/conects/conects.component.ts ***!
  \***************************************************/
/*! exports provided: ConectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConectsComponent", function() { return ConectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ConectsComponent {
    constructor() {
        this.paymentRequest = {
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
                {
                    type: 'CARD',
                    parameters: {
                        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                        allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD', 'ELO_DEBIT', 'ELECTRON']
                    },
                    tokenizationSpecification: {
                        type: 'PAYMENT_GATEWAY',
                        parameters: {
                            gatewayMerchantId: 'exampleGatewayMerchantId'
                        }
                    }
                }
            ],
            merchantInfo: {
                merchantId: '12345678901234567890',
                merchantName: 'Demo Merchant'
            },
            transactionInfo: {
                totalPriceStatus: 'FINAL',
                totalPriceLabel: 'Total',
                totalPrice: '100.00',
                currencyCode: 'INR',
                countryCode: 'IN'
            },
            callbackIntents: ['PAYMENT_AUTHORIZATION']
        };
        this.onLoadPaymentData = (event) => {
            const eventDetail = event;
            console.log('Event detail', eventDetail);
        };
        this.onPaymentDataAuthorized = (patmentData) => {
            console.log('Payment Authorized: ', patmentData);
            return {
                transactionState: 'SUCCESS'
            };
        };
        this.onError = (event) => {
            console.error(event);
        };
    }
    ngOnInit() {
    }
}
ConectsComponent.ɵfac = function ConectsComponent_Factory(t) { return new (t || ConectsComponent)(); };
ConectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConectsComponent, selectors: [["app-conects"]], decls: 33, vars: 0, consts: [[1, "row"], [1, "col-lg-3", "col-md-6", "mb-3"], [1, "card"], ["src", "../assets/img/undraw_Add_files_re_v09g 1.svg", "alt", "...", 1, "card-img-top"], [1, "card-body"], [1, "card-title", "text-center"], [1, "bussness-info", "mb-5"], [1, "text-danger"]], template: function ConectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add Person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add Person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Add Person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Add Person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Bussess Idea:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Browse this selection of poems about autumn, including classics like Robert Frost's \"After Apple-Picking\" alongside contemporary poems like Brenda Hillman's \"Autumn Ritual with Hate Turned Sideways.\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Browse this selection of poems about autumn, including classics like Robert Frost's \"After Apple-Picking\" alongside contemporary poems like Brenda Hillman's \"Autumn Ritual with Hate Turned Sideways.\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".card[_ngcontent-%COMP%] {\n    border: 0;\n    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 7%), 0 4px 6px -2px rgb(0 0 0 / 5%);\n}\n\n.verify[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n}\n\n.img_cont[_ngcontent-%COMP%] {\n    min-height: 207px;\n    min-width: 207px;\n}\n\n.img_cont[_ngcontent-%COMP%]   .pp_pics[_ngcontent-%COMP%] {\n    max-height: 207px;\n    max-width: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    object-fit: cover;\n}\n\n.bussness-info[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    border: 0.1px solid red;\n    border-radius: 20px;\n    padding: 20px;\n    background-color: #ffff;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFFVCw0RUFBNEU7QUFDaEY7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QjttRkFDK0U7QUFDbkYiLCJmaWxlIjoiY29uZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIGJvcmRlcjogMDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiKDAgMCAwIC8gNyUpLCAwIDRweCA2cHggLTJweCByZ2IoMCAwIDAgLyA1JSk7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2IoMCAwIDAgLyA3JSksIDAgNHB4IDZweCAtMnB4IHJnYigwIDAgMCAvIDUlKTtcbn1cblxuLnZlcmlmeSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmltZ19jb250IHtcbiAgICBtaW4taGVpZ2h0OiAyMDdweDtcbiAgICBtaW4td2lkdGg6IDIwN3B4O1xufVxuXG4uaW1nX2NvbnQgLnBwX3BpY3Mge1xuICAgIG1heC1oZWlnaHQ6IDIwN3B4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5idXNzbmVzcy1pbmZvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyOiAwLjFweCBzb2xpZCByZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmO1xuICAgIC8qIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2IoMCAwIDAgLyA3JSksIDAgNHB4IDZweCAtMnB4IHJnYigwIDAgMCAvIDUlKTtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYigwIDAgMCAvIDclKSwgMCA0cHggNnB4IC0ycHggcmdiKDAgMCAwIC8gNSUpOyAqL1xufSJdfQ== */"] });


/***/ }),

/***/ "FNnY":
/*!*********************************************!*\
  !*** ./src/app/main/main.routing.module.ts ***!
  \*********************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.component */ "wlho");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _conects_conects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conects/conects.component */ "+AC2");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "l207");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account/account.component */ "uyzK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: '', component: _main_component__WEBPACK_IMPORTED_MODULE_0__["MainComponent"], children: [
            {
                path: '', redirectTo: _constants__WEBPACK_IMPORTED_MODULE_3__["MAIN_PATHS"].CONTACT_LIST, pathMatch: 'full'
            },
            {
                path: _constants__WEBPACK_IMPORTED_MODULE_3__["MAIN_PATHS"].CONTACT_LIST, component: _conects_conects_component__WEBPACK_IMPORTED_MODULE_2__["ConectsComponent"]
            },
            {
                path: _constants__WEBPACK_IMPORTED_MODULE_3__["MAIN_PATHS"].ACCOUNT, component: _account_account_component__WEBPACK_IMPORTED_MODULE_4__["AccountComponent"]
            }
        ]
    }
];
class MainRoutingModule {
}
MainRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: MainRoutingModule });
MainRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function MainRoutingModule_Factory(t) { return new (t || MainRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MainRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "MdCY":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@google-pay/button-angular/__ivy_ngcc__/fesm2015/google-pay-button-angular.js ***!
  \****************************************************************************************************/
/*! exports provided: GooglePayButtonComponent, GooglePayButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GooglePayButtonComponent", function() { return GooglePayButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GooglePayButtonModule", function() { return GooglePayButtonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Keeps track scripts that have been requested by loadScript.
 */

let cachedScripts = {};
/**
 * Asynchronously loads a script keeping track of which scripts have already
 * requested and loaded.
 *
 * Multiple requests to the same resource will return the same promise.
 *
 * @param src Script URL to load
 */
function loadScript(src) {
    const existing = cachedScripts[src];
    if (existing) {
        return existing;
    }
    const promise = new Promise((resolve, reject) => {
        // Create script
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        // Script event listener callbacks for load and error
        const onScriptLoad = () => {
            resolve();
        };
        const onScriptError = () => {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            cleanup();
            // Remove from cachedScripts so that we can try loading again
            delete cachedScripts[src];
            script.remove();
            reject(new Error(`Unable to load script ${src}`));
        };
        script.addEventListener('load', onScriptLoad);
        script.addEventListener('error', onScriptError);
        // Add script to document body
        document.body.appendChild(script);
        // Remove event listeners on cleanup
        function cleanup() {
            script.removeEventListener('load', onScriptLoad);
            script.removeEventListener('error', onScriptError);
        }
    });
    cachedScripts[src] = promise;
    return promise;
}
/**
 * Clears the script cache. Used for testing purposes only.
 */
function clearScriptCache() {
    cachedScripts = {};
}

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Manages the lifecycle of the Google Pay button.
 *
 * Includes lifecycle management of the `PaymentsClient` instance,
 * `isReadyToPay`, `onClick`, `loadPaymentData`, and other callback methods.
 */
class ButtonManager {
    constructor(options) {
        /**
         * Handles the click event of the Google Pay button.
         *
         * This method would normally be private but has been made public for
         * testing purposes.
         *
         * @private
         */
        this.handleClick = (event) => __awaiter(this, void 0, void 0, function* () {
            const config = this.config;
            if (!config) {
                throw new Error('google-pay-button: Missing configuration');
            }
            const request = this.createLoadPaymentDataRequest(config);
            try {
                if (config.onClick) {
                    config.onClick(event);
                }
                if (event.defaultPrevented) {
                    return;
                }
                const result = yield this.client.loadPaymentData(request);
                if (config.onLoadPaymentData) {
                    config.onLoadPaymentData(result);
                }
            }
            catch (err) {
                if (err.statusCode === 'CANCELED') {
                    if (config.onCancel) {
                        config.onCancel(err);
                    }
                }
                else if (config.onError) {
                    config.onError(err);
                }
                else {
                    console.error(err);
                }
            }
        });
        this.options = options;
    }
    getElement() {
        return this.element;
    }
    isGooglePayLoaded() {
        var _a, _b;
        return 'google' in (window || global) && !!((_b = (_a = google === null || google === void 0 ? void 0 : google.payments) === null || _a === void 0 ? void 0 : _a.api) === null || _b === void 0 ? void 0 : _b.PaymentsClient);
    }
    mount(element) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isGooglePayLoaded()) {
                yield loadScript('https://pay.google.com/gp/p/js/pay.js');
            }
            this.element = element;
            if (element) {
                this.appendStyles();
                if (this.config) {
                    this.updateElement();
                }
            }
        });
    }
    unmount() {
        this.element = undefined;
    }
    configure(newConfig) {
        let promise = undefined;
        this.config = newConfig;
        if (!this.oldInvalidationValues || this.isClientInvalidated(newConfig)) {
            promise = this.updateElement();
        }
        this.oldInvalidationValues = this.getInvalidationValues(newConfig);
        return promise !== null && promise !== void 0 ? promise : Promise.resolve();
    }
    /**
     * Creates client configuration options based on button configuration
     * options.
     *
     * This method would normally be private but has been made public for
     * testing purposes.
     *
     * @private
     */
    createClientOptions(config) {
        const clientConfig = {
            environment: config.environment,
            merchantInfo: this.createMerchantInfo(config),
        };
        if (config.onPaymentDataChanged || config.onPaymentAuthorized) {
            clientConfig.paymentDataCallbacks = {};
            if (config.onPaymentDataChanged) {
                // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
                clientConfig.paymentDataCallbacks.onPaymentDataChanged = paymentData => {
                    const result = config.onPaymentDataChanged(paymentData);
                    return result || {};
                };
            }
            if (config.onPaymentAuthorized) {
                // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
                clientConfig.paymentDataCallbacks.onPaymentAuthorized = paymentData => {
                    const result = config.onPaymentAuthorized(paymentData);
                    return result || {};
                };
            }
        }
        return clientConfig;
    }
    createIsReadyToPayRequest(config) {
        const paymentRequest = config.paymentRequest;
        const request = {
            apiVersion: paymentRequest.apiVersion,
            apiVersionMinor: paymentRequest.apiVersionMinor,
            allowedPaymentMethods: paymentRequest.allowedPaymentMethods,
            existingPaymentMethodRequired: config.existingPaymentMethodRequired,
        };
        return request;
    }
    /**
     * Constructs `loadPaymentData` request object based on button configuration.
     *
     * It infers request properties like `shippingAddressRequired`,
     * `shippingOptionRequired`, and `billingAddressRequired` if not already set
     * based on the presence of their associated options and parameters. It also
     * infers `callbackIntents` based on the callback methods defined in button
     * configuration.
     *
     * This method would normally be private but has been made public for
     * testing purposes.
     *
     * @private
     */
    createLoadPaymentDataRequest(config) {
        const request = Object.assign(Object.assign({}, config.paymentRequest), { merchantInfo: this.createMerchantInfo(config) });
        // TODO: #13 re-enable inferrence if/when we agree as a team
        return request;
    }
    createMerchantInfo(config) {
        const merchantInfo = Object.assign({}, config.paymentRequest.merchantInfo);
        // apply softwareInfo if not set
        if (!merchantInfo.softwareInfo) {
            merchantInfo.softwareInfo = {
                id: this.options.softwareInfoId,
                version: this.options.softwareInfoVersion,
            };
        }
        return merchantInfo;
    }
    isMounted() {
        return this.element != null && this.element.isConnected !== false;
    }
    removeButton() {
        if (this.element instanceof ShadowRoot || this.element instanceof Element) {
            for (const child of Array.from(this.element.children)) {
                if (child.tagName !== 'STYLE') {
                    child.remove();
                }
            }
        }
    }
    updateElement() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isMounted())
                return;
            const element = this.getElement();
            if (!this.config) {
                throw new Error('google-pay-button: Missing configuration');
            }
            // remove existing button
            this.removeButton();
            this.client = new google.payments.api.PaymentsClient(this.createClientOptions(this.config));
            const buttonOptions = {
                buttonType: this.config.buttonType,
                buttonColor: this.config.buttonColor,
                buttonSizeMode: this.config.buttonSizeMode,
                buttonLocale: this.config.buttonLocale,
                onClick: this.handleClick,
                allowedPaymentMethods: this.config.paymentRequest.allowedPaymentMethods,
            };
            const rootNode = element.getRootNode();
            if (rootNode instanceof ShadowRoot) {
                buttonOptions.buttonRootNode = rootNode;
            }
            // pre-create button
            const button = this.client.createButton(buttonOptions);
            this.setClassName(element, [element.className, 'not-ready']);
            element.appendChild(button);
            let showButton = false;
            let readyToPay;
            try {
                readyToPay = yield this.client.isReadyToPay(this.createIsReadyToPayRequest(this.config));
                showButton =
                    (readyToPay.result && !this.config.existingPaymentMethodRequired)
                        || (readyToPay.result && readyToPay.paymentMethodPresent && this.config.existingPaymentMethodRequired)
                        || false;
            }
            catch (err) {
                if (this.config.onError) {
                    this.config.onError(err);
                }
                else {
                    console.error(err);
                }
            }
            if (!this.isMounted())
                return;
            if (showButton) {
                try {
                    this.client.prefetchPaymentData(this.createLoadPaymentDataRequest(this.config));
                }
                catch (err) {
                    console.log('Error with prefetch', err);
                }
                // remove hidden className
                this.setClassName(element, (element.className || '').split(' ').filter(className => className && className !== 'not-ready'));
            }
            if (this.isReadyToPay !== (readyToPay === null || readyToPay === void 0 ? void 0 : readyToPay.result) || this.paymentMethodPresent !== (readyToPay === null || readyToPay === void 0 ? void 0 : readyToPay.paymentMethodPresent)) {
                this.isReadyToPay = !!(readyToPay === null || readyToPay === void 0 ? void 0 : readyToPay.result);
                this.paymentMethodPresent = readyToPay === null || readyToPay === void 0 ? void 0 : readyToPay.paymentMethodPresent;
                if (this.config.onReadyToPayChange) {
                    const readyToPayResponse = {
                        isButtonVisible: showButton,
                        isReadyToPay: this.isReadyToPay,
                    };
                    if (this.paymentMethodPresent) {
                        readyToPayResponse.paymentMethodPresent = this.paymentMethodPresent;
                    }
                    this.config.onReadyToPayChange(readyToPayResponse);
                }
            }
        });
    }
    setClassName(element, classNames) {
        const className = classNames.filter(name => name).join(' ');
        if (className) {
            element.className = className;
        }
        else {
            element.removeAttribute('class');
        }
    }
    appendStyles() {
        var _a, _b, _c;
        if (typeof document === 'undefined')
            return;
        const rootNode = (_a = this.element) === null || _a === void 0 ? void 0 : _a.getRootNode();
        const styleId = `default-google-style-${this.options.cssSelector.replace(/[^\w-]+/g, '')}-${(_b = this.config) === null || _b === void 0 ? void 0 : _b.buttonLocale}`;
        // initialize styles if rendering on the client:
        if (rootNode) {
            if (!((_c = rootNode.getElementById) === null || _c === void 0 ? void 0 : _c.call(rootNode, styleId))) {
                const style = document.createElement('style');
                style.id = styleId;
                style.type = 'text/css';
                style.innerHTML = `
          ${this.options.cssSelector} {
            display: inline-block;
          }
          ${this.options.cssSelector}.not-ready {
            width: 0;
            height: 0;
            overflow: hidden;
          }
        `;
                if (rootNode instanceof Document && rootNode.head) {
                    rootNode.head.appendChild(style);
                }
                else {
                    rootNode.appendChild(style);
                }
            }
        }
    }
    isClientInvalidated(newConfig) {
        if (!this.oldInvalidationValues)
            return true;
        const newValues = this.getInvalidationValues(newConfig);
        return newValues.some((value, index) => value !== this.oldInvalidationValues[index]);
    }
    getInvalidationValues(config) {
        var _a, _b;
        return [
            config.environment,
            config.existingPaymentMethodRequired,
            !!config.onPaymentDataChanged,
            !!config.onPaymentAuthorized,
            config.buttonColor,
            config.buttonType,
            config.buttonLocale,
            config.buttonSizeMode,
            config.paymentRequest.merchantInfo.merchantId,
            config.paymentRequest.merchantInfo.merchantName,
            (_a = config.paymentRequest.merchantInfo.softwareInfo) === null || _a === void 0 ? void 0 : _a.id,
            (_b = config.paymentRequest.merchantInfo.softwareInfo) === null || _b === void 0 ? void 0 : _b.version,
            config.paymentRequest.allowedPaymentMethods,
        ];
    }
}

var name = "@google-pay/button-angular";
var version = "2.6.0";
var description = "Angular component for Google Pay button";
var main = "dist/index.js";
var repository = {
	type: "git",
	url: "https://github.com/google-pay/google-pay-button",
	directory: "src/button-angular"
};
var homepage = "https://github.com/google-pay/google-pay-button/tree/main/src/button-angular#readme";
var engines = {
	node: ">=8.0.0"
};
var author = "socsieng@google.com";
var license = "Apache-2.0";
var scripts = {
	build: "ng build --configuration production"
};
var dependencies = {
	"@types/googlepay": "^0.6.3"
};
var peerDependencies = {
	"@angular/core": ">=8.0.0",
	"@types/googlepay": "^0.6.3"
};
var files = [
	"dist/*",
	"bundles/*",
	"ems2015/*",
	"fesm2015/*",
	"lib/*",
	"button-angular/*",
	"google-pay-button-angular.*",
	"*.d.ts",
	"*.json",
	"README.md"
];
var keywords = [
	"googlepay",
	"google-pay",
	"google-pay-button",
	"button",
	"angular"
];
var devDependencies = {
	"@angular-devkit/build-ng-packagr": "^0.1002.0",
	"@angular/core": "^10.2.2",
	"ng-packagr": "^10.1.2"
};
var _package = {
	name: name,
	version: version,
	description: description,
	main: main,
	repository: repository,
	homepage: homepage,
	engines: engines,
	author: author,
	license: license,
	scripts: scripts,
	dependencies: dependencies,
	peerDependencies: peerDependencies,
	files: files,
	keywords: keywords,
	devDependencies: devDependencies
};

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a new function that delays invocations to the original function
 * within a specified wait period. The last invocation within this time period
 * gets invoked. All earlier invocations are ignore.
 *
 * @param func The function to invoke.
 * @param wait The time in milliseconds to wait for idle invocations.
 */
function debounce(func, wait = 0) {
    let timeout;
    return function (...args) {
        window.clearTimeout(timeout);
        const later = function () {
            timeout = undefined;
            return func(...args);
        };
        return new Promise(resolve => {
            timeout = window.setTimeout(() => {
                const result = later();
                resolve(result);
            }, wait);
        });
    };
}

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class GooglePayButtonComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.manager = new ButtonManager({
            cssSelector: 'google-pay-button',
            softwareInfoId: name,
            softwareInfoVersion: version,
        });
        this.initializeButton = debounce(() => {
            if (!this.assertRequiredProperty('paymentRequest')) {
                return;
            }
            if (!this.assertRequiredProperty('environment')) {
                return;
            }
            const config = {
                paymentRequest: this.paymentRequest,
                environment: this.environment,
                existingPaymentMethodRequired: this.existingPaymentMethodRequired,
                onPaymentDataChanged: this.paymentDataChangedCallback,
                onPaymentAuthorized: this.paymentAuthorizedCallback,
                buttonColor: this.buttonColor,
                buttonType: this.buttonType,
                buttonSizeMode: this.buttonSizeMode,
                buttonLocale: this.buttonLocale,
                onReadyToPayChange: result => {
                    if (this.readyToPayChangeCallback) {
                        this.readyToPayChangeCallback(result);
                    }
                    this.dispatch('readytopaychange', result);
                },
                onCancel: reason => {
                    if (this.cancelCallback) {
                        this.cancelCallback(reason);
                    }
                    this.dispatch('cancel', reason);
                },
                onError: error => {
                    var _a;
                    if (this.errorCallback) {
                        (_a = this.errorCallback) === null || _a === void 0 ? void 0 : _a.call(this, error);
                    }
                    this.elementRef.nativeElement.dispatchEvent(new ErrorEvent('error', { error }));
                },
                onLoadPaymentData: paymentData => {
                    if (this.loadPaymentDataCallback) {
                        this.loadPaymentDataCallback(paymentData);
                    }
                    this.dispatch('loadpaymentdata', paymentData);
                },
                onClick: event => {
                    var _a;
                    if (this.clickCallback) {
                        (_a = this.clickCallback) === null || _a === void 0 ? void 0 : _a.call(this, event);
                    }
                },
            };
            this.manager.configure(config);
        });
    }
    get isReadyToPay() {
        return this.manager.isReadyToPay;
    }
    ngOnInit() {
        return this.manager.mount(this.elementRef.nativeElement);
    }
    ngOnChanges() {
        return this.initializeButton();
    }
    assertRequiredProperty(name) {
        const value = this[name];
        if (value === null || value === undefined) {
            this.throwError(Error(`Required property not set: ${name}`));
            return false;
        }
        return true;
    }
    /**
     * Throws an error.
     *
     * Used for testing purposes so that the method can be spied on.
     */
    throwError(error) {
        throw error;
    }
    dispatch(type, detail) {
        this.elementRef.nativeElement.dispatchEvent(new CustomEvent(type, {
            bubbles: true,
            cancelable: false,
            detail,
        }));
    }
}
GooglePayButtonComponent.ɵfac = function GooglePayButtonComponent_Factory(t) { return new (t || GooglePayButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
GooglePayButtonComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: GooglePayButtonComponent, selectors: [["google-pay-button"]], inputs: { paymentRequest: "paymentRequest", environment: "environment", existingPaymentMethodRequired: "existingPaymentMethodRequired", buttonColor: "buttonColor", buttonType: "buttonType", buttonSizeMode: "buttonSizeMode", buttonLocale: "buttonLocale", paymentDataChangedCallback: "paymentDataChangedCallback", paymentAuthorizedCallback: "paymentAuthorizedCallback", readyToPayChangeCallback: "readyToPayChangeCallback", loadPaymentDataCallback: "loadPaymentDataCallback", cancelCallback: "cancelCallback", errorCallback: "errorCallback", clickCallback: "clickCallback" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
GooglePayButtonComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
GooglePayButtonComponent.propDecorators = {
    paymentRequest: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    environment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    existingPaymentMethodRequired: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    buttonColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    buttonType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    buttonSizeMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    buttonLocale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    paymentDataChangedCallback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    paymentAuthorizedCallback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    readyToPayChangeCallback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loadPaymentDataCallback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cancelCallback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    errorCallback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    clickCallback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GooglePayButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'google-pay-button'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { paymentRequest: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], environment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], existingPaymentMethodRequired: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], buttonColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], buttonType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], buttonSizeMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], buttonLocale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], paymentDataChangedCallback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], paymentAuthorizedCallback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], readyToPayChangeCallback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loadPaymentDataCallback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cancelCallback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], errorCallback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clickCallback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class GooglePayButtonModule {
}
GooglePayButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GooglePayButtonModule });
GooglePayButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GooglePayButtonModule_Factory(t) { return new (t || GooglePayButtonModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GooglePayButtonModule, { declarations: [GooglePayButtonComponent], exports: [GooglePayButtonComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GooglePayButtonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [GooglePayButtonComponent],
                imports: [],
                exports: [GooglePayButtonComponent]
            }]
    }], null, null); })();

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=google-pay-button-angular.js.map

/***/ }),

/***/ "XpXM":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.routing.module */ "FNnY");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar.component */ "fOGv");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.component */ "wlho");
/* harmony import */ var _google_pay_button_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @google-pay/button-angular */ "MdCY");
/* harmony import */ var _conects_conects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./conects/conects.component */ "+AC2");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account/account.component */ "uyzK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class MainModule {
}
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function MainModule_Factory(t) { return new (t || MainModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _main_routing_module__WEBPACK_IMPORTED_MODULE_1__["MainRoutingModule"],
            _google_pay_button_angular__WEBPACK_IMPORTED_MODULE_4__["GooglePayButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"],
        _conects_conects_component__WEBPACK_IMPORTED_MODULE_5__["ConectsComponent"],
        _account_account_component__WEBPACK_IMPORTED_MODULE_6__["AccountComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _main_routing_module__WEBPACK_IMPORTED_MODULE_1__["MainRoutingModule"],
        _google_pay_button_angular__WEBPACK_IMPORTED_MODULE_4__["GooglePayButtonModule"]] }); })();


/***/ }),

/***/ "fOGv":
/*!*************************************************!*\
  !*** ./src/app/main/navbar/navbar.component.ts ***!
  \*************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/constants */ "l207");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function () { return { exact: true }; };
function NavbarComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", item_r1.path)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.name);
} }
class NavbarComponent {
    constructor(router, toastr) {
        this.router = router;
        this.toastr = toastr;
        this.routes = src_app_constants__WEBPACK_IMPORTED_MODULE_0__["USER_ROUTES"];
        this.showLogout = false;
    }
    ngOnInit() {
    }
    logout() {
        localStorage.clear();
        this.router.navigate([src_app_constants__WEBPACK_IMPORTED_MODULE_0__["AUTH_PATH"].SIGN_IN]);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 11, vars: 1, consts: [["type", "checkbox", "id", "check"], ["for", "check", 1, "checkbtn"], [1, "fas", "fa-bars"], [1, "logo"], [4, "ngFor", "ngForOf"], ["href", ""], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Mani");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NavbarComponent_li_7_Template, 3, 4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.routes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["*[_ngcontent-%COMP%] {\n    text-decoration: none;\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    box-sizing: border-box;\n}\n\nnav[_ngcontent-%COMP%] {\n    height: 80px;\n    \n    background: #f50057d9;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\nlabel.logo[_ngcontent-%COMP%] {\n    color: #ffff;\n    font-size: 35px;\n    line-height: 80px;\n    padding: 0 100px;\n    font-weight: bold;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    float: right;\n    margin-right: 20px;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: inline-block;\n    line-height: 80px;\n    margin: 0 5px;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 17px;\n    text-transform: uppercase;\n    color: #ffff;\n    padding: 7px 13px;\n    border-radius: 3px;\n}\n\na[_ngcontent-%COMP%]:hover, a.active[_ngcontent-%COMP%] {\n    background: #ff1b2e;\n    transition: 0.5s;\n}\n\n.btn[_ngcontent-%COMP%] {\n    color: #ffff;\n    padding: 7px 13px;\n    font-size: 17px;\n    text-transform: uppercase;\n    border-radius: 3px;\n}\n\n.checkbtn[_ngcontent-%COMP%] {\n    font-size: 30px;\n    color: #ffff;\n    float: right;\n    margin-right: 40px;\n    line-height: 80px;\n    cursor: pointer;\n    display: none;\n}\n\n#check[_ngcontent-%COMP%] {\n    display: none;\n}\n\n@media (max-width:952px) {\n    label.logo[_ngcontent-%COMP%] {\n        font-size: 30px;\n        padding-left: 50px;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 16px;\n    }\n}\n\n@media (max-width:858px) {\n    .checkbtn[_ngcontent-%COMP%] {\n        display: block;\n    }\n    #check[_ngcontent-%COMP%]:checked ~ .checkbtn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:before {\n        content: \"\\f00d\";\n    }\n    ul[_ngcontent-%COMP%] {\n        position: fixed;\n        width: 100%;\n        height: 100vh;\n        background: rgba(0, 0, 0, 0.842);\n        top: 80px;\n        left: -100%;\n        text-align: center;\n        transition: all .5s;\n        z-index: 9999;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        display: block;\n        margin: 50px 0px;\n        line-height: 30px;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 20px;\n    }\n    a[_ngcontent-%COMP%]:hover {\n        background: #ff1b2e;\n        transition: 0.5s;\n    }\n    #check[_ngcontent-%COMP%]:checked ~ ul[_ngcontent-%COMP%] {\n        left: 0;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHdJQUF3STtBQUM1STs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLFdBQVc7UUFDWCxhQUFhO1FBQ2IsZ0NBQWdDO1FBQ2hDLFNBQVM7UUFDVCxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksT0FBTztJQUNYO0FBQ0oiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5uYXYge1xuICAgIGhlaWdodDogODBweDtcbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXG4gICAgYmFja2dyb3VuZDogI2Y1MDA1N2Q5O1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG59XG5cbmxhYmVsLmxvZ28ge1xuICAgIGNvbG9yOiAjZmZmZjtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gICAgcGFkZGluZzogMCAxMDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxubmF2IHVsIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG5uYXYgdWwgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogODBweDtcbiAgICBtYXJnaW46IDAgNXB4O1xufVxuXG5uYXYgdWwgbGkgYSB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICNmZmZmO1xuICAgIHBhZGRpbmc6IDdweCAxM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuYTpob3ZlcixcbmEuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmYxYjJlO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5idG4ge1xuICAgIGNvbG9yOiAjZmZmZjtcbiAgICBwYWRkaW5nOiA3cHggMTNweDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5jaGVja2J0biB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiAjZmZmZjtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4jY2hlY2sge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjk1MnB4KSB7XG4gICAgbGFiZWwubG9nbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIH1cbiAgICBuYXYgdWwgbGkgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjg1OHB4KSB7XG4gICAgLmNoZWNrYnRuIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgICNjaGVjazpjaGVja2Vkfi5jaGVja2J0biBpOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXFxmMDBkXCI7XG4gICAgfVxuICAgIHVsIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjg0Mik7XG4gICAgICAgIHRvcDogODBweDtcbiAgICAgICAgbGVmdDogLTEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgICAgICAgei1pbmRleDogOTk5OTtcbiAgICB9XG4gICAgbmF2IHVsIGxpIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogNTBweCAwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICBuYXYgdWwgbGkgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgYTpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZjFiMmU7XG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgfVxuICAgICNjaGVjazpjaGVja2VkfnVsIHtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ "uyzK":
/*!***************************************************!*\
  !*** ./src/app/main/account/account.component.ts ***!
  \***************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_alert_service_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/alert-service/alert-service */ "EmIs");


class AccountComponent {
    constructor(alertService) {
        this.alertService = alertService;
    }
    ngOnInit() {
    }
    enterAmount() {
        this.alertService.promtBox().then(res => {
        }).catch(err => {
        });
    }
}
AccountComponent.ɵfac = function AccountComponent_Factory(t) { return new (t || AccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_alert_service_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"])); };
AccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountComponent, selectors: [["app-account"]], decls: 15, vars: 0, consts: [[1, "account-box"], [1, "text-center"], [1, "row"], [1, "col-12"], [1, "form-group"], ["for", "", 1, "text-left"], ["type", "text", "placeholder", "10,000", "disabled", "", 1, "form-control"], [1, "form-group", "mt-3", "text-center"], ["type", "submit", "value", "Widhraw", 1, "btn", "btn-outline-success", 3, "click"]], template: function AccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "User Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Balance in account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Total Earning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_Template_input_click_14_listener() { return ctx.enterAmount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".account-box[_ngcontent-%COMP%] {\n    background-color: #fff;\n    width: 80%;\n    height: auto;\n    margin: auto;\n    padding: 20px;\n    border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImFjY291bnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY2NvdW50LWJveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "wlho":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "fOGv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class MainComponent {
    ngOnInit() { }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=main-main-module.js.map