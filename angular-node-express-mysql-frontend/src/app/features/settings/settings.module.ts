import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.component';
import { SettingsRouterModule } from './settings-router.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SettingsService } from './services/settings.service';



@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    SharedModule,
    SettingsRouterModule
  ],
  providers: [
    SettingsService
  ]
})
export class SettingsModule { }
