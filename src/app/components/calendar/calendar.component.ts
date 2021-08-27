import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  //#region Private Properties

  private _currentDate: BehaviorSubject<Date>;

  //#endregion


  //#region Public Properties

  public currentDate: string;


  public calendarDates: Date[];
  //#endregion

  constructor(private router: Router, private dateService: DateService) {
    this._currentDate = this.dateService.currentDate;
    this.currentDate = this._currentDate.value.toUTCString();
    this.calendarDates = [];
  }

  ngOnInit(): void {
    this.initializeCalendarDates();
  }

  //#region Public Methods


  public goToDay(): void {
    this.router.navigate(['day']);
  }

  //#endregion


  //#region Private Methods

  private initializeCalendarDates(): void {

    // Get first day of month
    const firstDay: Date = this.getFirstDayOfMonth(this._currentDate.value);

    // Fill in previous month's days
    let previousMonthDate: Date = new Date(firstDay);

    previousMonthDate.setUTCDate(previousMonthDate.getUTCDate() - firstDay.getUTCDay());

    while (previousMonthDate.toUTCString() !== firstDay.toUTCString()) {
      this.calendarDates.push(new Date(previousMonthDate));
      previousMonthDate.setUTCDate(previousMonthDate.getUTCDate() + 1);
    }

    // Fill in current month's days
    let month: number = firstDay.getUTCMonth();
    let currentMonthDate: Date = firstDay;

    while (currentMonthDate.getUTCMonth() === month) {
      this.calendarDates.push(new Date(currentMonthDate));
      currentMonthDate.setUTCDate(currentMonthDate.getUTCDate() + 1);
    }

    // Fill in next month's days
    while (currentMonthDate.getUTCDay() !== 0) {
      this.calendarDates.push(new Date(currentMonthDate));
      currentMonthDate.setUTCDate(currentMonthDate.getUTCDate() + 1);
    }

  }


  private getFirstDayOfMonth(currentDate: Date): Date {

    let firstDay: Date = new Date(currentDate);
    firstDay.setUTCDate(1);
    firstDay.setUTCHours(0);
    firstDay.setUTCMinutes(0);

    return firstDay;
  }

  //#endregion
}
