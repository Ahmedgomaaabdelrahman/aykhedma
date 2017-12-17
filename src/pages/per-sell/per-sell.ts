import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {CommonMediaProvider} from "../../providers/common-media/common-media";
import {UserProvider} from "../../providers/user/user";
import {SalesRequest} from "../../models/user/sales/sales-request";
import {CommonProvider} from "../../providers/common/common";
import {PersonProvider} from "../../providers/person/person";
import {PerOtherPage} from "../per-other/per-other";

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
  constructor(public navCtrl: NavController, public navParams: NavParams , public commonMediaService : CommonMediaProvider ,
              public userService : UserProvider , public commonService : CommonProvider , public personService :PersonProvider) {

    this.salesRequest = new SalesRequest();
    this.salesRequest.user_id = this.personService.activePerson.id ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerSellPage');
    this.userService.getSalesCategory().subscribe((res)=>{
      this.salesCategory = res ;
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
          this.navCtrl.push(PerOtherPage);
        }
        else this.commonService.errorToast();
      });
  }
}
