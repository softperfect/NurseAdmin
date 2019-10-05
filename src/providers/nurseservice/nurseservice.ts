import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the NurseserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let apiUrl = 'http://www.air.sideworkapps.com/nursingondemand/nursewebservice/';


@Injectable()
export class NurseserviceProvider {

  constructor(public http: Http) {
    console.log('Hello NurseserviceProvider Provider');
  }

  registred(registredData,lat,long,token){
    console.log("registred data",registredData);
    return this.http.get(apiUrl + 'signup_nurse?'+ 'firstname=' + registredData.firstName + '&lastname=' + registredData.lastName + '&email='+registredData.email+
      '&password='+registredData.password + '&phone_number='+registredData.phone + '&nursing_experience='+registredData.nurseExp+
     '&workplace='+ registredData.workPlace + '&nurse_type='+registredData.nursecat 
    + '&gender='+registredData.nursegender +'&service_type_id=' + registredData.serviceType_id + '&lat='+lat+ '&lon='+ long+ '&register_id='+token)
      .map(response =>response.json());
  }

  login(loginData,lat,lon,token){
    console.log("nurse login infor",loginData,lat,lon,token);
    return this.http.get(apiUrl + 'login?'+ '&email=' + loginData.email + '&password=' + loginData.password + '&user_type='+'NURSE'+'&lat='+lat +'&lon='+lon+'&register_id='+token)
    .map(response =>response.json());
  }
 
  nurseGetprofile(nurse_id){
    return this.http.get(apiUrl + 'get_profile?'+ '&nurse_id=' +nurse_id)
    .map(response =>response.json());
  }

  updateprofile(nurseData,nurse_id){
    return this.http.get(apiUrl + 'user_update?'+ '&nurse_id=' +nurse_id+'&firstname='+nurseData.firstname+'&lastname='+nurseData.lastname+'&workplace='+nurseData.workplace+
    '&designation='+nurseData.Designation)
    .map(response =>response.json());
  }

  pricingplanList(){
    return this.http.get(apiUrl + 'get_all_price_list')
    .map(response =>response.json());
  }

  serviceRequestList(nurse_id){
    return this.http.get(apiUrl + 'get_all_request_list?'+'nurse_id='+nurse_id)
    .map(response =>response.json());
  }

  nurseforgetPassword(email){
    return this.http.get(apiUrl + 'forgot_password?'+'email='+email.email)
    .map(response =>response.json());
  }

  nurseupdatePassword(nurse_id,value){
    return this.http.get(apiUrl + 'change_password?'+'nurse_id='+nurse_id 
       +'&old_password='+ value.cpass + '&password='+ value.npass )
    .map(response =>response.json());
  }

  cancelPolicy(){
    return this.http.get(apiUrl + 'get_cancellation_policy_list' )
    .map(response =>response.json());
  }

  pricingplanListbyhourly(){
    return this.http.get(apiUrl + 'get_all_price_list_daily')
    .map(response =>response.json());
  }

  blogList(){
    return this.http.get(apiUrl + 'get_all_blog_list')
    .map(response =>response.json());
  }

  blogDetails(blog_id){
    return this.http.get(apiUrl + 'get_blog_details?' + '&blog_id=' + blog_id)
    .map(response =>response.json());
  }
  serviceType(){
    return this.http.get(apiUrl + 'service_type_list')
    .map(response =>response.json());
  }
  serviceTypedetail(service_id){
    return this.http.get(apiUrl + 'service_list?'+ 'service_type_id=' + service_id)
    .map(response =>response.json());
  }

  requestDetails(req_id,lat,lon){
    return this.http.get(apiUrl + 'request_details?'+ 'request_id=' + req_id + '&lat='+lat 
   + '&lon=' + lon )
    .map(response =>response.json());
  }

  nurserequestHistory(nurse_id){
    return this.http.get(apiUrl + 'nurse_details?'+ 'nurse_id=' +nurse_id )
    .map(response =>response.json());
  }

  requestCancel(req_id,status){
    return this.http.get(apiUrl + 'request_cancel?'+ 'request_id=' + req_id + '&status=' + status)
    .map(response =>response.json());
  }

  NurseCategory(serviceType_id){
    return this.http.get(apiUrl + 'nurse_category_list?'+ 'service_type_id=' + serviceType_id )
    .map(response =>response.json());
  }

}
