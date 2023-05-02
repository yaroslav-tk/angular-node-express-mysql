import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserStateFacade } from 'src/app/store/user/user.facade';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  @ViewChild('settingsForm') settingsForm!: NgForm

  settings = {
    companyName: ''
  }

  constructor(private userStateFacade: UserStateFacade) {
    this.userStateFacade.companyName$.subscribe(companyName =>
      companyName ? this.settings.companyName = companyName : this.settings.companyName
    )
  }

  onSubmit() {
    console.log(this.settingsForm.value)
    // const user = {
    //   companyName: this.settingsForm.value.companyName
    // }
    this.userStateFacade.editUser({...this.settingsForm.value})
  }
}
