import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {ToastController, LoadingController, Loading} from "ionic-angular";
import {TranslateService} from "@ngx-translate/core";

/*
  Generated class for the CommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonProvider {
  public loader : Loading;
  constructor(public http: Http ,public toastCtrl : ToastController ,
              public translateService : TranslateService , public loadingCtrl : LoadingController ) {
    console.log('Hello CommonProvider Provider');
  }
  presentToast(txt:string) {
    let toast = this.toastCtrl.create({
      message: txt,
      duration: 1000,
      position: 'bottom'
    });
    toast.present();
  }
  successToast()
  {
    this.translateService.get('Success').subscribe(
      value => {
        // value is our translated string
        this.presentToast(value);
      }
    );


  }
  errorToast()
  {
    this.translateService.get('Error').subscribe(
      value => {
        // value is our translated string
        this.presentToast(value);

      }
    );
  }
  translateAndToast(word : string)
  {
    this.translateService.get(word).subscribe(
      value => {
        // value is our translated string
        this.presentToast(value);

      }
    );
  }
  getTranslation(word : string)
  {
    this.translateService.get(word).subscribe(
      value => {
        // value is our translated string
        return value;

      }
    );
  }
  presentLoading(txt:string) {
    this.loader = this.loadingCtrl.create({
      content: txt
    });
    this.loader.present();
  }
  dismissLoading(){
    this.loader.dismiss();
  };
}
