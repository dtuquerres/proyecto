import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PezPage } from './pez';

@NgModule({
  declarations: [
    PezPage,
  ],
  imports: [
    IonicPageModule.forChild(PezPage),
  ],
})
export class PezPageModule {}
