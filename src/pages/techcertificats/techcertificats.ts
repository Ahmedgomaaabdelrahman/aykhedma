import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShowtechcertPage } from '../showtechcert/showtechcert';
import { CommonProvider } from '../../providers/common/common';
import { CommonMediaProvider } from '../../providers/common-media/common-media';
import { IndivdualProvider } from '../../providers/indivdual/indivdual';


@Component({
  selector: 'page-techcertificats',
  templateUrl: 'techcertificats.html',
})
export class TechcertificatsPage {
  public person : any;
  public perid: any;

  constructor(public ind:IndivdualProvider,public com:CommonProvider,public commonMediaService : CommonMediaProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.person = navParams.data.person;
    this.perid = navParams.data.perid;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TechcertificatsPage');
  }
  addImage(){
    this.com.presentLoading("Please Wait ...");
    this.commonMediaService.galleryOrCamera().then((base64:string)=>{ 
    this.com.dismissLoading();
    this.navCtrl.push(ShowtechcertPage,{imageurl:"data:image/png;base64,"+base64,person:this.person,perid:this.perid});
    // this.com.presentToast("basefromno1"+base64);
  }).catch((err)=>console.log(err))
}
confirm(){
  this.navCtrl.pop();
}
}
