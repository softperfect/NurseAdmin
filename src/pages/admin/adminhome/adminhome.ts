import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController, LoadingController, Events } from 'ionic-angular';
import { UserdetailPage } from '../userdetail/userdetail';
import { AdminserviceProvider } from '../../../providers/adminservice/adminservice';

/**
 * Generated class for the AdminhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminhome',
  templateUrl: 'adminhome.html',
})
export class AdminhomePage {
  public userList:any=[];
  public defaultPic:any="assets/imgs/userdefault.png";
  public admin_id:any;
  public adminpic:any;
  public adminName:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public menu: MenuController,public adminserv:AdminserviceProvider,
    public loadingCtrl:LoadingController,public events:Events) {
      this.admin_id = localStorage.getItem('admin_id');
     this.adminserv.adminGetprofile(this.admin_id).subscribe(res=>{
      
       this.adminpic = res.result.image;
       this.events.publish('userPic',this.adminpic);
       this.adminName = res.result.firstname + " " + res.result.lastname;
       this.events.publish('adminname',this.adminName);
     })

    this.menu.enable(true, 'menu2');
    this.adminserv.allUserlist().subscribe(res=>{
      this.userList = res.result;
      console.log(this.userList);
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
  onInput(s){
   console.log(s.target.value);
   this.adminserv.searchUser(s.target.value).subscribe(res=>{
     console.log(res);
 
  
 
     if(res.message=="successful"){
       this.userList = res.result; 
       this.presentLoadingDefault3()
;     }
     else if(res.message=="unsuccessful"){
      this.presentLoadingDefault2();
     }
   })
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

  ionViewDidLoad() {

    console.log('ionViewDidLoad AdminhomePage');
  }
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'successfully Removed user'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  
  }
  presentLoadingDefault1() {
    let loading = this.loadingCtrl.create({
      content: 'Failed to Removed user'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  
  }
details(user_id){

  console.log("hello users",user_id);
  this.navCtrl.push(UserdetailPage,{'userId':user_id});
}
delete(user_id){
  console.log(user_id);
  this.adminserv.deleteUser(user_id).subscribe(res=>{
   console.log(res)
   if(res.result=="successfull"){
     this.presentLoadingDefault();
      this.adminserv.allUserlist().subscribe(res=>{
      this.userList = res.result;
      console.log(this.userList);
    })
   }else{
    this.presentLoadingDefault1();
   }
  })
}
  }
