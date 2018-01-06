import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  private db: SQLiteObject;
  private isOpen : boolean;

  constructor(
    public http: HttpClient,
    public storage: SQLite  
  ) {
    if (!this.isOpen){
      this.storage = new SQLite();
      this.storage.create({name: "data.db", location:"default"}).then((db:SQLiteObject) =>{
      this.db = db;
      db.executeSql("CREATE TABLE IF NOT EXISTS user(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, user text, pass TEXT, email TEXT)",[])
      this.isOpen = true;
      }).catch((error) => {
        console.log(error);
      })
    }
  
  }
createUser(name: string, user: string, pass: string, email:string){
  return new Promise ((resolve, reject) =>{
    let sql = "INSERT INTO user (name, user, pass, email) VALUES (?,?,?,?)";
    this.db.executeSql (sql, [name, user, pass, email]).then((data) =>{
      resolve(data);
    }, (error) => {
      reject(error);
    });
  });
}

GetAllUser(){
  return new Promise ((resolve, reject) => {
    this.db.executeSql ("SELECT * FROM user", []).then((data) =>{
      let arrayUser = [];
      if(data.rows.lenght > 0){
        for (var i=0; i < data.rows.lenght; i++){
          arrayUser.push({
            id: data.rows.item(i).id,
            name: data.rows.item(i).name,
            user: data.rows.item(i).user,
            pass: data.rows.item(i).pass,
            email: data.rows.items(i).email
          });
        }
      }
      resolve(arrayUser);
    },(error) => {
      reject(error);
    })
  })
}
}
