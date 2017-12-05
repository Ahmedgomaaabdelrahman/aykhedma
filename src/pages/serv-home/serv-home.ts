import { SettingsPage } from './../settings/settings';
import { IndivScedulePage } from './../indiv-scedule/indiv-scedule';
import { ServRequestsPage } from './../serv-requests/serv-requests';
import { ServAddservicePage } from './../serv-addservice/serv-addservice';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Person } from '../../models/person/person';
import { PersonProvider } from '../../providers/person/person';
import { WelcomePage } from '../welcome/welcome';

/**
 * Generated class for the ServHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-serv-home',
  templateUrl: 'serv-home.html',
})
export class ServHomePage {
  constructor(public personProvider:PersonProvider,public navCtrl: NavController, public navParams: NavParams) {
    // switch (this.user.type){
    //   case Person.USER_MODE : {this.typeuser = "ss"};
    //   case Person.ServProv_MODE : {this.typeuser = "servProvider"};
    // }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServHomePage');
  }
  servreq(){
    this.navCtrl.push(ServRequestsPage);
  }
  addservice(){
    this.navCtrl.push(ServAddservicePage)
  }
  Schedule(){
    this.navCtrl.push(IndivScedulePage)
  }
  tasks(){
    this.navCtrl.push(ServRequestsPage);
  }
  addtec(){
    
  }
  settings(){
    this.navCtrl.push(SettingsPage);
  }
  logout(){
    this.personProvider.currentUser = null;
    this.navCtrl.setRoot(WelcomePage);
    console.log('exit');
  }
}
