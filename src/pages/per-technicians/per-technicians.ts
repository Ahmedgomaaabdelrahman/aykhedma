import { PerTechlocationPage } from './../per-techlocation/per-techlocation';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MainService } from '../../providers/main-service';
import { PerTechratePage } from '../per-techrate/per-techrate';




@Component({
  selector: 'page-per-technicians',
  templateUrl: 'per-technicians.html',
})
export class PerTechniciansPage {
  public techs : any [] = [] ;
  public tecNo : number ;
  public mainService = MainService;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerTechniciansPage');
    this.techs = this.navParams.data.techs;
    this.tecNo = this.techs.length;
  }
  gomaptech(item : any){
    this.navCtrl.push(PerTechratePage,{tech:item, reqid:item.id});
  }

  gomap(){
    this.navCtrl.push(PerTechlocationPage , {tecNo : this.tecNo ,alltechs : this.techs});
  }
}
