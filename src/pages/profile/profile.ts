import { MyaddsPage } from './../myadds/myadds';
import { PerItemdetailsPage } from './../per-itemdetails/per-itemdetails';
import { PerSignupPage } from './../per-signup/per-signup';
import { ServRequestsPage } from './../serv-requests/serv-requests';
import { SettingsPage } from './../settings/settings';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { EditaccountPage } from '../editaccount/editaccount';
import { PersonProvider } from '../../providers/person/person';
import { MainService } from '../../providers/main-service';
import { LoginPage } from '../login/login';
import { WelcomePage } from '../welcome/welcome';



@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public usernow : any ;
  public mainService = MainService;

  constructor(public personProvider:PersonProvider,public navCtrl: NavController, public navParams: NavParams) {
        this.usernow = this.personProvider.currentUser;
        console.log(this.usernow);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.usernow = this.personProvider.currentUser;
    console.log(this.usernow);
  }
  settings(){
    this.navCtrl.push(SettingsPage);
  }
  goinbox(){
    this.navCtrl.push(ServRequestsPage);
  }
  SignUP(){
    this.navCtrl.push(EditaccountPage);
  }
  logout(){
    this.personProvider.currentUser = null;
    this.navCtrl.setRoot(WelcomePage);
    console.log('exit');
  }
  notification(){
    this.navCtrl.push(ServRequestsPage);
  }
  adds(){
    this.navCtrl.push(MyaddsPage);
  }
}
