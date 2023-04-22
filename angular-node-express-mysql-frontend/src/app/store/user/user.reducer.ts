import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

export const userFeatureKey = 'user';

export interface UserState {
  userName: string | null,
  errorMessage: string | null
}

export const initialState: UserState = {
  userName: null,
  errorMessage: null
};

export const userReducer = createReducer(
  initialState,

  on(UserActions.loadUserSuccess, (state, { user }) => ({
    ...state,
    userName: user.name
  })),

  on(UserActions.loadUserFail, (state, { error }) => ({
    ...state,
    errorMessage: error
  }))
);

