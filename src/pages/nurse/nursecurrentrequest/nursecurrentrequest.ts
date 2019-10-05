import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MedicationpickuplocationPage } from '../medicationpickuplocation/medicationpickuplocation';
import { GetdirectionPage } from '../getdirection/getdirection';
import { AdditionaldetailPage } from '../additionaldetail/additionaldetail';
import { NurseaddionaldetailPage } from '../nurseaddionaldetail/nurseaddionaldetail';
import { NurseserviceProvider } from '../../../providers/nurseservice/nurseservice';
import { RequesthistoryPage } from '../requesthistory/requesthistory';
import * as $ from "jquery";
import { NurseviewlocationPage } from '../nurseviewlocation/nurseviewlocation';

/**
 * Generated class for the NursecurrentrequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nursecurrentrequest',
  templateUrl: 'nursecurrentrequest.html',
})
export class NursecurrentrequestPage {
  public currentdata:any;
  public userPic:any;
  public requestTime:any;
  public requestid:any;
  public carePerson:any;
  public serviceType:any;
  public arrivalTime:any;
  public services:any;
 public userName:any;
 public userDetail:any=[];
 public addionalDetail:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public nurseServ:NurseserviceProvider) {
    this.currentdata = navParams.get('currentRequest');
    console.log("current data",this.currentdata);
   
  }

  ionViewDidLoad() {
    if(this.currentdata.length==0 || this.currentdata.length==""){
      $('.nodata').show();
   
    }else{
      $('.gayab').show();

      this.userPic = this.currentdata[0].user_image;
      this.userName = this.currentdata[0].user_name;
      this.requestTime = this.currentdata[0].created_date;
      this.requestid  = this.currentdata[0].request_id;
      this.carePerson = this.currentdata[0].care_type;
      this.serviceType = this.currentdata[0].service_type_name;
      this.services = this.currentdata[0].services;

      this.userDetail['name'] = this.currentdata[0].user_name;
      this.userDetail['gender'] = this.currentdata[0].gender;
      this.userDetail['phone'] = this.currentdata[0].contact_number;
      this.userDetail['address'] = this.currentdata[0].contact_address;
      this.userDetail['userLat'] = this.currentdata[0].lat;
      this.userDetail['userLon'] = this.currentdata[0].lon;
      this.userDetail['userPic'] = this.currentdata[0].user_image;
      this.userDetail['distance'] = this.currentdata[0].distance;
      this.userDetail['time'] = this.currentdata[0].arrivel_time;
  
      console.log("user details",this.userDetail) ;
      this.addionalDetail['visitType'] = this.currentdata[0].visit_type;
      this.addionalDetail['careGender'] = this.currentdata[0].care_person;
      this.addionalDetail['medical_facility'] = this.currentdata[0].medical_facility;
      this.addionalDetail['order_provided'] = this.currentdata[0].doctor_order;
      this.addionalDetail['need_message'] = this.currentdata[0].needs;
      this.addionalDetail['address'] = this.currentdata[0].contact_address;
      this.addionalDetail['phone'] = this.currentdata[0].contact_number;
    console.log("addional details",this.addionalDetail);
    }
    console.log('ionViewDidLoad NursecurrentrequestPage');
  }

  viewDirection(){
     this.navCtrl.push(NurseviewlocationPage,{'user_details':this.userDetail});
  }
  AdditionDetails(){
    this.navCtrl.push(NurseaddionaldetailPage,{'requestdata':this.addionalDetail});
  }

  closeRequest(req_id){

   console.log(req_id);
   let status = "Cancel";
   this.nurseServ.requestCancel(req_id,status).subscribe(res=>{
     console.log(res);
     if(res.message=="successfull"){
       this.navCtrl.setRoot(RequesthistoryPage);
     }
   })

   
  }
}
