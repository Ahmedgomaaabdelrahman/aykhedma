import { WelcomePage } from './../welcome/welcome';
import { ServRequestsPage } from './../serv-requests/serv-requests';
import { ProfilePage } from './../profile/profile';
import { SettingsPage } from './../settings/settings';
import { PerHomePage } from './../per-home/per-home';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {ServChatPage} from "../serv-chat/serv-chat";
import {User} from "../../models/user/user";
import {UserProvider} from "../../providers/user/user";
import { PersonProvider } from "../../providers/person/person";
import { CommonProvider } from "../../providers/common/common";

/**
 * Generated class for the PerFirsthomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-per-firsthome',
  templateUrl: 'per-firsthome.html',
})
export class PerFirsthomePage {
  public specialAdds : any[] = [] ;
  constructor(public comm:CommonProvider,public navCtrl: NavController, public navParams: NavParams,
              public userService : UserProvider , public personService: PersonProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerFirsthomePage');
    this.userService.getSpecialAdds().subscribe((res)=>{
      this.specialAdds = res ;
    });
  }
  secondHome(){
    this.navCtrl.push(PerHomePage);
  }
  settings(){
    this.navCtrl.push(SettingsPage);
  }
  editprofile(){
    if(this.personService.currentUser == null){
       
      this.comm.presentToast("يجب التسجيل اولا");
      this.navCtrl.push(WelcomePage);
    }
    else{
      this.navCtrl.push(ProfilePage);
    }
       
      
  }
  goinbox(){
    this.navCtrl.push(ServRequestsPage);
  }
  goToChat(person : any){
    this.navCtrl.push(ServChatPage,this.personService.preparePersonObj(person));
  }
}
