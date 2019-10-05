import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NurseserviceProvider } from '../../../providers/nurseservice/nurseservice';

/**
 * Generated class for the NursingservicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nursingservice',
  templateUrl: 'nursingservice.html',
})
export class NursingservicePage {
  public service_id:any;
  public service_name:any;
  public serviceLsit:any; 
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public nurseServ:NurseserviceProvider,public loadingCtrl:LoadingController) {
    this.service_id = navParams.get('service_id');
    this.service_name = navParams.get('service_name');
    console.log(this.service_id,this.service_name);
  
    
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
    
      loading.present();
    this.nurseServ.serviceTypedetail(this.service_id).subscribe(res=>{
    
      if(res.message=="successful"){
         this.serviceLsit = res.result;
         console.log("service list",this.serviceLsit);
         loading.dismiss();
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NursingservicePage');
  }

}
