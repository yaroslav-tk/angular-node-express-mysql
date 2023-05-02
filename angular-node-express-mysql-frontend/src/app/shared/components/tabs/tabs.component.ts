import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tab } from '../../models/tab.model';



@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @Input() tabs: Tab[] = [];
  @Input() activeTab: string = '';
  @Output() onTabChange = new EventEmitter<string>();

  changeTab(tabId: string) {
    this.onTabChange.emit(tabId)
  }
}
