import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from "rxjs/operators";
import { Subject } from "rxjs/Subject";


@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private afdb: AngularFireDatabase) { }


  getQuotes() {
    // return this.afdb.list('quotes').valueChanges();
    return this.afdb.list('quotes').snapshotChanges().pipe(map(quotes => quotes.map( quote => ({
      key: quote.key, ...quote.payload.val()
    }))));
  }

  createQuotes(quote){
    return this.afdb.list('quotes').push(quote);
  }

  deleteQuoteById(id: string){
    return this.afdb.list('quotes').remove(id);
  }

  updateQuote(quote){
    return this.afdb.object(`quotes/${quote.key}`).update(quote);
  }

}
