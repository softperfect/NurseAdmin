import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';
import { AdmincompletservicedetailPage } from '../admincompletservicedetail/admincompletservicedetail';
import { CompletservicedetailPage } from '../completservicedetail/completservicedetail';
import { AdditionaldetailPage } from '../../nurse/additionaldetail/additionaldetail';

/**
 * Generated class for the AdmincompletrequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admincompletrequest',
  templateUrl: 'admincompletrequest.html',
})
export class AdmincompletrequestPage {
  public requestData:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.requestData = navParams.get('completrequest');
    console.log("complete request",this.requestData);
  }

  ionViewDidLoad() {
    if(this.requestData.length==0 || this.requestData.length==undefined){
      $('.nodata').show();
    }else{
      $('.shidule').show();
    }
    console.log('ionViewDidLoad AdmincompletrequestPage');
  }
  viewDetails(){
    this.navCtrl.push(CompletservicedetailPage,{'completRequest':this.requestData})
  }

  aditionDetails(){
    this.navCtrl.push(AdditionaldetailPage,{'requestData':this.requestData});
  }
}
