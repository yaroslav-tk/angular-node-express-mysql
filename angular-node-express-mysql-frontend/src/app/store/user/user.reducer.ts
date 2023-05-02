import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

export const userFeatureKey = 'user';

export interface UserState {
  companyName: string | null,
  userName: string | null,
  errorMessage: string | null
}

export const initialState: UserState = {
  companyName: null,
  userName: null,
  errorMessage: null
};

export const userReducer = createReducer(
  initialState,

  on(UserActions.loadUserSuccess, (state, { user }) => ({
    ...state,
    companyName: user.companyName,
    userName: user.name
  })),

  on(UserActions.loadUserFail, (state, { error }) => ({
    ...state,
    errorMessage: error
  })),

  on(UserActions.editUserSuccess, (state, { user }) => ({
    ...state,
    companyName: user.companyName
  })),

  on(UserActions.editUserFail, (state, { error }) => ({
    ...state,
    errorMessage: error
  }))
);

