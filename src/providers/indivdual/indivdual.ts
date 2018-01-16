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
  public gettechcatUrl : string = MainService.baseUrl+"gettechcat";
  public conwithtechUrl : string = MainService.baseUrl+"connectwithtech/";
  public myRequestsUrl : string = MainService.baseUrl+"myrequest/";
  public rateUrl : string = MainService.baseUrl+"ratetechnation";
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

   setSkills(skills : Skill []  = []){
    let allbodies : any [] = [] ;
     for(let skill of skills){
      let body = {
        tech_categories_id:skill.id,
        technician_id:skill.technician_id
       };
       allbodies.push(body);  
       console.log(allbodies);
     }
     return this.http.post(this.setSkillsUrl,allbodies).map((res) => res.json());
   }

   techCetificate(certs : techCertificate [] = []){
    let allbodies : any [] = [] ;
    for(let cert of certs){
     let body = {
       image_url:cert.image_url,
       technician_id:cert.technician_id
      };
      allbodies.push(body);  
      console.log(allbodies);
    }
     return this.http.post(this.setCertsUrl,allbodies).map((res) => res.json());
   }


   setPhones(phones : Phone []= []){
    let allbodies : any [] = [] ;
     for(let phone of phones){
      let body = {
        mobile:phone.mobile,
        technician_id:phone.technician_id
       };
       allbodies.push(body);  
       console.log(allbodies);
     }
    
     return this.http.post(this.setphonesUrl,allbodies).map((res) => res.json());
   }
   
   getSkills():Observable<any>{
    return this.http.get(this.gettechcatUrl+"?lang="+MainService.lang).map((res) => res.json());
  }
  
   connectWtech(reqid , techid){
    return this.http.get(this.conwithtechUrl+reqid+"/"+techid).map((res) => res.json());
   }
   getRequests(techid){
    return this.http.get(this.myRequestsUrl+techid).map((res) => res.json());
   }
   rating(tecid , uid , rate){
     let body = {
      technician_id: tecid,
      user_id : uid,
      rate: rate
     };
    return this.http.post(this.rateUrl,body).map((res) => res.json());
   }
}
