import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { TasksService } from 'src/app/services/tasks.service';
import * as TasksActions from './tasks.actions';



@Injectable()
export class TasksEffects {

  getUserTasks$ = createEffect(() => this.actions$.pipe(
    ofType(TasksActions.requestUserTasks),
    switchMap(() =>
      this.tasksService.getUserTasks().pipe(
        map(tasks => TasksActions.requestUserTasksSuccess({ tasks })),
        catchError(error => of(TasksActions.requestUserTasksFail(error.message)))
      )
    )
    )
  );

  getSingleTask$ = createEffect(() => this.actions$.pipe(
    ofType(TasksActions.requestSingleTask),
    switchMap(({ id }) =>
      this.tasksService.getSingleTask(id).pipe(
        map(task => TasksActions.requestSingleTaskSuccess({ task })),
        catchError(error => of(TasksActions.requestSingleTaskFail(error.message)))
      )
    )
  ))

  createTask$ = createEffect(() => this.actions$.pipe(
    ofType(TasksActions.requestCreateTask),
    switchMap(({ task }) =>
      this.tasksService.createTask(task).pipe(
        map(task => TasksActions.requestCreateTaskSuccess({ task })),
        catchError(error => of(TasksActions.requestCreateTaskFail(error.message)))
      )
    )
  ))

  editTask$ = createEffect(() => this.actions$.pipe(
    ofType(TasksActions.requestEditTask),
    switchMap(({ task }) =>
      this.tasksService.editTask(task).pipe(
        map(task => TasksActions.requestEditTaskSuccess({ id: task.id })),
        catchError(error => of(TasksActions.requestEditTaskFail(error.message)))
      )
    ))
  );

  deleteTask$ = createEffect(() => this.actions$.pipe(
    ofType(TasksActions.requestDeleteTask),
    switchMap(({ id }) =>
      this.tasksService.deleteTask(id).pipe(
        map(() => TasksActions.requestDeleteTaskSuccess({ id })),
        catchError(error => of(TasksActions.requestDeleteTaskFail(error.message)))
      )
    )
  ))

  redirectToTasksPage$ = createEffect(() => this.actions$.pipe(
    ofType(
      TasksActions.requestCreateTaskSuccess,
      TasksActions.requestEditTaskSuccess
    ),
    tap(() => this.router.navigate(['/tasks']))
  ), { dispatch: false })


  constructor(
    private actions$: Actions,
    private tasksService: TasksService,
    private router: Router
  ) {}
}
