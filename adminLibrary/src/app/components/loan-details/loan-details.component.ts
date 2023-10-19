import { Component } from '@angular/core';
import { Loan } from 'src/app/models/loan';
import { Book } from 'src/app/models/book';
import { User } from 'src/app/models/user';
import { LoanService } from 'src/app/services/loan.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.scss']
})
export class LoanDetailsComponent {
  isCreating: boolean = true;
  books: Book[] = [];
  users: User[] = [];
  selectedBook: Book | null = null;
  selectedUser: User | null = null;
  loanToUpdate: Loan = {
    id: 0,
    book: {
      id: 0,
      title: '',
      author: '',
      publicationYear: 0,
      genre: '',
      availableQuantity: 0,
      isbn: '',
    },
    user: {
      id: 0,
      name: '',
    },
    loanDate: new Date(),
    returnDate: undefined,
  };

  constructor(private loanService: LoanService,private bookService: BookService, private userService: UserService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const loanId = Number(this.route.snapshot.paramMap.get('id'));

    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
    });
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });

    if (loanId) {
      this.isCreating = false;

      this.loanService.getLoanById(loanId).subscribe((loan) => {
        this.loanToUpdate = loan;
      });
    }
  }

  onSubmit(formValue: Loan) {
    this.loanToUpdate.book = this.selectedBook || { id: 0, title: '', author: '', publicationYear: 0, genre: '', availableQuantity: 0, isbn: '' };
    this.loanToUpdate.user = this.selectedUser || { id: 0, name: '' };
    if (this.isCreating) {
      this.loanService.addLoan(formValue).subscribe(() => {
        this.router.navigate(['/administrar-prestamos']);
      });
    } else {
      this.loanService.updateLoan(formValue).subscribe(() => {
        this.router.navigate(['/administrar-prestamos']);
      });
    }
  }
}
