import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
// import { AngularFireAuth } from 'angularfire2/auth';

import { ResultsComponent } from '../pages/home/shared/components/results/results.component';
import { PoolManagerComponent } from '../pages/home/shared/components/pool-manager/pool-manager.component';

import { MyApp } from './app.component';
import { SharedModule } from '../pages/auth/shared/shared.module';
import * as homeShared from '../pages/home/shared/shared.module';
import * as components from '../pages/home/shared/shared.module';

var firebaseConfig = {
	apiKey: "AIzaSyDWXYQHbfudm2-Mv_w3fPx8wCROdVgvTtg",
	authDomain: "prototype-login-31a21.firebaseapp.com",
	databaseURL: "https://prototype-login-31a21.firebaseio.com",
	projectId: "prototype-login-31a21",
	storageBucket: "prototype-login-31a21.appspot.com",
	messagingSenderId: "1070411935920"
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    HttpModule,
    BrowserModule,
    SharedModule.forRoot(),
    homeShared.SharedModule.forRoot(),
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),              
    AngularFireAuthModule,
    components.SharedModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ResultsComponent,
    PoolManagerComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
