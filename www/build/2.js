webpackJsonp([2],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelinePageModule", function() { return TimelinePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timeline__ = __webpack_require__(406);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TimelinePageModule = (function () {
    function TimelinePageModule() {
    }
    return TimelinePageModule;
}());
TimelinePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__timeline__["a" /* TimelinePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__timeline__["a" /* TimelinePage */]),
        ],
    })
], TimelinePageModule);

//# sourceMappingURL=timeline.module.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimelinePage = (function () {
    function TimelinePage(navCtrl, navParams, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.timeline = new Array();
        this.noService = true;
        if (this.service.hours.total_rows != 0) {
            this.noService = false;
            var length_1 = this.service.hours.rows.length;
            for (var i = 0; i < length_1; i++) {
                var element = this.service.hours.rows[i];
                this.timeline.push({ title: element.value.title, date: new Date(element.key.replace(/-/g, '\/')), hours: element.value.hours, desc: element.value.desc });
            }
        }
        // this.timeline = [
        //   { title: 'Event 1', date: new Date("September 5, 2017"), hours: "5", desc: "todo: get from db" },
        //   { title: 'Event 2', date: new Date("September 6, 2017"), hours: "7", desc: "and fix styles" }
        // ];
    }
    return TimelinePage;
}());
TimelinePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-timeline',template:/*ion-inline-start:"/Users/adeem/Desktop/JeffersonClub/client/src/pages/timeline/timeline.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Service Timeline</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n<div *ngIf="noService">\n  <div class="emptyPageText">\n    <p class="mainHead">No service yet!</p> <br>\n    <p class="subtext">Head over to the "Service Log" page<br> and start adding in your hours.</p>\n  </div>\n</div>\n\n<div *ngIf="!noService">\n  <section id="cd-timeline" class="cd-container">\n    <div *ngFor="let event of timeline">\n      <div class="cd-timeline-block">\n        <div class="cd-timeline-icon">\n        </div>\n        <div class="cd-timeline-content" padding>\n          <h5 class="marginBottom0 marginTop0" style="font-family:Raleway"><strong>{{ event.title }}</strong></h5>\n          <p class="marginTop5 cd-author" style="font-size: 11px">{{ event.hours }} hr. on {{ event.date | date: "MMM dd, yyyy" }}</p>\n          <p class="timelineText" style="font-size: 13px; margin-bottom: -4px">{{ event.desc }}</p>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/adeem/Desktop/JeffersonClub/client/src/pages/timeline/timeline.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service__["a" /* Service */]])
], TimelinePage);

//# sourceMappingURL=timeline.js.map

/***/ })

});
//# sourceMappingURL=2.js.map