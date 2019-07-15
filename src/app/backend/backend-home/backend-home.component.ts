import { Component, OnInit } from '@angular/core';
import { QuotesService } from 'src/app/services/quotes.service';

@Component({
  selector: 'app-backend-home',
  templateUrl: './backend-home.component.html',
  styleUrls: ['./backend-home.component.css']
})
export class BackendHomeComponent implements OnInit {

  constructor(private quotesService: QuotesService)  {

  }

  onQuoteCreated(quote){
    console.log('quote', quote);
    let addedQuote = this.quotesService.createQuotes({
      firstname: quote.value.firstname,
      lastname: quote.value.lastname,
      text: quote.value.quote
    });
    console.log('added quote', addedQuote);
  }

  onQuoteUpdated(quote){
    console.log('quote update', quote);
    this.quotesService.updateQuote({
      firstname: quote.value.firstname,
      lastname: quote.value.lastname,
      text: quote.value.quote,
      key: quote.value.key
    })
  }


  ngOnInit(){

  }
}
