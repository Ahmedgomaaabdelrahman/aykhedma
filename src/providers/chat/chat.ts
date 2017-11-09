import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {ChatMessage} from "../../models/person/chat-message";
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs";
import * as firebase from "firebase";
import {Events} from "ionic-angular";
import {Person} from "../../models/person/person";
import {AngularFireAuth} from "angularfire2/auth";

/*
 Generated class for the ChatProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class ChatProvider {
  public fireDatabase : any;
  public fireAuth : any;
  public activeChatWith : Person = null;
  constructor(public afDB: AngularFireDatabase,public events: Events) {
    console.log('Hello ChatProvider Provider');
    this.fireAuth = firebase.auth();
    this.fireDatabase = firebase.database();
  }
  getMesssages(sender:string,receiver:string) : Observable<any>{
    return this.afDB
      .list('chat/'+sender+'/'+receiver+'/messages').valueChanges(['child_added']);
  }
  sendMessage(chatMessage : ChatMessage):Promise<any>{
    console.log(chatMessage);
    let promises : Promise<any>[] = [] ;
    let promise = new Promise((resolve, reject) => {
      if(chatMessage.image != null){
        this.uploadImg(chatMessage).then((snapshot)=>{
          chatMessage.image = snapshot.downloadURL;
          this.sendMessageToAll(chatMessage).then((res)=>{
            resolve(res);
          }).catch((err)=>reject(err));
        }).catch((err)=>reject(err));
      }
      else this.sendMessageToAll(chatMessage).then((res)=>{
        resolve(res);
      }).catch((err)=>reject(err));
    });
    return promise;
  }
  private sendMessageToAll(chatMessage : ChatMessage):Promise<any>{
    let promises : Promise<any>[] = [] ;
    let promise = new Promise((resolve, reject) => {
      promises.push(this.sendMessageToSender(chatMessage),
                    this.sendMessageToReceiver(chatMessage),
                    this.sendMessageToReceivedChat(chatMessage));
      Promise.all(promises).then((res)=>{
        resolve(res);
      }).catch((err)=>reject(err));
    });
    return promise;
  }
  private sendMessageToSender(chatMessage : ChatMessage):Promise<any>{
    let promise = new Promise((resolve, reject) => {
      let senderRef = this.fireDatabase.ref('chat/'+chatMessage.sender+'/'+chatMessage.receiver+'/messages');
      senderRef.push(chatMessage)
        .then(res=>resolve(res))
        .catch(err=>reject(err));
    });
    return promise ;
  }
  private sendMessageToReceiver(chatMessage : ChatMessage):Promise<any>{
    let promise = new Promise((resolve, reject) => {
      let senderRef = this.fireDatabase.ref('chat/'+chatMessage.receiver+'/'+chatMessage.sender+'/messages');;
      senderRef.push(chatMessage)
        .then(res=>resolve(res))
        .catch(err=>reject(err));
    });
    return promise ;
  }
  private sendMessageToReceivedChat(chatMessage : ChatMessage):Promise<any>{
    let promise = new Promise((resolve, reject) => {
      let senderRef = this.fireDatabase.ref('receivedChat/'+chatMessage.receiver+'/'+chatMessage.sender);
      senderRef.child('msg').set(chatMessage)
        .then(res=>resolve(res))
        .catch(err=>reject(err));
    });
    return promise ;
  }
  uploadImg(chatMessage : ChatMessage):Promise<any>{
    let promise = new Promise((resolve, reject )=>{
      let date = new Date();
      let storageRef = firebase.storage().ref("chatImages/").child('date'+date+date.getMilliseconds());
      storageRef.putString(chatMessage.image, 'base64').then((snapshot)=> {
        resolve(snapshot);
      }).catch((err)=>{reject(err)});
    });
    return promise;
  }
  attachReceivedChatListener() {
    console.log('attach chat listenerss');
    let receiverChatRef = this.fireDatabase.ref('receivedChat/' + this.fireAuth.currentUser.uid);
    receiverChatRef.on('child_changed', (snapshot) => {
      console.log(snapshot);
      console.log(snapshot.val());
      this.events.publish(ChatMessage.ReceiveMsgEvent,<ChatMessage>snapshot.val().msg);
    });
  }
  subscribeToReceivedChat(callBack : (chatMessage: ChatMessage) => void){
    this.events.subscribe(ChatMessage.ReceiveMsgEvent,callBack);
  }
  detachReceivedChatListener(){
    let ordersRef = firebase.database().ref('receivedChat/' + this.fireAuth.currentUser.uid);
    ordersRef.off();
  }
}
