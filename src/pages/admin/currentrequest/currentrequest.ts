import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GetdirectionPage } from '../../nurse/getdirection/getdirection';
import { AdditionaldetailPage } from '../../nurse/additionaldetail/additionaldetail';
import * as $ from 'jquery';

/**
 * Generated class for the CurrentrequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-currentrequest',
  templateUrl: 'currentrequest.html',
})
export class CurrentrequestPage {
public currentRequest:any=[];
public nurse_name:any;
public request_date:any;
public nurse_pic:any;
public request_id:any;
public needs_person:any;
public service_type:any;
public nurse_id:any;
public nurse_category:any;
public arrival_time:any;
public visit_charge:any;
public request_services:any=[];
public user_lat:any;
public user_lon:any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentRequest = navParams.get('currentRequest');
    console.log("current request",this.currentRequest);
    this.user_lat = navParams.get('user_lat');
    this.user_lon = navParams.get('user_lon');
   console.log("user lat lon",this.user_lat,this.user_lon);
  }

  ionViewDidLoad() {
    if(this.currentRequest.length==0 || this.currentRequest==""){
      $('.nodata').show();
     
    }
    else{
      $('.gayab').show();
      this.nurse_name = this.currentRequest[0].nurse_name;
      this.request_date = this.currentRequest[0].created_date;
      this.nurse_pic = this.currentRequest[0].nurse_image;
      this.request_id = this.currentRequest[0].request_id;
      this.service_type = this.currentRequest[0].service_type_name;
      this.nurse_id = this.currentRequest[0].nurse_unique_id;
      this.nurse_category = this.currentRequest[0].nurse_type;
      this.visit_charge = this.currentRequest[0].visit_charge;
      this.request_services = this.currentRequest[0].services;
      this.needs_person = this.currentRequest[0].care_type;
      this.arrival_time = this.currentRequest[0].arrivel_time;
      
   
     
    }
    console.log('ionViewDidLoad CurrentrequestPage');
  }
  viewLocation(){
    this.navCtrl.push(GetdirectionPage,{'nurse_data':this.currentRequest,'user_lat':this.user_lat,'user_lon':this.user_lon});
  }

  viewDetails(){
    this.navCtrl.push(AdditionaldetailPage,{'requestData':this.currentRequest});
  }

}
