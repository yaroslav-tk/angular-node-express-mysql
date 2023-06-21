import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.component';
import { SettingsRouterModule } from './settings-router.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    SharedModule,
    SettingsRouterModule
  ]
})
export class SettingsModule { }
