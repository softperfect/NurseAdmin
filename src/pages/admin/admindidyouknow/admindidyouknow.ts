import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdmindiddetailPage } from '../admindiddetail/admindiddetail';
import { AddblogPage } from '../addblog/addblog';
import { AdminserviceProvider } from '../../../providers/adminservice/adminservice';

/**
 * Generated class for the AdmindidyouknowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admindidyouknow',
  templateUrl: 'admindidyouknow.html',
})
export class AdmindidyouknowPage {
  public blogList:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
   public adminServ:AdminserviceProvider) {
     this.adminServ.getBlog().subscribe(res=>{
       console.log(res);
       this.blogList = res.result;
     })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdmindidyouknowPage');
  }
  diddetails(blog_id){
    this.navCtrl.push(AdmindiddetailPage,{'blog_id':blog_id})
  }
  addyou(){
    this.navCtrl.push(AddblogPage);
  }
}
