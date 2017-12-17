import { servCertificate } from "../person/Sercertificate";
import { serviceImg } from "../person/serviceimg";

export class addService{
    public title : string;
    public description : string;
    public video_url : string;
    public audio_url : string;
    public service_provider_id: number;
    public service_category_id : number;
    public images : serviceImg [] = [];

    constructor(){

    }

    public validate():boolean{
        if(this.title != null && this.title.trim() != "" &&
          this.description != null && this.description.trim() != "" &&
          this.video_url != null && this.video_url.trim() != "" &&
          this.audio_url != null && this.audio_url != null && 
          this.service_provider_id == null && 
          this.service_category_id == null &&
          this.images != null && this.images.length > 0)
        return true ;

         else return false ;
    
      }
}