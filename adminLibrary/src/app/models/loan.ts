export interface Loan {
  id: number;
  bookId: number;
  userId: number;
  loanDate: Date;
  returnDate?: Date;
}
