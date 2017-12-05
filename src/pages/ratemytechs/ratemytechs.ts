import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersonProvider } from '../../providers/person/person';
import { MainService } from '../../providers/main-service';
import { IndivdualProvider } from '../../providers/indivdual/indivdual';


@Component({
  selector: 'page-ratemytechs',
  templateUrl: 'ratemytechs.html',
})
export class RatemytechsPage {
  public yourTechs : any;
  public rateNo:number=0;
  public iconss:string[];

  public mainService = MainService;
  constructor(private indiv: IndivdualProvider,private personProvider:PersonProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RatemytechsPage');
    this.personProvider.getMytechs().subscribe((res)=>{
       this.yourTechs = res;
       console.log(this.yourTechs);
    });
  }
  

  customerRate(rateNo : number){
    this.rateNo = rateNo ;
    this.iconss = this.icons(rateNo);
    // this.commonService.successToast();
  }
  // getIcons(rate : number)
  // {
  //    this.iconss = this.icons(rate);
  // }
  public icons(rate : number): string[] {
    let icons = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rate) {
        icons.push('star');
      }
      else {
        icons.push('star-outline');
      }
    }
    return icons;
  }
  addrate(tech){
    tech.your_rate++;
    return tech.your_rate;
  }
  removerate(tech){
    tech.your_rate--;
    return tech.your_rate;
  }
  setrate(technician_id,rate){
    this.indiv.rating(technician_id,this.personProvider.currentUser.id,rate).subscribe((res)=>{
      console.log(res);
    });
  }
}
