import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GatoPage } from './gato';

@NgModule({
  declarations: [
    GatoPage,
  ],
  imports: [
    IonicPageModule.forChild(GatoPage),
  ],
})
export class GatoPageModule {}
