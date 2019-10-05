import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController, LoadingController } from 'ionic-angular';
import { NursecurrentrequestPage } from '../nursecurrentrequest/nursecurrentrequest';
import { SchedulerequestPage } from '../../admin/schedulerequest/schedulerequest';
import { NursecompleterequestPage } from '../nursecompleterequest/nursecompleterequest';
import { NurserejectedrequestPage } from '../nurserejectedrequest/nurserejectedrequest';
import { NurseserviceProvider } from '../../../providers/nurseservice/nurseservice';
import { NurseschedulerequestPage } from '../nurseschedulerequest/nurseschedulerequest';


/**
 * Generated class for the RequesthistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-requesthistory',
  templateUrl: 'requesthistory.html',
})
export class RequesthistoryPage {
 public nurse_id:any;
 public requestDetails:any=[];
 public currentRequest:any=[];
 public schedulRequest:any=[];
 public cancellRequest:any=[];
 public compltRequiest:any=[];


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public menu: MenuController,public nurseServ:NurseserviceProvider,
    public loadingCtrl:LoadingController) {
      this.nurse_id = localStorage.getItem('nurse_id');
    this.menu.enable(true, 'menu1');
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
  
    this.nurseServ.nurserequestHistory(this.nurse_id).subscribe(res=>{
   
      if(res.message=="successful"){
        this.requestDetails = res.result;
        this.currentRequest = this.requestDetails.Current;
        this.schedulRequest = this.requestDetails.Scheduled;
        this.compltRequiest = this.requestDetails.Completed;
        this.cancellRequest = this.requestDetails.Cancel;
        console.log("reject details",this.cancellRequest);

        loading.dismiss();
      }else{
        loading.dismiss();
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequesthistoryPage');
  }
  currnetRequest(){
    
    this.navCtrl.push(NursecurrentrequestPage,{'currentRequest':this.currentRequest});
  }
  scheduleRequest(){
    this.navCtrl.push(NurseschedulerequestPage,{'scheduleRequest':this.schedulRequest});
  }
  completeRequest(){
    console.log("complete new click data",this.compltRequiest);
   this.navCtrl.push(NursecompleterequestPage,{'data1':this.compltRequiest});
  }
  rejectedRequestfuv(){
    this.navCtrl.push(NurserejectedrequestPage,{'rejectData':this.cancellRequest});
  }
}
