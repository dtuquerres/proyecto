import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoronaPage } from './corona';

@NgModule({
  declarations: [
    CoronaPage,
  ],
  imports: [
    IonicPageModule.forChild(CoronaPage),
  ],
})
export class CoronaPageModule {}
