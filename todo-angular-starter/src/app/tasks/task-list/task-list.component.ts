import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../core/services/task.service';
import { Task } from '../../core/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  showForm = false;
  editingTask?: Task;
  showDelete = false;
  deletingTask?: Task;

  constructor(private svc: TaskService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.svc.getAll().subscribe(data => this.tasks = data);
  }

  newTask() {
    this.editingTask = undefined;
    this.showForm = true;
  }

  editTask(t: Task) {
    this.editingTask = {...t};
    this.showForm = true;
  }

  saved(task: Task) {
    if (task.id) {
      this.svc.update(task).subscribe(() => { this.showForm = false; this.load(); });
    } else {
      this.svc.create(task).subscribe(() => { this.showForm = false; this.load(); });
    }
  }

  cancelForm() {
    this.showForm = false;
  }

  confirmDelete(t: Task) {
    this.deletingTask = t;
    this.showDelete = true;
  }

  doDelete() {
    if (!this.deletingTask) return;
    this.svc.delete(this.deletingTask.id!).subscribe(() => { this.showDelete = false; this.load(); });
  }

  cancelDelete() {
    this.showDelete = false;
  }
}
