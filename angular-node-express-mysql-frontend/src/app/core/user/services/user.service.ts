import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUser(): Observable<User> {
    return this.http.get<User>('https://angular-node-express-mysql-backend.onrender.com/api/user/me')
  }

  getCompanyUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/user/users')
  }

  editUser(user: User): Observable<User> {
    return this.http.put<User>('/api/user/edit', user)
  }
}
