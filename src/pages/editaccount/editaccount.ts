import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersonProvider } from '../../providers/person/person';
import { CommonProvider } from '../../providers/common/common';
import { CommonMediaProvider } from '../../providers/common-media/common-media';
import { MainService } from '../../providers/main-service';


@Component({
  selector: 'page-editaccount',
  templateUrl: 'editaccount.html',
})
export class EditaccountPage {
  public user : any;
  public imgurl :string;
  public mainService = MainService;
  constructor(public com:CommonProvider,
              public commonMediaService : CommonMediaProvider,
              public personProvider:PersonProvider,
              public navCtrl: NavController, 
              public navParams: NavParams) {
                this.imgurl = this.mainService.imageUrl+this.personProvider.currentUser.profile_image;
  }

  ionViewDidLoad() {
    console.log(this.personProvider.currentUser);
    console.log('ionViewDidLoad EditaccountPage');
  }
  addImage(){
    this.com.presentLoading("Please Wait ...");
    this.commonMediaService.galleryOrCamera().then((base64:string)=>{ 
    this.com.dismissLoading();
    this.imgurl = "data:image/png;base64,"+base64;
    // this.com.presentToast("basefromno1"+base64);
  }).catch((err)=>console.log(err))
}
  userUpdate(inputs : any){
    this.personProvider.userUpdate(inputs.name,inputs.mobile,inputs.email,inputs.password,this.imgurl).subscribe((res)=>{
      console.log(res);
      this.personProvider.currentUser = res;
      this.navCtrl.pop();
    });
  }

  
}
