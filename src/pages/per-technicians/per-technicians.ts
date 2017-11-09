import { PerTechlocationPage } from './../per-techlocation/per-techlocation';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PerTechniciansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-per-technicians',
  templateUrl: 'per-technicians.html',
})
export class PerTechniciansPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerTechniciansPage');
  }
  gomaptech(){
    this.navCtrl.push(PerTechlocationPage);
  }
}
