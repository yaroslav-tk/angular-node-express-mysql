import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  @ViewChild('loginForm') loginForm!: NgForm;

  user = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService
  ) {}

  getError({required}: any): string {
    return required ? 'This field is required' : ''
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value)
    } else {
      this.loginForm.form.markAllAsTouched();
    }

  }
}
