import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LogType } from 'src/app/models/log-type';
import { LogService } from 'src/app/services/log.service';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-edit-dialog',
  templateUrl: './task-edit-dialog.component.html',
  styleUrls: ['./task-edit-dialog.component.scss']
})
export class TaskEditDialogComponent implements OnInit {

  //#region Form
  public titleControl: FormControl;

  public taskForm: FormGroup;

  //#endregion

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private logger: LogService, private taskService: TaskService) {
    this.titleControl = new FormControl('', [Validators.required]);
    this.taskForm = new FormGroup({
      title: this.titleControl
    })
  }

  ngOnInit(): void {
  }


  //#region Public Methods

  /**
   * Updates a task
   */
  public editTask(): void {
    const currentTask: Task = this.data.task;


    let changes: Task = {
      id: currentTask.id,
      title: this.titleControl.value,
      isComplete: false
    }

    this.logger.debug(LogType.Task, `Editing task [Task: ${this.data.task.id}]`);

    this.taskService.editTask(changes);
  }
  //#endregion
}
