import {Person} from "../person/person";
import {Technician} from "./parent-tech/technician";

export class IndividualTech extends Person{
  public profileImage : string ;
  public techCategoryID : number ;

  constructor(){
    super();
  }
  public validate() : boolean{
    if(this.validatePerson())
      return true ;
    else return false ;
  }

}
