import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HttpModule} from '@angular/http';
import {DataSource } from '../providers/data-source';
import { TechDetailsPage } from '../pages/tech-details/tech-details';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TechDetailsPage,
    
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TechDetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, DataSource]
})
export class AppModule {}
