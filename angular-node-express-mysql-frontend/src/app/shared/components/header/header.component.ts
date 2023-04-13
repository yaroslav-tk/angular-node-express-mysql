import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() userName!: string | null;
  isAuth$!: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isAuth$ = this.authService.isAuthorized$;
  }

  goToLoginPage() {
    this.router.navigateByUrl('/login')
  }

  logout() {
    this.authService.logout()
  }
}
