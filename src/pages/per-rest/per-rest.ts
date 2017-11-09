import { PerRestdetailsPage } from './../per-restdetails/per-restdetails';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PerRestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-per-rest',
  templateUrl: 'per-rest.html',
})
export class PerRestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerRestPage');
  }
  godetails(){
    this.navCtrl.push(PerRestdetailsPage);
  }
}
