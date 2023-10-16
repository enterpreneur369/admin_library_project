import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loan-management',
  templateUrl: './loan-management.component.html',
  styleUrls: ['./loan-management.component.scss']
})
export class LoanManagementComponent implements OnInit {
  displayedColumns: string[] = ['id', 'bookId', 'userId', 'loanDate', 'returnDate'];
  constructor(private loanService: LoanService) { }
  dataSource: any;

  ngOnInit(): void {
    this.dataSource = this.loanService.getLoans();
  }

}
