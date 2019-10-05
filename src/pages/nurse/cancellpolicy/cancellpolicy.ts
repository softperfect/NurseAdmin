import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NurseserviceProvider } from '../../../providers/nurseservice/nurseservice'; 

/**
 * Generated class for the CancellpolicyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cancellpolicy',
  templateUrl: 'cancellpolicy.html',
})
export class CancellpolicyPage {
  public cancelLsit:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
   public nurseServ:NurseserviceProvider,public loadingCtrl:LoadingController) {
   
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
    
      loading.present();
     this.nurseServ.cancelPolicy().subscribe(res=>{
       console.log(res);
       if(res.message=="successful"){
        this.cancelLsit = res.result[0].description;
        loading.dismiss();
       }else{
         loading.dismiss();
       }
     })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancellpolicyPage');
  }

}
