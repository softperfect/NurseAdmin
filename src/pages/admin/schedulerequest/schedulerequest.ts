import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdditionaldetailPage } from '../../nurse/additionaldetail/additionaldetail';
import { SchedulerequestdetailPage } from '../../nurse/schedulerequestdetail/schedulerequestdetail';
import * as $ from 'jquery';

/**
 * Generated class for the SchedulerequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedulerequest',
  templateUrl: 'schedulerequest.html',
})
export class SchedulerequestPage {
  public schedulerequest:any=[];
  public nurse_name:any;
  public request_time:any;
  public request_id:any;
  public nurse_pic:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.schedulerequest = navParams.get('schedule');

    console.log("schedule request",this.schedulerequest);
    console.log("schedule request",this.schedulerequest);
    
  }

  ionViewDidLoad() {

    if(this.schedulerequest.length == 0 || this.schedulerequest ==undefined){
      $('.nodata').show();
    }else{
      $('.shidule').show();
    }
    console.log('ionViewDidLoad SchedulerequestPage');
  }
  aditionDetails(){
    this.navCtrl.push(AdditionaldetailPage,{'requestData':this.schedulerequest});
  }
  viewDetails(){
    this.navCtrl.push(SchedulerequestdetailPage,{'requestdata':this.schedulerequest});
  }

}
