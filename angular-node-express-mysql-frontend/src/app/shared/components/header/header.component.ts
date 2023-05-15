import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth/services/auth.service';
import { UserStateFacade } from 'src/app/store/user/user.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuth$: Observable<boolean>;
  companyName$: Observable<string | null>;
  userName$: Observable<string | null>;

  constructor(
    private authService: AuthService,
    private userStateFacade: UserStateFacade,
    private router: Router
  ) {
    this.isAuth$ = this.authService.isAuthorized$
    this.companyName$ = this.userStateFacade.companyName$
    this.userName$ = this.userStateFacade.userName$
  }

  ngOnInit(): void {
    this.userStateFacade.loadUser()
  }

  goToLoginPage() {
    this.router.navigateByUrl('/login')
  }

  logout() {
    this.authService.logout()
  }
}
