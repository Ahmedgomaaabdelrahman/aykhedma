import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {ChatProvider} from "../../providers/chat/chat";
import {AngularFireAuth} from "angularfire2/auth";
import {Person} from "../../models/person/person";
import {Camera} from "@ionic-native/camera";
import {CommonMediaProvider} from "../../providers/common-media/common-media";
import {ChatMessage} from "../../models/person/chat-message";
import {User} from "../../models/user/user";

/**
 * Generated class for the ServChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-serv-chat',
  templateUrl: 'serv-chat.html',
})
export class ServChatPage {
  @ViewChild('content') content:any;
  public messages : any = [];
  public message : string = null;
  public senderUID : string ;
  public receiverUID : string ;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public chatService : ChatProvider ,public afAuth: AngularFireAuth ,
              public commonMediaService :CommonMediaProvider ) {
      this.chatService.activeChatWith = navParams.data ;
      this.senderUID = this.afAuth.auth.currentUser.uid ;
      this.receiverUID = this.chatService.activeChatWith.uid ;
      console.log('receiverUID',this.receiverUID);
      console.log('senderUIDt',this.senderUID);
  }
  ionViewDidLoad() {
    this.content.scrollToBottom(300);
    console.log('ionViewDidLoad ServChatPage');
    this.chatService.getMesssages(this.senderUID,this.receiverUID).subscribe((res)=>{
      this.messages = res ;
      this.content.scrollToBottom(300);
    });
  }
  ionViewWillLeave(){
    this.chatService.activeChatWith = null ;

  }
  sendMsg(image :string = null){
      let chatMessage : ChatMessage =
        new ChatMessage(this.message ,this.senderUID,this.receiverUID,image);
      this.chatService.sendMessage(chatMessage)
        .then(()=> this.message = '' ).catch((err)=>console.log(err));
  }
  uploadImg(){
    this.commonMediaService.galleryOrCamera().then((image : any)=>{
         this.sendMsg(image);
    }).catch((err)=>console.log(err));
  }

}
