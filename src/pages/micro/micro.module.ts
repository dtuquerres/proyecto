import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MicroPage } from './micro';

@NgModule({
  declarations: [
    MicroPage,
  ],
  imports: [
    IonicPageModule.forChild(MicroPage),
  ],
})
export class MicroPageModule {}
