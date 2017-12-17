import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { ServChatPage } from '../serv-chat/serv-chat';
import { PersonProvider } from '../../providers/person/person';
import { MainService } from '../../providers/main-service';
import { CommonProvider } from "../../providers/common/common";
import { WelcomePage } from "../welcome/welcome";
import { PerTechcatPage } from "../per-techcat/per-techcat";


@Component({
  selector: 'page-servicesdetails',
  templateUrl: 'servicesdetails.html',
})
export class ServicesdetailsPage {
  public catid : any;
  public services : any [] = [];
  public mainService  = MainService;
  constructor(public comm:CommonProvider,public navCtrl: NavController, public navParams: NavParams,public userService : UserProvider,public personService : PersonProvider) {
      this.catid = this.navParams.get('categoryID');
      console.log(this.catid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesdetailsPage');
    
    this.userService.getServices(this.catid).subscribe((res)=>{
       this.services = res ; 
       console.log(this.services);
    });

  }

  goToChat(person : any){

    if(this.personService.currentUser == null){
      this.comm.presentToast("يجب التسجيل اولا");
      this.navCtrl.push(WelcomePage);
    }
    else{
       this.navCtrl.push(ServChatPage,this.personService.preparePersonObj(person));
    }
    
  }
  
   

}
