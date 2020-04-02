(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar id=\"toolbar2\">\n    <ion-title>\n      Mapa Domu\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" id=\"mapmain\">\n  <ion-header collapse=\"condense\">\n  </ion-header>\n<div id=\"con\">\n      <ion-img src='assets/map/allhome.jpg' style='height:100%; margin-top:20%; margin-left:-23%; width:170%;'></ion-img>\n      <div id=\"room1\"></div>\n      <div id=\"room2\"></div>\n      <div id=\"room3\"></div>\n      <div id=\"room4\"></div>\n      <div id=\"room5\"></div>\n      <div id=\"room6\"></div>\n      <div id=\"room7\"></div>\n\n</div>\n</ion-content>\n\n<ion-content [fullscreen]=\"true\" id=\"maproom1\">\n<ion-img src='assets/map/room1.jpg' style='height:40%; margin-left:-3%; width:100%;'></ion-img>\n<ion-item button>\n<ion-label>\n<div id='room1-temp' style='text-algine:center;'>Zarządzaj Pomieszczeniem</div>\n</ion-label>\n</ion-item>\n  </ion-content>\n\n  <ion-content [fullscreen]=\"true\" id=\"maproom2\">\n    <ion-img src='assets/map/room2.jpg' style='height:40%; margin-left:-3%; width:100%;'></ion-img>\n    <ion-item button>\n    <ion-label>\n    <div id='room1-temp' style='text-algine:center;'>Zarządzaj Pomieszczeniem</div>\n    </ion-label>\n    </ion-item>\n    </ion-content>\n\n    <ion-content [fullscreen]=\"true\" id=\"maproom3\">\n      <ion-img src='assets/map/room3.jpg' style='height:40%; margin-left:-3%; width:100%;'></ion-img>\n      <ion-item button>\n      <ion-label>\n      <div id='room1-temp' style='text-algine:center;'>Zarządzaj Pomieszczeniem</div>\n      </ion-label>\n      </ion-item>\n      </ion-content>\n\n      <ion-content [fullscreen]=\"true\" id=\"maproom4\">\n        <ion-img src='assets/map/room4.jpg' style='height:40%; margin-left:-3%; width:100%;'></ion-img>\n        <ion-item button>\n        <ion-label>\n        <div id='room1-temp' style='text-algine:center;'>Zarządzaj Pomieszczeniem</div>\n        </ion-label>\n        </ion-item>\n        </ion-content>\n\n        <ion-content [fullscreen]=\"true\" id=\"maproom5\">\n          <ion-img src='assets/map/room5.jpg' style='height:40%; margin-left:-3%; width:100%;'></ion-img>\n          <ion-item button>\n          <ion-label>\n          <div id='room1-temp' style='text-algine:center;'>Zarządzaj Pomieszczeniem</div>\n          </ion-label>\n          </ion-item>\n          </ion-content>\n\n          <ion-content [fullscreen]=\"true\" id=\"maproom6\">\n            <ion-img src='assets/map/room6.jpg' style='height:40%; margin-left:-3%; width:100%;'></ion-img>\n            <ion-item button>\n            <ion-label>\n            <div id='room1-temp' style='text-algine:center;'>Zarządzaj Pomieszczeniem</div>\n            </ion-label>\n            </ion-item>\n            </ion-content>\n            <ion-content [fullscreen]=\"true\" id=\"maproom7\">\n              <div  id=\"maproom7d\">\n              <ion-img src='assets/map/room7.jpg' style='height:100%; width:100%; margin-top:40%;'></ion-img>\n              <div id=\"maproom7-1\"></div>\n              <div id=\"maproom7-2\"></div>\n              </div>\n              </ion-content>\n      <ion-content [fullscreen]=\"true\" id=\"maproom71\">\n            <ion-img src='assets/map/room7-1.jpg' style='height:40%; margin-left:-3%; width:100%;'></ion-img>\n            <ion-item button>\n            <ion-label>\n            <div id='room1-temp' style='text-algine:center;'>Zarządzaj Pomieszczeniem</div>\n            </ion-label>\n            </ion-item>\n        </ion-content>\n        <ion-content [fullscreen]=\"true\" id=\"maproom72\">\n          <ion-img src='assets/map/room7-2.jpg' style='height:40%; margin-left:-3%; width:100%;'></ion-img>\n          <ion-item button>\n          <ion-label>\n          <div id='room1-temp' style='text-algine:center;'>Zarządzaj Pomieszczeniem</div>\n          </ion-label>\n          </ion-item>\n          </ion-content>\n");

/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n\n#con {\n  position: relative;\n}\n\n#room1 {\n  position: absolute;\n  width: 17%;\n  height: 11.5%;\n  bottom: 86.5%;\n  left: 15%;\n}\n\n#room2 {\n  position: absolute;\n  width: 50%;\n  height: 8%;\n  bottom: 90%;\n  left: 32%;\n}\n\n#room3 {\n  position: absolute;\n  width: 22%;\n  height: 18%;\n  bottom: 68%;\n  left: 26%;\n}\n\n#room4 {\n  position: absolute;\n  width: 32%;\n  height: 20%;\n  bottom: 66.5%;\n  left: 48.5%;\n}\n\n#room5 {\n  position: absolute;\n  width: 16%;\n  height: 21%;\n  bottom: 46.5%;\n  left: 26%;\n}\n\n#room6 {\n  position: absolute;\n  width: 40%;\n  height: 41%;\n  bottom: 26%;\n  left: 41%;\n}\n\n#room7 {\n  position: absolute;\n  width: 40%;\n  height: 20%;\n  bottom: 5%;\n  left: 41%;\n}\n\n#maproom1 {\n  display: none;\n}\n\n#maproom2 {\n  display: none;\n}\n\n#maproom3 {\n  display: none;\n}\n\n#maproom4 {\n  display: none;\n}\n\n#maproom5 {\n  display: none;\n}\n\n#maproom6 {\n  display: none;\n}\n\n#maproom7 {\n  display: none;\n}\n\n#maproom7d {\n  position: relative;\n}\n\n#maproom7-1 {\n  display: none;\n  position: absolute;\n  width: 39%;\n  height: 72%;\n  bottom: 10%;\n  left: 9%;\n}\n\n#maproom7-2 {\n  display: none;\n  position: absolute;\n  width: 42%;\n  height: 72%;\n  bottom: 10%;\n  left: 49%;\n}\n\n#maproom71 {\n  display: none;\n}\n\n#maproom72 {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L3NtYXJ0X2hvbWUvc3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUNHRjs7QUREQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ0lGOztBREZBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDS0Y7O0FESEE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNNRjs7QURKQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQ09GOztBRExBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDUUY7O0FETkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNTRjs7QUROQTtFQUNFLGFBQUE7QUNTRjs7QURQQTtFQUNFLGFBQUE7QUNVRjs7QURQQTtFQUNFLGFBQUE7QUNVRjs7QURQQTtFQUNFLGFBQUE7QUNVRjs7QURQQTtFQUNFLGFBQUE7QUNVRjs7QURQQTtFQUNFLGFBQUE7QUNVRjs7QURQQTtFQUNFLGFBQUE7QUNVRjs7QURSQTtFQUNFLGtCQUFBO0FDV0Y7O0FEVEE7RUFDSSxhQUFBO0VBQ0Ysa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FDWUY7O0FEVkE7RUFDRSxhQUFBO0VBQ0Ysa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDYUE7O0FEWEE7RUFDRSxhQUFBO0FDY0Y7O0FEWkE7RUFDRSxhQUFBO0FDZUYiLCJmaWxlIjoic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuI2NvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiNyb29tMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE3JTtcbiAgaGVpZ2h0OiAxMS41JTtcbiAgYm90dG9tOjg2LjUlO1xuICBsZWZ0OjE1JTtcbn1cbiNyb29tMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA4JTtcbiAgYm90dG9tOjkwJTtcbiAgbGVmdDozMiU7XG59XG4jcm9vbTMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMiU7XG4gIGhlaWdodDogMTglO1xuICBib3R0b206NjglO1xuICBsZWZ0OjI2JTtcbn1cbiNyb29tNCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMyJTtcbiAgaGVpZ2h0OiAyMCU7XG4gIGJvdHRvbTo2Ni41JTtcbiAgbGVmdDo0OC41JTtcbn1cbiNyb29tNSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE2JTtcbiAgaGVpZ2h0OiAyMSU7XG4gIGJvdHRvbTo0Ni41JTtcbiAgbGVmdDoyNiU7XG59XG4jcm9vbTYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogNDElO1xuICBib3R0b206MjYlO1xuICBsZWZ0OjQxJTtcbn1cbiNyb29tNyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiAyMCU7XG4gIGJvdHRvbTo1JTtcbiAgbGVmdDo0MSU7XG59XG5cbiNtYXByb29tMSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4jbWFwcm9vbTIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jbWFwcm9vbTMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jbWFwcm9vbTQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jbWFwcm9vbTUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jbWFwcm9vbTYge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jbWFwcm9vbTcge1xuICBkaXNwbGF5OiBub25lO1xufVxuI21hcHJvb203ZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiNtYXByb29tNy0xIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzOSU7XG4gIGhlaWdodDogNzIlO1xuICBib3R0b206MTAlO1xuICBsZWZ0OiA5JTtcbn1cbiNtYXByb29tNy0yIHtcbiAgZGlzcGxheTogbm9uZTtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbndpZHRoOiA0MiU7XG5oZWlnaHQ6IDcyJTtcbmJvdHRvbToxMCU7XG5sZWZ0OiA0OSU7XG59XG4jbWFwcm9vbTcxIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiNtYXByb29tNzIge1xuICBkaXNwbGF5OiBub25lO1xufVxuIiwiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4jY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jcm9vbTEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNyU7XG4gIGhlaWdodDogMTEuNSU7XG4gIGJvdHRvbTogODYuNSU7XG4gIGxlZnQ6IDE1JTtcbn1cblxuI3Jvb20yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDglO1xuICBib3R0b206IDkwJTtcbiAgbGVmdDogMzIlO1xufVxuXG4jcm9vbTMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMiU7XG4gIGhlaWdodDogMTglO1xuICBib3R0b206IDY4JTtcbiAgbGVmdDogMjYlO1xufVxuXG4jcm9vbTQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMiU7XG4gIGhlaWdodDogMjAlO1xuICBib3R0b206IDY2LjUlO1xuICBsZWZ0OiA0OC41JTtcbn1cblxuI3Jvb201IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTYlO1xuICBoZWlnaHQ6IDIxJTtcbiAgYm90dG9tOiA0Ni41JTtcbiAgbGVmdDogMjYlO1xufVxuXG4jcm9vbTYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogNDElO1xuICBib3R0b206IDI2JTtcbiAgbGVmdDogNDElO1xufVxuXG4jcm9vbTcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogMjAlO1xuICBib3R0b206IDUlO1xuICBsZWZ0OiA0MSU7XG59XG5cbiNtYXByb29tMSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNtYXByb29tMiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNtYXByb29tMyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNtYXByb29tNCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNtYXByb29tNSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNtYXByb29tNiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNtYXByb29tNyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNtYXByb29tN2Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNtYXByb29tNy0xIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzklO1xuICBoZWlnaHQ6IDcyJTtcbiAgYm90dG9tOiAxMCU7XG4gIGxlZnQ6IDklO1xufVxuXG4jbWFwcm9vbTctMiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDQyJTtcbiAgaGVpZ2h0OiA3MiU7XG4gIGJvdHRvbTogMTAlO1xuICBsZWZ0OiA0OSU7XG59XG5cbiNtYXByb29tNzEge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jbWFwcm9vbTcyIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Tab2Page = class Tab2Page {
    constructor() { }
};
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map