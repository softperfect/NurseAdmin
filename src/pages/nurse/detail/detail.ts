import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GetdirectionPage } from '../getdirection/getdirection';
import { AdditionaldetailPage } from '../additionaldetail/additionaldetail';
import { NurseviewlocationPage } from '../nurseviewlocation/nurseviewlocation';
import { NurseserviceProvider } from '../../../providers/nurseservice/nurseservice';
import { NurseaddionaldetailPage } from '../nurseaddionaldetail/nurseaddionaldetail';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  public request_id:any;
  public requestData:any;
  public carePerson:any;
  public serviceType:any;
  public services:any=[];
  public addionalDetail:any=[];
  public userDetail:any=[];
  public nurselat:any;
  public nurselon:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
   public nurseServ:NurseserviceProvider) {
     this.nurselat = localStorage.getItem('nurseLat');
     this.nurselon = localStorage.getItem('nurseLon');
    this.request_id = navParams.get('request_id');
  
    console.log("request id",this.request_id);
    this.nurseServ.requestDetails(this.request_id,this.nurselat,this.nurselon).subscribe(res=>{
     
      if(res.message=="successfull"){
        this.requestData = res.result;
        console.log(this.requestData);
        this.carePerson = this.requestData.care_name;
        this.serviceType = this.requestData.service_type_name;
        this.services = this.requestData.services;
        this.addionalDetail['visitType'] = this.requestData.visit_type;
        this.addionalDetail['careGender'] = this.requestData.care_person;
        this.addionalDetail['medical_facility'] = this.requestData.medical_facility;
        this.addionalDetail['order_provided'] = this.requestData.doctor_order;
        this.addionalDetail['need_message'] = this.requestData.needs;
        this.addionalDetail['address'] = this.requestData.contact_address;
        this.addionalDetail['phone'] = this.requestData.contact_number;
        console.log(this.addionalDetail);
        this.userDetail['name'] = this.requestData.user_details.firstname + " " + this.requestData.user_details.lastname;
        this.userDetail['gender'] = this.requestData.user_details.gender;
        this.userDetail['phone'] = this.requestData.user_details.phone_number;
        this.userDetail['address'] = this.requestData.user_details.address;
        this.userDetail['userLat'] = this.requestData.user_details.lat;
        this.userDetail['userLon'] = this.requestData.user_details.lon;
        this.userDetail['userPic'] = this.requestData.user_details.image;
        this.userDetail['distance'] = this.requestData.distance;
        this.userDetail['time'] = this.requestData.arrivel_time;

        console.log("user details",this.userDetail) 

      }
     
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
  viewLocation(){
    this.navCtrl.push(NurseviewlocationPage,{'user_details':this.userDetail});
  }
  viewDetails(){
    this.navCtrl.push(NurseaddionaldetailPage,{'requestdata':this.addionalDetail});
  }
}
