import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';



@NgModule({
  declarations: [
    RegistrationComponent,
    RegistrationFormComponent
  ],
  imports: [
    SharedModule,
    RegistrationRoutingModule
  ]
})
export class RegistrationModule { }
