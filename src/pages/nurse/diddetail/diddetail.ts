import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NurseserviceProvider } from '../../../providers/nurseservice/nurseservice';

/**
 * Generated class for the DiddetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-diddetail',
  templateUrl: 'diddetail.html',
})
export class DiddetailPage {
  public blog_id:any;
  public blog_name:any;
  public blog_dec:any;
  public blog_date:any;
  public blog_img:any;
  public blog_auther:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public nurseServ:NurseserviceProvider,public loadingCtrl:LoadingController) {
    this.blog_id = navParams.get('blog_id');
    console.log("blog id ",this.blog_id);
   
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
    
      loading.present();
    this.nurseServ.blogDetails(this.blog_id).subscribe(res=>{
      console.log(res);
      if(res.message=="successful"){
         this.blog_name = res.result.blog_name;
         this.blog_dec = res.result.blog_description;
         this.blog_img = res.result.blog_image;
         this.blog_date = res.result.created_date;
         this.blog_auther = res.result.author_name;
         loading.dismiss();
      }
    })
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiddetailPage');
  }

}
