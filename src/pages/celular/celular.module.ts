import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CelularPage } from './celular';

@NgModule({
  declarations: [
    CelularPage,
  ],
  imports: [
    IonicPageModule.forChild(CelularPage),
  ],
})
export class CelularPageModule {}
