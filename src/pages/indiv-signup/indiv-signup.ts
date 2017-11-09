import { ServHomePage } from './../serv-home/serv-home';
import { IndivImgprofilePage } from './../indiv-imgprofile/indiv-imgprofile';
import { IndivImgidPage } from './../indiv-imgid/indiv-imgid';
import { IndivCertificatePage } from './../indiv-certificate/indiv-certificate';
import { IndivPhonePage } from './../indiv-phone/indiv-phone';
import { IndivSkillsPage } from './../indiv-skills/indiv-skills';
import { PerLocationPage } from './../per-location/per-location';
import { IndivLangPage } from './../indiv-lang/indiv-lang';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IndivSignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-indiv-signup',
  templateUrl: 'indiv-signup.html',
})
export class IndivSignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndivSignupPage');
  }
  lang(){
    this.navCtrl.push(IndivLangPage);
  }
  signlocation(){
    this.navCtrl.push(PerLocationPage)
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
    this.navCtrl.push(ServHomePage);
  }
}
