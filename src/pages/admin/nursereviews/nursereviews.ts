import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,MenuController } from 'ionic-angular';
import { AdminelectronicnPage } from '../adminelectronicn/adminelectronicn';
import { AdmincurrentrequestPage} from "../admincurrentrequest/admincurrentrequest";
import { AdmincompletrequestPage} from "../admincompletrequest/admincompletrequest";
import { AdminschudlerequestPage} from "../adminschudlerequest/adminschudlerequest";
import { AdminrejectrequestPage} from "../adminrejectrequest/adminrejectrequest";
import { AdminserviceProvider } from '../../../providers/adminservice/adminservice';
import { NursepersonalinfoPage } from '../nursepersonalinfo/nursepersonalinfo';

/**
 * Generated class for the NursereviewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nursereviews',
  templateUrl: 'nursereviews.html',
})
export class NursereviewsPage {
  public nurse_id:any;
  public nurseDetails:any;
  public nurse_name:any;
  public nurse_pic:any;
  public nurse_status:any;
  public defaultpic:any="assets/imgs/request.png";
  public status:any;
  public nurse_lat:any;
  public nurse_lon:any;
  public currentRequest:any=[];
  public completeRequest:any=[];
  public scheduleRequest:any=[];
  public cancelRequest:any=[];
  public rating:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public aadminServ:AdminserviceProvider,public menu: MenuController,
    public loadingCtrl:LoadingController) {
    
    this.nurse_id = navParams.get('nurse_id');
    console.log("nurse id",this.nurse_id);
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
   
   this.aadminServ.nurseDetail(this.nurse_id).subscribe(res=>{
     console.log("nurse details",res)
     if(res.message=="successful"){
      this.nurseDetails = res.result;
      loading.dismiss();
      console.log("nurse details",this.nurseDetails);
      this.nurse_name = this.nurseDetails.firstname + " " +this.nurseDetails.lastname;
      this.nurse_pic = this.nurseDetails.image;
      this.status = this.nurseDetails.status;
      this.currentRequest = this.nurseDetails.Current;
      this.nurse_lat = this.nurseDetails.lat;
      this.nurse_lon = this.nurseDetails.lon;
      this.rating = this.nurseDetails.rating;
      this.completeRequest = this.nurseDetails.Completed;
      this.scheduleRequest = this.nurseDetails.Scheduled;
      this.cancelRequest = this.nurseDetails.Cancel;
     }else{
      loading.dismiss();
     }

   })
  }

  ionViewDidLoad() {
    this.menu.enable(true, 'menu2');
    console.log('ionViewDidLoad NursereviewsPage');
  }
  viewPersonal(){
    this.navCtrl.push(NursepersonalinfoPage,{'nurseinfor':this.nurseDetails});
  }
  electronic(){
    this.navCtrl.push(AdminelectronicnPage);
  }

  viewcurrent(){
    this.navCtrl.push(AdmincurrentrequestPage,{'currentRequest':this.currentRequest,'nurse_lat':this.nurse_lat,'nurse_lon':this.nurse_lon});
  }

  viewcomple(){
    this.navCtrl.push(AdmincompletrequestPage,{'completrequest':this.completeRequest});
  }

  viewshedule(){
    this.navCtrl.push(AdminschudlerequestPage,{'schedultrequest':this.scheduleRequest});
  }

  viewreject(){
    this.navCtrl.push(AdminrejectrequestPage,{'cancelRequest':this.cancelRequest});
  }

}
