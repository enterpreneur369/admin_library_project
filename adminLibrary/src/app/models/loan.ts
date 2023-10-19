import { Book } from "./book";
import { User } from "./user";

export interface Loan {
  id: number;
  book: Book;
  user: User;
  loanDate: Date;
  returnDate?: Date;
}
