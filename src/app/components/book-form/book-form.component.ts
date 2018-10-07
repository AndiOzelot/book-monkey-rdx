import { Book } from './../../shared/book';
import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'bm-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookFormComponent {

  @Output() created = new EventEmitter<Book>();

  constructor() { }

  submitted(form) {
    this.created.emit(new Book(
      form.controls['isbn'].value,
      form.controls['title'].value,
      form.controls['price'].value
    ));
  }
}
