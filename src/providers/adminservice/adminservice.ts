import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the AdminserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let apiUrl = 'http://www.air.sideworkapps.com/nursingondemand/adminwebservice/';

@Injectable()
export class AdminserviceProvider {

  constructor(public http: Http) {
    console.log('Hello AdminserviceProvider Provider');
  }
  login(loginData){
    return this.http.get(apiUrl + 'login?'+ '&email=' + loginData.email + '&password=' + loginData.password + '&user_type='+'ADMIN')
      .map(response =>response.json());
  }

 allUserlist(){
  return this.http.get(apiUrl + 'get_all_user_list?')
  .map(response =>response.json());
 }

 deleteUser(user_id){
  return this.http.get(apiUrl + 'delete_user?' + 'user_id='+user_id)
  .map(response =>response.json());
 }

 getAllNurselist(){
  return this.http.get(apiUrl + 'get_all_nurse_list')
  .map(response =>response.json());
}

searchUser(user){
  return this.http.get(apiUrl + 'search_user_lists?'+ 'keyword='+user)
  .map(response =>response.json());
}

searchNurse(nurse){
  return this.http.get(apiUrl + 'search_nurse_lists?'+ 'keyword='+nurse)
  .map(response =>response.json());
}

userdetail(user_id){
  return this.http.get(apiUrl + 'user_details?'+ 'user_id='+user_id)
  .map(response =>response.json());
}

deleteNurse(nurse_id){
  return this.http.get(apiUrl + 'delete_nurse?'+ 'nurse_id='+nurse_id)
  .map(response =>response.json());
}

adminforgetPassword(email){
  return this.http.get(apiUrl + 'forgot_password?'+ 'email='+email.email)
  .map(response =>response.json());
}

adminupdatePassword(admin_id,value){
  return this.http.get(apiUrl + 'change_password?'+ 'admin_id='+admin_id + '&old_password=' + value.cpass
   + '&password='+ value.npass)
  .map(response =>response.json());
}

nurseDetail(nurse_id){
  return this.http.get(apiUrl + 'nurse_details?'+ 'nurse_id='+nurse_id )
  .map(response =>response.json());
}


serviceDetail(service_id){
  return this.http.get(apiUrl + 'service_list?' + 'service_type_id=' + service_id  )
  .map(response =>response.json());
}

addservice(service_id,service_name){
  return this.http.get(apiUrl + 'add_new_service?' + 'service_type_id=' + service_id + '&service_name='+service_name )
  .map(response =>response.json());
}

removeService(service_id){
  return this.http.get(apiUrl + 'delete_service?' + 'service_id=' + service_id )
  .map(response =>response.json());
}

updateProfile(admin_id,value){
  return this.http.get(apiUrl + 'user_update?' + 'admin_id=' + admin_id + '&firstname='+value.fname
  + '&lastname=' + value.lname + '&phone_number=' + value.mobile)
  .map(response =>response.json());
}

pricingplanList(){
  return this.http.get(apiUrl + 'get_all_price_list' )
  .map(response =>response.json());
}

pricingplanListbyhourly(){
  return this.http.get(apiUrl + 'get_all_price_list_daily' )
  .map(response =>response.json());
}

serviceTypelist(){
  return this.http.get(apiUrl + 'service_type_list' )
  .map(response =>response.json());
}

addplan(value){
  return this.http.get(apiUrl + 'add_pricing_plan?' + 'service_type_id='+ value.service_type + '&plan_name='+value.plan_title
 + '&visits='+ value.add_visit + '&free_visits=' + value.free_visit + '&price=' + value.visit_price )
  .map(response =>response.json());
}

addhourlyPlan(pricing_id,value){
  return this.http.get(apiUrl + 'add_pricing_plan_daily?' + 'pricing_id='+ pricing_id + '&plan_name='+value.plan_name
 + '&price='+ value.plan_price )
  .map(response =>response.json());
}

adminGetprofile(admin_id){
  return this.http.get(apiUrl + 'get_profile?' + 'admin_id=' + admin_id )
  .map(response =>response.json());
}

RemovemonthlyPlan(plan_name){
  return this.http.get(apiUrl + 'remove_plan_monthly?' + 'plan_name=' + plan_name )
  .map(response =>response.json());
}

RemovehourlyPlan(plan_id){
  return this.http.get(apiUrl + 'remove_plan_hourly?' + 'id=' + plan_id )
  .map(response =>response.json());
}

pricingPlandetail(plan_id){
  return this.http.get(apiUrl + 'plan_pricing_detail?' + 'price_id=' + plan_id )
  .map(response =>response.json());
}

updatepricingPlan(plan_id,value){
  return this.http.get(apiUrl + 'update_plan_pricing_detail?' + 'price_id=' + plan_id + '&visits=' + value.add_visit
  + '&free_visits=' + value.free_visit + '&price=' + value.visit_price )
  .map(response =>response.json());
}

getBlog(){
  return this.http.get(apiUrl + 'get_all_blog_list' )
  .map(response =>response.json());
}

blogDetails(blog_id){
  return this.http.get(apiUrl + 'get_blog_details?' + 'blog_id=' + blog_id )
  .map(response =>response.json());
}

cancelpolicy(){
  return this.http.get(apiUrl + 'get_cancellation_policy_list' )
  .map(response =>response.json());
}

policyDetail(policy_id){
  return this.http.get(apiUrl + 'get_cancellation_policy_list_details?' + 'policy_id=' + policy_id )
  .map(response =>response.json());
}

updatePolicy(policy_id,dec){
  return this.http.get(apiUrl + 'update_cancellation_policy?' + 'policy_id=' + policy_id + '&description='+dec )
  .map(response =>response.json());
}

visitList(){
  return this.http.get(apiUrl + 'visit_list' )
  .map(response =>response.json());
}

removeVisit(visit_id){
  return this.http.get(apiUrl + 'delete_visit?' + 'visit_id=' + visit_id )
  .map(response =>response.json());
}

addVisittype(visittype){
  return this.http.get(apiUrl + 'add_new_visit?' + 'type=' + visittype.visit_type )
  .map(response =>response.json());
}

}
