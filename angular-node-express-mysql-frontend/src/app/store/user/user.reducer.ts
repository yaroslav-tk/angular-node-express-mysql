import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { User } from 'src/app/models/user.model';

export const userFeatureKey = 'user';

export interface UserState {
  companyName: string | null,
  userName: string | null,
  userEmail: string | null,
  companyUsers: User[],
  errorMessage: string | null
}

export const initialState: UserState = {
  companyName: null,
  userName: null,
  userEmail: null,
  companyUsers: [],
  errorMessage: null
};

export const userReducer = createReducer(
  initialState,

  on(UserActions.loadUserSuccess, (state, { user }) => ({
    ...state,
    companyName: user.companyName,
    userName: user.name,
    userEmail: user.email
  })),

  on(UserActions.loadUserFail, (state, { error }) => ({
    ...state,
    errorMessage: error
  })),

  on(UserActions.loadCompanyUsersSuccess, (state, { companyUsers }) => ({
    ...state,
    companyUsers: companyUsers
  })),

  on(UserActions.loadCompanyUsersFail, (state, { error }) => ({
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

