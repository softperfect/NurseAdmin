import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomeloginPage } from './welcomelogin';

@NgModule({
  declarations: [
    WelcomeloginPage,
  ],
  imports: [
    IonicPageModule.forChild(WelcomeloginPage),
  ],
})
export class WelcomeloginPageModule {}
