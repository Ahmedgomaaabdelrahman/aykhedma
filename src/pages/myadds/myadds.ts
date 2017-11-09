import { YouraddsPage } from './../youradds/youradds';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-myadds',
  templateUrl: 'myadds.html',
})
export class MyaddsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyaddsPage');
  }
  youradds(){
    this.navCtrl.push(YouraddsPage);
  }
}
