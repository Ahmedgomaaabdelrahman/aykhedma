import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { MainService } from '../main-service';
import { IndividualTech } from '../../models/technician/individual-tech';
import { Skill } from '../../models/technician/Skill';
import { techCertificate } from '../../models/technician/certificate';
import { Phone } from '../../models/technician/phones';

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
  
   registName(technicion : IndividualTech){
     let body = {
      name:technicion.name,
      mobile:technicion.mobile,
      password:technicion.password,
      email:technicion.email,
      type:technicion.type,
      u_id:technicion.id,
      Locatoin:technicion.locations
     };
     return this.http.post(this.techRegUrl,body).map((res) => res.json());
   }

   setSkills(skill : Skill){
     let body = {
      name:skill.name,
      technician_id:skill.technician_id
     };
     return this.http.post(this.setSkillsUrl,body).map((res) => res.json());
   }

   techCetificate(cetificate : techCertificate){
    let body = {
      name:cetificate.image_url,
      technician_id:cetificate.technician_id
     };
     return this.http.post(this.setCertsUrl,body).map((res) => res.json());
   }


   setPhones(Phone : Phone){
    let body = {
      name:Phone.mobile,
      technician_id:Phone.technician_id
     };
     return this.http.post(this.setphonesUrl,body).map((res) => res.json());
   }

   registRest(technicion : IndividualTech){
    let body = {
      nationality:technicion.nationality,
      available_hours:technicion.availableHours,
      experience:technicion.experience,
      type:technicion.type
     };
     return this.http.post(this.setNewTechUrl,body).map((res) => res.json());
   }


   registBD(technicion : IndividualTech){
    let body = {
      birth_date:technicion.birthDate,
      profile_image:technicion.profileImage,
      identity_front_url:technicion.identityFront,
      identity_back_url:technicion.identityBack,
      tech_category_id:technicion.techCategoryID,
      office_tech_id:technicion.officeTechID
     };
     return this.http.post(this.setindTecUrl,body).map((res) => res.json());
   }
}
