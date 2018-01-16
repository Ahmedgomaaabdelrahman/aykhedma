import { PerTechniciansPage } from './../per-technicians/per-technicians';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { TechRequest } from '../../models/technician/techRequest';
import { concat } from 'rxjs/operator/concat';
import { CommonMediaProvider } from '../../providers/common-media/common-media';
import { CommonProvider } from '../../providers/common/common';
import { PersonProvider } from '../../providers/person/person';

/**
 * Generated class for the PerTechreqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-per-techreq',
  templateUrl: 'per-techreq.html',
})
export class PerTechreqPage {
  public catid: any;
  public techReq: TechRequest;

  constructor(public commonMediaService: CommonMediaProvider, public personService: PersonProvider,
    public commonService: CommonProvider, public userProvider: UserProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.techReq = new TechRequest();
    console.log(this.personService.activePerson.id);
    this.techReq.user_id = this.personService.activePerson.id;
    console.log(this.techReq.user_id);
    this.techReq.tech_categories_id = this.navParams.data.catid;
    console.log(this.techReq.tech_categories_id);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerTechreqPage');
  }
  gotechnicians() {
    this.navCtrl.push(PerTechniciansPage);
  }

  search() {
    this.userProvider.searchTech(this.techReq).subscribe((res) => {
      this.navCtrl.push(PerTechniciansPage, { techs: res });
      console.log(res);
    });
  }

  recordVideo() {
    this.commonMediaService.recordVideo().then((base64: string) => {
      console.log('video', base64);
      this.techReq.video_url = base64;
    }).catch((err) => console.log(err));
  }
  recordAudio() {
    this.commonMediaService.recordAudio().then((base64: string) => {
      console.log('Audio', base64);
      this.techReq.audio_url = base64;
    }).catch((err) => console.log(err));
  }
  addImage() {
    this.commonMediaService.galleryOrCamera().then((base64: string) => {
      this.techReq.images.push("data:image/png;base64," + base64);
      console.log(this.techReq.images);
    }).catch((err) => console.log(err))
  }
}
