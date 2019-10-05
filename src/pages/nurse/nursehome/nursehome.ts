import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController, LoadingController, Events } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { NurseserviceProvider } from '../../../providers/nurseservice/nurseservice';
import * as $ from "jquery";

/**
 * Generated class for the NursehomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nursehome',
  templateUrl: 'nursehome.html',
})
export class NursehomePage {
  public nurse_id:any;
  public requestdata:any=[];
  public defaultPic='assets/imgs/userdefault.png';
  public nursePic:any;
  public nurseName:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public menu: MenuController,public nurseServ:NurseserviceProvider,
    public loadingCtrl:LoadingController,public events:Events) {
      this.nurse_id = localStorage.getItem('nurse_id');
      
      this.nurseServ.nurseGetprofile(this.nurse_id).subscribe(res=>{
       
        this.nursePic = res.result.image;
        this.events.publish('nursePic',this.nursePic);
        this.nurseName = res.result.firstname + " " + res.result.lastname;
        this.events.publish('nurse_name',this.nurseName);
        console.log(this.nursePic,this.nurseName);

      })
      
      console.log("nurse id",this.nurse_id);
    this.menu.enable(true, 'menu1');
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
    this.nurseServ.serviceRequestList(this.nurse_id).subscribe(res=>{
      console.log(res);
      if(res.message=="successful"){
        this.requestdata = res.result;
        console.log(this.requestdata);
        $('.blk').show();
        $('.no-detas').hide();
        loading.dismiss();
      }
      else if(res.message=="unsuccessful"){
        $('.blk').hide();
        $('.no-detas').show();
        loading.dismiss();
}    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NursehomePage');
  }
  
  

  details(request_id){
    this.navCtrl.push(DetailPage,{'request_id':request_id});
  }

  accept(value,req_id){
   console.log(value,req_id);
   this.nurseServ.requestCancel(req_id,value).subscribe(res=>{
     console.log(res);
     if(res.message=="successfull"){
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
    
      loading.present();
      this.nurseServ.serviceRequestList(this.nurse_id).subscribe(res=>{
        console.log(res);
        if(res.message=="successful"){
          this.requestdata = res.result;
          console.log(this.requestdata);
          $('.blk').show();
          $('.no-detas').hide();
          loading.dismiss();
        }
        else if(res.message=="unsuccessful"){
          $('.blk').hide();
          $('.no-detas').show();
          loading.dismiss();
  }    })
     }
   })
  }
  reject(value,req_id){
   console.log(value,req_id);
   this.nurseServ.requestCancel(req_id,value).subscribe(res=>{
    console.log(res);
    if(res.message=="successfull"){
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
    
      loading.present();
      this.nurseServ.serviceRequestList(this.nurse_id).subscribe(res=>{
        console.log(res);
        if(res.message=="successful"){
          this.requestdata = res.result;
          console.log(this.requestdata);
          $('.blk').show();
          $('.no-detas').hide();
          loading.dismiss();
        }
        else if(res.message=="unsuccessful"){
          $('.blk').hide();
          $('.no-detas').show();
          loading.dismiss();
  }    })
     }
  })
  }
  }


