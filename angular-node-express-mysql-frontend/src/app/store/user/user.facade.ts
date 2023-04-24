import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import * as UserActions from "./user.actions";
import * as UserSelectors from "./user.selectors";

@Injectable()
export class UserStateFacade {
  companyName$: Observable<string | null> = this.store.pipe(select(UserSelectors.getCompanyNameSelector))
  userName$: Observable<string | null> = this.store.pipe(select(UserSelectors.getUserNameSelector))

  constructor(private store: Store) {}

  loadUser(): void {
    this.store.dispatch(UserActions.loadUser())
  }
}