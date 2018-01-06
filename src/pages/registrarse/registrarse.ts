import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DatabaseProvider } from '../../providers/database/database'

/**
 * Generated class for the RegistrarsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrarse',
  templateUrl: 'registrarse.html',
})
export class RegistrarsePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: DatabaseProvider){
  }
    createUser(){
      this.database.createUser("Diego", "tuki", "12345","tuki@gmail.com").then((data) =>{
        console.log(data);
      }, (error) => {
        console.log(error);
      })
    }

    GetAllUser(){
      this.database.GetAllUser().then((data)=>{
        console.log(data);
      }, (error) =>{
        console.log(error);
      })
    }

  }

