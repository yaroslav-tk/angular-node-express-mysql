import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TasksService } from 'src/app/services/tasks.service';
import { TasksStateFacade } from 'src/app/store/tasks/tasks.facade';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
  @Input() tasks: Task[] | null | undefined = [];

  constructor(
    private tasksStateFacade: TasksStateFacade,
    // private tasksService: TasksService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  toogleDoneStatus(task: Task) {
    this.tasksStateFacade.toogleDoneStatus(task);
    // this.tasksService.toogleDoneStatus(task);
    // this.tasks?.forEach(t => t.id === task.id ? t.done = !task.done : t)
  }

  goToEditTaskPage(id: string) {
    this.router.navigate([`edit/${id}`], { relativeTo: this.route })
  }

  deleteBtnHandler(id: string) {
    this.tasksStateFacade.deleteTask(id);
  }

  myTrackingFn(index: number, task: Task): string {
    return task.id;
  }

}
