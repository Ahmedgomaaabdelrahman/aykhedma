import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import {MainService} from "../../providers/main-service";
import {ServChatPage} from "../serv-chat/serv-chat";
import {PersonProvider} from "../../providers/person/person";
import {AdsDetailsPage} from "../ads-details/ads-details";
import { PerSellPage } from '../per-sell/per-sell';
import { CommonProvider } from "../../providers/common/common";
import { WelcomePage } from "../welcome/welcome";

import { Geolocation } from '@ionic-native/geolocation';
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
  public cname : string;
  public cityName : string;
  
  public mainService  = MainService ;
  constructor(public http: Http,private geolocation: Geolocation,public navCtrl: NavController, public navParams: NavParams , public userService : UserProvider ,
              public personService : PersonProvider,public comm:CommonProvider,) {
    this.catID = this.navParams.data.categoryID ;
    this.cname = this.navParams.data.name ;
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad PerItemdetailsPage');
   


    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log(resp);
      console.log(resp.coords);
      this.getCityName(resp.coords.latitude,resp.coords.longitude).subscribe((res)=>{
        console.log(res);
        console.log(res.results[0].address_components[3].long_name);
        this.userService.getSalesByCat(this.catID , res.results[0].address_components[3].long_name).subscribe((res)=>{
          this.catItems = res ;
          console.log(res);
        });
      });
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  getCityName(lat : number , lng : number):Observable<any>{
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key=AIzaSyCYFqMKHgmsx_Jn0PailkhqazDIeOCS-oQ&language=en")
      .map((res) => res.json());
    // res.results[res.results.length-2].address_components[0].long_name
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
  goToAddDetails(item : any){
    this.navCtrl.push(AdsDetailsPage,item);
  }
  addNew(){
    if(this.personService.currentUser == null){
       
       this.comm.presentToast("يجب التسجيل اولا");
      this.navCtrl.push(WelcomePage);
    }
    else{
      this.navCtrl.push(PerSellPage);
    }
    
  }

}
