import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewnotesPage } from '../viewnotes/viewnotes';
import { NursewritenotesPage } from '../nursewritenotes/nursewritenotes';

/**
 * Generated class for the NurseelectronicnotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nurseelectronicnotes',
  templateUrl: 'nurseelectronicnotes.html',
})
export class NurseelectronicnotesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NurseelectronicnotesPage');
  }
  viewNotes(){
    this.navCtrl.push(ViewnotesPage);
  }
  writeNotes(){
    this.navCtrl.push(NursewritenotesPage);
  }
}
