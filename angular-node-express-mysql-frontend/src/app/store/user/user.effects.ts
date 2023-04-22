import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { UserService } from 'src/app/core/user/services/user.service';
import * as UserActions from './user.actions';


@Injectable()
export class UserEffects {
  getUser = createEffect(() => this.actions$.pipe(
    ofType(UserActions.loadUser),
    switchMap(() =>
      this.userService.getUser().pipe(
        map(user => UserActions.loadUserSuccess({ user })),
        catchError(error => of(UserActions.loadUserFail(error.message)))
      )
    )
  ))

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
