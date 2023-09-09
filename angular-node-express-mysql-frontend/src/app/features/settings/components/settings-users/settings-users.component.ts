import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserStateFacade } from 'src/app/store/user/user.facade';

@Component({
  selector: 'app-settings-users',
  templateUrl: './settings-users.component.html',
  styleUrls: ['./settings-users.component.scss']
})
export class SettingsUsersComponent implements OnInit {
  companyUsers$: Observable<User[]>;

  constructor(private userStateFacade: UserStateFacade) {
    this.companyUsers$ = this.userStateFacade.companyUsers$
  }

  ngOnInit(): void {
    this.userStateFacade.loadCompanyUsers();
  }

}
