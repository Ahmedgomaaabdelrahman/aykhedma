import { PerTechniciansPage } from './../per-technicians/per-technicians';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PerTechreqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-per-techreq',
  templateUrl: 'per-techreq.html',
})
export class PerTechreqPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerTechreqPage');
  }
  gotechnicians(){
    this.navCtrl.push(PerTechniciansPage);
  }
}
