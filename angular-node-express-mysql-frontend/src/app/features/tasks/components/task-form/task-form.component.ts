import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Task } from 'src/app/models/task.model';
import { TasksStateFacade } from 'src/app/store/tasks/tasks.facade';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  form: FormGroup;
  mode?: string;
  task$!: Observable<Task | null>;
  task!: Task;
  taskId!: string;

  constructor(
    private fb: FormBuilder,
    private tasksStateFacade: TasksStateFacade,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      description: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.mode = this.route.snapshot.url[0].path;

    if (this.mode === 'edit') {
      this.task$ = this.route.paramMap.pipe(
        switchMap((params: any) => {
          this.taskId = params.get('id');
          this.tasksStateFacade.getSingleTask(this.taskId)
          return this.tasksStateFacade.task$;
        })
      )

      this.task$.subscribe((task: any) => {
        this.task = task[0];
        this.form.patchValue({
          ...this.task
        });
      });
    }
  }

  onSubmit() {
    if (this.mode === 'add') {
      const newTask = this.form.value;
      this.tasksStateFacade.createTask(newTask);
    } else if (this.mode === 'edit') {
      const updatedTask = {
        ...this.task,
        description: this.form.value.description
      }

      this.tasksStateFacade.editTask(updatedTask);
    }
  }
}
