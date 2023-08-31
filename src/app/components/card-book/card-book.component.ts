import { Component, Input } from '@angular/core';
import { Book } from '../../lib/interfaces/books.interface';

@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html',
  styleUrls: ['./card-book.component.scss']
})
export class CardBookComponent {
  @Input() book: Book = {
    id: 0,
    title: '',
    author: '',
    editorial: '',
    description: '',
    image: '',
    date: '',
    precio: 0,
  };
  disccountPrice = 10;

}
