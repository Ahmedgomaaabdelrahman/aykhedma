import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PersonProvider } from '../../providers/person/person';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  public about :any;
  constructor(private  personService :PersonProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
    this.personService.getAbout().subscribe((res)=>{
      this.about = res.about;
      console.log(res); 
      console.log(this.about);
    });
  }
 

}
