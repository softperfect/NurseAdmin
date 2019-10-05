import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { FaqdetailPage } from '../faqdetail/faqdetail';
import { ShareappwithfriendPage } from '../shareappwithfriend/shareappwithfriend';
import { UnableloginPage } from '../unablelogin/unablelogin';
import { NotreceivingmailPage } from '../notreceivingmail/notreceivingmail';
import { LogoutfromPage } from '../logoutfrom/logoutfrom';

/**
 * Generated class for the FaqsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faqs',
  templateUrl: 'faqs.html',
})
export class FaqsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqsPage');
  }
  fqDetails(){
    let profileModal = this.modalCtrl.create(FaqdetailPage);
    profileModal.present();
  }
  shareApp(){
    let profileModal = this.modalCtrl.create(ShareappwithfriendPage);
    profileModal.present();
  }

  unableLogin(){
    let profileModal = this.modalCtrl.create(UnableloginPage);
    profileModal.present();
  }

  notreceiving(){
     let profileModal = this.modalCtrl.create(NotreceivingmailPage);
     profileModal.present();
  }
  logoutfrom(){
     let profileModal = this.modalCtrl.create(LogoutfromPage);
     profileModal.present();
  }

}
