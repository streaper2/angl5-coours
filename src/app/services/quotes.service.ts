import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private afdb: AngularFireDatabase) { }


  getQuotes() {
    return this.afdb.list('quotes').valueChanges();
  }
}
