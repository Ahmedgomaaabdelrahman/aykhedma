import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { PersonProvider } from '../../providers/person/person';

/**
 * Generated class for the TermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html',
})
export class TermsPage {
 public terms :any;

  constructor(private  personService :PersonProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsPage');
    this.personService.getAbout().subscribe((res)=>{
      this.terms = res.policy;
      console.log(res);
      console.log(this.terms);
    });
  }

}
