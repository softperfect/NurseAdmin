import { Component, ViewChild ,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DiddetailPage } from '../diddetail/diddetail';
import { AddblogPage } from '../../admin/addblog/addblog';
import { NurseserviceProvider } from '../../../providers/nurseservice/nurseservice';
import * as $ from "jquery";

/**
 * Generated class for the DidyouknowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-didyouknow',
  templateUrl: 'didyouknow.html',
})
export class DidyouknowPage {
  public blogList:any=[];
  @ViewChild('myInput') myInput: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams,
   public nurseServ:NurseserviceProvider,public loadingCtrl:LoadingController) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
  
    this.nurseServ.blogList().subscribe(res=>{
      
      if(res.message=="successful"){
        this.blogList = res.result;
        console.log(this.blogList);
        loading.dismiss();
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DidyouknowPage');
  }
  diddetails(blog_id){
    this.navCtrl.push(DiddetailPage,{'blog_id':blog_id});
  }


}
