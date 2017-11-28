import { ServRequestsPage } from './../serv-requests/serv-requests';
import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IndivdualProvider } from '../../providers/indivdual/indivdual';
import { PerHoteldetailsPage } from '../per-hoteldetails/per-hoteldetails';
import { concat } from 'rxjs/observable/concat';
import { MainService } from '../../providers/main-service';

/**
 * Generated class for the IndivScedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-indiv-scedule',
  templateUrl: 'indiv-scedule.html',
})
export class IndivScedulePage {
  public requets : any ;
  public id : any;
  public person : any;
  public mainService = MainService;
  constructor(public indvidual:IndivdualProvider,public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndivScedulePage');
    this.id = this.navParams.data.id;
    this.person = this.navParams.data.person;

    console.log("Scedual"+this.id);
    setInterval(function(){
        this.indvidual.getRequests(this.id).subscribe((res)=>{
      console.log(res);
      this.requets = res ;});  
    }, 1000);
    
  }
  inbox(){
    this.navCtrl.push(ServRequestsPage);
  }
  // profile(){
  //   this.navCtrl.push(PerHoteldetailsPage);
  // }
  godetails(req){
    console.log(req);
    this.navCtrl.push(PerHoteldetailsPage,{req : req , person : req.person});
    console.log( req.person);
  }
}
