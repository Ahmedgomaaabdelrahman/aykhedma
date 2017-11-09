import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvProvider } from '../../providers/service-prov/service-prov';
import { addService } from '../../models/user/addService';
import { CommonMediaProvider } from '../../providers/common-media/common-media';
import { UserProvider } from '../../providers/user/user';
import { CommonProvider } from '../../providers/common/common';
import { PersonProvider } from '../../providers/person/person';

/**
 * Generated class for the ServAddservicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-serv-addservice',
  templateUrl: 'serv-addservice.html',
})
export class ServAddservicePage {
  public salesCategory : any[] = [] ;
  public service : addService;
  constructor( public commonMediaService : CommonMediaProvider ,
      public userService : UserProvider , 
      public commonService : CommonProvider ,
      public serviceprov:ServiceProvProvider, 
      public navCtrl: NavController, public navParams: NavParams,public personService : PersonProvider) {
        this.service = new addService();
        this.service.service_provider_id = this.personService.activePerson.id;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServAddservicePage');
    this.userService.getSalesCategory().subscribe((res)=>{
      this.salesCategory = res ;
    });
  }

  recordVideo(){
    this.commonMediaService.recordVideo().then((base64:string)=>{
      console.log('video',base64);
      this.service.video_url=base64;
    }).catch((err)=>console.log(err));
  }

  recordAudio(){
    this.commonMediaService.recordAudio().then((base64:string)=>{
      console.log('Audio',base64);
      this.service.audio_url=base64;
    }).catch((err)=>console.log(err));
  }

  addImage(){
    this.commonMediaService.galleryOrCamera().then((base64:string)=>{
      console.log(base64);
      this.service.images.push(base64);
    }).catch((err)=>console.log(err))
  }

  addService(){
    console.log(this.service.images);
    this.serviceprov.addService(this.service).subscribe((res)=>{
      console.log(res);
      if(res.state == "202"){
        this.commonService.successToast();
        this.commonService.dismissLoading();
        this.navCtrl.pop();
      }
      else {this.commonService.errorToast();console.log(res.state)}
    });
  }

}
