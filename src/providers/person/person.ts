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

/*
  Generated class for the PersonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PersonProvider {
  public activePerson :Person = null;

  public personLoginUrl : string = MainService.baseUrl+"login";
  public getPersonUrl : string = MainService.baseUrl+"getuser/";




  constructor(public http: Http,public afAuth: AngularFireAuth) {
    console.log('Hello PersonProvider Provider');
  }
  FBRegister(personFBCred : PersonFBCredentials):Promise<any>{
    return this.afAuth.auth.createUserWithEmailAndPassword(personFBCred.email , personFBCred.password);
  }
  FBLogin(personFBCred : PersonFBCredentials): Promise<any>{
    return this.afAuth.auth.signInWithEmailAndPassword(personFBCred.email , personFBCred.password);
  }
  personLogin(personLoginCred : PersonLoginCred ):Observable<any>{
    let body = {
      mobile : personLoginCred.mobile ,
      password : personLoginCred.password
    };
    return this.http.post(this.personLoginUrl,body).map((res) => res.json());
  }
  preparePersonObj(personObj : any):Person{
    let person : Person ;
    switch(personObj.type) {
      case Person.USER_MODE : person = new User();
        break;
      case Person.ServProv_MODE : person = new ServiceProv();
        break;  
    }
    person.email = personObj.email ;
    person.mobile = personObj.mobile ;
    person.name = personObj.name ;
    person.uid = personObj.u_id ;
    person.id = personObj.id;
    return person;
  }
  getPersonData(uid:string):Observable<Person>{
    return this.http.get(this.getPersonUrl+uid).map((res) => res.json()).map((res)=> this.preparePersonObj(res));
  }

}
