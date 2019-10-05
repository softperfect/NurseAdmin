import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddblogPage } from './addblog';

@NgModule({
  declarations: [
    AddblogPage,
  ],
  imports: [
    IonicPageModule.forChild(AddblogPage),
  ],
})
export class AddblogPageModule {}
