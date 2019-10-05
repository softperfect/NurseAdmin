import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NurseserviceProvider } from '../../../providers/nurseservice/nurseservice';
import { AdminaddplanPage } from '../adminaddplan/adminaddplan';
import { AdminserviceProvider } from '../../../providers/adminservice/adminservice';
import * as $ from 'jquery'
import { AdminupdateplanPage } from '../adminupdateplan/adminupdateplan';

/**
 * Generated class for the AdminpricingplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminpricingplan',
  templateUrl: 'adminpricingplan.html',
})
export class AdminpricingplanPage {
  public pricingPlan:any=[];
  public hourlyplan:any=[];
  public loading:any;
  public pricing_id:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public adminServ:AdminserviceProvider,public loadingCtrl:LoadingController) {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
     this.adminServ.pricingplanList().subscribe(res=>{
       this.loading.dismiss();
       this.pricingPlan = res.result;
       console.log(this.pricingPlan);
     
     })

  }

  ionViewDidLoad() {
    this.adminServ.pricingplanListbyhourly().subscribe(res=>{
      console.log(res);
      this.hourlyplan = res.result;
      this.pricing_id = res.result[0].id;

    console.log(this.pricing_id);
  })
    console.log('ionViewDidLoad AdminpricingplanPage');
  }
  addPlan(){
    this.navCtrl.push(AdminaddplanPage,{'pricing_id':this.pricing_id});
  }

  editPlan(){
    $(".editbtn").show();
    $(".deletebtn").hide();
  }

  deletePlan(){
    $(".editbtn").hide();
    $(".deletebtn").show();
  }
  removePaln(plan_name){
   console.log("plan name",plan_name);
   this.adminServ.RemovemonthlyPlan(plan_name).subscribe(res=>{
     console.log(res);
     if(res.result=="successfull"){
      this.adminServ.pricingplanList().subscribe(res=>{
        this.loading.dismiss();
        this.pricingPlan = res.result;
        console.log(this.pricingPlan);
      
      })
     }
    
   })
  }
  removeHour(pln_id){
   console.log(pln_id);
   this.adminServ.RemovehourlyPlan(pln_id).subscribe(res=>{
     console.log(res);
     if(res.result=="successfull"){
      this.adminServ.pricingplanListbyhourly().subscribe(res=>{
        console.log(res);
        this.hourlyplan = res.result;
        this.pricing_id = res.result[0].id;
  
      console.log(this.pricing_id);
    })
     }
   })
  }
  edit(pricing_id){
  console.log(pricing_id);
  this.navCtrl.push(AdminupdateplanPage,{'princing_id':pricing_id});
  }
}
