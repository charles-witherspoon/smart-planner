import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogType } from 'src/app/models/log-type';
import { LogService } from 'src/app/services/log.service';
import { EventAddDialogComponent } from '../dialog/event-add-dialog/event-add-dialog.component';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  constructor(private logger: LogService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }


  //#region Public Methods


  public planDay(): void {
    this.logger.debug(LogType.Application, 'Plan day')
  }

  public addEvent(): void {
    this.dialog.open(EventAddDialogComponent);
  }

  //#endregion
}
