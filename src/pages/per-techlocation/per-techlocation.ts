import { PerTechratePage } from './../per-techrate/per-techrate';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PerTechlocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-per-techlocation',
  templateUrl: 'per-techlocation.html',
})
export class PerTechlocationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerTechlocationPage');
  }
  gotechrate(){
    this.navCtrl.push(PerTechratePage);
  }
}
