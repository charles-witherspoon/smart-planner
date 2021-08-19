import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hour } from '../models/hour';
import { Day } from '../viewmodel/day';

@Injectable({
  providedIn: 'root'
})
export class DateService {


  //#region Private Properties

  private _currentDate: BehaviorSubject<Date>;

  private _currentDayAsHours: BehaviorSubject<Hour[]>;

  //#endregion

  constructor() {
    this._currentDate = new BehaviorSubject<Date>(new Date());

    const day: Day = new Day(this._currentDate.value);
    this._currentDayAsHours = new BehaviorSubject<Hour[]>(day.hours);
  }


  //#region Public Methods

  public get currentDate(): BehaviorSubject<Date> {
    return this._currentDate;
  }

  public get currentDayAsHours(): BehaviorSubject<Hour[]> {
    return this._currentDayAsHours;
  }

  //#endregion
}
