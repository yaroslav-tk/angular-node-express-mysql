import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TabsComponent } from './components/tabs/tabs.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

const components = [
  HeaderComponent,
  ButtonComponent,
  NavComponent,
  TabsComponent
]

const modules = [
  CommonModule,
  RouterModule,
  FontAwesomeModule,
  FormsModule,
  ReactiveFormsModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatSidenavModule,
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    modules
  ],
  exports: [
    components,
    modules
  ]
})
export class SharedModule { }
