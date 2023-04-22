import { createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

const userFeatureSelector = (state: any) => state.user

export const getUserSelector = createSelector(
  userFeatureSelector,
  (state: UserState) => state.userName
)
