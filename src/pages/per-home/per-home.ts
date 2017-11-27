import { PerFirsthomePage } from './../per-firsthome/per-firsthome';
import { ProfilePage } from './../profile/profile';
import { ServRequestsPage } from './../serv-requests/serv-requests';
import { SettingsPage } from './../settings/settings';
import { PerRestPage } from './../per-rest/per-rest';
import { PerHotelsPage } from './../per-hotels/per-hotels';
import { PerOtherPage } from './../per-other/per-other';
import { PerRealestatePage } from './../per-realestate/per-realestate';
import { PerTechcatPage } from './../per-techcat/per-techcat';
import { PerSellPage } from './../per-sell/per-sell';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MainService } from '../../providers/main-service';
import { UserProvider } from '../../providers/user/user';
import { PerItemdetailsPage } from '../per-itemdetails/per-itemdetails';
import { ServServicesPage } from '../serv-services/serv-services';

/**
 * Generated class for the PerHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-per-home',
  templateUrl: 'per-home.html',
})
export class PerHomePage {
  public salesCategory : any[] = [] ;
  public mainService = MainService ;
  constructor(public navCtrl: NavController, public navParams: NavParams,public userService : UserProvider) {
    for (let i = 0; i < 30; i++) {
      this.salesCategory.push( this.salesCategory.length );
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerHomePage');
    this.userService.getSalesCategory().subscribe((res)=>{
      this.salesCategory = res ;
      console.log(this.salesCategory);
    });
  }

  goitemdetails(categoryID:number){
    this.navCtrl.push(PerItemdetailsPage,categoryID);
  }
  gosellitems(){
    this.navCtrl.push(PerSellPage);
  }
  gotechnicians(){
    this.navCtrl.push(PerTechcatPage);
  }
  gorealestate(){
    this.navCtrl.push(PerRealestatePage);
  }
  gohotel(){
    this.navCtrl.push(PerHotelsPage);
  }
  gorestaurant(){
    this.navCtrl.push(PerRestPage);
  }
  goother(){
    this.navCtrl.push(PerOtherPage);
  }
  settings(){
    this.navCtrl.push(SettingsPage);
  }
  editprofile(){
    this.navCtrl.push(ProfilePage);
  }
  goinbox(){
    this.navCtrl.push(ServRequestsPage);
  }
  firstHome(){
    this.navCtrl.push(PerFirsthomePage)
  }
  goServicesProv(){
    this.navCtrl.push(ServServicesPage);
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.salesCategory.push( this.salesCategory.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
}
