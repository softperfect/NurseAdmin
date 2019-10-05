import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdminrateuserPage } from '../adminrateuser/adminrateuser';

/**
 * Generated class for the AdminratenursingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminratenursing',
  templateUrl: 'adminratenursing.html',
})
export class AdminratenursingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminratenursingPage');
  }
  rateUser(){
    this.navCtrl.push(AdminrateuserPage);
  }
}
