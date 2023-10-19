import { Component, OnInit } from '@angular/core';
import { Loan } from 'src/app/models/loan';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loan-management',
  templateUrl: './loan-management.component.html',
  styleUrls: ['./loan-management.component.scss']
})
export class LoanManagementComponent implements OnInit {
  displayedColumns: string[] = ['id', 'book', 'user', 'loanDate', 'returnDate'];
  constructor(private loanService: LoanService) { }
  dataSource: any;

  ngOnInit(): void {
    this.dataSource = this.loanService.getLoans();
    console.log(this.dataSource);
  }

  returnBook(loan: Loan) {
    this.loanService.updateLoan(loan).subscribe(() => {
      this.dataSource = this.loanService.getLoans();
    } );
  }

}
