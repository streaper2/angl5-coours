import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuotesService } from 'src/app/services/quotes.service';
import { Quote } from 'src/app/quote.interface';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {
  form: FormGroup;
  @Output()
  create = new EventEmitter();
  @Output()
  update = new EventEmitter();

  isInEditMode = false;
  verb = 'ajouter';
  constructor(private formBuilder: FormBuilder, private quotesService: QuotesService ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstname: [''],
      lastname: ['', Validators.required],
      quote: ['', Validators.required],
      key: ['']
    });
    this.quotesService.subject.subscribe(data => {
      this.isInEditMode = true;
      this.verb = 'modifier';
      console.log('data', data);
      this.form.get('firstname').patchValue((data as Quote).firstname);
      this.form.get('lastname').patchValue((data as Quote).lastname);
      this.form.get('quote').patchValue((data as Quote).text);
      this.form.get('key').patchValue((data as Quote).key);
    });

  }


  saveQuote() {
    console.log('form valid', this.form.valid);
    if (!this.form.valid) {
      //this.create.emit(this.form);
      console.log('form not valid');
      return;
    }
    console.log('form is valid');
    if (!this.isInEditMode){
      this.verb = 'ajouter';
      this.create.emit(this.form);
    } else if (this.isInEditMode) {
      this.update.emit(this.form);
      this.isInEditMode = !this.isInEditMode;
    }
  }
}
