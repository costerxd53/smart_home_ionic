export var logvar = false;
export var logvarinin = "";
export var passinvar;
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
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}

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


if(logvar == false) {
  redirect = window.location.href;
  redirectt = redirect.split("8100");
  redirect  = redirectt[1];
  if(redirect != "/tabs/tab1")  {
    window.location.href = "tabs/tab1";
  }

}
  var login_check = document.getElementById("check_log");
  login_check.addEventListener("click", function(){
      var loginiz = (<HTMLInputElement>document.getElementById("login")).value;
      var passiz = (<HTMLInputElement>document.getElementById("pass")).value;

      var logini = loginiz;
      var passi = passiz;
      if(logini != "" && passi != "") {
      $.post("http://"+ip+"/smart_home/check_user.php",
      {
        login: logini,
        pass: passi
      },
      function(data,status){
        if(status != "success") {
          Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
        }
        else  {
          if(data == "access")  {
            logvarinin = logini;
            passinvar = passi;
            logvar = true;
            tabs();
            document.getElementById("loginpanel").style.display = "none";
            document.getElementById("dashboard").style.display = "block";
            document.getElementById("title").innerHTML = "Dom";
          } else if(data == "deny") {
            Alert("Login Lub Hasło Nie Poprawne");
          }
          else  {
              Alert("Wystąpił Błąd Serwera");
          }
        }
      });
    } else {
      Alert("Pola nie mogą być puste");
    }
  });
  var indoor = document.getElementById("contentv1");

  indoor.addEventListener("click", function(){
      document.getElementById("dashboard").style.display = "none";
        document.getElementById("indoor").style.display = "block";
  });

  var map = document.getElementById("contentv2v2");
  map.addEventListener("click", function(){

          document.getElementById("indoor").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    afterloadtab2();
  });
  function tabs() {
    if(logvar != true)  {
      document.getElementById("tabsinnerhtml").innerHTML= "";
    }
    else  {
      document.getElementById("tabsinnerhtml").innerHTML= '<ion-tab-button tab="tab1" selected="true" id="tab1to0"><ion-icon name="phone-portrait"></ion-icon><ion-label>Urządzenia</ion-label></ion-tab-button><ion-tab-button tab="tab2" id="tab2to0"><ion-icon name="map"></ion-icon><ion-label>Mapa Domu</ion-label></ion-tab-button><ion-tab-button tab="tab3"><ion-icon name="settings"></ion-icon><ion-label>Ustawienia</ion-label></ion-tab-button>';
      var tab1to0 = document.getElementById("tab1to0");
      tab1to0.addEventListener("click", function(){
        document.getElementById("dashboard").style.display = "block";
          document.getElementById("indoor").style.display = "none";
                document.getElementById("roomsin").style.display = "none";
                        document.getElementById("room_show_in").style.display = "none";
                        document.getElementById("loginpanel").style.display = "none";
                        document.getElementById("room_list_in").style.display = "block";
                        document.getElementById("exitbt").style.display = "none";
                        document.getElementById("room_show_in").style.display = "none";
                                document.getElementById("title").innerHTML ="Dom";

      });

      var tab2to0 = document.getElementById("tab2to0");
      tab2to0.addEventListener("click", function(){



         setTimeout(afterloadtab2, 100);

      });



    }

  }
  tabs();
  var roomsinclick = document.getElementById("roomsinclick");
  roomsinclick.addEventListener("click", function(){
    function roomsclickstatic() {
    document.getElementById("dashboard").style.display = "none";
      document.getElementById("indoor").style.display = "none";
      document.getElementById("roomsin").style.display = "block";
      document.getElementById("title").innerHTML ="Pomieszczenia";

      if( typeof logvarinin == "undefined" || logvarinin == null || typeof passinvar == "undefined" || passinvar == null || typeof logvar == "undefined" || logvar == null)  {
        Alert("Zaloguj Się");
      }
      else  {

        $.post("http://"+ip+"/smart_home/room_list.php",
        {
          login: logvarinin,
          pass: passinvar
        },
        function(data,status){
          if(status != "success") {
            Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
          }
          else  {
                if(data == "deny")  {
                  Alert("Błąd"+logvar);
                }
                  var data = data.split("access");
                  var data = data[1];
                  if(data != "ERROR" && data != "ERROR ACCESS" && data != "deny")  {
                    if(data == "NO DEVICE")  Alert("Brak Urządzeń");
                      if(data != "NO ROOMS")  {
                        document.getElementById("room_list_in").innerHTML = data;


                      function  loadingroom1dev() {
                        $.post("http://"+ip+"/smart_home/device/192.168.0.102.php",
                        {
                          login: logvarinin,
                          pass: passinvar,
                          sensor: "temp"
                        },
                              function(data,status){
                                if(status != "success") {
                                  Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
                                }
                                else  {
                                  data = data.split("access");
                                  data = data[1];
                                  if(active == "room1") {
                                      document.getElementById("room1-temp").innerHTML = data+"°C";
                                  }

                                }
                              }
                            );
                            $.post("http://"+ip+"/smart_home/device/192.168.0.102.php",
                            {
                              login: logvarinin,
                              pass: passinvar,
                              sensor: "press"
                            },
                                  function(data,status){
                                    if(status != "success") {
                                      Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
                                    }
                                    else  {
                                      data = data.split("access");
                                        data = data[1];
                                          if(active == "room1") {
                                            document.getElementById("room1-prees").innerHTML = data+" hPa";
                                            if(active == "room1") {
                                              setTimeout(loadingroom1dev, 1000);
                                            }
                                          }

                                    }
                                  }
                                );

                        }
                        var roomlist1 = document.getElementById("room-list-1");
                        roomlist1.addEventListener("click", function(){
                          active = "room1";
                          $.post("http://"+ip+"/smart_home/show_room.php",
                          {
                            login: logvarinin,
                            pass: passinvar,
                            idpo: "1"
                          },
                                function(data,status){
                                  if(status != "success") {
                                    Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
                                  }


                              else  {
                                  data = data.split("access");
                                  data = data[1];
                                  document.getElementById("roomsin").style.display = "none";
                                  document.getElementById("room_list_in").style.display = "none";
                                  document.getElementById("exitbt").style.display = "block";
                                  document.getElementById("room_show_in").innerHTML= data;
                                  document.getElementById("room_show_in").style.display = "block";
                                  document.getElementById("title").innerHTML = "Salon";
                                  document.getElementById("room1-temp").innerHTML = '<ion-img src="assets/loading.gif" style="width:20px; height:20px;"></ion-img>';
                                    document.getElementById("room1-prees").innerHTML = '<ion-img src="assets/loading.gif" style="width:20px; height:20px;"></ion-img>';
                                        $.post("http://"+ip+"/smart_home/device/192.168.0.102.php",
                                        {
                                          login: logvarinin,
                                          pass: passinvar,
                                          sensor: "temp"
                                        },
                                              function(data,status){
                                                if(status != "success") {
                                                  Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
                                                }
                                                else  {
                                                  data = data.split("access");
                                                  data = data[1];
                                                  if(active == "room1") {
                                                  document.getElementById("room1-temp").innerHTML = data+"°C";
                                                }
                                                }
                                              }
                                            );
                                            $.post("http://"+ip+"/smart_home/device/192.168.0.102.php",
                                            {
                                              login: logvarinin,
                                              pass: passinvar,
                                              sensor: "press"
                                            },
                                                  function(data,status){
                                                    if(status != "success") {
                                                      Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
                                                    }
                                                    else  {
                                                      data = data.split("access");
                                                        data = data[1];
                                                        if(active == "room1") {
                                                      document.getElementById("room1-prees").innerHTML = data+" hPa";
                                                        loadingroom1dev();
                                                    }
                                                    }
                                                  }
                                                );

                                      var exitroom = document.getElementById("exitroom");
                                      exitroom.addEventListener("click", function(){

                                                  document.getElementById("loginpanel").style.display = "none";
                                                  document.getElementById("room_list_in").style.display = "block";
                                                  document.getElementById("roomsin").style.display = "block";
                                                  document.getElementById("exitbt").style.display = "none";
                                                  document.getElementById("room_show_in").style.display = "none";
                                                  document.getElementById("title").innerHTML = "Pomieszczenia";
                                                  active = "roomlist";

                                                });

                                            }
                                }
                                )
                        });
                        var roomlist3 = document.getElementById("room-list-3");
                        roomlist3.addEventListener("click", function(){
                          $.post("http://"+ip+"/smart_home/show_room.php",
                          {
                            login: logvarinin,
                            pass: passinvar,
                            idpo: "3"
                          },
                                function(data,status){
                                  if(status != "success") {
                                    Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
                                  }


                              else  {
                                active = "room3";
                                  data = data.split("access");
                                  data = data[1];
                                  document.getElementById("roomsin").style.display = "none";
                                  document.getElementById("room_list_in").style.display = "none";
                                  document.getElementById("exitbt").style.display = "block";
                                  document.getElementById("room_show_in").innerHTML= data;
                                  document.getElementById("room_show_in").style.display = "block";
                                  document.getElementById("title").innerHTML = "Pokój Macieja";
                                        toswitchroom3light = 1;
                                        function refresedlight1(data)  {
                                          if(active == "room3") {


                                  $.post("http://"+ip+"/smart_home/device/192.168.0.103-check.php",
                                  {
                                    login: logvarinin,
                                    pass: passinvar,
                                    devid: "1"
                                  },
                                        function(data,status){
                                          if(status != "success") {
                                            Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
                                          }
                                          else  {
                                            if(data == "ERROR") {
                                                Alert("Wystąpił Błąd");
                                            }
                                            else  {
                                              data = data.split("access");
                                              data = data[1];
                                              if(toswitchroom3light == 1) {
                                                if(data == "on") {
                                                  document.getElementById("switchlight3").innerHTML = '<ion-toggle color="primary" id="room3-light-3" value="3" role="checkbox" checked="true" aria-checked="true" aria-labelledby="ion-tg-0-lbl" class="ion-color ion-color-primary md in-item interactive hydrated toggle-checked">input type="hidden" class="aux-input" name="ion-tg-0" value="3"&gt;</ion-toggle>';

                                                  onf = "0";
                                                }
                                                if(data == "off") {
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
                                            lightm.addEventListener("click", function(){
                                              toswitchroom3light = 0;
                                              $.post("http://"+ip+"/smart_home/device/192.168.0.103-switch.php",
                                              {
                                                login: logvarinin,
                                                pass: passinvar,
                                                devid: "1",
                                                onf: onf

                                              },
                                                    function(data,status){
                                                      if(status != "success") {
                                                        Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
                                                      }
                                                      else  {
                                                        data = data.split("access");
                                                        data = data[1];

                                                        if(data == "ERROR") {
                                                            Alert("Wystąpił Błąd1"+ data);
                                                        }
                                                        else  {
                                                            if(data != "OK-off" && data != "OK-on") {
                                                              Alert("Wystąpił Błąd2"+ data);
                                                            }
                                                            else  {
                                                              if(data == "OK-off")  {

                                                                setTimeout(function(){   document.getElementById("switchlight3").innerHTML = '<ion-toggle color="primary" id="room3-light-3" value="3" role="checkbox" checked="false" aria-checked="false" aria-labelledby="ion-tg-0-lbl" class="ion-color ion-color-primary md in-item interactive hydrated toggle">input type="hidden" class="aux-input" name="ion-tg-0" value="3"&gt;</ion-toggle>'; }, 200)
                                                                onf = "1";
                                                              }
                                                                if(data == "OK-on")  {
                                                                  setTimeout(function(){ document.getElementById("switchlight3").innerHTML = '<ion-toggle color="primary" id="room3-light-3" value="3" role="checkbox" checked="true" aria-checked="true" aria-labelledby="ion-tg-0-lbl" class="ion-color ion-color-primary md in-item interactive hydrated toggle-checked">input type="hidden" class="aux-input" name="ion-tg-0" value="3"&gt;</ion-toggle>'; }, 200)

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
                                      exitroom.addEventListener("click", function(){

                                                  document.getElementById("loginpanel").style.display = "none";
                                                  document.getElementById("room_list_in").style.display = "block";
                                                  document.getElementById("roomsin").style.display = "block";
                                                  document.getElementById("exitbt").style.display = "none";
                                                  document.getElementById("room_show_in").style.display = "none";
                                                  document.getElementById("title").innerHTML = "Pomieszczenia";

                                                });

                                            }
                                }
                                )
                        });
                        var roomlist4 = document.getElementById("room-list-4");
                        roomlist4.addEventListener("click", function(){
                          $.post("http://"+ip+"/smart_home/show_room.php",
                          {
                            login: logvarinin,
                            pass: passinvar,
                            idpo: "4"
                          },
                                function(data,status){
                                  if(status != "success") {
                                    Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
                                  }


                              else  {
                                  data = data.split("access");
                                  data = data[1];
                                  document.getElementById("roomsin").style.display = "none";
                                  document.getElementById("room_list_in").style.display = "none";
                                  document.getElementById("exitbt").style.display = "block";
                                  document.getElementById("room_show_in").innerHTML= data;
                                  document.getElementById("room_show_in").style.display = "block";
                                  document.getElementById("title").innerHTML = "Kuchnia";
                                      var exitroom = document.getElementById("exitroom");
                                      exitroom.addEventListener("click", function(){

                                                  document.getElementById("loginpanel").style.display = "none";
                                                  document.getElementById("room_list_in").style.display = "block";
                                                  document.getElementById("roomsin").style.display = "block";
                                                  document.getElementById("exitbt").style.display = "none";
                                                  document.getElementById("room_show_in").style.display = "none";
                                                  document.getElementById("title").innerHTML = "Pomieszczenia";
                                                  active = "room4";
                                                });

                                            }
                                }
                                )
                        });
                        var roomlist5 = document.getElementById("room-list-5");
                        roomlist5.addEventListener("click", function(){
                          $.post("http://"+ip+"/smart_home/show_room.php",
                          {
                            login: logvarinin,
                            pass: passinvar,
                            idpo: "5"
                          },
                                function(data,status){
                                  if(status != "success") {
                                    Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
                                  }


                              else  {
                                  data = data.split("access");
                                  data = data[1];
                                  document.getElementById("roomsin").style.display = "none";
                                  document.getElementById("room_list_in").style.display = "none";
                                  document.getElementById("exitbt").style.display = "block";
                                  document.getElementById("room_show_in").innerHTML= data;
                                  document.getElementById("room_show_in").style.display = "block";
                                  document.getElementById("title").innerHTML = "Korytarz";
                                      var exitroom = document.getElementById("exitroom");
                                      exitroom.addEventListener("click", function(){

                                                  document.getElementById("loginpanel").style.display = "none";
                                                  document.getElementById("room_list_in").style.display = "block";
                                                  document.getElementById("roomsin").style.display = "block";
                                                  document.getElementById("exitbt").style.display = "none";
                                                  document.getElementById("room_show_in").style.display = "none";
                                                  document.getElementById("title").innerHTML = "Pomieszczenia";
                                                  active = "room5";
                                                });

                                            }
                                }
                                )
                        });
                        var roomlist6 = document.getElementById("room-list-6");
                        roomlist6.addEventListener("click", function(){
                          $.post("http://"+ip+"/smart_home/show_room.php",
                          {
                            login: logvarinin,
                            pass: passinvar,
                            idpo: "6"
                          },
                                function(data,status){
                                  if(status != "success") {
                                    Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
                                  }


                              else  {
                                  data = data.split("access");
                                  data = data[1];
                                  document.getElementById("roomsin").style.display = "none";
                                  document.getElementById("room_list_in").style.display = "none";
                                  document.getElementById("exitbt").style.display = "block";
                                  document.getElementById("room_show_in").innerHTML= data;
                                  document.getElementById("room_show_in").style.display = "block";
                                  document.getElementById("title").innerHTML = "Łazienka";
                                      var exitroom = document.getElementById("exitroom");
                                      exitroom.addEventListener("click", function(){

                                                  document.getElementById("loginpanel").style.display = "none";
                                                  document.getElementById("room_list_in").style.display = "block";
                                                  document.getElementById("roomsin").style.display = "block";
                                                  document.getElementById("exitbt").style.display = "none";
                                                  document.getElementById("room_show_in").style.display = "none";
                                                  document.getElementById("title").innerHTML = "Pomieszczenia";
                                                  active = "room6";
                                                });

                                            }
                                }
                                )
                        });
                        var roomlist7 = document.getElementById("room-list-7");
                        roomlist7.addEventListener("click", function(){
                          $.post("http://"+ip+"/smart_home/show_room.php",
                          {
                            login: logvarinin,
                            pass: passinvar,
                            idpo: "7"
                          },
                                function(data,status){
                                  if(status != "success") {
                                    Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
                                  }


                              else  {
                                  data = data.split("access");
                                  data = data[1];
                                  document.getElementById("roomsin").style.display = "none";
                                  document.getElementById("room_list_in").style.display = "none";
                                  document.getElementById("exitbt").style.display = "block";
                                  document.getElementById("room_show_in").innerHTML= data;
                                  document.getElementById("room_show_in").style.display = "block";
                                  document.getElementById("title").innerHTML = "Przedpokój";
                                      var exitroom = document.getElementById("exitroom");
                                      exitroom.addEventListener("click", function(){

                                                  document.getElementById("loginpanel").style.display = "none";
                                                  document.getElementById("room_list_in").style.display = "block";
                                                  document.getElementById("roomsin").style.display = "block";
                                                  document.getElementById("exitbt").style.display = "none";
                                                  document.getElementById("room_show_in").style.display = "none";
                                                  document.getElementById("title").innerHTML = "Pomieszczenia";
                                                  active = "room7";
                                                });

                                            }
                                }
                                )
                        });
                        var roomlist8 = document.getElementById("room-list-8");
                        roomlist8.addEventListener("click", function(){
                          $.post("http://"+ip+"/smart_home/show_room.php",
                          {
                            login: logvarinin,
                            pass: passinvar,
                            idpo: "8"
                          },
                                function(data,status){
                                  if(status != "success") {
                                    Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
                                  }


                              else  {
                                  data = data.split("access");
                                  data = data[1];
                                  document.getElementById("roomsin").style.display = "none";
                                  document.getElementById("room_list_in").style.display = "none";
                                  document.getElementById("exitbt").style.display = "block";
                                  document.getElementById("room_show_in").innerHTML= data;
                                  document.getElementById("room_show_in").style.display = "block";
                                  document.getElementById("title").innerHTML = "Pokój Beaty";
                                      var exitroom = document.getElementById("exitroom");
                                      exitroom.addEventListener("click", function(){

                                                  document.getElementById("loginpanel").style.display = "none";
                                                  document.getElementById("room_list_in").style.display = "block";
                                                  document.getElementById("roomsin").style.display = "block";
                                                  document.getElementById("exitbt").style.display = "none";
                                                  document.getElementById("room_show_in").style.display = "none";
                                                  document.getElementById("title").innerHTML = "Pomieszczenia";
                                                  active = "room8";
                                                });

                                            }
                                }
                                )
                        });
                        var roomlist9 = document.getElementById("room-list-9");
                        roomlist9.addEventListener("click", function(){
                          $.post("http://"+ip+"/smart_home/show_room.php",
                          {
                            login: logvarinin,
                            pass: passinvar,
                            idpo: "9"
                          },
                                function(data,status){
                                  if(status != "success") {
                                    Alert("Wystąpił Błąd Serwera, Sprawdź Połączenie z Internetem");
                                  }


                              else  {
                                  data = data.split("access");
                                  data = data[1];
                                  document.getElementById("roomsin").style.display = "none";
                                  document.getElementById("room_list_in").style.display = "none";
                                  document.getElementById("exitbt").style.display = "block";
                                  document.getElementById("room_show_in").innerHTML= data;
                                  document.getElementById("room_show_in").style.display = "block";
                                  document.getElementById("title").innerHTML = "Spiżarnia";
                                      var exitroom = document.getElementById("exitroom");
                                      exitroom.addEventListener("click", function(){

                                                  document.getElementById("loginpanel").style.display = "none";
                                                  document.getElementById("room_list_in").style.display = "block";
                                                  document.getElementById("roomsin").style.display = "block";
                                                  document.getElementById("exitbt").style.display = "none";
                                                  document.getElementById("room_show_in").style.display = "none";
                                                  document.getElementById("title").innerHTML = "Pomieszczenia";
                                                  active = "room9";
                                                });

                                            }
                                }
                                )});
                    }


                      else  {
                        Alert("Brak Pomieszczeń");
                      }
                  }
                  else  {
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
          toolbar2.addEventListener("click", function(){
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
    tab2closeroom.addEventListener("click", function(){
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
    room1.addEventListener("click", function(){
      closerooms();
       ;
      document.getElementById("toolbar2").innerHTML = '<ion-title>Korytarz</ion-title><ion-buttons slot="primary"><ion-button id="closeroom"><ion-icon slot="icon-only" name="close"></ion-icon></ion-button></ion-buttons>';
      document.getElementById("mapmain").style.display = "none";
      document.getElementById("maproom1").style.display = "block";
    });

    var room2 = document.getElementById("room2");
    room2.addEventListener("click", function(){
      closerooms();
       ;
      document.getElementById("toolbar2").innerHTML = '<ion-title>Spiżarnia</ion-title><ion-buttons slot="primary"><ion-button id="closeroom"><ion-icon slot="icon-only" name="close"></ion-icon></ion-button></ion-buttons>';
      document.getElementById("mapmain").style.display = "none";
      document.getElementById("maproom2").style.display = "block";
    });

    var room3 = document.getElementById("room3");
    room3.addEventListener("click", function(){
      closerooms();
       ;
      document.getElementById("toolbar2").innerHTML = '<ion-title>Przedpokój</ion-title><ion-buttons slot="primary"><ion-button id="closeroom"><ion-icon slot="icon-only" name="close"></ion-icon></ion-button></ion-buttons>';
      document.getElementById("mapmain").style.display = "none";
      document.getElementById("maproom3").style.display = "block";
    });

    var room4 = document.getElementById("room4");
    room4.addEventListener("click", function(){
      closerooms();
      ;
      document.getElementById("toolbar2").innerHTML = '<ion-title>Kuchnia</ion-title><ion-buttons slot="primary"><ion-button id="closeroom"><ion-icon slot="icon-only" name="close"></ion-icon></ion-button></ion-buttons>';
      document.getElementById("mapmain").style.display = "none";
      document.getElementById("maproom4").style.display = "block";
    });

    var room5 = document.getElementById("room5");
    room5.addEventListener("click", function(){
      closerooms();
       ;
      document.getElementById("toolbar2").innerHTML = '<ion-title>Łazienka</ion-title><ion-buttons slot="primary"><ion-button id="closeroom"><ion-icon slot="icon-only" name="close"></ion-icon></ion-button></ion-buttons>';
      document.getElementById("mapmain").style.display = "none";
      document.getElementById("maproom5").style.display = "block";
    });

    var room6 = document.getElementById("room6");
    room6.addEventListener("click", function(){
      closerooms();
      ;
      document.getElementById("toolbar2").innerHTML = '<ion-title>Salon</ion-title><ion-buttons slot="primary"><ion-button id="closeroom"><ion-icon slot="icon-only" name="close"></ion-icon></ion-button></ion-buttons>';
      document.getElementById("mapmain").style.display = "none";
      document.getElementById("maproom6").style.display = "block";
    });

    var room7 = document.getElementById("room7");
    room7.addEventListener("click", function(){
      closerooms();
      ;
      document.getElementById("toolbar2").innerHTML = '<ion-title>Pokoje</ion-title><ion-buttons slot="primary"><ion-button id="closeroom"><ion-icon slot="icon-only" name="close"></ion-icon></ion-button></ion-buttons>';
      document.getElementById("mapmain").style.display = "none";
      document.getElementById("maproom7").style.display = "block";
      document.getElementById("maproom7-1").style.display = "block";
      document.getElementById("maproom7-2").style.display = "block";
    });
    var room71 = document.getElementById("maproom7-1");
    room71.addEventListener("click", function(){
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
    room72.addEventListener("click", function(){
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
