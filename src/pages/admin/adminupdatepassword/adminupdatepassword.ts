import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AdminserviceProvider } from '../../../providers/adminservice/adminservice';  
 


/**
 * Generated class for the AdminupdatepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminupdatepassword',
  templateUrl: 'adminupdatepassword.html',
})
export class AdminupdatepasswordPage {
  authForm: FormGroup;
 public admin_id:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public formBuilder: FormBuilder,public loadingCtrl:LoadingController,
     public adminServ:AdminserviceProvider) {
    this.authForm = formBuilder.group({
     
      cpass: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      npass: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      repass: ['', Validators.compose([Validators.required, Validators.minLength(6)])],

    });
    this.admin_id = localStorage.getItem('admin_id');
    console.log("admin id ",this.admin_id)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminupdatepasswordPage');
  }
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Password does not match'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  presentLoadingDefault1() {
    let loading = this.loadingCtrl.create({
      content: 'Password update successfully'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  presentLoadingDefault2() {
    let loading = this.loadingCtrl.create({
      content: 'Invalid Password Please try again later'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  onSubmit(value){
  console.log(value);
  if(value.npass==value.repass){
    this.adminServ.adminupdatePassword(this.admin_id,value).subscribe(res=>{
      console.log(res);
      if(res.result=="successfull"){
      this.presentLoadingDefault1();
      }else{
        this.presentLoadingDefault2();
      }
    }) 
  } else{
   this.presentLoadingDefault();
  }
  }
}
