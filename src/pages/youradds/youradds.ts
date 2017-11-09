import { DeleteaddsPage } from './../deleteadds/deleteadds';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-youradds',
  templateUrl: 'youradds.html',
})
export class YouraddsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YouraddsPage');
  }
  DeleteAdds(){
    this.navCtrl.push(DeleteaddsPage);
  }
}
