import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskListComponent, TaskFormComponent, DeleteConfirmComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [TaskListComponent]
})
export class TasksModule {}
