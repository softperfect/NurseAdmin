import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomeloginPage } from '../pages/welcomelogin/welcomelogin';

// Nurse App pages
import { NurseloginPage } from '../pages/nurse/nurselogin/nurselogin';
import { NurseforgetpasswordPage } from '../pages/nurse/nurseforgetpassword/nurseforgetpassword';
import { NursehomePage } from '../pages/nurse/nursehome/nursehome';
import { NursesignupPage } from '../pages/nurse/nursesignup/nursesignup';
import { DetailPage } from '../pages/nurse/detail/detail';
import { GetdirectionPage } from '../pages/nurse/getdirection/getdirection';
import { AdditionaldetailPage } from '../pages/nurse/additionaldetail/additionaldetail';
import { RequesthistoryPage } from '../pages/nurse/requesthistory/requesthistory';
import { NursecurrentrequestPage } from '../pages/nurse/nursecurrentrequest/nursecurrentrequest';
import { MedicationpickuplocationPage } from '../pages/nurse/medicationpickuplocation/medicationpickuplocation';
import { NurseschedulerequestPage } from'../pages/nurse/nurseschedulerequest/nurseschedulerequest';
import { ServicesPage } from '../pages/nurse/services/services';
import { NursingservicePage } from '../pages/nurse/nursingservice/nursingservice';
import { PeronalservicePage } from '../pages/nurse/peronalservice/peronalservice';
import { SchedulerequestdetailPage } from '../pages/nurse/schedulerequestdetail/schedulerequestdetail';
import { NursesettingPage } from '../pages/nurse/nursesetting/nursesetting';
import { NurseprofilePage } from '../pages/nurse/nurseprofile/nurseprofile';
import { NurseeditprofilePage } from '../pages/nurse/nurseeditprofile/nurseeditprofile';
import { NurseelectronicnotesPage } from '../pages/nurse/nurseelectronicnotes/nurseelectronicnotes';
import { ViewnotesPage } from '../pages/nurse/viewnotes/viewnotes';
import { UpdatepasswordPage } from '../pages/nurse/updatepassword/updatepassword';
import { CancellpolicyPage } from '../pages/nurse/cancellpolicy/cancellpolicy';
import { NotificationPage } from '../pages/nurse/notification/notification';
import { FaqsPage } from '../pages/nurse/faqs/faqs';
import { FaqdetailPage } from '../pages/nurse/faqdetail/faqdetail';
import { ShareappwithfriendPage } from '../pages/nurse/shareappwithfriend/shareappwithfriend';
import { UnableloginPage } from '../pages/nurse/unablelogin/unablelogin';
import { NotreceivingmailPage } from '../pages/nurse/notreceivingmail/notreceivingmail';
import { LogoutfromPage } from '../pages/nurse/logoutfrom/logoutfrom';
import { ShareappPage } from '../pages/nurse/shareapp/shareapp';
import { AboutusPage } from '../pages/nurse/aboutus/aboutus';
import { PricingplanPage } from '../pages/nurse/pricingplan/pricingplan';
import { DidyouknowPage } from '../pages/nurse/didyouknow/didyouknow';
import { DiddetailPage  } from '../pages/nurse/diddetail/diddetail';
import { NursecompleterequestPage } from '../pages/nurse/nursecompleterequest/nursecompleterequest';
import { NurserejectedrequestPage } from '../pages/nurse/nurserejectedrequest/nurserejectedrequest';
import { NursewritenotesPage } from '../pages/nurse/nursewritenotes/nursewritenotes';
import { NurseviewlocationPage } from '../pages/nurse/nurseviewlocation/nurseviewlocation';
import { NurseaddionaldetailPage } from '../pages/nurse/nurseaddionaldetail/nurseaddionaldetail';
import { NurseschedulerequestdetailPage } from '../pages/nurse/nurseschedulerequestdetail/nurseschedulerequestdetail';
// Admin App pages
import { AdminloginPage } from '../pages/admin/adminlogin/adminlogin';
import { AdminforgetpasswordPage } from '../pages/admin/adminforgetpassword/adminforgetpassword';
import { AdminhomePage } from '../pages/admin/adminhome/adminhome';
import { UserdetailPage } from '../pages/admin/userdetail/userdetail';
import { PersonaldoctorinfoPage } from '../pages/admin/personaldoctorinfo/personaldoctorinfo';
import { ElectronicnotesPage } from '../pages/admin/electronicnotes/electronicnotes';
import { FamilyprofilePage } from '../pages/admin/familyprofile/familyprofile';
import { AuthorizepersonPage } from '../pages/admin/authorizeperson/authorizeperson';
import { PurchaseplanPage } from '../pages/admin/purchaseplan/purchaseplan';
import { CurrentrequestPage } from '../pages/admin/currentrequest/currentrequest';
import { CompleterequestPage } from '../pages/admin/completerequest/completerequest';
import { SchedulerequestPage } from '../pages/admin/schedulerequest/schedulerequest';
import { RejectrequestPage } from '../pages/admin/rejectrequest/rejectrequest';
import { RejectrequestdetailPage } from '../pages/admin/rejectrequestdetail/rejectrequestdetail';
import { AllnursePage } from '../pages/admin/allnurse/allnurse';
import { NursereviewsPage } from '../pages/admin/nursereviews/nursereviews';
import { AdminelectronicnPage } from '../pages/admin/adminelectronicn/adminelectronicn';
import { AdminnotesdetailsPage } from '../pages/admin/adminnotesdetails/adminnotesdetails';
import { AdmincurrentrequestPage } from '../pages/admin/admincurrentrequest/admincurrentrequest';
import { AdminrejectrequestPage } from '../pages/admin/adminrejectrequest/adminrejectrequest';
import { AdminschudlerequestPage } from '../pages/admin/adminschudlerequest/adminschudlerequest';
import { AdmincompletrequestPage } from '../pages/admin/admincompletrequest/admincompletrequest';
import { AdminservicePage } from '../pages/admin/adminservice/adminservice';
import { AdminpricingplanPage } from '../pages/admin/adminpricingplan/adminpricingplan';
import { AdminaddplanPage } from '../pages/admin/adminaddplan/adminaddplan';
import { AdmindidyouknowPage } from '../pages/admin/admindidyouknow/admindidyouknow';
import { AdmindiddetailPage } from '../pages/admin/admindiddetail/admindiddetail';
import { AdminsettingPage } from '../pages/admin/adminsetting/adminsetting';
import { AdminaccountsettingPage } from '../pages/admin/adminaccountsetting/adminaccountsetting';
import { AdminrequestPage } from '../pages/admin/adminrequest/adminrequest';
import { AdmincancilpolicyPage } from '../pages/admin/admincancilpolicy/admincancilpolicy';
import { AdminfaqsPage } from '../pages/admin/adminfaqs/adminfaqs';
import { AdminaboutPage } from '../pages/admin/adminabout/adminabout';
import { AdminrateuserPage } from '../pages/admin/adminrateuser/adminrateuser';
import { AdminratenursingPage } from '../pages/admin/adminratenursing/adminratenursing';
import { AdminsendnotificationPage } from '../pages/admin/adminsendnotification/adminsendnotification';
import { AdminsetrequesttimePage } from '../pages/admin/adminsetrequesttime/adminsetrequesttime';
import { AdmininboxPage } from '../pages/admin/admininbox/admininbox';
import { AdminupdatepasswordPage } from '../pages/admin/adminupdatepassword/adminupdatepassword';
import { AdmincompletservicedetailPage } from '../pages/admin/admincompletservicedetail/admincompletservicedetail';
import { NursepersonalinfoPage } from '../pages/admin/nursepersonalinfo/nursepersonalinfo';
import { AdddervicesPage } from '../pages/admin/adddervices/adddervices';
import { AddblogPage } from '../pages/admin/addblog/addblog';
import { AdmingetdirectionPage } from '../pages/admin/admingetdirection/admingetdirection';
import { CompletservicedetailPage } from '../pages/admin/completservicedetail/completservicedetail';
import { ScheduleservicedetailPage } from '../pages/admin/scheduleservicedetail/scheduleservicedetail';
import { AdminrejectrequestdetailPage } from '../pages/admin/adminrejectrequestdetail/adminrejectrequestdetail';
import { AdminchattingPage } from '../pages/admin/adminchatting/adminchatting';
import { AdminupdatepolicyPage } from '../pages/admin/adminupdatepolicy/adminupdatepolicy';
import { AdminupdateplanPage } from '../pages/admin/adminupdateplan/adminupdateplan';
import { AdminprivacypolicyPage } from '../pages/admin/adminprivacypolicy/adminprivacypolicy';
import { AdmintermofusePage } from '../pages/admin/admintermofuse/admintermofuse';
import { AdminresetpasswordPage } from '../pages/admin/adminresetpassword/adminresetpassword';
import { AdminshareappwithfriendPage } from '../pages/admin/adminshareappwithfriend/adminshareappwithfriend';
import { AdmincantloginPage } from '../pages/admin/admincantlogin/admincantlogin';
import { AdminnotreceivingmailPage } from '../pages/admin/adminnotreceivingmail/adminnotreceivingmail';
import { AdminlogoutfromPage } from '../pages/admin/adminlogoutfrom/adminlogoutfrom';

// Nurse And Admin Service provider
import { NurseserviceProvider } from '../providers/nurseservice/nurseservice';
import { AdminserviceProvider } from '../providers/adminservice/adminservice';
import { HttpModule } from '@angular/http';
import { Ionic2RatingModule } from 'ionic2-rating';
import { Geolocation } from '@ionic-native/geolocation';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { StarRatingModule } from 'ionic3-star-rating';
import { SocialSharing } from '@ionic-native/social-sharing';
import { FCM } from '@ionic-native/fcm';
import { BackgroundMode } from '@ionic-native/background-mode';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    WelcomeloginPage,
    NurseloginPage,
    AdminloginPage,
    NurseforgetpasswordPage,
    AdminforgetpasswordPage,
    NursehomePage,
    AdminhomePage,
    NursesignupPage,
    DetailPage,
    GetdirectionPage,
    AdditionaldetailPage,
    UserdetailPage,
    PersonaldoctorinfoPage,
    ElectronicnotesPage,
    FamilyprofilePage,
    AuthorizepersonPage,
    PurchaseplanPage,
    CurrentrequestPage,
    CompleterequestPage,
    SchedulerequestPage,
    RejectrequestPage,
    RejectrequestdetailPage,
    RequesthistoryPage,
    NursecurrentrequestPage,
    MedicationpickuplocationPage,
    ServicesPage,
    NursingservicePage,
    PeronalservicePage,
    NurseschedulerequestPage,
    SchedulerequestdetailPage,
    NursesettingPage,
    NurseprofilePage,
    NurseeditprofilePage,
    NurseelectronicnotesPage,
    ViewnotesPage,
    UpdatepasswordPage,
    CancellpolicyPage,
    NotificationPage,
    FaqsPage,
    FaqdetailPage,
    ShareappwithfriendPage,
    UnableloginPage,
    NotreceivingmailPage,
    LogoutfromPage,
    ShareappPage,
    AboutusPage,
    PricingplanPage,
    DidyouknowPage,
    DiddetailPage,
    NursecompleterequestPage,
    NurserejectedrequestPage,
    AllnursePage,
    NursereviewsPage,
    AdminelectronicnPage,
    AdminnotesdetailsPage,
    AdmincurrentrequestPage,
    AdminrejectrequestPage,
    AdminschudlerequestPage,
    AdmincompletrequestPage,
    AdminservicePage,
    AdminpricingplanPage,
    AdminaddplanPage,
    AdmindidyouknowPage,
    AdmindiddetailPage,
    AdminsettingPage,
    AdminaccountsettingPage,
    AdminrequestPage,
    AdmincancilpolicyPage,
    AdminfaqsPage,
    AdminaboutPage,
    AdminrateuserPage,
    AdminratenursingPage,
    AdminsendnotificationPage,
    AdminsetrequesttimePage,
    AdmininboxPage,
    AdminupdatepasswordPage,
    AdmincompletservicedetailPage,
    NursepersonalinfoPage,
    AdddervicesPage,
    AddblogPage,
    AdmingetdirectionPage,
    CompletservicedetailPage,
    ScheduleservicedetailPage,
    AdminrejectrequestdetailPage,
    AdminchattingPage,
    AdminupdatepolicyPage,
    AdminupdateplanPage,
    AdminprivacypolicyPage,
    AdmintermofusePage,
    AdminresetpasswordPage,
    AdminshareappwithfriendPage,
    AdmincantloginPage,
    AdminnotreceivingmailPage,
    AdminlogoutfromPage,
    NursewritenotesPage,
    NurseviewlocationPage,
    NurseaddionaldetailPage,
    NurseschedulerequestdetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ionic2RatingModule,
    StarRatingModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    WelcomeloginPage,
    NurseloginPage,
    AdminloginPage,
    NurseforgetpasswordPage,
    AdminforgetpasswordPage,
    NursehomePage,
    AdminhomePage,
    NursesignupPage,
    DetailPage,
    GetdirectionPage,
    AdditionaldetailPage,
    UserdetailPage,
    PersonaldoctorinfoPage,
    ElectronicnotesPage,
    FamilyprofilePage,
    AuthorizepersonPage,
    PurchaseplanPage,
    CurrentrequestPage,
    CompleterequestPage,
    SchedulerequestPage,
    RejectrequestPage,
    RejectrequestdetailPage,
    RequesthistoryPage,
    NursecurrentrequestPage,
    MedicationpickuplocationPage,
    ServicesPage,
    NursingservicePage,
    PeronalservicePage,
    NurseschedulerequestPage,
    SchedulerequestdetailPage,
    NursesettingPage,
    NurseprofilePage,
    NurseeditprofilePage,
    NurseelectronicnotesPage,
    ViewnotesPage,
    UpdatepasswordPage,
    CancellpolicyPage,
    NotificationPage,
    FaqsPage,
    FaqdetailPage,
    ShareappwithfriendPage,
    UnableloginPage,
    NotreceivingmailPage,
    LogoutfromPage,
    ShareappPage,
    AboutusPage,
    PricingplanPage,
    DidyouknowPage,
    DiddetailPage,
    NursecompleterequestPage,
    NurserejectedrequestPage,
    AllnursePage,
    NursereviewsPage,
    AdminelectronicnPage,
    AdminnotesdetailsPage,
    AdmincurrentrequestPage,
    AdminrejectrequestPage,
    AdminschudlerequestPage,
    AdmincompletrequestPage,
    AdminservicePage,
    AdminpricingplanPage,
    AdminaddplanPage,
    AdmindidyouknowPage,
    AdmindiddetailPage,
    AdminsettingPage,
    AdminaccountsettingPage,
    AdminrequestPage,
    AdmincancilpolicyPage,
    AdminfaqsPage,
    AdminaboutPage,
    AdminrateuserPage,
    AdminratenursingPage,
    AdminsendnotificationPage,
    AdminsetrequesttimePage,
    AdmininboxPage,
    AdminupdatepasswordPage,
    AdmincompletservicedetailPage,
    NursepersonalinfoPage,
    AdddervicesPage,
    AddblogPage,
    AdmingetdirectionPage,
    CompletservicedetailPage,
    ScheduleservicedetailPage,
    AdminrejectrequestdetailPage,
    AdminchattingPage,
    AdminupdatepolicyPage,
    AdminupdateplanPage,
    AdminprivacypolicyPage,
    AdmintermofusePage,
    AdminresetpasswordPage,
    AdminshareappwithfriendPage,
    AdmincantloginPage,
    AdminnotreceivingmailPage,
    AdminlogoutfromPage,
    NursewritenotesPage,
    NurseviewlocationPage,
    NurseaddionaldetailPage,
    NurseschedulerequestdetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
     Geolocation,
     File,
    Transfer,
    Camera,
    FilePath,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NurseserviceProvider,
    AdminserviceProvider,
    FCM,
    BackgroundMode
  ]
})
export class AppModule {}
