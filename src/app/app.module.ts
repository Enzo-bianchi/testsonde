import * as firebase from 'firebase';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyAw1WAKY8yO0ye16IiUdOZ9sVt211XUYyM',
  authDomain: 'prodotti-46c93.firebaseapp.com',
  databaseURL: 'https://prodotti-46c93.firebaseio.com',
  storageBucket: 'prodotti-46c93.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
