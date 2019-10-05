import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';
import { ScheduleservicedetailPage } from '../scheduleservicedetail/scheduleservicedetail';
import { AdditionaldetailPage } from '../../nurse/additionaldetail/additionaldetail';
/**
 * Generated class for the AdminschudlerequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminschudlerequest',
  templateUrl: 'adminschudlerequest.html',
})
export class AdminschudlerequestPage {
  public requestdata:any=[];
  public defaultPic='assets/imgs/user.png';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.requestdata = navParams.get('schedultrequest');
    console.log("schedule request",this.requestdata)
  }

  ionViewDidLoad() {
    if(this.requestdata.length==0 || this.requestdata.length==undefined){
      $('.nodata').show();
    }else{
      $('.shidule').show();
    }
    console.log('ionViewDidLoad AdminschudlerequestPage');
  }

  viewDetails(){
    this.navCtrl.push(ScheduleservicedetailPage,{'requestData':this.requestdata});
  }

  aditionDetails(){
    this.navCtrl.push(AdditionaldetailPage,{'requestData':this.requestdata});
  }

}
