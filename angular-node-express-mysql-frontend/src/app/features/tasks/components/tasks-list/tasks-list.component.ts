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
  tasks$: Observable<Task[]>;
  isTasksLoading$: Observable<boolean>;
  tabs: Tab[] = [
    { name: 'All', id: 'all' },
    { name: 'To Do', id: 'todo' },
    { name: 'Done', id: 'done' }
  ]
  activeTab: string = 'todo'

  constructor(
    private tasksStateFacage: TasksStateFacade,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.tasks$ = this.tasksStateFacage.userTasks$;
    this.isTasksLoading$ = this.tasksStateFacage.isUserTasksLoading$;
  }

  ngOnInit(): void {
    this.getUserTasks();
  }

  getUserTasks() {
    if (this.activeTab === 'all') this.tasksStateFacage.getUserTasks();
    else if(this.activeTab === 'todo') this.tasksStateFacage.getUserToDoTasks();
    else if(this.activeTab === 'done') this.tasksStateFacage.getUserDoneTasks();
  }

  changeTab(tabId: string) {
    this.activeTab = tabId;
    this.getUserTasks();
  }

  goToAddTaskPage() {
    this.router.navigate(['add'], { relativeTo: this.route })
  }

  myTrackingFn(index: number, task: Task): string {
    return task.id;
  }

}
