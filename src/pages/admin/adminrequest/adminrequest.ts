import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AdminsetrequesttimePage } from '../adminsetrequesttime/adminsetrequesttime';
import { AdminserviceProvider } from '../../../providers/adminservice/adminservice';
import * as $ from 'jquery'



/**
 * Generated class for the AdminrequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminrequest',
  templateUrl: 'adminrequest.html',
})
export class AdminrequestPage {
 public visitList:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
   public adminServ:AdminserviceProvider,public loadingCtrl:LoadingController) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
    this.adminServ.visitList().subscribe(res=>{

      if(res.message=="successful"){
        this.visitList = res.result;
        console.log("visit list",this.visitList)
        loading.dismiss();
      }else{
        loading.dismiss();
      }
      
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminrequestPage');
  }
  setTime(){
    this.navCtrl.push(AdminsetrequesttimePage);
  }

  deletedem(){
 $(".trash").toggle();
  }
  delete(visit_id){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
  this.adminServ.removeVisit(visit_id).subscribe(res=>{
    console.log(res);
    if(res.result=="successfull"){
   loading.dismiss();
   this.adminServ.visitList().subscribe(res=>{

    if(res.message=="successful"){
      this.visitList = res.result;
      console.log("visit list",this.visitList)
     
    }
    
  })
    }
  })
  }
}
