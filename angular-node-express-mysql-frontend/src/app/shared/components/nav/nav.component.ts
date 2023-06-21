import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  menuVisible = false;

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.menuToggle.subscribe(() => {
      this.menuVisible = !this.menuVisible;
    });
  }
}
