import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TasksService } from './services/tasks.service';
import { TasksComponent } from './tasks.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TasksStateFacade } from 'src/app/store/tasks/tasks.facade';



@NgModule({
  declarations: [
    TasksComponent,
    TasksListComponent,
    TaskCardComponent,
    TaskFormComponent
  ],
  imports: [
    SharedModule,
    TasksRoutingModule
  ],
  providers: [
    TasksService,
    TasksStateFacade
  ],
  exports: [
    SharedModule,
    TasksComponent
  ]
})
export class TasksModule { }
