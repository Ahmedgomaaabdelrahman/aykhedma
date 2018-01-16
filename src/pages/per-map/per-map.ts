import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {Geolocation} from "@ionic-native/geolocation";
import {Location} from "../../models/person/location";

/**
 * Generated class for the PerMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@Component({
  selector: 'page-per-map',
  templateUrl: 'per-map.html',
})
export class PerMapPage {
  @ViewChild('map') mapElement: ElementRef;
  public location : Location ;
  public map: any;
  public markers = [];
  public lat : number = 0 ;
  public lng : number = 0;
  public address : string ;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public geolocation : Geolocation , private viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerMapPage');
    this.loadMap();
  }
  loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      this.lat = latLng.lat() ;
      this.lng = latLng.lng() ;
      let mapOptions = {
        center: latLng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.addMarker(latLng);
      // google.maps.event.addListener(this.map, 'click', (event) => {
      //   this.setMapOnAll(null);
      //   this.addMarker(event.latLng);
      // });
      this.addMarker(this.map.getCenter());
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  addMarker(LatLng){
    let marker  = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: LatLng
    });
    this.lat = LatLng.lat() ;
    this.lng = LatLng.lng() ;
    let content = "<h6>Here</h6>";
    //this.addInfoWindow(marker, content);
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    infoWindow.open(this.map,marker);
    this.markers.push(marker);
  }
  confirm()
  {
    this.viewCtrl.dismiss(new Location(this.lat,this.lng,this.address));
  }
  // Sets the map on all markers in the array.
  setMapOnAll(map) {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }
}
