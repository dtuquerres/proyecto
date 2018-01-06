import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CamisetasPage } from '../camisetas/camisetas';
import { ZapatosPage } from '../zapatos/zapatos';
import { PantalonPage } from '../pantalon/pantalon';
import { CorbataPage } from '../corbata/corbata';
import { DeportivoPage } from '../deportivo/deportivo';
import { AbrigoPage } from '../abrigo/abrigo';

import { AnilloPage } from '../anillo/anillo';
import { RelojPage } from '../reloj/reloj';
import { PulseraPage } from '../pulsera/pulsera';
import { CollarPage } from '../collar/collar';
import { AretePage } from '../arete/arete';
import { CoronaPage } from '../corona/corona';

import { MesaPage } from '../mesa/mesa';
import { SillaçPage } from '../sillaç/sillaç';
import { CortinaPage } from '../cortina/cortina';
import { CamaPage } from '../cama/cama';
import { HerramientaPage } from '../herramienta/herramienta';
import { CubiertoPage } from '../cubierto/cubierto';

import { PerroPage } from '../perro/perro';
import { GatoPage } from '../gato/gato';
import { ConejoPage } from '../conejo/conejo';
import { HamsterPage } from '../hamster/hamster';
import { PezPage } from '../pez/pez';
import { AnimalPage } from '../animal/animal';

import { CelularPage } from '../celular/celular'
import { AudifonoPage } from '../audifono/audifono'
import { LaptopPage } from '../laptop/laptop'
import { ImpresoraPage } from '../impresora/impresora'
import { MicroPage } from '../micro/micro'
import { TecnologiaPage } from '../tecnologia/tecnologia'




/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    
  }

  irCamisetas() {
    this.navCtrl.push(CamisetasPage);
  }
  irZapatos() {
    this.navCtrl.push(ZapatosPage);
  }
  irPantalon(){
    this.navCtrl.push(PantalonPage);
  }

  irCorbata(){
    this.navCtrl.push(CorbataPage);
  }
  irDeportivo(){
    this.navCtrl.push(DeportivoPage);
  }

  irAbrigo(){
    this.navCtrl.push(AbrigoPage);
  }

  irAnillo(){
    this.navCtrl.push(AnilloPage);
  }
  irReloj(){
    this.navCtrl.push(RelojPage);
  }

  irPulsera(){
    this.navCtrl.push(PulseraPage);
  }

  irCollar(){
    this.navCtrl.push(CollarPage);
  }
  irArete(){
    this.navCtrl.push(AretePage);
  }

  irCorona(){
    this.navCtrl.push(CoronaPage);
  }

  irMesa(){
    this.navCtrl.push(MesaPage);
  }
  irSilla(){
    this.navCtrl.push(SillaçPage);
  }
  irCortina(){
    this.navCtrl.push(CortinaPage);
  }
  irCama(){
    this.navCtrl.push(CamaPage);
  }
  irHerramienta(){
    this.navCtrl.push(HerramientaPage);
  }

  irCubierto(){
    this.navCtrl.push(CubiertoPage);
  }

  irPerro(){
    this.navCtrl.push(PerroPage);
  }

  irGato(){
    this.navCtrl.push(GatoPage);
  }
  irConejo(){
    this.navCtrl.push(ConejoPage);
  }

  irHamster(){
    this.navCtrl.push(HamsterPage);
  }

  irPez(){
    this.navCtrl.push(PezPage);
  }

  irAnimal(){
    this.navCtrl.push(AnimalPage);
  }

  
  irCelular(){
    this.navCtrl.push(CelularPage);
  }

  irAudifono(){
    this.navCtrl.push(AudifonoPage);
  }
  irLaptop(){
    this.navCtrl.push(LaptopPage);
  }

  irImpresora(){
    this.navCtrl.push(ImpresoraPage);
  }

  irMicro(){
    this.navCtrl.push(MicroPage);
  }

  irTecnologia(){
    this.navCtrl.push(TecnologiaPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage');
  }

}
