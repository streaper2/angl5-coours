import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../services/quotes.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {


  quotes$;



  constructor( private qtServices: QuotesService, private router: Router) { }

  ngOnInit() {
    this.quotes$ = this.qtServices.getQuotes();
  }

  showQuoteDetails(quote){
    console.log(quote);
    this.router.navigate(['/quote', quote.key]);
  }
}
