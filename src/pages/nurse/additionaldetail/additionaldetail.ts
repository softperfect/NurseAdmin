import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdditionaldetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-additionaldetail',
  templateUrl: 'additionaldetail.html',
})
export class AdditionaldetailPage {
  public currentrequest:any;
  public contact_number:any;
  public contact_address:any;
  public visit_name:any;
  public needs_gender:any;
  public order_provided:any;
  public medical_facility:any;
  public needs:any; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentrequest = navParams.get('requestData');
    console.log("current data",this.currentrequest);
    this.contact_number = this.currentrequest[0].contact_number;
    this.contact_address = this.currentrequest[0].contact_address;
    this.visit_name = this.currentrequest[0].visit_type;
    this.needs_gender = this.currentrequest[0].care_person;
    this.order_provided = this.currentrequest[0].doctor_order;
    this.medical_facility = this.currentrequest[0].medical_facility;
    this.needs = this.currentrequest[0].needs;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdditionaldetailPage');
  }

}
