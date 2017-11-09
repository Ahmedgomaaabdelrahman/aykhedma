import * as firebase from "firebase";
export class ChatMessage {
  public static readonly ReceiveMsgEvent : string = 'chatMsg:receive' ;
  public date : any ;
  constructor(public msg: string,
              public sender: string,
              public receiver : string ,
              public image : string = null) {
    this.date = firebase.database.ServerValue.TIMESTAMP ;
  }
}
