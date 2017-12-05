import { PerLocationPage } from './../per-location/per-location';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {Person} from "../../models/person/person";
import {User} from "../../models/user/user";
import {PersonProvider} from "../../providers/person/person";
import {PersonFBCredentials} from "../../models/person/person-firebase-credentials";
import {Observable} from "rxjs";
import {UserProvider} from "../../providers/user/user";
import {AngularFireAuth} from "angularfire2/auth";
import {CommonProvider} from "../../providers/common/common";
import {PerFirsthomePage} from "../per-firsthome/per-firsthome";
import {ChatProvider} from "../../providers/chat/chat";

/**
 * Generated class for the PerSignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-per-signup',
  templateUrl: 'per-signup.html',
})
export class PerSignupPage {
  public person : Person ;
  public personClass = Person ;
  constructor(public navCtrl: NavController, public navParams: NavParams ,
              public personService : PersonProvider , public userService : UserProvider ,
              public afAuth: AngularFireAuth , public commonService : CommonProvider ,
              public chatService : ChatProvider) {
    switch (navParams.data.mode){
      case Person.USER_MODE :
        this.person = new User();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerSignupPage');
  }
  golocations(){
    this.navCtrl.push(PerLocationPage,{
      person : this.person
    });
  }
  handlePersonRegister(uid : string ):Observable<any>
  {console.log("USerID"+uid);
    this.person.uid = uid ;
    console.log(this.person);
    return this.userService.register(this.person);   
  }
  confirm(){
    this.personService.FBRegister(new PersonFBCredentials(this.person.email,this.person.password)).then(()=>{
      this.handlePersonRegister(this.afAuth.auth.currentUser.uid).subscribe((person)=>{
        this.personService.activePerson = this.personService.preparePersonObj(person);
        this.chatService.attachReceivedChatListener();
        this.commonService.successToast();
        this.personService.currentUser = person;
        // case user only
        this.navCtrl.push(PerFirsthomePage);
      });
    }).catch((err)=>console.log(err))
  }
}
