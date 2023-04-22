import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { Task } from "src/app/models/task.model";
import * as TasksAction from "./tasks.actions";
import * as TasksSelectors from "./tasks.selectors";


@Injectable()
export class TasksStateFacade {
  userTasks$: Observable<Task[]> = this.store.pipe(select(TasksSelectors.getUserTasksSelector));
  task$: Observable<Task | null> = this.store.pipe(select(TasksSelectors.getTaskSelector));
  isUserTasksLoading$: Observable<boolean> = this.store.pipe(select(TasksSelectors.isUserTasksLoadingSelector));
  isSingleTaskLoading$: Observable<boolean> = this.store.pipe(select(TasksSelectors.isSingleTaskLoadingSelector));
  errorMessage$: Observable<string | null> = this.store.pipe(select(TasksSelectors.errorMessageSelector));

  constructor(private store: Store) {}

  getUserTasks(): void {
    this.store.dispatch(TasksAction.requestUserTasks())
  }

  getSingleTask(id: string) {
    this.store.dispatch(TasksAction.requestSingleTask({ id }))
  }

  createTask(task: Task) {
    this.store.dispatch(TasksAction.requestCreateTask({ task }))
  }

  editTask(task: Task): void {
    this.store.dispatch(TasksAction.requestEditTask({ task }))
  }

  deleteTask(id: string): void {
    this.store.dispatch(TasksAction.requestDeleteTask({ id }))
  }

  toogleDoneStatus(task: Task): void {
    this.store.dispatch(TasksAction.requestToggleDoneStatus({ task }))
  }
}
