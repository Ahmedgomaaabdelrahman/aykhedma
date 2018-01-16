export class SalesRequest {
  public title : string ;
  public description : string ;
  public mobile : number ;
  public price : number ;
  public email : string ;
  public sales_category_id : number ;
  public user_id : number ;
  public images : string[] = [] ;
  public video_url : string ;
  public audio_url : string ;
  constructor(){
  }

  public validate():boolean{
    if(this.title != null && this.title.trim() != "" &&
      this.price != null &&
      this.description != null && this.description.trim() != "" &&
      this.email != null && this.email.trim() != "" &&
      this.mobile != null && this.sales_category_id != null &&
      this.user_id != null && this.images.length > 0)
    return true ;
     else return false ;

  }
}
