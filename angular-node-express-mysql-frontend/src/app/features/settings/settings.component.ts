import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserStateFacade } from 'src/app/store/user/user.facade';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit{
  @ViewChild('settingsForm') settingsForm!: NgForm

  settings = {
    companyName: ''
  }

  userEmail: string | null = null;

  constructor(private userStateFacade: UserStateFacade) {
  }

  ngOnInit(): void {
    this.userStateFacade.companyName$.subscribe(companyName =>
      companyName ? this.settings.companyName = companyName : this.settings.companyName
    )

    this.userStateFacade.userEmail$.subscribe(email =>
      email ? this.userEmail = email : null
    )
  }

  onSubmit() {
    this.userStateFacade.editUser({...this.settingsForm.value, email: this.userEmail })
  }
}
