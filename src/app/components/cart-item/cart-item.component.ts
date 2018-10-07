import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Book } from '../../shared/book';

@Component({
  selector: 'bm-cart-item',
  templateUrl: 'cart-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ['.ui.red.card.item { margin-bottom:8px; }']
})
export class CartItemComponent {
  @Input() item: Book;
  @Output() removed = new EventEmitter<Book>();
}
