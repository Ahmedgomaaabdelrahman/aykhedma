import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersonProvider } from '../../providers/person/person';
import { CommonProvider } from '../../providers/common/common';
import { CommonMediaProvider } from '../../providers/common-media/common-media';
import { MainService } from '../../providers/main-service';
import { PersonFBCredentials } from '../../models/person/person-firebase-credentials';


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
               
  }

  ionViewDidLoad() {
    console.log(this.personProvider.currentUser);
    console.log('ionViewDidLoad EditaccountPage');
    if(this.personProvider.currentUser.type == "1" || this.personProvider.currentUser.type == "2"){
      this.imgurl = this.mainService.imageUrl+this.personProvider.currentUser.profile_image;      
    }
    else if(this.personProvider.currentUser.type == "3"){
      this.imgurl = this.mainService.imageUrl+this.personProvider.currentUser.technation[0].indvudal_tech[0].profile_image;      
    }
  }
  addImage(){
   
    this.commonMediaService.galleryOrCamera().then((base64:string)=>{ 
    this.com.presentLoading("Please Wait ...");
    this.imgurl = "data:image/png;base64,"+base64;
    this.com.dismissLoading();
    
    // this.com.presentToast("basefromno1"+base64);
  }).catch((err)=>console.log(err))
}
  userUpdate(inputs : any){
    var user =  this.personProvider.FBUpdate();
    user.updateEmail(inputs.email).then(()=>{
      user.updatePassword(inputs.password).then(()=>{
        if(this.personProvider.currentUser.type == "1" ||this.personProvider.currentUser.type == "2"){
          this.personProvider.userUpdate(inputs.name,inputs.mobile,inputs.email,inputs.password,this.imgurl).subscribe((res)=>{
            console.log(res);
            this.personProvider.currentUser = res;
          })
        }
        else if(this.personProvider.currentUser.type == "3"){
          this.personProvider.techUpdate(inputs.name,inputs.mobile,inputs.email,inputs.password,this.imgurl).subscribe((res)=>{
            console.log(res);
            this.personProvider.currentUser = res;
          })
        }
        
      });
      })
 
    
     
      this.navCtrl.pop();
    
  }

  
}
