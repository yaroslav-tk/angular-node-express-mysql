import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task, TasksTabs } from 'src/app/models/task.model';
import { Observable } from 'rxjs';
import { TasksStateFacade } from 'src/app/store/tasks/tasks.facade';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks$: Observable<Task[]>;
  isTasksLoading$: Observable<boolean>;
  tabs = [TasksTabs.toDo, TasksTabs.done]

  constructor(
    private tasksStateFacage: TasksStateFacade,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.tasks$ = this.tasksStateFacage.userTasks$;
    this.isTasksLoading$ = this.tasksStateFacage.isUserTasksLoading$;
  }

  ngOnInit(): void {
    this.tasksStateFacage.getUserTasks();
  }

  goToAddTaskPage() {
    this.router.navigate(['add'], { relativeTo: this.route })
  }

  goToDoneTasks() {
    this.router.navigate(['done'], { relativeTo: this.route })
  }

}
