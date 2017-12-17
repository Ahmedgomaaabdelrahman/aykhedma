import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {PersonFBCredentials} from "../../models/person/person-firebase-credentials";
import {AngularFireAuth} from "angularfire2/auth";
import {PersonLoginCred} from "../../models/person/person-login-credentials";
import {MainService} from "../main-service";
import {Observable} from "rxjs";
import {Person} from "../../models/person/person";
import {User} from "../../models/user/user";
import { ServiceProv } from '../../models/user/serviceprov';
import { IndividualTech } from '../../models/technician/individual-tech';

/*
  Generated class for the PersonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PersonProvider {
  public activePerson :Person = null;
  
  public currentUser : any = null;

  public personLoginUrl : string = MainService.baseUrl+"login";
  public getPersonUrl : string = MainService.baseUrl+"getuser/";
  public updatePersonUrl : string = MainService.baseUrl+"updatenormaluser/";
  public updateTechUrl : string = MainService.baseUrl+"updatetechbicion/"; 
  public getAddsUrl : string = MainService.baseUrl+"getusersadds/";
  public AboutUrl : string = MainService.baseUrl+"getaboutpolicy";
  public getTechsUrl : string = MainService.baseUrl+"gettechtorate/"

  constructor(public http: Http,public afAuth: AngularFireAuth) {
    console.log('Hello PersonProvider Provider');
  }
  FBRegister(personFBCred : PersonFBCredentials):Promise<any>{
    return this.afAuth.auth.createUserWithEmailAndPassword(personFBCred.email , personFBCred.password);
  }
  FBLogin(personFBCred : PersonFBCredentials): Promise<any>{
    return this.afAuth.auth.signInWithEmailAndPassword(personFBCred.email , personFBCred.password);
  }
  FBUpdate(){
    var user = this.afAuth.auth.currentUser;
    return user;
  }
  personLogin(personLoginCred : PersonLoginCred ):Observable<any>{
    let body = {
      mobile : personLoginCred.mobile ,
      password : personLoginCred.password
    };
    return this.http.post(this.personLoginUrl,body).map((res) => res.json());
  }
  preparePersonObj(personObj : any) : Person {
    let person : Person ;
    switch(personObj.type) {
      case "1" : person = new User();
        break;
      case "2" : person = new ServiceProv();
        break;  
      case "3" : person = new IndividualTech();
        break;   
    }
    person.name = personObj.name ;
    person.email = personObj.email ;
    person.mobile = personObj.mobile ;
    
    person.uid = personObj.u_id ;
    person.id = personObj.id;
    return person;
  }
  getPersonData(uid:string):Observable<Person>{
    return this.http.get(this.getPersonUrl+uid).map((res) => res.json()).map((res)=> this.preparePersonObj(res));
  }


  userUpdate(name,mobile,email,password,img)
  { 
    let user = {
      name : name ,
      mobile : mobile ,
      password : password ,
      email : email ,
      profile_image :img

    };
   return this.http.put(this.updatePersonUrl+this.currentUser.id,user).map((res) => res.json());
  }


  techUpdate(name,mobile,email,password,img)
  {   
    let user = {
      name : name ,
      mobile : mobile ,
      password : email ,
      email : password ,
      profile_image :img

    };
   return this.http.put(this.updateTechUrl+this.currentUser.id,user).map((res) => res.json());
  }
  getAdds(){
    return this.http.get(this.getAddsUrl+this.currentUser.id).map((res) => res.json());
   }
   getAbout(){
    return this.http.get(this.AboutUrl+"?lang="+MainService.lang).map((res) => res.json());
   }
   getMytechs(){
    return this.http.get(this.getTechsUrl+this.currentUser.id).map((res) => res.json());
   }
}
