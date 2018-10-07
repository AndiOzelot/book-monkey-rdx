import { CartActions } from './../../actions/cart';
import { IAppState } from './../../app.state';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { Book } from '../../shared/book';
import { BooksActions } from '../../actions/books';

@Component({
  selector: 'bm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  @select((state: IAppState) => state.books.all) books$: Observable<Book[]>;

  constructor(private books: BooksActions, private cart: CartActions) { }

  addBook(book: Book) {
    this.books.addSingle(book);
  }

  addBookToCart(book: Book) {
    this.cart.createSingle(book);
  }

}
