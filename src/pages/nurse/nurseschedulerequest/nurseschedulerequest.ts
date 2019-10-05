import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from "jquery";
import { SchedulerequestdetailPage } from '../schedulerequestdetail/schedulerequestdetail';
import { NurseschedulerequestdetailPage } from '../nurseschedulerequestdetail/nurseschedulerequestdetail';
import { NurseaddionaldetailPage } from '../nurseaddionaldetail/nurseaddionaldetail';

/**
 * Generated class for the NurseschedulerequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nurseschedulerequest',
  templateUrl: 'nurseschedulerequest.html',
})
export class NurseschedulerequestPage {
  public requestdata:any=[];
  public serviceDetails:any=[];    
  public addionalDetail:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.requestdata = navParams.get('scheduleRequest');
   // console.log("schedule data",this.requestdata);


  }

  ionViewDidLoad() {

    if(this.requestdata.length ==0 || this.requestdata.length==""){
      $('.nodata').show();
   
    }else{
      $('.shidule').show();
   
  
    
     
    }
    console.log('ionViewDidLoad NurseschedulerequestPage');
  }
  viewDetails(careType,service_type_name,services){
    let page = "Scheduled Requests";
    this.serviceDetails['care_person'] = careType;
    this.serviceDetails['serviceType'] = service_type_name;
    this.serviceDetails['services'] = services;
    this.navCtrl.push(NurseschedulerequestdetailPage,{'serviceDetail':this.serviceDetails,'page':page});
  }
  aditionDetails(visit_type,care_person,medical_facility,doctor_order,needs,contact_address,contact_number){
    this.addionalDetail['visitType'] = visit_type;
    this.addionalDetail['careGender'] = care_person;
    this.addionalDetail['medical_facility'] = medical_facility;
    this.addionalDetail['order_provided'] = doctor_order;
    this.addionalDetail['need_message'] = needs;
    this.addionalDetail['address'] = contact_address;
    this.addionalDetail['phone'] = contact_number;
    console.log("addional deetails",this.addionalDetail);
    this.navCtrl.push(NurseaddionaldetailPage,{'requestdata':this.addionalDetail});
  }
}
