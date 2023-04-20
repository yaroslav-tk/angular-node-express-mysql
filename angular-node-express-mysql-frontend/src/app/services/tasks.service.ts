import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from 'src/app/models/task.model';
import { Observable, map } from 'rxjs';


@Injectable()
export class TasksService {

  constructor(private http: HttpClient) { }

  getUserTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('/api/tasks');
  }

  getSingleTask(id: string): Observable<Task> {
    return this.http.get<Task>(`/api/tasks/${id}`)
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>('/api/tasks/add', task);
  }

  editTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`/api/tasks/edit/${task.id}`, task);
  }

  markTaskAsDone(task: Task) {
    this.http.put<Task>('/api/tasks/markTaskAsDone', task)
      .subscribe();
  }

  deleteTask(id: string) {
    return this.http.delete(`/api/tasks/${id}`);
  }
}
