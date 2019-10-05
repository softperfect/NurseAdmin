import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersonaldoctorinfoPage } from '../personaldoctorinfo/personaldoctorinfo';
import { ElectronicnotesPage } from '../electronicnotes/electronicnotes';
import { FamilyprofilePage } from '../familyprofile/familyprofile';
import { AuthorizepersonPage } from '../authorizeperson/authorizeperson';
import { PurchaseplanPage } from '../purchaseplan/purchaseplan';
import { CurrentrequestPage } from '../currentrequest/currentrequest';
import { CompleterequestPage } from '../completerequest/completerequest';
import { SchedulerequestPage } from '../schedulerequest/schedulerequest';
import { RejectrequestPage } from '../rejectrequest/rejectrequest';
import { AdminserviceProvider } from '../../../providers/adminservice/adminservice';

/**
 * Generated class for the UserdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userdetail',
  templateUrl: 'userdetail.html',
})
export class UserdetailPage {
  public user_id:any;
  public userDetail:any=[];
  public user_name:any;
  public user_pic:any;
  public defaultPic:any="assets/imgs/userdefault.png";
  public user_doctor:any={};
  public familyList:any={};
  public authorize:any={};
  public currentRequest:any={};
  public scheduleRequest:any={};
  public cancelRequest:any={};
  public completeRequest:any={};
  public user_lat:any;
  public user_lon:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public adminServ:AdminserviceProvider) {
    this.user_id = navParams.get('userId');
    console.log("user id",this.user_id);
    this.adminServ.userdetail(this.user_id).subscribe(res=>{
      if(res.message=="successful"){
        this.userDetail = res.result;
        console.log(this.userDetail);
        this.user_name = this.userDetail.firstname + " " +this.userDetail.lastname;
        this.user_pic = this.userDetail.image;
        this.user_doctor['name'] = this.user_name;
        this.user_doctor['user_dob'] = this.userDetail.date_of_birth;
        this.user_doctor['gender'] = this.userDetail.gender;
        this.user_doctor['doc_name'] = this.userDetail.doctor_information.doctor_name;
        this.user_doctor['doc_email'] = this.userDetail.doctor_information.doctor_email;
        this.user_doctor['doc_phone'] = this.userDetail.doctor_information.doctor_phone_number;
        this.user_lat = this.userDetail.lat;
        this.user_lon = this.userDetail.lon;
        console.log("user lat lon",this.user_lat,this.user_lon);
        this.familyList = this.userDetail.family_members;
        this.authorize = this.userDetail.authorize_person_detail;
        this.currentRequest = this.userDetail.Current;
        this.scheduleRequest = this.userDetail.Scheduled;
        this.cancelRequest = this.userDetail.Cancel;
        this.completeRequest = this.userDetail.Completed;
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserdetailPage');
  }
  viewDoctor(){
    this.navCtrl.push(PersonaldoctorinfoPage,{'doc_info':this.user_doctor});
  }
  viewelectnic(){
    this.navCtrl.push(ElectronicnotesPage);
  }
  viewfamily(){
    this.navCtrl.push(FamilyprofilePage,{'familymember':this.familyList});
  }
  viewAuthorise(){
    this.navCtrl.push(AuthorizepersonPage,{'authorize':this.authorize});
  }
  viewPlan(){
    this.navCtrl.push(PurchaseplanPage);
  }
  viewCurrent(){
    this.navCtrl.push(CurrentrequestPage,{'currentRequest':this.currentRequest,'user_lat':this.user_lat,'user_lon':this.user_lon});
  }
  viewComplete(){
    this.navCtrl.push(CompleterequestPage,{'completrequest':this.completeRequest});
  }
  viewSchedule(){
    this.navCtrl.push(SchedulerequestPage,{'schedule':this.scheduleRequest});
  }
  viewReject(){
    this.navCtrl.push(RejectrequestPage,{'cancel':this.cancelRequest});
  }
}
