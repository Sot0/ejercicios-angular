import { Component } from '@angular/core';
import { Book } from 'src/app/lib/interfaces/books.interface';
import { staticBooks } from '../../lib/data/books';

@Component({
  selector: 'app-vista-responsiva',
  templateUrl: './vista-responsiva.component.html',
  styleUrls: ['./vista-responsiva.component.scss']
})
export class VistaResponsivaComponent {
  books: Book[] = staticBooks;
}
