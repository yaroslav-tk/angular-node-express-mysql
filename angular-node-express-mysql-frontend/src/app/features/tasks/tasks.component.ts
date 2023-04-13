import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task, TasksTabs } from 'src/app/models/task.model';
import { TasksService } from '../../services/tasks.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks$!: Observable<Task[]>;
  tabs = [TasksTabs.toDo, TasksTabs.done]

  constructor(
    private tasksService: TasksService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.tasks$ = this.tasksService.getUserTasks();
  }

  goToAddTaskPage() {
    this.router.navigate(['add'], { relativeTo: this.route })
  }

  goToDoneTasks() {
    this.router.navigate(['done'], { relativeTo: this.route })
  }

}
