import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery'
import {NursereviewsPage} from "../nursereviews/nursereviews";
import {AdminnotesdetailsPage} from "../adminnotesdetails/adminnotesdetails";

/**
 * Generated class for the AdminelectronicnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminelectronicn',
  templateUrl: 'adminelectronicn.html',
})
export class AdminelectronicnPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminelectronicnPage');
  }

  delte(){
    $(".modal1").show();
  }

  delteok(){
    $(".modal1").hide();
  }

  videDeails(){
    this.navCtrl.push(AdminnotesdetailsPage);
  }

}
