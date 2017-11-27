import { PerTechratePage } from './../per-techrate/per-techrate';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { MainService } from '../../providers/main-service';

/**
 * Generated class for the PerTechlocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;
@Component({
  selector: 'page-per-techlocation',
  templateUrl: 'per-techlocation.html',
})
export class PerTechlocationPage {
  @ViewChild('map') mapElement:ElementRef;
  public map :any;
  public flag : boolean = false;
  public markers = [];
  public alltechs : any [] = [] ;
  public tecNo : number ;
  public techNow : any;
  public mainService = MainService;
  constructor(private geolocation: Geolocation,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.alltechs = this.navParams.data.alltechs;

    console.log(this.alltechs);
    this.tecNo = this.navParams.data.tecNo;

    console.log('ionViewDidLoad PerTechlocationPage');
    this.loadMap();
  }
  gotechrate(){
    this.navCtrl.push(PerTechratePage);
  }


  loadMap() {
    let self = this;
    var map, infoWindow;
    infoWindow = new google.maps.InfoWindow;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        // map.setCenter(pos);
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: pos
          });
          
          var marker = new google.maps.Marker({
            position: pos,
            map: map,
             });
             marker.addListener('click', function() {
              
              console.log("ANA Sha3allllllllll");
            });
          for(var i = 0; i < self.alltechs.length ; i++){
         
            let pos = {lat : self.alltechs[i].lat,lng : self.alltechs[i].lng};
            var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
            var marker = new google.maps.Marker({
              position: pos,
              map: map,
              icon:iconBase + 'library_maps.png',
              
               });
               marker.addListener('click', function(e) {
                
                for(var i = 0; i < self.alltechs.length ; i++){
                  let postech = {lat : self.alltechs[i].lat,lng : self.alltechs[i].lng}
                    if(marker.pos == postech){
                          self.techNow = self.alltechs[i];
                          console.log(self.techNow);
                          self.flag = true;
                    }
                    else{
                      console.log("GRRRRRRRRRRRRRR");
                    }
                }
                console.log("GOWAAAAAAAAAAAAA");
                
                // console.log(this.flag);
              });
               console.log(pos);
               

              
            }
      });
     
    }
     else {
      // Browser doesn't support Geolocation
      console.log("ERRRRRRRRRRRROR");
     // handleLocationError(false, infoWindow, map.getCenter());
    }
  

      // var uluru = {lat:31.2262, lng:29.9567};
      // var map = new google.maps.Map(document.getElementById('map'), {
      //   zoom: 4,
      //   center: uluru
      // });
      // for(var i = 0; i < this.alltechs.length ; i++){
      //   let pos = {lat : this.alltechs[i].lat,lng : this.alltechs[i].lng};
      //   var marker = new google.maps.Marker({
      //     position: pos,
      //     map: map
      //      });
      //      console.log(pos);
      //      marker.addListener('click', function() {
      //       console.log(this.alltechs[i]);
      //     });
      //   }
        
      // var marker = new google.maps.Marker({
      //   position: uluru,
      //   map: map
      // });
    
    // this.geolocation.getCurrentPosition().then((resp) => {
    //   let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

    //   let mapOptions = {
    //     center: latLng,
    //     zoom: 16,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP
    //   };
    //   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      
    //   for(var i = 0; i < this.alltechs.length ; i++){
    //    // var Marker = new google.maps.Marker(this.alltechs[i].lat, this.alltechs[i].lng);
    //     let latLng = new google.maps.LatLng(this.alltechs[i].lat, this.alltechs[i].lng);
    //     this.addMarker(latLng);
    //    }

     
    //   google.maps.event.addListener(this.map, 'click', (event) => {
    //     this.setMapOnAll(null);
    //     var location  = event.latLng;
    //     this.addMarker(location);
       
    //   });
    //   this.addMarker(this.map.getCenter());
    // }).catch((error) => {
    //   console.log('Error getting location', error);
    // });
  }

   


  addMarker(LatLng){
    let marker  = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: LatLng
    });
    // let content = "<h4>Selected</h4>";
    // let infoWindow = new google.maps.InfoWindow({
    //   content: content
    // });
   // infoWindow.open(this.map,marker);
    this.markers.push(marker);
  }
  // Sets the map on all markers in the array.
  setMapOnAll(map) {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }
}
