webpackJsonp([7],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Service = (function () {
    function Service(http, alertCtrl, nativeStorage) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.nativeStorage = nativeStorage;
        this.baseUrl = "http://localhost";
        this.webPort = ":3000";
        this.dbPort = ":5984";
    }
    Service.prototype.presentAlert = function (header, sub, button) {
        var alert = this.alertCtrl.create({
            title: header,
            subTitle: sub,
            buttons: [button]
        });
        alert.present();
    };
    Service.prototype.init = function (details) {
        this.remote = details.userDBs.student;
        this.token = details.token;
        this.key = details.password;
        // headers for superlogin backend
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append("Authorization", "Bearer " + String(this.token) + ":" + String(this.key));
        // basic auth headers for couchdb authentication
        // base64 encode "user:pass"
        this.basicAuth = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.basicAuth.append("Authorization", "Basic " + btoa(String(this.token) + ":" + String(this.key)));
        this.nativeStorage.setItem('token', details.token).then(function () { return console.log('Stored token'); }, function (error) { return console.error('Error storing token', error); });
        this.nativeStorage.setItem('key', details.password).then(function () { return console.log('Stored key'); }, function (error) { return console.error('Error storing key', error); });
        this.nativeStorage.setItem('url', details.userDBs.student).then(function () { return console.log('Stored url'); }, function (error) { return console.error('Error storing url', error); });
    };
    Service.prototype.logout = function () {
        var _this = this;
        this.http.post(this.baseUrl + this.webPort + '/auth/logout', null, { headers: this.headers })
            .subscribe(function (res) {
            _this.nativeStorage.clear().then(function () { return console.log('Cleared storage'); }, function (error) { return console.error('Error clearing storage', error); });
        }, function (err) {
            console.log(err);
        });
    };
    Service.prototype.addServiceHours = function (doc) {
        var _this = this;
        this.http.post(this.remote, doc, { headers: this.basicAuth })
            .subscribe(function (res) {
            _this.presentAlert("Sucess", "Hours sucessfully logged!", "OK");
            _this.getServiceHours();
        }, function (err) {
            console.log(err);
        });
    };
    Service.prototype.getServiceHours = function () {
        var _this = this;
        this.http.get(this.remote + "/_design/hours/_view/date", { headers: this.basicAuth })
            .subscribe(function (res) {
            _this.hours = res.json();
        }, function (err) {
            console.log(err);
        });
    };
    Service.prototype.getEvents = function () {
        var _this = this;
        this.http.get(this.baseUrl + this.dbPort + "/events/_design/events/_view/start", { headers: this.basicAuth })
            .subscribe(function (res) {
            _this.events = res.json();
        }, function (err) {
            console.log(err);
        });
    };
    Service.prototype.getNews = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.baseUrl + _this.dbPort + "/news/_all_docs?include_docs=true", { headers: _this.basicAuth })
                .subscribe(function (res) {
                _this.news = res.json();
                resolve();
            }, function (err) {
                console.log(err);
            });
        });
    };
    return Service;
}());
Service = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */]])
], Service);

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		264,
		6
	],
	"../pages/events/events.module": [
		267,
		0
	],
	"../pages/home/home.module": [
		265,
		5
	],
	"../pages/login/login.module": [
		266,
		4
	],
	"../pages/service/service.module": [
		268,
		3
	],
	"../pages/timeline/timeline.module": [
		269,
		2
	],
	"../pages/welcome/welcome.module": [
		270,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_21" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_service__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#EventsPageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/events/events.module#EventsPageModule', name: 'EventsPage', segment: 'events', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/service/service.module#ServicePageModule', name: 'ServicePage', segment: 'service', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/timeline/timeline.module#TimelinePageModule', name: 'TimelinePage', segment: 'timeline', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__providers_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menu, service, nativeStorage, http) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.menu = menu;
        this.service = service;
        this.nativeStorage = nativeStorage;
        this.http = http;
        this.rootPage = "LoginPage";
        this.initializeApp();
        this.pages = [
            { title: 'Announcements', component: "HomePage", icon: "md-notifications" },
            { title: 'Events', component: "EventsPage", icon: "md-calendar" },
            { title: 'Service Timeline', component: "TimelinePage", icon: "md-pin" },
            { title: 'Service Log', component: "ServicePage", icon: "md-time" },
            { title: 'About', component: "AboutPage", icon: "md-information-circle" },
            { title: 'Logout', component: "LoginPage", icon: "md-exit" }
        ];
        this.activePage = this.pages[0];
        this.serviceProvider = service;
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.menu.swipeEnable(false, 'mainSlideMenu');
            _this.menu.enable(false, 'mainSlideMenu');
            _this.nativeStorage.getItem('notFirstRun').then(function (result) {
                if (result) {
                    _this.nativeStorage.getItem('token').then(function (token) {
                        _this.nativeStorage.getItem('key').then(function (key) {
                            _this.nativeStorage.getItem('url').then(function (url) {
                                // re-initialize auth headers with saved tokens
                                _this.service.headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
                                _this.service.headers.append("Authorization", "Bearer " + token + ":" + key);
                                _this.service.basicAuth = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
                                _this.service.basicAuth.append("Authorization", "Basic " + btoa(token + ":" + key));
                                _this.service.remote = url;
                                _this.http.get(_this.service.baseUrl + _this.service.webPort + "/auth/session", { headers: _this.service.headers }).subscribe(function (res) {
                                    if (res.status != 401) {
                                        _this.service.getNews().then(function () {
                                            _this.rootPage = "HomePage";
                                            _this.splashScreen.hide();
                                        });
                                    }
                                    else {
                                        _this.nativeStorage.remove('token');
                                        _this.nativeStorage.remove('key');
                                        _this.nativeStorage.remove('url');
                                        _this.splashScreen.hide();
                                    }
                                });
                            }, function (error3) { return console.error('Error getting url', error3); });
                        }, function (error2) { return console.error('Error getting key', error2); });
                    }, function (error1) { return console.error('Error getting token', error1); });
                }
            }, function (error) {
                _this.nativeStorage.setItem('notFirstRun', true).then(function () { return console.log('Stored run!'); }, function (error) { return console.error('Error storing run', error); });
                _this.rootPage = "WelcomePage";
                _this.splashScreen.hide();
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        if (page.title == 'Logout')
            this.logout();
        else {
            this.nav.setRoot(page.component);
            this.activePage = page;
        }
    };
    MyApp.prototype.logout = function () {
        this.service.logout();
        this.nav.setRoot("LoginPage", {}, { animate: true, direction: 'backward' });
        this.activePage = this.pages[0];
    };
    MyApp.prototype.checkActive = function (page) {
        return page == this.activePage;
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/adeem/Desktop/JeffersonClub/client/src/app/app.html"*/'<ion-menu [content]="content" id="mainSlideMenu">\n  <ion-content>\n    <ion-list no-lines>\n      <button menuClose ion-item detail-none *ngFor="let p of pages" [class.activePageHighlight]="checkActive(p)" (click)="openPage(p)">\n        <ion-icon [name]="p.icon" item-left></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/adeem/Desktop/JeffersonClub/client/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map
