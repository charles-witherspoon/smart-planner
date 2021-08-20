import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { Event } from 'src/app/models/event';
import { Hour } from 'src/app/models/hour';
import { LogType } from 'src/app/models/log-type';
import { DateService } from 'src/app/services/date.service';
import { LogService } from 'src/app/services/log.service';
import { EventAddDialogComponent } from '../dialog/event-add-dialog/event-add-dialog.component';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  //#region Public Properties

  public date$: BehaviorSubject<Date>;

  public hour$: BehaviorSubject<Hour[]>;

  //#endregion

  constructor(private logger: LogService, private dateService: DateService, private dialog: MatDialog) {
    this.date$ = new BehaviorSubject<Date>(new Date());
    this.hour$ = new BehaviorSubject<Hour[]>([]);
  }

  ngOnInit(): void {
    this.date$ = this.dateService.currentDate;
    this.hour$ = this.dateService.currentDayAsHours;
  }


  //#region Public Methods

  public onClickEvent(event: Event): void {
    this.logger.debug(LogType.Event, 'Clicked event')
  }

  public onClickTimeBlock(): void {
    this.logger.debug(LogType.Event, 'Clicked time block')

    this.dialog.open(EventAddDialogComponent);
  }

  //#endregion
}
