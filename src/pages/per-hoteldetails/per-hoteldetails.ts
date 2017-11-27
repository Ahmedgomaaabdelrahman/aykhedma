import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { IndivdualProvider } from '../../providers/indivdual/indivdual';
import { CommonProvider } from '../../providers/common/common';
import { ServChatPage } from '../serv-chat/serv-chat';
import { PersonProvider } from '../../providers/person/person';

/**
 * Generated class for the PerHoteldetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-per-hoteldetails',
  templateUrl: 'per-hoteldetails.html',
})
export class PerHoteldetailsPage {
 public req : any;
public person : any;
  constructor(public personService : PersonProvider,public comm:CommonProvider,public ind :IndivdualProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.req = this.navParams.data.req;
    this.person = this.navParams.data.person;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerHoteldetailsPage');
  }
  
 
  goToChat(){
    this.navCtrl.push(ServChatPage,this.personService.preparePersonObj(this.person));
  }
  refuse(){
    this.ind.connectWtech(this.req.id,0).subscribe((res)=>{
      console.log(res);
       this.comm.presentToast("تم رفض الطلب");
       this.navCtrl.pop();
    });
  }
}
