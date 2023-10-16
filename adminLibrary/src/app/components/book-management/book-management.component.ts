import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.scss']
})
export class BookManagementComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'author', 'publicationYear', 'genre', 'availableQuantity'];
  constructor(private bookService: BookService) { }
  dataSource: any;

  ngOnInit(): void {
    this.dataSource = this.bookService.getBooks();
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(() => {
      this.dataSource = this.bookService.getBooks();
    } );
  }
}
