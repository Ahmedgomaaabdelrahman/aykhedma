import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Person } from '../../models/person/person';
import { IndividualTech } from '../../models/technician/individual-tech';

/**
 * Generated class for the IndivImgprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-indiv-imgprofile',
  templateUrl: 'indiv-imgprofile.html',
})
export class IndivImgprofilePage {
  public imgsrc : string;
  public person : IndividualTech;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.person = navParams.data.person ;
    this.imgsrc = navParams.data.imageurl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndivImgprofilePage');
  }
  confirm(){
    this.person.profileImage = this.imgsrc;
    console.log(this.person.profileImage);
    this.navCtrl.pop();
  }
  
}
