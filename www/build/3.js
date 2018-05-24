webpackJsonp([3],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicePageModule", function() { return ServicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service__ = __webpack_require__(405);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ServicePageModule = (function () {
    function ServicePageModule() {
    }
    return ServicePageModule;
}());
ServicePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__service__["a" /* ServicePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__service__["a" /* ServicePage */]),
        ],
    })
], ServicePageModule);

//# sourceMappingURL=service.module.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServicePage = (function () {
    function ServicePage(navCtrl, navParams, formBuilder, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.service = service;
        this.submitAttempt = false;
        this.today = new Date().toISOString();
        this.logForm = formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            desc: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(250), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            date: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            hours: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('([0-9]|1[0-9]|2[0-4])'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    ServicePage.prototype.logHours = function () {
        this.submitAttempt = true;
        if (this.logForm.valid)
            this.service.addServiceHours(this.logForm.value);
    };
    return ServicePage;
}());
ServicePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-service',template:/*ion-inline-start:"/Users/adeem/Desktop/JeffersonClub/client/src/pages/service/service.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Service Log</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list no-lines>\n    <form [formGroup]="logForm">\n\n        <br>\n\n        <ion-item *ngIf="!logForm.controls.title.valid  && (logForm.controls.title.dirty || submitAttempt)">\n                  <p class="invalid">Please enter a shorter title.</p>\n        </ion-item>\n\n        <ion-item>\n            <ion-input formControlName="title" type="text" placeholder="Person / Organization"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf="!logForm.controls.desc.valid  && (logForm.controls.desc.dirty || submitAttempt)">\n                  <p class="invalid">Please enter a shorter description.</p>\n        </ion-item>\n\n        <ion-item>\n            <ion-input formControlName="desc" type="text" placeholder="Description of Service"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf="!logForm.controls.date.valid  && (logForm.controls.date.dirty || submitAttempt)">\n                  <p class="invalid">Please enter a valid date.</p>\n        </ion-item>\n\n        <ion-item>\n            <ion-datetime formControlName="date" displayFormat="DDDD MMM D, YYYY" placeholder="Date"></ion-datetime>\n        </ion-item>\n\n        <ion-item *ngIf="!logForm.controls.hours.valid  && (logForm.controls.hours.dirty || submitAttempt)">\n                  <p class="invalid">Please enter a valid amount of hours.</p>\n        </ion-item>\n\n        <ion-item>\n            <ion-input formControlName="hours" type="number" placeholder="Hours"></ion-input>\n       </ion-item>\n\n    </form>\n  </ion-list>\n\n  <button ion-button round block color="primary" (click)="logHours()">Log Hours</button>\n</ion-content>\n'/*ion-inline-end:"/Users/adeem/Desktop/JeffersonClub/client/src/pages/service/service.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* Service */]])
], ServicePage);

//# sourceMappingURL=service.js.map

/***/ })

});
//# sourceMappingURL=3.js.map