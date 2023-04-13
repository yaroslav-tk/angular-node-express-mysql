import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { SessionStorageService } from './session-storage.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserStoreService } from '../../user/services/user-store.service';


@Injectable()
export class AuthService {
  private isAuthorized$$ = new BehaviorSubject<boolean>(this.isAuthorized());
  public isAuthorized$ = this.isAuthorized$$.asObservable();

  constructor(
    private http: HttpClient,
    private sessionStorageService: SessionStorageService,
    private userStoreService: UserStoreService,
    private router: Router
  ) { }

  private isAuthorized() {
    const token = this.sessionStorageService.getItem('token');
    return !!token;
  }

  register(credentials: User) {
    this.http.post<User>('/api/user/register', credentials)
      .subscribe(() => this.router.navigateByUrl('/login'));
  }

  login(credentials: User) {
    this.http.post('/api/user/login', credentials)
      .pipe(
        tap(({token}: any) => {
          this.sessionStorageService.setItem('token', token);
          this.isAuthorized$$.next(this.isAuthorized());
          this.userStoreService.loadUser();
          this.router.navigateByUrl('/')
        })
      )
      .subscribe()
  }

  logout() {
    this.sessionStorageService.deleteItem('token');
    this.isAuthorized$$.next(this.isAuthorized());
    this.router.navigateByUrl('/login');
  }
}
