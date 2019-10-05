import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from "jquery";
import { NurseschedulerequestdetailPage } from '../nurseschedulerequestdetail/nurseschedulerequestdetail';
import { NurseaddionaldetailPage } from '../nurseaddionaldetail/nurseaddionaldetail';

/**
 * Generated class for the NursecompleterequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nursecompleterequest',
  templateUrl: 'nursecompleterequest.html',
})
export class NursecompleterequestPage {
 
  public data:any=[];
 public serviceDetails:any=[];
 public addionalDetail:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  
   this.data = navParams.get('data1');
    console.log("complete request data",this.data);
  }

  ionViewDidLoad() {
  
    if(this.data.length==0 || this.data.length==""){
      $('.nodata').show();
    }else{
      $('.shidule').show();
    
    }
    console.log('ionViewDidLoad NursecompleterequestPage');
  }

  viewDetails(care_person,serviceType,services){
 this.serviceDetails['care_person'] = care_person;
    this.serviceDetails['serviceType'] = serviceType
    this.serviceDetails['services'] = services;
    console.log(this.serviceDetails);
    let page = "Completed Requests";

    this.navCtrl.push(NurseschedulerequestdetailPage,{'serviceDetail':this.serviceDetails,'page':page});
  }

  aditionDetails(vistType,gender,medical,order,needs,address,phne){
    this.addionalDetail['visitType'] = vistType;
    this.addionalDetail['careGender'] = gender;
    this.addionalDetail['medical_facility'] = medical;
    this.addionalDetail['order_provided'] = order;
    this.addionalDetail['need_message'] = needs;
    this.addionalDetail['address'] = address;
    this.addionalDetail['phone'] =phne;
    console.log(this.addionalDetail);
    this.navCtrl.push(NurseaddionaldetailPage,{'requestdata':this.addionalDetail});
  }
}
