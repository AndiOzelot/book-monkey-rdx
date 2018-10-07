import { Book } from './../shared/book';
import { Injectable } from '@angular/core';
import { IAppState } from '../app.state';
import { NgRedux } from '@angular-redux/store';

export const ADD_BOOK = 'ADD_BOOK';

@Injectable({ providedIn: 'root' })
export class BooksActions {
  constructor(private redux: NgRedux<IAppState>) {}

  addSingle(book: Book) {
    this.redux.dispatch({ type: ADD_BOOK, payload: book });
  }
}
