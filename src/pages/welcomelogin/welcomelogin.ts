import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NurseloginPage } from '../nurse/nurselogin/nurselogin';
import { AdminloginPage } from '../admin/adminlogin/adminlogin';

/**
 * Generated class for the WelcomeloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcomelogin',
  templateUrl: 'welcomelogin.html',
})
export class WelcomeloginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomeloginPage');
  }
  nurse(){
    this.navCtrl.push(NurseloginPage);
  }
  admin(){
    this.navCtrl.push(AdminloginPage);
  }
}
