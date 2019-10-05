import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import * as $ from 'jquery';
import { AdminserviceProvider } from '../../../providers/adminservice/adminservice';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

/**
 * Generated class for the AdddervicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adddervices',
  templateUrl: 'adddervices.html',
})
export class AdddervicesPage {
  public service_id:any;
  public serviceList:any=[];
  authForm: FormGroup;
  public service_name:any
  public servic:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
   public adminServ:AdminserviceProvider,public loadingCtrl:LoadingController,
   public formBuilder: FormBuilder) {
    this.authForm = formBuilder.group({
      servic: ['', Validators.compose([Validators.required])],

  });

    this.service_id = this.navParams.get('service_id');
    this.service_name = this.navParams.get('service_name');
    console.log("service id",this.service_id,this.service_name);
    this.adminServ.serviceDetail(this.service_id).subscribe(res=>{
        let loading = this.loadingCtrl.create({
          content: 'Please wait...'
        });
        loading.present();
      if(res.message=="successful"){
        this.serviceList = res.result;
        console.log("service list",this.serviceList);
        loading.dismiss();
      }else{
        loading.dismiss();
      }
    })
  }
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please Fill the fields.'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  presentLoadingDefault1() {
    let loading = this.loadingCtrl.create({
      content: 'Successfully add service'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  presentLoadingDefault2() {
    let loading = this.loadingCtrl.create({
      content: 'Add service failed.'
    })
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  presentLoadingDefault3() {
    let loading = this.loadingCtrl.create({
      content: 'Remove service successfully.'
    })
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdddervicesPage');
  }

  editss(){
   $(".hidess").toggle();
   $(".add-bars span").toggle();
  }
  submit(value){
   
   if(value.servic=="" || value.servic==undefined){
   this.presentLoadingDefault();
   }else{
    console.log(this.service_id,value.servic);
    this.adminServ.addservice(this.service_id,value.servic).subscribe(res=>{
      console.log(res);
      if(res.message=="successfull"){
        this.servic = "";
       this.presentLoadingDefault1();
       this.adminServ.serviceDetail(this.service_id).subscribe(res=>{
        let loading = this.loadingCtrl.create({
          content: 'Please wait...'
        });
        loading.present();
      if(res.message=="successful"){
        this.serviceList = res.result;
        console.log("service list",this.serviceList);
        loading.dismiss();
      }else{
        loading.dismiss();
      }
    })

      }else{
        this.presentLoadingDefault2();
      }
    })
   }
  }
  deleteServ(service_id){
   console.log(service_id);
   this.adminServ.removeService(service_id).subscribe(res=>{
     console.log(res);
     if(res.result=="successfull"){
  this.presentLoadingDefault3();
  this.adminServ.serviceDetail(this.service_id).subscribe(res=>{
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
  if(res.message=="successful"){
    this.serviceList = res.result;
    loading.dismiss();
  }else{
    loading.dismiss();
  }
})
     }
   })
  }

  update(value){
    console.log(value);
  }
}
