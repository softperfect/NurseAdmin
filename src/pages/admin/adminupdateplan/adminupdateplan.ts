import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AdminserviceProvider } from '../../../providers/adminservice/adminservice';
import { AdminpricingplanPage } from '../adminpricingplan/adminpricingplan';

/**
 * Generated class for the AdminupdateplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminupdateplan',
  templateUrl: 'adminupdateplan.html',
})
export class AdminupdateplanPage {
  authForm: FormGroup;
 public pricing_id:any;
public plan_title:any;
public add_visit:any;
public visit_price:any;
public free_visit:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder,public adminServ:AdminserviceProvider) {
      this.pricing_id = navParams.get('princing_id');
      console.log("pricing id",this.pricing_id);
      this.authForm = formBuilder.group({
        plan_title: [],
        add_visit: [],
        visit_price: [],
        free_visit: [],
   
    });
  this.adminServ.pricingPlandetail(this.pricing_id).subscribe(res=>{
    console.log(res);
    this.plan_title = res.result[0].plan_name;
    this.add_visit = res.result[0].visits;
    this.visit_price = res.result[0].price;
    this.free_visit = res.result[0].free_visits;
  })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminupdateplanPage');
  }
  updatePlan(value){
  console.log(value);
  this.adminServ.updatepricingPlan(this.pricing_id,value).subscribe(res=>{
    console.log(res);
    if(res.message=="successfull"){
      this.navCtrl.setRoot(AdminpricingplanPage);
    }
  })
  }
}
