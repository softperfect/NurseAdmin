import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonaldoctorinfoPage } from './personaldoctorinfo';

@NgModule({
  declarations: [
    PersonaldoctorinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonaldoctorinfoPage),
  ],
})
export class PersonaldoctorinfoPageModule {}
