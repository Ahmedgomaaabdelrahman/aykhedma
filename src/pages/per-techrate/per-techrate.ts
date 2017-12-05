import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { IndivdualProvider } from '../../providers/indivdual/indivdual';
import { MainService } from '../../providers/main-service';
import { CommonProvider } from '../../providers/common/common';
import { HomePage } from '../home/home';
import { IndivScedulePage } from '../indiv-scedule/indiv-scedule';
import { PerFirsthomePage } from '../per-firsthome/per-firsthome';

/**
 * Generated class for the PerTechratePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-per-techrate',
  templateUrl: 'per-techrate.html',
})
export class PerTechratePage {
  public techss : any;
  public rateNo:number=0;
  public reqid : any;
  public mainService = MainService;
  constructor(public com : CommonProvider,public tech : IndivdualProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.techss = this.navParams.data.tech;
    this.reqid = this.navParams.data.reqid;
    console.log(this.techss);
    console.log(this.reqid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerTechratePage');
  }
 
  confirm(){
   this.tech.connectWtech(this.reqid,this.techss.technician_id).subscribe((res)=>{
     console.log(res);
     if(res.state = "202"){
    this.com.presentToast("برجاء انتظار الفنى لحين قبول الطلب");
    this.navCtrl.setRoot(PerFirsthomePage);
     }

   });
  }
}
