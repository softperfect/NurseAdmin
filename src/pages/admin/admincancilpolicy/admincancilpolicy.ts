import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdminupdatepolicyPage } from '../adminupdatepolicy/adminupdatepolicy';
import { AdminserviceProvider } from '../../../providers/adminservice/adminservice';

/**
 * Generated class for the AdmincancilpolicyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admincancilpolicy',
  templateUrl: 'admincancilpolicy.html',
})
export class AdmincancilpolicyPage {
  public policy_dec:any;
  public policy_id:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
   public adminServ:AdminserviceProvider) {
     this.adminServ.cancelpolicy().subscribe(res=>{
     
       this.policy_dec = res.result[0].description;
       this.policy_id = res.result[0].id;
       console.log("deception",this.policy_dec)
     })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdmincancilpolicyPage');
  }
  policy(){
    this.navCtrl.push(AdminupdatepolicyPage,{'policy_id':this.policy_id});
  }
}
