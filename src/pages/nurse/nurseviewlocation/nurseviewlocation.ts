import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation} from "@ionic-native/geolocation";

declare var google;

/**
 * Generated class for the NurseviewlocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nurseviewlocation',
  templateUrl: 'nurseviewlocation.html',
})
export class NurseviewlocationPage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  public nurse_lat:any;
  public nurse_lon:any;
  public userDetails:any=[];
  public userLat:any;
  public userLon:any;
  public defaultImage:any="assets/imgs/profile.png";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public geolocation: Geolocation) {
      this.userDetails = navParams.get('user_details');
     
      this.nurse_lat = localStorage.getItem('nurseLat');
      this.nurse_lon = localStorage.getItem('nurseLon');
      this.userLat = this.userDetails.userLat;
      this.userLon = this.userDetails.userLon;
      console.log("user lat ln",this.userLat,this.userLon);
      console.log("nurse lat lon",this.nurse_lat,this.nurse_lon);
  }

  ionViewDidLoad() {
    this.displayGoogleMap();
    console.log('ionViewDidLoad NurseviewlocationPage');
  }
  displayGoogleMap(){

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      console.log(position.coords.latitude); 

      let mapOptions = {
        center: latLng,
        zoom: 14,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }


      this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
       this.addnursemarker(this.nurse_lat,this.nurse_lon);
       this.addUserMarkers(this.userLat,this.userLon);

    },(err)=>{
      console.log(err);
    });
   

  }
  addUserMarkers(lat,long){
    console.log(lat,long)
    var position = new google.maps.LatLng(lat,long);
    var museumMarker = new google.maps.Marker({position: position,icon:{ url : 'assets/imgs/user_marker.png'}});
    museumMarker.setMap(this.map);
  }
  addnursemarker(lat,long) {
    console.log(lat,long)
    var position = new google.maps.LatLng(lat,long);
    var museumMarker = new google.maps.Marker({position: position,icon:{ url : 'assets/imgs/nurseMar.png'}});
    museumMarker.setMap(this.map);
  }
}
