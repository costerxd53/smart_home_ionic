(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" id=\"header\">\n  <ion-toolbar>\n    <ion-title id=\"title\">\n      Logowanie\n    </ion-title>\n    <ion-buttons slot='primary' id=\"exitbt\">\n     <ion-button id='exitroom'>\n       <ion-icon slot='icon-only' name='close'></ion-icon>\n     </ion-button>\n   </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" id=\"loginpanel\">\n  <br><br><br>\n            <ion-item>\n              <ion-label position=\"stacked\">Login <ion-text color=\"danger\">*</ion-text></ion-label>\n              <ion-input required type=\"text\" id=\"login\" value=\"\"></ion-input>\n            </ion-item>\n            <br><br>\n            <ion-item>\n              <ion-label position=\"stacked\">Hasło <ion-text color=\"danger\">*</ion-text></ion-label>\n              <ion-input required type=\"password\" id=\"pass\" value=\"\"></ion-input>\n            </ion-item><br><br>\n<ion-button expand=\"full\" id=\"check_log\">Zaloguj</ion-button>\n\n <ion-img src=\"assets/img/smarthome.jpg\" style=\"width:100%; height:35%; object-fit: cover; position:absolute; bottom: 3%;\"></ion-img>\n</ion-content>\n\n\n<ion-content [fullscreen]=\"true\" id=\"dashboard\">\n  <ion-item id=\"contentv1\">\n<ion-label id=\"label\"><br><br>\nUrządzenia W Środku<br><br><br>\n</ion-label>\n</ion-item>\n<br><br><br><br><br><br><br>\n<ion-item id=\"contentv2\">\n  <ion-label id=\"label\"><br><br>\n    Urządzenia Na Zewnątrz<br><br><br>\n  </ion-label>\n</ion-item><br><br>\n<br><br>\n<br><br>\n <ion-img src=\"assets/img/home.jpg\" style=\"width:100%; height:100%; object-fit: cover; position:absolute; bottom: 5%;\"></ion-img>\n</ion-content>\n\n\n<ion-content [fullscreen]=\"true\" id=\"indoor\">\n  <ion-item id=\"contentv1v2\">\n<ion-label id=\"roomsinclick\"><br><br>\nPomieszczenia<br><br><br>\n</ion-label>\n</ion-item>\n<br><br><br><br><br><br><br>\n<ion-item routerLink=\"/tabs/tab2\" id=\"contentv2v2\">\n  <ion-label id=\"label\"><br><br>\n    Mapa Domu<br><br><br>\n  </ion-label>\n</ion-item><br><br>\n<br><br>\n<br><br>\n <ion-img src=\"assets/img/device.jpg\" style=\"width:100%; height:100%; object-fit: cover; position:absolute; bottom: 5%;\"></ion-img>\n</ion-content>\n\n\n<ion-content [fullscreen]=\"true\" id=\"roomsin\">\n  <ion-list id=\"room_list_in\">\n\n    </ion-list>\n</ion-content>\n\n<ion-content [fullscreen]=\"true\" id=\"room_show_in\">\n  <ion-list id=\"room_list_in\">\n\n    </ion-list>\n</ion-content>\n<div id=\"loadtab1\"></div>\n");

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: logvar, logvarinin, passinvar, Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logvar", function() { return logvar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logvarinin", function() { return logvarinin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passinvar", function() { return passinvar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");

var logvar = false;
var logvarinin = "";
var passinvar;
var script = document.createElement('script');
var active = "";
var onf = "";
var toswitchroom3light = 1;
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
var ip = "77.252.137.224:8690";
var redirect = "";
var redirectt = [];







let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);

function Alert(content) {
    const alert = document.createElement('ion-alert');
    alert.header = 'Uwaga';
    alert.subHeader = 'Wystąpił Błąd';
    alert.message = content;
    alert.buttons = ['Cancel'];
    document.body.appendChild(alert);
    return alert.present();
}
function after_load() {
    if (logvar == false) {
        redirect = window.location.href;
        redirectt = redirect.split("8100");
        redirect = redirectt[1];
        if (redirect != "/tabs/tab1") {
            window.location.href = "tabs/tab1";
        }
    }
    var login_check = document.getElementById("check_log");
    login_check.addEventListener("click", function () {
        var loginiz = document.getElementById("login").value;
        var passiz = document.getElementById("pass").value;
        var logini = loginiz;
        var passi = passiz;
        if (logini != "" && passi != "") {
            $.post("http://" + ip + "/smart_home/check_user.php", {
                login: logini,
                pass: passi
            }, function (data, status) {
                if (status != "success") {
                    Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
                }
                else {
                    if (data == "access") {
                        logvarinin = logini;
                        passinvar = passi;
                        logvar = true;
                        tabs();
                        document.getElementById("loginpanel").style.display = "none";
                        document.getElementById("dashboard").style.display = "block";
                        document.getElementById("title").innerHTML = "Dom";
                    }
                    else if (data == "deny") {
                        Alert("Login Lub Hasło Nie Poprawne");
                    }
                    else {
                        Alert("Wystąpił Błąd Serwera");
                    }
                }
            });
        }
        else {
            Alert("Pola nie mogą być puste");
        }
    });
    var indoor = document.getElementById("contentv1");
    indoor.addEventListener("click", function () {
        document.getElementById("dashboard").style.display = "none";
        document.getElementById("indoor").style.display = "block";
    });
    var map = document.getElementById("contentv2v2");
    map.addEventListener("click", function () {
        document.getElementById("indoor").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
        afterloadtab2();
    });
    function tabs() {
        if (logvar != true) {
            document.getElementById("tabsinnerhtml").innerHTML = "";
        }
        else {
            document.getElementById("tabsinnerhtml").innerHTML = '<ion-tab-button tab="tab1" selected="true" id="tab1to0"><ion-icon name="phone-portrait"></ion-icon><ion-label>Urządzenia</ion-label></ion-tab-button><ion-tab-button tab="tab2" id="tab2to0"><ion-icon name="map"></ion-icon><ion-label>Mapa Domu</ion-label></ion-tab-button><ion-tab-button tab="tab3"><ion-icon name="settings"></ion-icon><ion-label>Ustawienia</ion-label></ion-tab-button>';
            var tab1to0 = document.getElementById("tab1to0");
            tab1to0.addEventListener("click", function () {
                document.getElementById("dashboard").style.display = "block";
                document.getElementById("indoor").style.display = "none";
                document.getElementById("roomsin").style.display = "none";
                document.getElementById("room_show_in").style.display = "none";
                document.getElementById("loginpanel").style.display = "none";
                document.getElementById("room_list_in").style.display = "block";
                document.getElementById("exitbt").style.display = "none";
                document.getElementById("room_show_in").style.display = "none";
                document.getElementById("title").innerHTML = "Dom";
            });
            var tab2to0 = document.getElementById("tab2to0");
            tab2to0.addEventListener("click", function () {
                setTimeout(afterloadtab2, 100);
            });
        }
    }
    tabs();
    var roomsinclick = document.getElementById("roomsinclick");
    roomsinclick.addEventListener("click", function () {
        function roomsclickstatic() {
            document.getElementById("dashboard").style.display = "none";
            document.getElementById("indoor").style.display = "none";
            document.getElementById("roomsin").style.display = "block";
            document.getElementById("title").innerHTML = "Pomieszczenia";
            if (typeof logvarinin == "undefined" || logvarinin == null || typeof passinvar == "undefined" || passinvar == null || typeof logvar == "undefined" || logvar == null) {
                Alert("Zaloguj Się");
            }
            else {
                $.post("http://" + ip + "/smart_home/room_list.php", {
                    login: logvarinin,
                    pass: passinvar
                }, function (data, status) {
                    if (status != "success") {
                        Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
                    }
                    else {
                        if (data == "deny") {
                            Alert("Błąd" + logvar);
                        }
                        var data = data.split("access");
                        var data = data[1];
                        if (data != "ERROR" && data != "ERROR ACCESS" && data != "deny") {
                            if (data == "NO DEVICE")
                                Alert("Brak Urządzeń");
                            if (data != "NO ROOMS") {
                                document.getElementById("room_list_in").innerHTML = data;
                                function loadingroom1dev() {
                                    $.post("http://" + ip + "/smart_home/device/192.168.0.102.php", {
                                        login: logvarinin,
                                        pass: passinvar,
                                        sensor: "temp"
                                    }, function (data, status) {
                                        if (status != "success") {
                                            Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
                                        }
                                        else {
                                            data = data.split("access");
                                            data = data[1];
                                            if (active == "room1") {
                                                document.getElementById("room1-temp").innerHTML = data + "°C";
                                            }
                                        }
                                    });
                                    $.post("http://" + ip + "/smart_home/device/192.168.0.102.php", {
                                        login: logvarinin,
                                        pass: passinvar,
                                        sensor: "press"
                                    }, function (data, status) {
                                        if (status != "success") {
                                            Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
                                        }
                                        else {
                                            data = data.split("access");
                                            data = data[1];
                                            if (active == "room1") {
                                                document.getElementById("room1-prees").innerHTML = data + " hPa";
                                                if (active == "room1") {
                                                    setTimeout(loadingroom1dev, 1000);
                                                }
                                            }
                                        }
                                    });
                                }
                                var roomlist1 = document.getElementById("room-list-1");
                                roomlist1.addEventListener("click", function () {
                                    active = "room1";
                                    $.post("http://" + ip + "/smart_home/show_room.php", {
                                        login: logvarinin,
                                        pass: passinvar,
                                        idpo: "1"
                                    }, function (data, status) {
                                        if (status != "success") {
                                            Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
                                        }
                                        else {
                                            data = data.split("access");
                                            data = data[1];
                                            document.getElementById("roomsin").style.display = "none";
                                            document.getElementById("room_list_in").style.display = "none";
                                            document.getElementById("exitbt").style.display = "block";
                                            document.getElementById("room_show_in").innerHTML = data;
                                            document.getElementById("room_show_in").style.display = "block";
                                            document.getElementById("title").innerHTML = "Salon";
                                            document.getElementById("room1-temp").innerHTML = '<ion-img src="assets/loading.gif" style="width:20px; height:20px;"></ion-img>';
                                            document.getElementById("room1-prees").innerHTML = '<ion-img src="assets/loading.gif" style="width:20px; height:20px;"></ion-img>';
                                            $.post("http://" + ip + "/smart_home/device/192.168.0.102.php", {
                                                login: logvarinin,
                                                pass: passinvar,
                                                sensor: "temp"
                                            }, function (data, status) {
                                                if (status != "success") {
                                                    Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
                                                }
                                                else {
                                                    data = data.split("access");
                                                    data = data[1];
                                                    if (active == "room1") {
                                                        document.getElementById("room1-temp").innerHTML = data + "°C";
                                                    }
                                                }
                                            });
                                            $.post("http://" + ip + "/smart_home/device/192.168.0.102.php", {
                                                login: logvarinin,
                                                pass: passinvar,
                                                sensor: "press"
                                            }, function (data, status) {
                                                if (status != "success") {
                                                    Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
                                                }
                                                else {
                                                    data = data.split("access");
                                                    data = data[1];
                                                    if (active == "room1") {
                                                        document.getElementById("room1-prees").innerHTML = data + " hPa";
                                                        loadingroom1dev();
                                                    }
                                                }
                                            });
                                            var exitroom = document.getElementById("exitroom");
                                            exitroom.addEventListener("click", function () {
                                                document.getElementById("loginpanel").style.display = "none";
                                                document.getElementById("room_list_in").style.display = "block";
                                                document.getElementById("roomsin").style.display = "block";
                                                document.getElementById("exitbt").style.display = "none";
                                                document.getElementById("room_show_in").style.display = "none";
                                                document.getElementById("title").innerHTML = "Pomieszczenia";
                                                active = "roomlist";
                                            });
                                        }
                                    });
                                });
                                var roomlist3 = document.getElementById("room-list-3");
                                roomlist3.addEventListener("click", function () {
                                    $.post("http://" + ip + "/smart_home/show_room.php", {
                                        login: logvarinin,
                                        pass: passinvar,
                                        idpo: "3"
                                    }, function (data, status) {
                                        if (status != "success") {
                                            Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
                                        }
                                        else {
                                            active = "room3";
                                            data = data.split("access");
                                            data = data[1];
                                            document.getElementById("roomsin").style.display = "none";
                                            document.getElementById("room_list_in").style.display = "none";
                                            document.getElementById("exitbt").style.display = "block";
                                            document.getElementById("room_show_in").innerHTML = data;
                                            document.getElementById("room_show_in").style.display = "block";
                                            document.getElementById("title").innerHTML = "Pokój Macieja";
                                            toswitchroom3light = 1;
                                            function refresedlight1(data) {
                                                if (active == "room3") {
                                                    $.post("http://" + ip + "/smart_home/device/192.168.0.103-check.php", {
                                                        login: logvarinin,
                                                        pass: passinvar,
                                                        devid: "1"
                                                    }, function (data, status) {
                                                        if (status != "success") {
                                                            Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
                                                        }
                                                        else {
                                                            if (data == "ERROR") {
                                                                Alert("Wystąpił Błąd");
                                                            }
                                                            else {
                                                                data = data.split("access");
                                                                data = data[1];
                                                                if (toswitchroom3light == 1) {
                                                                    if (data == "on") {
                                                                        document.getElementById("switchlight3").innerHTML = '<ion-toggle color="primary" id="room3-light-3" value="3" role="checkbox" checked="true" aria-checked="true" aria-labelledby="ion-tg-0-lbl" class="ion-color ion-color-primary md in-item interactive hydrated toggle-checked">input type="hidden" class="aux-input" name="ion-tg-0" value="3"&gt;</ion-toggle>';
                                                                        onf = "0";
                                                                    }
                                                                    if (data == "off") {
                                                                        document.getElementById("switchlight3").innerHTML = '<ion-toggle color="primary" id="room3-light-3" value="3" role="checkbox" checked="false" aria-checked="false" aria-labelledby="ion-tg-0-lbl" class="ion-color ion-color-primary md in-item interactive hydrated toggle">input type="hidden" class="aux-input" name="ion-tg-0" value="3"&gt;</ion-toggle>';
                                                                        onf = "1";
                                                                    }
                                                                }
                                                                switchlight3();
                                                            }
                                                        }
                                                    });
                                                    setTimeout(refresedlight1, 6000);
                                                }
                                            }
                                            function switchlight3() {
                                                var lightm = document.getElementById("room3-light-3");
                                                lightm.addEventListener("click", function () {
                                                    toswitchroom3light = 0;
                                                    $.post("http://" + ip + "/smart_home/device/192.168.0.103-switch.php", {
                                                        login: logvarinin,
                                                        pass: passinvar,
                                                        devid: "1",
                                                        onf: onf
                                                    }, function (data, status) {
                                                        if (status != "success") {
                                                            Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
                                                        }
                                                        else {
                                                            data = data.split("access");
                                                            data = data[1];
                                                            if (data == "ERROR") {
                                                                Alert("Wystąpił Błąd1" + data);
                                                            }
                                                            else {
                                                                if (data != "OK-off" && data != "OK-on") {
                                                                    Alert("Wystąpił Błąd2" + data);
                                                                }
                                                                else {
                                                                    if (data == "OK-off") {
                                                                        setTimeout(function () { document.getElementById("switchlight3").innerHTML = '<ion-toggle color="primary" id="room3-light-3" value="3" role="checkbox" checked="false" aria-checked="false" aria-labelledby="ion-tg-0-lbl" class="ion-color ion-color-primary md in-item interactive hydrated toggle">input type="hidden" class="aux-input" name="ion-tg-0" value="3"&gt;</ion-toggle>'; }, 200);
                                                                        onf = "1";
                                                                    }
                                                                    if (data == "OK-on") {
                                                                        setTimeout(function () { document.getElementById("switchlight3").innerHTML = '<ion-toggle color="primary" id="room3-light-3" value="3" role="checkbox" checked="true" aria-checked="true" aria-labelledby="ion-tg-0-lbl" class="ion-color ion-color-primary md in-item interactive hydrated toggle-checked">input type="hidden" class="aux-input" name="ion-tg-0" value="3"&gt;</ion-toggle>'; }, 200);
                                                                        onf = "0";
                                                                    }
                                                                    toswitchroom3light = 1;
                                                                }
                                                            }
                                                        }
                                                    });
                                                });
                                            }
                                            document.getElementById("switchlight3").innerHTML = '<ion-img src="assets/loading.gif" style="width:20px; height:20px;"></ion-img>';
                                            refresedlight1(data);
                                            var exitroom = document.getElementById("exitroom");
                                            exitroom.addEventListener("click", function () {
                                                document.getElementById("loginpanel").style.display = "none";
                                                document.getElementById("room_list_in").style.display = "block";
                                                document.getElementById("roomsin").style.display = "block";
                                                document.getElementById("exitbt").style.display = "none";
                                                document.getElementById("room_show_in").style.display = "none";
                                                document.getElementById("title").innerHTML = "Pomieszczenia";
                                            });
                                        }
                                    });
                                });
                                var roomlist4 = document.getElementById("room-list-4");
                                roomlist4.addEventListener("click", function () {
                                    $.post("http://" + ip + "/smart_home/show_room.php", {
                                        login: logvarinin,
                                        pass: passinvar,
                                        idpo: "4"
                                    }, function (data, status) {
                                        if (status != "success") {
                                            Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
                                        }
                                        else {
                                            data = data.split("access");
                                            data = data[1];
                                            document.getElementById("roomsin").style.display = "none";
                                            document.getElementById("room_list_in").style.display = "none";
                                            document.getElementById("exitbt").style.display = "block";
                                            document.getElementById("room_show_in").innerHTML = data;
                                            document.getElementById("room_show_in").style.display = "block";
                                            document.getElementById("title").innerHTML = "Kuchnia";
                                            var exitroom = document.getElementById("exitroom");
                                            exitroom.addEventListener("click", function () {
                                                document.getElementById("loginpanel").style.display = "none";
                                                document.getElementById("room_list_in").style.display = "block";
                                                document.getElementById("roomsin").style.display = "block";
                                                document.getElementById("exitbt").style.display = "none";
                                                document.getElementById("room_show_in").style.display = "none";
                                                document.getElementById("title").innerHTML = "Pomieszczenia";
                                                active = "room4";
                                            });
                                        }
                                    });
                                });
                                var roomlist5 = document.getElementById("room-list-5");
                                roomlist5.addEventListener("click", function () {
                                    $.post("http://" + ip + "/smart_home/show_room.php", {
                                        login: logvarinin,
                                        pass: passinvar,
                                        idpo: "5"
                                    }, function (data, status) {
                                        if (status != "success") {
                                            Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
                                        }
                                        else {
                                            data = data.split("access");
                                            data = data[1];
                                            document.getElementById("roomsin").style.display = "none";
                                            document.getElementById("room_list_in").style.display = "none";
                                            document.getElementById("exitbt").style.display = "block";
                                            document.getElementById("room_show_in").innerHTML = data;
                                            document.getElementById("room_show_in").style.display = "block";
                                            document.getElementById("title").innerHTML = "Korytarz";
                                            var exitroom = document.getElementById("exitroom");
                                            exitroom.addEventListener("click", function () {
                                                document.getElementById("loginpanel").style.display = "none";
                                                document.getElementById("room_list_in").style.display = "block";
                                                document.getElementById("roomsin").style.display = "block";
                                                document.getElementById("exitbt").style.display = "none";
                                                document.getElementById("room_show_in").style.display = "none";
                                                document.getElementById("title").innerHTML = "Pomieszczenia";
                                                active = "room5";
                                            });
                                        }
                                    });
                                });
                                var roomlist6 = document.getElementById("room-list-6");
                                roomlist6.addEventListener("click", function () {
                                    $.post("http://" + ip + "/smart_home/show_room.php", {
                                        login: logvarinin,
                                        pass: passinvar,
                                        idpo: "6"
                                    }, function (data, status) {
                                        if (status != "success") {
                                            Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
                                        }
                                        else {
                                            data = data.split("access");
                                            data = data[1];
                                            document.getElementById("roomsin").style.display = "none";
                                            document.getElementById("room_list_in").style.display = "none";
                                            document.getElementById("exitbt").style.display = "block";
                                            document.getElementById("room_show_in").innerHTML = data;
                                            document.getElementById("room_show_in").style.display = "block";
                                            document.getElementById("title").innerHTML = "Łazienka";
                                            var exitroom = document.getElementById("exitroom");
                                            exitroom.addEventListener("click", function () {
                                                document.getElementById("loginpanel").style.display = "none";
                                                document.getElementById("room_list_in").style.display = "block";
                                                document.getElementById("roomsin").style.display = "block";
                                                document.getElementById("exitbt").style.display = "none";
                                                document.getElementById("room_show_in").style.display = "none";
                                                document.getElementById("title").innerHTML = "Pomieszczenia";
                                                active = "room6";
                                            });
                                        }
                                    });
                                });
                                var roomlist7 = document.getElementById("room-list-7");
                                roomlist7.addEventListener("click", function () {
                                    $.post("http://" + ip + "/smart_home/show_room.php", {
                                        login: logvarinin,
                                        pass: passinvar,
                                        idpo: "7"
                                    }, function (data, status) {
                                        if (status != "success") {
                                            Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
                                        }
                                        else {
                                            data = data.split("access");
                                            data = data[1];
                                            document.getElementById("roomsin").style.display = "none";
                                            document.getElementById("room_list_in").style.display = "none";
                                            document.getElementById("exitbt").style.display = "block";
                                            document.getElementById("room_show_in").innerHTML = data;
                                            document.getElementById("room_show_in").style.display = "block";
                                            document.getElementById("title").innerHTML = "Przedpokój";
                                            var exitroom = document.getElementById("exitroom");
                                            exitroom.addEventListener("click", function () {
                                                document.getElementById("loginpanel").style.display = "none";
                                                document.getElementById("room_list_in").style.display = "block";
                                                document.getElementById("roomsin").style.display = "block";
                                                document.getElementById("exitbt").style.display = "none";
                                                document.getElementById("room_show_in").style.display = "none";
                                                document.getElementById("title").innerHTML = "Pomieszczenia";
                                                active = "room7";
                                            });
                                        }
                                    });
                                });
                                var roomlist8 = document.getElementById("room-list-8");
                                roomlist8.addEventListener("click", function () {
                                    $.post("http://" + ip + "/smart_home/show_room.php", {
                                        login: logvarinin,
                                        pass: passinvar,
                                        idpo: "8"
                                    }, function (data, status) {
                                        if (status != "success") {
                                            Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
                                        }
                                        else {
                                            data = data.split("access");
                                            data = data[1];
                                            document.getElementById("roomsin").style.display = "none";
                                            document.getElementById("room_list_in").style.display = "none";
                                            document.getElementById("exitbt").style.display = "block";
                                            document.getElementById("room_show_in").innerHTML = data;
                                            document.getElementById("room_show_in").style.display = "block";
                                            document.getElementById("title").innerHTML = "Pokój Beaty";
                                            var exitroom = document.getElementById("exitroom");
                                            exitroom.addEventListener("click", function () {
                                                document.getElementById("loginpanel").style.display = "none";
                                                document.getElementById("room_list_in").style.display = "block";
                                                document.getElementById("roomsin").style.display = "block";
                                                document.getElementById("exitbt").style.display = "none";
                                                document.getElementById("room_show_in").style.display = "none";
                                                document.getElementById("title").innerHTML = "Pomieszczenia";
                                                active = "room8";
                                            });
                                        }
                                    });
                                });
                                var roomlist9 = document.getElementById("room-list-9");
                                roomlist9.addEventListener("click", function () {
                                    $.post("http://" + ip + "/smart_home/show_room.php", {
                                        login: logvarinin,
                                        pass: passinvar,
                                        idpo: "9"
                                    }, function (data, status) {
                                        if (status != "success") {
                                            Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
                                        }
                                        else {
                                            data = data.split("access");
                                            data = data[1];
                                            document.getElementById("roomsin").style.display = "none";
                                            document.getElementById("room_list_in").style.display = "none";
                                            document.getElementById("exitbt").style.display = "block";
                                            document.getElementById("room_show_in").innerHTML = data;
                                            document.getElementById("room_show_in").style.display = "block";
                                            document.getElementById("title").innerHTML = "Spiżarnia";
                                            var exitroom = document.getElementById("exitroom");
                                            exitroom.addEventListener("click", function () {
                                                document.getElementById("loginpanel").style.display = "none";
                                                document.getElementById("room_list_in").style.display = "block";
                                                document.getElementById("roomsin").style.display = "block";
                                                document.getElementById("exitbt").style.display = "none";
                                                document.getElementById("room_show_in").style.display = "none";
                                                document.getElementById("title").innerHTML = "Pomieszczenia";
                                                active = "room9";
                                            });
                                        }
                                    });
                                });
                            }
                            else {
                                Alert("Brak Pomieszczeń");
                            }
                        }
                        else {
                            Alert("Spróbuj Ponownie Później");
                        }
                    }
                });
            }
        }
        roomsclickstatic();
    });
}
window.onload = after_load;
function afterloadtab2() {
    function closerooms() {
        var toolbar2 = document.getElementById("toolbar2");
        toolbar2.addEventListener("click", function () {
            toolbar2.innerHTML = '<ion-title>Mapa Domu</ion-title>';
            document.getElementById("maproom1").style.display = "none";
            document.getElementById("maproom2").style.display = "none";
            document.getElementById("maproom3").style.display = "none";
            document.getElementById("maproom4").style.display = "none";
            document.getElementById("maproom5").style.display = "none";
            document.getElementById("maproom6").style.display = "none";
            document.getElementById("maproom7").style.display = "none";
            document.getElementById("maproom71").style.display = "none";
            document.getElementById("maproom72").style.display = "none";
            document.getElementById("maproom7-1").style.display = "none";
            document.getElementById("maproom7-2").style.display = "none";
            document.getElementById("mapmain").style.display = "block";
        });
    }
    var tab2closeroom = document.getElementById("tab-button-tab2");
    tab2closeroom.addEventListener("click", function () {
        var toolbar2 = document.getElementById("toolbar2");
        toolbar2.innerHTML = '<ion-title>Mapa Domu</ion-title>';
        document.getElementById("maproom1").style.display = "none";
        document.getElementById("maproom2").style.display = "none";
        document.getElementById("maproom3").style.display = "none";
        document.getElementById("maproom4").style.display = "none";
        document.getElementById("maproom5").style.display = "none";
        document.getElementById("maproom6").style.display = "none";
        document.getElementById("maproom7").style.display = "none";
        document.getElementById("maproom71").style.display = "none";
        document.getElementById("maproom72").style.display = "none";
        document.getElementById("maproom7-1").style.display = "none";
        document.getElementById("maproom7-2").style.display = "none";
        document.getElementById("mapmain").style.display = "block";
    });
    var room1 = document.getElementById("room1");
    room1.addEventListener("click", function () {
        closerooms();
        ;
        document.getElementById("toolbar2").innerHTML = '<ion-title>Korytarz</ion-title><ion-buttons slot="primary"><ion-button id="closeroom"><ion-icon slot="icon-only" name="close"></ion-icon></ion-button></ion-buttons>';
        document.getElementById("mapmain").style.display = "none";
        document.getElementById("maproom1").style.display = "block";
    });
    var room2 = document.getElementById("room2");
    room2.addEventListener("click", function () {
        closerooms();
        ;
        document.getElementById("toolbar2").innerHTML = '<ion-title>Spiżarnia</ion-title><ion-buttons slot="primary"><ion-button id="closeroom"><ion-icon slot="icon-only" name="close"></ion-icon></ion-button></ion-buttons>';
        document.getElementById("mapmain").style.display = "none";
        document.getElementById("maproom2").style.display = "block";
    });
    var room3 = document.getElementById("room3");
    room3.addEventListener("click", function () {
        closerooms();
        ;
        document.getElementById("toolbar2").innerHTML = '<ion-title>Przedpokój</ion-title><ion-buttons slot="primary"><ion-button id="closeroom"><ion-icon slot="icon-only" name="close"></ion-icon></ion-button></ion-buttons>';
        document.getElementById("mapmain").style.display = "none";
        document.getElementById("maproom3").style.display = "block";
    });
    var room4 = document.getElementById("room4");
    room4.addEventListener("click", function () {
        closerooms();
        ;
        document.getElementById("toolbar2").innerHTML = '<ion-title>Kuchnia</ion-title><ion-buttons slot="primary"><ion-button id="closeroom"><ion-icon slot="icon-only" name="close"></ion-icon></ion-button></ion-buttons>';
        document.getElementById("mapmain").style.display = "none";
        document.getElementById("maproom4").style.display = "block";
    });
    var room5 = document.getElementById("room5");
    room5.addEventListener("click", function () {
        closerooms();
        ;
        document.getElementById("toolbar2").innerHTML = '<ion-title>Łazienka</ion-title><ion-buttons slot="primary"><ion-button id="closeroom"><ion-icon slot="icon-only" name="close"></ion-icon></ion-button></ion-buttons>';
        document.getElementById("mapmain").style.display = "none";
        document.getElementById("maproom5").style.display = "block";
    });
    var room6 = document.getElementById("room6");
    room6.addEventListener("click", function () {
        closerooms();
        ;
        document.getElementById("toolbar2").innerHTML = '<ion-title>Salon</ion-title><ion-buttons slot="primary"><ion-button id="closeroom"><ion-icon slot="icon-only" name="close"></ion-icon></ion-button></ion-buttons>';
        document.getElementById("mapmain").style.display = "none";
        document.getElementById("maproom6").style.display = "block";
    });
    var room7 = document.getElementById("room7");
    room7.addEventListener("click", function () {
        closerooms();
        ;
        document.getElementById("toolbar2").innerHTML = '<ion-title>Pokoje</ion-title><ion-buttons slot="primary"><ion-button id="closeroom"><ion-icon slot="icon-only" name="close"></ion-icon></ion-button></ion-buttons>';
        document.getElementById("mapmain").style.display = "none";
        document.getElementById("maproom7").style.display = "block";
        document.getElementById("maproom7-1").style.display = "block";
        document.getElementById("maproom7-2").style.display = "block";
    });
    var room71 = document.getElementById("maproom7-1");
    room71.addEventListener("click", function () {
        closerooms();
        ;
        document.getElementById("toolbar2").innerHTML = '<ion-title>Pokój Macieja</ion-title><ion-buttons slot="primary"><ion-button id="closeroom"><ion-icon slot="icon-only" name="close"></ion-icon></ion-button></ion-buttons>';
        document.getElementById("mapmain").style.display = "none";
        document.getElementById("maproom7").style.display = "none";
        document.getElementById("maproom7-1").style.display = "none";
        document.getElementById("maproom7-2").style.display = "none";
        document.getElementById("maproom71").style.display = "block";
    });
    var room72 = document.getElementById("maproom7-2");
    room72.addEventListener("click", function () {
        closerooms();
        ;
        document.getElementById("toolbar2").innerHTML = '<ion-title>Pokój Beaty</ion-title><ion-buttons slot="primary"><ion-button id="closeroom"><ion-icon slot="icon-only" name="close"></ion-icon></ion-button></ion-buttons>';
        document.getElementById("mapmain").style.display = "none";
        document.getElementById("maproom7").style.display = "none";
        document.getElementById("maproom7-1").style.display = "none";
        document.getElementById("maproom7-2").style.display = "none";
        document.getElementById("maproom72").style.display = "block";
    });
}


/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n\n@media (prefers-color-scheme: light) {\n  ion-toolbar {\n    --background: white;\n    color: black;\n  }\n\n  .verticalScrollContainer {\n    background: white;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  ion-toolbar {\n    --background: black;\n    color: white;\n  }\n\n  .verticalScrollContainer {\n    background: black;\n  }\n}\n\nion-toolbar {\n  --background: var(--color-toolbar-background);\n  color: var(--color-toolbar-text);\n}\n\n.verticalScrollContainer {\n  background: var(--color-toolbar-background);\n}\n\n@media (prefers-color-scheme: light) {\n  :root {\n    --color-toolbar-background: white;\n    --color-toolbar-text: black;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --color-toolbar-background: black;\n    --color-toolbar-text: white;\n  }\n}\n\n#dashboard {\n  display: none;\n}\n\n#loginpanel {\n  display: block;\n}\n\n#label {\n  text-align: center;\n}\n\n#contentv1 {\n  margin-top: 40%;\n}\n\n#contentv1v2 {\n  margin-top: 40%;\n}\n\n#indoor {\n  display: none;\n}\n\n#roomsin {\n  display: none;\n}\n\n#roomsinclick {\n  text-align: center;\n}\n\n#room_show_in {\n  display: none;\n}\n\n#exitbt {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi92YXIvd3d3L3NtYXJ0X2hvbWUvc3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UseUJBQUE7QUNGRjs7QURJQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxZQUFBO0VDREY7O0VER0E7SUFDRSxpQkFBQTtFQ0FGO0FBQ0Y7O0FER0E7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsWUFBQTtFQ0RGOztFREdBO0lBQ0UsaUJBQUE7RUNBRjtBQUNGOztBREVBO0VBQ0UsNkNBQUE7RUFDQSxnQ0FBQTtBQ0FGOztBREVBO0VBQ0UsMkNBQUE7QUNDRjs7QURDQTtFQUNFO0lBQ0UsaUNBQUE7SUFDQSwyQkFBQTtFQ0VGO0FBQ0Y7O0FEQ0E7RUFDRTtJQUNFLGlDQUFBO0lBQ0EsMkJBQUE7RUNDRjtBQUNGOztBRENBO0VBQ0UsYUFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7QUNHRjs7QUREQTtFQUNFLGVBQUE7QUNJRjs7QURGQTtFQUNFLGVBQUE7QUNLRjs7QURIQTtFQUNFLGFBQUE7QUNNRjs7QURKQTtFQUNFLGFBQUE7QUNPRjs7QURMQTtFQUNFLGtCQUFBO0FDUUY7O0FETkE7RUFDRSxhQUFBO0FDU0Y7O0FEUEE7RUFDRSxhQUFBO0FDVUYiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIC52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgfVxufVxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXRvb2xiYXItYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10b29sYmFyLXRleHQpO1xufVxuLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItdG9vbGJhci1iYWNrZ3JvdW5kKTtcbn1cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KSB7XG4gIDpyb290IHtcbiAgICAtLWNvbG9yLXRvb2xiYXItYmFja2dyb3VuZDogd2hpdGU7XG4gICAgLS1jb2xvci10b29sYmFyLXRleHQ6IGJsYWNrO1xuICB9XG59XG5cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgOnJvb3Qge1xuICAgIC0tY29sb3ItdG9vbGJhci1iYWNrZ3JvdW5kOiBibGFjaztcbiAgICAtLWNvbG9yLXRvb2xiYXItdGV4dDogd2hpdGU7XG4gIH1cbn1cbiNkYXNoYm9hcmQge1xuICBkaXNwbGF5OiBub25lO1xufVxuI2xvZ2lucGFuZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiNsYWJlbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNjb250ZW50djEge1xuICBtYXJnaW4tdG9wOjQwJTtcbn1cbiNjb250ZW50djF2MiB7XG4gIG1hcmdpbi10b3A6NDAlO1xufVxuI2luZG9vciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4jcm9vbXNpbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4jcm9vbXNpbmNsaWNrIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI3Jvb21fc2hvd19pbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4jZXhpdGJ0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiIsImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgLnZlcnRpY2FsU2Nyb2xsQ29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgfVxufVxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICBpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAudmVydGljYWxTY3JvbGxDb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICB9XG59XG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3ItdG9vbGJhci1iYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRvb2xiYXItdGV4dCk7XG59XG5cbi52ZXJ0aWNhbFNjcm9sbENvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXRvb2xiYXItYmFja2dyb3VuZCk7XG59XG5cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGxpZ2h0KSB7XG4gIDpyb290IHtcbiAgICAtLWNvbG9yLXRvb2xiYXItYmFja2dyb3VuZDogd2hpdGU7XG4gICAgLS1jb2xvci10b29sYmFyLXRleHQ6IGJsYWNrO1xuICB9XG59XG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIDpyb290IHtcbiAgICAtLWNvbG9yLXRvb2xiYXItYmFja2dyb3VuZDogYmxhY2s7XG4gICAgLS1jb2xvci10b29sYmFyLXRleHQ6IHdoaXRlO1xuICB9XG59XG4jZGFzaGJvYXJkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2xvZ2lucGFuZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuI2xhYmVsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jY29udGVudHYxIHtcbiAgbWFyZ2luLXRvcDogNDAlO1xufVxuXG4jY29udGVudHYxdjIge1xuICBtYXJnaW4tdG9wOiA0MCU7XG59XG5cbiNpbmRvb3Ige1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jcm9vbXNpbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNyb29tc2luY2xpY2sge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNyb29tX3Nob3dfaW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jZXhpdGJ0IHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Tab1Page = class Tab1Page {
    constructor() { }
};
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map