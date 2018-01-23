import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {CommonMediaProvider} from "../../providers/common-media/common-media";
import {UserProvider} from "../../providers/user/user";
import {SalesRequest} from "../../models/user/sales/sales-request";
import {CommonProvider} from "../../providers/common/common";
import {PersonProvider} from "../../providers/person/person";
import {PerOtherPage} from "../per-other/per-other";
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the PerSellPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-per-sell',
  templateUrl: 'per-sell.html',
})
export class PerSellPage {
  public salesCategory : any[] = [] ;
  public salesRequest : SalesRequest ;
  constructor(public http: Http,private geolocation: Geolocation,public navCtrl: NavController, public navParams: NavParams , public commonMediaService : CommonMediaProvider ,
              public userService : UserProvider , public commonService : CommonProvider , public personService :PersonProvider) {

    this.salesRequest = new SalesRequest();
    this.salesRequest.user_id = this.personService.activePerson.id ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerSellPage');
    this.userService.getSalesCategory().subscribe((res)=>{
      this.salesCategory = res ;
    });

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log(resp);
      console.log(resp.coords);
      this.getCityName(resp.coords.latitude,resp.coords.longitude).subscribe((res)=>{
        console.log(res);
        console.log(res.results[0].address_components[3].long_name);
        this.salesRequest.city = res.results[0].address_components[3].long_name;
      });
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
  recordVideo(){
    this.commonMediaService.recordVideo().then((base64:string)=>{
      console.log('video',base64);
      this.salesRequest.video_url=base64;
    }).catch((err)=>console.log(err));
  }
  recordAudio(){
    this.commonMediaService.recordAudio().then((base64:string)=>{
      console.log('Audio',base64);
      this.salesRequest.audio_url=base64;
    }).catch((err)=>console.log(err));
  }
  addImage(){
    this.commonMediaService.galleryOrCamera().then((base64:string)=>{
      this.salesRequest.images.push("data:image/png;base64,"+base64);
    }).catch((err)=>console.log(err))
  }
  confirm(){
  
      this.userService.setItem(this.salesRequest).subscribe((res)=>{
        this.commonService.presentLoading("Please Wait ...");
        if(res.State == "202"){
          this.commonService.successToast();
          this.commonService.dismissLoading();
          this.navCtrl.pop();
        }
        else this.commonService.errorToast();
      });
  }

  getCityName(lat : number , lng : number):Observable<any>{
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key=AIzaSyCYFqMKHgmsx_Jn0PailkhqazDIeOCS-oQ&language=en")
      .map((res) => res.json());
    // res.results[res.results.length-2].address_components[0].long_name
  }
}
