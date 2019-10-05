import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GetdirectionPage} from "../../nurse/getdirection/getdirection";
import {AdditionaldetailPage} from "../../nurse/additionaldetail/additionaldetail";
import * as $ from 'jquery';
import { AdmingetdirectionPage } from '../admingetdirection/admingetdirection';

/**
 * Generated class for the AdmincurrentrequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admincurrentrequest',
  templateUrl: 'admincurrentrequest.html',
})
export class AdmincurrentrequestPage {
  public currentrequest:any=[];
  public nurse_lat:any;
  public nurse_lon:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentrequest = navParams.get('currentRequest');
    console.log("currrent request",this.currentrequest);
    this.nurse_lat  = navParams.get('nurse_lat');
    this.nurse_lon = navParams.get('nurse_lon');
    console.log("nurse lat lon",this.nurse_lat,this.nurse_lon);
  }

  ionViewDidLoad() {
    if(this.currentrequest.length==0 || this.currentrequest==""){
      $('.nodata').show();
     
    }
    else{
      $('.gayab').show();

    }

    console.log('ionViewDidLoad AdmincurrentrequestPage');
  }

  Viewpams(){
    this.navCtrl.push(AdmingetdirectionPage,{'userdata':this.currentrequest,'nurse_lat':this.nurse_lat,'nurse_lon':this.nurse_lon});
  }

  AdditionDetails1(){
    this.navCtrl.push(AdditionaldetailPage,{'requestData':this.currentrequest});
  }

}
