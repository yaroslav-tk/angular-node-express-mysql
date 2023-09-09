import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserStateFacade } from 'src/app/store/user/user.facade';

@Component({
  selector: 'app-settings-general',
  templateUrl: './settings-general.component.html',
  styleUrls: ['./settings-general.component.scss']
})
export class SettingsGeneralComponent implements OnInit {
  @ViewChild('settingsForm') settingsForm!: NgForm;

  settings = {
    companyName: ''
  };

  userEmail: string | null = null;

  constructor(private userStateFacade: UserStateFacade) {
  }

  ngOnInit(): void {
    this.userStateFacade.companyName$.subscribe(companyName =>
      companyName ? this.settings.companyName = companyName : this.settings.companyName
    )

    this.userStateFacade.userEmail$.subscribe(userEmail =>
      userEmail ? this.userEmail = userEmail : this.userEmail
    )
  }

  onSubmit() {
    this.userStateFacade.editUser({...this.settingsForm.value, email: this.userEmail })
  }
}
