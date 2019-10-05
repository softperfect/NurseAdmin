import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NursereviewsPage } from '../nursereviews/nursereviews';
import { AdminserviceProvider } from '../../../providers/adminservice/adminservice';

/**
 * Generated class for the AllnursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-allnurse',
  templateUrl: 'allnurse.html',
})
export class AllnursePage {
  public nurseList:any=[];
  public defaultImg:any='assets/imgs/userdefault.png';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,public adminServ:AdminserviceProvider,
    public loadingCtrl:LoadingController) {
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
      this.adminServ.getAllNurselist().subscribe(res=>{
       
        if(res.message="successfull"){
          loading.dismiss();
          this.nurseList = res.result;
          console.log("nurse id",this.nurseList);
        }
      })
  }
  presentLoadingDefault3() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AllnursePage');
  }
  ViewReview(nurse_id){
    console.log(nurse_id);
    this.navCtrl.push(NursereviewsPage,{'nurse_id':nurse_id});
  }
  onModelChange(rating){
        console.log(rating);
  }
  presentLoadingDefault2() {
    let loading = this.loadingCtrl.create({
      content: 'No data found'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  onInput(nurse){
console.log(nurse.target.value);
this.adminServ.searchNurse(nurse.target.value).subscribe(res=>{
  console.log(res);
  if(res.message=="successful"){
    this.nurseList = res.result; 
    this.presentLoadingDefault3()
;     }
  else if(res.message=="unsuccessful"){
   this.presentLoadingDefault2();
  }
})

  }

  delete(nurse_id){
    console.log(nurse_id);
    this.adminServ.deleteNurse(nurse_id).subscribe(res=>{
      console.log(res);
      if(res.result=="successfull"){
        let loading = this.loadingCtrl.create({
          content: 'Please wait...'
        });
        loading.present();
        this.adminServ.getAllNurselist().subscribe(res=>{
         
          if(res.message="successfull"){
            loading.dismiss();
            this.nurseList = res.result;
            console.log("nurse id",this.nurseList);
          }
        })
      }else{
        alert("failed to delete nurse")
      }
    })
  }
}
