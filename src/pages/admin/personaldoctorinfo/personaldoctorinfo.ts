import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the PersonaldoctorinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personaldoctorinfo',
  templateUrl: 'personaldoctorinfo.html',
})
export class PersonaldoctorinfoPage {
  public doc_info:any;
  public name:any;
  public gender:any;
  public dob:any;
  public doc_name:any;
  public doc_email:any;
  public doc_phne:any

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController) {
    this.doc_info=navParams.get('doc_info');
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
    if(this.doc_info == "" || this.doc_info ==undefined){
      loading.dismiss();
    }else{
          loading.dismiss();
    }
    console.log(this.doc_info);
    this.name = this.doc_info.name;
    this.gender = this.doc_info.gender;
    this.dob = this.doc_info.user_dob;
    this.doc_name = this.doc_info.doc_name;
    this.doc_email = this.doc_info.doc_email;
    this.doc_phne = this.doc_info.doc_phone;
    if(this.doc_phne=="" || this.doc_phne==undefined){
      this.doc_phne = "xxxx-xxx-xxxx";
    }
    if(this.doc_email=="" || this.doc_email==undefined){
      this.doc_email = "Dr Email here";
    }
    if(this.doc_name=="" || this.doc_name==undefined){
      this.doc_name = "Dr Name here";
    }
    if(this.gender=="" || this.gender==undefined){
      this.gender = "User Gender here";
    }
    if(this.dob=="" || this.dob==undefined){
      this.dob = "User D.O.B here";
    }
    if(this.name=="" || this.name==undefined){
      this.name = "User Name here";
    }

      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonaldoctorinfoPage');
  }

}
