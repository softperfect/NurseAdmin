import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AdminresetpasswordPage } from '../adminresetpassword/adminresetpassword';
import { AdminshareappwithfriendPage } from '../adminshareappwithfriend/adminshareappwithfriend';
import { AdmincantloginPage } from '../admincantlogin/admincantlogin';
import { AdminnotreceivingmailPage } from '../adminnotreceivingmail/adminnotreceivingmail';
import { AdminlogoutfromPage } from '../adminlogoutfrom/adminlogoutfrom';

/**
 * Generated class for the AdminfaqsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminfaqs',
  templateUrl: 'adminfaqs.html',
})
export class AdminfaqsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminfaqsPage');
  }
  adminReset(){
    let profileModal = this.modalCtrl.create(AdminresetpasswordPage);
    profileModal.present();
  }

  shareApp(){
    let profileModal = this.modalCtrl.create(AdminshareappwithfriendPage);
    profileModal.present();
  }

  unableLogin(){
    let profileModal = this.modalCtrl.create(AdmincantloginPage);
    profileModal.present();
  }

  notreceiving(){
    let profileModal = this.modalCtrl.create(AdminnotreceivingmailPage);
    profileModal.present();
  }

  logoutfrom(){
    let profileModal = this.modalCtrl.create(AdminlogoutfromPage);
    profileModal.present();
  }
}
