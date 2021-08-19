import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LogType } from 'src/app/models/log-type';
import { Task } from 'src/app/models/task';
import { LogService } from 'src/app/services/log.service';
import { TaskService } from 'src/app/services/task.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-task-add-dialog',
  templateUrl: './task-add-dialog.component.html',
  styleUrls: ['./task-add-dialog.component.scss']
})
export class TaskAddDialogComponent implements OnInit {

  //#region Form

  titleControl: FormControl = new FormControl('', [Validators.required]);

  taskForm: FormGroup = new FormGroup({
    title: this.titleControl,
  });

  //#endregion

  constructor(private logger: LogService, private taskService: TaskService) { }

  ngOnInit(): void {
  }

  //#region Public Methods

  /**
   * Adds a task to the list of current tasks
   */
  public createTask(): void {

    let task: Task = {
      id: uuid(),
      title: this.titleControl.value,
      isComplete: false
    }

    this.logger.debug(LogType.Task, `Creating new task [Task: ${task.id}]`);

    this.taskService.addTask(task);
  }

  //#endregion
}
