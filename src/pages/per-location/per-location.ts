import { PerMapPage } from './../per-map/per-map';
import { Component } from '@angular/core';
import {NavController, NavParams, ModalController} from 'ionic-angular';
import {Person} from "../../models/person/person";
import {Location} from "../../models/person/location";

/**
 * Generated class for the PerLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-per-location',
  templateUrl: 'per-location.html',
})
export class PerLocationPage {
  public salesCategory : any[] = [] ;
  public person : Person;
  
  constructor(public navCtrl: NavController, public navParams: NavParams ,
              public modalCtrl : ModalController) {
    this.person = navParams.data.person ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerLocationPage');
  }
  gomap(){
    let modal = this.modalCtrl.create(PerMapPage);
    modal.present();
    modal.onDidDismiss((location : Location)=>{
      this.person.locations.push(location);
    });
  }
  confirm(){
    this.navCtrl.pop();
  }
}
