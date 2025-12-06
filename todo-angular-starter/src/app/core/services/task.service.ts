import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task.model';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class TaskService {
  private base = 'api/tasks';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.base);
  }

  create(task: Task): Observable<Task> {
    return this.http.post<Task>(this.base, task);
  }

  update(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.base}/${task.id}`, task);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.base}/${id}`);
  }
}
