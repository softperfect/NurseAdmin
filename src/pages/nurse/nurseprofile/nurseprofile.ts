import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NurseeditprofilePage } from '../nurseeditprofile/nurseeditprofile';
import { NurseserviceProvider } from '../../../providers/nurseservice/nurseservice';


/**
 * Generated class for the NurseprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-nurseprofile',
  templateUrl: 'nurseprofile.html',
})
export class NurseprofilePage {
public nurse_id:any;
 public nurseData:any;
 public nurseImg:any;
 public nurseName:any;
 public nurseStatus:any;
 public nurseGender:any;
 public nurseWork:any;
 public nurseType:any;
 public nurseId:any;
 public defaultImage:any="assets/imgs/profile.png";

  constructor(public navCtrl: NavController, public navParams: NavParams,public nurseServ:NurseserviceProvider ) {
    this.nurse_id = localStorage.getItem('nurse_id');
   
    this.nurseServ.nurseGetprofile(this.nurse_id).subscribe(res=>{
      if(res.message=="successfull"){
        this.nurseData = res.result;
        this.nurseName = this.nurseData.firstname +" "+ this.nurseData.lastname;
        this.nurseGender = this.nurseData.gender;
        this.nurseWork = this.nurseData.workplace;
        this.nurseType = this.nurseData.nurse_type;
        this.nurseId = this.nurseData.nurse_id;
        this.nurseImg = this.nurseData.image;
        this.nurseStatus = this.nurseData.status;
     console.log("nurse data",res.result)

        
      }
      
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NurseprofilePage');
  };
  editprofile(){
    this.navCtrl.push(NurseeditprofilePage);
  }
 
}
