import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {
  DoctorsPage,
  PharmaciesPage,
  ClinicsPage,
  HospitalsPage,
  BookmarksPage
} from '../pages/pages';

@NgModule({
  declarations: [
    MyApp,
    DoctorsPage,
    PharmaciesPage,
    ClinicsPage,
    HospitalsPage,
    BookmarksPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DoctorsPage,
    PharmaciesPage,
    ClinicsPage,
    HospitalsPage,
    BookmarksPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
