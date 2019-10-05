import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { NurseprofilePage } from '../nurseprofile/nurseprofile';
import { NurseelectronicnotesPage } from '../nurseelectronicnotes/nurseelectronicnotes';
import { UpdatepasswordPage } from '../updatepassword/updatepassword';
import { CancellpolicyPage } from '../cancellpolicy/cancellpolicy';
import { NotificationPage } from '../notification/notification';
import { FaqsPage } from '../faqs/faqs';
import { ShareappPage } from '../shareapp/shareapp';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the NursesettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nursesetting',
  templateUrl: 'nursesetting.html',
})
export class NursesettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl:ModalController,private socialSharing: SocialSharing) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NursesettingPage');
  }

  myprofile(){
    this.navCtrl.push(NurseprofilePage);
  }
  electonic(){
    this.navCtrl.push(NurseelectronicnotesPage);
  }
  updatePass(){
    this.navCtrl.push(UpdatepasswordPage);
  }
  cancelPolicy(){
    this.navCtrl.push(CancellpolicyPage);
  }
  notification(){
    this.navCtrl.push(NotificationPage);
  }
  faqs(){
    this.navCtrl.push(FaqsPage)
  }
  shareApp(){
    //  let profileModal = this.modalCtrl.create(ShareappPage);
    //  profileModal.present();

    this.socialSharing.share("NursingOnDemand", "You can download here App", "", "https://play.google.com/store/apps/details?id=nursing.admin.starter&hl=en").
    then(() => {
    alert("Sharing success");
  
    }).catch(() => {
  
    alert("Share failed");
    });
      

  }
}
