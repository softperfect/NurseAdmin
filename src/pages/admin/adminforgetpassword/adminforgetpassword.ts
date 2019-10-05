import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AdminloginPage } from '../adminlogin/adminlogin';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AdminserviceProvider } from '../../../providers/adminservice/adminservice';

/**
 * Generated class for the AdminforgetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminforgetpassword',
  templateUrl: 'adminforgetpassword.html',
})
export class AdminforgetpasswordPage {
  authForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder,public adminServ:AdminserviceProvider,
     public loadingCtrl:LoadingController) {
    this.authForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Z0-9a-z._%+-]+@([A-Za-z0-9-]+.)+[A-Za-z]{2,4}$') ])],

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminforgetpasswordPage');
  }
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Updated Password has been sent to your registred mail id'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  presentLoadingDefault1() {
    let loading = this.loadingCtrl.create({
      content: 'Email id does not Exit'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  onSubmit(value){
    console.log(value);
    this.adminServ.adminforgetPassword(value).subscribe(res=>{
      console.log(res);
      if(res.message=="successfull"){
        this.presentLoadingDefault();
         this.navCtrl.setRoot(AdminloginPage);
      }
      else{
   this.presentLoadingDefault1();
      }
    })
   
  }
}
