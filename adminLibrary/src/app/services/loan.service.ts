import { Injectable } from '@angular/core';
import { Loan } from '../models/loan';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  items: Loan[] = [];
  rootURL: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getLoans() {
    return this.http.get<Loan[]>(this.rootURL + '/loan/getLoans');
  }

  getLoanById(id: number) {
    return this.http.get<Loan>(this.rootURL + `/loan/loan/${id}`);
  }

  addLoan(loan: Loan) {
    console.log(loan);
    return this.http.post<Loan>(this.rootURL + '/loan/createLoan', loan);
  }

  updateLoan(loan: Loan) {
    return this.http.put<Loan>(this.rootURL + `/loan/updateLoan/${loan.id}`, loan);
  }
}
