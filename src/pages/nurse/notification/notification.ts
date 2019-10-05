import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FCM } from '../../../../node_modules/@ionic-native/fcm';

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {
  public notificationdata:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public fcm:FCM) {
    this.fcm.onNotification().subscribe(data => {
   console.log("fcm data",data);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }

}
