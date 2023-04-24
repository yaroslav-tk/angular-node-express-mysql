import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  onSubmit() {
    console.log(this.settingsForm.value)
  }
}
