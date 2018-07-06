import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ToDoProvider } from '../providers/to-do/to-do';
import{HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { ArchivedPage } from '../pages/archived/archived'

@NgModule({
  declarations: [
    MyApp,
    HomePage,ArchivedPage
  ],
  imports: [
    BrowserModule,
    HttpModule,HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,ArchivedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ToDoProvider
  ]
})
export class AppModule {}
