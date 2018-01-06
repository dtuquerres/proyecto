import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZapatosPage } from './zapatos';

@NgModule({
  declarations: [
    ZapatosPage,
  ],
  imports: [
    IonicPageModule.forChild(ZapatosPage),
  ],
})
export class ZapatosPageModule {}
