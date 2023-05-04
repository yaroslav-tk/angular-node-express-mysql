import { createSelector } from '@ngrx/store';
import { TasksState } from './tasks.reducer';

export const tasksFeatureSelector = (state: any) => state.tasks

export const getUserTasksSelector = createSelector(
  tasksFeatureSelector,
  (state: TasksState) => state.userTasks
)

export const getUserTodoTasksSelector = createSelector(
  tasksFeatureSelector,
  (state: TasksState) => state.userTodoTasks
)

export const getUserDoneTasksSelector = createSelector(
  tasksFeatureSelector,
  (state: TasksState) => state.userDoneTasks
)

export const getTaskSelector = createSelector(
  tasksFeatureSelector,
  (state: TasksState) => state.task
)

export const isUserTasksLoadingSelector = createSelector(
  tasksFeatureSelector,
  (state: TasksState) => state.isUserTasksLoading
)

export const isSingleTaskLoadingSelector = createSelector(
  tasksFeatureSelector,
  (state: TasksState) => state.isSingleTaskLoading
)

export const errorMessageSelector = createSelector(
  tasksFeatureSelector,
  (state: TasksState) => state.errorMessage
)
