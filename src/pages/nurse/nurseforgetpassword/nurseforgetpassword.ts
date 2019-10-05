import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NurseloginPage } from '../nurselogin/nurselogin';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { NurseserviceProvider } from '../../../providers/nurseservice/nurseservice';

/**
 * Generated class for the NurseforgetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nurseforgetpassword',
  templateUrl: 'nurseforgetpassword.html',
})
export class NurseforgetpasswordPage {
  authForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder,public nurseserv:NurseserviceProvider,public loadingCtrl:LoadingController) {
    this.authForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Z0-9a-z._%+-]+@([A-Za-z0-9-]+.)+[A-Za-z]{2,4}$') ])],

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NurseforgetpasswordPage');
  }
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Updated Password has been sent to your registred mail id'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 3000);
  }
  presentLoadingDefault1() {
    let loading = this.loadingCtrl.create({
      content: 'Email does not exit'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 3000);
  }
  onSubmit(value){
    console.log(value);
    this.nurseserv.nurseforgetPassword(value).subscribe(res=>{
      console.log(res);
      if(res.message=="successfull"){
        this.presentLoadingDefault();
              this.navCtrl.push(NurseloginPage);
      }
      else{
         this.presentLoadingDefault1();
      }
    })
   
  }

}
