webpackJsonp([4],{

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(390);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(50);
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





var LoginPage = (function () {
    function LoginPage(nav, http, service, loadingCtrl, alertCtrl) {
        this.nav = nav;
        this.http = http;
        this.service = service;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.viewState = 'signup';
        this.inputType = 'password';
        this.hideShowPassword = function () {
            if (this.inputType == 'password')
                this.inputType = 'text';
            else
                this.inputType = 'password';
        };
    }
    LoginPage.prototype.changeState = function (stateName) {
        this.viewState = stateName;
    };
    LoginPage.prototype.presentAlert = function (header, sub, button) {
        var alert = this.alertCtrl.create({
            title: header,
            subTitle: sub,
            buttons: [button]
        });
        alert.present();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var credentials = {
            username: this.user,
            password: this.pass
        };
        this.loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.loader.present().then(function () {
            _this.http.post(_this.service.baseUrl + _this.service.webPort + '/auth/login', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                _this.service.init(res.json());
                _this.service.getNews().then(function () {
                    _this.loader.dismiss();
                    _this.nav.setRoot("HomePage", {}, { animate: true, direction: 'forward' });
                });
            }, function (err) {
                _this.loader.dismiss();
                if (err.status != 0)
                    _this.presentAlert("Error", JSON.parse(err._body).message, "OK");
                else
                    _this.presentAlert("Connection Error", "Please check your connection!", "OK");
            });
        });
    };
    LoginPage.prototype.register = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var user = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            username: this.username,
            password: this.password,
            confirmPassword: this.password
        };
        this.loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.loader.present().then(function () {
            _this.http.post(_this.service.baseUrl + _this.service.webPort + '/auth/register', JSON.stringify(user), { headers: headers })
                .subscribe(function (res) {
                _this.service.init(res.json());
                _this.service.getNews().then(function () {
                    _this.loader.dismiss();
                    _this.nav.setRoot("HomePage", {}, { animate: true, direction: 'forward' });
                });
            }, function (err) {
                _this.loader.dismiss();
                if (err.status != 0) {
                    var error = JSON.parse(err._body);
                    var body = "";
                    for (var key in error.validationErrors) {
                        if (error.validationErrors.hasOwnProperty(key)) {
                            body += error.validationErrors[key] + "<br>";
                        }
                    }
                    _this.presentAlert(error.error, body, "OK");
                }
                else
                    _this.presentAlert("Connection Error", "Please check your internet conection", "OK");
            });
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/adeem/Desktop/JeffersonClub/client/src/pages/login/login.html"*/'<ion-content class="login">\n\n  <!--top-->\n\n  <div text-center class="top-header" ion-fixed>\n    <ion-grid>\n      <ion-row class="header-menu">\n        <ion-col width-50><button ion-button color="light" clear block (click)="changeState(\'login\')">Login</button></ion-col>\n        <ion-col width-50><button ion-button color="light" clear block (click)="changeState(\'signup\')">Sign up</button></ion-col>\n        <img src="assets/img/active-icon.png" width="15px" id="active-icon" [ngClass]="{\'left\': viewState===\'login\'}">\n      </ion-row>\n    </ion-grid>\n\n\n  </div>\n\n  <div class="padding " ion-fixed>\n    <div class="padding">\n\n      <!--signup-->\n      <ion-list *ngIf="viewState===\'signup\'">\n        <ion-item>\n          <ion-icon name="md-person" item-left></ion-icon>\n          <ion-input [(ngModel)]="firstName" type="text" placeholder="First Name"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name="md-person" item-left></ion-icon>\n          <ion-input [(ngModel)]="lastName" type="text" placeholder="Last Name"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name="md-person" item-left></ion-icon>\n          <ion-input [(ngModel)]="username" type="text" placeholder="Username"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name="md-mail" item-left></ion-icon>\n          <ion-input [(ngModel)]="email" type="email" placeholder="E-mail"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name="md-lock" item-left></ion-icon>\n          <ion-icon name="md-eye" item-right (click)="hideShowPassword()" class="eye-icon" [ngClass]="{\'half-opacity\': inputType===\'text\'}"></ion-icon>\n          <ion-input [(ngModel)]="password" type="{{inputType}}" placeholder="Password"></ion-input>\n        </ion-item>\n\n      </ion-list>\n\n      <!--login-->\n      <ion-list *ngIf="viewState===\'login\'">\n        <ion-item>\n          <ion-icon name="md-person" item-left></ion-icon>\n          <ion-input [(ngModel)]="user" type="text" placeholder="Username"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name="md-lock" item-left></ion-icon>\n          <ion-icon name="md-eye" item-right (click)="hideShowPassword()" class="eye-icon" [ngClass]="{\'half-opacity\': inputType===\'text\'}"></ion-icon>\n          <ion-input [(ngModel)]="pass" type="{{inputType}}" placeholder="Password"></ion-input>\n        </ion-item>\n\n      </ion-list>\n    </div>\n  </div>\n\n  <!--footer-->\n  <div class="footer-content btn-holder" ion-fixed>\n    <div class="animated fadeIn">\n      <button ion-button round block color="positive" (click)="register()" *ngIf="viewState===\'signup\'">Create Account</button>\n      <button ion-button round block color="positive" (click)="login()" *ngIf="viewState===\'login\'">Login</button>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/adeem/Desktop/JeffersonClub/client/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=4.js.map