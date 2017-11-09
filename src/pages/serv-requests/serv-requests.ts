import { ServChatPage } from './../serv-chat/serv-chat';
import { Component, ViewChild } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ChatProvider } from '../../providers/chat/chat';
import { CommonMediaProvider } from '../../providers/common-media/common-media';
import { AngularFireAuth } from 'angularfire2/auth';
import {ChatMessage} from "../../models/person/chat-message";
/**
 * Generated class for the ServRequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-serv-requests',
  templateUrl: 'serv-requests.html',
})
export class ServRequestsPage {
  @ViewChild('content') content:any;
  public messages : any = [];
  public message : string = null;
  public senderUID : string ;
  public receiverUID : string ;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public chatService : ChatProvider ,public afAuth: AngularFireAuth ,
    public commonMediaService :CommonMediaProvider) {
      this.chatService.activeChatWith = navParams.data ;
      this.senderUID = this.afAuth.auth.currentUser.uid ;
      this.receiverUID = this.chatService.activeChatWith.uid ;
  }

  ionViewDidLoad(){
    this.content.scrollToBottom(300);
    console.log('ionViewDidLoad ServChatPage');
    this.chatService.getMesssages(this.senderUID,this.receiverUID).subscribe((res)=>{
      this.messages = res ;
      console.log(res);
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
gochat(){
    this.navCtrl.push(ServChatPage);
  }
}
