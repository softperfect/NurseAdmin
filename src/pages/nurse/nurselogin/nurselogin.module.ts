import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NurseloginPage } from './nurselogin';

@NgModule({
  declarations: [
    NurseloginPage,
  ],
  imports: [
    IonicPageModule.forChild(NurseloginPage),
  ],
})
export class NurseloginPageModule {}
