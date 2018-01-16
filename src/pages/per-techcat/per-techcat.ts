import { PerTechreqPage } from './../per-techreq/per-techreq';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IndivdualProvider } from '../../providers/indivdual/indivdual';
import { MainService } from '../../providers/main-service';

/**
 * Generated class for the PerTechcatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-per-techcat',
  templateUrl: 'per-techcat.html',
})
export class PerTechcatPage {
  
  public cats : any [] = [];
  public mainService  = MainService ;
  constructor(public indiv:IndivdualProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.indiv.getSkills().subscribe((res)=> {
      this.cats = res ;
      console.log(this.cats);
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerTechcatPage');
    this.indiv.getSkills().subscribe((res)=> {
        this.cats = res ;
        console.log(this.cats);
    });
  }
  goreq(catid : number){
    this.navCtrl.push(PerTechreqPage,{catid : catid});
  }
}
