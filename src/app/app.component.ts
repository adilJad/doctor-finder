import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen, SQLite } from 'ionic-native';
import {
  DoctorsPage,
  PharmaciesPage,
  ClinicsPage,
  HospitalsPage,
  BookmarksPage
} from '../pages/pages';

import { DoctorFinderStorage } from '../providers/providers';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = DoctorsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, private dfStroage: DoctorFinderStorage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Doctors', component: DoctorsPage },
      { title: 'Pharmacies', component: PharmaciesPage },
      { title: 'Hospitals', component: HospitalsPage },
      { title: 'Clinics', component: ClinicsPage },
    ];

    let db = new SQLite();
    db.openDatabase({
      name: 'data.db',
      location: 'default' // the location field is required
    }).then(() => {
      db.executeSql('create table danceMoves(name VARCHAR(32))', {}).then(() => {

        }, (err) => {
          console.error('Unable to execute sql: ', err);
        });
      }, (err) => {
        console.error('Unable to open database: ', err);
      });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
