import { SignupPage } from './../signup/signup';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(private socialSharing: SocialSharing,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
login(){
  this.navCtrl.push(LoginPage);
}
signup(){
  this.navCtrl.push(SignupPage);
}

goTwitter(){
  document.textContent = "https://twitter.com/ashaghor1";
}
// goSnap(){
//   document.textContent = "https://twitter.com/ashaghor1";
// }

}


