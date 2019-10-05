import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElectronicnotesPage } from './electronicnotes';

@NgModule({
  declarations: [
    ElectronicnotesPage,
  ],
  imports: [
    IonicPageModule.forChild(ElectronicnotesPage),
  ],
})
export class ElectronicnotesPageModule {}
