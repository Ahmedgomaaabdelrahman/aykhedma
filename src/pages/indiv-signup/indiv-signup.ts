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
import { Person } from '../../models/person/person';
import { IndividualTech } from '../../models/technician/individual-tech';
import { IndivdualProvider } from '../../providers/indivdual/indivdual';
import { AngularFireAuth } from 'angularfire2/auth';
import { CommonProvider } from '../../providers/common/common';
import { ChatProvider } from '../../providers/chat/chat';
import { PersonProvider } from '../../providers/person/person';
import { PersonFBCredentials } from '../../models/person/person-firebase-credentials';
import { Observable } from 'rxjs/Observable';
import { IndivScedulePage } from '../indiv-scedule/indiv-scedule';
import { Tecregist2Page } from '../tecregist2/tecregist2';
import { CommonMediaProvider } from '../../providers/common-media/common-media';

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
  public person : IndividualTech;
  public personClass = Person ;
  constructor(public navCtrl: NavController, public navParams: NavParams,public indivdual :IndivdualProvider,
    public personService : PersonProvider , public afAuth: AngularFireAuth ,
    public commonMediaService : CommonMediaProvider, public commonService : CommonProvider,
    public chatService : ChatProvider) {
  
      switch (this.navParams.data.mode){
        case Person.IndivTech_MODE : this.person = new IndividualTech();
      }
      
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndivSignupPage');
  }
  lang(){
    this.navCtrl.push(IndivLangPage);
  }
  signlocation(){
      this.navCtrl.push(PerLocationPage,{
        person : this.person
      });
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
    this.navCtrl.push(IndivImgidPage,{
      person : this.person
    });
  }
 
  goHome(){
    this.navCtrl.push(IndivScedulePage);
    
  }



  handlePersonRegister(uid : string ):Observable<any>
  {
    this.person.uid = uid ; 
    this.person.type = Person.IndivTech_MODE;
    console.log(this.person.type);
    return this.indivdual.register(this.person);
     
  }
  
  confirm(){
      this.personService.FBRegister(new PersonFBCredentials(this.person.email,this.person.password)).then(()=>{
      this.handlePersonRegister(this.afAuth.auth.currentUser.uid).subscribe((person) => {
      console.log(person);  
      this.personService.activePerson = this.personService.preparePersonObj(person.output);
      this.chatService.attachReceivedChatListener();
      this.commonService.successToast();
      // case user only
      this.navCtrl.push(Tecregist2Page,{personid:person.output.id , person:this.person});
      });
    }).catch((err)=>console.log(err));
    
  }

  addImage(){
        this.commonService.presentLoading("Please Wait ...");
        this.commonMediaService.galleryOrCamera().then((base64:string)=>{ 
        this.navCtrl.push(IndivImgprofilePage,{imageurl:"data:image/png;base64,"+base64,person:this.person});
        this.commonService.dismissLoading();
        // this.com.presentToast("basefromno1"+base64);
      }).catch((err)=>console.log(err))
    }
}
