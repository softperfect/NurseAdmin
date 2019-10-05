import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdmincompletservicedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admincompletservicedetail',
  templateUrl: 'admincompletservicedetail.html',
})
export class AdmincompletservicedetailPage {
  public requestDta:any;
  public carePerson:any;
  public serviceType:any;
  public nurseId:any;
  public nurseCategory:any;
  public arriveTime:any;
  public requestCompltiontime:any;
  public visitTime:any;
  public visitCharge:any;
  public services:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.requestDta = navParams.get('completRequest');
    console.log("request data",this.requestDta);
    this.carePerson = this.requestDta[0].care_type;
    this.serviceType = this.requestDta[0].service_type_name;
    this.nurseId = this.requestDta[0].nurse_unique_id;
    this.nurseCategory = this.requestDta[0].nurse_type;
    this.arriveTime = this.requestDta[0].arrivel_time;
    this.requestCompltiontime = this.requestDta[0].arrivel_time;
    this.visitTime = this.requestDta[0].arrivel_time;
    this.visitCharge = this.requestDta[0].visit_charge;
    this.services = this.requestDta[0].services;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdmincompletservicedetailPage');
  }

}
