import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AdminserviceProvider } from '../../../providers/adminservice/adminservice';
import { AdminrequestPage } from '../adminrequest/adminrequest';

/**
 * Generated class for the AdminsetrequesttimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminsetrequesttime',
  templateUrl: 'adminsetrequesttime.html',
})
export class AdminsetrequesttimePage {
  authForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder,public loadingCtrl:LoadingController,
    public adminServ:AdminserviceProvider) {
      this.authForm = formBuilder.group({
        visit_type: [],

    });
  }
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please fill the blank fields...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminsetrequesttimePage');
  }
  save(value){
 
  if(value.visit_type=="" || value.visit_type==undefined){
  this.presentLoadingDefault();
  }else{
    
    this.adminServ.addVisittype(value).subscribe(res=>{
      console.log(res);
      if(res.message=="successfull"){
        this.navCtrl.push(AdminrequestPage);
      }
    })
  }
  }
}
