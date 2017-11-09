import { WelcomelanguagePage } from './../pages/welcomelanguage/welcomelanguage';
import { WelcomePage } from './../pages/welcome/welcome';
import {Component, ViewChild} from '@angular/core';
import {Platform, AlertController, NavController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import {MainService} from "../providers/main-service";
import { SplashScreen } from '@ionic-native/splash-screen';
import {TranslateService} from "@ngx-translate/core";
import {ChatProvider} from "../providers/chat/chat";
import {ChatMessage} from "../models/person/chat-message";
import {ServChatPage} from "../pages/serv-chat/serv-chat";
import {PersonProvider} from "../providers/person/person";
import {Person} from "../models/person/person";

// import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public  MainService = MainService;
  rootPage:any = WelcomelanguagePage;
  @ViewChild('nav') nav:NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public translate : TranslateService ,
              public chatService : ChatProvider ,public personService : PersonProvider, public alertCtrl : AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      platform.pause.subscribe(() => {
        console.log('[INFO] App paused');
      });
      platform.resume.subscribe(() => {
        console.log('[INFO] App resumed');
      });

      this.chatService.subscribeToReceivedChat((chatMessage : ChatMessage)=> {
        // let view = this.nav.getActive();
        // console.log(view.component);
        if(this.chatService.activeChatWith == null ||
          this.chatService.activeChatWith.uid != chatMessage.sender)
          this.chatMsgReceiveAlert(chatMessage.sender);
        console.log('app.component',chatMessage.sender);
      });

    });

     platform.setDir('rtl', true);
     this.translate.setDefaultLang('ar');
  }
  chatMsgReceiveAlert(senderUid : string) {
    let alert = this.alertCtrl.create({
      title: 'user Id : '+senderUid,
      message: 'Do you want to go to orders?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            this.personService.getPersonData(senderUid).subscribe((person : Person)=>{
              this.nav.push(ServChatPage,person);
            });
          }
        }
      ]
    });
    alert.present();
  }



}

