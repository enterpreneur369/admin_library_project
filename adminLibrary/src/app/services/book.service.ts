import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  rootURL: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.rootURL}/book/getBooks`);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.rootURL}/book/${id}`);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.rootURL}/book/createBook`, book);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.rootURL}/book/updateBook/${book.id}`, book);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.rootURL}/book/deleteBook/${id}`);
  }
}
