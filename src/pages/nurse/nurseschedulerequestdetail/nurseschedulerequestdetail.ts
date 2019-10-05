import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NurseschedulerequestdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nurseschedulerequestdetail',
  templateUrl: 'nurseschedulerequestdetail.html',
})
export class NurseschedulerequestdetailPage {
  public requestdata:any;
  public page:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.requestdata = navParams.get('serviceDetail');
    console.log("schedule data",this.requestdata);
    this.page = navParams.get('page');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NurseschedulerequestdetailPage');
  }

}
