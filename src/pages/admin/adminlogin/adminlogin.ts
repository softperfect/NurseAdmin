import { Component } from '@angular/core';

import {AlertController, IonicPage, Loading, LoadingController, NavController, NavParams,Events} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { AdminforgetpasswordPage } from '../adminforgetpassword/adminforgetpassword';
import { AdminhomePage } from '../adminhome/adminhome';
import { AdminserviceProvider } from '../../../providers/adminservice/adminservice';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the AdminloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminlogin',
  templateUrl: 'adminlogin.html',
})
export class AdminloginPage {
  public authForm: FormGroup;
  public lat:any;
  public long:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController,public formBuilder: FormBuilder,
    public adminserv:AdminserviceProvider,public geolocation: Geolocation,public events:Events) {
    this.authForm = formBuilder.group({

      email: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Z0-9a-z._%+-]+@([A-Za-z0-9-]+.)+[A-Za-z]{2,4}$') ])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],

  });
  this.geolocation.getCurrentPosition().then((position) => {

    this.lat = position.coords.latitude;
    this.long = position.coords.longitude;
    

    console.log("lattitute",position.coords.latitude);
    console.log("lattitute",position.coords.longitude);

  });
  }
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please fill all details'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  presentLoadingDefault1() {
    let loading = this.loadingCtrl.create({
      content: 'Successfully login Admin'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  presentLoadingDefault2() {
    let loading = this.loadingCtrl.create({
      content: 'Invalid Email or Password'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminloginPage');
  }
  onSubmit(value){
    console.log(value);
    if(value.email=="" || value.password==""){
      this.presentLoadingDefault();
    }else{
      this.adminserv.login(value).subscribe(res=>{
        console.log(res);
        if(res.message=="successfull"){
          this.presentLoadingDefault1();
          this.navCtrl.setRoot(AdminhomePage);
          localStorage.setItem('admin_id',res.result.id);
       
          this.events.publish('admin_id',res.result.id)
          console.log("admin id ",res.result.id);
        }else{
           this.presentLoadingDefault2();
        }
      })
      
    }
    
   }
   forgotPass(){
     this.navCtrl.push(AdminforgetpasswordPage);
   }
}
