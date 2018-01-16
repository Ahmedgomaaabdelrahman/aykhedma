import { PerItemdetailsPage } from './../per-itemdetails/per-itemdetails';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import {MainService} from "../../providers/main-service";

/**
 * Generated class for the PerOtherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-per-other',
  templateUrl: 'per-other.html',
})
export class PerOtherPage {
  public salesCategory : any[] = [] ;
  public mainService = MainService ;
  constructor(public navCtrl: NavController, public navParams: NavParams ,
              public userService : UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerOtherPage');
    this.userService.getSalesCategory().subscribe((res)=>{
      this.salesCategory = res ;
    });
  }
  goitemdetails(categoryID:number){
    this.navCtrl.push(PerItemdetailsPage,categoryID);
  }
}
