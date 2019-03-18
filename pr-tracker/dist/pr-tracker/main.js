(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _event_page_event_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-page/event-page.component */ "./src/app/event-page/event-page.component.ts");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup/popup.component */ "./src/app/popup/popup.component.ts");
/* harmony import */ var _token_token_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./token/token.component */ "./src/app/token/token.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");








var routes = [
    { path: 'homepage', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["HasToken"]] },
    { path: 'event-page', component: _event_page_event_page_component__WEBPACK_IMPORTED_MODULE_4__["EventPageComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["HasToken"]] },
    { path: 'popup', component: _popup_popup_component__WEBPACK_IMPORTED_MODULE_5__["PopupComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["HasToken"]] },
    { path: 'token', component: _token_token_component__WEBPACK_IMPORTED_MODULE_6__["TokenComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["DoesNotHaveToken"]] },
    { path: '', redirectTo: 'token', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  min-width: 500px; }\n\nmat-card-header-text {\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxqb2huLmhlbmdcXERvY3VtZW50c1xcUmVwb3NcXEhhY2tkYXlcXHByLXRyYWNrZXJcXHByLXRyYWNrZXIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFlLEVBQUE7O0FBR25CO0VBQ0ksU0FBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBtaW4td2lkdGg6NTAwcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcclxuICAgIG1hcmdpbjogMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'PR Tracker';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _event_page_event_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event-page/event-page.component */ "./src/app/event-page/event-page.component.ts");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./popup/popup.component */ "./src/app/popup/popup.component.ts");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _token_token_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./token/token.component */ "./src/app/token/token.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_github_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/github.service */ "./src/app/services/github.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"],
                _event_page_event_page_component__WEBPACK_IMPORTED_MODULE_7__["EventPageComponent"],
                _popup_popup_component__WEBPACK_IMPORTED_MODULE_8__["PopupComponent"],
                _token_token_component__WEBPACK_IMPORTED_MODULE_10__["TokenComponent"],
                time_ago_pipe__WEBPACK_IMPORTED_MODULE_15__["TimeAgoPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]
            ],
            providers: [_services_github_service__WEBPACK_IMPORTED_MODULE_12__["GithubService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"],
                    useClass: _auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthInterceptor"],
                    multi: true
                },],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: HasToken, DoesNotHaveToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasToken", function() { return HasToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoesNotHaveToken", function() { return DoesNotHaveToken; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HasToken = /** @class */ (function () {
    function HasToken(router) {
        this.router = router;
    }
    HasToken.prototype.canActivate = function (next, state) {
        if (localStorage.getItem("token") != null) {
            return true;
        }
        else {
            this.router.navigate(['/token']);
        }
    };
    HasToken = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HasToken);
    return HasToken;
}());

var DoesNotHaveToken = /** @class */ (function () {
    function DoesNotHaveToken(router) {
        this.router = router;
    }
    DoesNotHaveToken.prototype.canActivate = function (next, state) {
        if (localStorage.getItem("token") == null) {
            return true;
        }
        else {
            this.router.navigate(['/homepage']);
        }
    };
    DoesNotHaveToken = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DoesNotHaveToken);
    return DoesNotHaveToken;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var headers = req.headers
            .set('Content-Type', 'application/json');
        var token = localStorage.getItem("token");
        if (token) {
            var cloned = req.clone({
                headers: req.headers.set("Authorization", "token " + token)
            });
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/event-page/event-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/event-page/event-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  event-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/event-page/event-page.component.scss":
/*!******************************************************!*\
  !*** ./src/app/event-page/event-page.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50LXBhZ2UvZXZlbnQtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/event-page/event-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/event-page/event-page.component.ts ***!
  \****************************************************/
/*! exports provided: EventPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPageComponent", function() { return EventPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EventPageComponent = /** @class */ (function () {
    function EventPageComponent() {
    }
    EventPageComponent.prototype.ngOnInit = function () {
    };
    EventPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event-page',
            template: __webpack_require__(/*! ./event-page.component.html */ "./src/app/event-page/event-page.component.html"),
            styles: [__webpack_require__(/*! ./event-page.component.scss */ "./src/app/event-page/event-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventPageComponent);
    return EventPageComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let repo of repos\">\r\n  <mat-card>\r\n    <mat-card-header>\r\n      <mat-card-title>{{repo.info.name}}</mat-card-title>\r\n      <mat-card-subtitle>{{repo.info.owner.login}}</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <ng-container *ngIf=\"repo.pulls.length > 0; else empty\">\r\n        <div class=\"pull\" *ngFor=\"let pull of repo.pulls\">\r\n          <a href=\"{{pull.html_url}}\" target=\"_blank\">\r\n            <button mat-raised-button color=\"primary\">{{pull.title}}</button>\r\n            <p>#{{pull.number}} opened {{pull.created_at | timeAgo}}</p>\r\n          </a>\r\n        </div>\r\n      </ng-container>\r\n      <ng-template #empty>\r\n        There are no active pull requests.\r\n      </ng-template>\r\n    </mat-card-content>\r\n    <mat-card-actions align=\"end\">\r\n      <a href=\"{{repo.info.html_url}}\" target=\"_blank\">\r\n        <button mat-raised-button color=\"accent\">\r\n          Open repo\r\n        </button>\r\n      </a>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/homepage/homepage.component.scss":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  margin-bottom: 10px; }\n\nmat-card-header-text {\n  margin: 0; }\n\n.pull {\n  margin: 5px 0px; }\n\n.pull button.mat-raised-button.mat-primary {\n    display: block;\n    width: 100%; }\n\n.pull p {\n    text-align: right;\n    font-size: 10px;\n    margin: 3px 0 0 0; }\n\n.pull a {\n    text-decoration: none; }\n\nmat-card-actions button {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvQzpcXFVzZXJzXFxqb2huLmhlbmdcXERvY3VtZW50c1xcUmVwb3NcXEhhY2tkYXlcXHByLXRyYWNrZXJcXHByLXRyYWNrZXIvc3JjXFxhcHBcXGhvbWVwYWdlXFxob21lcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFNBQVMsRUFBQTs7QUFHYjtFQUNJLGVBQWUsRUFBQTs7QUFEbkI7SUFJUSxjQUFjO0lBQ2QsV0FBVyxFQUFBOztBQUxuQjtJQVNRLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7O0FBWHpCO0lBZVEscUJBQXFCLEVBQUE7O0FBSTdCO0VBQ0ksaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnB1bGwge1xyXG4gICAgbWFyZ2luOiA1cHggMHB4O1xyXG5cclxuICAgIGJ1dHRvbi5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbjogM3B4IDAgMCAwO1xyXG4gICAgfVxyXG5cclxuICAgIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxubWF0LWNhcmQtYWN0aW9ucyBidXR0b24ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_github_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/github.service */ "./src/app/services/github.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(githubService) {
        this.githubService = githubService;
        this.selectedRepos = ["Api.CampaignManagement", "Edge.Marketplace", "Api.Marketplace"];
    }
    HomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(this.selectedRepos
            .map(function (repoName) {
            return _this.githubService.getRepoInfo(repoName)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (repo) {
                return _this.githubService.getPulls(repoName)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (pulls) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ info: repo, pulls: pulls }); }));
            }));
        })).subscribe(function (x) { return _this.repos = x; });
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.scss */ "./src/app/homepage/homepage.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_github_service__WEBPACK_IMPORTED_MODULE_2__["GithubService"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/popup/popup.component.html":
/*!********************************************!*\
  !*** ./src/app/popup/popup.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  popup works!\n</p>\n"

/***/ }),

/***/ "./src/app/popup/popup.component.scss":
/*!********************************************!*\
  !*** ./src/app/popup/popup.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcHVwL3BvcHVwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/popup/popup.component.ts":
/*!******************************************!*\
  !*** ./src/app/popup/popup.component.ts ***!
  \******************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PopupComponent = /** @class */ (function () {
    function PopupComponent() {
    }
    PopupComponent.prototype.ngOnInit = function () {
    };
    PopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popup',
            template: __webpack_require__(/*! ./popup.component.html */ "./src/app/popup/popup.component.html"),
            styles: [__webpack_require__(/*! ./popup.component.scss */ "./src/app/popup/popup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PopupComponent);
    return PopupComponent;
}());



/***/ }),

/***/ "./src/app/services/github.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/github.service.ts ***!
  \********************************************/
/*! exports provided: GithubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubService", function() { return GithubService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/catchError */ "./node_modules/rxjs/internal/operators/catchError.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var GithubService = /** @class */ (function () {
    function GithubService(http) {
        this.http = http;
    }
    //#region tax credits
    GithubService.prototype.getRepos = function () {
        return this.http.get("https://api.github.com/orgs/snagajob/repos")
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.json); }));
    };
    GithubService.prototype.getRepoInfo = function (repo) {
        return this.http.get("https://api.github.com/repos/Snagajob/" + repo)
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.json); }));
    };
    GithubService.prototype.getPulls = function (repo) {
        return this.http.get("https://api.github.com/repos/Snagajob/" + repo + "/pulls")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (d) { return d; }), Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.json); }));
    };
    GithubService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GithubService);
    return GithubService;
}());



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"]]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/token/token.component.html":
/*!********************************************!*\
  !*** ./src/app/token/token.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <mat-form-field appearance=\"outline\">\r\n    <mat-label>GitHub OAuth 2.0 Token</mat-label>\r\n    <input matInput [formControl]=\"token\" type=\"password\">\r\n    <mat-hint>https://github.com/settings/tokens</mat-hint>\r\n  </mat-form-field>\r\n  <button mat-raised-button color=\"primary\" (click)=\"submit()\">Auth</button>\r\n</div>"

/***/ }),

/***/ "./src/app/token/token.component.scss":
/*!********************************************!*\
  !*** ./src/app/token/token.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field, button {\n  display: block;\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9rZW4vQzpcXFVzZXJzXFxqb2huLmhlbmdcXERvY3VtZW50c1xcUmVwb3NcXEhhY2tkYXlcXHByLXRyYWNrZXJcXHByLXRyYWNrZXIvc3JjXFxhcHBcXHRva2VuXFx0b2tlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Rva2VuL3Rva2VuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQsIGJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/token/token.component.ts":
/*!******************************************!*\
  !*** ./src/app/token/token.component.ts ***!
  \******************************************/
/*! exports provided: TokenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenComponent", function() { return TokenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TokenComponent = /** @class */ (function () {
    function TokenComponent(router) {
        this.router = router;
        this.token = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    TokenComponent.prototype.ngOnInit = function () {
    };
    TokenComponent.prototype.submit = function () {
        console.log(this.token.value);
        if (this.token.value != null) {
            localStorage.setItem("token", this.token.value);
            this.router.navigate(['/homepage']);
        }
    };
    TokenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-token',
            template: __webpack_require__(/*! ./token.component.html */ "./src/app/token/token.component.html"),
            styles: [__webpack_require__(/*! ./token.component.scss */ "./src/app/token/token.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TokenComponent);
    return TokenComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\john.heng\Documents\Repos\Hackday\pr-tracker\pr-tracker\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map