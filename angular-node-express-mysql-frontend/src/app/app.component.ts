import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth/services/auth.service';
import { Observable } from 'rxjs';
import { UserStoreService } from './core/user/services/user-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-node-express-mysql-frontend';
  isAuth$!: Observable<boolean>;
  userName$!: Observable<string>;

  constructor(
    private authService: AuthService,
    private userStoreService: UserStoreService
  ) {}

  ngOnInit(): void {


    this.isAuth$ = this.authService.isAuthorized$;
    this.userName$ = this.userStoreService.userName$;
  }
}
