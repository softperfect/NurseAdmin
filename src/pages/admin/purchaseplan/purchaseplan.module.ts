import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurchaseplanPage } from './purchaseplan';

@NgModule({
  declarations: [
    PurchaseplanPage,
  ],
  imports: [
    IonicPageModule.forChild(PurchaseplanPage),
  ],
})
export class PurchaseplanPageModule {}
