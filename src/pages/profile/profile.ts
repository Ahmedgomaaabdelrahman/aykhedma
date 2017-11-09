import { MyaddsPage } from './../myadds/myadds';
import { PerItemdetailsPage } from './../per-itemdetails/per-itemdetails';
import { PerSignupPage } from './../per-signup/per-signup';
import { ServRequestsPage } from './../serv-requests/serv-requests';
import { SettingsPage } from './../settings/settings';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  settings(){
    this.navCtrl.push(SettingsPage);
  }
  goinbox(){
    this.navCtrl.push(ServRequestsPage);
  }
  SignUP(){
    this.navCtrl.push(PerSignupPage)
  }
  logout(){
    console.log('exit');
  }
  notification(){
    this.navCtrl.push(ServRequestsPage);
  }
  adds(){
    this.navCtrl.push(MyaddsPage);
  }
}
