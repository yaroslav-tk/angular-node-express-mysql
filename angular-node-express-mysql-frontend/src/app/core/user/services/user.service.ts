import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class UserService {
  private baseURL = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/api/user/me`)
  }

  getCompanyUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}/api/user/users`)
  }

  editUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.baseURL}/api/user/edit`, user)
  }
}
