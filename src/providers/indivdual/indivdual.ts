import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { MainService } from '../main-service';
import { IndividualTech } from '../../models/technician/individual-tech';
import { Skill } from '../../models/technician/Skill';
import { techCertificate } from '../../models/technician/certificate';
import { Phone } from '../../models/technician/phones';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the IndivdualProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IndivdualProvider {

  public techRegUrl : string = MainService.baseUrl+"technicion";
  public setSkillsUrl : string = MainService.baseUrl+"skills";
  public setphonesUrl : string = MainService.baseUrl+"langandphone";
  public setCertsUrl : string = MainService.baseUrl+"teccetifcat";
  public setNewTechUrl : string = MainService.baseUrl+"setnewtec";
  public setindTecUrl : string = MainService.baseUrl+"setindividualtec";


  constructor(public http: Http) {
    console.log('Hello IndivdualProvider Provider');
  }
  
   register(technicion : IndividualTech) : Observable<any>{
     let body = {
      name  :technicion.name,
      mobile : technicion.mobile,
      password : technicion.password,
      email : technicion.email,
      type : technicion.type,
      u_id : technicion.uid,  
      nationality : technicion.nationality,
      available_hours : technicion.availableHours,
      experience : technicion.experience,
      birth_date : technicion.birthDate,
      profile_image : technicion.profileImage,
      identity_front_url : technicion.identityFront,
      identity_back_url : technicion.identityBack,
      tech_category_id : technicion.techCategoryID,
      office_tech_id : technicion.officeTechID,
      Locatoin : technicion.locations
     };
     return this.http.post(this.techRegUrl,body).map((res) => res.json());
   }

   setSkills(name , ){
     let body = {
      name:skill.name,
      technician_id:skill.technician_id
     };
     return this.http.post(this.setSkillsUrl,body).map((res) => res.json());
   }

   techCetificate(image_url ,tecid){
    let body = {
      image_url : image_url,
      technician_id : tecid
     };
     return this.http.post(this.setCertsUrl,body).map((res) => res.json());
   }


   setPhones(mobile , tecid){
    let body = {
      mobile:mobile,
      technician_id:tecid
     };
     return this.http.post(this.setphonesUrl,body).map((res) => res.json());
   }

}
