import { createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

const userFeatureSelector = (state: any) => state.user;

export const getCompanyNameSelector = createSelector(
  userFeatureSelector,
  (state: UserState) => state.companyName
)

export const getUserNameSelector = createSelector(
  userFeatureSelector,
  (state: UserState) => state.userName
)

export const getUserEmail = createSelector(
  userFeatureSelector,
  (state: UserState) => state.userEmail
)

export const getCompanyUsersSelector = createSelector(
  userFeatureSelector,
  (state: UserState) => state.companyUsers
)
