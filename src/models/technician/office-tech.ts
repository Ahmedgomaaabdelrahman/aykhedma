import {Technician} from "./parent-tech/technician";
export class OfficeTech extends Technician{
  public commerialNo:string ;
  constructor(){
    super();
  }
  public validate(): boolean{
    if(this.validateTech() &&
      this.commerialNo )
      return true ;
    else return false ;
  }
}
