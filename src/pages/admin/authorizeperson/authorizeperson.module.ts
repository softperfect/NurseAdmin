import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthorizepersonPage } from './authorizeperson';

@NgModule({
  declarations: [
    AuthorizepersonPage,
  ],
  imports: [
    IonicPageModule.forChild(AuthorizepersonPage),
  ],
})
export class AuthorizepersonPageModule {}
