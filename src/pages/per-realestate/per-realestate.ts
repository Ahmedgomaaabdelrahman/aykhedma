import { PerRealdetailsPage } from './../per-realdetails/per-realdetails';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PerRealestatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-per-realestate',
  templateUrl: 'per-realestate.html',
})
export class PerRealestatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerRealestatePage');
  }
  godetails(){
    this.navCtrl.push(PerRealdetailsPage);
  }
}
