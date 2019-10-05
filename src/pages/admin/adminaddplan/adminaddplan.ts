import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import * as $ from 'jquery';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AdminserviceProvider } from '../../../providers/adminservice/adminservice';
import { AdminpricingplanPage } from '../adminpricingplan/adminpricingplan';

/**
 * Generated class for the AdminaddplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminaddplan',
  templateUrl: 'adminaddplan.html',
})
export class AdminaddplanPage {
  authForm: FormGroup;
  public serviceTypeList:any=[]; 
  public pricing_id:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder,public loadingCtrl:LoadingController,
    public adminSev:AdminserviceProvider) {
      this.pricing_id = navParams.get('pricing_id');
      console.log("pricing id",this.pricing_id);
    this.authForm = formBuilder.group({
      plan_type: [],
      service_type: [],
      plan_title: [],
      add_visit: [],
      visit_price: [],
      free_visit: [],
      plan_name: [],
      plan_price: [],
 
  });
  }

  ionViewDidLoad() {
    this.adminSev.serviceTypelist().subscribe(res=>{
     
      this.serviceTypeList = res.result.slice(0,1);
      console.log(this.serviceTypeList);
    })
    console.log('ionViewDidLoad AdminaddplanPage');
  }
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please fill all details.'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  presentLoadingDefault1() {
    let loading = this.loadingCtrl.create({
      content: 'Successfully add plan'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  planType(e){
  
   if(e=='Monthly'){
    $(".show20").show();
    $(".hide20").hide();
   }else{
    $(".show20").hide();
    $(".hide20").show();
   }
  }

  monthlyPlan(value){
    if(value.service_type=="" || value.service_type==undefined || value.plan_title =="" ||
    value.plan_title == undefined || value.add_visit=="" || value.add_visit== undefined || 
    value.visit_price== "" || value.visit_price == undefined || value.free_visit== "" || 
    value.free_visit == undefined){
    this.presentLoadingDefault();
    }else{
      
      this.adminSev.addplan(value).subscribe(res=>{
        console.log(res);
        if(res.message=="successfull"){
          this.presentLoadingDefault1();
          this.navCtrl.setRoot(AdminpricingplanPage);
        }

      })
    }
  
  }
  serviceType(){

  }
  hourlyPlan(value){

    if(value.plan_name=="" || value.plan_name==undefined || value.plan_price=="" || 
    value.plan_price==undefined || this.pricing_id=="" || this.pricing_id==undefined){
      this.presentLoadingDefault();
    }
 else{
   console.log(value,this.pricing_id);
   this.adminSev.addhourlyPlan(this.pricing_id,value).subscribe(res=>{
     console.log(res);
     if(res.message=="successfull"){
      this.presentLoadingDefault1();
      this.navCtrl.setRoot(AdminpricingplanPage);
     }
   })
 }
  }
}
