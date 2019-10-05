import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdminrejectrequestdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminrejectrequestdetail',
  templateUrl: 'adminrejectrequestdetail.html',
})
export class AdminrejectrequestdetailPage {
  public requestdata:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.requestdata = navParams.get('requestData');
    console.log("reject data",this.requestdata);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminrejectrequestdetailPage');
  }

}
