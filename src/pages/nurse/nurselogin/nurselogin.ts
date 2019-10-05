import { Component } from '@angular/core';

import {AlertController, IonicPage, Loading, LoadingController, NavController, NavParams,Events} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { NurseforgetpasswordPage } from '../nurseforgetpassword/nurseforgetpassword';
import { NursehomePage } from '../nursehome/nursehome';
import { NursesignupPage } from '../nursesignup/nursesignup';
import { NurseserviceProvider } from '../../../providers/nurseservice/nurseservice';
import { Geolocation } from '@ionic-native/geolocation';
import { FCM } from '@ionic-native/fcm';

/**
 * Generated class for the NurseloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nurselogin',
  templateUrl: 'nurselogin.html',
})
export class NurseloginPage {
  public authForm: FormGroup;
  public lat:any;
  public long:any;
  public nurse_id:any;
  public udid:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder,public loadingCtrl: LoadingController,
    public nurseServ:NurseserviceProvider,public geolocation: Geolocation,
    public fcm:FCM,public events:Events) {
    this.authForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Z0-9a-z._%+-]+@([A-Za-z0-9-]+.)+[A-Za-z]{2,4}$') ])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],

  });
  this.geolocation.getCurrentPosition().then((position) => {

    this.lat = position.coords.latitude;
    this.long = position.coords.longitude;
    
console.log("nurse lat long",this.lat,this.long)

  });
  }

  ionViewDidLoad() {
    this.fcm.getToken().then(token => {
        
      console.log("token is=",token);
      this.udid = token;
    });
    console.log('ionViewDidLoad NurseloginPage');
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
      content: 'Successfully login nurse'
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

  onSubmit(value){

   if(value.email=="" || value.password==""){
    this.presentLoadingDefault();
   }else{
     console.log("fcm token",this.udid);
      this.nurseServ.login(value,this.lat,this.long,this.udid).subscribe(res=>{
     
        if(res.message=="successfull"){
          console.log("nurse login data",res.result);
          this.nurse_id = res.result.id;
          localStorage.setItem('nurse_id',this.nurse_id);
          this.events.publish('nurse_id',this.nurse_id)
          localStorage.setItem('nurseLat',res.result.lat);
          localStorage.setItem('nurseLon',res.result.lon);
         // this.presentLoadingDefault1();
          this.navCtrl.setRoot(NursehomePage);
        }else{
          this.presentLoadingDefault2();
        }
      })

   
   }
   
  }

  forgotPass(){
    this.navCtrl.push(NurseforgetpasswordPage);
  }
  signup(){
    this.navCtrl.push(NursesignupPage);
  }
}
