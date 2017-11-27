import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { techCertificate } from '../../models/technician/certificate';
import { IndivdualProvider } from '../../providers/indivdual/indivdual';


@Component({
  selector: 'page-showtechcert',
  templateUrl: 'showtechcert.html',
})
export class ShowtechcertPage {
  public personid : any;
  public percert : any [] = [];
  public imgsrc : string;
  constructor(public indcidual:IndivdualProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.personid = this.navParams.data.perid;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowtechcertPage');
    this.imgsrc = this.navParams.data.imageurl;
    // this.com.presentToast("basefromno2"+this.imgsrc);
    console.log("NewWWWWWWWW"+this.imgsrc);
  }
  confirm(){
    let image = new techCertificate(this.imgsrc,this.personid);
    console.log(image);
    this.percert.push(image);
    this.indcidual.techCetificate(this.percert);
    this.navCtrl.pop();
 }
}
