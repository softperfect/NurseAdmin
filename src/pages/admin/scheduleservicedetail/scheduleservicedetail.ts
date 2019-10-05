import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ScheduleservicedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scheduleservicedetail',
  templateUrl: 'scheduleservicedetail.html',
})
export class ScheduleservicedetailPage {
  public requestData:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.requestData = navParams.get('requestData');
    console.log("schedule data",this.requestData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScheduleservicedetailPage');
  }

}
