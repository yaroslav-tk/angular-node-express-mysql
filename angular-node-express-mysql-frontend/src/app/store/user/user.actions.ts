import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const loadUser = createAction(
  '[User] Load User'
);

export const loadUserSuccess = createAction(
  '[User] Load User Success',
  props<{ user: User }>()
);

export const loadUserFail = createAction(
  '[User] Load User Fail',
  props<{ error: string }>()
);

export const loadCompanyUsers = createAction(
  '[User] Load Company Users'
);

export const loadCompanyUsersSuccess = createAction(
  '[User] Load Company Users Success',
  props<{ companyUsers: User[] }>()
);

export const loadCompanyUsersFail = createAction(
  '[User] Load Company Users Fail',
  props<{ error: string }>()
);

export const editUser = createAction(
  '[USER] Edit user',
  props<{user: User}>()
)

export const editUserSuccess = createAction(
  '[User] Edit Users Success',
  props<{ user: User }>()
);

export const editUserFail = createAction(
  '[User] Edit Users Fail',
  props<{ error: string }>()
);
