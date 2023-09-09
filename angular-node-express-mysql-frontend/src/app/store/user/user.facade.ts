import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import * as UserActions from "./user.actions";
import * as UserSelectors from "./user.selectors";
import { User } from "src/app/models/user.model";

@Injectable()
export class UserStateFacade {
  companyName$: Observable<string | null> = this.store.pipe(select(UserSelectors.getCompanyNameSelector))
  userName$: Observable<string | null> = this.store.pipe(select(UserSelectors.getUserNameSelector))
  userEmail$: Observable<string | null> = this.store.pipe(select(UserSelectors.getUserEmail))
  companyUsers$: Observable<User[]> = this.store.pipe(select(UserSelectors.getCompanyUsersSelector))

  constructor(private store: Store) {}

  loadUser(): void {
    this.store.dispatch(UserActions.loadUser())
  }

  loadCompanyUsers(): void {
    this.store.dispatch(UserActions.loadCompanyUsers())
  }

  editUser(user: User): void {
    this.store.dispatch(UserActions.editUser({ user }))
  }
}
