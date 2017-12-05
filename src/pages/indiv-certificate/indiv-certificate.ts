import { IndivViewcertificPage } from './../indiv-viewcertific/indiv-viewcertific';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CommonMediaProvider } from '../../providers/common-media/common-media';
import { ServiceProv } from '../../models/user/serviceprov';
import { servCertificate } from '../../models/person/Sercertificate';
import { CommonProvider } from '../../providers/common/common';
import { Person } from '../../models/person/person';

/**
 * Generated class for the IndivCertificatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-indiv-certificate',
  templateUrl: 'indiv-certificate.html',
})
export class IndivCertificatePage {
  public person : any;
  public perid: any;

  constructor(public com:CommonProvider,public commonMediaService : CommonMediaProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.person = navParams.data.person;
    this.perid = navParams.data.perid;

    console.log(this.person);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndivCertificatePage');
  }
confirm(){
    this.navCtrl.pop();
}
addImage(){
    this.commonMediaService.galleryOrCamera().then((base64:string)=>{ 
    this.com.presentLoading("Please Wait ...");
    let img = "data:image/png;base64,"+base64;
    this.navCtrl.push(IndivViewcertificPage,{imageurl:img,person:this.person,perid:this.perid});    
    this.com.dismissLoading();
    // this.com.presentToast("basefromno1"+base64);
  }).catch((err)=>console.log(err))
}
}
