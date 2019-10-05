import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { NurseserviceProvider } from '../../../providers/nurseservice/nurseservice';
import { NurseloginPage } from '../nurselogin/nurselogin';

/**
 * Generated class for the UpdatepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-updatepassword',
  templateUrl: 'updatepassword.html',
})
export class UpdatepasswordPage {
  authForm: FormGroup;
  public nurse_id:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder,public loadingCtrl:LoadingController,
    public nurseServ:NurseserviceProvider) {
    this.authForm = formBuilder.group({
     
      cpass: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      npass: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      repass: ['', Validators.compose([Validators.required, Validators.minLength(6)])],

    });
    this.nurse_id = localStorage.getItem('nurse_id');
    console.log("nurse id",this.nurse_id)
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
      content: 'Password successfully update'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  presentLoadingDefault2() {
    let loading = this.loadingCtrl.create({
      content: 'Invalid Password Please try Again later !'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatepasswordPage');
  }
  onSubmit(value){
 
  if(value.npass == value.repass){
    console.log(value);
    this.nurseServ.nurseupdatePassword(this.nurse_id,value).subscribe(res=>{
      console.log(res);
      if(res.result=="successfull"){
        this.presentLoadingDefault1();
        this.navCtrl.setRoot(NurseloginPage);
      }else{
  this.presentLoadingDefault2();
      }
    })

  }else{
      this.presentLoadingDefault();
  }
  }
}
