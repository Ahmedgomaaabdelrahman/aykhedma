import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { IndivdualProvider } from '../../providers/indivdual/indivdual';
import { Skill } from '../../models/technician/Skill';

/**
 * Generated class for the IndivSkillsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-indiv-skills',
  templateUrl: 'indiv-skills.html',
})
export class IndivSkillsPage {
  public skills : any[] = [];
  public personid : any;
  public catskill : Skill [] = [];
  public skillid1 : number;
  public skillid2 : number;
  public skillid3 : number;

  constructor(public indivdual :IndivdualProvider ,public navCtrl: NavController, public navParams: NavParams) {
    this.personid = navParams.data.perid;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndivSkillsPage');
    this.indivdual.getSkills().subscribe((res)=>{
      this.skills = res ;
      console.log(this.skills);
    });
  }

  done(){
    let  cat1 = new Skill(this.skillid1,this.personid);
    this.catskill.push(cat1);
    let  cat2 = new Skill(this.skillid2,this.personid);
    this.catskill.push(cat2);
    let  cat3 = new Skill(this.skillid3,this.personid);
    this.catskill.push(cat3);
    console.log(cat1,cat2,cat3);
    console.log(this.catskill);
    this.indivdual.setSkills(this.catskill).subscribe((res)=>{
      console.log(res);
    });
    this.navCtrl.pop();
  }
  
}
