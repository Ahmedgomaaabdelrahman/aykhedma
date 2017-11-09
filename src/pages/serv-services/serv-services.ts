import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { MainService } from '../../providers/main-service';
import { PerItemdetailsPage } from '../per-itemdetails/per-itemdetails';
import { ServicesdetailsPage } from '../servicesdetails/servicesdetails';



@Component({
  selector: 'page-serv-services',
  templateUrl: 'serv-services.html',
})
export class ServServicesPage {
  public salesCategory : any[] = [] ;
  public mainService = MainService ;
  constructor(public navCtrl: NavController, public navParams: NavParams,public userService : UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServServicesPage');
    this.userService.getSalesCategory().subscribe((res)=>{
      this.salesCategory = res ;
      console.log(this.salesCategory);
    });
  }
  goitemdetails(categoryID:number){
    this.navCtrl.push(ServicesdetailsPage,categoryID);
  }
}
