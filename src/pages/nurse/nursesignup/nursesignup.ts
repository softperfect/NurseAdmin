import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Loading, AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import * as $ from 'jquery'
import { NursehomePage } from '../nursehome/nursehome';
import { NurseserviceProvider } from '../../../providers/nurseservice/nurseservice';
import { Geolocation } from '@ionic-native/geolocation';
import { FCM } from '../../../../node_modules/@ionic-native/fcm';

/**
 * Generated class for the NursesignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nursesignup',
  templateUrl: 'nursesignup.html',
})
export class NursesignupPage {
  authForm: FormGroup;
  public formValue:any=[];
  public lat:any;
  public long:any;
  public nurse_id:any;
  public serviceType:any=[];
  public serviceType_id:any;
  public categoryList:any=[];
  public udid:any;
  loading:Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,public nurseServ:NurseserviceProvider,public geolocation: Geolocation,
    public fcm:FCM,public alertCtrl:AlertController) {
    this.authForm = formBuilder.group({
      firstName: ['', Validators.compose([Validators.required, Validators.pattern('[A-Za-z ]{1,32}')])],
      lastName: ['', Validators.compose([Validators.required, Validators.pattern('[A-Za-z ]{1,32}')])],
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Z0-9a-z._%+-]+@([A-Za-z0-9-]+.)+[A-Za-z]{2,4}$') ])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      phone: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{1,15}'),Validators.minLength(10),Validators.required,Validators.maxLength(10)])],
      repassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      nurseExp: ['', Validators.compose([Validators.required])],
      workPlace:['', Validators.compose([Validators.required])],
      nursecat:['', Validators.compose([Validators.required])],
      nursegender:['', Validators.compose([Validators.required])],
      Occupation:['', Validators.compose([Validators.required])],
    });

    this.geolocation.getCurrentPosition().then((position) => {

      this.lat = position.coords.latitude;
      this.long = position.coords.longitude;
      
      console.log("lattitute",position.coords.latitude);
      console.log("lattitute",position.coords.longitude);

    });
    this.nurseServ.serviceType().subscribe(res=>{
     console.log("service type",res)
     if(res.message=="successful"){
       this.serviceType = res.result;
       console.log("service type",this.serviceType)
       this.serviceType_id = this.serviceType[0].id;
       console.log("service type id",this.serviceType_id);
       this.onChange();
     }
    })
  }
  categoryChange(nurseCat){
  console.log(nurseCat);
  }

  onChange(){
   
   this.nurseServ.NurseCategory(this.serviceType_id).subscribe(res=>{
     console.log("nurse category",res)
    if(res.message=="successful"){
      this.categoryList = res.result;
      console.log("category list",res.result);
    }
    
   })
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
      content: 'Password does not match'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  presentLoadingDefault2() {
    let loading = this.loadingCtrl.create({
      content: 'Successfully Registred nurse'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  presentLoadingDefault3() {
    let loading = this.loadingCtrl.create({
      content: 'Registration Failed'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NursesignupPage');
    this.fcm.getToken().then(token => {
        
      console.log("token is=",token);
      this.udid = token;
    });
  }
  onSubmit(value: any): void {
    if(value.phone=="" || value.nurseExp=="" || value.workPlace=="" || value.nursecat=="" || value.nursegender==""){
      this.presentLoadingDefault();
    }
   
   else{
     
     this.formValue['phone'] = value.phone;
     this.formValue['nurseExp'] = value.nurseExp;
     this.formValue['workPlace'] = value.workPlace;
     this.formValue['nursecat'] = value.nursecat;
     this.formValue['nursegender'] = value.nursegender;
     this.formValue['serviceType_id'] = this.serviceType_id;
    
     

     console.log("service id",this.formValue)

    this.nurseServ.registred(this.formValue,this.lat,this.long,this.udid).subscribe(res=>{
      console.log("registred kapil sir",res);
      if(res.message=="successfull"){
        this.nurse_id = res.result.id;

        console.log("nurse id",this.nurse_id);
        localStorage.setItem('nurse_id',this.nurse_id);
        //this.presentLoadingDefault2();
        this.navCtrl.setRoot(NursehomePage);
      }
      else{
        this.showError(res.result);
      }

      
    })
     
   }
}

showError(text) {
  

  let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
  });
  alert.present();
}

firstsign(value){
  
  if(value.firstName=="" || value.lastName=="" || value.email=="" || value.password=="" || value.repassword==""){
   this.presentLoadingDefault();
   console.log(value);
  }else {
    console.log(value);
    if(value.password==value.repassword){
      this.formValue['firstName'] = value.firstName;
      this.formValue['lastName'] = value.lastName;
      this.formValue['email'] = value.email;
      this.formValue['password'] = value.password;
      console.log(this.formValue);

      $(".bg-2").css("right","0");
      $(".btn-designss").show();
    }else{
      this.presentLoadingDefault1();
    }
   
  }

}

backg(){
  $(".bg-2").css("right","-359px");
  $(".btn-designss").hide();
}
}
