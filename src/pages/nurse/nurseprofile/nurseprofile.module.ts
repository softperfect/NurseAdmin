import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NurseprofilePage } from './nurseprofile';

@NgModule({
  declarations: [
    NurseprofilePage,
  ],
  imports: [
    IonicPageModule.forChild(NurseprofilePage),
  ],
})
export class NurseprofilePageModule {}
