import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from "jquery";
import { NurseschedulerequestdetailPage } from '../nurseschedulerequestdetail/nurseschedulerequestdetail';
import { NurseaddionaldetailPage } from '../nurseaddionaldetail/nurseaddionaldetail';

/**
 * Generated class for the NurserejectedrequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nurserejectedrequest',
  templateUrl: 'nurserejectedrequest.html',
})
export class NurserejectedrequestPage {
  public rejectedData:any=[];
  public serviceDetails:any=[];
  public addionalDetail:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rejectedData = navParams.get('rejectData');
    console.log("reject data",this.rejectedData);
  }

  ionViewDidLoad() {

    if(this.rejectedData.length==0 || this.rejectedData.length==""){
      $('.nodata').show();
    }else{
      $('.shidule').show();
    }
    console.log('ionViewDidLoad NurserejectedrequestPage');
  }

  viewDetails(careType,serviceType,service){
    this.serviceDetails['care_person'] = careType;
    this.serviceDetails['serviceType'] = serviceType
    this.serviceDetails['services'] = service;
    console.log(this.serviceDetails);
    let page = "Rejected Requests";
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

