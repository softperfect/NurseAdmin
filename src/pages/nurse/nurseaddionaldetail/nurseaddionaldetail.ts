import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NurseaddionaldetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nurseaddionaldetail',
  templateUrl: 'nurseaddionaldetail.html',
})
export class NurseaddionaldetailPage {
  public requestdata:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.requestdata = navParams.get('requestdata');
    console.log("req data",this.requestdata);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NurseaddionaldetailPage');
  }

}
