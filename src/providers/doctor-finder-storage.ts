import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { SQLite } from 'ionic-native';

/*
  Generated class for the DoctorFinderStorage provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DoctorFinderStorage {
  db = new SQLite();
  constructor() {
    this.db.openDatabase({
      name: 'data.db',
      location: 'default' // the location field is required
    }).then(() => {}, (err) => {
      console.error('Unable to open database: ', err);
    });
  }

  executeQuery(query, values) {
    this.db.executeSql(query, values).then((res) => {

    }, (err) => {
      console.error('Unable to execute sql: ', err);
    });
  }
}