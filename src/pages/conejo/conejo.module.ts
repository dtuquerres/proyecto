import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConejoPage } from './conejo';

@NgModule({
  declarations: [
    ConejoPage,
  ],
  imports: [
    IonicPageModule.forChild(ConejoPage),
  ],
})
export class ConejoPageModule {}
