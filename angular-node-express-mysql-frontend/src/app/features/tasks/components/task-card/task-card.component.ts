import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TasksStateFacade } from 'src/app/store/tasks/tasks.facade';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {
  @Input() task!: Task;

  constructor(
    private tasksStateFacade: TasksStateFacade,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  toogleDoneStatus(task: Task) {
    this.tasksStateFacade.toogleDoneStatus(task);
  }

  goToEditTaskPage(id: string) {
    this.router.navigate([`edit/${id}`], { relativeTo: this.route })
  }

  deleteBtnHandler(id: string) {
    this.tasksStateFacade.deleteTask(id);
  }
}
