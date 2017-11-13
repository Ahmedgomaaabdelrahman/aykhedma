import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';
import { CommonMediaProvider } from '../../providers/common-media/common-media';
import { IndivViewcertificPage } from '../indiv-viewcertific/indiv-viewcertific';
import { IndivSkillsPage } from '../indiv-skills/indiv-skills';
import { IndivPhonePage } from '../indiv-phone/indiv-phone';
import { IndivCertificatePage } from '../indiv-certificate/indiv-certificate';
import { IndivImgidPage } from '../indiv-imgid/indiv-imgid';
import { IndivImgprofilePage } from '../indiv-imgprofile/indiv-imgprofile';
import { IndivScedulePage } from '../indiv-scedule/indiv-scedule';

@Component({
  selector: 'page-tecregist2',
  templateUrl: 'tecregist2.html',
})
export class Tecregist2Page {
  public person : any;
  public imgsrc : string;
  constructor(public com:CommonProvider,public commonMediaService : CommonMediaProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.person = this.navParams.data.person;
    console.log(this.person);
    console.log(this.person.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tecregist2Page');
  }
  
addImage(){
    this.com.presentLoading("Please Wait ...");
    this.commonMediaService.galleryOrCamera().then((base64:string)=>{ 
    this.com.dismissLoading();
    this.navCtrl.push(IndivImgprofilePage,{imageurl:base64,person:this.person});
    // this.com.presentToast("basefromno1"+base64);
  }).catch((err)=>console.log(err))
}
goskills(){
  this.navCtrl.push(IndivSkillsPage);
}
phonepage(){
  this.navCtrl.push(IndivPhonePage);
}
certificate(){
  this.navCtrl.push(IndivCertificatePage);
}
imgid(){
  this.navCtrl.push(IndivImgidPage);
}
goimgprofile(){
  this.navCtrl.push(IndivImgprofilePage);
}
goHome(){
  this.navCtrl.push(IndivScedulePage);
  
}
}
