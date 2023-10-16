import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  rootURL: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.rootURL}/user/getUsers`);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.rootURL}/user/${id}`);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.rootURL}/user/createUser`, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.rootURL}/user/updateUser/${user.id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.rootURL}/user/deleteUser/${id}`);
  }
}
