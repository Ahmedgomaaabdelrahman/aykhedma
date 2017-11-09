import {Person} from "../person/person";
export class User extends Person {
  constructor(){
    super();
    this.type = Person.USER_MODE ;
  }
  public validate():boolean{
    if(this.validatePerson()) return true ;
    else return false ;
  }
}
