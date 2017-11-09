import { Component } from '@angular/core';
import {NavController, NavParams, ModalController} from 'ionic-angular';
import {Person} from "../../models/person/person";
import {ServiceProvProvider} from "../../providers/service-prov/service-prov";
import {Location} from "../../models/person/location";
import { ServiceProv } from '../../models/user/serviceprov';
import { ServProviderCats } from '../../models/person/servProvCats';

/**
 * Generated class for the ServSignipindusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-serv-signipindus',
  templateUrl: 'serv-signipindus.html',
})
export class ServSignipindusPage {
  public person : ServiceProv;
  public Categories : any[] = [] ;
  public catid1 : any = 0 ;
  public catid2 : any = 0;
  public catid3 : any = 0;
  
 

  // public certificate1 : 
  constructor(public serviceProv:ServiceProvProvider,public navCtrl: NavController, public navParams: NavParams,public modalCtrl : ModalController) {
    this.person = navParams.data.person;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServSignipindusPage');
    this.serviceProv.getServiceCategory().subscribe((res)=>{
      this.Categories = res;
      console.log(res);
      console.log(this.Categories);
    });
  }

  pushCats(){
    let  cat1 = new ServProviderCats(this.catid1);
    let  cat2 = new ServProviderCats(this.catid2);
    let  cat3 = new ServProviderCats(this.catid3);
    console.log(cat1,cat2,cat3);
    this.person.serviceProCats.push(cat1,cat2,cat3);
    console.log(this.person.serviceProCats);
    this.navCtrl.pop();
  }
 
}
