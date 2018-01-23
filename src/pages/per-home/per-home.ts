import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
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
import { PersonProvider } from "../../providers/person/person";
import { CommonProvider } from "../../providers/common/common";
import { WelcomePage } from "../welcome/welcome";

import { Geolocation } from '@ionic-native/geolocation';
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
  public searchInput : any;
  public showSearch : boolean = false ;
  public searchItems : any [] = [];
  constructor(public http: Http,private geolocation: Geolocation,public comm:CommonProvider,public navCtrl: NavController,public personService: PersonProvider, public navParams: NavParams,public userService : UserProvider) {
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

  getItems(){
    if(this.searchInput != ''){
      this.showSearch = true;
      this.geolocation.getCurrentPosition().then((resp) => {
        // resp.coords.latitude
        // resp.coords.longitude
        console.log(resp);
        console.log(resp.coords);
        this.getCityName(resp.coords.latitude,resp.coords.longitude).subscribe((res)=>{
          console.log(res);
          console.log(res.results[0].address_components[3].long_name);
          
            this.userService.searchItems(this.searchInput,res.results[0].address_components[3].long_name).subscribe((res)=>{
             this.searchItems = res;
             console.log(res);
           });
          
        });
       }).catch((error) => {
         console.log('Error getting location', error);
       });
    }
    else {
      this.showSearch = false ;
    }
    
  }
  getCityName(lat : number , lng : number):Observable<any>{
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key=AIzaSyCYFqMKHgmsx_Jn0PailkhqazDIeOCS-oQ&language=en")
      .map((res) => res.json());
    // res.results[res.results.length-2].address_components[0].long_name
  }

  goitemdetails(name_ar:string,categoryID:number){
    this.navCtrl.push(PerItemdetailsPage,{categoryID:categoryID , name : name_ar});
  }
  gosellitems(){
    this.navCtrl.push(PerSellPage);
  }
  gotechnicians(){
     if(this.personService.currentUser == null){
      this.comm.presentToast("يجب التسجيل اولا");
      this.navCtrl.push(WelcomePage);
    }
    else{
       this.navCtrl.push(PerTechcatPage);
    }

   
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
