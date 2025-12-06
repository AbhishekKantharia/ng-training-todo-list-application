import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../core/models/task.model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  @Input() task?: Task;
  @Output() saved = new EventEmitter<Task>();
  @Output() cancel = new EventEmitter<void>();

  form = this.fb.group({
    id: [null],
    assignedTo: ['', Validators.required],
    status: ['Not Started', Validators.required],
    dueDate: [''],
    priority: ['Normal', Validators.required],
    comments: ['']
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    if (this.task) this.form.patchValue(this.task);
  }

  onSave() {
    if (this.form.valid) {
      this.saved.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
