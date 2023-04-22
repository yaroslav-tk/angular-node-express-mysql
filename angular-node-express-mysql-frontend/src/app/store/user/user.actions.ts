import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const loadUser = createAction(
  '[User] Load Users'
);

export const loadUserSuccess = createAction(
  '[User] Load Users Success',
  props<{ user: User }>()
);

export const loadUserFail = createAction(
  '[User] Load Users Fail',
  props<{ error: string }>()
);
