import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NursepersonalinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nursepersonalinfo',
  templateUrl: 'nursepersonalinfo.html',
})
export class NursepersonalinfoPage { 
  public nurseinfo:any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nurseinfo = navParams.get('nurseinfor');
    console.log("nurse info",this.nurseinfo)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NursepersonalinfoPage');
  }

}
