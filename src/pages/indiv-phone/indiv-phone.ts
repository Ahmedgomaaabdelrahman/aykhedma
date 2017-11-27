import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Phone } from '../../models/technician/phones';
import { IndivdualProvider } from '../../providers/indivdual/indivdual';

/**
 * Generated class for the IndivPhonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-indiv-phone',
  templateUrl: 'indiv-phone.html',
})
export class IndivPhonePage {
  public phones : Phone [] = [];
  public personid : any;
  public Number1 : string;
  public Number2 : string;
  public Number3 : string;

  constructor(public indivdual :IndivdualProvider ,public navCtrl: NavController, public navParams: NavParams) {
    this.personid = navParams.data.perid;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndivPhonePage');
  }
  done(){
    let  cat1 = new Phone(this.Number1,this.personid);
    this.phones.push(cat1);
    let  cat2 = new Phone(this.Number2,this.personid);
    this.phones.push(cat2);
    let  cat3 = new Phone(this.Number3,this.personid);
    this.phones.push(cat3);
    console.log(cat1,cat2,cat3);
    console.log(this.phones);
    this.indivdual.setPhones(this.phones).subscribe((res)=>{
      console.log(res);
    });
    this.navCtrl.pop();
  }
}
