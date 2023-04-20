import { createAction, props } from '@ngrx/store';
import { Task } from 'src/app/models/task.model';

export enum TasksActions {
  requestUserTasks = '[Tasks]  request User Tasks',
  requestUserTasksSuccess = '[Tasks]  request User Tasks Success',
  requestUserTasksFail = '[Tasks]  request User Tasks Fail',

  requestSingleTask = '[Tasks]  request SingleTask',
  requestSingleTaskSuccess = '[Tasks]  request SingleTask Success',
  requestSingleTaskFail = '[Tasks]  request SingleTask Fail',

  requestCreateTask = '[Tasks]  request Create Task',
  requestCreateTaskSuccess = '[Tasks]  request Create Task Success',
  requestCreateTaskFail = '[Tasks]  request Create Task Fail',

  requestEditTask = '[Tasks]  request Edit Task',
  requestEditTaskSuccess = '[Tasks]  request Edit Task Success',
  requestEditTaskFail = '[Tasks]  request Edit Task Fail',

  requestDeleteTask = '[Tasks]  request Delete Task',
  requestDeleteTaskSuccess = '[Tasks]  request Delete Task Success',
  requestDeleteTaskFail = '[Tasks]  request Delete Task Fail',
}

export const requestUserTasks = createAction(
  TasksActions.requestUserTasks
);

export const requestUserTasksSuccess = createAction(
  TasksActions.requestUserTasksSuccess,
  props<{ tasks: Task[] }>()
);

export const requestUserTasksFail = createAction(
  TasksActions.requestUserTasksFail,
  props<{ error: string }>()
);

export const requestSingleTask = createAction(
  TasksActions.requestSingleTask,
  props<{ id: string }>()
)

export const requestSingleTaskSuccess = createAction(
  TasksActions.requestSingleTaskSuccess,
  props<{ task: Task }>()
)

export const requestSingleTaskFail = createAction(
  TasksActions.requestSingleTaskFail,
  props<{ error: string}>()
)

export const requestCreateTask = createAction(
  TasksActions.requestCreateTask,
  props<{ task: Task }>()
)

export const requestCreateTaskSuccess = createAction(
  TasksActions.requestCreateTaskSuccess,
  props<{ task: Task }>()
)

export const requestCreateTaskFail = createAction(
  TasksActions.requestCreateTaskFail,
  props<{ error: string }>()
)

export const requestEditTask = createAction(
  TasksActions.requestEditTask,
  props<{ task: Task }>()
);

export const requestEditTaskSuccess = createAction(
  TasksActions.requestEditTaskSuccess,
  props<{ id: string }>()
);

export const requestEditTaskFail = createAction(
  TasksActions.requestEditTaskFail,
  props<{ error: string }>()
);

export const requestDeleteTask = createAction(
  TasksActions.requestDeleteTask,
  props<{ id: string }>()
);

export const requestDeleteTaskSuccess = createAction(
  TasksActions.requestDeleteTaskSuccess,
  props<{ id: string }>()
);

export const requestDeleteTaskFail = createAction(
  TasksActions.requestDeleteTaskFail,
  props<{ error: string }>()
);
