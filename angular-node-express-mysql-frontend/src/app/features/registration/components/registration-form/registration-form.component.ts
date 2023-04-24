import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/services/auth.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent {
  user = {
    companyName: '',
    name: '',
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService
  ) {}

  getError({required}: any): string {
    return required ? 'This field is required' : ''
  }

  onSubmit(registrationForm: NgForm) {
    if (registrationForm.valid) {
      this.authService.register(registrationForm.value)
    } else {
      registrationForm.form.markAllAsTouched();
    }
  }
}
