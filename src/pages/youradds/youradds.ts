import { DeleteaddsPage } from './../deleteadds/deleteadds';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MainService } from '../../providers/main-service';
import { UserProvider } from '../../providers/user/user';
import { CommonMediaProvider } from '../../providers/common-media/common-media';
import { CommonProvider } from '../../providers/common/common';

@Component({
  selector: 'page-youradds',
  templateUrl: 'youradds.html',
})
export class YouraddsPage {
  public Add : any;
  public mainService = MainService;
  public salesCategory : any [] = [] ;
  
  constructor(public commonMediaService : CommonMediaProvider ,
    public userService : UserProvider , public commonService : CommonProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.Add = this.navParams.data.add;
    console.log(this.Add);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YouraddsPage');
    this.userService.getSalesCategory().subscribe((res)=>{
      this.salesCategory = res ;
      console.log(this.salesCategory);
    });
    this.Add = this.navParams.data.add;
    console.log(this.Add);
  }
  DeleteAdds(){
    this.userService.deleteItem(this.Add.id).subscribe((res)=>{
      console.log(res);
      this.navCtrl.pop();
    });
    
  }
  updateAdd(inputs : any){
    this.userService.updateItem(this.Add.id,
                                inputs.title,
                                inputs.description,
                                inputs.mobile,
                                inputs.email,
                                this.Add.video_url,
                                this.Add.audio_url,
                                this.Add.show,
                                inputs.sales_category_id).subscribe((res)=>
{
  console.log(res);
  this.navCtrl.pop();
});
}
recordVideo(){
  this.commonMediaService.recordVideo().then((base64:string)=>{
    console.log('video',base64);
    this.Add.video_url=base64;
  }).catch((err)=>console.log(err));
}
recordAudio(){
  this.commonMediaService.recordAudio().then((base64:string)=>{
    console.log('Audio',base64);
    this.Add.audio_url=base64;
  }).catch((err)=>console.log(err));
}
addImage(){
  this.commonMediaService.galleryOrCamera().then((base64:string)=>{
    this.Add.images.push("data:image/png;base64"+base64);
  }).catch((err)=>console.log(err))
}

deleteImg(imgid){ 
 
  this.userService.deleteItemImg(imgid).subscribe((res)=>{
    console.log(this.Add.images);
    console.log(res);
    console.log(res);
    if(res.state == "202"){
      this.Add.images = this.Add.images.filter((item) => {
        if(item.id == imgid)
        {
          this.Add.images -= item.id;
  
        }
  
        return (item.id != imgid);
      })
    }
  });
}
  
}
