import { PerFirsthomePage } from './../pages/per-firsthome/per-firsthome';
import { DeleteaddsPage } from './../pages/deleteadds/deleteadds';
import { YouraddsPage } from './../pages/youradds/youradds';
import { MyaddsPage } from './../pages/myadds/myadds';
import { WelcomelanguagePage } from './../pages/welcomelanguage/welcomelanguage';
import { ProfilePage } from './../pages/profile/profile';
import { TermsPage } from './../pages/terms/terms';
import { AboutPage } from './../pages/about/about';
import { SettingsPage } from './../pages/settings/settings';

import { IndivScedulePage } from './../pages/indiv-scedule/indiv-scedule';
import { IndivViewcertificPage } from './../pages/indiv-viewcertific/indiv-viewcertific';
import { IndivImgidPage } from './../pages/indiv-imgid/indiv-imgid';
import { IndivImgprofilePage } from './../pages/indiv-imgprofile/indiv-imgprofile';
import { IndivPhonePage } from './../pages/indiv-phone/indiv-phone';
import { IndivSkillsPage } from './../pages/indiv-skills/indiv-skills';
import { IndivCertificatePage } from './../pages/indiv-certificate/indiv-certificate';
import { IndivLangPage } from './../pages/indiv-lang/indiv-lang';
import { IndivSignupPage } from './../pages/indiv-signup/indiv-signup';
import { ServChatPage } from './../pages/serv-chat/serv-chat';
import { ServRequestsPage } from './../pages/serv-requests/serv-requests';
import { ServAddservicePage } from './../pages/serv-addservice/serv-addservice';
import { ServHomePage } from './../pages/serv-home/serv-home';
import { ServSignipindusPage } from './../pages/serv-signipindus/serv-signipindus';
import { ServSignupPage } from './../pages/serv-signup/serv-signup';
import { PerTechratePage } from './../pages/per-techrate/per-techrate';
import { PerTechreqPage } from './../pages/per-techreq/per-techreq';
import { PerRealdetailsPage } from './../pages/per-realdetails/per-realdetails';
import { PerRestdetailsPage } from './../pages/per-restdetails/per-restdetails';
import { ForgetpasswordPage } from './../pages/forgetpassword/forgetpassword';
import { SignupPage } from './../pages/signup/signup';
import { LoginPage } from './../pages/login/login';
import { WelcomePage } from './../pages/welcome/welcome';
import { PerTechcatPage } from './../pages/per-techcat/per-techcat';
import { PerHomePage } from './../pages/per-home/per-home';
import { PerSignupPage } from './../pages/per-signup/per-signup';
import { PerLocationPage } from './../pages/per-location/per-location';
import { PerMapPage } from './../pages/per-map/per-map';
import { PerSellPage } from './../pages/per-sell/per-sell';
import { PerRealestatePage } from './../pages/per-realestate/per-realestate';
import { PerRestPage } from './../pages/per-rest/per-rest';
import { PerHotelsPage } from './../pages/per-hotels/per-hotels';
import { PerOtherPage } from './../pages/per-other/per-other';
import { PerItemdetailsPage } from './../pages/per-itemdetails/per-itemdetails';
import { PerHoteldetailsPage } from './../pages/per-hoteldetails/per-hoteldetails';
import { PerTechniciansPage } from './../pages/per-technicians/per-technicians';
import { PerTechlocationPage } from './../pages/per-techlocation/per-techlocation';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {MainService} from "../providers/main-service";
import {TranslateService} from "@ngx-translate/core";



import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {Http, HttpModule} from "@angular/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import { ChatProvider } from '../providers/chat/chat';
import { CommonMediaProvider } from '../providers/common-media/common-media';
import {AngularFirestoreModule} from "angularfire2/firestore";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import {FIREBASE_CONFIG} from "./app.firebaseconfig";
import { CommonProvider } from '../providers/common/common';
import { UserProvider } from '../providers/user/user';
import { PersonProvider } from '../providers/person/person';
import {Geolocation} from "@ionic-native/geolocation";
import {Camera} from "@ionic-native/camera";
import {MediaCapture} from "@ionic-native/media-capture";
import {File} from "@ionic-native/file";
import {AdsDetailsPage} from "../pages/ads-details/ads-details";
import {StreamingMedia} from "@ionic-native/streaming-media";
import { ServiceProvProvider } from '../providers/service-prov/service-prov';
import { ServServicesPage } from '../pages/serv-services/serv-services';
import { ServicesdetailsPage } from '../pages/servicesdetails/servicesdetails';
import { IndivdualProvider } from '../providers/indivdual/indivdual';
import { Tecregist2Page } from '../pages/tecregist2/tecregist2';
import { ShowtechcertPage } from '../pages/showtechcert/showtechcert';
import { TechcertificatsPage } from '../pages/techcertificats/techcertificats';
import { SocialSharing } from '@ionic-native/social-sharing';
import { EditaccountPage } from '../pages/editaccount/editaccount';


export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PerTechlocationPage,
    PerTechniciansPage,
    PerHoteldetailsPage,
    PerItemdetailsPage,
    PerOtherPage,
    PerHotelsPage,
    PerRestPage,
    PerRealestatePage,
    PerSellPage,
    PerMapPage,
    PerLocationPage,
    PerSignupPage,
    PerHomePage,
    PerTechcatPage,
    WelcomePage,
    LoginPage,
    SignupPage,
    ForgetpasswordPage,
    PerRestdetailsPage,
    PerRealdetailsPage,
    PerTechreqPage,
    PerTechratePage,
    ServSignupPage,
    ServSignipindusPage,
    ServHomePage,
    ServAddservicePage,
    ServRequestsPage,
    ServChatPage,
    IndivSignupPage,
    IndivLangPage,
    IndivCertificatePage,
    IndivSkillsPage,
    IndivPhonePage,
    IndivImgprofilePage,
    IndivImgidPage,
    IndivViewcertificPage,
    IndivScedulePage,
    ProfilePage,
    SettingsPage,
    AboutPage,
    TermsPage,
    WelcomelanguagePage,
    MyaddsPage,
    YouraddsPage,
    DeleteaddsPage,
    PerFirsthomePage,
    AdsDetailsPage,
    ServServicesPage,
    ServicesdetailsPage,
    Tecregist2Page,
    ShowtechcertPage,
    TechcertificatsPage,
    EditaccountPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PerTechlocationPage,
    PerTechniciansPage,
    PerHoteldetailsPage,
    PerItemdetailsPage,
    PerOtherPage,
    PerHotelsPage,
    PerRestPage,
    PerRealestatePage,
    PerSellPage,
    PerMapPage,
    PerLocationPage,
    PerSignupPage,
    PerHomePage,
    PerTechcatPage,
    WelcomePage,
    LoginPage,
    SignupPage,
    ForgetpasswordPage,
    PerRestdetailsPage,
    PerRealdetailsPage,
    PerTechreqPage,
    PerTechratePage,
    ServSignupPage,
    ServSignipindusPage,
    ServHomePage,
    ServAddservicePage,
    ServRequestsPage,
    ServChatPage,
    IndivSignupPage,
    IndivLangPage,
    IndivCertificatePage,
    IndivSkillsPage,
    IndivPhonePage,
    IndivImgprofilePage,
    IndivImgidPage,
    IndivViewcertificPage,
    IndivScedulePage,
    ProfilePage,
    SettingsPage,
    AboutPage,
    TermsPage,
    WelcomelanguagePage,
    MyaddsPage,
    YouraddsPage,
    DeleteaddsPage,
    PerFirsthomePage,
    AdsDetailsPage,
    ServServicesPage,
    Tecregist2Page,
    ServicesdetailsPage,
    ShowtechcertPage,
    TechcertificatsPage,
    EditaccountPage
  ],
  providers: [
    StatusBar,
    MainService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChatProvider,
    CommonMediaProvider,
    CommonProvider,
    UserProvider,
    SocialSharing,
    PersonProvider,
    Geolocation,
    Camera,
    MediaCapture,
    File,
    StreamingMedia,
    ServiceProvProvider,
    IndivdualProvider
  ]
})
export class AppModule {}
