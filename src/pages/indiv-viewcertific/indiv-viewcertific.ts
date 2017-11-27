import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { servCertificate } from '../../models/person/Sercertificate';
import { ServiceProv } from '../../models/user/serviceprov';
import { CommonProvider } from '../../providers/common/common';
import { ServProviderCats } from '../../models/person/servProvCats';

/**
 * Generated class for the IndivViewcertificPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-indiv-viewcertific',
  templateUrl: 'indiv-viewcertific.html',
})
export class IndivViewcertificPage {
  public person : any;
  public perid : any;
  public imgsrc : string;
  constructor(public com:CommonProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.person = this.navParams.data.person;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndivViewcertificPage');
    this.imgsrc = this.navParams.data.imageurl;
    // this.com.presentToast("basefromno2"+this.imgsrc);
    console.log("NewWWWWWWWW"+this.imgsrc);
  }
  confirm(){
    let image = new servCertificate(this.imgsrc);
    console.log(image);
    this.person.serviceCats.push(image);
    console.log(this.person.serviceCats);
    this.navCtrl.pop();
 }
}
