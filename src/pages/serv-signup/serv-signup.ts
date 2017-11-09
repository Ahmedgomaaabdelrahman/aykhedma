import { ServSignipindusPage } from './../serv-signipindus/serv-signipindus';
import { ServHomePage } from './../serv-home/serv-home';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { PerLocationPage } from './../per-location/per-location';
import {Person} from "../../models/person/person";
import {User} from "../../models/user/user";
import {PersonProvider} from "../../providers/person/person";
import {UserProvider} from "../../providers/user/user";
import {AngularFireAuth} from "angularfire2/auth";
import {CommonProvider} from "../../providers/common/common";
import {PerFirsthomePage} from "../per-firsthome/per-firsthome";
import {ChatProvider} from "../../providers/chat/chat";
import {PersonFBCredentials} from "../../models/person/person-firebase-credentials";
import {Observable} from "rxjs";
import { ServiceProv } from '../../models/user/serviceprov';
import { ServiceProvProvider } from '../../providers/service-prov/service-prov';
import { IndivCertificatePage } from '../indiv-certificate/indiv-certificate';



/**
 * Generated class for the ServSignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-serv-signup',
  templateUrl: 'serv-signup.html',
})
export class ServSignupPage {
  public person : ServiceProv;
  public personClass = Person ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public personService : PersonProvider ,
     public userService : UserProvider , public servService : ServiceProvProvider,
    public afAuth: AngularFireAuth , public commonService : CommonProvider ,
    public chatService : ChatProvider) {
      switch (navParams.data.mode){
        case Person.ServProv_MODE :
          this.person = new ServiceProv();
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServSignupPage');
  }
  golocations(){
    this.navCtrl.push(PerLocationPage,{
      person : this.person
    });
  }
  getIndusty(){
    this.navCtrl.push(ServSignipindusPage,{
      person : this.person
    });
  }
  getCetificate(){
    this.navCtrl.push(IndivCertificatePage,{
      person : this.person
    });
  }

  handlePersonRegister(uid : string ):Observable<any>
  {
    this.person.uid = uid ;
    switch (this.person.type){
      case Person.ServProv_MODE : return this.servService.register(this.person);
    }
  }
  confirm(){
    this.personService.FBRegister(new PersonFBCredentials(this.person.email,this.person.password)).then(()=>{
      this.handlePersonRegister(this.afAuth.auth.currentUser.uid).subscribe((person)=>{
      this.personService.activePerson = this.personService.preparePersonObj(person);
      this.chatService.attachReceivedChatListener();
      this.commonService.successToast();
      // case user only
      this.navCtrl.push(ServHomePage,{persotupe:this.person});
      });
    }).catch((err)=>console.log(err));
   
  }
}
