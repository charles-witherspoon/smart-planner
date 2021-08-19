import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { LogType } from 'src/app/models/log-type';
import { LogService } from 'src/app/services/log.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-delete-dialog',
  templateUrl: './task-delete-dialog.component.html',
  styleUrls: ['./task-delete-dialog.component.scss']
})
export class TaskDeleteDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private logger: LogService,
    private taskService: TaskService) { }

  ngOnInit(): void {
  }

  //#region Public Methods

  /**
   * Permanently removes a task from the task list
   */
  public deleteTask(): void {
    this.logger.debug(LogType.Task, 'Deleting task');

    this.taskService.deleteTask(this.data.id);
  }

  //#endregion
}
