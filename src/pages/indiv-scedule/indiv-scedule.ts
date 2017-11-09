import { ServRequestsPage } from './../serv-requests/serv-requests';
import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IndivScedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-indiv-scedule',
  templateUrl: 'indiv-scedule.html',
})
export class IndivScedulePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndivScedulePage');
  }
  inbox(){
    this.navCtrl.push(ServRequestsPage);
  }
  profile(){
    this.navCtrl.push(ProfilePage);
  }

}
