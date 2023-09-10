import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from 'src/app/models/task.model';
import { Observable, map } from 'rxjs';
import { environment } from '../../../core/environments/environment.prod';


@Injectable()
export class TasksService {
  private baseURL = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getUserTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseURL}/api/tasks`);
  }

  getSingleTask(id: string): Observable<Task> {
    return this.http.get<Task>(`${this.baseURL}/api/tasks/${id}`)
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.baseURL}/api/tasks/add`, task);
  }

  editTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.baseURL}/api/tasks/edit/${task.id}`, task);
  }

  toogleDoneStatus(task: Task) {
    return this.http.put<Task>(`${this.baseURL}/api/tasks/toogleDoneStatus`, task);
  }

  deleteTask(id: string) {
    return this.http.delete(`${this.baseURL}/api/tasks/${id}`);
  }
}
