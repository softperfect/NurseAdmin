import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SchedulerequestdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedulerequestdetail',
  templateUrl: 'schedulerequestdetail.html',
})
export class SchedulerequestdetailPage {
  public requestDta:any;
  public carePerson:any;
  public serviceType:any;
  public nurseId:any;
  public nurseCategory:any;

  public visitCharge:any;
  public services:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.requestDta = navParams.get('requestdata');
    console.log("request data",this.requestDta);
    this.carePerson = this.requestDta[0].care_type;
    this.serviceType = this.requestDta[0].service_type_name;
    this.nurseId = this.requestDta[0].nurse_unique_id;
    this.nurseCategory = this.requestDta[0].nurse_type;
    this.visitCharge = this.requestDta[0].visit_charge;
    this.services = this.requestDta[0].services;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulerequestdetailPage');
  }

}
