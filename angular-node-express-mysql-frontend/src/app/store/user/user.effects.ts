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

  getCompanyUserS = createEffect(() => this.actions$.pipe(
    ofType(UserActions.loadCompanyUsers),
    switchMap(() =>
      this.userService.getCompanyUsers().pipe(
        map(companyUsers => UserActions.loadCompanyUsersSuccess({ companyUsers })),
        catchError(error => of(UserActions.loadCompanyUsersFail(error.message)))
      )
    )
  ))

  editUser = createEffect(() => this.actions$.pipe(
    ofType(UserActions.editUser),
    switchMap(({user}) =>
    this.userService.editUser(user).pipe(
      map(user => UserActions.editUserSuccess({ user })),
      catchError(error => of(UserActions.editUserFail(error.message)))
    ))
  ))

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
