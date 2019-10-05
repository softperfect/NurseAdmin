import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation} from "@ionic-native/geolocation";

declare var google;

/**
 * Generated class for the AdmingetdirectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admingetdirection',
  templateUrl: 'admingetdirection.html',
})
export class AdmingetdirectionPage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  public userData:any;
  public nurse_lat:any;
  public nurse_lon:any;
  public user_lat:any;
  public user_lon:any;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,public geolocation: Geolocation) {
       this.userData = navParams.get('userdata');
       console.log("user data",this.userData);
       this.nurse_lat = navParams.get('nurse_lat');
       this.nurse_lon = navParams.get('nurse_lon');
       this.user_lat = this.userData[0].lat;
       this.user_lon = this.userData[0].lon;
  }

  ionViewDidLoad() {
    this.displayGoogleMap();
    console.log('ionViewDidLoad AdmingetdirectionPage');
  }
  displayGoogleMap(){

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(this.user_lat, this.user_lon);
      console.log(position.coords.latitude); 

      let mapOptions = {
        center: latLng,
        zoom: 12,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }


      this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
   
      this.addUserMarkersToMap(this.user_lat,this.user_lon);
      this.addUserMarkersTo(this.nurse_lat,this.nurse_lon);

    },(err)=>{
      console.log(err);
    });
   

  }
  addUserMarkersToMap(lat,long) {
    console.log(lat,long)
    var position = new google.maps.LatLng(lat,long);
    var museumMarker = new google.maps.Marker({position: position,icon:{ url : 'assets/imgs/user_marker.png'}});
    museumMarker.setMap(this.map);
  }
  
  addUserMarkersTo(lat,long){
    console.log(lat,long)
    var position = new google.maps.LatLng(lat,long);
    var museumMarker = new google.maps.Marker({position: position,icon:{ url : 'assets/imgs/nurseMar.png'}});
    museumMarker.setMap(this.map);
  }
}
