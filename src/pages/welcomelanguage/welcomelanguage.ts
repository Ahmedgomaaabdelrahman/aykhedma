import { MyaddsPage } from './../myadds/myadds';
import { WelcomePage } from './../welcome/welcome';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WelcomelanguagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-welcomelanguage',
  templateUrl: 'welcomelanguage.html',
})
export class WelcomelanguagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomelanguagePage');
  }
  Arabic(){
    this.navCtrl.push(WelcomePage);
  }
  English(){
    
  }
}
