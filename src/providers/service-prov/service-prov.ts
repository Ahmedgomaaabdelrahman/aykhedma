import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {MainService} from "../main-service";
import {ServiceProv} from "../../models/user/serviceprov";
import {Observable} from "rxjs";
import { addService } from '../../models/user/addService';



@Injectable()
export class ServiceProvProvider {
  public serProRegUrl : string = MainService.baseUrl+"serviceprovider";
  public getCategoryUrl : string = MainService.baseUrl+"getservicecategroy";
  public addServiceUrl : string = MainService.baseUrl+"setservice";

  constructor(public http: Http) {
    console.log('Hello ServiceProvProvider Provider');
  }
  register(serviceProv : ServiceProv):Observable<any>{
    let body = {
      name: serviceProv.name,
      mobile : serviceProv.mobile,
      password: serviceProv.password,
      email : serviceProv.email ,
      type : serviceProv.type,
      u_id : serviceProv.uid,
      company_type : serviceProv.companyType,
      Locatoin : serviceProv.locations,
      Sevice_ProvideorCats : serviceProv.serviceProCats,
      ServiceScertificate : serviceProv.serviceCats
     };
    return this.http.post(this.serProRegUrl,body).map((res) => res.json());
}

getServiceCategory():Observable<any>{
  return this.http.get(this.getCategoryUrl).map((res) => res.json());
}

addService(newservice : addService) :Observable<any>{
  let body = {
    title : newservice.title,
    description : newservice.description,
    video_url : newservice.video_url,
    audio_url : newservice.audio_url,
    service_provider_id : newservice.service_provider_id,
    service_category_id : newservice.service_category_id,
    images : newservice.images
   };
  return this.http.post(this.addServiceUrl,body).map((res) => res.json());
}

}
