import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LogType } from 'src/app/models/log-type';
import { DateService } from 'src/app/services/date.service';
import { LogService } from 'src/app/services/log.service';
import { EventAddDialogComponent } from '../dialog/event-add-dialog/event-add-dialog.component';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  //#region Public Properties

  @Input() public viewMode: string;

  @Input() public dateString: string;

  public calendarDay: number;

  public isToday$: BehaviorSubject<boolean>;

  public route: string;
  /**
   * The current page
   */

  public date: Date;

  //#endregion


  //#region Private Properties



  //#endregion

  constructor(private logger: LogService, private dialog: MatDialog, private router: Router, private _route: ActivatedRoute, private dateService: DateService) {
    this.viewMode = '';
    this.dateString = '';
    this.calendarDay = 0;
    this.isToday$ = new BehaviorSubject<boolean>(false);
    this.date = new Date();
    this.route = '';
  }

  ngOnInit(): void {

    // Route String
    this.route = this.router.url.split('/day?')[0]; // TODO: Clean this logic up

    // Param Check
    this._route.params.subscribe(params => {
      if (params['viewMode']) {
        this.viewMode = params['viewMode'];
      }
    });

    this._route.queryParams.subscribe(qparams => {
      if (qparams['date']) {
        this.dateString = qparams['date'];
      }
    })


    // Date Initialization
    this.date = new Date(this.dateString);

    this.calendarDay = this.date.getUTCDate();

    this.isToday$.next(this.isToday());
  }


  //#region Public Methods


  public planDay(): void {
    this.logger.debug(LogType.Application, 'Plan day')
  }

  public addEvent(): void {
    this.dialog.open(EventAddDialogComponent);
  }

  public goToCalendar(): void {
    this.router.navigate(['']);
  }

  public goToDay(): void {

    if (this.viewMode === 'day') {
      this.router.navigate(['']);
    }
    else {
      this.router.navigate(['/day', 'day'], { queryParams: { date: this.dateString } });
    }

  }

  public goToPreviousDay(): void {


    if (this.viewMode === 'day') {
      this.date.setDate(this.date.getDate() - 1);
      this.dateString = this.date.toLocaleString();
      this.isToday$.next(this.isToday());
    }
    else {

      let previousDay: Date = new Date(this.date.toDateString());
      previousDay.setDate(previousDay.getDate() - 1);

      this.router.navigate(['/day', 'day'], { queryParams: { date: previousDay } });
    }
  }

  public goToNextDay(): void {



    if (this.viewMode === 'day') {
      this.date.setDate(this.date.getDate() + 1);
      this.dateString = this.date.toLocaleString();
      this.isToday$.next(this.isToday());
    }
    else {

      let nextDay: Date = new Date(this.date.toDateString());
      nextDay.setDate(nextDay.getDate() + 1);

      this.router.navigate(['/day', 'day'], { queryParams: { date: nextDay } });
    }
  }

  //#endregion

  //#region Private Methods

  private isToday(): boolean {

    const currentDate: Date = this.dateService.currentDate.getValue();

    return this.date.getUTCFullYear() === currentDate.getUTCFullYear()
      && this.date.getUTCMonth() === currentDate.getUTCMonth()
      && this.date.getUTCDate() === currentDate.getUTCDate();
  }

  //#endregion
}
