import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MainService} from "../../providers/main-service";
import {ServChatPage} from "../serv-chat/serv-chat";
import {PersonProvider} from "../../providers/person/person";
import {StreamingMedia, StreamingVideoOptions, StreamingAudioOptions} from "@ionic-native/streaming-media";

/**
 * Generated class for the AdsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ads-details',
  templateUrl: 'ads-details.html',
})
export class AdsDetailsPage {
  public item : any ;
  public mainService  = MainService ;
  constructor(public navCtrl: NavController, public navParams: NavParams ,
              public personService : PersonProvider , public streamingMedia : StreamingMedia) {
    this.item = this.navParams.data ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdsDetailsPage');
  }
  goToChat(person : any){
    this.navCtrl.push(ServChatPage,this.personService.preparePersonObj(person));
  }
  startVideo(videoUrl : string) {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Finished Video') },
      errorCallback: (e) => { console.log('Error: ', e) },
      orientation: 'portrait'
    };
    this.streamingMedia.playVideo(this.mainService.imageUrl+videoUrl, options);
  }

  startAudio(audioUrl : string) {
    let options: StreamingAudioOptions = {
      successCallback: () => { console.log('Finished Audio') },
      errorCallback: (e) => { console.log('Error: ', e) },
      initFullscreen: false // iOS only!
    };
    this.streamingMedia.playAudio(this.mainService.imageUrl, options);
  }

}
