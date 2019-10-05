import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PricingplanPage } from './pricingplan';

@NgModule({
  declarations: [
    PricingplanPage,
  ],
  imports: [
    IonicPageModule.forChild(PricingplanPage),
  ],
})
export class PricingplanPageModule {}
