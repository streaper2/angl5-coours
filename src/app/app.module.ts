import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule,  } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { RouterModule, Routes } from "@angular/router";

//firebase
import { AngularFireModule, FirebaseApp } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

//services
import { QuotesService } from './services/quotes.service';
import { CreateQuoteComponent } from './backend/create-quote/create-quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { BackendHomeComponent } from './backend/backend-home/backend-home.component';
import { BackendQuotesComponent } from './backend/backend-quotes/backend-quotes.component';


const _CONFIG = {

  apiKey: 'AIzaSyAo1BbFp0BD2jK7mbsi3UZE6yOJlkOdq94',
  authDomain: 'sandbox-d15d5.firebaseapp.com',
  databaseURL: 'https://sandbox-d15d5.firebaseio.com',
  projectId: 'sandbox-d15d5',
  storageBucket: 'sandbox-d15d5.appspot.com',
  messagingSenderId: '7348902474',
  appId: '1:7348902474:web:78f5c06a5f8d31f6'
};

const ROUTES: Routes = [
  {
    path:'', pathMatch: 'full', component: QuotesComponent //strating page
  },
  {
    path: 'quote/:id', component: QuoteDetailsComponent //localhost:4200/quote/id
  },
  {
    path: 'admin', component: BackendHomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    CreateQuoteComponent,
    QuoteDetailsComponent,
    BackendHomeComponent,
    BackendQuotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(_CONFIG),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    QuotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
