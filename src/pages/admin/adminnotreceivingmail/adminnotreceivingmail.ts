import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AdminnotreceivingmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminnotreceivingmail',
  templateUrl: 'adminnotreceivingmail.html',
})
export class AdminnotreceivingmailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
   public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminnotreceivingmailPage');
  }
  dIsmss(){
    this.viewCtrl.dismiss();
  }

}
