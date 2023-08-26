import { Component, Input } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() buttonType = 'basic';
  @Input() buttonText = '';
  @Input() buttonStyles = '';
  @Input() buttonColor = 'primary';
  @Input() iconName?: IconName;

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas)
  }
}
