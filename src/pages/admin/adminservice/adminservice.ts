import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AdddervicesPage } from '../adddervices/adddervices';
import { AdminserviceProvider } from '../../../providers/adminservice/adminservice';

/**
 * Generated class for the AdminservicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminservice',
  templateUrl: 'adminservice.html',
})
export class AdminservicePage {
  public serviceList:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public adminServ: AdminserviceProvider,public loadingCtrl:LoadingController) {
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
    
      loading.present();
      this.adminServ.serviceTypelist().subscribe(res=>{
       
        if(res.message=="successful"){
          this.serviceList = res.result.slice(0,1);
          loading.dismiss();
        }else{
          loading.dismiss();
        }
        
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminservicePage');
  }
  viewPersonal(service_id,service_name){
    console.log(service_id);
    this.navCtrl.push(AdddervicesPage,{'service_id':service_id,'service_name':service_name});
  }

}
