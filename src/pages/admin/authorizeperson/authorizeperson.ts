import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';

/**
 * Generated class for the AuthorizepersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-authorizeperson',
  templateUrl: 'authorizeperson.html',
})
export class AuthorizepersonPage {
  public authorizeData:any;
  public person_name:any;
  public person_email:any;
  public person_phone:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.authorizeData = navParams.get('authorize');
    console.log("auth",this.authorizeData);

    this.person_email = this.authorizeData.person_email;
    this.person_name = this.authorizeData.person_name;
    this.person_phone = this.authorizeData.person_phonenumber;


  }

  ionViewDidLoad() {
    if(this.authorizeData==undefined || this.authorizeData==""){
      $('.nodata').show();
    }
    else{
      $('.gayab').show();
    }
    console.log('ionViewDidLoad AuthorizepersonPage');
  }

}
