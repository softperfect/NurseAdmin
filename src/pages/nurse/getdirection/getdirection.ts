import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation} from "@ionic-native/geolocation";

declare var google;

/**
 * Generated class for the GetdirectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-getdirection',
  templateUrl: 'getdirection.html',
})
export class GetdirectionPage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  public nurseData:any=[];
  public user_lat:any;
  public user_lon:any;
  public nurseImage:any;
  public nurseName:any;
  public nurseType:any;
  public nurse_gender:any;
  public nurse_mobile:any;
  public distance:any;
  public time:any;
  public nurse_lat:any;
  public nurse_lon:any;

  constructor(public navCtrl: NavController,
    public geolocation: Geolocation, public navParams: NavParams) {
      this.nurseData = navParams.get('nurse_data');
      this.user_lat = navParams.get('user_lat');
      this.user_lon = navParams.get('user_lon');
      this.nurseImage = this.nurseData[0].nurse_image;
      this.nurseName = this.nurseData[0].nurse_name;
      this.nurseType = this.nurseData[0].nurse_type;
      this.nurse_gender = this.nurseData[0].gender;
      this.nurse_mobile = this.nurseData[0].phone_number;
      this.distance = this.nurseData[0].distance;
      this.time = this.nurseData[0].arrivel_time;
      this.nurse_lat = this.nurseData[0].lat;
      this.nurse_lon = this.nurseData[0].lon;

      console.log("full data",this.nurseData,this.user_lat,this.user_lon);
      if(this.nurseImage == "" || this.nurseImage == undefined){
        this.nurseImage = 'assets/imgs/defult1.png';
      }
  }

  ionViewDidLoad() {
    this.displayGoogleMap();
    console.log('ionViewDidLoad GetdirectionPage');
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
      //this.getMarkers(this.nursesList);
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
