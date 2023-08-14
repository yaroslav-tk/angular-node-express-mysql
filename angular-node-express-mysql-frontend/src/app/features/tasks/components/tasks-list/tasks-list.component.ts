import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task.model';
import { Tab } from 'src/app/shared/models/tab.model';
import { TasksStateFacade } from 'src/app/store/tasks/tasks.facade';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  allTasks$: Observable<Task[]>;
  todoTasks$: Observable<Task[]>;
  doneTasks$: Observable<Task[]>;
  isTasksLoading$: Observable<boolean>;
  tabs: Tab[] = [
    { name: $localize`All`, id: 'all' },
    { name: $localize`To do`, id: 'todo' },
    { name: $localize`Done`, id: 'done' }
  ]
  activeTab: string = 'todo'

  constructor(
    private tasksStateFacage: TasksStateFacade,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.allTasks$ = this.tasksStateFacage.userTasks$;
    this.todoTasks$ = this.tasksStateFacage.userTodoTasks$;
    this.doneTasks$ = this.tasksStateFacage.userDoneTasks$;
    this.isTasksLoading$ = this.tasksStateFacage.isUserTasksLoading$;
  }

  ngOnInit(): void {
    this.tasksStateFacage.getUserTasks()
  }

  changeTab(tabId: string) {
    this.activeTab = tabId;
  }

  goToAddTaskPage() {
    this.router.navigate(['add'], { relativeTo: this.route })
  }

  myTrackingFn(index: number, task: Task): string {
    return task.id;
  }

}
