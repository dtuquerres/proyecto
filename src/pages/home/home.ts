import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { CategoriasPage } from '../categorias/categorias';
import { RegistrarsePage } from '../registrarse/registrarse';
import { createScope } from '@angular/core/src/profile/wtf_impl';
import { variable } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  launchCategoria() {

 
    this.navCtrl.push(CategoriasPage);
  }

  registrarUser(){
    this.navCtrl.push(RegistrarsePage)
  }



}
