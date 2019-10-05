import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { WelcomeloginPage } from '../pages/welcomelogin/welcomelogin';
import { NursehomePage } from '../pages/nurse/nursehome/nursehome';
import { AdminhomePage } from '../pages/admin/adminhome/adminhome';
import { NurseloginPage } from '../pages/nurse/nurselogin/nurselogin';
import { NursesignupPage } from '../pages/nurse/nursesignup/nursesignup';
import { DetailPage } from '../pages/nurse/detail/detail';
import { GetdirectionPage } from '../pages/nurse/getdirection/getdirection';
import { AdditionaldetailPage } from '../pages/nurse/additionaldetail/additionaldetail';
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
import { RequesthistoryPage } from '../pages/nurse/requesthistory/requesthistory';
import { NursecurrentrequestPage } from '../pages/nurse/nursecurrentrequest/nursecurrentrequest';
import { MedicationpickuplocationPage } from '../pages/nurse/medicationpickuplocation/medicationpickuplocation';
import { ServicesPage } from '../pages/nurse/services/services';
import { NursingservicePage } from '../pages/nurse/nursingservice/nursingservice';
import { NursesettingPage } from '../pages/nurse/nursesetting/nursesetting';
import { NurseprofilePage } from '../pages/nurse/nurseprofile/nurseprofile';
import { NurseeditprofilePage } from '../pages/nurse/nurseeditprofile/nurseeditprofile';
import { NurseelectronicnotesPage } from '../pages/nurse/nurseelectronicnotes/nurseelectronicnotes';
import { Geolocation } from '@ionic-native/geolocation';
import { AboutusPage } from '../pages/nurse/aboutus/aboutus';
import { PricingplanPage } from '../pages/nurse/pricingplan/pricingplan';
import { DidyouknowPage } from '../pages/nurse/didyouknow/didyouknow';
import { DiddetailPage } from '../pages/nurse/diddetail/diddetail';
import { NursecompleterequestPage } from '../pages/nurse/nursecompleterequest/nursecompleterequest';
import { AllnursePage } from '../pages/admin/allnurse/allnurse';
import { NursereviewsPage } from '../pages/admin/nursereviews/nursereviews';
import { AdminelectronicnPage } from '../pages/admin/adminelectronicn/adminelectronicn';
import { AdminnotesdetailsPage} from "../pages/admin/adminnotesdetails/adminnotesdetails";
import { AdmincurrentrequestPage} from "../pages/admin/admincurrentrequest/admincurrentrequest";
import { AdminrejectrequestPage} from "../pages/admin/adminrejectrequest/adminrejectrequest";
import { AdminschudlerequestPage} from "../pages/admin/adminschudlerequest/adminschudlerequest";
import { AdmincompletrequestPage} from "../pages/admin/admincompletrequest/admincompletrequest";
import { AdminservicePage } from '../pages/admin/adminservice/adminservice';
import { AdminpricingplanPage } from '../pages/admin/adminpricingplan/adminpricingplan';
import { AdminaddplanPage } from '../pages/admin/adminaddplan/adminaddplan';
import { AdmindidyouknowPage } from '../pages/admin/admindidyouknow/admindidyouknow';
import { AdminsettingPage } from '../pages/admin/adminsetting/adminsetting';
import { AdminaccountsettingPage } from '../pages/admin/adminaccountsetting/adminaccountsetting';
import { AdminrequestPage } from '../pages/admin/adminrequest/adminrequest';
import { AdmincancilpolicyPage } from '../pages/admin/admincancilpolicy/admincancilpolicy';
import { AdminfaqsPage } from '../pages/admin/adminfaqs/adminfaqs';
import { AdminaboutPage } from '../pages/admin/adminabout/adminabout';
import { AdmininboxPage } from '../pages/admin/admininbox/admininbox';
import { NurseforgetpasswordPage } from '../pages/nurse/nurseforgetpassword/nurseforgetpassword';
import { UpdatepasswordPage } from '../pages/nurse/updatepassword/updatepassword';
import { AdminforgetpasswordPage } from '../pages/admin/adminforgetpassword/adminforgetpassword';
import { AdminupdatepasswordPage } from '../pages/admin/adminupdatepassword/adminupdatepassword';
import { AdminloginPage } from '../pages/admin/adminlogin/adminlogin';
import { AdmincompletservicedetailPage } from '../pages/admin/admincompletservicedetail/admincompletservicedetail';
import { SchedulerequestdetailPage } from '../pages/nurse/schedulerequestdetail/schedulerequestdetail';
import { NursepersonalinfoPage } from '../pages/admin/nursepersonalinfo/nursepersonalinfo';
import { AdddervicesPage } from '../pages/admin/adddervices/adddervices';
import { AddblogPage } from '../pages/admin/addblog/addblog';
import { ScheduleservicedetailPage } from '../pages/admin/scheduleservicedetail/scheduleservicedetail';
import { AdminrejectrequestdetailPage } from '../pages/admin/adminrejectrequestdetail/adminrejectrequestdetail';
import { AdminchattingPage } from '../pages/admin/adminchatting/adminchatting';
import { AdminsetrequesttimePage } from '../pages/admin/adminsetrequesttime/adminsetrequesttime';
import { AdminupdatepolicyPage } from '../pages/admin/adminupdatepolicy/adminupdatepolicy';
import { AdminupdateplanPage } from '../pages/admin/adminupdateplan/adminupdateplan';
import { ViewnotesPage } from '../pages/nurse/viewnotes/viewnotes';
import { NursewritenotesPage } from '../pages/nurse/nursewritenotes/nursewritenotes';
import { FCM } from '@ionic-native/fcm';
import { BackgroundMode } from '@ionic-native/background-mode';
import { NotificationPage } from '../pages/nurse/notification/notification';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  public userP:any;
  public admin_name:any;
  public defaultadminpic:any="assets/imgs/profile.png";
  public defaultname:any="User Name";
  public nursePic:any;
  public nurseName:any;
  pages: Array<{title: string, component: any}>;
  public nurse_id:any;
  public admin_id:any;

  constructor(public platform: Platform, public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
   public events : Events,public fcm:FCM,private backgroundMode: BackgroundMode,public alertCtrl:AlertController) {
    this.backgroundMode.enable();
    this.events.subscribe('userPic',(userp)=>{
      this.userP = userp;
      localStorage.setItem('pic',this.userP);
  })

  this.events.subscribe('adminname',(adminName)=>{
    this.admin_name = adminName;
    localStorage.setItem('admin_name',this.admin_name);
})
this.events.subscribe('nursePic',(nursePic)=>{
  this.nursePic = nursePic;
  localStorage.setItem('nurse_pic',this.nursePic);
})
this.events.subscribe('nurse_name',(nurseName)=>{
  this.nurseName = nurseName;
  localStorage.setItem('nurse_name',this.nurseName);
})
this.events.subscribe('nurse_id', (nurse_id) => {

  this.nurse_id = nurse_id
  localStorage.setItem('nurse_id',this.nurse_id);
  console.log("nurse id component",this.nurse_id);


});
this.events.subscribe('admin_id', (admin_id) => {

  this.admin_id = admin_id
  localStorage.setItem('admin_id',this.admin_id);
  console.log("admin id component",this.admin_id);


})

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

    this.userP = localStorage.getItem('pic');
    this.admin_name = localStorage.getItem('admin_name');
    this.nursePic = localStorage.getItem('nurse_pic');
    this.nurseName = localStorage.getItem('nurse_name');
    this.nurse_id = localStorage.getItem('nurse_id');
    this.admin_id = localStorage.getItem('admin_id');

   if(this.nurse_id){
     this.rootPage = NursehomePage;
   }else if(this.admin_id){
     this.rootPage = AdminhomePage;
   }else{
     this.rootPage = WelcomeloginPage;
   }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.fcm.subscribeToTopic('marketing');
      this.fcm.getToken().then(token => {
        
        console.log("token is=",token)
      });
      this.fcm.onNotification().subscribe(data => {
 
           


       
        console.log("full data",data);
        console.log("please key",data.key);
        console.log("please username",data.username);
        console.log("please userid",data.userid);
        console.log("please userimage",data.userimage);
        console.log("please date",data.date);


      
        if(data.wasTapped){
          // if(this.nurse_id){
          //   this.nav.setRoot(NursehomePage);
          // }else{
          //   this.nav.push(NurseloginPage);
          // }
          console.log("nurse id",this.nurse_id,data);
        this.rootPage= this.nurse_id?NursehomePage:NurseloginPage; 


        } else {
          if (data) {
            

            // if application open, show popup
            let confirmAlert = this.alertCtrl.create({
              title:data.key,
              message: data.username + " sent new request",
              buttons: [{
                text: 'Ignore',
                role: 'cancel'
              }, {
                text: 'View',
                handler: () => {
                  //TODO: Your logic here
                  this.nav.push(NursehomePage);
                }
              }]
            });
            confirmAlert.present();
          }
  
        };
      });
      
      // this.fcm.onTokenRefresh().subscribe(token => {
      //   console.log("refresh token",token);
      // });
      
      this.fcm.unsubscribeFromTopic('marketing');
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  Logout(){
  
    localStorage.clear();
    this.nav.setRoot(WelcomeloginPage)
  }

  hoMe(){
    this.nav.setRoot(NursehomePage);
  }
  requestHist(){
    this.nav.setRoot(RequesthistoryPage);
  }
  serviceNurse(){
    this.nav.setRoot(ServicesPage);
  }
  setTings(){
    this.nav.setRoot(NursesettingPage);
  }
  aboutus(){
    this.nav.setRoot(AboutusPage)
  }
  pricingPlans(){
    this.nav.setRoot(PricingplanPage);
  }
  didKnow(){
    this.nav.setRoot(DidyouknowPage);
  }
  AllUser(){
    this.nav.setRoot(AdminhomePage);
  }
  AllNurse(){
    this.nav.setRoot(AllnursePage);
  }
  adminService(){
    this.nav.setRoot(AdminservicePage);
  }
  adminPricing(){
    this.nav.setRoot(AdminpricingplanPage);
  }
  adminDidknow(){
    this.nav.setRoot(AdmindidyouknowPage);
  }
  adminSetting(){
    this.nav.setRoot(AdminsettingPage);
  }
  adminInbox(){
    this.nav.setRoot(AdmininboxPage);
  }
  adminProfile(){
    this.nav.push(AdminaccountsettingPage);
  }
}
