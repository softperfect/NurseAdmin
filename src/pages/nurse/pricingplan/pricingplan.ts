import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NurseserviceProvider } from '../../../providers/nurseservice/nurseservice';

/**
 * Generated class for the PricingplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pricingplan',
  templateUrl: 'pricingplan.html',
})
export class PricingplanPage {
  public pricingPlan:any=[];
  public hourlyplan:any=[];
  public loading:any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,public nurseServ:NurseserviceProvider,
     public loadingCtrl:LoadingController) {
      this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      this.loading.present();
       this.nurseServ.pricingplanList().subscribe(res=>{
         this.loading.dismiss();
         this.pricingPlan = res.result;
         console.log(this.pricingPlan);
       })

       this.nurseServ.pricingplanListbyhourly().subscribe(res=>{
         
         if(res.message=="successful"){
          this.hourlyplan = res.result;
          console.log("hourly plan",this.hourlyplan);
         }
         
       })
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PricingplanPage');
  }

}
