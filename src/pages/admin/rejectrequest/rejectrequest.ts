import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RejectrequestdetailPage } from '../rejectrequestdetail/rejectrequestdetail';
import { AdditionaldetailPage } from '../../nurse/additionaldetail/additionaldetail';
import * as $ from 'jquery';

/**
 * Generated class for the RejectrequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rejectrequest',
  templateUrl: 'rejectrequest.html',
})
export class RejectrequestPage {
public cancelRequest:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cancelRequest = navParams.get('cancel');
    console.log("cancel request",this.cancelRequest);

  }

  ionViewDidLoad() {

    if(this.cancelRequest.length == 0 || this.cancelRequest.length == undefined){
      
      $('.nodata').show();
    }else{
      $('.shidule').show();
    }
    console.log('ionViewDidLoad RejectrequestPage');
  }
  viewDetails(){
    this.navCtrl.push(RejectrequestdetailPage);
  }
  aditionDetails(){
    this.navCtrl.push(AdditionaldetailPage,{'requestData':this.cancelRequest});
  }
}
