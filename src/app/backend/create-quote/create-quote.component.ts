import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

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

  constructor(private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstname: [''],
      lastname: ['', Validators.required],
      quote: ['', Validators.required]
    });
  }

  createQuote(){
    console.log('form valid', this.form.valid);
    if(this.form.valid){
      this.create.emit(this.form);
    }
  }
}
