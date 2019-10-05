import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';

/**
 * Generated class for the FamilyprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-familyprofile',
  templateUrl: 'familyprofile.html',
})
export class FamilyprofilePage {
  public familyLsit:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.familyLsit = navParams.get('familymember');
    console.log("family details",this.familyLsit);
    console.log(this.familyLsit)
  }

  ionViewDidLoad() {
    if(this.familyLsit==undefined || this.familyLsit==""){
      $('.nodata').show();
    }
    else{
      $('.info-dad').show();
    }
    console.log('ionViewDidLoad FamilyprofilePage');
  }

}
