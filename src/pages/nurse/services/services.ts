import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NursingservicePage } from '../nursingservice/nursingservice';
import { PeronalservicePage } from '../peronalservice/peronalservice';
import { NurseserviceProvider } from '../../../providers/nurseservice/nurseservice';

/**
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {
public serviceTypelist:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public nurseServ:NurseserviceProvider,public loadingCtrl:LoadingController) {
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
         loading.present();
      this.nurseServ.serviceType().subscribe(res=>{
       
        if(res.message=="successful"){
          this.serviceTypelist = res.result.slice(0,1);
          console.log("service type list",this.serviceTypelist);
          loading.dismiss();
        }
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesPage');
  }
  viewNursing(service_id,service_name){
    console.log(service_id,service_name);
    this.navCtrl.push(NursingservicePage,{'service_id':service_id,'service_name':service_name});
  }
 
}
