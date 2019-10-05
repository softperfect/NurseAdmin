import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';
import { AdmincompletservicedetailPage } from '../admincompletservicedetail/admincompletservicedetail';
import { AdditionaldetailPage } from '../../nurse/additionaldetail/additionaldetail';

/**
 * Generated class for the CompleterequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-completerequest',
  templateUrl: 'completerequest.html',
})
export class CompleterequestPage {
  public completRequest:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.completRequest = navParams.get('completrequest');
    console.log("complet request",this.completRequest.length)
  }

  ionViewDidLoad() {
    if(this.completRequest.length==0 || this.completRequest.length==undefined){
      $('.nodata').show();
  }else{
    $('.shidule').show();
  }

    console.log('ionViewDidLoad CompleterequestPage');
  }
  viewDetails(){
    this.navCtrl.push(AdmincompletservicedetailPage,{'completRequest':this.completRequest});
  }

  aditionDetails(){
    this.navCtrl.push(AdditionaldetailPage,{'requestData':this.completRequest})
  }
}
