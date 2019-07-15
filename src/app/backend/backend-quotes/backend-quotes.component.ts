import { Component, OnInit } from '@angular/core';
import { QuotesService } from 'src/app/services/quotes.service';


@Component({
  selector: 'app-backend-quotes',
  templateUrl: './backend-quotes.component.html',
  styleUrls: ['./backend-quotes.component.css']
})
export class BackendQuotesComponent implements OnInit {
  quotes$;

  constructor(private quotesServices: QuotesService) { }

  ngOnInit() {
    this.quotes$ = this.quotesServices.getQuotes()
  }

  deleteQuote(quote){
    console.log(quote);
    this.quotesServices.deleteQuoteById(quote.key);
  }

  showQuoteDetails(quote) {
    console.log('clik', quote);
  }
  toggleToEditMode(quote){
    return this.quotesServices.editQuote(quote);
  }
}
