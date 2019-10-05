import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdminserviceProvider } from '../../../providers/adminservice/adminservice';

/**
 * Generated class for the AdmindiddetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admindiddetail',
  templateUrl: 'admindiddetail.html',
})
export class AdmindiddetailPage {
  public blog_id:any;
  public auther_name:any;
  public blog_description:any;
  public blog_name:any;
  public blog_date:any;
  public blog_image:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
   public adminServ:AdminserviceProvider) {
    this.blog_id = navParams.get('blog_id');
    console.log("blog id",this.blog_id);
   this.adminServ.blogDetails(this.blog_id).subscribe(res=>{
     console.log(res);
     this.auther_name = res.result.author_name
     this.blog_description = res.result.blog_description;
     this.blog_name = res.result.blog_name;
     this.blog_date = res.result.created_date;
     this.blog_image = res.result.blog_image;
   })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdmindiddetailPage');
  }

}
