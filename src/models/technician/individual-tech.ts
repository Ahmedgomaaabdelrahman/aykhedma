import {Person} from "../person/person";
import {Technician} from "./parent-tech/technician";

export class IndividualTech extends Technician{
  public birthDate : Date ;
  public profileImage : string ;
  public identityFront : string ;
  public identityBack : string ;_
  public techCategoryID : number ;
  public officeTechID : number ;
  constructor(){
    super();
  }
  public validate() : boolean{
    if(this.validateTech() &&
      this.birthDate &&
      this.profileImage &&
      this.identityFront &&
      this.identityBack &&
      this.techCategoryID )
      return true ;
    else return false ;
  }

}
