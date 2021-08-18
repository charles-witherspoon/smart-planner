import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LogType } from 'src/app/models/log-type';
import { Task } from 'src/app/models/task';
import { LogService } from 'src/app/services/log.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit {

  //#region Form

  titleControl: FormControl = new FormControl('', [Validators.required]);

  taskForm: FormGroup = new FormGroup({
    title: this.titleControl,
  });

  //#endregion
  constructor(private logger: LogService, private taskService: TaskService) { }

  ngOnInit(): void {
  }

  createTask(): void {
    this.logger.debug(LogType.Task, 'Creating new task');

    let task: Task = {
      title: this.titleControl.value,
      isComplete: false
    }

    this.taskService.addTask(task);
  }
}
