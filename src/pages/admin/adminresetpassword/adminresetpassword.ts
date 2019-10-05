import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AdminresetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminresetpassword',
  templateUrl: 'adminresetpassword.html',
})
export class AdminresetpasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminresetpasswordPage');
  }
  dIsmss(){
    this.viewCtrl.dismiss();
  }

}
