import { YouraddsPage } from './../youradds/youradds';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PersonProvider } from '../../providers/person/person';
import { MainService } from '../../providers/main-service';


@Component({
  selector: 'page-myadds',
  templateUrl: 'myadds.html',
})
export class MyaddsPage {
 public adds : any [] = [];
 public mainService = MainService;
  constructor(public person:PersonProvider, public navCtrl: NavController, public navParams: NavParams) {
     this.person.getAdds().subscribe((res)=>{
       console.log(res);
       this.adds = res;
     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyaddsPage');
  }
  youradds(add : any){
    this.navCtrl.push(YouraddsPage,{add : add});
  }

}
