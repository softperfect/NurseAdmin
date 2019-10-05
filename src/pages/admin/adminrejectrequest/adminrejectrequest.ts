import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';
import { AdminrejectrequestdetailPage } from '../adminrejectrequestdetail/adminrejectrequestdetail';
import { AdditionaldetailPage } from '../../nurse/additionaldetail/additionaldetail';

/**
 * Generated class for the AdminrejectrequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminrejectrequest',
  templateUrl: 'adminrejectrequest.html',
})
export class AdminrejectrequestPage {
  public requestdata:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.requestdata = navParams.get('cancelRequest');
    console.log("reject data",this.requestdata);

  }

  ionViewDidLoad() {
    if(this.requestdata.length==0 || this.requestdata.length==undefined){
      $('.nodata').show();
    }else{
      $('.shidule').show();
    }
    console.log('ionViewDidLoad AdminrejectrequestPage');
  }
  viewDetails(){
    this.navCtrl.push(AdminrejectrequestdetailPage,{'requestData':this.requestdata});
  }
  aditionDetails(){
    this.navCtrl.push(AdditionaldetailPage,{'requestData':this.requestdata});
  }
}
