import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LogType } from 'src/app/models/log-type';
import { LogService } from 'src/app/services/log.service';
import { TaskService } from 'src/app/services/task.service';

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

  public editTask(): void {
    this.logger.debug(LogType.Task, `Editing task [Task: ${this.data.task.id}]`);

  }
  //#endregion
}
