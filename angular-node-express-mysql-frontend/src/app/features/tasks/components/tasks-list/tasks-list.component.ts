import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from 'src/app/models/task.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
  @Input() tasks: Task[] | null | undefined = [];

  constructor(
    private tasksService: TasksService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  markTaskAsDone(task: Task) {
    this.tasksService.markTaskAsDone(task);
    this.tasks?.forEach(t => t.id === task.id ? t.done = !task.done : t)
  }

  goToEditTaskPage(id: string) {
    this.router.navigate([`edit/${id}`], { relativeTo: this.route })
  }

  async deleteBtnHandler(id: string) {
    await this.tasksService.deleteTask(id);
    this.tasks = this.tasks?.filter(task => task.id !== id)
  }

}
