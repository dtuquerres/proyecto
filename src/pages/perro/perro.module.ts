import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerroPage } from './perro';

@NgModule({
  declarations: [
    PerroPage,
  ],
  imports: [
    IonicPageModule.forChild(PerroPage),
  ],
})
export class PerroPageModule {}
