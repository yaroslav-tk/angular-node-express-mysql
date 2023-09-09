import { Component, OnInit, ViewChild } from '@angular/core';
import { Tab } from 'src/app/shared/models/tab.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  tabs: Tab[] = [
    { name: 'General', id: 'general' },
    { name: 'Users', id: 'users' },
  ];

  activeTab: string = 'general';

  changeTab(tabId: string) {
    this.activeTab = tabId
  }
}
