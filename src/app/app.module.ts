import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule,  } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';

//firebase
import { AngularFireModule, FirebaseApp } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

//services
import { QuotesService } from './services/quotes.service';
import { CreateQuoteComponent } from './create-quote/create-quote.component';


const _CONFIG = {

  apiKey: 'AIzaSyAo1BbFp0BD2jK7mbsi3UZE6yOJlkOdq94',
  authDomain: 'sandbox-d15d5.firebaseapp.com',
  databaseURL: 'https://sandbox-d15d5.firebaseio.com',
  projectId: 'sandbox-d15d5',
  storageBucket: 'sandbox-d15d5.appspot.com',
  messagingSenderId: '7348902474',
  appId: '1:7348902474:web:78f5c06a5f8d31f6'
};

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    CreateQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(_CONFIG),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    QuotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
