import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import {MainService} from "../../providers/main-service";
import {ServChatPage} from "../serv-chat/serv-chat";
import {PersonProvider} from "../../providers/person/person";
import {AdsDetailsPage} from "../ads-details/ads-details";
import { PerSellPage } from '../per-sell/per-sell';

/**
 * Generated class for the PerItemdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-per-itemdetails',
  templateUrl: 'per-itemdetails.html',
})
export class PerItemdetailsPage {
  public catItems : any[] = [];
  public catID : number ;
  public mainService  = MainService ;
  constructor(public navCtrl: NavController, public navParams: NavParams , public userService : UserProvider ,
              public personService : PersonProvider) {
    this.catID = this.navParams.data ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerItemdetailsPage');
    this.userService.getSalesByCat(this.catID).subscribe((res)=>{
      this.catItems = res ;
      console.log(res);
    });
  }
  goToChat(person : any){
    this.navCtrl.push(ServChatPage,this.personService.preparePersonObj(person));
  }
  goToAddDetails(item : any){
    this.navCtrl.push(AdsDetailsPage,item);
  }
  addNew(){
    this.navCtrl.push(PerSellPage);
  }

}
