import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarritoPage } from '../carrito/carrito';

/**
 * Generated class for the CamisetasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camisetas',
  templateUrl: 'camisetas.html',
})
export class CamisetasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  irCarrito(){
    this.navCtrl.push(CarritoPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CamisetasPage');
  }


}
