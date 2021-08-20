import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogType } from 'src/app/models/log-type';
import { LogService } from 'src/app/services/log.service';
import { EventAddDialogComponent } from '../dialog/event-add-dialog/event-add-dialog.component';
import { TaskAddDialogComponent } from '../dialog/task-add-dialog/task-add-dialog.component';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.scss']
})
export class MonthViewComponent implements OnInit {

  constructor(private logger: LogService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  //#region Public Methods

  public addTask(): void {
    this.dialog.open(TaskAddDialogComponent);
  }

  public planDay(): void {
    this.logger.debug(LogType.Application, 'Plan day')
  }

  public addEvent(): void {
    this.dialog.open(EventAddDialogComponent);
  }

  public goToDay(): void {

  }
  //#endregion
}