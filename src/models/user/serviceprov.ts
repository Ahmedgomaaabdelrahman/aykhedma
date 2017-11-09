import {Person} from "../person/person";
import {ServProviderCats} from "../person/servProvCats";
import {servCertificate} from "../person/Sercertificate";

export class ServiceProv extends Person {
  public companyType : any;
  public serviceProCats: ServProviderCats [] = [];
  public serviceCats: servCertificate [] = [];
  
  constructor(){
    super();
    this.type = Person.ServProv_MODE;
  }
  public validate():boolean{
    if(this.validatePerson() &&
    this.companyType != null &&
    this.serviceProCats.length > 1 &&
    this.serviceCats.length > 1
   ) 
    return true ;
    else return false ;
  }

  
}