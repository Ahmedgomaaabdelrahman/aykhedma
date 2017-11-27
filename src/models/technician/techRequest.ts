export class TechRequest {

    public title : string ;
    public description : string ;
    public mobile : number ;
    public email : string ;
    public user_id : number ;
    public tech_categories_id : number ;
    public technician_id : number ;
    public images : string[] = [] ;
    public video_url : string ;
    public audio_url : string ;
    constructor(){

    }
  
    public validate():boolean{
      if(this.title != null && this.title.trim() != "" &&
        this.description != null && this.description.trim() != "" &&
        this.email != null && this.email.trim() != "" &&
        this.mobile != null && this.tech_categories_id != null &&
        this.technician_id != null && this.images.length > 0)
      return true ;
       else return false ;
  
    }
  }