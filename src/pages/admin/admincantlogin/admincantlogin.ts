import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AdmincantloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admincantlogin',
  templateUrl: 'admincantlogin.html',
})
export class AdmincantloginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
   public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdmincantloginPage');
  }
  dIsmss(){
    this.viewCtrl.dismiss();
  }
}
