import { createReducer, on } from '@ngrx/store';
import { Task } from 'src/app/models/task.model';
import * as TasksActions from './tasks.actions';

export interface TasksState {
  userTasks: Task[],
  userTodoTasks: Task[],
  userDoneTasks: Task[],
  task: Task | null,
  isUserTasksLoading: boolean,
  isSingleTaskLoading: boolean,
  errorMessage: string | null,
}

export const initialState: TasksState = {
  userTasks: [],
  userTodoTasks: [],
  userDoneTasks: [],
  task: null,
  isUserTasksLoading: false,
  isSingleTaskLoading: false,
  errorMessage: null,
};

export const tasksReducer = createReducer(
  initialState,

  on(TasksActions.requestUserTasks, (state) => ({
    ...state,
    isUserTasksLoading: true
  })),

  on(TasksActions.requestUserTasksSuccess, (state, { tasks }) => ({
    ...state,
    isUserTasksLoading: false,
    userTasks: tasks,
    userTodoTasks: tasks.filter(task => task.done ? null : task),
    userDoneTasks: tasks.filter(task => task.done ? task: null)
  })),

  on(TasksActions.requestUserTasksFail, (state, { error }) => ({
    ...state,
    isUserTasksLoading: false,
    errorMessage: error
  })),

  on(TasksActions.requestSingleTaskSuccess, (state, { task }) => ({
    ...state,
    task
  })),

  on(TasksActions.requestSingleTaskFail, (state, { error }) => ({
    ...state,
    errorMessage: error
  })),

  on(TasksActions.requestCreateTaskSuccess, (state, { task }) => ({
    ...state,
    userTasks: [...state.userTasks, task]
  })),

  on(TasksActions.requestCreateTaskFail, (state, { error }) => ({
    ...state,
    errorMessage: error
  })),

  on(TasksActions.requestEditTaskSuccess, (state, { id }) => ({
    ...state,
    userTasks: state.userTasks.filter(task => task.id !== id)
  })),

  on(TasksActions.requestEditTaskFail, (state, { error }) => ({
    ...state,
    errorMessage: error
  })),

  on(TasksActions.requestDeleteTaskSuccess, (state, { id }) => ({
    ...state,
    userTasks: state.userTasks.filter(task => task.id !== id),
    userTodoTasks: state.userTodoTasks.filter(task => task.id !== id),
    userDoneTasks: state.userDoneTasks.filter(task => task.id !== id)
  })),

  on(TasksActions.requestDeleteTaskFail, (state, { error }) => ({
    ...state,
    errorMessage: error
  })),

  on(TasksActions.requestToggleDoneStatusFail, (state, { error }) => ({
    ...state,
    errorMessage: error
  }))
);

