import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from 'src/app/models/task.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class TasksService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getUserTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('/api/tasks');
  }

  getSingleTask(id: string): Observable<Task> {
    return this.http.get<Task>(`/api/tasks/${id}`)
  }

  createTask(task: Task): void {
    this.http.post<Task>('/api/tasks/add', task)
      .subscribe(() => this.router.navigate(['/tasks']))
  }

  editTask(task: Task): void {
    this.http.put<Task>(`/api/tasks/edit/${task.id}`, task)
      .subscribe(() => this.router.navigate(['/tasks']))
  }

  markTaskAsDone(task: Task) {
    this.http.put<Task>('/api/tasks/markTaskAsDone', task)
      .subscribe();
  }

  deleteTask(id: string): void {
    this.http.delete(`/api/tasks/${id}`)
      .subscribe()
  }
}
