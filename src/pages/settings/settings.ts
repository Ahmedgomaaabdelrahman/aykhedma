import { ProfilePage } from './../profile/profile';
import { ServRequestsPage } from './../serv-requests/serv-requests';
import { TermsPage } from './../terms/terms';
import { AboutPage } from './../about/about';
import { Component } from '@angular/core';
import { NavController, NavParams,Platform } from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";
import {MainService} from "../../providers/main-service";
import { RatemytechsPage } from '../ratemytechs/ratemytechs';
import { PersonProvider } from '../../providers/person/person';
import { WelcomePage } from '../welcome/welcome';
import { CommonProvider } from "../../providers/common/common";


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  public toggleStatus:any;
  public MainService : MainService = MainService ;
  
  constructor(public personService : PersonProvider,
              public navCtrl: NavController,
              public navParams: NavParams,
              private translate: TranslateService,
              public platform: Platform,
              public comm:CommonProvider,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  about(){
    this.navCtrl.push(AboutPage);
  }
  notification(){
    this.navCtrl.push(ServRequestsPage);
  }
  profile(){
    if(this.personService.currentUser == null){
       
       this.comm.presentToast("يجب التسجيل اولا");
      this.navCtrl.push(WelcomePage);
    }
    else{
      this.navCtrl.push(ProfilePage);
    }
  }
  terms(){ this.navCtrl.push(TermsPage);}
  Change_Toggle(type) {
    this.translate.setDefaultLang(type);
    MainService.lang = type;
    if(type == 'ar'){
      this.platform.setDir('rtl', true);
    console.log(type);
    console.log("arabic");
    }
    else
    {
      this.platform.setDir('ltr', true);
      console.log(type);
      console.log("English");
    }
  }
  gotoTechs(){

    if(this.personService.currentUser == null){
       
       this.comm.presentToast("يجب التسجيل اولا");
      this.navCtrl.push(WelcomePage);
    }
    else{
     this.navCtrl.push(RatemytechsPage);
    }
    
  }
  logout(){
    this.personService.currentUser = null;
    this.navCtrl.setRoot(WelcomePage);
    console.log('exit');
  }
}
