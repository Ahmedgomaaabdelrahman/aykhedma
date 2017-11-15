import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { IndividualTech } from '../../models/technician/individual-tech';
import { CommonMediaProvider } from '../../providers/common-media/common-media';
import { CommonProvider } from '../../providers/common/common';

/**
 * Generated class for the IndivImgidPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-indiv-imgid',
  templateUrl: 'indiv-imgid.html',
})
export class IndivImgidPage {
  public person : IndividualTech;
  public imgfront : string;
  public imgback : string;

  constructor(public commonMediaService : CommonMediaProvider, 
    public commonService : CommonProvider,
    public navCtrl: NavController, public navParams: NavParams) {
    this.person = navParams.data.person ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndivImgidPage');
  }
addfront(){
    this.commonService.presentLoading("Please Wait ...");
    this.commonMediaService.galleryOrCamera().then((base64:string)=>{ 
    this.commonService.dismissLoading();
    this.imgfront = base64;
  }).catch((err)=>console.log(err))
}
addback(){
  this.commonService.presentLoading("Please Wait ...");
  this.commonMediaService.galleryOrCamera().then((base64:string)=>{ 
  this.commonService.dismissLoading();
  this.imgback = base64;
  // this.com.presentToast("basefromno1"+base64);
}).catch((err)=>console.log(err))
}

confirm(){
  this.person.identityFront = this.imgfront;
  this.person.identityBack  = this.imgback;
  this.navCtrl.pop();
  console.log(this.person.identityFront);
  console.log(this.person.identityBack);
}
}
