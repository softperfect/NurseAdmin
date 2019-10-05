import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CompletservicedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-completservicedetail',
  templateUrl: 'completservicedetail.html',
})
export class CompletservicedetailPage {
  public complteRequest:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.complteRequest = navParams.get('completRequest');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompletservicedetailPage');
  }

}
