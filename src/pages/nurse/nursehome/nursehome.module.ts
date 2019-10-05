import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NursehomePage } from './nursehome';

@NgModule({
  declarations: [
    NursehomePage,
  ],
  imports: [
    IonicPageModule.forChild(NursehomePage),
  ],
})
export class NursehomePageModule {}
