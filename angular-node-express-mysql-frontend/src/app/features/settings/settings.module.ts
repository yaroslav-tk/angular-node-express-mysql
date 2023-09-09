import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.component';
import { SettingsRouterModule } from './settings-router.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SettingsUsersComponent } from './components/settings-users/settings-users.component';
import { SettingsGeneralComponent } from './components/settings-general/settings-general.component';



@NgModule({
  declarations: [
    SettingsComponent,
    SettingsUsersComponent,
    SettingsGeneralComponent
  ],
  imports: [
    SharedModule,
    SettingsRouterModule
  ]
})
export class SettingsModule { }
