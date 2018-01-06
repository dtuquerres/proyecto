import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CamisetasPage } from './camisetas';

@NgModule({
  declarations: [
    CamisetasPage,
  ],
  imports: [
    IonicPageModule.forChild(CamisetasPage),
  ],
})
export class CamisetasPageModule {}
