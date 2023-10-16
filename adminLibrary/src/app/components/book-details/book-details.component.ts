import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  isCreating: boolean = true;
  bookToUpdate: Book = {
    id: 0,
    title: '',
    author: '',
    publicationYear: 0,
    genre: '',
    availableQuantity: 0,
    isbn: ''
  };

  constructor(private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const bookId = Number(this.route.snapshot.paramMap.get('id'));

    if (bookId) {
      this.isCreating = false;

      this.bookService.getBookById(bookId).subscribe((book) => {
        this.bookToUpdate = book;
      });
    }
  }

  onSubmit(formValue: Book) {
    if (this.isCreating) {
      this.bookService.addBook(formValue).subscribe(() => {
        this.router.navigate(['/administrar-libros']);
      });
    } else {
      this.bookService.updateBook(formValue).subscribe(() => {
        this.router.navigate(['/administrar-libros']);
      });
    }
  }
}
