import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AdminserviceProvider } from '../../../providers/adminservice/adminservice';
import { AdmincancilpolicyPage } from '../admincancilpolicy/admincancilpolicy';

/**
 * Generated class for the AdminupdatepolicyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminupdatepolicy',
  templateUrl: 'adminupdatepolicy.html',
})
export class AdminupdatepolicyPage {
  public policy_id:any;
  public descprition:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
   public adminServ:AdminserviceProvider,public loadingCtrl:LoadingController) {
    this.policy_id = navParams.get('policy_id');
    console.log("policy id",this.policy_id);
    this.adminServ.policyDetail(this.policy_id).subscribe(res=>{
      console.log(res);
      this.descprition = res.result.description;
    })
  }
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  upadte(){
    console.log(this.descprition);
    this.adminServ.updatePolicy(this.policy_id,this.descprition).subscribe(res=>{
      console.log(res);
      if(res.message=="successfull"){
        this.presentLoadingDefault();
        this.navCtrl.push(AdmincancilpolicyPage);
      }
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminupdatepolicyPage');
  }

}
