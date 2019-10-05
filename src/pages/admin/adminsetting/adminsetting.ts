import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdminaccountsettingPage } from '../adminaccountsetting/adminaccountsetting';
import { AdminrequestPage } from '../adminrequest/adminrequest';
import { AdmincancilpolicyPage } from '../admincancilpolicy/admincancilpolicy';
import { AdminfaqsPage } from '../adminfaqs/adminfaqs';
import { AdminaboutPage } from '../adminabout/adminabout';
import { AdminsendnotificationPage } from '../adminsendnotification/adminsendnotification';
import { AdminratenursingPage } from '../adminratenursing/adminratenursing';
import { AdminupdatepasswordPage } from '../adminupdatepassword/adminupdatepassword';
import { AdminprivacypolicyPage } from '../adminprivacypolicy/adminprivacypolicy';
import { AdmintermofusePage } from '../admintermofuse/admintermofuse';

/**
 * Generated class for the AdminsettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminsetting',
  templateUrl: 'adminsetting.html',
})
export class AdminsettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminsettingPage');
  }
  AccountSetting(){
    this.navCtrl.push(AdminaccountsettingPage);
  }
  requestTime(){
    this.navCtrl.push(AdminrequestPage)
  }
  cancelPolicy(){
    this.navCtrl.push(AdmincancilpolicyPage);
  }
  faqs(){
    this.navCtrl.push(AdminfaqsPage);
  }
  about(){
    this.navCtrl.push(AdminaboutPage);
  }
  notification(){
    this.navCtrl.push(AdminsendnotificationPage);
  }
  rateApp(){
   this.navCtrl.push(AdminratenursingPage);
}
updatePassword(){
  this.navCtrl.push(AdminupdatepasswordPage);
}
privacyPolicy(){
  this.navCtrl.push(AdminprivacypolicyPage);
}
termOfuse(){
  this.navCtrl.push(AdmintermofusePage);
}
}
