import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { SessionStorageService } from './session-storage.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserStateFacade } from 'src/app/store/user/user.facade';
import { environment } from '../../environments/environment';


@Injectable()
export class AuthService {
  private isAuthorized$$ = new BehaviorSubject<boolean>(this.isAuthorized());
  public isAuthorized$ = this.isAuthorized$$.asObservable();
  private baseURL = environment.production ? environment.baseUrl : '';

  constructor(
    private http: HttpClient,
    private sessionStorageService: SessionStorageService,
    private userStateFacade: UserStateFacade,
    private router: Router
  ) { }

  private isAuthorized() {
    const token = this.sessionStorageService.getItem('token');
    return !!token;
  }

  register(credentials: User) {
    this.http.post<User>(`${this.baseURL}/api/user/register`, credentials)
      .subscribe(() => this.router.navigateByUrl('/login'));
  }

  login(credentials: User) {
    this.http.post(`${this.baseURL}/api/user/login`, credentials)
      .pipe(
        tap(({token}: any) => {
          this.sessionStorageService.setItem('token', token);
          this.isAuthorized$$.next(this.isAuthorized());
          this.userStateFacade.loadUser();
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
