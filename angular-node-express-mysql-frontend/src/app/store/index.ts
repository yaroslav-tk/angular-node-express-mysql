import { ActionReducerMap } from '@ngrx/store';
import { TasksEffects } from './tasks/tasks.effects';
import { tasksReducer, TasksState } from './tasks/tasks.reducer';
import { UserEffects } from './user/user.effects';
import { userReducer, UserState } from './user/user.reducer';


export interface State {
  user: UserState
  tasks: TasksState
}

export const reducers: ActionReducerMap<State> = {
  user: userReducer,
  tasks: tasksReducer
};

export const effects = [
  UserEffects,
  TasksEffects
];
