import { ActionReducerMap } from '@ngrx/store';
import { TasksEffects } from './tasks/tasks.effects';
import { TasksReducer, TasksState } from './tasks/tasks.reducer';


export interface State {
  tasks: TasksState
}

export const reducers: ActionReducerMap<State> = {
  tasks: TasksReducer
};

export const effects = [TasksEffects];
