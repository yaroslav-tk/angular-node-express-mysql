import { Component } from '@angular/core';
import { AuthService } from './core/auth/services/auth.service';
import { Observable } from 'rxjs';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-node-express-mysql-frontend';
  isAuth$: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private menuService: MenuService
  ) {
    this.isAuth$ = this.authService.isAuthorized$
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }
}
